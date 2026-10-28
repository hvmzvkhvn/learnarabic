// Checks every Family conversation line against the address rules:
//   • Sara (the child) never says تم-forms to an elder (friends like Ali/Hina are fine)
//   • elders never say آپ-forms to Sara
//   • every line has Urdu, romanisation and English; young lines have a picture cue
//
//   npm run lint:family
import { createServer } from 'vite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const server = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const F = await server.ssrLoadModule('/src/data/family.js')

// whole words only: تم, تمہارا/ی/ے, تمہیں, and the very informal تو / تجھے / تیرا
const W = (alts) => new RegExp(`(^|[\\s،۔؟!])(${alts})(?=$|[\\s،۔؟!])`)
const TUMI = W('تم|تمہارا|تمہاری|تمہارے|تمہیں|تجھے|تیرا|تیری|تیرے')
const APNI = W('آپ')
const ELDERS = ['am', 'ab', 'nana', 'nani', 'dada', 'ch', 'dr', 'old', 'shop']
const issues = []
let lines = 0

for (const track of ['young', 'older']) {
  for (const sc of F.scenes[track]) {
    const peerScene = sc.lines.some((l) => l.who === 'fr' || l.who === 'nila')
    sc.lines.forEach((l, i) => {
      lines++
      const at = `${track}/${sc.key} #${i + 1}`
      if (!l.bn || !l.roman || !l.en) issues.push(`${at}: missing bn / roman / en`)
      if (!F.roster[l.who]) issues.push(`${at}: unknown speaker "${l.who}"`)
      if (/[\u0600-\u06FF]/.test(l.roman)) issues.push(`${at}: Urdu script inside the romanisation`)
      if (l.who === 't' && TUMI.test(l.bn) && !peerScene) issues.push(`${at}: Sara uses a تم-form → ${l.bn}`)
      if (ELDERS.includes(l.who) && APNI.test(l.bn)) issues.push(`${at}: ${l.who} uses an آپ-form to Sara → ${l.bn}`)
      if (track === 'young' && !l.art) issues.push(`${at}: no picture cue`)
    })
  }
}
await server.close()
console.log(`Checked ${lines} lines in ${F.scenes.young.length + F.scenes.older.length} scenes.`)
if (issues.length) {
  console.log(issues.join('\n'))
  console.log('\n(Sara speaking to a friend by name, e.g. "علی، تم…", is correct even where flagged in a scene with no friend line — check it.)')
  process.exitCode = 1
} else console.log('No issues.')
