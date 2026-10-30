// The 13–15 ("Voyagers"), 16–18 ("Pathfinders") and 18+ ("Wayfarers") tracks. All start from the alphabet.
// Voyagers: smaller steps, more scaffolding. Pathfinders: faster, denser, more reading. Wayfarers: adult life and history.
import {
  letterGroupIds,
  aspirateIds,
  signIds,
  syllableIdsBySign,
  conjunctIds,
  wordIdsByCat,
  categoryMeta,
  sentenceIdsByGroup,
  sentenceMeta,
  formIdsByVerb,
  formIdsByTense,
  teenText,
  family,
} from './bank'
import { stories } from '../data/stories'
import { lessonsFrom, unit, byBn, boss } from './build'
import { gemLessons } from './gems'
import { chunk } from './text'
import { verbs } from '../data/sentences'
import { tenseVerbs } from '../data/teenSentences'
import { exploreRegions } from '../data/explore'

const TIPS = {
  ba: 'Arabic is written right to left. ب ت ث share one shape; only the dots change. Most letters join the next one and change shape as they do.',
  dal: 'د ذ ر ز (and ا و) never join the letter after them, so words break into pieces where they appear.',
  sounds: 'ص ض ط ظ are the "heavy" versions of س د ت ذ: say them with the tongue low and the mouth round and full. ح ع خ غ ق come from deep in the throat.',
  last: 'ة sounds like "a" at the end of a word; ء, the hamza, is a tiny catch in the voice; و and ي are both consonants and long vowels.',
  aspirates: 'Hamza (ء) usually sits on a seat: أ and إ on alif, ؤ on waaw, ئ on a dotless yaa. ى is an alif at the end of a word, and ل + ا join as لا.',
  signs: 'Fatḥa (َ), kasra (ِ) and ḍamma (ُ) are the short vowels; sukuun (ْ) means no vowel and shadda (ّ) doubles a letter. Newspapers leave them out, but the Quran and children\'s books always show them.',
  conjuncts: 'Most letters join the letter after them and change shape as they do: a short "head" at the start of a word, a small link in the middle, the full shape at the end.',
  present: 'The front of the verb shows who is doing it: أَنَا أَ…، أَنْتَ تَ…، هُوَ يَ…. Speaking to a girl or woman, add -ينَ: أَنْتِ تَأْكُلِينَ.',
  perfect: 'The past changes at the end: ذَهَبْتُ (I went), ذَهَبْتَ (you went — to a boy or man), ذَهَبْتِ (you went — to a girl or woman).',
  future: 'For the future put سَـ in front of the present: سَأَذْهَبُ، سَتَذْهَبُ — and to a girl or woman, سَتَذْهَبِينَ.',
}

const [gBa, gJeem, gDal, gSeen, gAin, gKaf, gHa] = letterGroupIds

// first words made from letters + vowels, shared with the 8–12 reading practice
const READ_WORDS = [
  ['أُمّ', 'family'], ['أَب', 'family'], ['أَخ', 'family'], ['جَدّ', 'family'], ['بِنْت', 'family'], ['وَلَد', 'family'],
  ['كِتَاب', 'around-us'], ['بَيْت', 'around-us'], ['بَاب', 'around-us'], ['قَلَم', 'around-us'], ['يَد', 'body'], ['فَم', 'body'],
  ['أَنْف', 'body'], ['خُبْز', 'food'], ['مَاء', 'food'], ['تَمْر', 'food'], ['شَمْس', 'around-us'], ['قَمَر', 'around-us'],
]
const readWordIds = () => READ_WORDS.map(([bn, cat]) => byBn(cat, [bn])[0])

const lettersLesson = (id, title, ids, tip) => ({ id, title, emoji: '🔠', kind: 'letters', learn: ids, tip })

