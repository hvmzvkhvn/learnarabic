// "How Arabic Works" lessons (8–12 and up): sun and moon letters, roots and patterns, one / two / many.
// Each topic is taught with ordinary word lessons, then practised with a "pick" lesson (choose the right one).
import { lessonsFrom } from './build'
import { wordIdsByCat, categoryMeta } from './bank'
import { sunMoonPicks, rootPicks, dualPicks, SUN_LETTERS } from '../data/grammar'

const ROOT_CATS = ['root-ktb', 'root-drs', 'root-lab', 'root-sjd']
const wid = ([cat, bn]) => `word:${cat}:${bn}`
const pickLesson = (id, title, emoji, list, extra = {}) => {
  const picks = list.map((c) => ({ title: c.title, stem: c.stem, rightId: wid(c.right), wrongIds: c.wrong.map(wid) }))
  return { id, title, emoji, kind: 'pick', learn: [], practice: [...new Set(picks.map((c) => c.rightId))], picks, ...extra }
}
const words = (id, cat, size, extra = {}) =>
  lessonsFrom(id, categoryMeta[cat].title, categoryMeta[cat].emoji, 'words', wordIdsByCat[cat], size, { cat, tip: categoryMeta[cat].note, ...extra })

export const SUN_MOON_TIP = `The word for "the" is الْ, joined to the front of the word. Before a moon letter you hear the ل (الْقَمَر, al-qamar). Before a sun letter the ل goes silent and the next letter doubles (الشَّمْس, ash-shams). Sun letters: ${SUN_LETTERS}.`
export const ROOT_TIP = 'Most Arabic words are built from three root letters. The root carries the meaning; the pattern around it says what kind of word it is: فَاعِل is the person who does it (كَاتِب، لَاعِب), and مَـ at the front is often the place (مَكْتَب، مَلْعَب، مَسْجِد).'

/** The lessons, in order. `p` is the id prefix for the track (o, v, p or a). */
export function gemLessons(p, { big = false } = {}) {
  return [
    ...words(`${p}-sun`, 'sun', big ? 10 : 5),
    ...words(`${p}-moon`, 'moon', big ? 10 : 5),
    pickLesson(`${p}-sunmoon`, 'Sun or Moon?', '🌗', sunMoonPicks, {
      tip: SUN_MOON_TIP,
      rules: [
        { emoji: '☀️', say: 'الشَّمْس', who: 'Sun letter: the ل is silent and the next letter is doubled with a shadda' },
        { emoji: '🌙', say: 'الْقَمَر', who: 'Moon letter: you hear the ل, which carries a sukuun' },
      ],
    }),
    ...(big
      ? lessonsFrom(`${p}-root`, 'Roots & Patterns', '🌱', 'words', ROOT_CATS.flatMap((c) => wordIdsByCat[c]), 9, { cat: 'mixed', tip: ROOT_TIP })
      : ROOT_CATS.flatMap((c) => words(`${p}-${c}`, c, 6))),
    pickLesson(`${p}-roots`, 'Root Detective', '🔍', rootPicks, {
      tip: ROOT_TIP,
      rules: [
        { emoji: '🧑', say: 'كَاتِب', who: 'فَاعِل: the person who does it' },
        { emoji: '📍', say: 'مَكْتَب', who: 'مَـ…: the place where it happens' },
      ],
    }),
    ...words(`${p}-dual`, 'dual', big ? 9 : 6),
    pickLesson(`${p}-twos`, 'One, Two or Many?', '✌️', dualPicks, { tip: categoryMeta.dual.note }),
  ]
}
