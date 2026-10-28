// Curriculum: two tracks (5–7 and 8–12) built from the shared content bank. The 13–15, 16–18 and 18+ tracks
// come in a later phase (Learn Urdu builds them in teenTracks.js).
// A lesson is { id, title, emoji, kind, learn: [itemIds], practice?: [itemIds], tip?, cat? }.
// kind: letters | signs | words | sentences | forms | review
import { chunk } from './text'
import { lessonsFrom, withReview, unit, catLessons, byBn } from './build'
import { FEATURES } from './features'
import { stories } from '../data/stories'
import {
  letterGroupIds,
  aspirateIds,
  signIds,
  syllableIdsBySign,
  sentenceIdsByGroup,
  sentenceMeta,
  formIdsByVerb,
  family,
  unitLayout,
  ADDRESS_TIP,
  superIdsByUnit,
} from './bank'
import { verbs } from '../data/sentences'

// ---- Tips ----------------------------------------------------------------
const TIPS = {
  ba: 'Arabic is written from right to left. ب ت ث have the same boat shape. Count the dots: ب has one below, ت two on top, ث three on top.',
  jeem: 'ج ح خ share one hook. ح is a breathy h from deep in the throat — like breathing on glasses to clean them. خ is a scratchy kh, like clearing your throat.',
  dal: 'These letters never hold hands with the letter after them. ذ sounds like "th" in "this"; ث (from the baa family) is the "th" in "think".',
  seen: 'ص ض ط ظ are the "heavy" sounds: say س د ت ذ with your tongue pressed low and your mouth round and full.',
  ain: 'ع is a squeeze deep in the throat — no English letter has it. غ is a soft gargle, like a French r. ق is a k from far back in the throat.',
  kaf: 'Letters change shape when they join: ك ل م ن look different at the start, middle and end of a word.',
  ha: 'ة sounds like "a" at the end of a word (and "t" when another word follows). ء, the hamza, is a tiny catch in the voice.',
  aspirates: 'Hamza (ء) often sits on a "seat": أ and إ on alif, ؤ on waaw, ئ on a yaa without dots. لا is how ل and ا join.',
  signs: 'Fatḥa (َ), kasra (ِ) and ḍamma (ُ) are small marks for short vowels. Newspapers leave them out, but children\'s books and the Quran always show them.',
}

const [gBa, gJeem, gDal, gSeen, gAin, gKaf, gHa] = letterGroupIds
const letters = (prefix, g, size) => lessonsFrom(prefix, g.name, '🔠', 'letters', g.ids, size, { tip: TIPS[g.key] })

