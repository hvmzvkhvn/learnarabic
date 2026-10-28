// Look & Learn scenes (tap a picture, hear the word) and Build-the-scene tasks (put the right thing in the picture).
// Words are { bn, roman, en }   (bn = the Urdu).
const w = (bn, roman, en) => ({ bn, roman, en })
const it = (e, x, y, s, word, extra = {}) => ({ e, x, y, s, word, ...extra })

export const lookScenes = [
  {
    id: 'village', emoji: '🏡', title: { bn: 'گاؤں', en: 'The Village' },
    scene: {
      bg: 'village', time: 'day', noLuminary: true, alt: 'A village with a house, tree, pond, boat and animals',
      items: [
        it('☀️', 86, 16, 44, w('سورج', 'sooraj', 'sun'), { anim: 'pulse' }),
        it('🏡', 22, 58, 64, w('گھر', 'ghar', 'house')),
        it('🌳', 48, 52, 66, w('درخت', 'darakht', 'tree'), { anim: 'sway' }),
        it('🐄', 70, 72, 46, w('گائے', 'gaaye', 'cow')),
        it('🦆', 30, 84, 34, w('بطخ', 'batakh', 'duck'), { anim: 'bob' }),
        it('🛶', 82, 84, 44, w('کشتی', 'kashti', 'boat'), { anim: 'bob' }),
        it('🐦', 62, 24, 28, w('پرندہ', 'parinda', 'bird'), { anim: 'drift' }),
        it('🌼', 8, 70, 28, w('پھول', 'phool', 'flower')),
      ],
    },
  },
  {
    id: 'home', emoji: '🛏️', title: { bn: 'میرا کمرہ', en: 'My Room' },
    scene: {
      bg: 'room', time: 'day', alt: 'A bedroom with a bed, clock, books, a chair and toys',
      items: [
        it('🛏️', 24, 66, 66, w('بستر', 'bistar', 'bed')),
        it('⏰', 60, 36, 36, w('گھڑی', 'ghaṛi', 'clock'), { anim: 'pulse' }),
        it('📚', 80, 74, 40, w('کتابیں', 'kitaaben', 'books')),
        it('🧸', 52, 80, 40, w('کھلونا', 'khilauna', 'toy'), { anim: 'bob' }),
        it('🪑', 70, 76, 44, w('کرسی', 'kursi', 'chair')),
        it('🪟', 82, 29, 112, w('کھڑکی', 'khiṛki', 'window'), { z: -1 }),
      ],
    },
  },
  {
    id: 'market', emoji: '🛒', title: { bn: 'بازار', en: 'The Market' },
    scene: {
      bg: 'market', time: 'day', alt: 'A market stall with fruit, fish and a shopkeeper',
      items: [
        it('🛍️', 9, 76, 36, w('تھیلا', 'thaila', 'bag')),
        it('🥭', 23, 80, 38, w('آم', 'aam', 'mango')),
        it('🍌', 37, 80, 36, w('کیلا', 'kela', 'banana')),
        it('🍎', 51, 80, 36, w('سیب', 'seb', 'apple')),
        it('🐟', 65, 82, 40, w('مچھلی', 'machhli', 'fish')),
        it('💵', 77, 84, 30, w('پیسے', 'paise', 'money')),
        it('🧑‍🌾', 91, 70, 50, w('دکاندار', 'dukaandaar', 'shopkeeper')),
      ],
    },
  },
  {
    id: 'school', emoji: '🏫', title: { bn: 'اسکول', en: 'The Classroom' },
    scene: {
      bg: 'classroom', time: 'day', alt: 'A classroom with a teacher, a pupil, a book, a pen and a clock',
      items: [
        it('🧑‍🏫', 30, 66, 54, w('استاد', 'ustaad', 'teacher')),
        it('🧒', 62, 80, 46, w('شاگرد', 'shaagird', 'pupil')),
        it('📖', 82, 80, 36, w('کتاب', 'kitaab', 'book')),
        it('🖊️', 48, 84, 34, w('قلم', 'qalam', 'pen')),
        it('📓', 14, 84, 34, w('کاپی', 'kaapi', 'exercise book')),
        it('🕒', 66, 30, 34, w('گھڑی', 'ghaṛi', 'clock')),
      ],
    },
  },
  {
    id: 'city', emoji: '🏙️', title: { bn: 'شہر', en: 'The City' },
    scene: {
      bg: 'city', time: 'day', alt: 'A city street with a bus, a rickshaw, a school and a hospital',
      items: [
        it('🚌', 24, 80, 58, w('بس', 'bas', 'bus'), { anim: 'bob' }),
        it('🛺', 56, 82, 48, w('رکشہ', 'riksha', 'rickshaw'), { anim: 'bob' }),
        it('🏫', 84, 66, 56, w('اسکول', 'school', 'school')),
        it('🏥', 12, 66, 50, w('ہسپتال', 'haspataal', 'hospital')),
        it('🌳', 42, 72, 46, w('درخت', 'darakht', 'tree')),
        it('🚦', 70, 62, 40, w('ٹریفک کی بتی', 'ṭraifik ki batti', 'traffic light')),
      ],
    },
  },
]

