// Sentences: { bn, roman, en }   (`bn` = the Arabic text). Modern Standard Arabic, fully vowelled.
// Arabic changes words for a boy or a girl — both the speaker (أَنَا سَعِيدٌ / أَنَا سَعِيدَةٌ) and the person spoken to
// (كَيْفَ حَالُكَ؟ / كَيْفَ حَالُكِ؟). Where it matters the English says who is speaking or who is spoken to.
const S = (bn, roman, en) => ({ bn, roman, en })

export const sentenceGroups = [
  {
    key: 'introduce',
    title: 'Introduce Yourself',
    emoji: '🙋',
    sentences: [
      S('اِسْمِي يُوسُفُ.', 'ismii yuusuf.', 'My name is Yusuf.'),
      S('مَا اسْمُكَ؟', 'ma smuk(a)?', 'What is your name? (to a boy)'),
      S('مَا اسْمُكِ؟', 'ma smuk(i)?', 'What is your name? (to a girl)'),
      S('كَيْفَ حَالُكَ؟', 'kayfa ḥaaluk(a)?', 'How are you? (to a boy or man)'),
      S('كَيْفَ حَالُكِ؟', 'kayfa ḥaaluk(i)?', 'How are you? (to a girl or woman)'),
      S('أَنَا بِخَيْرٍ، وَالْحَمْدُ لِلّٰهِ.', 'ana bi-khayr, wa-l-ḥamdu lillaah.', 'I am fine, praise be to God.'),
      S('كَمْ عُمْرُكَ؟', 'kam ʿumruk(a)?', 'How old are you? (to a boy)'),
      S('عُمْرِي عَشْرُ سَنَوَاتٍ.', 'ʿumrii ʿashru sanawaat.', 'I am ten years old.'),
      S('أَيْنَ تَسْكُنُ؟', 'ayna taskun(u)?', 'Where do you live? (to a boy)'),
      S('أَسْكُنُ فِي الْقَاهِرَةِ.', 'askunu fi l-qaahira.', 'I live in Cairo.'),
    ],
  },
  {
    key: 'things',
    title: 'This and That',
    emoji: '👉',
    sentences: [
      S('مَا هٰذَا؟', 'maa haadhaa?', 'What is this?'),
      S('هٰذَا كِتَابٌ.', 'haadhaa kitaab.', 'This is a book.'),
      S('هٰذِهِ شَجَرَةٌ.', 'haadhihi shajara.', 'This is a tree.'),
      S('هٰذَا كِتَابِي.', 'haadhaa kitaabii.', 'This is my book.'),
      S('هٰذِهِ حَقِيبَتُكَ.', 'haadhihi ḥaqiibatuk(a).', 'This is your bag. (to a boy)'),
      S('هٰذِهِ أُمِّي.', 'haadhihi ummii.', 'This is my mum.'),
      S('هٰذَا أَبِي.', 'haadhaa abii.', 'This is my dad.'),
      S('هُوَ أَخِي.', 'huwa akhii.', 'He is my brother.'),
      S('هِيَ أُخْتِي.', 'hiya ukhtii.', 'She is my sister.'),
    ],
  },
  {
    key: 'daily',
    title: 'Every Day',
    emoji: '☀️',
    sentences: [
      S('أَذْهَبُ إِلَى الْمَدْرَسَةِ.', 'adhhabu ila l-madrasa.', 'I go to school.'),
      S('آكُلُ الْخُبْزَ.', 'aakulu l-khubz.', 'I eat bread.'),
      S('أَقْرَأُ كِتَابًا.', 'aqraʾu kitaaban.', 'I read a book.'),
      S('أَشْرَبُ الْمَاءَ.', 'ashrabu l-maaʾ.', 'I drink water.'),
      S('أُحِبُّ اللَّعِبَ.', 'uḥibbu l-laʿib.', 'I love playing.'),
      S('أَنَا جَائِعٌ.', 'ana jaaʾiʿ.', 'I am hungry. (a boy speaking)'),
      S('أَنَا جَائِعَةٌ.', 'ana jaaʾiʿa.', 'I am hungry. (a girl speaking)'),
      S('أَنَا عَطْشَانُ.', 'ana ʿaṭshaan.', 'I am thirsty. (a boy speaking)'),
      S('أَنَا نَعْسَانَةٌ.', 'ana naʿsaana.', 'I am sleepy. (a girl speaking)'),
      S('أَعْطِنِي قَلِيلًا مِنَ الْمَاءِ، مِنْ فَضْلِكَ.', 'aʿṭinii qaliilan mina l-maaʾ, min faḍlik(a).', 'Please give me a little water. (to a boy or man)'),
    ],
  },
  {
    key: 'describe',
    title: 'Describe the World',
    emoji: '🌍',
    sentences: [
      S('السَّمَاءُ زَرْقَاءُ.', 'as-samaaʾu zarqaaʾ.', 'The sky is blue.'),
      S('الْوَرَقَةُ خَضْرَاءُ.', 'al-waraqatu khaḍraaʾ.', 'The leaf is green.'),
      S('الْفِيلُ كَبِيرٌ.', 'al-fiilu kabiir.', 'The elephant is big.'),
      S('الْفَأْرُ صَغِيرٌ.', 'al-faʾru ṣaghiir.', 'The mouse is small.'),
      S('الشَّايُ حَارٌّ.', 'ash-shaayu ḥaarr.', 'The tea is hot.'),
      S('الْقَمَرُ فِي السَّمَاءِ.', 'al-qamaru fi s-samaaʾ.', 'The moon is in the sky.'),
      S('فِي النَّهْرِ سَمَكٌ.', 'fi n-nahri samak.', 'There are fish in the river.'),
      S('عَلَى الشَّجَرَةِ عُصْفُورٌ.', 'ʿala sh-shajarati ʿuṣfuur.', 'There is a bird in the tree.'),
      S('الْيَوْمَ الْجُمُعَةُ.', 'al-yawma l-jumuʿa.', 'Today is Friday.'),
      S('الْيَوْمَ عِيدُ مِيلَادِي.', 'al-yawma ʿiidu miilaadii.', 'Today is my birthday.'),
    ],
  },
]

