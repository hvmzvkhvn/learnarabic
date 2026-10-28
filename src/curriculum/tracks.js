// Curriculum: the 5–7 and 8–12 tracks are built here; the 13–15, 16–18 and 18+ tracks in teenTracks.js.
// A lesson is { id, title, emoji, kind, learn: [itemIds], practice?: [itemIds], tip?, cat? }.
// kind: letters | signs | words | sentences | forms | review
import { chunk } from './text'
import { lessonsFrom, withReview, unit, catLessons, byBn } from './build'
import { buildTeenTracks } from './teenTracks'
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
  be: 'ب پ ت ٹ ث have the same boat shape. Count the dots: ب has one below, پ three below, ت two on top, ث three on top. ٹ wears a little ط hat.',
  jeem: 'ج چ ح خ share one hook. ح sounds like ہ — Urdu has both, but we say them the same way.',
  daal: 'These letters never hold hands with the letter after them. ڈ and ڑ are curled-tongue sounds: curl the tip of your tongue back.',
  seen: 'ث س ص all say "s", ذ ز ض ظ all say "z", and ت ط both say "t". Each word has its own spelling, so we learn them all.',
  ain: 'ع has no sound of its own — it carries a vowel, like ا. غ is a soft gargle at the back of the throat.',
  kaaf: 'ک and گ look alike: گ has an extra line on top. ں is a noon with no dot — it makes the sound before it nasal, as in ماں.',
  wao: 'ھ never stands alone: it adds a puff of air to the letter before it (ب → بھ). ے only comes at the end of a word.',
  aspirates: 'Hold your hand in front of your mouth and say بھ (bh). Feel the puff of air? That is what ھ adds.',
  signs: 'Zabar (َ), zer (ِ) and pesh (ُ) are small marks for short vowels. Most books leave them out — so you learn to read words without them!',
}

const [gBe, gJeem, gDaal, gSeen, gAin, gKaaf, gWao] = letterGroupIds
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
    unit('y-l1', 'ا آ ب پ ت ٹ ث', '🔤', 'Alif and the be family', withReview('y-l1', 'First letters', letters('y-l1', gBe, 4))),
    unit('y-l2', 'ج چ ح خ · د ڈ ذ', '🅰️', 'The jeem and daal families', withReview('y-l2', 'Jeem and daal', [
      ...letters('y-l2a', gJeem, 4),
      ...lessonsFrom('y-l2b', 'The daal family', '🔠', 'letters', gDaal.ids.slice(0, 3), 4, { tip: TIPS.daal }),
    ])),
    unit('y-l3', 'ر ڑ ز ژ · س ش ص ض', '🅱️', 'The re, seen and suaad families', withReview('y-l3', 'Re, seen and suaad', [
      ...lessonsFrom('y-l3a', 'The re family', '🔠', 'letters', gDaal.ids.slice(3), 4, { tip: TIPS.daal }),
      ...lessonsFrom('y-l3b', 'Seen and suaad', '🔠', 'letters', gSeen.ids.slice(0, 4), 4, { tip: TIPS.seen }),
    ])),
    unit('y-l4', 'ط ظ ع غ ف ق', '🅾️', "To'e, ain, fe and qaaf", withReview('y-l4', 'Ain to qaaf', [
      ...lessonsFrom('y-l4a', "To'e and ain", '🔠', 'letters', [...gSeen.ids.slice(4), ...gAin.ids.slice(0, 2)], 4, { tip: TIPS.ain }),
      ...lessonsFrom('y-l4b', 'Fe and qaaf', '🔠', 'letters', gAin.ids.slice(2), 4),
    ])),
    unit('y-l5', 'ک گ ل م ن ں', '✨', 'Kaaf to noon', withReview('y-l5', 'Kaaf to noon', letters('y-l5', gKaaf, 3))),
    unit('y-l6', 'و ہ ھ ء ی ے', '🌟', 'The last letters', withReview('y-l6', 'The last letters', letters('y-l6', gWao, 3))),
    unit('y-family', 'Family Words', '👨‍👩‍👧', 'امی، ابو، بھائی، بہن…', catLessons('y-fam', 'family', 5, { pick: (ids) => ids.slice(0, 15) })),
    unit('y-numbers', 'Numbers', '🔢', '۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹ ۱۰', catLessons('y-num', 'numbers', 4)),
    unit('y-colours', 'Colours', '🎨', 'لال، نیلا، ہرا…', catLessons('y-col', 'colours', 5)),
    unit('y-animals', 'Animals', '🐯', 'بلی، کتا، شیر…', catLessons('y-ani', 'animals', 5, { pick: (ids) => ids.slice(0, 20) })),
    unit('y-food', 'Food & Drink', '🍚', 'روٹی، آم، دودھ…', catLessons('y-food', 'food', 5)),
    unit('y-body', 'My Body', '🧍', 'سر، آنکھ، ناک…', catLessons('y-body', 'body', 5)),
    unit('y-around', 'Around Us', '🏡', 'گھر، درخت، چاند…', catLessons('y-aro', 'around-us', 5, { pick: (ids) => ids.slice(0, 15) })),
    unit('y-pk', 'My Pakistan', '🇵🇰', 'جھنڈا، مارخور، آم…', catLessons('y-pk', 'pakistan', 4, {
      pick: () => byBn('pakistan', ['پاکستان', 'جھنڈا', 'چاند تارا', 'مارخور', 'چنبیلی', 'آم', 'کرکٹ', 'رکشہ']),
    })),
    unit('y-hello', 'Say Hello', '👋', 'First polite words', catLessons('y-hi', 'greetings', 4, { pick: (ids) => ids.slice(0, 8) })),
  ],
}