function signLessons(prefix, groups) {
  return groups.map((g, i) => ({
    id: `${prefix}-${i + 1}`,
    title: `Vowel marks ${i + 1}`,
    emoji: '✏️',
    kind: 'signs',
    learn: g.map((k) => signIds[k]),
    practice: g.flatMap((k) => syllableIdsBySign[k]),
    tip: i === 0 ? TIPS.signs : undefined,
  }))
}

// word lessons without a trailing review (each unit ends with a boss level instead)
const wordsE = (prefix, cat, size, emoji, title) =>
  lessonsFrom(prefix, title, emoji, 'words', wordIdsByCat[cat], size, { cat, tip: categoryMeta[cat].note })
const words = (prefix, cat, size, title) => wordsE(prefix, cat, size, categoryMeta[cat].emoji, title)

const sentences = (prefix, group, size) =>
  lessonsFrom(prefix, sentenceMeta[group].title, sentenceMeta[group].emoji, 'sentences', sentenceIdsByGroup[group], size)

const presentForms = (prefix) =>
  chunk(verbs, 2).map((pair, i) => ({
    id: `${prefix}-pres-${i + 1}`, title: `Present tense ${i + 1}`, emoji: '🧩', kind: 'forms',
    learn: pair.flatMap((v) => formIdsByVerb[v.key]), tip: i === 0 ? TIPS.present : undefined,
  }))
const tenseLessons = (prefix, tense, label, emoji, perLesson, tip) =>
  chunk(tenseVerbs, perLesson).map((grp, i) => ({
    id: `${prefix}-${tense}-${i + 1}`, title: `${label} ${i + 1}`, emoji, kind: 'forms',
    learn: grp.flatMap((v) => formIdsByTense[tense][v.key]), tip: i === 0 ? tip : undefined,
  }))

const storyLessons = (prefix, track, ids) =>
  ids.map((sid) => {
    const st = stories.find((s) => s.id === sid)
    return { id: `${prefix}-story-${sid}`, title: `Story: ${st.title}`, emoji: st.emoji, kind: 'story', learn: [], storyId: sid, track }
  })

const poemLessons = (prefix, track) =>
  teenText[track].poems.map((p) => ({ id: `${prefix}-poem-${p.key}`, title: p.title, emoji: p.emoji, kind: 'poem', learn: p.lineIds, author: p.author, tip: p.note }))
const passageLessons = (prefix, track, keys) =>
  teenText[track].passages.filter((p) => keys.includes(p.key)).map((p) => ({ id: `${prefix}-read-${p.key}`, title: `Reading: ${p.title}`, emoji: p.emoji, kind: 'passage', learn: p.lineIds, questions: p.questions, tip: p.lead }))
const sceneLessons = (prefix, track, keys) =>
  teenText[track].scenes.filter((s) => keys.includes(s.key)).map((s) => ({ id: `${prefix}-scene-${s.key}`, title: s.title, emoji: s.emoji, kind: 'dialogue', learn: s.lineIds }))

const POLITE_TIP = 'Arabic says "you" differently to a man (أَنْتَ، -كَ) and to a woman (أَنْتِ، -كِ). Choose the right sentence each time.'
const politeLesson = (id) => ({ id, title: 'Which you? أَنْتَ or أَنْتِ', emoji: '🙇', kind: 'polite', learn: [], polite: family.older.polite, tip: POLITE_TIP })

// a unit = its lessons + a boss level over everything they taught
const bossUnit = (prefix, id, title, emoji, blurb, lessons) => unit(id, title, emoji, blurb, [...lessons, boss(prefix, title, lessons)])

// The alphabet as three fast lessons (16+ and 18+)
const fastScript = (p) =>
  bossUnit(`${p}-s`, `${p}-script`, 'Script Fast-Track', '🔤', 'The whole alphabet, quickly', [
    lettersLesson(`${p}-c1`, 'First letters · ا to ز', [...gBa.ids, ...gJeem.ids, ...gDal.ids], TIPS.ba),
    lettersLesson(`${p}-c2`, 'Middle letters · س to ق', [...gSeen.ids, ...gAin.ids], TIPS.sounds),
    lettersLesson(`${p}-c3`, 'Last letters · ك to ة', [...gKaf.ids, ...gHa.ids], TIPS.last),
    lettersLesson(`${p}-asp`, 'Hamza & special shapes · أ إ آ لا…', aspirateIds, TIPS.aspirates),
  ])
