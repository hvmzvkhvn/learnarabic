// The Arabic alphabet, taught in shape families (letters that share a body and differ only by dots).
// Each letter: { letter, name, roman, sound, example: { bn, roman, en, emoji } }
//   name   the letter's name in Arabic (what is spoken when you tap the letter)
//   roman  the letter's name in Latin letters (shown on cards)
//   sound  the consonant sound it makes, used to build syllables (b + a = ba)
// Note: the field `bn` is the app's name for "text in the language being learnt" (kept from Learn Bangla).
// Arabic text is written with full vowel marks (tashkeel), the way children's books and beginners' books print it.
const L = (letter, name, roman, sound, bn, wordRoman, en, emoji) => ({
  letter,
  name,
  roman,
  sound,
  example: { bn, roman: wordRoman, en, emoji },
})

export const letterGroups = [
  {
    key: 'ba',
    name: 'Alif and the baa family',
    hint: 'ب ت ث share one boat-shaped body. Only the dots change: one below, two on top, three on top.',
    letters: [
      L('ا', 'أَلِف', 'alif', 'a', 'أَرْنَب', 'arnab', 'rabbit', '🐰'),
      L('ب', 'بَاء', 'baa', 'b', 'بَطَّة', 'baṭṭa', 'duck', '🦆'),
      L('ت', 'تَاء', 'taa', 't', 'تُفَّاحَة', 'tuffaaḥa', 'apple', '🍎'),
      L('ث', 'ثَاء', 'thaa', 'th', 'ثَعْلَب', 'thaʿlab', 'fox', '🦊'),
    ],
  },
  {
    key: 'jeem',
    name: 'The jiim family',
    hint: 'ج ح خ share one hook. A dot inside, no dot, a dot on top.',
    letters: [
      L('ج', 'جِيم', 'jiim', 'j', 'جَمَل', 'jamal', 'camel', '🐪'),
      L('ح', 'حَاء', 'ḥaa', 'ḥ', 'حِصَان', 'ḥiṣaan', 'horse', '🐴'),
      L('خ', 'خَاء', 'khaa', 'kh', 'خُبْز', 'khubz', 'bread', '🍞'),
    ],
  },
  {
    key: 'dal',
    name: 'The daal and raa families',
    hint: 'د ذ ر ز never join to the letter after them (and neither do ا and و).',
    letters: [
      L('د', 'دَال', 'daal', 'd', 'دُبّ', 'dubb', 'bear', '🐻'),
      L('ذ', 'ذَال', 'dhaal', 'dh', 'ذُرَة', 'dhura', 'corn', '🌽'),
      L('ر', 'رَاء', 'raa', 'r', 'رِيشَة', 'riisha', 'feather', '🪶'),
      L('ز', 'زَاي', 'zaay', 'z', 'زَرَافَة', 'zaraafa', 'giraffe', '🦒'),
    ],
  },
  {
    key: 'seen',
    name: 'The siin, ṣaad and ṭaa families',
    hint: 'س ش have three teeth; ص ض have a loop; ط ظ have a loop with a tall stick.',
    letters: [
      L('س', 'سِين', 'siin', 's', 'سَمَكَة', 'samaka', 'fish', '🐟'),
      L('ش', 'شِين', 'shiin', 'sh', 'شَمْس', 'shams', 'sun', '☀️'),
      L('ص', 'صَاد', 'ṣaad', 'ṣ', 'صَقْر', 'ṣaqr', 'falcon', '🦅'),
      L('ض', 'ضَاد', 'ḍaad', 'ḍ', 'ضِفْدَع', 'ḍifdaʿ', 'frog', '🐸'),
      L('ط', 'طَاء', 'ṭaa', 'ṭ', 'طَائِرَة', 'ṭaaʾira', 'aeroplane', '✈️'),
      L('ظ', 'ظَاء', 'ẓaa', 'ẓ', 'ظَرْف', 'ẓarf', 'envelope', '✉️'),
    ],
  },
  {
    key: 'ain',
    name: 'The ʿayn, faa and qaaf families',
    hint: 'ع غ look like a small c on a tail. ف has one dot on top; ق has two and a deeper bowl.',
    letters: [
      L('ع', 'عَيْن', 'ʿayn', 'ʿ', 'عَيْن', 'ʿayn', 'eye', '👁️'),
      L('غ', 'غَيْن', 'ghayn', 'gh', 'غَيْمَة', 'ghayma', 'cloud', '☁️'),
      L('ف', 'فَاء', 'faa', 'f', 'فِيل', 'fiil', 'elephant', '🐘'),
      L('ق', 'قَاف', 'qaaf', 'q', 'قَمَر', 'qamar', 'moon', '🌙'),
    ],
  },
  {
    key: 'kaf',
    name: 'Kaaf to nuun',
    hint: 'ك has a little hamza-like mark inside. ل is a tall hook, م a small round head, ن a bowl with one dot.',
    letters: [
      L('ك', 'كَاف', 'kaaf', 'k', 'كِتَاب', 'kitaab', 'book', '📖'),
      L('ل', 'لَام', 'laam', 'l', 'لَيْمُون', 'laymuun', 'lemon', '🍋'),
      L('م', 'مِيم', 'miim', 'm', 'مَوْز', 'mawz', 'banana', '🍌'),
      L('ن', 'نُون', 'nuun', 'n', 'نَحْلَة', 'naḥla', 'bee', '🐝'),
    ],
  },
  {
    key: 'ha',
    name: 'The last letters',
    hint: 'و and ي are consonants (w, y) and long vowels (uu, ii). ة only comes at the end of a word.',
    letters: [
      L('ه', 'هَاء', 'haa', 'h', 'هَدِيَّة', 'hadiyya', 'present', '🎁'),
      L('و', 'وَاو', 'waaw', 'w', 'وَرْدَة', 'warda', 'rose', '🌹'),
      L('ي', 'يَاء', 'yaa', 'y', 'يَد', 'yad', 'hand', '✋'),
      L('ء', 'هَمْزَة', 'hamza', 'ʾ', 'سَمَاء', 'samaaʾ', 'sky', '🌌'),
      L('ة', 'تَاء مَرْبُوطَة', 'taa marbuuṭa', 'a', 'شَجَرَة', 'shajara', 'tree', '🌳'),
    ],
  },
]

