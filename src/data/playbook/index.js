// Everything in the Playbook, and who sees what.
//   5–7   : picture books (one line a page), Look & Learn, Build the scene
//   8–12  : picture books (longer), Look & Learn, Build the scene
//   13–15 : the same as 8–12
//   16+   : region storyboards (opened from Explore) and the road-to-1947 timeline, plus the books
import { youngBooks, olderBooks } from './books'
import { lookScenes, buildTasks } from './scenes'
import { regionStoryboards, timelineStory } from './storyboards'

export { youngBooks, olderBooks, lookScenes, buildTasks, regionStoryboards, timelineStory }

export const booksFor = (trackKey) => (trackKey === 'young' ? youngBooks : olderBooks)
export const hasTimeline = (trackKey) => trackKey === 'senior' || trackKey === 'adult'
export const bookById = (trackKey, id) => booksFor(trackKey).find((b) => b.id === id)

/** Every Urdu line in the Playbook (for the audio build and the /review page). */
export function allLines() {
  const out = []
  const book = (group, b) => b.pages.forEach((pg) => out.push({ group, bn: pg.bn, roman: pg.roman, en: pg.en }))
  youngBooks.forEach((b) => book('Playbook · picture books (5–7)', b))
  olderBooks.forEach((b) => book('Playbook · picture books (8–15)', b))
  Object.values(regionStoryboards).forEach((s) => s.panels.forEach((pg) => out.push({ group: 'Playbook · region storyboards (16+)', bn: pg.bn, roman: pg.roman, en: pg.en })))
  timelineStory.panels.forEach((pg) => out.push({ group: 'Playbook · road to 1947 timeline (16+)', bn: pg.bn, roman: pg.roman, en: pg.en }))
  return out
}
export function allWords() {
  const seen = new Map()
  const note = (w, e) => seen.has(w.bn) || seen.set(w.bn, { ...w, e })
  lookScenes.forEach((s) => s.scene.items.forEach((i) => i.word && note(i.word, i.e)))
  buildTasks.forEach((t) => t.steps.forEach((s) => note(s.word, s.e)))
  return [...seen.values()]
}