const fastReading = (p) =>
  bossUnit(`${p}-r`, `${p}-reading`, 'Vowel Marks, Joins & Reading', '✏️', 'Short vowels, joined letters and reading real words', [
    ...signLessons(`${p}-sign`, [[0, 1, 2], [3, 4, 5], [6, 7, 8, 9, 10]]),
    ...lessonsFrom(`${p}-conj`, 'Joined letters', '🔗', 'letters', conjunctIds, 6, { tip: TIPS.conjuncts }),
    ...lessonsFrom(`${p}-read`, 'Read it!', '📖', 'words', readWordIds(), 9, { cat: 'mixed', tip: 'Letters change shape when they join. Sound out each letter with its vowel mark, then say the whole word.' }),
  ])
// Sun and moon letters, roots and patterns, one / two / many (src/curriculum/gems.js)
const gemsUnit = (p, big) =>
  bossUnit(`${p}-gm`, `${p}-gems`, 'Roots, Sun Letters & the Dual', '🧠', 'Three things that make Arabic Arabic', gemLessons(p, { big }))
const grammarUnit = (p) =>
  bossUnit(`${p}-g`, `${p}-grammar`, 'Grammar in Action', '🧩', 'Verbs and tenses you can use right away', [
    ...wordsE(`${p}-vb`, 'verbs', 6, '🏃', 'Action Words'),
    ...wordsE(`${p}-q`, 'questions', 8, '❓', 'Question Words'),
    ...wordsE(`${p}-adj`, 'adjectives', 7, '✨', 'Describing Words'),
    ...presentForms(`${p}-g`),
    ...tenseLessons(`${p}-g`, 'perfect', 'Past: I did', '✅', 2, TIPS.perfect),
    ...tenseLessons(`${p}-g`, 'future', 'Future: I will', '🔮', 2, TIPS.future),
  ])

