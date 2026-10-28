// Checks that every Arabic word in the curriculum carries vowel marks (tashkeel), since learners read fully vowelled text.
// Single letters and Super challenges (which are meant to be read without help) are skipped.
//
//   npm run lint:marks
import { createServer } from 'vite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const server = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { allItems } = await server.ssrLoadModule('/src/curriculum/bank.js')

const issues = []
const items = allItems().filter((it) => it.bn && it.kind !== 'letter' && !it.id.startsWith('super:'))
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
