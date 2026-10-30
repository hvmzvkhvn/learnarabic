// Checks that every Arabic word in the curriculum and the Playbook carries vowel marks (tashkeel), since learners read fully vowelled text.
// Single letters are skipped.
//
//   npm run lint:marks
import { createServer } from 'vite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const server = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { allItems } = await server.ssrLoadModule('/src/curriculum/bank.js')
const PB = await server.ssrLoadModule('/src/data/playbook/index.js')

const issues = []
const playbook = [
  ...PB.allLines().map((l, i) => ({ id: `${l.group} #${i + 1}`, bn: l.bn })),
  ...PB.allWords().map((w) => ({ id: `Playbook word ${w.en}`, bn: w.bn })),
  ...[...PB.youngBooks, ...PB.olderBooks, ...PB.lookScenes, ...PB.buildTasks].map((b) => ({ id: `Playbook title ${b.title.en}`, bn: b.title.bn })),
]
const items = [...allItems().filter((it) => it.bn && it.kind !== 'letter'), ...playbook]
for (const it of items) {
  const bare = it.bn.split(/[\s،؛؟!.…"“”:]+/).filter((w) => /[ء-ي]{2,}/.test(w) && !/[ً-ْٰ]/.test(w))
  if (bare.length) issues.push(`${it.id}: no vowel marks on ${bare.join(' ')}`)
}
await server.close()
console.log(`Checked ${items.length} items.`)
if (issues.length) {
  console.log(issues.join('\n'))
  process.exitCode = 1
} else console.log('No issues.')
