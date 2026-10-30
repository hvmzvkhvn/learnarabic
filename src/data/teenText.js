// Poems, reading passages and film conversations for the 13–15 ("teen") and 16–18 ("senior") tracks (the 18+ track
// shares the 16–18 versions).
//
// Only public-domain or traditional works are quoted: al-Mutanabbi (d. 965), Ahmad Shawqi (d. 1932), Abu al-Qasim
// al-Shabbi (d. 1934) and the traditional song طَلَعَ الْبَدْرُ عَلَيْنَا. Modern poets still in copyright (Nizar Qabbani,
// Mahmoud Darwish…) appear in facts only and their words are NOT quoted.
const L = (bn, roman, en) => ({ bn, roman, en })

// ---- Poems ---------------------------------------------------------------------------------
export const poems = [
  {
    key: 'badr', title: 'طَلَعَ الْبَدْرُ عَلَيْنَا', emoji: '🌕', author: 'Traditional',
    note: 'By tradition, the people of Madinah sang this to welcome the Prophet Muhammad when he arrived from Makkah. It is still sung at weddings, school events and celebrations across the Muslim world.',
    teen: [
      L('طَلَعَ الْبَدْرُ عَلَيْنَا', 'ṭalaʿa l-badru ʿalaynaa', 'The full moon has risen over us'),
      L('مِنْ ثَنِيَّاتِ الْوَدَاعِ', 'min thaniyyaati l-wadaaʿ', 'from the valley of farewells.'),
    ],
    senior: [
      L('طَلَعَ الْبَدْرُ عَلَيْنَا', 'ṭalaʿa l-badru ʿalaynaa', 'The full moon has risen over us'),
      L('مِنْ ثَنِيَّاتِ الْوَدَاعِ', 'min thaniyyaati l-wadaaʿ', 'from the valley of farewells.'),
      L('وَجَبَ الشُّكْرُ عَلَيْنَا', 'wajaba sh-shukru ʿalaynaa', 'We must give thanks'),
      L('مَا دَعَا لِلّٰهِ دَاعِ', 'maa daʿaa lillaahi daaʿ', 'as long as anyone calls to God.'),
    ],
  },
  {
    key: 'shawqi', title: 'قُمْ لِلْمُعَلِّمِ', emoji: '🧑‍🏫', author: 'Ahmad Shawqi',
    note: 'Ahmad Shawqi (1868–1932), the Egyptian "Prince of Poets", wrote this tribute to teachers. Its first line is known by schoolchildren all over the Arab world.',
    teen: [
      L('قُمْ لِلْمُعَلِّمِ وَفِّهِ التَّبْجِيلَا', 'qum li-l-muʿallimi waffihi t-tabjiilaa', 'Stand up for the teacher and give him full honour:'),
      L('كَادَ الْمُعَلِّمُ أَنْ يَكُونَ رَسُولَا', 'kaada l-muʿallimu an yakuuna rasuulaa', 'the teacher is almost a messenger.'),
    ],
    senior: [
      L('قُمْ لِلْمُعَلِّمِ وَفِّهِ التَّبْجِيلَا', 'qum li-l-muʿallimi waffihi t-tabjiilaa', 'Stand up for the teacher and give him full honour:'),
      L('كَادَ الْمُعَلِّمُ أَنْ يَكُونَ رَسُولَا', 'kaada l-muʿallimu an yakuuna rasuulaa', 'the teacher is almost a messenger.'),
      L('أَعَلِمْتَ أَشْرَفَ أَوْ أَجَلَّ مِنَ الَّذِي', 'a-ʿalimta ashrafa aw ajalla mina lladhii', 'Do you know anyone nobler or greater than the one'),
      L('يَبْنِي وَيُنْشِئُ أَنْفُسًا وَعُقُولَا', 'yabnii wa-yunshiʾu anfusan wa-ʿuquulaa', 'who builds and raises up souls and minds?'),
    ],
  },
  {
    key: 'shabbi', title: 'إِرَادَةُ الْحَيَاةِ', emoji: '🔥', author: 'Abu al-Qasim al-Shabbi',
    note: 'Abu al-Qasim al-Shabbi (1909–1934), a Tunisian poet who died at 25, wrote "The Will to Live". Its lines are part of Tunisia\'s national anthem and were chanted in the protests of 2011.',
    teen: [
      L('إِذَا الشَّعْبُ يَوْمًا أَرَادَ الْحَيَاةَ', 'idha sh-shaʿbu yawman araada l-ḥayaah', 'If one day a people wills to live,'),
      L('فَلَا بُدَّ أَنْ يَسْتَجِيبَ الْقَدَرْ', 'fa-laa budda an yastajiiba l-qadar', 'then fate must answer.'),
    ],
    senior: [
      L('إِذَا الشَّعْبُ يَوْمًا أَرَادَ الْحَيَاةَ', 'idha sh-shaʿbu yawman araada l-ḥayaah', 'If one day a people wills to live,'),
      L('فَلَا بُدَّ أَنْ يَسْتَجِيبَ الْقَدَرْ', 'fa-laa budda an yastajiiba l-qadar', 'then fate must answer.'),
      L('وَلَا بُدَّ لِلَّيْلِ أَنْ يَنْجَلِي', 'wa-laa budda li-l-layli an yanjalii', 'The night must clear away,'),
      L('وَلَا بُدَّ لِلْقَيْدِ أَنْ يَنْكَسِرْ', 'wa-laa budda li-l-qaydi an yankasir', 'and the chains must break.'),
    ],
  },
  {
    key: 'mutanabbi', title: 'الْخَيْلُ وَاللَّيْلُ', emoji: '🐎', author: 'al-Mutanabbi',
    note: 'Al-Mutanabbi (915–965), born in Kufa in Iraq, is often called the greatest poet of the Arabic language. These proud lines about himself are among the most quoted in Arabic.',
    teen: [
      L('الْخَيْلُ وَاللَّيْلُ وَالْبَيْدَاءُ تَعْرِفُنِي', 'al-khaylu wa-l-laylu wa-l-baydaaʾu taʿrifunii', 'The horses and the night and the desert know me,'),
      L('وَالسَّيْفُ وَالرُّمْحُ وَالْقِرْطَاسُ وَالْقَلَمُ', 'wa-s-sayfu wa-r-rumḥu wa-l-qirṭaasu wa-l-qalamu', 'and the sword and the spear, the paper and the pen.'),
    ],
    senior: [
      L('أَنَا الَّذِي نَظَرَ الْأَعْمَى إِلَى أَدَبِي', 'ana lladhii naẓara l-aʿmaa ilaa adabii', 'I am the one whose writing even the blind have seen,'),
      L('وَأَسْمَعَتْ كَلِمَاتِي مَنْ بِهِ صَمَمُ', 'wa-asmaʿat kalimaatii man bihi ṣamamu', 'whose words have made even the deaf hear.'),
      L('الْخَيْلُ وَاللَّيْلُ وَالْبَيْدَاءُ تَعْرِفُنِي', 'al-khaylu wa-l-laylu wa-l-baydaaʾu taʿrifunii', 'The horses and the night and the desert know me,'),
      L('وَالسَّيْفُ وَالرُّمْحُ وَالْقِرْطَاسُ وَالْقَلَمُ', 'wa-s-sayfu wa-r-rumḥu wa-l-qirṭaasu wa-l-qalamu', 'and the sword and the spear, the paper and the pen.'),
    ],
  },
]

