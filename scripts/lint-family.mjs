// Checks every Family conversation line:
//   • the "you" matches the listener: no أَنْتِ / -كِ to a boy or man, no أَنْتَ / -كَ to a girl or woman
//     (the listener is the line's `to`, else the person who spoke just before, else the person who speaks next)
//   • every Arabic word carries vowel marks
//   • every line has Arabic, transliteration and English; young lines have a picture cue
//
//   npm run lint:family
import { createServer } from 'vite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const server = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const F = await server.ssrLoadModule('/src/data/family.js')

const words = (bn) => bn.split(/[\s،؛؟!.…"“”:]+/).filter(Boolean)
// words that end in كَ / كِ but are not "your" / "you": ذٰلِكَ، هُنَاكَ، تِلْكَ… and اِحْكِ ("tell!", to a boy or man).
// A word with ال (الْكَعْكَ) never carries "your".
const NOT_YOU = new Set(['ذٰلِكَ', 'هُنَاكَ', 'كَذٰلِكَ', 'لِذٰلِكَ', 'تِلْكَ', 'بِذٰلِكَ', 'اِحْكِ'])
const suffix = (w, k) => w.length > 2 && w.endsWith(k) && !NOT_YOU.has(w) && !/^(ال|[وفب]َ?ال|لِل)/.test(w)
const MASC = (w) => w === 'أَنْتَ' || suffix(w, 'كَ')
const FEM = (w) => w === 'أَنْتِ' || suffix(w, 'كِ')
const hasMark = (w) => /[ً-ْٰ]/.test(w)
const issues = []
let lines = 0

for (const track of ['young', 'older']) {
  for (const sc of F.scenes[track]) {
    sc.lines.forEach((l, i) => {
      lines++
      const at = `${track}/${sc.key} #${i + 1}`
      if (!l.bn || !l.roman || !l.en) issues.push(`${at}: missing bn / roman / en`)
      if (!F.roster[l.who]) issues.push(`${at}: unknown speaker "${l.who}"`)
      if (/[؀-ۿ]/.test(l.roman)) issues.push(`${at}: Arabic script inside the transliteration`)
      if (track === 'young' && !l.art) issues.push(`${at}: no picture cue`)
      const bare = words(l.bn).filter((w) => /[ء-ي]{2,}/.test(w) && !hasMark(w))
      if (bare.length) issues.push(`${at}: no vowel marks on ${bare.join(' ')}`)

      const before = sc.lines.slice(0, i).reverse().find((x) => x.who !== l.who)
      const after = sc.lines.slice(i + 1).find((x) => x.who !== l.who)
      const to = l.to ?? before?.who ?? after?.who
      const listener = F.roster[to]
      if (!listener) return
      const ws = words(l.bn)
      if (listener.female && ws.some(MASC)) issues.push(`${at}: the "you" for a man, said to ${listener.en} → ${l.bn}`)
      if (!listener.female && ws.some(FEM)) issues.push(`${at}: the "you" for a woman, said to ${listener.en} → ${l.bn}`)
    })
  }
}
await server.close()
console.log(`Checked ${lines} lines in ${F.scenes.young.length + F.scenes.older.length} scenes.`)
if (issues.length) {
  console.log(issues.join('\n'))
  console.log('\n(A line spoken to someone other than the last speaker needs `to` — the sixth field of L().)')
  process.exitCode = 1
} else console.log('No issues.')
