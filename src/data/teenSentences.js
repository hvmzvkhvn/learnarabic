// Sentences for the 13–15, 16–18 and 18+ tracks (Modern Standard Arabic, fully vowelled). { bn, roman, en }
// Where a sentence changes with the speaker's or the listener's gender, the English says who is speaking or spoken to.
const S = (bn, roman, en) => ({ bn, roman, en })

export const teenSentenceGroups = [
  {
    key: 'identity',
    title: 'Who I Am',
    emoji: '🪪',
    sentences: [
      S('اِسْمِي عُمَرُ.', 'ismii ʿumar.', 'My name is Omar.'),
      S('أَنَا مِنْ لَنْدَنَ، وَأَهْلِي مِنْ مِصْرَ.', 'ana min landan, wa-ahlii min miṣr.', 'I am from London, and my family is from Egypt.'),
      S('وُلِدْتُ فِي بِرْمِنْغْهَامَ.', 'wulidtu fii birmingham.', 'I was born in Birmingham.'),
      S('أَتَكَلَّمُ الْعَرَبِيَّةَ قَلِيلًا.', 'atakallamu l-ʿarabiyyata qaliilan.', 'I speak a little Arabic.'),
      S('مِنْ أَيْنَ أَنْتَ؟', 'min ayna anta?', 'Where are you from? (to a boy or man)'),
      S('مِنْ أَيْنَ أَنْتِ؟', 'min ayna anti?', 'Where are you from? (to a girl or woman)'),
      S('مَاذَا تَعْمَلُ؟', 'maadhaa taʿmal?', 'What do you do for work? (to a man)'),
      S('أَنَا طَالِبٌ فِي الْجَامِعَةِ.', 'ana ṭaalibun fi l-jaamiʿa.', 'I am a university student. (a boy or man speaking)'),
      S('أَنَا طَالِبَةٌ فِي الْمَدْرَسَةِ.', 'ana ṭaalibatun fi l-madrasa.', 'I am a school student. (a girl speaking)'),
      S('تَشَرَّفْنَا!', 'tasharrafnaa!', 'Nice to meet you!'),
    ],
  },
  {
    key: 'souq',
    title: 'In the Souq',
    emoji: '🛍️',
    sentences: [
      S('بِكَمْ هٰذَا؟', 'bi-kam haadhaa?', 'How much is this?'),
      S('هٰذَا غَالٍ جِدًّا.', 'haadhaa ghaalin jiddan.', 'This is very expensive.'),
      S('هَلْ يُمْكِنُ أَنْ تُخَفِّضَ السِّعْرَ قَلِيلًا؟', 'hal yumkinu an tukhaffiḍa s-siʿra qaliilan?', 'Could you bring the price down a little? (to a man)'),
      S('أُرِيدُ هٰذَا الْقَمِيصَ بِلَوْنٍ آخَرَ.', 'uriidu haadha l-qamiiṣa bi-lawnin aakhar.', 'I would like this shirt in another colour.'),
      S('هَلْ تَقْبَلُونَ الْبِطَاقَةَ؟', 'hal taqbaluuna l-biṭaaqa?', 'Do you take cards?'),
      S('سَآخُذُهُ.', 'sa-aakhudhuh.', "I'll take it."),
      S('أَعْطِنِي كِيسًا، مِنْ فَضْلِكَ.', 'aʿṭinii kiisan, min faḍlik.', 'Give me a bag, please. (to a man)'),
      S('هٰذَا رَخِيصٌ وَجَمِيلٌ.', 'haadhaa rakhiiṣun wa-jamiil.', 'This is cheap and nice.'),
    ],
  },
  {
    key: 'travel',
    title: 'Getting Around',
    emoji: '🧭',
    sentences: [
      S('أَيْنَ مَحَطَّةُ الْقِطَارِ؟', 'ayna maḥaṭṭatu l-qiṭaar?', 'Where is the train station?'),
      S('اِذْهَبْ إِلَى الْأَمَامِ، ثُمَّ إِلَى الْيَمِينِ.', 'idhhab ila l-amaam, thumma ila l-yamiin.', 'Go straight ahead, then to the right. (to a man)'),
      S('هَلِ الْمَطَارُ بَعِيدٌ مِنْ هُنَا؟', 'hali l-maṭaaru baʿiidun min hunaa?', 'Is the airport far from here?'),
      S('أُرِيدُ تَذْكِرَةً إِلَى الْقَاهِرَةِ.', 'uriidu tadhkiratan ila l-qaahira.', 'I would like a ticket to Cairo.'),
      S('مَتَى تَصِلُ الْحَافِلَةُ؟', 'mataa taṣilu l-ḥaafila?', 'When does the bus arrive?'),
      S('ضَاعَتْ حَقِيبَتِي.', 'ḍaaʿat ḥaqiibatii.', 'My bag is lost.'),
      S('خُذْنِي إِلَى هٰذَا الْعُنْوَانِ، مِنْ فَضْلِكَ.', 'khudhnii ilaa haadha l-ʿunwaan, min faḍlik.', 'Take me to this address, please. (to a man)'),
      S('أَنَا تَائِهٌ.', 'ana taaʾih.', 'I am lost. (a boy or man speaking)'),
    ],
  },
  {
    key: 'history',
    title: 'Our History',
    emoji: '🏛️',
    sentences: [
      S('اللُّغَةُ الْعَرَبِيَّةُ لُغَةُ الْقُرْآنِ.', 'al-lughatu l-ʿarabiyyatu lughatu l-qurʾaan.', 'Arabic is the language of the Quran.'),
      S('يَتَكَلَّمُ الْعَرَبِيَّةَ أَكْثَرُ مِنْ أَرْبَعِمِئَةِ مِلْيُونِ شَخْصٍ.', 'yatakallamu l-ʿarabiyyata aktharu min arbaʿimiʾati milyuuni shakhṣ.', 'More than four hundred million people speak Arabic.'),
      S('كَانَتْ بَغْدَادُ مَدِينَةَ الْعِلْمِ.', 'kaanat baghdaadu madiinata l-ʿilm.', 'Baghdad was a city of learning.'),
      S('حَكَمَ الْمُسْلِمُونَ الْأَنْدَلُسَ أَكْثَرَ مِنْ سَبْعَةِ قُرُونٍ.', 'ḥakama l-muslimuuna l-andalusa akthara min sabʿati quruun.', 'Muslims ruled al-Andalus (Spain) for more than seven centuries.'),
      S('اِسْتَقَلَّتْ دُوَلٌ عَرَبِيَّةٌ كَثِيرَةٌ فِي الْقَرْنِ الْعِشْرِينَ.', 'istaqallat duwalun ʿarabiyyatun kathiiratun fi l-qarni l-ʿishriin.', 'Many Arab countries became independent in the twentieth century.'),
      S('الْأَرْقَامُ الَّتِي نَسْتَعْمِلُهَا وَصَلَتْ إِلَى أُورُوبَّا عَنْ طَرِيقِ الْعَرَبِ.', 'al-arqaamu llatii nastaʿmiluhaa waṣalat ilaa uuruubbaa ʿan ṭariiqi l-ʿarab.', 'The numbers we use reached Europe through the Arabs.'),
      S('يَوْمُ اللُّغَةِ الْعَرَبِيَّةِ فِي الثَّامِنَ عَشَرَ مِنْ دِيسَمْبِرَ.', 'yawmu l-lughati l-ʿarabiyyati fi th-thaamina ʿashara min diisambir.', 'Arabic Language Day is on 18 December.'),
      S('أَنَا فَخُورٌ بِتُرَاثِي.', 'ana fakhuurun bi-turaathii.', 'I am proud of my heritage. (a boy or man speaking)'),
    ],
  },
  {
    key: 'culture',
    title: 'Culture & Customs',
    emoji: '☕',
    sentences: [
      S('الْعَرَبُ مَشْهُورُونَ بِالْكَرَمِ.', 'al-ʿarabu mashhuuruuna bi-l-karam.', 'Arabs are famous for their generosity.'),
      S('نُقَدِّمُ الْقَهْوَةَ وَالتَّمْرَ لِلضُّيُوفِ.', 'nuqaddimu l-qahwata wa-t-tamra li-ḍ-ḍuyuuf.', 'We serve coffee and dates to guests.'),
      S('فِي رَمَضَانَ نَصُومُ مِنَ الْفَجْرِ إِلَى الْمَغْرِبِ.', 'fii ramaḍaana naṣuumu mina l-fajri ila l-maghrib.', 'In Ramadan we fast from dawn to sunset.'),
      S('الْخَطُّ الْعَرَبِيُّ فَنٌّ جَمِيلٌ.', 'al-khaṭṭu l-ʿarabiyyu fannun jamiil.', 'Arabic calligraphy is a beautiful art.'),
      S('نَأْكُلُ مَعًا مِنْ طَبَقٍ وَاحِدٍ.', 'naʾkulu maʿan min ṭabaqin waaḥid.', 'We eat together from one dish.'),
      S('أُمُّ كُلْثُومٍ مُغَنِّيَةٌ مَشْهُورَةٌ.', 'ummu kulthuumin mughanniyatun mashhuura.', 'Umm Kulthum is a famous singer.'),
      S('الْعَائِلَةُ مُهِمَّةٌ جِدًّا عِنْدَ الْعَرَبِ.', 'al-ʿaaʾilatu muhimmatun jiddan ʿinda l-ʿarab.', 'Family is very important to Arabs.'),
    ],
  },
  {
    key: 'opinions',
    title: 'Saying What You Think',
    emoji: '💬',
    sentences: [
      S('أَعْتَقِدُ أَنَّ هٰذَا الْفِيلْمَ رَائِعٌ.', 'aʿtaqidu anna haadha l-fiilma raaʾiʿ.', 'I think this film is wonderful.'),
      S('فِي رَأْيِي، كُرَةُ الْقَدَمِ أَجْمَلُ رِيَاضَةٍ.', 'fii raʾyii, kuratu l-qadami ajmalu riyaaḍa.', 'In my opinion, football is the best sport.'),
      S('أَنَا مُوَافِقٌ مَعَكَ.', 'ana muwaafiqun maʿak.', 'I agree with you. (a boy speaking, to a boy)'),
      S('لَسْتُ مُتَأَكِّدَةً.', 'lastu mutaʾakkida.', "I'm not sure. (a girl speaking)"),
      S('هٰذَا صَحِيحٌ، وَلٰكِنْ…', 'haadhaa ṣaḥiiḥ, wa-laakin…', 'That is true, but…'),
      S('مَا رَأْيُكِ؟', 'maa raʾyuki?', 'What do you think? (to a girl or woman)'),
      S('أُحِبُّ الْمُوسِيقَى الْعَرَبِيَّةَ كَثِيرًا.', 'uḥibbu l-muusiiqaa l-ʿarabiyyata kathiiran.', 'I really love Arabic music.'),
      S('كَانَ الدَّرْسُ مُمِلًّا قَلِيلًا.', 'kaana d-darsu mumillan qaliilan.', 'The lesson was a bit boring.'),
    ],
  },
  {
    key: 'proverbs',
    title: 'Proverbs',
    emoji: '🦉',
    sentences: [
      S('الصَّبْرُ مِفْتَاحُ الْفَرَجِ.', 'aṣ-ṣabru miftaaḥu l-faraj.', 'Patience is the key to relief.'),
      S('الْعِلْمُ نُورٌ.', 'al-ʿilmu nuur.', 'Knowledge is light.'),
      S('مَنْ جَدَّ وَجَدَ.', 'man jadda wajad.', 'Whoever works hard, succeeds.'),
      S('الصَّدِيقُ وَقْتَ الضِّيقِ.', 'aṣ-ṣadiiqu waqta ḍ-ḍiiq.', 'A friend is there in hard times (a friend in need is a friend indeed).'),
      S('فِي التَّأَنِّي السَّلَامَةُ، وَفِي الْعَجَلَةِ النَّدَامَةُ.', 'fi t-taʾannii s-salaama, wa-fi l-ʿajalati n-nadaama.', 'In patience there is safety, and in haste regret.'),
      S('لِكُلِّ جَوَادٍ كَبْوَةٌ.', 'li-kulli jawaadin kabwa.', 'Every good horse stumbles (everyone makes mistakes).'),
      S('الْوَقْتُ كَالسَّيْفِ، إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ.', 'al-waqtu ka-s-sayf, in lam taqṭaʿhu qaṭaʿak.', 'Time is like a sword: if you do not cut it, it cuts you.'),
      S('يَدٌ وَاحِدَةٌ لَا تُصَفِّقُ.', 'yadun waaḥidatun laa tuṣaffiq.', 'One hand cannot clap (we need each other).'),
    ],
  },
]