// ===========================================================================
// Track 1 — ages 5–7: small steps, lots of pictures, tracing
// ===========================================================================
const young = {
  key: 'young',
  label: 'Little Learners',
  ages: '5–7',
  emoji: '🌱',
  tagline: 'Pictures, tracing and short, friendly lessons.',
  units: [
    unit('y-l1', 'ا ب ت ث', '🔤', 'Alif and the baa family', withReview('y-l1', 'First letters', letters('y-l1', gBa, 4))),
    unit('y-l2', 'ج ح خ · د ذ', '🅰️', 'The jiim and daal families', withReview('y-l2', 'Jiim and daal', [
      ...letters('y-l2a', gJeem, 3),
      ...lessonsFrom('y-l2b', 'The daal family', '🔠', 'letters', gDal.ids.slice(0, 2), 4, { tip: TIPS.dal }),
    ])),
    unit('y-l3', 'ر ز · س ش ص ض', '🅱️', 'The raa, siin and ṣaad families', withReview('y-l3', 'Raa, siin and ṣaad', [
      ...lessonsFrom('y-l3a', 'The raa family', '🔠', 'letters', gDal.ids.slice(2), 4, { tip: TIPS.dal }),
      ...lessonsFrom('y-l3b', 'Siin and ṣaad', '🔠', 'letters', gSeen.ids.slice(0, 4), 4, { tip: TIPS.seen }),
    ])),
    unit('y-l4', 'ط ظ ع غ ف ق', '🅾️', 'Ṭaa, ʿayn, faa and qaaf', withReview('y-l4', 'Ṭaa to qaaf', [
      ...lessonsFrom('y-l4a', 'Ṭaa and ʿayn', '🔠', 'letters', [...gSeen.ids.slice(4), ...gAin.ids.slice(0, 2)], 4, { tip: TIPS.ain }),
      ...lessonsFrom('y-l4b', 'Faa and qaaf', '🔠', 'letters', gAin.ids.slice(2), 4),
    ])),
    unit('y-l5', 'ك ل م ن', '✨', 'Kaaf to nuun', withReview('y-l5', 'Kaaf to nuun', letters('y-l5', gKaf, 2))),
    unit('y-l6', 'ه و ي ء ة', '🌟', 'The last letters', withReview('y-l6', 'The last letters', letters('y-l6', gHa, 3))),
    unit('y-family', 'Family Words', '👨‍👩‍👧', 'أُمّ، أَب، أَخ، أُخْت…', catLessons('y-fam', 'family', 5, { pick: (ids) => ids.slice(0, 15) })),
    unit('y-numbers', 'Numbers', '🔢', '٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ١٠', catLessons('y-num', 'numbers', 4)),
    unit('y-colours', 'Colours', '🎨', 'أَحْمَر، أَزْرَق، أَخْضَر…', catLessons('y-col', 'colours', 5)),
    unit('y-animals', 'Animals', '🐯', 'قِطَّة، كَلْب، أَسَد…', catLessons('y-ani', 'animals', 5, { pick: (ids) => ids.slice(0, 20) })),
    unit('y-food', 'Food & Drink', '🍚', 'خُبْز، تَمْر، حَلِيب…', catLessons('y-food', 'food', 5)),
    unit('y-body', 'My Body', '🧍', 'رَأْس، عَيْن، أَنْف…', catLessons('y-body', 'body', 5)),
    unit('y-around', 'Around Us', '🏡', 'بَيْت، شَجَرَة، قَمَر…', catLessons('y-aro', 'around-us', 5, { pick: (ids) => ids.slice(0, 15) })),
    unit('y-arab', 'The Arab World', '🌍', 'صَحْرَاء، نَخْلَة، جَمَل…', catLessons('y-arab', 'arab-world', 4, {
      pick: () => byBn('arab-world', ['صَحْرَاء', 'نَخْلَة', 'وَاحَة', 'جَمَل', 'صَقْر', 'خَيْمَة', 'سُوق', 'فَانُوس']),
    })),
    unit('y-hello', 'Say Hello', '👋', 'First polite words', catLessons('y-hi', 'greetings', 4, { pick: (ids) => ids.slice(0, 8) })),
  ],
}

// ===========================================================================
// Track 2 — ages 8–12: bigger lessons, reading, writing, sentences, patterns
// ===========================================================================
const signLessons = () => {
  const groups = [[0, 1, 2], [3, 4, 5], [6, 7], [8, 9, 10]]
  return groups.map((g, i) => ({
    id: `o-sign-${i + 1}`,
    title: `Vowel marks ${i + 1}`,
    emoji: '✏️',
    kind: 'signs',
    learn: g.map((k) => signIds[k]),
    practice: g.flatMap((k) => syllableIdsBySign[k]),
    tip: i === 0 ? TIPS.signs : undefined,
  }))
}

const firstWords = [
  ['أُمّ', 'family'], ['أَب', 'family'], ['أَخ', 'family'], ['جَدّ', 'family'], ['بِنْت', 'family'], ['وَلَد', 'family'],
  ['كِتَاب', 'around-us'], ['بَيْت', 'around-us'], ['بَاب', 'around-us'], ['قَلَم', 'around-us'], ['يَد', 'body'], ['فَم', 'body'],
  ['أَنْف', 'body'], ['خُبْز', 'food'], ['مَاء', 'food'], ['تَمْر', 'food'], ['شَمْس', 'around-us'], ['قَمَر', 'around-us'],
]
const firstWordIds = firstWords.map(([bn, cat]) => byBn(cat, [bn])[0])

const verbLessons = () => {
  const lessons = chunk(verbs, 2).map((pair, i) => ({
    id: `o-vb-${i + 1}`,
    title: `Present tense ${i + 1}`,
    emoji: '🧩',
    kind: 'forms',
    learn: pair.flatMap((v) => formIdsByVerb[v.key]),
    tip:
      i === 0
        ? 'In Arabic the front of the verb changes with who is doing it: أَنَا أَ… (I), أَنْتَ تَ… (you), هُوَ يَ… (he). To a girl: أَنْتِ تَأْكُلِينَ; about a girl: هِيَ تَأْكُلُ.'
        : undefined,
  }))
  return withReview('o-vb', 'Present tense', lessons)
}

const sentenceUnitLessons = () => {
  const lessons = ['introduce', 'things', 'daily', 'describe'].flatMap((key) =>
    lessonsFrom(`o-s-${key}`, sentenceMeta[key].title, sentenceMeta[key].emoji, 'sentences', sentenceIdsByGroup[key], 5),
  )
  return withReview('o-s', 'Sentences', lessons)
}

