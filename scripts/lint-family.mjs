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
import { words, saysYouTo, hasMark } from './arabic-you.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const server = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const F = await server.ssrLoadModule('/src/data/family.js')

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
      const you = saysYouTo(l.bn)
      if (listener.female && you.male) issues.push(`${at}: the "you" for a man, said to ${listener.en} → ${l.bn}`)
      if (!listener.female && you.female) issues.push(`${at}: the "you" for a woman, said to ${listener.en} → ${l.bn}`)
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