// Past ("did") and future ("will do") patterns: tense -> [أَنَا, أَنْتَ, أَنْتِ] forms.
// The past changes at the end (ذَهَبْتُ، ذَهَبْتَ، ذَهَبْتِ); the future is سَـ + the present (سَأَذْهَبُ، سَتَذْهَبُ، سَتَذْهَبِينَ).
// (The past is stored as `perfect`, the name the shared code uses.)
const T = (key, inf, en, perfect, future) => ({ key, inf, en, perfect, future })
const tp = (forms, romans, enForm) => ({ forms, romans, enForm })

export const tenseVerbs = [
  T('dhahaba', 'ذَهَبَ', 'go',
    tp(['ذَهَبْتُ', 'ذَهَبْتَ', 'ذَهَبْتِ'], ['dhahabtu', 'dhahabta', 'dhahabti'], 'went'),
    tp(['سَأَذْهَبُ', 'سَتَذْهَبُ', 'سَتَذْهَبِينَ'], ['sa-adhhabu', 'sa-tadhhabu', 'sa-tadhhabiina'], 'will go')),
  T('jaaa', 'جَاءَ', 'come',
    tp(['جِئْتُ', 'جِئْتَ', 'جِئْتِ'], ['jiʾtu', 'jiʾta', 'jiʾti'], 'came'),
    tp(['سَآتِي', 'سَتَأْتِي', 'سَتَأْتِينَ'], ['sa-aatii', 'sa-taʾtii', 'sa-taʾtiina'], 'will come')),
  T('naama', 'نَامَ', 'sleep',
    tp(['نِمْتُ', 'نِمْتَ', 'نِمْتِ'], ['nimtu', 'nimta', 'nimti'], 'slept'),
    tp(['سَأَنَامُ', 'سَتَنَامُ', 'سَتَنَامِينَ'], ['sa-anaamu', 'sa-tanaamu', 'sa-tanaamiina'], 'will sleep')),
  T('kataba', 'كَتَبَ', 'write',
    tp(['كَتَبْتُ', 'كَتَبْتَ', 'كَتَبْتِ'], ['katabtu', 'katabta', 'katabti'], 'wrote'),
    tp(['سَأَكْتُبُ', 'سَتَكْتُبُ', 'سَتَكْتُبِينَ'], ['sa-aktubu', 'sa-taktubu', 'sa-taktubiina'], 'will write')),
  T('jalasa', 'جَلَسَ', 'sit',
    tp(['جَلَسْتُ', 'جَلَسْتَ', 'جَلَسْتِ'], ['jalastu', 'jalasta', 'jalasti'], 'sat down'),
    tp(['سَأَجْلِسُ', 'سَتَجْلِسُ', 'سَتَجْلِسِينَ'], ['sa-ajlisu', 'sa-tajlisu', 'sa-tajlisiina'], 'will sit')),
  T('wasala', 'وَصَلَ', 'arrive',
    tp(['وَصَلْتُ', 'وَصَلْتَ', 'وَصَلْتِ'], ['waṣaltu', 'waṣalta', 'waṣalti'], 'arrived'),
    tp(['سَأَصِلُ', 'سَتَصِلُ', 'سَتَصِلِينَ'], ['sa-aṣilu', 'sa-taṣilu', 'sa-taṣiliina'], 'will arrive')),
]

export const tensePronouns = [
  { bn: 'أَنَا', roman: 'ana', en: 'I' },
  { bn: 'أَنْتَ', roman: 'anta', en: 'You (a boy)' },
  { bn: 'أَنْتِ', roman: 'anti', en: 'You (a girl)' },
]
