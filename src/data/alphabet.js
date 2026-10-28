// The Urdu alphabet, taught in shape families (letters that share a body and differ only by dots).
// Each letter: { letter, name, roman, sound, example: { bn, roman, en, emoji } }
//   name   the letter's name in Urdu script (what is spoken when you tap the letter)
//   roman  the letter's name in Roman Urdu (shown on cards)
//   sound  the consonant sound it makes, used to build syllables (b + a = ba)
// Note: the field `bn` is the app's name for "text in the language being learnt" (kept from Learn Bangla).
const L = (letter, name, roman, sound, bn, wordRoman, en, emoji) => ({
  letter,
  name,
  roman,
  sound,
  example: { bn, roman: wordRoman, en, emoji },
})

export const letterGroups = [
  {
    key: 'be',
    name: 'Alif and the be family',
    hint: 'ب پ ت ٹ ث all share one boat-shaped body. Only the dots (and the little ط on ٹ) change.',
    letters: [
      L('ا', 'الف', 'alif', 'a', 'انڈا', 'anḍa', 'egg', '🥚'),
      L('آ', 'الف مدّہ', 'alif madda', 'aa', 'آم', 'aam', 'mango', '🥭'),
      L('ب', 'بے', 'be', 'b', 'بلی', 'billi', 'cat', '🐱'),
      L('پ', 'پے', 'pe', 'p', 'پتنگ', 'patang', 'kite', '🪁'),
      L('ت', 'تے', 'te', 't', 'تتلی', 'titli', 'butterfly', '🦋'),
      L('ٹ', 'ٹے', 'ṭe', 'ṭ', 'ٹماٹر', 'ṭamaaṭar', 'tomato', '🍅'),
      L('ث', 'ثے', 'se', 's', 'ثمر', 'samar', 'fruit (a reward)', '🍒'),
    ],
  },
  {
    key: 'jeem',
    name: 'The jeem family',
    hint: 'ج چ ح خ share one hook. Dots below, three dots below, no dot, a dot on top.',
    letters: [
      L('ج', 'جیم', 'jeem', 'j', 'جہاز', 'jahaaz', 'ship', '🚢'),
      L('چ', 'چے', 'che', 'ch', 'چاند', 'chaand', 'moon', '🌙'),
      L('ح', 'بڑی حے', 'baṛi he', 'h', 'حلوہ', 'halwa', 'halwa (a sweet)', '🍮'),
      L('خ', 'خے', 'khe', 'kh', 'خرگوش', 'khargosh', 'rabbit', '🐰'),
    ],
  },
  {
    key: 'daal',
    name: 'The daal and re families',
    hint: 'These seven letters never join to the letter after them.',
    letters: [
      L('د', 'دال', 'daal', 'd', 'دودھ', 'doodh', 'milk', '🥛'),
      L('ڈ', 'ڈال', 'ḍaal', 'ḍ', 'ڈبہ', 'ḍabba', 'box', '📦'),
      L('ذ', 'ذال', 'zaal', 'z', 'ذائقہ', 'zaa\'iqa', 'taste', '👅'),
      L('ر', 'رے', 're', 'r', 'رسی', 'rassi', 'rope', '🪢'),
      L('ڑ', 'ڑے', 'ṛe', 'ṛ', 'پہاڑ', 'pahaaṛ', 'mountain', '⛰️'),
      L('ز', 'زے', 'ze', 'z', 'زرافہ', 'zaraafa', 'giraffe', '🦒'),
      L('ژ', 'ژے', 'zhe', 'zh', 'ژالہ', 'zhaala', 'hail', '🌨️'),
    ],
  },
  {
    key: 'seen',
    name: 'The seen, suaad and to\'e families',
    hint: 'س ش have three teeth; ص ض have a loop; ط ظ have a loop with a tall stick.',
    letters: [
      L('س', 'سین', 'seen', 's', 'سیب', 'seb', 'apple', '🍎'),
      L('ش', 'شین', 'sheen', 'sh', 'شیر', 'sher', 'lion', '🦁'),
      L('ص', 'صاد', 'suaad', 's', 'صابن', 'saabun', 'soap', '🧼'),
      L('ض', 'ضاد', 'zuaad', 'z', 'ضدی', 'ziddi', 'stubborn', '😤'),
      L('ط', 'طوئے', 'to\'e', 't', 'طوطا', 'tota', 'parrot', '🦜'),
      L('ظ', 'ظوئے', 'zo\'e', 'z', 'ظہر', 'zuhr', 'the midday prayer', '🕛'),
    ],
  },
  {
    key: 'ain',
    name: 'The ain, fe and qaaf families',
    hint: 'ع غ look like a small c on a tail. ف has one dot; ق has two and a deeper bowl.',
    letters: [
      L('ع', 'عین', 'ain', '', 'عینک', 'ainak', 'glasses', '👓'),
      L('غ', 'غین', 'ghain', 'gh', 'غبارہ', 'ghubaara', 'balloon', '🎈'),
      L('ف', 'فے', 'fe', 'f', 'فٹ بال', 'fuṭ baal', 'football', '⚽'),
      L('ق', 'قاف', 'qaaf', 'q', 'قلم', 'qalam', 'pen', '🖊️'),
    ],
  },
  {
    key: 'kaaf',
    name: 'Kaaf to noon',
    hint: 'ک and گ are tall with a slanted roof; گ has two. ں is a noon with no dot that makes the sound nasal.',
    letters: [
      L('ک', 'کاف', 'kaaf', 'k', 'کتاب', 'kitaab', 'book', '📖'),
      L('گ', 'گاف', 'gaaf', 'g', 'گائے', 'gaaye', 'cow', '🐄'),
      L('ل', 'لام', 'laam', 'l', 'لیموں', 'lemoon', 'lemon', '🍋'),
      L('م', 'میم', 'meem', 'm', 'مچھلی', 'machhli', 'fish', '🐟'),
      L('ن', 'نون', 'noon', 'n', 'ناک', 'naak', 'nose', '👃'),
      L('ں', 'نون غنہ', 'noon ghunna', 'n', 'ماں', 'maan̐', 'mother', '👩‍👧'),
    ],
  },
  {
    key: 'wao',
    name: 'The last letters',
    hint: 'و is a consonant (w) and a vowel (oo, o). ھ only joins other letters to make sounds like bh and ph.',
    letters: [
      L('و', 'واؤ', 'wao', 'w', 'وقت', 'waqt', 'time', '⏰'),
      L('ہ', 'چھوٹی ہے', 'chhoṭi he', 'h', 'ہاتھی', 'haathi', 'elephant', '🐘'),
      L('ھ', 'دو چشمی ہے', 'do-chashmi he', 'h', 'بھالو', 'bhaalu', 'bear', '🐻'),
      L('ء', 'ہمزہ', 'hamza', '', 'چائے', 'chaaye', 'tea', '☕'),
      L('ی', 'چھوٹی یے', 'chhoṭi ye', 'y', 'یخ', 'yakh', 'ice', '🧊'),
      L('ے', 'بڑی یے', 'baṛi ye', 'y', 'کیلے', 'kele', 'bananas', '🍌'),
    ],
  },
]