// Present-tense patterns. forms = [أَنَا form, أَنْتَ form, هُوَ form]: the verb changes at the front (أَ- تَ- يَ-).
// (For a girl or woman: أَنْتِ تَأْكُلِينَ، هِيَ تَأْكُلُ.)
const V = (key, inf, infRoman, en, forms, romans, enForms) => ({ key, inf, infRoman, en, forms, romans, enForms })

export const verbs = [
  V('akala', 'أَكَلَ', 'akala', 'eat', ['آكُلُ', 'تَأْكُلُ', 'يَأْكُلُ'], ['aakulu', 'taʾkulu', 'yaʾkulu'], ['eat', 'eat', 'eats']),
  V('dhahaba', 'ذَهَبَ', 'dhahaba', 'go', ['أَذْهَبُ', 'تَذْهَبُ', 'يَذْهَبُ'], ['adhhabu', 'tadhhabu', 'yadhhabu'], ['go', 'go', 'goes']),
  V('shariba', 'شَرِبَ', 'shariba', 'drink', ['أَشْرَبُ', 'تَشْرَبُ', 'يَشْرَبُ'], ['ashrabu', 'tashrabu', 'yashrabu'], ['drink', 'drink', 'drinks']),
  V('qaraa', 'قَرَأَ', 'qaraʾa', 'read', ['أَقْرَأُ', 'تَقْرَأُ', 'يَقْرَأُ'], ['aqraʾu', 'taqraʾu', 'yaqraʾu'], ['read', 'read', 'reads']),
  V('kataba', 'كَتَبَ', 'kataba', 'write', ['أَكْتُبُ', 'تَكْتُبُ', 'يَكْتُبُ'], ['aktubu', 'taktubu', 'yaktubu'], ['write', 'write', 'writes']),
  V('laiba', 'لَعِبَ', 'laʿiba', 'play', ['أَلْعَبُ', 'تَلْعَبُ', 'يَلْعَبُ'], ['alʿabu', 'talʿabu', 'yalʿabu'], ['play', 'play', 'plays']),
  V('naama', 'نَامَ', 'naama', 'sleep', ['أَنَامُ', 'تَنَامُ', 'يَنَامُ'], ['anaamu', 'tanaamu', 'yanaamu'], ['sleep', 'sleep', 'sleeps']),
  V('samia', 'سَمِعَ', 'samiʿa', 'hear', ['أَسْمَعُ', 'تَسْمَعُ', 'يَسْمَعُ'], ['asmaʿu', 'tasmaʿu', 'yasmaʿu'], ['hear', 'hear', 'hears']),
]

export const pronounForms = [
  { bn: 'أَنَا', roman: 'ana', en: 'I' },
  { bn: 'أَنْتَ', roman: 'anta', en: 'You' },
  { bn: 'هُوَ', roman: 'huwa', en: 'He' },
]
