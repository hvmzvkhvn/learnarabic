// Checks every Super challenge set:
//   - each item has Arabic + English and no transliteration, and every word is vowelled
//   - every word is one the learner has already met by the end of that unit (same track). Arabic glues small words
//     on: "and", "the", "in/with", "to/for" at the front (وَ، الْ، بِ، لِ) and "my/your/his", plural and feminine
//     endings at the back (-ي، -كَ، -هُ، -ات، -ونَ، -ة). Those are stripped, so كِتَابِي is fine once كِتَاب was taught.
//   - script-unit sets (set.script = true) use only letters taught so far (vowel marks are not counted)
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

const PUNCT = /[،؛؟!?,."“”«»\-—:;()…]/g
const MARKS = /[\u064B-\u065F\u0670\u0640]/g
const clean = (t) => t.replace(PUNCT, '').trim()
// compare without vowel marks, with one alif, one yaa and taa marbuuta as haa
const plain = (t) => clean(t).replace(MARKS, '').replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه')
// High-frequency function words allowed in any sentence even if a unit never spelled them out
// (and, in, on, from, to, about, with, this, he, she, I, no, yes, very, only, all, what, O (calling), or, then, but…).
// They may carry a prefix or ending too: لِكُلِّ (for every), عِنْدِي (I have).
const GLUE = new Set('و في على من الي عن مع هذا هذه هو هي انا انت نحن هم لا نعم جدا فقط كل ما يا او ثم لكن هل هناك هنا عند قد لقد الان اليوم ايضا قليلا كثيرا بعد قبل كان كانت ذلك تلك يوم ان'.split(' '))
const PREFIXES = ['وال', 'فال', 'بال', 'كال', 'لل', 'ال', 'و', 'ف', 'ب', 'ل', 'ك', 'س']
const VERB_PREFIXES = ['ا', 'ت', 'ي', 'ن']
const SUFFIXES = ['ها', 'هم', 'كم', 'نا', 'ني', 'ات', 'ون', 'ين', 'ان', 'وا', 'ك', 'ه', 'ي', 'ا', 'ت']
const stems = (word) => {
  const w = plain(word)
  const out = new Set([w])
  const fronts = [w, ...PREFIXES.filter((p) => w.startsWith(p) && w.length - p.length >= 2).map((p) => w.slice(p.length))]
  for (const f of [...fronts]) for (const p of VERB_PREFIXES) if (f.startsWith(p) && f.length - p.length >= 2) fronts.push(f.slice(p.length))
  for (const f of fronts) {
    out.add(f)
    for (const e of SUFFIXES) {
      if (!f.endsWith(e) || f.length - e.length < 2) continue
      const st = f.slice(0, -e.length)
      out.add(st)
      if (st.endsWith('ت')) out.add(st.slice(0, -1) + 'ه') // حَقِيبَتُكِ → حَقِيبَة
    }
  }
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
        if (it.kind === 'letter' || it.kind === 'sign' || it.kind === 'syllable') for (const ch of it.bn.replace(MARKS, '')) taughtChars.add(ch)
        const toks = it.tokens && it.kind !== 'word' ? it.tokens : [it.bn, ...it.bn.split(' ')]
        for (const t of toks) for (const part of [t, ...t.split(' ')]) for (const s of stems(clean(part))) taughtWords.add(s)
        if (it.kind === 'word') for (const ch of it.bn.replace(MARKS, '')) taughtChars.add(ch)
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
      if (/[A-Za-z]/.test(bn)) here(`Latin letters in Arabic: ${bn}`)
      const bare = bn.split(' ').map(clean).filter((w) => /[\u0621-\u064A]{2,}/.test(w) && !/[\u064B-\u0652\u0670]/.test(w))
      if (bare.length) here(`no vowel marks on ${bare.join(' ')}`)
      if (/[Ѐ-ӿ]/.test(bn + en)) here(`stray Cyrillic: ${bn} / ${en}`)
      if (set.script) {
        const bad = [...clean(bn).replace(MARKS, '')].filter((ch) => ch !== ' ' && !taughtChars.has(ch))
        if (bad.length) here(`letters not taught yet (${[...new Set(bad)].join(' ')}): ${bn}`)
      } else {
        const unknown = bn.split(' ').map(clean).filter(Boolean).filter((w) => !/^[٠-٩0-9]+$/.test(w) && ![...stems(w)].some((s) => GLUE.has(s) || taughtWords.has(s)))
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
