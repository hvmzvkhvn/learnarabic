// "How Arabic Works": three things Arabic has that Bangla and Urdu do not.
//   • Sun and moon letters: whether the ل of الْ is heard (الْقَمَر) or melts into the next letter (الشَّمْس)
//   • Roots and patterns: three root letters carry a meaning, and patterns around them make related words
//   • One, two, many: a dual for exactly two (كِتَابَانِ) and plurals that often change the inside of the word (كُتُب)
// Word categories here go into the content bank like any other (so they get review and audio).
// `picks` are "choose the right one" questions; their answers and distractors are words from these categories.
const W = (bn, roman, en, emoji) => ({ bn, roman, en, emoji })

export const SUN_LETTERS = 'ت ث د ذ ر ز س ش ص ض ط ظ ل ن'

export const grammarWordCategories = [
  {
    key: 'sun', title: 'Sun Letters', emoji: '☀️', visual: true,
    note: 'With these letters the ل of الْ is silent, and the letter after it is doubled with a shadda: الشَّمْس is "ash-shams", not "al-shams". They are all made with the tip of the tongue: ' + SUN_LETTERS + '.',
    words: [
      W('الشَّمْس', 'ash-shams', 'the sun', '☀️'),
      W('التَّمْر', 'at-tamr', 'the dates', '🌴'),
      W('الدَّرْس', 'ad-dars', 'the lesson', '📖'),
      W('الرَّجُل', 'ar-rajul', 'the man', '👨'),
      W('الزَّيْت', 'az-zayt', 'the oil', '🫒'),
      W('السَّمَك', 'as-samak', 'the fish', '🐟'),
      W('الصَّبَاح', 'aṣ-ṣabaaḥ', 'the morning', '🌅'),
      W('النَّهْر', 'an-nahr', 'the river', '🏞️'),
      W('اللَّيْل', 'al-layl', 'the night', '🌃'),
      W('الطَّائِرَة', 'aṭ-ṭaaʾira', 'the plane', '✈️'),
    ],
  },
  {
    key: 'moon', title: 'Moon Letters', emoji: '🌙', visual: true,
    note: 'With every other letter you hear the ل of الْ, and it carries a sukuun: الْقَمَر is "al-qamar".',
    words: [
      W('الْقَمَر', 'al-qamar', 'the moon', '🌙'),
      W('الْبَاب', 'al-baab', 'the door', '🚪'),
      W('الْكِتَاب', 'al-kitaab', 'the book', '📕'),
      W('الْوَلَد', 'al-walad', 'the boy', '👦'),
      W('الْبَيْت', 'al-bayt', 'the house', '🏠'),
      W('الْجَمَل', 'al-jamal', 'the camel', '🐫'),
      W('الْحَلِيب', 'al-ḥaliib', 'the milk', '🥛'),
      W('الْمَاء', 'al-maaʾ', 'the water', '💧'),
      W('الْفِيل', 'al-fiil', 'the elephant', '🐘'),
      W('الْعَيْن', 'al-ʿayn', 'the eye', '👁️'),
    ],
  },
  {
    key: 'root-ktb', title: 'Root ك ت ب: Writing', emoji: '✍️',
    note: 'Most Arabic words grow from three root letters. ك ت ب is about writing: put it into different patterns and you get the writer, the book, the desk and the library.',
    words: [
      W('كَتَبَ', 'kataba', 'he wrote', '✍️'),
      W('كِتَاب', 'kitaab', 'book', '📕'),
      W('كَاتِب', 'kaatib', 'writer', '🧑‍💼'),
      W('مَكْتَب', 'maktab', 'desk, office', '🗄️'),
      W('مَكْتَبَة', 'maktaba', 'library, bookshop', '📚'),
      W('مَكْتُوب', 'maktuub', 'written; a letter', '✉️'),
    ],
  },
  {
    key: 'root-drs', title: 'Root د ر س: Studying', emoji: '🎓',
    note: 'د ر س is about studying. مَـ at the front often means "the place where it happens": مَدْرَسَة, the place of studying, is a school.',
    words: [
      W('دَرَسَ', 'darasa', 'he studied', '📝'),
      W('دَرْس', 'dars', 'lesson', '📖'),
      W('مُدَرِّس', 'mudarris', 'teacher', '🧑‍🏫'),
      W('مَدْرَسَة', 'madrasa', 'school', '🏫'),
      W('دِرَاسَة', 'diraasa', 'studies', '🎓'),
    ],
  },
  {
    key: 'root-lab', title: 'Root ل ع ب: Playing', emoji: '⚽',
    note: 'ل ع ب is about playing. The pattern فَاعِل (with a long aa after the first root letter) is the person who does it: لَاعِب, a player — like كَاتِب, a writer.',
    words: [
      W('لَعِبَ', 'laʿiba', 'he played', '🤸'),
      W('لُعْبَة', 'luʿba', 'toy, game', '🧸'),
      W('لَاعِب', 'laaʿib', 'player', '🏃'),
      W('مَلْعَب', 'malʿab', 'pitch, stadium', '🏟️'),
    ],
  },
  {
    key: 'root-sjd', title: 'Root س ج د: Bowing Down', emoji: '🕌',
    note: 'س ج د means to bow down in prayer (سُجُود). A مَسْجِد is the place of sujuud — a mosque — and a سَجَّادَة is the mat you pray on.',
    words: [
      W('سَجَدَ', 'sajada', 'he bowed down in prayer', '🙇'),
      W('مَسْجِد', 'masjid', 'mosque', '🕌'),
      W('سَجَّادَة', 'sajjaada', 'prayer mat, rug', '🟫'),
    ],
  },
  {
    key: 'dual', title: 'One, Two, Many', emoji: '✌️', visual: true,
    note: 'Arabic has a form for exactly two: add ـَانِ (كِتَابٌ → كِتَابَانِ). For three or more you need the plural. Many plurals change the inside of the word (كِتَاب → كُتُب); words for people can add ـُونَ for men or ـَات for women.',
    words: [
      W('كِتَاب', 'kitaab', 'a book', '📕'),
      W('كِتَابَانِ', 'kitaabaani', 'two books', '📕📕'),
      W('كُتُب', 'kutub', 'books', '📚'),
      W('قَلَم', 'qalam', 'a pen', '🖊️'),
      W('قَلَمَانِ', 'qalamaani', 'two pens', '🖊️🖊️'),
      W('أَقْلَام', 'aqlaam', 'pens', '🖊️🖊️🖊️'),
      W('وَلَد', 'walad', 'a boy', '👦'),
      W('وَلَدَانِ', 'waladaani', 'two boys', '👦👦'),
      W('أَوْلَاد', 'awlaad', 'boys, children', '👦👦👦'),
      W('بَيْت', 'bayt', 'a house', '🏠'),
      W('بَيْتَانِ', 'baytaani', 'two houses', '🏠🏠'),
      W('بُيُوت', 'buyuut', 'houses', '🏘️'),
      W('سَيَّارَة', 'sayyaara', 'a car', '🚗'),
      W('سَيَّارَتَانِ', 'sayyaarataani', 'two cars', '🚗🚗'),
      W('سَيَّارَات', 'sayyaaraat', 'cars', '🚗🚗🚗'),
      W('مُعَلِّم', 'muʿallim', 'a teacher (man)', '👨‍🏫'),
      W('مُعَلِّمَانِ', 'muʿallimaani', 'two teachers (men)', '👨‍🏫👨‍🏫'),
      W('مُعَلِّمُونَ', 'muʿallimuuna', 'teachers (men)', '👨‍🏫👨‍🏫👨‍🏫'),
    ],
  },
]