export const allLetters = letterGroups.flatMap((g) => g.letters)

// Vowel marks (الحركات) and long vowels, shown on ب. `sign` is what is added after the consonant.
// `says` replaces 'says "…"' for marks that are not a vowel sound.
// `make(c)` builds a syllable on another letter and `rom(sound)` its transliteration, where "c + sign" is not enough.
export const vowelSigns = [
  { sign: 'َ', name: 'fatḥa', roman: 'a', combined: 'بَ', combinedRoman: 'ba' },
  { sign: 'ِ', name: 'kasra', roman: 'i', combined: 'بِ', combinedRoman: 'bi' },
  { sign: 'ُ', name: 'ḍamma', roman: 'u', combined: 'بُ', combinedRoman: 'bu' },
  { sign: 'َا', name: 'fatḥa + alif', roman: 'aa', combined: 'بَا', combinedRoman: 'baa' },
  { sign: 'ِي', name: 'kasra + yaa', roman: 'ii', combined: 'بِي', combinedRoman: 'bii' },
  { sign: 'ُو', name: 'ḍamma + waaw', roman: 'uu', combined: 'بُو', combinedRoman: 'buu' },
  { sign: 'ْ', name: 'sukuun', roman: '', says: 'means no vowel', combined: 'أَبْ', combinedRoman: 'ab', make: (c) => `أَ${c}ْ`, rom: (s) => `a${s}` },
  { sign: 'َّ', name: 'shadda', roman: 'a', says: 'doubles the letter', combined: 'أَبَّ', combinedRoman: 'abba', make: (c) => `أَ${c}َّ`, rom: (s) => `a${s}${s}a` },
  { sign: 'ً', name: 'tanwiin fatḥ', roman: 'an', combined: 'بًا', combinedRoman: 'ban', make: (c) => `${c}ًا` },
  { sign: 'ٍ', name: 'tanwiin kasr', roman: 'in', combined: 'بٍ', combinedRoman: 'bin' },
  { sign: 'ٌ', name: 'tanwiin ḍamm', roman: 'un', combined: 'بٌ', combinedRoman: 'bun' },
]

// Hamza seats and special shapes. `name` is what gets spoken when the shape is tapped.
// (The export keeps Learn Urdu's name, `aspirates`, so the shared code did not have to change.)
export const aspirates = [
  L('لا', 'لَا', 'laam-alif', 'laa', 'لَاعِب', 'laaʿib', 'player', '⚽'),
  L('أ', 'أَ', 'alif + hamza on top', 'ʾa', 'أُمّ', 'umm', 'mother', '👩'),
  L('إ', 'إِ', 'alif + hamza below', 'ʾi', 'إِبْرِيق', 'ibriiq', 'teapot', '🫖'),
  L('آ', 'آ', 'alif madda', 'ʾaa', 'قُرْآن', 'qurʾaan', 'the Quran', '📖'),
  L('ى', 'أَلِف مَقْصُورَة', 'alif maqṣuura', 'aa', 'مُسْتَشْفَى', 'mustashfaa', 'hospital', '🏥'),
  L('ؤ', 'هَمْزَة عَلَى الوَاو', 'hamza on waaw', 'ʾ', 'لُؤْلُؤ', 'luʾluʾ', 'pearl', '🦪'),
  L('ئ', 'هَمْزَة عَلَى اليَاء', 'hamza on yaa', 'ʾ', 'ذِئْب', 'dhiʾb', 'wolf', '🐺'),
]