export const allLetters = letterGroups.flatMap((g) => g.letters)

// Vowel marks (اعراب) and long vowels, shown on ب. `sign` is what is added after the consonant.
export const vowelSigns = [
  { sign: 'َ', name: 'zabar', roman: 'a', combined: 'بَ', combinedRoman: 'ba' },
  { sign: 'ِ', name: 'zer', roman: 'i', combined: 'بِ', combinedRoman: 'bi' },
  { sign: 'ُ', name: 'pesh', roman: 'u', combined: 'بُ', combinedRoman: 'bu' },
  { sign: 'ا', name: 'alif', roman: 'aa', combined: 'با', combinedRoman: 'baa' },
  { sign: 'ی', name: 'chhoṭi ye', roman: 'ee', combined: 'بی', combinedRoman: 'bee' },
  { sign: 'ُو', name: 'pesh + wao', roman: 'oo', combined: 'بُو', combinedRoman: 'boo' },
  { sign: 'ے', name: 'baṛi ye', roman: 'e', combined: 'بے', combinedRoman: 'be' },
  { sign: 'و', name: 'wao', roman: 'o', combined: 'بو', combinedRoman: 'bo' },
  { sign: 'َے', name: 'zabar + baṛi ye', roman: 'ai', combined: 'بَے', combinedRoman: 'bai' },
  { sign: 'َو', name: 'zabar + wao', roman: 'au', combined: 'بَو', combinedRoman: 'bau' },
]

// Aspirated sounds: a letter + do-chashmi he (ھ) is one sound. `name` is what gets spoken (the sound + aa: بھا).
export const aspirates = [
  L('بھ', 'بھا', 'bh', 'bh', 'بھالو', 'bhaalu', 'bear', '🐻'),
  L('پھ', 'پھا', 'ph', 'ph', 'پھول', 'phool', 'flower', '🌸'),
  L('تھ', 'تھا', 'th', 'th', 'تھالی', 'thaali', 'plate', '🍽️'),
  L('ٹھ', 'ٹھا', 'ṭh', 'ṭh', 'ٹھنڈا', 'ṭhanḍa', 'cold', '🥶'),
  L('جھ', 'جھا', 'jh', 'jh', 'جھولا', 'jhoola', 'swing', '🎠'),
  L('چھ', 'چھا', 'chh', 'chh', 'چھتری', 'chhatri', 'umbrella', '☂️'),
  L('دھ', 'دھا', 'dh', 'dh', 'دھوپ', 'dhoop', 'sunshine', '☀️'),
  L('ڈھ', 'ڈھا', 'ḍh', 'ḍh', 'ڈھول', 'ḍhol', 'drum', '🥁'),
  L('کھ', 'کھا', 'kh', 'kh', 'کھلونا', 'khilauna', 'toy', '🧸'),
  L('گھ', 'گھا', 'gh', 'gh', 'گھر', 'ghar', 'house', '🏠'),
]