const older = {
  key: 'older',
  label: 'Explorers',
  ages: '8–12',
  emoji: '🧭',
  tagline: 'Read, write and build real Arabic sentences.',
  units: [
    unit('o-l1', 'Letters I', '🔤', 'ا ب ت ث · ج ح خ', withReview('o-l1', 'Letters I', [...letters('o-l1a', gBa, 4), ...letters('o-l1b', gJeem, 3)])),
    unit('o-l2', 'Letters II', '🅰️', 'د ذ ر ز · س ش ص ض ط ظ', withReview('o-l2', 'Letters II', [...letters('o-l2a', gDal, 4), ...letters('o-l2b', gSeen, 6)])),
    unit('o-l3', 'Letters III', '🅱️', 'ع غ ف ق · ك ل م ن', withReview('o-l3', 'Letters III', [...letters('o-l3a', gAin, 4), ...letters('o-l3b', gKaf, 4)])),
    unit('o-l4', 'Letters IV', '🅾️', 'ه و ي ء ة', letters('o-l4', gHa, 5)),
    unit('o-asp', 'Hamza & Special Shapes', '✨', 'لا أ إ آ ى ؤ ئ', withReview('o-asp', 'Special shapes', lessonsFrom('o-asp', 'Special shapes', '✨', 'letters', aspirateIds, 4, { tip: TIPS.aspirates }))),
    unit('o-signs', 'Vowel Marks', '✏️', 'فَتْحَة، كَسْرَة، ضَمَّة — and the long vowels', withReview('o-sign', 'Vowel marks', signLessons())),
    unit('o-read', 'Read Your First Words', '📖', 'Put letters and vowels together', withReview('o-read', 'First words', lessonsFrom('o-read', 'Read it!', '📖', 'words', firstWordIds, 6, { cat: 'mixed', tip: 'Letters change shape when they join. Sound out each letter with its vowel mark, then say the whole word.' }))),
    unit('o-hello', 'Say Hello', '👋', 'Greetings and polite words', catLessons('o-hi', 'greetings', 5)),
    unit('o-numbers', 'Numbers', '🔢', '٠–١٠ and counting by tens', [
      ...catLessons('o-num', 'numbers', 6).filter((l) => l.kind !== 'review'),
      ...catLessons('o-ten', 'tens', 5),
    ]),
    unit('o-people', 'People & Pronouns', '🙋', 'أَنَا، أَنْتَ، أَنْتِ and family', [
      ...catLessons('o-pro', 'pronouns', 5).filter((l) => l.kind !== 'review'),
      ...catLessons('o-fam', 'family', 7),
    ]),
    unit('o-colours', 'Colours', '🎨', 'أَحْمَر، أَزْرَق، أَخْضَر…', catLessons('o-col', 'colours', 5)),
    unit('o-animals', 'Animals', '🐯', 'قِطَّة، كَلْب، أَسَد…', catLessons('o-ani', 'animals', 6)),
    unit('o-food', 'Food & Drink', '🍚', 'خُبْز، تَمْر، حَلِيب…', catLessons('o-food', 'food', 6)),
    unit('o-body', 'My Body', '🧍', 'رَأْس، عَيْن، أَنْف…', catLessons('o-body', 'body', 7)),
    unit('o-around', 'Around Us', '🏡', 'بَيْت، شَجَرَة، قَمَر…', catLessons('o-aro', 'around-us', 7)),
    unit('o-describe', 'Describing & Doing', '✨', 'Adjectives, actions and questions', [
      ...catLessons('o-adj', 'adjectives', 7).filter((l) => l.kind !== 'review'),
      ...catLessons('o-verb', 'verbs', 6).filter((l) => l.kind !== 'review'),
      ...catLessons('o-q', 'questions', 8),
    ]),
    unit('o-time', 'Days, Months & Seasons', '📅', 'الْأَحَد، يَنَايِر، الصَّيْف…', [
      ...catLessons('o-day', 'days', 7),
      ...catLessons('o-mon', 'months', 6),
      ...catLessons('o-sea', 'seasons', 4),
    ]),
    unit('o-sent', 'Sentences', '💬', 'Understand and build real sentences', sentenceUnitLessons()),
    unit('o-verbs', 'Verb Patterns', '🧩', 'How verbs change with أَنَا، أَنْتَ، هُوَ', verbLessons()),
    unit('o-arab', 'The Arab World', '🌍', 'Deserts, souqs, cities and culture', catLessons('o-arab', 'arab-world', 6)),
  ],
}