export function buildTeenTracks() {
  // ===========================================================================================
  // 13–15  Voyagers
  // ===========================================================================================
  const v = 'v'
  const voyagers = {
    key: 'teen', label: 'Voyagers', ages: '13–15', emoji: '🚀', theme: 'teen',
    tagline: 'Start from the alphabet and race to real conversations — with stories, games and XP.',
    units: [
      bossUnit('v-s1', 'v-script1', 'Script 1: First Letters', '🔤', 'Right to left: the first three letter families', [
        lettersLesson('v-ba', 'Alif and the baa family · ا ب ت ث', gBa.ids, TIPS.ba),
        lettersLesson('v-jeem', 'The jiim family · ج ح خ', gJeem.ids),
        lettersLesson('v-dal', 'The daal and raa families · د ذ ر ز', gDal.ids, TIPS.dal),
      ]),
      bossUnit('v-s2', 'v-script2', 'Script 2: The Rest of the Alphabet', '🅰️', 'Every other letter, plus hamza and the special shapes', [
        lettersLesson('v-seen', 'Siin to ẓaa · س ش ص ض ط ظ', gSeen.ids, TIPS.sounds),
        lettersLesson('v-ain', 'ʿAyn to qaaf · ع غ ف ق', gAin.ids),
        lettersLesson('v-kaf', 'Kaaf to nuun · ك ل م ن', gKaf.ids),
        lettersLesson('v-ha', 'The last letters · ه و ي ء ة', gHa.ids, TIPS.last),
        ...lessonsFrom('v-asp', 'Hamza & special shapes', '✨', 'letters', aspirateIds, 4, { tip: TIPS.aspirates }),
      ]),
      bossUnit('v-r', 'v-reading', 'Vowel Marks, Joins & Reading', '✏️', 'Short vowels, joined letters, and your first real words', [
        ...signLessons('v-sign', [[0, 1, 2], [3, 4, 5], [6, 7], [8, 9, 10]]),
        ...lessonsFrom('v-conj', 'Joined letters', '🔗', 'letters', conjunctIds, 6, { tip: TIPS.conjuncts }),
        ...lessonsFrom('v-read', 'Read it!', '📖', 'words', readWordIds(), 9, { cat: 'mixed', tip: 'Letters change shape when they join. Sound out each letter with its vowel mark, then say the whole word.' }),
      ]),
      bossUnit('v-h', 'v-hello', 'Hello, Arab World!', '👋', 'Greetings, who you are, and your first story', [
        ...words('v-hi', 'greetings', 8, 'Greetings'),
        ...words('v-pro', 'pronouns', 9, 'I, You, We'),
        ...words('v-fam', 'family', 7, 'Family'),
        politeLesson('v-polite'),
        ...sentences('v-id', 'identity', 5),
        ...storyLessons(v, 'teen', ['newkid']),
      ]),
      bossUnit('v-n', 'v-numbers', 'Numbers & Money', '🔢', 'Count, shop and bargain', [
        ...wordsE('v-num', 'numbers', 6, '🔢', 'Numbers'),
        ...wordsE('v-ten', 'tens', 9, '💯', 'Bigger Numbers'),
        ...wordsE('v-souq', 'souq', 6, '🛒', 'Money & Shopping'),
        ...sentences('v-ss', 'souq', 4),
        ...storyLessons(v, 'teen', ['market']),
      ]),
      bossUnit('v-t', 'v-travel', 'Getting Around', '🚕', 'Travel, directions and asking for help', [
        ...wordsE('v-trv', 'travel', 9, '✈️', 'Travel & Directions'),
        ...sentences('v-ts', 'travel', 4),
        ...storyLessons(v, 'teen', ['taxi']),
      ]),
      bossUnit('v-d', 'v-daily', 'Everyday Life', '☀️', 'Days, months, time, food and describing things', [
        ...wordsE('v-day', 'days', 7, '📅', 'Days of the Week'),
        ...wordsE('v-mon', 'months', 6, '🗓️', 'Months'),
        ...wordsE('v-sea', 'seasons', 4, '🍂', 'Seasons'),
        ...wordsE('v-tim', 'time2', 8, '⏰', 'Time & Dates'),
        ...wordsE('v-food', 'food', 8, '🍚', 'Food & Drink'),
        ...wordsE('v-rst', 'restaurant', 8, '🍽️', 'Eating Out'),
        ...wordsE('v-adj', 'adjectives', 7, '✨', 'Describing Words'),
      ]),
      bossUnit('v-f', 'v-film', 'Film, Music & Poetry', '🎬', 'Real poems, songs and cinema talk', [
        ...wordsE('v-flm', 'film', 8, '🎬', 'Film, Music & Art'),
        ...sceneLessons('v-sc', 'teen', ['ticket', 'movienight', 'song']),
        ...poemLessons('v-pm', 'teen'),
        ...storyLessons(v, 'teen', ['movienight']),
      ]),
      bossUnit('v-hs', 'v-history', 'History & Identity', '🏛️', 'Our language, our history, our heritage', [
        ...wordsE('v-his', 'history', 8, '🏛️', 'History & Identity'),
        ...sentences('v-hst', 'history', 4),
        ...sentences('v-cul', 'culture', 4),
        ...passageLessons('v-rd', 'teen', ['arabic', 'cairo', 'palm', 'eid']),
        ...storyLessons(v, 'teen', ['ramadan']),
      ]),
      bossUnit('v-g', 'v-grammar', 'How Arabic Works', '🧩', 'Verbs, tenses, opinions, proverbs and more', [
        ...wordsE('v-vb', 'verbs', 6, '🏃', 'Action Words'),
        ...presentForms('v-g'),
        ...tenseLessons('v-g', 'perfect', 'Past: I did', '✅', 2, TIPS.perfect),
        ...tenseLessons('v-g', 'future', 'Future: I will', '🔮', 2, TIPS.future),
        ...wordsE('v-q', 'questions', 8, '❓', 'Question Words'),
        ...wordsE('v-fl', 'feelings', 8, '💬', 'Feelings & Opinions'),
        ...sentences('v-op', 'opinions', 4),
        ...sentences('v-pv', 'proverbs', 4),
        ...wordsE('v-tc', 'tech', 6, '📱', 'Phones & Tech'),
        ...wordsE('v-sp2', 'sports', 8, '⚽', 'Football & Sports'),
      ]),
      gemsUnit('v', false),
    ],
  }

  // ===========================================================================================
  // 16–18  Pathfinders
  // ===========================================================================================
  const p = 'p'
  const pathfinders = {
    key: 'senior', label: 'Pathfinders', ages: '16–18', emoji: '🏔️', theme: 'teen',
    tagline: 'The fast track: dense lessons, real reading, history, poetry and grown-up conversations.',
    units: [
      fastScript(p),
      fastReading(p),
      bossUnit('p-i', 'p-identity', 'People & Identity', '🪪', 'Greetings, family and who you are', [
        ...words('p-hi', 'greetings', 15, 'Greetings'),
        ...words('p-pro', 'pronouns', 9, 'I, You, We'),
        ...words('p-fam', 'family', 10, 'Family'),
        politeLesson('p-polite'),
        ...sentences('p-id', 'identity', 5),
        ...storyLessons(p, 'senior', ['landing']),
      ]),
      bossUnit('p-n', 'p-numbers', 'Numbers, Time & Money', '🔢', 'Count, tell the time and handle money', [
        ...wordsE('p-num', 'numbers', 11, '🔢', 'Numbers'),
        ...wordsE('p-ten', 'tens', 9, '💯', 'Bigger Numbers'),
        ...wordsE('p-day', 'days', 7, '📅', 'Days of the Week'),
        ...wordsE('p-mon', 'months', 6, '🗓️', 'Months'),
        ...wordsE('p-tim', 'time2', 8, '⏰', 'Time & Dates'),
        ...wordsE('p-souq', 'souq', 9, '🛒', 'Money & Shopping'),
        ...sentences('p-ss', 'souq', 4),
      ]),
      bossUnit('p-t', 'p-travel', 'Travel & Cities', '🧭', 'Directions, transport and asking for help', [
        ...wordsE('p-trv', 'travel', 9, '✈️', 'Travel & Directions'),
        ...sentences('p-ts', 'travel', 4),
        ...wordsE('p-tc', 'tech', 6, '📱', 'Phones & Tech'),
        ...storyLessons(p, 'senior', ['oldcity']),
      ]),
      bossUnit('p-st', 'p-study', 'Study, Work & Dreams', '🎓', 'School, careers, feelings and opinions', [
        ...wordsE('p-sch', 'school', 8, '🎓', 'School, Study & Work'),
        ...wordsE('p-fl', 'feelings', 8, '💬', 'Feelings & Opinions'),
        ...sentences('p-op', 'opinions', 4),
        ...wordsE('p-sp2', 'sports', 8, '⚽', 'Football & Sports'),
        ...wordsE('p-rst', 'restaurant', 8, '🍽️', 'Eating Out'),
        ...storyLessons(p, 'senior', ['cafedebate']),
      ]),
      bossUnit('p-c', 'p-celebrate', 'Celebrations & Weddings', '🎉', 'Eid, Ramadan and weddings', [
        ...wordsE('p-cel', 'celebrate', 7, '🎉', 'Celebrations & Weddings'),
        ...passageLessons('p-rd', 'senior', ['eid']),
        ...storyLessons(p, 'senior', ['wedding']),
      ]),
      bossUnit('p-h', 'p-history', 'History & Identity', '🏛️', 'Our language, our cities and our independence', [
        ...wordsE('p-his', 'history', 8, '🏛️', 'History & Identity'),
        ...sentences('p-hst', 'history', 4),
        ...sentences('p-cul', 'culture', 4),
        ...passageLessons('p-rd2', 'senior', ['arabic', 'cairo', 'palm']),
        ...storyLessons(p, 'senior', ['algeria62']),
      ]),
      bossUnit('p-a', 'p-art', 'Poetry, Proverbs & Film', '🎭', 'al-Mutanabbi, Shawqi, al-Shabbi, proverbs and the cinema', [
        ...wordsE('p-flm', 'film', 8, '🎬', 'Film, Music & Art'),
        ...sceneLessons('p-sc', 'senior', ['ticket', 'song', 'filmtalk']),
        ...poemLessons('p-pm', 'senior'),
        ...sentences('p-pv', 'proverbs', 4),
      ]),
      grammarUnit(p),
      gemsUnit(p, true),
    ],
  }

  // Explore the Arab World: words and reading for each region, closed by a boss level
  const exploreUnit = (prefix) => {
    const lessons = exploreRegions.flatMap((r) => {
      const cat = `x-${r.id}`
      const reading = sentenceIdsByGroup[cat]
      return [
        ...lessonsFrom(`${prefix}-x-${r.id}`, `${r.name}: words`, r.emoji, 'words', wordIdsByCat[cat], 8, { cat, tip: categoryMeta[cat].note }),
        ...(prefix === 'a'
          ? lessonsFrom(`${prefix}-xr-${r.id}`, `${r.name}: reading`, r.emoji, 'sentences', reading, 6)
          : [{ id: `${prefix}-xr-${r.id}`, title: `${r.name}: reading`, emoji: r.emoji, kind: 'sentences', learn: reading.slice(0, 6) }]),
      ]
    })
    return bossUnit(`${prefix}-xp`, `${prefix}-explore`, 'Explore the Arab World', '🗺️', 'Words and reading from every region — then open the map', [...lessons, ...storyLessons(prefix, prefix === 'v' ? 'teen' : prefix === 'p' ? 'senior' : 'adult', ['roadtrip'])])
  }
  voyagers.units.push(exploreUnit('v'))
  pathfinders.units.push(exploreUnit('p'))

  // ===========================================================================================
  // 18+  Wayfarers — adults starting from zero: real life, real history and the Arabic-speaking world
  // ===========================================================================================
  const a = 'a'
  const wayfarers = {
    key: 'adult', label: 'Wayfarers', ages: '18+', emoji: '🧳', theme: 'teen',
    tagline: 'Start from zero as an adult: real life, real history, and the Arab world from Marrakesh to Muscat.',
    units: [
      fastScript(a),
      fastReading(a),
      bossUnit('a-i', 'a-identity', 'People, Family & In-laws', '🪪', 'Greetings, family and who you are', [
        ...words('a-hi', 'greetings', 15, 'Greetings'),
        ...words('a-pro', 'pronouns', 9, 'I, You, We'),
        ...words('a-fam', 'family', 10, 'Family'),
        ...words('a-inl', 'inlaws', 7, 'In-laws & Extended Family'),
        politeLesson('a-polite'),
        ...sentences('a-id', 'identity', 5),
        ...storyLessons(a, 'adult', ['landing']),
      ]),
      bossUnit('a-n', 'a-numbers', 'Numbers, Time & Money', '🔢', 'Count, tell the time and handle money', [
        ...wordsE('a-num', 'numbers', 11, '🔢', 'Numbers'),
        ...wordsE('a-ten', 'tens', 9, '💯', 'Bigger Numbers'),
        ...wordsE('a-day', 'days', 7, '📅', 'Days of the Week'),
        ...wordsE('a-mon', 'months', 6, '🗓️', 'Months'),
        ...wordsE('a-tim', 'time2', 8, '⏰', 'Time & Dates'),
        ...wordsE('a-souq', 'souq', 9, '🛒', 'Money & Shopping'),
        ...sentences('a-ss', 'souq', 4),
      ]),
      bossUnit('a-t', 'a-travel', 'Travel & Cities', '🧭', 'Directions, transport and asking for help', [
        ...wordsE('a-trv', 'travel', 9, '✈️', 'Travel & Directions'),
        ...sentences('a-ts', 'travel', 4),
        ...wordsE('a-tc', 'tech', 6, '📱', 'Phones & Tech'),
        ...storyLessons(a, 'adult', ['oldcity']),
      ]),
      bossUnit('a-w', 'a-work', 'Work, Money & Forms', '💼', 'Offices, banks and paperwork', [
        ...words('a-wk', 'work', 6, 'Work & Office'),
        ...sentences('a-wks', 'awork', 7),
        ...words('a-bk', 'bank', 6, 'Bank, Forms & Documents'),
        ...sentences('a-bks', 'abank', 6),
        ...storyLessons(a, 'adult', ['bankstory']),
      ]),
      bossUnit('a-h', 'a-health', 'Health, Study & Eating Out', '🩺', 'The doctor, school and work, the restaurant', [
        ...words('a-hl', 'health', 6, 'Health & the Doctor'),
        ...sentences('a-hls', 'ahealth', 6),
        ...wordsE('a-sch', 'school', 8, '🎓', 'School, Study & Work'),
        ...wordsE('a-rst', 'restaurant', 8, '🍽️', 'Eating Out'),
      ]),
      bossUnit('a-p', 'a-politics', 'News, Politics & the Economy', '📰', 'The words behind the headlines, and how the economy works', [
        ...words('a-pol', 'politics', 6, 'Government & Politics'),
        ...words('a-eco', 'economy', 6, 'Economy & Development'),
        ...sentences('a-nws', 'anews', 6),
        ...sentences('a-op', 'opinions', 4),
        ...passageLessons('a-rde', 'adult', ['oil', 'arabspring']),
        ...storyLessons(a, 'adult', ['cafedebate']),
      ]),
      bossUnit('a-hs', 'a-history', 'History: From Islam to Independence', '🕯️', 'The rise of Islam, Baghdad, al-Andalus, the Ottomans and independence', [
        ...wordsE('a-his', 'history', 8, '🏛️', 'History & Identity'),
        ...sentences('a-hst', 'history', 4),
        ...passageLessons('a-rdh', 'adult', ['islam', 'golden', 'andalus', 'ottoman']),
        ...storyLessons(a, 'adult', ['algeria62']),
      ]),
      bossUnit('a-f', 'a-faith', 'Faith, Culture & the Arts', '🎶', 'Religion, clothing, music and poets', [
        ...words('a-cu2', 'culture2', 6, 'Faith, Clothes & Music'),
        ...sentences('a-cul', 'culture', 4),
        ...passageLessons('a-rdf', 'adult', ['faith', 'artsculture', 'eid']),
        ...wordsE('a-flm', 'film', 8, '🎬', 'Film, Music & Art'),
        ...sceneLessons('a-sc', 'adult', ['ticket', 'song', 'filmtalk']),
        ...poemLessons('a-pm', 'adult'),
        ...sentences('a-pv', 'proverbs', 4),
        ...wordsE('a-cel', 'celebrate', 7, '🎉', 'Celebrations & Weddings'),
        ...storyLessons(a, 'adult', ['wedding']),
      ]),
      bossUnit('a-b', 'a-world', 'Arabic Beyond Borders', '🌍', 'Dialects, the modern language and Arabic around the world', [
        ...words('a-dl', 'dialects', 6, 'Fusha & Dialects: Different Words'),
        ...passageLessons('a-rdb', 'adult', ['nahda', 'diaspora', 'arabic']),
        ...storyLessons(a, 'adult', ['cousin']),
      ]),
      grammarUnit(a),
      gemsUnit(a, true),
      exploreUnit('a'),
    ],
  }

  return { teen: voyagers, senior: pathfinders, adult: wayfarers }
}