// ---- "Choose the right one" questions ----------------------------------------------------------
// { title, stem: { bn?, roman?, art?, text? }, right: [cat, bn], wrong: [[cat, bn], …] }

// Sun or moon? Words to sort, some new (the rule works on any word).
const sortWords = [
  ['النُّور', 'an-nuur', 'the light'],
  ['الذَّهَب', 'adh-dhahab', 'the gold'],
  ['الثَّلْج', 'ath-thalj', 'the snow'],
  ['السَّمَاء', 'as-samaaʾ', 'the sky'],
  ['الدَّار', 'ad-daar', 'the home'],
  ['الْيَد', 'al-yad', 'the hand'],
  ['الْخُبْز', 'al-khubz', 'the bread'],
  ['الْغُرْفَة', 'al-ghurfa', 'the room'],
  ['الْأُمّ', 'al-umm', 'the mother'],
  ['الْهَاتِف', 'al-haatif', 'the phone'],
]
const isSun = (bn) => SUN_LETTERS.split(' ').includes([...bn.replace(/[ً-ْٰ]/g, '')][2])
const SUN = ['sun', 'الشَّمْس']
const MOON = ['moon', 'الْقَمَر']
export const sunMoonPicks = sortWords.map(([bn, roman, en]) => ({
  roman,
  en,
  title: `Sun letter or moon letter? (${en})`,
  stem: { bn }, // no transliteration: "an-nuur" would give the answer away; look for the shadda instead
  right: isSun(bn) ? SUN : MOON,
  wrong: [isSun(bn) ? MOON : SUN],
}))