export const buildTasks = [
  {
    id: 'village', emoji: '🏡', title: { bn: 'گاؤں بنائیں', en: 'Build the Village' }, bg: 'village', time: 'day', noLuminary: true,
    steps: [
      { word: w('گھر', 'ghar', 'house'), e: '🏡', x: 24, y: 58, s: 62 },
      { word: w('درخت', 'darakht', 'tree'), e: '🌳', x: 52, y: 52, s: 66, anim: 'sway' },
      { word: w('سورج', 'sooraj', 'sun'), e: '☀️', x: 84, y: 16, s: 44, anim: 'pulse' },
      { word: w('گائے', 'gaaye', 'cow'), e: '🐄', x: 74, y: 72, s: 46 },
      { word: w('کشتی', 'kashti', 'boat'), e: '🛶', x: 80, y: 86, s: 44, anim: 'bob' },
      { word: w('پرندہ', 'parinda', 'bird'), e: '🐦', x: 40, y: 26, s: 28, anim: 'drift' },
    ],
    decoys: ['🚀', '🐧', '🏔️', '🚗', '⛄'],
  },
  {
    id: 'night', emoji: '🌙', title: { bn: 'رات کی تصویر', en: 'Build the Night' }, bg: 'meadow', time: 'night', noLuminary: true,
    steps: [
      { word: w('چاند', 'chaand', 'moon'), e: '🌙', x: 78, y: 20, s: 50, anim: 'pulse' },
      { word: w('ستارہ', 'sitaara', 'star'), e: '⭐', x: 30, y: 18, s: 32, anim: 'pulse' },
      { word: w('گھر', 'ghar', 'house'), e: '🏠', x: 26, y: 62, s: 60 },
      { word: w('درخت', 'darakht', 'tree'), e: '🌳', x: 66, y: 56, s: 66, anim: 'sway' },
      { word: w('الو', 'ullu', 'owl'), e: '🦉', x: 62, y: 38, s: 30, anim: 'bob' },
    ],
    decoys: ['☀️', '🌈', '🐘', '🚌', '🏖️'],
  },
  {
    id: 'river', emoji: '🛶', title: { bn: 'دریا کی تصویر', en: 'Build the River' }, bg: 'river', time: 'day', noLuminary: true,
    steps: [
      { word: w('کشتی', 'kashti', 'boat'), e: '⛵', x: 40, y: 70, s: 54, anim: 'bob' },
      { word: w('مچھلی', 'machhli', 'fish'), e: '🐟', x: 72, y: 84, s: 38, anim: 'bob' },
      { word: w('بادل', 'baadal', 'cloud'), e: '☁️', x: 62, y: 18, s: 54, anim: 'drift' },
      { word: w('سورج', 'sooraj', 'sun'), e: '☀️', x: 16, y: 18, s: 44, anim: 'pulse' },
      { word: w('بطخ', 'batakh', 'duck'), e: '🦆', x: 20, y: 84, s: 34, anim: 'bob' },
    ],
    decoys: ['🚂', '🐫', '⛷️', '🍕', '🎸'],
  },
]
