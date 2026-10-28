// Checks every story chat: all links resolve, nothing dead-ends, every ending can be reached, every word is vowelled,
// and the "you" is right:
//   • a character's line uses the boy's "you" (أَنْتَ، -كَ), and then must have a girl's version (`f`) that uses أَنْتِ، -كِ
//   • the learner's replies use the "you" for the character's own gender (cast `female: true`). Wrong-on-purpose
//     replies, like كَيْفَ حَالُكَ to Grandma, are allowed when they lower the meter.
//
//   npm run lint:stories
import { createServer } from 'vite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { words, saysYouTo, hasMark } from './arabic-you.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const server = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { stories } = await server.ssrLoadModule('/src/data/stories.js')
await server.close()

const issues = []
let beats = 0
const unvowelled = (where, ...texts) => {
  const bad = texts.filter(Boolean).flatMap((t) => words(t).filter((w) => /[\u0621-\u064A]{2,}/.test(w) && !hasMark(w)))
  if (bad.length) issues.push(`${where}: no vowel marks on ${bad.join(' ')}`)
}

for (const st of stories) {
  const at = (id) => `${st.id}/${id}`
  const nodes = st.nodes
  const refs = (n) => (n.next ? [n.next] : []).concat((n.choice ?? []).map((o) => o.next), (n.branch ?? []).map((r) => r.next))

  if (!nodes[st.start]) issues.push(`${st.id}: start node "${st.start}" missing`)
  for (const [id, n] of Object.entries(nodes)) {
    if (!n.sys && !n.bn && !n.choice && !n.branch && !n.end) issues.push(`${at(id)}: empty node`)
    for (const r of refs(n)) if (!nodes[r]) issues.push(`${at(id)}: links to missing node "${r}"`)
    if (n.bn) {
      beats += n.f ? 2 : 1
      if (!n.roman || !n.en) issues.push(`${at(id)}: missing roman/en`)
      if (!n.who || !st.cast[n.who]) issues.push(`${at(id)}: unknown speaker "${n.who}"`)
      if (!n.next) issues.push(`${at(id)}: message with no next`)
      unvowelled(at(id), n.bn, n.f?.bn)
      const you = saysYouTo(n.bn)
      if (you.female) issues.push(`${at(id)}: the girl's "you" in the boy's version → ${n.bn}`)
      if (you.male && !n.f) issues.push(`${at(id)}: speaks to the learner as a boy but has no girl's version → ${n.bn}`)
      if (n.f) {
        if (!n.f.bn || !n.f.roman) issues.push(`${at(id)}: girl's version incomplete`)
        else if (saysYouTo(n.f.bn).male) issues.push(`${at(id)}: the boy's "you" in the girl's version → ${n.f.bn}`)
      }
    }
    // the learner speaks to the character in the scene (stories have one character)
    const other = Object.values(st.cast)[0]
    for (const [i, o] of (n.choice ?? []).entries()) {
      beats += o.f ? 2 : 1
      if (!o.bn || !o.roman || !o.en || typeof o.meter !== 'number') issues.push(`${at(id)}#${i}: option incomplete`)
      unvowelled(`${at(id)}#${i}`, o.bn, o.f?.bn)
      for (const bn of [o.bn, o.f?.bn].filter(Boolean)) {
        const you = saysYouTo(bn)
        if (o.meter >= 0 && (other.female ? you.male : you.female))
          issues.push(`${at(id)}#${i}: the "you" for a ${other.female ? 'man' : 'woman'}, said to ${other.en} → ${bn}`)
      }
    }
    if (n.branch && !n.branch.some((r) => r.min === undefined)) issues.push(`${at(id)}: branch has no fallback`)
  }
  const ends = Object.entries(nodes).filter(([, n]) => n.end).map(([id]) => id)
  if (ends.length < 2) issues.push(`${st.id}: needs at least 2 endings`)

  // explore every path (meter = running total) to see which endings are reachable and that nothing loops forever
  const reached = new Set()
  const seen = new Set()
  const walk = (id, meter, depth) => {
    if (depth > 80) return issues.push(`${st.id}: possible loop near ${id}`)
    const n = nodes[id]
    if (!n) return
    const key = `${id}@${meter}`
    if (seen.has(key)) return
    seen.add(key)
    if (n.end) return reached.add(id)
    if (n.branch) return walk(n.branch.find((r) => r.min === undefined || meter >= r.min).next, meter, depth + 1)
    if (n.choice) return n.choice.forEach((o) => walk(o.next, Math.max(0, Math.min(100, meter + o.meter)), depth + 1))
    if (n.next) walk(n.next, meter, depth + 1)
  }
  walk(st.start, st.meter.start, 0)
  ends.filter((e) => !reached.has(e)).forEach((e) => issues.push(`${st.id}: ending "${e}" can never be reached`))
  const tiers = new Set([...reached].map((e) => nodes[e].end.tier))
  console.log(`${st.id.padEnd(12)} ${Object.keys(nodes).length} nodes · endings reachable: ${[...reached].map((e) => nodes[e].end.tier).join(', ')}`)
  if (!tiers.has('great')) issues.push(`${st.id}: the best ending is unreachable`)
  for (const k of st.keys ?? []) if (!nodes[k]?.bn) issues.push(`${st.id}: key phrase "${k}" is not a spoken line`)
}
console.log(`\n${stories.length} stories, ${beats} spoken lines.`)
console.log(issues.length ? issues.join('\n') : 'No issues.')
if (issues.length) process.exitCode = 1