// ===========================================================================
// Track 2 — ages 8–12: bigger lessons, reading, writing, sentences, patterns
// ===========================================================================
const signLessons = () => {
  const groups = [[0, 1, 2], [3, 4, 5], [6, 7], [8, 9]]
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
  ['امی', 'family'], ['ابو', 'family'], ['نانا', 'family'], ['دادا', 'family'], ['بہن', 'family'], ['دوست', 'family'],
  ['کتاب', 'around-us'], ['گھر', 'around-us'], ['کان', 'body'], ['ناک', 'body'], ['ہاتھ', 'body'], ['دودھ', 'food'],
  ['چائے', 'food'], ['آم', 'food'], ['پانی', 'food'], ['پھول', 'around-us'], ['لال', 'colours'], ['کالا', 'colours'],
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
        ? 'In Urdu the verb changes with who is doing it: میں … ہوں (I), تم … ہو (you), وہ … ہے (he). A girl or woman says -تی instead: میں کھاتی ہوں.'
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
  tagline: 'Read, write and build real Urdu sentences.',
  units: [
    unit('o-l1', 'Letters I', '🔤', 'ا آ ب پ ت ٹ ث · ج چ ح خ', withReview('o-l1', 'Letters I', [...letters('o-l1a', gBe, 7), ...letters('o-l1b', gJeem, 4)])),
    unit('o-l2', 'Letters II', '🅰️', 'د ڈ ذ ر ڑ ز ژ · س ش ص ض ط ظ', withReview('o-l2', 'Letters II', [...letters('o-l2a', gDaal, 7), ...letters('o-l2b', gSeen, 6)])),
    unit('o-l3', 'Letters III', '🅱️', 'ع غ ف ق · ک گ ل م ن ں', withReview('o-l3', 'Letters III', [...letters('o-l3a', gAin, 4), ...letters('o-l3b', gKaaf, 6)])),
    unit('o-l4', 'Letters IV', '🅾️', 'و ہ ھ ء ی ے', letters('o-l4', gWao, 6)),
    unit('o-asp', 'Aspirated Sounds', '💨', 'بھ پھ تھ ٹھ جھ چھ دھ ڈھ کھ گھ', withReview('o-asp', 'Aspirated sounds', lessonsFrom('o-asp', 'Aspirated sounds', '💨', 'letters', aspirateIds, 5, { tip: TIPS.aspirates }))),
    unit('o-signs', 'Vowel Marks', '✏️', 'زبر، زیر، پیش — and the long vowels', withReview('o-sign', 'Vowel marks', signLessons())),
    unit('o-read', 'Read Your First Words', '📖', 'Put letters and vowels together', withReview('o-read', 'First words', lessonsFrom('o-read', 'Read it!', '📖', 'words', firstWordIds, 6, { cat: 'mixed', tip: 'Letters change shape when they join. Sound out each letter, then say the whole word.' }))),
    unit('o-hello', 'Say Hello', '👋', 'Greetings and polite words', catLessons('o-hi', 'greetings', 7)),
    unit('o-numbers', 'Numbers', '🔢', '۰–۱۰ and counting by tens', [
      ...catLessons('o-num', 'numbers', 6).filter((l) => l.kind !== 'review'),
      ...catLessons('o-ten', 'tens', 5),
    ]),
    unit('o-people', 'People & Pronouns', '🙋', 'میں، تم، آپ and family', [
      ...catLessons('o-pro', 'pronouns', 5).filter((l) => l.kind !== 'review'),
      ...catLessons('o-fam', 'family', 6),
    ]),
    unit('o-colours', 'Colours', '🎨', 'لال، نیلا، ہرا…', catLessons('o-col', 'colours', 5)),
    unit('o-animals', 'Animals', '🐯', 'بلی، کتا، شیر…', catLessons('o-ani', 'animals', 6)),
    unit('o-food', 'Food & Drink', '🍚', 'روٹی، آم، دودھ…', catLessons('o-food', 'food', 6)),
    unit('o-body', 'My Body', '🧍', 'سر، آنکھ، ناک…', catLessons('o-body', 'body', 7)),
    unit('o-around', 'Around Us', '🏡', 'گھر، درخت، چاند…', catLessons('o-aro', 'around-us', 7)),
    unit('o-describe', 'Describing & Doing', '✨', 'Adjectives, actions and questions', [
      ...catLessons('o-adj', 'adjectives', 7).filter((l) => l.kind !== 'review'),
      ...catLessons('o-verb', 'verbs', 6).filter((l) => l.kind !== 'review'),
      ...catLessons('o-q', 'questions', 7),
    ]),
    unit('o-time', 'Days, Months & Seasons', '📅', 'پیر، جنوری، برسات…', [
      ...catLessons('o-day', 'days', 7),
      ...catLessons('o-mon', 'months', 6),
      ...catLessons('o-sea', 'seasons', 5),
    ]),
    unit('o-sent', 'Sentences', '💬', 'Understand and build real sentences', sentenceUnitLessons()),
    unit('o-verbs', 'Verb Patterns', '🧩', 'How verbs change with میں، تم، وہ', verbLessons()),
    unit('o-pk', 'Pakistan & Culture', '🇵🇰', 'National symbols, places and favourites', catLessons('o-pk', 'pakistan', 6)),
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
          id: `${p}-ft-polite`, title: 'آپ or تم?', emoji: '🙇', kind: 'polite', learn: [], polite: fam.polite, tip: ADDRESS_TIP,
          rules: [
            { emoji: '👩👨👴👵🧔', say: 'آپ', who: 'Ammi, Abbu, Nana, Dada, Nani, uncles and aunts — every elder' },
            { emoji: '🧑👧', say: 'تم', who: 'friends, like Ali and Hina' },
            { emoji: '🧒', say: 'تم', who: 'what elders say to you' },
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

const { teen, senior, adult } = buildTeenTracks()

// per-age features (XP, games, tracing…) live in features.js
young.features = FEATURES.young
older.features = FEATURES.older
teen.features = FEATURES.teen
senior.features = FEATURES.senior
adult.features = FEATURES.adult

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
Object.entries({ young, older, teen, senior, adult }).forEach(([, track]) => {
  track.units.forEach((u) => {
    const ids = superIdsByUnit[u.id]
    if (ids?.length) u.lessons.push({ id: `${u.id}-super`, title: 'Super challenge', emoji: '🦸', kind: 'super', learn: [], superIds: ids })
  })
})

export const tracks = { young, older, teen, senior, adult }

export const trackList = [young, older, teen, senior, adult]
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
