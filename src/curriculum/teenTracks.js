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
import { chunk } from './text'
import { verbs } from '../data/sentences'
import { tenseVerbs } from '../data/teenSentences'
import { exploreRegions } from '../data/explore'

const TIPS = {
  be: 'Urdu is written right to left. ب پ ت ٹ ث share one shape; only the dots change. ٹ, ڈ and ڑ wear a small ط: they are the curled-tongue sounds.',
  daal: 'د ڈ ذ ر ڑ ز ژ (and ا و) never join the letter after them, so words break into pieces where they appear.',
  sounds: 'Several letters share a sound: ث س ص say "s", ذ ز ض ظ say "z", ت ط say "t", ح ہ say "h". Each word keeps its own spelling.',
  last: 'ں makes the vowel before it nasal; ھ adds a puff of air (بھ = bh); ے only comes at the end of a word.',
  aspirates: 'A letter + ھ is one sound with a puff of air: بھ bh, پھ ph, کھ kh, گھ gh.',
  signs: 'Zabar (َ), zer (ِ) and pesh (ُ) are the short vowels. Everyday Urdu leaves them out, so you learn to recognise words without them.',
  conjuncts: 'Most letters join the letter after them and change shape as they do: a short "head" at the start of a word, a small link in the middle, the full shape at the end. لا (laam + alif) has its own special shape.',
  present: 'The verb changes with who is doing it: میں … ہوں، تم … ہو، آپ … ہیں. Use تم for friends and آپ for anyone you respect. A girl or woman uses -تی: میں جاتی ہوں.',
  perfect: 'To say something has happened, use the "have done" form: میں گیا ہوں = "I have gone" (a woman says گئی ہوں). Verbs like کھانا take نے instead: میں نے کھایا ہے.',
  future: 'For the future add گا / گے: میں جاؤں گا، تم جاؤ گے، آپ جائیں گے (women use گی).',
}

const [gBe, gJeem, gDaal, gSeen, gAin, gKaaf, gWao] = letterGroupIds

