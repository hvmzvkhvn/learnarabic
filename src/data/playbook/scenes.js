// Look & Learn scenes (tap a picture, hear the word) and Build-the-scene tasks (put the right thing in the picture).
// Words are { bn, roman, en }   (bn = the Arabic). Single words are shown without case endings, as in words.js.
const w = (bn, roman, en) => ({ bn, roman, en })
const it = (e, x, y, s, word, extra = {}) => ({ e, x, y, s, word, ...extra })

export const lookScenes = [
  {
    id: 'farm', emoji: '🌴', title: { bn: 'الْمَزْرَعَة', en: 'The Farm' },
    scene: {
      bg: 'village', time: 'day', noLuminary: true, alt: 'A farm with a house, palm tree, pond, boat and animals',
      items: [
        it('☀️', 86, 16, 44, w('شَمْس', 'shams', 'sun'), { anim: 'pulse' }),
        it('🏡', 22, 58, 64, w('بَيْت', 'bayt', 'house')),
        it('🌴', 48, 52, 66, w('نَخْلَة', 'nakhla', 'palm tree'), { anim: 'sway' }),
        it('🐄', 70, 72, 46, w('بَقَرَة', 'baqara', 'cow')),
        it('🦆', 30, 84, 34, w('بَطَّة', 'baṭṭa', 'duck'), { anim: 'bob' }),
        it('🛶', 82, 84, 44, w('قَارِب', 'qaarib', 'boat'), { anim: 'bob' }),
        it('🐦', 62, 24, 28, w('طَائِر', 'ṭaaʾir', 'bird'), { anim: 'drift' }),
        it('🌼', 8, 70, 28, w('زَهْرَة', 'zahra', 'flower')),
      ],
    },
  },
  {
    id: 'home', emoji: '🛏️', title: { bn: 'غُرْفَتِي', en: 'My Room' },
    scene: {
      bg: 'room', time: 'day', alt: 'A bedroom with a bed, clock, books, a chair and toys',
      items: [
        it('🛏️', 24, 66, 66, w('سَرِير', 'sariir', 'bed')),
        it('⏰', 60, 36, 36, w('سَاعَة', 'saaʿa', 'clock'), { anim: 'pulse' }),
        it('📚', 80, 74, 40, w('كُتُب', 'kutub', 'books')),
        it('🧸', 52, 80, 40, w('لُعْبَة', 'luʿba', 'toy'), { anim: 'bob' }),
        it('🪑', 70, 76, 44, w('كُرْسِيّ', 'kursii', 'chair')),
        it('🪟', 82, 29, 112, w('نَافِذَة', 'naafidha', 'window'), { z: -1 }),
      ],
    },
  },
  {
    id: 'souq', emoji: '🛒', title: { bn: 'السُّوق', en: 'The Souq' },
    scene: {
      bg: 'market', time: 'day', alt: 'A market stall with fruit, fish and a seller',
      items: [
        it('🛍️', 9, 76, 36, w('كِيس', 'kiis', 'bag')),
        it('🍈', 23, 80, 38, w('بِطِّيخ', 'biṭṭiikh', 'melon')),
        it('🍌', 37, 80, 36, w('مَوْز', 'mawz', 'bananas')),
        it('🍎', 51, 80, 36, w('تُفَّاح', 'tuffaaḥ', 'apples')),
        it('🐟', 65, 82, 40, w('سَمَك', 'samak', 'fish')),
        it('💵', 77, 84, 30, w('نُقُود', 'nuquud', 'money')),
        it('🧑‍🌾', 91, 70, 50, w('بَائِع', 'baaʾiʿ', 'seller')),
      ],
    },
  },
  {
    id: 'school', emoji: '🏫', title: { bn: 'الصَّفّ', en: 'The Classroom' },
    scene: {
      bg: 'classroom', time: 'day', alt: 'A classroom with a teacher, a pupil, a book, a pen and a clock',
      items: [
        it('🧑‍🏫', 30, 66, 54, w('مُعَلِّم', 'muʿallim', 'teacher')),
        it('🧒', 62, 80, 46, w('تِلْمِيذ', 'tilmiidh', 'pupil')),
        it('📖', 82, 80, 36, w('كِتَاب', 'kitaab', 'book')),
        it('🖊️', 48, 84, 34, w('قَلَم', 'qalam', 'pen')),
        it('📓', 14, 84, 34, w('دَفْتَر', 'daftar', 'exercise book')),
        it('🕒', 66, 30, 34, w('سَاعَة', 'saaʿa', 'clock')),
      ],
    },
  },
  {
    id: 'city', emoji: '🏙️', title: { bn: 'الْمَدِينَة', en: 'The City' },
    scene: {
      bg: 'city', time: 'day', alt: 'A city street with a bus, a car, a mosque, a school and a hospital',
      items: [
        it('🚌', 24, 80, 58, w('حَافِلَة', 'ḥaafila', 'bus'), { anim: 'bob' }),
        it('🚗', 56, 82, 48, w('سَيَّارَة', 'sayyaara', 'car'), { anim: 'bob' }),
        it('🏫', 84, 66, 56, w('مَدْرَسَة', 'madrasa', 'school')),
        it('🏥', 12, 66, 50, w('مُسْتَشْفًى', 'mustashfan', 'hospital')),
        it('🕌', 42, 64, 52, w('مَسْجِد', 'masjid', 'mosque')),
        it('🚦', 70, 62, 40, w('إِشَارَةُ الْمُرُور', 'ishaaratu l-muruur', 'traffic light')),
      ],
    },
  },
  {
    id: 'desert', emoji: '🐫', title: { bn: 'الصَّحْرَاء', en: 'The Desert' },
    scene: {
      bg: 'desert', time: 'day', noLuminary: true, alt: 'Sand dunes with a camel, palm trees, a coffee pot and stars',
      items: [
        it('☀️', 84, 16, 44, w('شَمْس', 'shams', 'sun'), { anim: 'pulse' }),
        it('🐫', 40, 70, 70, w('جَمَل', 'jamal', 'camel'), { anim: 'bob' }),
        it('🌴', 14, 58, 60, w('نَخْلَة', 'nakhla', 'palm tree'), { anim: 'sway' }),
        it('☕', 70, 82, 40, w('دَلَّة', 'dalla', 'coffee pot')),
        it('dates', 86, 84, 30, w('تَمْر', 'tamr', 'dates')),
        it('☁️', 46, 18, 48, w('غَيْمَة', 'ghayma', 'cloud'), { anim: 'drift' }),
      ],
    },
  },
]