// ---- Reading passages: a short version for 13–15 and a longer one for 16+ --------------------------------
export const passages = [
  {
    key: 'arabic', title: 'The Arabic Language', emoji: '🗣️',
    teen: {
      lines: [
        L('الْعَرَبِيَّةُ لُغَةٌ قَدِيمَةٌ وَجَمِيلَةٌ.', 'al-ʿarabiyyatu lughatun qadiimatun wa-jamiila.', 'Arabic is an old and beautiful language.'),
        L('يَتَكَلَّمُهَا النَّاسُ فِي أَكْثَرَ مِنْ عِشْرِينَ بَلَدًا.', 'yatakallamuha n-naasu fii akthara min ʿishriina baladan.', 'People speak it in more than twenty countries.'),
        L('نَكْتُبُ الْعَرَبِيَّةَ مِنَ الْيَمِينِ إِلَى الْيَسَارِ.', 'naktubu l-ʿarabiyyata mina l-yamiini ila l-yasaar.', 'We write Arabic from right to left.'),
      ],
      questions: [
        { q: 'In how many countries is Arabic spoken?', options: ['About five', 'More than twenty', 'Only one'], answer: 1 },
        { q: 'Which way is Arabic written?', options: ['Left to right', 'Right to left', 'Top to bottom'], answer: 1 },
      ],
    },
    senior: {
      lines: [
        L('الْعَرَبِيَّةُ لُغَةٌ قَدِيمَةٌ وَجَمِيلَةٌ.', 'al-ʿarabiyyatu lughatun qadiimatun wa-jamiila.', 'Arabic is an old and beautiful language.'),
        L('يَتَكَلَّمُهَا النَّاسُ فِي أَكْثَرَ مِنْ عِشْرِينَ بَلَدًا.', 'yatakallamuha n-naasu fii akthara min ʿishriina baladan.', 'People speak it in more than twenty countries.'),
        L('الْعَرَبِيَّةُ لُغَةُ الْقُرْآنِ، وَلِذٰلِكَ يَتَعَلَّمُهَا مُسْلِمُونَ كَثِيرُونَ.', 'al-ʿarabiyyatu lughatu l-qurʾaan, wa-li-dhaalika yataʿallamuhaa muslimuuna kathiiruun.', 'Arabic is the language of the Quran, so many Muslims learn it.'),
        L('فِي كُلِّ بَلَدٍ لَهْجَةٌ، وَلٰكِنَّ الْفُصْحَى وَاحِدَةٌ.', 'fii kulli baladin lahja, wa-laakinna l-fuṣḥaa waaḥida.', 'Every country has its own dialect, but Fusha (standard Arabic) is one and the same.'),
        L('تَسْتَعْمِلُ الصُّحُفُ وَالْأَخْبَارُ وَالْكُتُبُ الْفُصْحَى.', 'tastaʿmilu ṣ-ṣuḥufu wa-l-akhbaaru wa-l-kutubu l-fuṣḥaa.', 'Newspapers, the news and books use Fusha.'),
      ],
      questions: [
        { q: 'Why do many Muslims learn Arabic?', options: ['It is the language of the Quran', 'It is the easiest language', 'For football'], answer: 0 },
        { q: 'What is the same in every Arab country?', options: ['The dialect', 'Fusha (standard Arabic)', 'The money'], answer: 1 },
        { q: 'Where is Fusha used?', options: ['Only at home', 'In newspapers, the news and books', 'Only in songs'], answer: 1 },
      ],
    },
  },
  {
    key: 'cairo', title: 'A Day in Cairo', emoji: '🕌',
    teen: {
      lines: [
        L('الْقَاهِرَةُ عَاصِمَةُ مِصْرَ.', 'al-qaahiratu ʿaaṣimatu miṣr.', 'Cairo is the capital of Egypt.'),
        L('فِي الصَّبَاحِ نَزُورُ الْأَهْرَامَاتِ.', 'fi ṣ-ṣabaaḥi nazuuru l-ahraamaat.', 'In the morning we visit the Pyramids.'),
        L('فِي الْمَسَاءِ نَمْشِي فِي سُوقِ خَانِ الْخَلِيلِيِّ.', 'fi l-masaaʾi namshii fii suuqi khaani l-khaliiliyy.', 'In the evening we walk through the Khan el-Khalili market.'),
      ],
      questions: [
        { q: 'What is Cairo?', options: ['The capital of Egypt', 'A river', 'A market'], answer: 0 },
        { q: 'What do we visit in the morning?', options: ['The market', 'The Pyramids', 'The sea'], answer: 1 },
      ],
    },
    senior: {
      lines: [
        L('الْقَاهِرَةُ عَاصِمَةُ مِصْرَ.', 'al-qaahiratu ʿaaṣimatu miṣr.', 'Cairo is the capital of Egypt.'),
        L('فِي الصَّبَاحِ نَزُورُ الْأَهْرَامَاتِ.', 'fi ṣ-ṣabaaḥi nazuuru l-ahraamaat.', 'In the morning we visit the Pyramids.'),
        L('بَعْدَ الظُّهْرِ نَرْكَبُ قَارِبًا صَغِيرًا عَلَى النِّيلِ.', 'baʿda ẓ-ẓuhri narkabu qaariban ṣaghiiran ʿala n-niil.', 'In the afternoon we take a small boat on the Nile.'),
        L('نَأْكُلُ الْكُشَرِيَّ، وَهُوَ طَبَقٌ مِصْرِيٌّ شَعْبِيٌّ.', 'naʾkulu l-kushariyy, wa-huwa ṭabaqun miṣriyyun shaʿbiyy.', 'We eat koshari, a popular Egyptian dish.'),
        L('فِي الْمَسَاءِ نَمْشِي فِي سُوقِ خَانِ الْخَلِيلِيِّ.', 'fi l-masaaʾi namshii fii suuqi khaani l-khaliiliyy.', 'In the evening we walk through the Khan el-Khalili market.'),
        L('الْقَاهِرَةُ مَدِينَةٌ لَا تَنَامُ.', 'al-qaahiratu madiinatun laa tanaam.', 'Cairo is a city that never sleeps.'),
      ],
      questions: [
        { q: 'What is koshari?', options: ['A popular Egyptian dish', 'A boat', 'A mosque'], answer: 0 },
        { q: 'What do we do in the afternoon?', options: ['Take a boat on the Nile', 'Go to school', 'Sleep'], answer: 0 },
        { q: 'What do people say about Cairo?', options: ['It is very quiet', 'It never sleeps', 'It is very small'], answer: 1 },
      ],
    },
  },
  {
    key: 'palm', title: 'The Palm Tree', emoji: '🌴',
    teen: {
      lines: [
        L('النَّخْلَةُ شَجَرَةٌ مُهِمَّةٌ فِي بِلَادِ الْعَرَبِ.', 'an-nakhlatu shajaratun muhimmatun fii bilaadi l-ʿarab.', 'The palm is an important tree in Arab lands.'),
        L('تَعِيشُ النَّخْلَةُ فِي الْحَرِّ وَالصَّحْرَاءِ.', 'taʿiishu n-nakhlatu fi l-ḥarri wa-ṣ-ṣaḥraaʾ.', 'The palm lives in heat and desert.'),
        L('نَأْكُلُ التَّمْرَ فِي رَمَضَانَ عِنْدَ الْإِفْطَارِ.', 'naʾkulu t-tamra fii ramaḍaana ʿinda l-ifṭaar.', 'We eat dates in Ramadan when we break the fast.'),
      ],
      questions: [
        { q: 'Where does the palm tree grow?', options: ['In the snow', 'In heat and desert', 'In the sea'], answer: 1 },
        { q: 'When do we eat dates in Ramadan?', options: ['When we break the fast', 'At noon', 'Never'], answer: 0 },
      ],
    },
    senior: {
      lines: [
        L('النَّخْلَةُ شَجَرَةٌ مُهِمَّةٌ فِي بِلَادِ الْعَرَبِ.', 'an-nakhlatu shajaratun muhimmatun fii bilaadi l-ʿarab.', 'The palm is an important tree in Arab lands.'),
        L('تَعِيشُ النَّخْلَةُ فِي الْحَرِّ وَالصَّحْرَاءِ.', 'taʿiishu n-nakhlatu fi l-ḥarri wa-ṣ-ṣaḥraaʾ.', 'The palm lives in heat and desert.'),
        L('لِلتَّمْرِ أَنْوَاعٌ كَثِيرَةٌ، مِثْلُ الْمَجْهُولِ وَالسُّكَّرِيِّ.', 'li-t-tamri anwaaʿun kathiira, mithlu l-majhuuli wa-s-sukkariyy.', 'There are many kinds of dates, such as Medjool and Sukkari.'),
        L('قَدِيمًا صَنَعَ النَّاسُ مِنْ سَعَفِ النَّخْلِ السِّلَالَ وَالسُّقُوفَ.', 'qadiiman ṣanaʿa n-naasu min saʿafi n-nakhli s-silaala wa-s-suquuf.', 'In the past people made baskets and roofs from palm fronds.'),
        L('التَّمْرُ طَعَامٌ مُفِيدٌ فِيهِ سُكَّرٌ طَبِيعِيٌّ.', 'at-tamru ṭaʿaamun mufiidun fiihi sukkarun ṭabiiʿiyy.', 'Dates are a healthy food with natural sugar.'),
        L('نَأْكُلُ التَّمْرَ فِي رَمَضَانَ عِنْدَ الْإِفْطَارِ.', 'naʾkulu t-tamra fii ramaḍaana ʿinda l-ifṭaar.', 'We eat dates in Ramadan when we break the fast.'),
      ],
      questions: [
        { q: 'Which is a kind of date?', options: ['Medjool', 'Koshari', 'Kunafa'], answer: 0 },
        { q: 'What did people make from palm fronds?', options: ['Baskets and roofs', 'Cars', 'Books'], answer: 0 },
        { q: 'What is in dates?', options: ['Natural sugar', 'Salt', 'Oil'], answer: 0 },
      ],
    },
  },
  {
    key: 'eid', title: 'Eid Morning', emoji: '🌙',
    teen: {
      lines: [
        L('فِي صَبَاحِ الْعِيدِ نَلْبَسُ ثِيَابًا جَدِيدَةً.', 'fii ṣabaaḥi l-ʿiidi nalbasu thiyaaban jadiida.', 'On Eid morning we wear new clothes.'),
        L('نَذْهَبُ إِلَى صَلَاةِ الْعِيدِ.', 'nadhhabu ilaa ṣalaati l-ʿiid.', 'We go to the Eid prayer.'),
        L('يُعْطِي الْكِبَارُ الْأَطْفَالَ الْعِيدِيَّةَ.', 'yuʿṭi l-kibaaru l-aṭfaala l-ʿiidiyya.', 'The grown-ups give the children Eid money.'),
      ],
      questions: [
        { q: 'What do we wear on Eid morning?', options: ['Old clothes', 'New clothes', 'Pyjamas'], answer: 1 },
        { q: 'What do the children get?', options: ['Homework', 'Eid money', 'A new phone'], answer: 1 },
      ],
    },
    senior: {
      lines: [
        L('عِيدُ الْفِطْرِ يَأْتِي بَعْدَ شَهْرِ رَمَضَانَ.', 'ʿiidu l-fiṭri yaʾtii baʿda shahri ramaḍaan.', 'Eid al-Fitr comes after the month of Ramadan.'),
        L('فِي صَبَاحِ الْعِيدِ نَلْبَسُ ثِيَابًا جَدِيدَةً.', 'fii ṣabaaḥi l-ʿiidi nalbasu thiyaaban jadiida.', 'On Eid morning we wear new clothes.'),
        L('نَذْهَبُ إِلَى صَلَاةِ الْعِيدِ.', 'nadhhabu ilaa ṣalaati l-ʿiid.', 'We go to the Eid prayer.'),
        L('نَزُورُ الْأَقَارِبَ وَنَقُولُ: "كُلُّ عَامٍ وَأَنْتُمْ بِخَيْرٍ".', 'nazuuru l-aqaariba wa-naquul: "kullu ʿaamin wa-antum bi-khayr".', 'We visit relatives and say: "Many happy returns."'),
        L('فِي الْبُيُوتِ كَعْكُ الْعِيدِ وَالْمَعْمُولُ.', 'fi l-buyuuti kaʿku l-ʿiidi wa-l-maʿmuul.', 'In every house there are Eid biscuits and maamoul.'),
        L('يُعْطِي الْكِبَارُ الْأَطْفَالَ الْعِيدِيَّةَ.', 'yuʿṭi l-kibaaru l-aṭfaala l-ʿiidiyya.', 'The grown-ups give the children Eid money.'),
      ],
      questions: [
        { q: 'When does Eid al-Fitr come?', options: ['After Ramadan', 'Before Ramadan', 'Only in winter'], answer: 0 },
        { q: 'What do people say to each other?', options: ['"Many happy returns"', '"Good night"', '"How much is this?"'], answer: 0 },
        { q: 'What is in the houses?', options: ['Eid biscuits and maamoul', 'Snow', 'Fireworks only'], answer: 0 },
      ],
    },
  },
]