const R = (cat, bn) => [cat, bn]
export const rootPicks = [
  { title: 'Which one is a person who plays?', stem: { art: '🏃' }, right: R('root-lab', 'لَاعِب'), wrong: [R('root-lab', 'مَلْعَب'), R('root-lab', 'لُعْبَة')] },
  { title: 'Which one is a place for studying?', stem: { art: '🏫' }, right: R('root-drs', 'مَدْرَسَة'), wrong: [R('root-drs', 'مُدَرِّس'), R('root-drs', 'دَرْس')] },
  { title: 'Which one is a person who writes?', stem: { art: '🧑‍💼' }, right: R('root-ktb', 'كَاتِب'), wrong: [R('root-ktb', 'مَكْتَب'), R('root-ktb', 'كِتَاب')] },
  { title: 'Which one is a place for bowing down in prayer?', stem: { art: '🕌' }, right: R('root-sjd', 'مَسْجِد'), wrong: [R('root-sjd', 'سَجَّادَة'), R('root-sjd', 'سَجَدَ')] },
  { title: 'Which one is a place for playing?', stem: { art: '🏟️' }, right: R('root-lab', 'مَلْعَب'), wrong: [R('root-lab', 'لَاعِب'), R('root-ktb', 'مَكْتَب')] },
  { title: 'Which word shares its root with كِتَاب?', stem: { art: '📕' }, right: R('root-ktb', 'مَكْتَبَة'), wrong: [R('root-drs', 'مَدْرَسَة'), R('root-lab', 'مَلْعَب')] },
  { title: 'Which word shares its root with لُعْبَة?', stem: { art: '🧸' }, right: R('root-lab', 'لَاعِب'), wrong: [R('root-ktb', 'كَاتِب'), R('root-drs', 'دِرَاسَة')] },
  { title: 'Which word shares its root with مَدْرَسَة?', stem: { art: '🏫' }, right: R('root-drs', 'دَرْس'), wrong: [R('root-ktb', 'مَكْتَب'), R('root-sjd', 'مَسْجِد')] },
  { title: 'Which one means "he wrote"?', stem: { art: '✍️' }, right: R('root-ktb', 'كَتَبَ'), wrong: [R('root-drs', 'دَرَسَ'), R('root-lab', 'لَعِبَ')] },
  { title: 'Which word is NOT from the root ك ت ب?', stem: { art: '🔍' }, right: R('root-drs', 'مُدَرِّس'), wrong: [R('root-ktb', 'مَكْتُوب'), R('root-ktb', 'كَاتِب')] },
]

// One, two or many? Every form of every noun in the dual category.
const dual = grammarWordCategories.find((c) => c.key === 'dual').words
export const dualPicks = []
for (let i = 0; i < dual.length; i += 3) {
  const set = dual.slice(i, i + 3)
  set.forEach((w, j) => {
    if ((i / 3 + j) % 2) return // about half of them, varied between one, two and many
    dualPicks.push({
      title: `How do you say "${w.en}"?`,
      stem: { art: w.emoji },
      right: ['dual', w.bn],
      wrong: set.filter((x) => x !== w).map((x) => ['dual', x.bn]),
    })
  })
}