export const buildTasks = [
  {
    id: 'farm', emoji: '🌴', title: { bn: 'صُورَةُ الْمَزْرَعَةِ', en: 'Build the Farm' }, bg: 'village', time: 'day', noLuminary: true,
    steps: [
      { word: w('بَيْت', 'bayt', 'house'), e: '🏡', x: 24, y: 58, s: 62 },
      { word: w('نَخْلَة', 'nakhla', 'palm tree'), e: '🌴', x: 52, y: 52, s: 66, anim: 'sway' },
      { word: w('شَمْس', 'shams', 'sun'), e: '☀️', x: 84, y: 16, s: 44, anim: 'pulse' },
      { word: w('بَقَرَة', 'baqara', 'cow'), e: '🐄', x: 74, y: 72, s: 46 },
      { word: w('قَارِب', 'qaarib', 'boat'), e: '🛶', x: 80, y: 86, s: 44, anim: 'bob' },
      { word: w('طَائِر', 'ṭaaʾir', 'bird'), e: '🐦', x: 40, y: 26, s: 28, anim: 'drift' },
    ],
    decoys: ['🚀', '🐧', '🏔️', '🚗', '⛄'],
  },
  {
    id: 'night', emoji: '🌙', title: { bn: 'صُورَةُ اللَّيْلِ', en: 'Build the Night' }, bg: 'meadow', time: 'night', noLuminary: true,
    steps: [
      { word: w('قَمَر', 'qamar', 'moon'), e: '🌙', x: 78, y: 20, s: 50, anim: 'pulse' },
      { word: w('نَجْمَة', 'najma', 'star'), e: '⭐', x: 30, y: 18, s: 32, anim: 'pulse' },
      { word: w('بَيْت', 'bayt', 'house'), e: '🏠', x: 26, y: 62, s: 60 },
      { word: w('شَجَرَة', 'shajara', 'tree'), e: '🌳', x: 66, y: 56, s: 66, anim: 'sway' },
      { word: w('بُومَة', 'buuma', 'owl'), e: '🦉', x: 62, y: 38, s: 30, anim: 'bob' },
    ],
    decoys: ['☀️', '🌈', '🐘', '🚌', '🏖️'],
  },
  {
    id: 'desert', emoji: '🐫', title: { bn: 'صُورَةُ الصَّحْرَاءِ', en: 'Build the Desert' }, bg: 'desert', time: 'day', noLuminary: true,
    steps: [
      { word: w('جَمَل', 'jamal', 'camel'), e: '🐫', x: 42, y: 70, s: 70, anim: 'bob' },
      { word: w('نَخْلَة', 'nakhla', 'palm tree'), e: '🌴', x: 14, y: 58, s: 60, anim: 'sway' },
      { word: w('شَمْس', 'shams', 'sun'), e: '☀️', x: 84, y: 16, s: 44, anim: 'pulse' },
      { word: w('دَلَّة', 'dalla', 'coffee pot'), e: '☕', x: 72, y: 82, s: 40 },
      { word: w('غَيْمَة', 'ghayma', 'cloud'), e: '☁️', x: 46, y: 18, s: 48, anim: 'drift' },
    ],
    decoys: ['🐧', '⛄', '🐟', '🚢', '⛷️'],
  },
  {
    id: 'river', emoji: '⛵', title: { bn: 'صُورَةُ النَّهْرِ', en: 'Build the River' }, bg: 'river', time: 'day', noLuminary: true,
    steps: [
      { word: w('قَارِب', 'qaarib', 'boat'), e: '⛵', x: 40, y: 70, s: 54, anim: 'bob' },
      { word: w('سَمَكَة', 'samaka', 'fish'), e: '🐟', x: 72, y: 84, s: 38, anim: 'bob' },
      { word: w('غَيْمَة', 'ghayma', 'cloud'), e: '☁️', x: 62, y: 18, s: 54, anim: 'drift' },
      { word: w('شَمْس', 'shams', 'sun'), e: '☀️', x: 16, y: 18, s: 44, anim: 'pulse' },
      { word: w('بَطَّة', 'baṭṭa', 'duck'), e: '🦆', x: 20, y: 84, s: 34, anim: 'bob' },
    ],
    decoys: ['🚂', '🐫', '⛷️', '🍕', '🎸'],
  },
]