// first words made from letters + vowels, shared with the 8–12 reading practice
const READ_WORDS = [
  ['امی', 'family'], ['ابو', 'family'], ['نانا', 'family'], ['دادا', 'family'], ['بہن', 'family'], ['دوست', 'family'],
  ['کتاب', 'around-us'], ['گھر', 'around-us'], ['کان', 'body'], ['ناک', 'body'], ['ہاتھ', 'body'], ['دودھ', 'food'],
  ['چائے', 'food'], ['آم', 'food'], ['پانی', 'food'], ['پھول', 'around-us'], ['لال', 'colours'], ['کالا', 'colours'],
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

// a unit = its lessons + a boss level over everything they taught
const bossUnit = (prefix, id, title, emoji, blurb, lessons) => unit(id, title, emoji, blurb, [...lessons, boss(prefix, title, lessons)])

// The alphabet as three fast lessons (16+ and 18+)
const fastScript = (p) =>
  bossUnit(`${p}-s`, `${p}-script`, 'Script Fast-Track', '🔤', 'The whole alphabet, quickly', [
    lettersLesson(`${p}-c1`, 'Letters I · ا to خ', [...gBe.ids, ...gJeem.ids], TIPS.be),
    lettersLesson(`${p}-c2`, 'Letters II · د to ظ', [...gDaal.ids, ...gSeen.ids], TIPS.daal),
    lettersLesson(`${p}-c3`, 'Letters III · ع to ے', [...gAin.ids, ...gKaaf.ids, ...gWao.ids], TIPS.last),
    lettersLesson(`${p}-asp`, 'Aspirated sounds · بھ پھ تھ…', aspirateIds, TIPS.aspirates),
  ])
const fastReading = (p) =>
  bossUnit(`${p}-r`, `${p}-reading`, 'Vowel Marks, Joins & Reading', '✏️', 'Short vowels, joined letters and reading real words', [
    ...signLessons(`${p}-sign`, [[0, 1, 2], [3, 4, 5], [6, 7, 8, 9]]),
    ...lessonsFrom(`${p}-conj`, 'Joined letters', '🔗', 'letters', conjunctIds, 6, { tip: TIPS.conjuncts }),
    ...lessonsFrom(`${p}-read`, 'Read it!', '📖', 'words', readWordIds(), 9, { cat: 'mixed', tip: 'Letters change shape when they join. Sound out each letter, then say the whole word.' }),
  ])
const grammarUnit = (p) =>
  bossUnit(`${p}-g`, `${p}-grammar`, 'Grammar in Action', '🧩', 'Verbs and tenses you can use right away', [
    ...wordsE(`${p}-vb`, 'verbs', 6, '🏃', 'Action Words'),
    ...wordsE(`${p}-q`, 'questions', 7, '❓', 'Question Words'),
    ...wordsE(`${p}-adj`, 'adjectives', 7, '✨', 'Describing Words'),
    ...presentForms(`${p}-g`),
    ...tenseLessons(`${p}-g`, 'perfect', 'Have done', '✅', 2, TIPS.perfect),
    ...tenseLessons(`${p}-g`, 'future', 'Will do', '🔮', 2, TIPS.future),
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
        lettersLesson('v-be', 'Alif and the be family · ا آ ب پ ت ٹ ث', gBe.ids, TIPS.be),
        lettersLesson('v-jeem', 'The jeem family · ج چ ح خ', gJeem.ids),
        lettersLesson('v-daal', 'The daal and re families · د ڈ ذ ر ڑ ز ژ', gDaal.ids, TIPS.daal),
      ]),
      bossUnit('v-s2', 'v-script2', 'Script 2: The Rest of the Alphabet', '🅰️', 'Every other letter, plus the aspirated sounds', [
        lettersLesson('v-seen', 'Seen to zo\'e · س ش ص ض ط ظ', gSeen.ids, TIPS.sounds),
        lettersLesson('v-ain', 'Ain to qaaf · ع غ ف ق', gAin.ids),
        lettersLesson('v-kaaf', 'Kaaf to noon · ک گ ل م ن ں', gKaaf.ids),
        lettersLesson('v-wao', 'The last letters · و ہ ھ ء ی ے', gWao.ids, TIPS.last),
        ...lessonsFrom('v-asp', 'Aspirated sounds', '💨', 'letters', aspirateIds, 5, { tip: TIPS.aspirates }),
      ]),
      bossUnit('v-r', 'v-reading', 'Vowel Marks, Joins & Reading', '✏️', 'Short vowels, joined letters, and your first real words', [
        ...signLessons('v-sign', [[0, 1, 2], [3, 4, 5], [6, 7], [8, 9]]),
        ...lessonsFrom('v-conj', 'Joined letters', '🔗', 'letters', conjunctIds, 6, { tip: TIPS.conjuncts }),
        ...lessonsFrom('v-read', 'Read it!', '📖', 'words', readWordIds(), 9, { cat: 'mixed', tip: 'Letters change shape when they join. Sound out each letter, then say the whole word.' }),
      ]),
      bossUnit('v-h', 'v-hello', 'Hello, Pakistan!', '👋', 'Greetings, who you are, and your first story', [
        ...words('v-hi', 'greetings', 7, 'Greetings'),
        ...words('v-pro', 'pronouns', 9, 'I, You, We'),
        ...words('v-fam', 'family', 6, 'Family'),
        ...sentences('v-id', 'identity', 5),
        ...storyLessons(v, 'teen', ['newkid']),
      ]),
      bossUnit('v-n', 'v-numbers', 'Numbers & Money', '🔢', 'Count, shop and bargain', [
        ...wordsE('v-num', 'numbers', 6, '🔢', 'Numbers'),
        ...wordsE('v-ten', 'tens', 9, '💯', 'Bigger Numbers'),
        ...wordsE('v-baz', 'bazaar', 7, '🛒', 'Money & Shopping'),
        ...sentences('v-bs', 'bazaar', 5),
        ...storyLessons(v, 'teen', ['market']),
      ]),
      bossUnit('v-t', 'v-travel', 'Getting Around', '🛺', 'Travel, directions and asking for help', [
        ...wordsE('v-trv', 'travel', 8, '✈️', 'Travel & Directions'),
        ...sentences('v-ts', 'travel', 5),
        ...storyLessons(v, 'teen', ['rickshaw']),
      ]),
      bossUnit('v-d', 'v-daily', 'Everyday Life', '☀️', 'Days, months, time, food and describing things', [
        ...wordsE('v-day', 'days', 7, '📅', 'Days of the Week'),
        ...wordsE('v-mon', 'months', 6, '🗓️', 'Months'),
        ...wordsE('v-sea', 'seasons', 5, '🍂', 'Seasons'),
        ...wordsE('v-tim', 'time2', 8, '⏰', 'Time & Dates'),
        ...wordsE('v-food', 'food', 8, '🍚', 'Food & Drink'),
        ...wordsE('v-rst', 'restaurant', 6, '🍛', 'Eating Out'),
        ...wordsE('v-adj', 'adjectives', 7, '✨', 'Describing Words'),
      ]),
      bossUnit('v-f', 'v-film', 'Film, Music & Poetry', '🎬', 'Real poems, songs and cinema talk', [
        ...wordsE('v-flm', 'film', 7, '🎬', 'Film, Music & Art'),
        ...sceneLessons('v-sc', 'teen', ['ticket', 'movienight', 'song']),
        ...poemLessons('v-pm', 'teen'),
        ...storyLessons(v, 'teen', ['movienight']),
      ]),
      bossUnit('v-hs', 'v-history', 'History & Identity', '🇵🇰', 'Our language, our history, our heritage', [
        ...wordsE('v-his', 'history', 7, '🏛️', 'History & Identity'),
        ...sentences('v-hst', 'history', 5),
        ...sentences('v-cul', 'culture', 5),
        ...passageLessons('v-rd', 'teen', ['independence', 'lahore', 'mango', 'eid']),
        ...storyLessons(v, 'teen', ['jashn']),
      ]),
      bossUnit('v-g', 'v-grammar', 'How Urdu Works', '🧩', 'Verbs, tenses, opinions, proverbs and more', [
        ...wordsE('v-vb', 'verbs', 6, '🏃', 'Action Words'),
        ...presentForms('v-g'),
        ...tenseLessons('v-g', 'perfect', 'Have done', '✅', 2, TIPS.perfect),
        ...tenseLessons('v-g', 'future', 'Will do', '🔮', 2, TIPS.future),
        ...wordsE('v-q', 'questions', 7, '❓', 'Question Words'),
        ...wordsE('v-fl', 'feelings', 7, '💬', 'Feelings & Opinions'),
        ...sentences('v-op', 'opinions', 5),
        ...sentences('v-pv', 'proverbs', 4),
        ...wordsE('v-tc', 'tech', 8, '📱', 'Phones & Tech'),
        ...wordsE('v-sp2', 'sports', 10, '🏏', 'Cricket & Sports'),
      ]),
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
        ...words('p-hi', 'greetings', 14, 'Greetings'),
        ...words('p-pro', 'pronouns', 9, 'I, You, We'),
        ...words('p-fam', 'family', 9, 'Family'),
        { id: 'p-polite', title: 'آپ or تم?', emoji: '🙇', kind: 'polite', learn: [], polite: family.older.polite, tip: 'We say آپ to every elder and تم to friends. Choose the right sentence each time.' },
        ...sentences('p-id', 'identity', 5),
        ...storyLessons(p, 'senior', ['landing']),
      ]),
      bossUnit('p-n', 'p-numbers', 'Numbers, Time & Money', '🔢', 'Count, tell the time and handle money', [
        ...wordsE('p-num', 'numbers', 11, '🔢', 'Numbers'),
        ...wordsE('p-ten', 'tens', 9, '💯', 'Bigger Numbers'),
        ...wordsE('p-day', 'days', 7, '📅', 'Days of the Week'),
        ...wordsE('p-mon', 'months', 6, '🗓️', 'Months'),
        ...wordsE('p-tim', 'time2', 8, '⏰', 'Time & Dates'),
        ...wordsE('p-baz', 'bazaar', 7, '🛒', 'Money & Shopping'),
        ...sentences('p-bs', 'bazaar', 5),
      ]),
      bossUnit('p-t', 'p-travel', 'Travel & Cities', '🧭', 'Directions, transport and asking for help', [
        ...wordsE('p-trv', 'travel', 8, '✈️', 'Travel & Directions'),
        ...sentences('p-ts', 'travel', 5),
        ...wordsE('p-tc', 'tech', 8, '📱', 'Phones & Tech'),
        ...storyLessons(p, 'senior', ['oldcity']),
      ]),
      bossUnit('p-st', 'p-study', 'Study, Work & Dreams', '🎓', 'School, careers, feelings and opinions', [
        ...wordsE('p-sch', 'school', 8, '🎓', 'School, Study & Work'),
        ...wordsE('p-fl', 'feelings', 7, '💬', 'Feelings & Opinions'),
        ...sentences('p-op', 'opinions', 5),
        ...wordsE('p-sp2', 'sports', 10, '🏏', 'Cricket & Sports'),
        ...wordsE('p-rst', 'restaurant', 12, '🍛', 'Eating Out'),
        ...storyLessons(p, 'senior', ['dhabadebate']),
      ]),
      bossUnit('p-c', 'p-celebrate', 'Celebrations & Weddings', '🎉', 'Eid, weddings and festival life', [
        ...wordsE('p-cel', 'celebrate', 7, '🎉', 'Celebrations & Weddings'),
        ...passageLessons('p-rd', 'senior', ['eid']),
        ...storyLessons(p, 'senior', ['wedding']),
      ]),
      bossUnit('p-h', 'p-history', 'History & Identity', '🇵🇰', '1940, 1947 and our heritage', [
        ...wordsE('p-his', 'history', 7, '🏛️', 'History & Identity'),
        ...sentences('p-hst', 'history', 5),
        ...sentences('p-cul', 'culture', 5),
        ...passageLessons('p-rd2', 'senior', ['independence', 'lahore', 'mango']),
        ...storyLessons(p, 'senior', ['dada47']),
      ]),
      bossUnit('p-a', 'p-art', 'Poetry, Proverbs & Film', '🎭', 'Iqbal, Ghalib, Mir, proverbs and the cinema', [
        ...wordsE('p-flm', 'film', 7, '🎬', 'Film, Music & Art'),
        ...sceneLessons('p-sc', 'senior', ['ticket', 'song', 'filmtalk']),
        ...poemLessons('p-pm', 'senior'),
        ...sentences('p-pv', 'proverbs', 4),
      ]),
      grammarUnit(p),
    ],
  }

  // Explore Pakistan: words and reading for each region, closed by a boss level
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
    return bossUnit(`${prefix}-xp`, `${prefix}-explore`, 'Explore Pakistan', '🗺️', 'Words and reading from every region — then open the map', [...lessons, ...storyLessons(prefix, prefix === 'v' ? 'teen' : prefix === 'p' ? 'senior' : 'adult', ['roadtrip'])])
  }
  voyagers.units.push(exploreUnit('v'))
  pathfinders.units.push(exploreUnit('p'))

  // ===========================================================================================
  // 18+  Wayfarers — adults starting from zero: real life, real history and the Urdu-speaking world
  // ===========================================================================================
  const a = 'a'
  const wayfarers = {
    key: 'adult', label: 'Wayfarers', ages: '18+', emoji: '🧳', theme: 'teen',
    tagline: 'Start from zero as an adult: real life, real history, and the Urdu world from Lahore to Lucknow to London.',
    units: [
      fastScript(a),
      fastReading(a),
      bossUnit('a-i', 'a-identity', 'People, Family & In-laws', '🪪', 'Greetings, family and who you are', [
        ...words('a-hi', 'greetings', 14, 'Greetings'),
        ...words('a-pro', 'pronouns', 9, 'I, You, We'),
        ...words('a-fam', 'family', 9, 'Family'),
        ...words('a-inl', 'inlaws', 7, 'In-laws & Extended Family'),
        { id: 'a-polite', title: 'آپ or تم?', emoji: '🙇', kind: 'polite', learn: [], polite: family.older.polite, tip: 'We say آپ to every elder and to colleagues we do not know well, and تم to friends. Choose the right sentence each time.' },
        ...sentences('a-id', 'identity', 5),
        ...storyLessons(a, 'adult', ['landing']),
      ]),
      bossUnit('a-n', 'a-numbers', 'Numbers, Time & Money', '🔢', 'Count, tell the time and handle money', [
        ...wordsE('a-num', 'numbers', 11, '🔢', 'Numbers'),
        ...wordsE('a-ten', 'tens', 9, '💯', 'Bigger Numbers'),
        ...wordsE('a-day', 'days', 7, '📅', 'Days of the Week'),
        ...wordsE('a-mon', 'months', 6, '🗓️', 'Months'),
        ...wordsE('a-tim', 'time2', 8, '⏰', 'Time & Dates'),
        ...wordsE('a-baz', 'bazaar', 7, '🛒', 'Money & Shopping'),
        ...sentences('a-bs', 'bazaar', 5),
      ]),
      bossUnit('a-t', 'a-travel', 'Travel & Cities', '🧭', 'Directions, transport and asking for help', [
        ...wordsE('a-trv', 'travel', 8, '✈️', 'Travel & Directions'),
        ...sentences('a-ts', 'travel', 5),
        ...wordsE('a-tc', 'tech', 8, '📱', 'Phones & Tech'),
        ...storyLessons(a, 'adult', ['oldcity']),
      ]),
      bossUnit('a-w', 'a-work', 'Work, Money & Forms', '💼', 'Offices, banks and paperwork', [
        ...words('a-wk', 'work', 6, 'Work & Office'),
        ...sentences('a-wks', 'awork', 6),
        ...words('a-bk', 'bank', 6, 'Bank, Forms & Documents'),
        ...sentences('a-bks', 'abank', 5),
        ...storyLessons(a, 'adult', ['bankstory']),
      ]),
      bossUnit('a-h', 'a-health', 'Health, Study & Eating Out', '🩺', 'The doctor, school and work, the restaurant', [
        ...words('a-hl', 'health', 6, 'Health & the Doctor'),
        ...sentences('a-hls', 'ahealth', 5),
        ...wordsE('a-sch', 'school', 8, '🎓', 'School, Study & Work'),
        ...wordsE('a-rst', 'restaurant', 12, '🍛', 'Eating Out'),
      ]),
      bossUnit('a-p', 'a-politics', 'News, Politics & the Economy', '📰', 'The words behind the headlines, and how the economy works', [
        ...words('a-pol', 'politics', 6, 'Government & Politics'),
        ...words('a-eco', 'economy', 6, 'Economy & Development'),
        ...sentences('a-nws', 'anews', 6),
        ...sentences('a-op', 'opinions', 5),
        ...passageLessons('a-rde', 'adult', ['economy', 'government']),
        ...storyLessons(a, 'adult', ['dhabadebate']),
      ]),
      bossUnit('a-hs', 'a-history', 'History: The Mughals to 1947', '🕯️', 'How Urdu was born, and how Pakistan came to be', [
        ...wordsE('a-his', 'history', 7, '🏛️', 'History & Identity'),
        ...sentences('a-hst', 'history', 5),
        ...passageLessons('a-rdh', 'adult', ['mughals', 'lahore1940', 'partition1947', 'urdulanguage']),
        ...storyLessons(a, 'adult', ['dada47']),
      ]),
      bossUnit('a-f', 'a-faith', 'Faith, Culture & the Arts', '🎶', 'Religion, clothing, music and poets', [
        ...words('a-cu2', 'culture2', 6, 'Faith, Clothes & Music'),
        ...sentences('a-cul', 'culture', 5),
        ...passageLessons('a-rdf', 'adult', ['faith', 'artsculture', 'eid']),
        ...wordsE('a-flm', 'film', 7, '🎬', 'Film, Music & Art'),
        ...sceneLessons('a-sc', 'adult', ['ticket', 'song', 'filmtalk']),
        ...poemLessons('a-pm', 'adult'),
        ...sentences('a-pv', 'proverbs', 4),
        ...wordsE('a-cel', 'celebrate', 7, '🎉', 'Celebrations & Weddings'),
        ...storyLessons(a, 'adult', ['wedding']),
      ]),
      bossUnit('a-b', 'a-world', 'Urdu Beyond Borders', '🌍', 'Urdu in India and the diaspora, and its sister Hindi', [
        ...words('a-uh', 'urduhindi', 6, 'Urdu & Hindi: Different Words'),
        ...passageLessons('a-rdb', 'adult', ['diaspora', 'lahore']),
        ...storyLessons(a, 'adult', ['delhicousin']),
      ]),
      grammarUnit(a),
      exploreUnit('a'),
    ],
  }

  return { teen: voyagers, senior: pathfinders, adult: wayfarers }
}