// ---- Film and music conversations ------------------------------------------------------------------
// Sara (t) is a girl and Yusuf (fr) a boy, so each says أَنْتَ / أَنْتِ to the other the right way.
const D = (who, bn, roman, en) => ({ who, bn, roman, en })

export const cinemaScenes = {
  movienight: {
    title: 'Movie Night', emoji: '🍿',
    lines: [
      D('fr', 'هَلْ تَأْتِينَ إِلَى السِّينَمَا الْيَوْمَ؟', 'hal taʾtiina ila s-siinamaa l-yawm?', 'Will you come to the cinema today?'),
      D('t', 'نَعَمْ! أَيُّ فِيلْمٍ؟', 'naʿam! ayyu fiilm?', 'Yes! Which film?'),
      D('fr', 'فِيلْمٌ مِصْرِيٌّ جَدِيدٌ. سَمِعْتُ أَنَّ قِصَّتَهُ رَائِعَةٌ.', 'fiilmun miṣriyyun jadiid. samiʿtu anna qiṣṣatahu raaʾiʿa.', 'A new Egyptian film. I hear the story is wonderful.'),
      D('t', 'إِذَنْ هَيَّا. مَتَى يَبْدَأُ؟', 'idhan hayyaa. mataa yabdaʾ?', "Then let's go. When does it start?"),
      D('fr', 'فِي السَّاعَةِ السَّابِعَةِ مَسَاءً.', 'fi s-saaʿati s-saabiʿati masaaʾan.', 'At seven in the evening.'),
      D('t', 'حَسَنًا، سَأَشْتَرِي التَّذَاكِرَ.', 'ḥasanan, sa-ashtari t-tadhaakir.', "OK, I'll buy the tickets."),
      D('fr', 'وَأَنَا سَأُحْضِرُ الْفُشَارَ.', 'wa-ana sa-uḥḍiru l-fushaar.', "And I'll bring the popcorn."),
    ],
  },
  song: {
    title: 'Talking About a Song', emoji: '🎵',
    lines: [
      D('t', 'هَلْ سَمِعْتَ هٰذِهِ الْأُغْنِيَةَ؟', 'hal samiʿta haadhihi l-ughniya?', 'Have you heard this song?'),
      D('fr', 'نَعَمْ، أُحِبُّهَا كَثِيرًا.', 'naʿam, uḥibbuhaa kathiiran.', 'Yes, I really like it.'),
      D('t', 'صَوْتُ الْمُغَنِّيَةِ جَمِيلٌ جِدًّا.', 'ṣawtu l-mughanniyati jamiilun jiddan.', "The singer's voice is very beautiful."),
      D('fr', 'وَاللَّحْنُ يَبْقَى فِي الذِّهْنِ.', 'wa-l-laḥnu yabqaa fi dh-dhihn.', 'And the tune stays in your head.'),
      D('t', 'هَلْ نَسْمَعُهَا مَرَّةً أُخْرَى؟', 'hal nasmaʿuhaa marratan ukhraa?', 'Shall we listen to it again?'),
      D('fr', 'طَبْعًا!', 'ṭabʿan!', 'Of course!'),
    ],
  },
  ticket: {
    title: 'At the Ticket Counter', emoji: '🎫',
    lines: [
      D('t', 'تَذْكِرَتَيْنِ، مِنْ فَضْلِكَ.', 'tadhkiratayn, min faḍlik.', 'Two tickets, please.'),
      D('shop', 'لِأَيِّ عَرْضٍ؟', 'li-ayyi ʿarḍ?', 'For which showing?'),
      D('t', 'لِعَرْضِ السَّاعَةِ السَّابِعَةِ.', 'li-ʿarḍi s-saaʿati s-saabiʿa.', "For the seven o'clock showing."),
      D('shop', 'تَذْكِرَتَانِ: مِئَتَا جُنَيْهٍ.', 'tadhkirataan: miʾataa junayh.', 'Two tickets: two hundred pounds.'),
    ],
  },
  filmtalk: {
    title: 'After the Film', emoji: '🎞️',
    lines: [
      D('fr', 'كَيْفَ وَجَدْتِ الْفِيلْمَ؟', 'kayfa wajadti l-fiilm?', 'What did you think of the film?'),
      D('t', 'الْقِصَّةُ جَيِّدَةٌ، لٰكِنَّ النِّهَايَةَ طَوِيلَةٌ قَلِيلًا.', 'al-qiṣṣatu jayyida, laakinna n-nihaayata ṭawiilatun qaliilan.', 'The story was good, but the ending dragged a little.'),
      D('fr', 'أَعْجَبَنِي التَّمْثِيلُ كَثِيرًا.', 'aʿjabani t-tamthiilu kathiiran.', 'I really liked the acting.'),
      D('t', 'نَعَمْ، خُصُوصًا دَوْرُ الْأَبِ.', 'naʿam, khuṣuuṣan dawru l-ab.', "Yes, especially the father's role."),
      D('fr', 'وَالْمُوسِيقَى؟ فِي رَأْيِي، كَانَتِ الْأَغَانِي رَائِعَةً.', 'wa-l-muusiiqaa? fii raʾyii, kaanati l-aghaanii raaʾiʿa.', 'And the music? I thought the songs were amazing.'),
      D('t', 'أُوَافِقُكَ! هَيَّا نُشَاهِدُ فِيلْمًا آخَرَ الْأُسْبُوعَ الْقَادِمَ.', 'uwaafiquk! hayyaa nushaahidu fiilman aakhara l-usbuuʿa l-qaadim.', "I agree! Let's watch another film next week."),
    ],
  },
}
