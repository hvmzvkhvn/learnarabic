// Checks every Super challenge set:
//   - each item has Urdu + English and no transliteration
//   - every word is one the learner has already met by the end of that unit (same track) — plural and oblique
//     endings like -وں, -یں, -ے are forgiven, so "کتابیں" is fine if "کتاب" was taught
//   - script-unit sets (set.script = true) use only letters and vowel marks taught so far
//   - the set is long enough and sentences are really longer than the unit's own
//
//   npm run lint:super            (add --strict to treat unknown words as errors)
import { createServer } from 'vite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const strict = process.argv.includes('--strict')
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const server = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { tracks } = await server.ssrLoadModule('/src/curriculum/tracks.js')
const { SUPER } = await server.ssrLoadModule('/src/data/super/index.js')
const { bank } = await server.ssrLoadModule('/src/curriculum/bank.js')
await server.close()

const PUNCT = /[۔،؟!?,."“”\-—:;()…]/g
const clean = (t) => t.replace(PUNCT, '').trim()
const ENDINGS = ['وں', 'یں', 'یاں', 'ئیں', 'ے', 'ی', 'ا', 'و']
// A few high-frequency function words are allowed in any sentence even if a unit never spelled them out
// (and, but, so, this, that, very, a little, is/are, was, of, in, from, to, on…). Every content word must have been taught.
const GLUE = new Set('اور لیکن تو یہ وہ بہت تھوڑا تھوڑی ہے ہیں ہوں ہو تھا تھی تھے کا کی کے میں سے کو پر نے بھی نہیں نہ ہی کہ کیا جب اب آج کل ساتھ لیے پھر ایک سب کچھ یہاں وہاں ہاں جی اپنا اپنی اپنے بھی مگر تک پاس ہوتا ہوتی ہوتے ہو گیا گئی گئے رہا رہی رہے آیا آئی کہا دی دیا بعد پہلے مجھے چاہیے'.split(' '))
// Verb forms count as taught when the "to ___" form was: پیتے / پیتی / پیو → پینا, دیکھتے → دیکھنا
const VERB_ENDINGS = ['تا', 'تی', 'تے', 'یں', 'ؤ', 'و', 'ے', 'ا', 'ی']
const stems = (w) => {
  const out = new Set([w])
  for (const e of VERB_ENDINGS) if (w.length > e.length && w.endsWith(e)) out.add(w.slice(0, -e.length) + 'نا')
  // gender / oblique forms of -ا and -ہ words: میری میرے → میرا, کالی → کالا, ستارے → ستارہ
  if (/[یے]$/.test(w)) out.add(w.slice(0, -1) + 'ا')
  if (w.endsWith('ے')) out.add(w.slice(0, -1) + 'ہ').add(w.slice(0, -1) + 'یہ')
  out.add(w + 'نا') // a bare verb stem: جیت → جیتنا
  for (const e of ENDINGS) if (w.length > e.length + 1 && w.endsWith(e)) out.add(w.slice(0, -e.length))
  return out
}

let problems = 0
let unknownTotal = 0
let sets = 0
let items = 0
for (const [trackKey, track] of Object.entries(tracks)) {
  const taughtWords = new Set()
  const taughtChars = new Set()
  track.units.forEach((u) => {
    for (const l of u.lessons) {
      for (const id of [...(l.learn ?? []), ...(l.practice ?? []), ...(l.superIds ?? [])]) {
        const it = bank.get(id)
        if (!it || it.id.startsWith('super:')) continue
        if (it.kind === 'letter' || it.kind === 'sign' || it.kind === 'syllable') for (const ch of it.bn) taughtChars.add(ch)
        const toks = it.tokens && it.kind !== 'word' ? it.tokens : [it.bn, ...it.bn.split(' ')]
        for (const t of toks) for (const part of [t, ...t.split(' ')]) for (const s of stems(clean(part))) taughtWords.add(s)
        if (it.kind === 'word') for (const ch of it.bn) taughtChars.add(ch)
      }
    }
    const set = SUPER[u.id]
    if (!set) return
    sets++
    const here = (msg) => {
      problems++
      console.log(`${trackKey}/${u.id}: ${msg}`)
    }
    if (!set.items?.length || set.items.length < 5) here(`only ${set.items?.length ?? 0} items (need at least 5)`)
    const seen = new Set()
    for (const [bn, en] of set.items ?? []) {
      items++
      if (!bn || !en) here(`incomplete item ${JSON.stringify([bn, en])}`)
      if (seen.has(bn)) here(`duplicate: ${bn}`)
      seen.add(bn)
      if (/[A-Za-z]/.test(bn)) here(`Latin letters in Urdu: ${bn}`)
      if (/[Ѐ-ӿ]/.test(bn + en)) here(`stray Cyrillic: ${bn} / ${en}`)
      if (set.script) {
        const bad = [...clean(bn)].filter((ch) => ch !== ' ' && !taughtChars.has(ch) && !'\u200c\u200d'.includes(ch))
        if (bad.length) here(`letters not taught yet (${[...new Set(bad)].join(' ')}): ${bn}`)
      } else {
        const unknown = bn.split(' ').map(clean).filter(Boolean).filter((w) => !/^[۰-۹0-9]+$/.test(w) && !GLUE.has(w) && ![...stems(w)].some((s) => taughtWords.has(s)))
        if (unknown.length) {
          unknownTotal += unknown.length
          console.log(`${strict ? 'ERROR' : 'note '} ${trackKey}/${u.id}: not taught yet → ${unknown.join(' ')}   in: ${bn}`)
          if (strict) problems++
        }
        if (bn.split(' ').length < (trackKey === 'young' ? 4 : 5)) here(`sentence is short (${bn.split(' ').length} words): ${bn}`)
      }
    }
  })
}
console.log(`\n${sets} sets, ${items} items, ${unknownTotal} words not found in the taught list${strict ? '' : ' (notes only)'}.`)
console.log(problems ? `${problems} problem(s).` : 'No issues.')
process.exit(problems ? 1 : 0)