// ---- Family conversations (themed units, see data/family.js) ----------------------------------
const familyUnits = (p, trackKey) => {
  const fam = family[trackKey]
  return unitLayout[trackKey].map((u, ui) => {
    const lessons = []
    if (ui === 0) {
      lessons.push(
        { id: `${p}-ft-phrases`, title: 'Everyday Phrases', emoji: '🤲', kind: 'sentences', learn: fam.phraseIds, tip: 'You will hear these phrases all through family life — in almost every conversation to come.' },
        {
          id: `${p}-ft-polite`, title: 'Which you? أَنْتَ or أَنْتِ', emoji: '🙇', kind: 'polite', learn: [], polite: fam.polite, tip: ADDRESS_TIP,
          rules: [
            { emoji: '👨👴🧔🧑', say: 'أَنْتَ', who: 'Dad, Grandpa, Uncle and Yusuf — boys and men' },
            { emoji: '👩👵👧', say: 'أَنْتِ', who: 'Mum, Grandma and Layla — girls and women' },
            { emoji: '🧒', say: 'أَنْتِ', who: 'what everyone says to Sara' },
          ],
        },
      )
    }
    const scs = u.scenes.map((k) => fam.scenes.find((s) => s.key === k))
    scs.forEach((sc, si) =>
      lessons.push({ id: `${p}-ft-${sc.key}`, title: sc.title, emoji: sc.emoji, kind: 'dialogue', learn: sc.lineIds, tip: sc.tip ?? (ui === 0 && si === 0 ? ADDRESS_TIP : undefined) }),
    )
    lessons.push({
      id: `${p}-ft-review-${u.key}`, title: `${u.title}: Review`, emoji: '🏅', kind: 'review', learn: [],
      reviewOf: [...(ui === 0 ? fam.phraseIds : []), ...scs.flatMap((sc) => sc.lineIds)],
    })
    return unit(`${p}-ft-${u.key}`, u.title, u.emoji, u.blurb, lessons)
  })
}

const insertAfter = (units, id, extra) => units.splice(units.findIndex((u) => u.id === id) + 1, 0, ...extra)
insertAfter(young.units, 'y-family', familyUnits('y', 'young'))
insertAfter(older.units, 'o-people', familyUnits('o', 'older'))

// per-age features (XP, games, tracing…) live in features.js
young.features = FEATURES.young
older.features = FEATURES.older

// Ages 5–7: the end-of-unit review becomes a gentle, untimed treasure hunt.
young.units.forEach((u) => {
  u.lessons = u.lessons.map((l) =>
    l.kind === 'review' ? { ...l, treasure: true, emoji: '🎁', title: l.title.replace(': Review', ': Treasure Hunt') } : l,
  )
})

// Ages 8–12: story chats go where their vocabulary has just been taught (each story names its unit in `place.older`).
const addStory = (track, prefix, unitId, storyId) => {
  const u = track.units.find((x) => x.id === unitId)
  const st = stories.find((x) => x.id === storyId)
  const lesson = { id: `${prefix}-story-${storyId}`, title: `Story: ${st.title}`, emoji: st.emoji, kind: 'story', learn: [], storyId, track: track.key }
  const at = u.lessons.findIndex((l) => l.kind === 'review')
  if (at >= 0) u.lessons.splice(at, 0, lesson)
  else u.lessons.push(lesson)
}
stories.filter((st) => st.place?.older).forEach((st) => addStory(older, 'o', st.place.older, st.id))

// Every unit that has a Super challenge set ends with that challenge.
Object.entries({ young, older }).forEach(([, track]) => {
  track.units.forEach((u) => {
    const ids = superIdsByUnit[u.id]
    if (ids?.length) u.lessons.push({ id: `${u.id}-super`, title: 'Super challenge', emoji: '🦸', kind: 'super', learn: [], superIds: ids })
  })
})

export const tracks = { young, older }

export const trackList = [young, older]
export const allLessons = (trackKey) => (tracks[trackKey] ?? older).units.flatMap((u) => u.lessons)

export function findLesson(id) {
  for (const t of trackList) {
    for (const u of t.units) {
      const i = u.lessons.findIndex((l) => l.id === id)
      if (i >= 0) return { lesson: u.lessons[i], unit: u, track: t }
    }
  }
  return null
}

export function nextLessonId(trackKey, id) {
  const all = allLessons(trackKey)
  const i = all.findIndex((l) => l.id === id)
  return i >= 0 && i < all.length - 1 ? all[i + 1].id : null
}
