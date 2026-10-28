// "Family" unit: everyday conversations at home. Modern Standard Arabic, fully vowelled.
//
// Address rules used throughout (Arabic's "you" changes with the listener's gender, not with respect):
//   • To a boy or man (Dad, Grandpa, Uncle, Yusuf, the shopkeeper): أَنْتَ and -كَ  (كَيْفَ حَالُكَ؟)
//   • To a girl or woman (Mum, Grandma, Layla — and Sara herself): أَنْتِ and -كِ  (كَيْفَ حَالُكِ؟)
//   • Respect for elders comes from يَا أَبِي، يَا جَدِّي، مِنْ فَضْلِكَ… rather than a special pronoun.
// Sara is a girl, so words describing her end in -ة (أَنَا جَاهِزَةٌ، أَنَا آسِفَةٌ).
// Each line: [speakerId, bn, roman, en, art?, to?]   (bn = the Arabic; art = picture cue, used in the 5–7 track;
// to = who is spoken to, when it is not the person who spoke just before — checked by `npm run lint:family`)

export const roster = {
  t: { bn: 'سَارَة', en: 'Sara', emoji: '🧒', me: true, female: true },
  um: { bn: 'أُمِّي', en: 'Mum', emoji: '👩', female: true },
  ab: { bn: 'أَبِي', en: 'Dad', emoji: '👨' },
  jd: { bn: 'جَدِّي', en: 'Grandpa', emoji: '👴' },
  jt: { bn: 'جَدَّتِي', en: 'Grandma', emoji: '👵', female: true },
  am: { bn: 'عَمِّي', en: 'Uncle', emoji: '🧔' },
  fr: { bn: 'يُوسُف', en: 'Yusuf', emoji: '🧑' },
  ly: { bn: 'لَيْلَى', en: 'Layla', emoji: '👧', female: true },
  shop: { bn: 'الْبَائِع', en: 'Shopkeeper', emoji: '🧑‍🌾' },
  dr: { bn: 'الطَّبِيب', en: 'Doctor', emoji: '👨‍⚕️' },
}

const L = (who, bn, roman, en, art, to) => ({ who, bn, roman, en, art, ...(to ? { to } : {}) })

export const ADDRESS_TIP =
  'Arabic has two words for "you": أَنْتَ to a boy or man, and أَنْتِ to a girl or woman — and the endings change with them (حَالُكَ for him, حَالُكِ for her). We show respect to elders with words like يَا جَدِّي and مِنْ فَضْلِكَ.'

// ---- Everyday phrases (taught before the conversations) -----------------------------------
const P = (bn, roman, en) => ({ bn, roman, en })

export const phrases = {
  young: [
    P('السَّلَامُ عَلَيْكُمْ', 'as-salaamu ʿalaykum', 'Peace be upon you (greeting)'),
    P('وَعَلَيْكُمُ السَّلَامُ', 'wa-ʿalaykumu s-salaam', 'And peace be upon you (reply)'),
    P('بِسْمِ اللّٰهِ', 'bismi llaah', 'In the name of God (said before eating)'),
    P('الْحَمْدُ لِلّٰهِ', 'al-ḥamdu lillaah', 'Praise be to God'),
    P('إِنْ شَاءَ اللّٰهُ', 'in shaaʾa llaah', 'God willing'),
    P('مَعَ السَّلَامَةِ', 'maʿa s-salaama', 'Goodbye (go safely)'),
  ],
  older: [
    P('السَّلَامُ عَلَيْكُمْ', 'as-salaamu ʿalaykum', 'Peace be upon you (greeting)'),
    P('وَعَلَيْكُمُ السَّلَامُ', 'wa-ʿalaykumu s-salaam', 'And peace be upon you (reply)'),
    P('بِسْمِ اللّٰهِ', 'bismi llaah', 'In the name of God (said before eating)'),
    P('الْحَمْدُ لِلّٰهِ', 'al-ḥamdu lillaah', 'Praise be to God'),
    P('إِنْ شَاءَ اللّٰهُ', 'in shaaʾa llaah', 'God willing'),
    P('مَا شَاءَ اللّٰهُ', 'maa shaaʾa llaah', 'As God has willed (what a wonderful thing!)'),
    P('جَزَاكَ اللّٰهُ خَيْرًا', 'jazaaka llaahu khayran', 'May God reward you (a thank-you, to a boy or man)'),
    P('مَعَ السَّلَامَةِ', 'maʿa s-salaama', 'Goodbye (go safely)'),
    P('آمِين', 'aamiin', 'Ameen'),
    P('عِيدٌ مُبَارَكٌ', 'ʿiidun mubaarak', 'Eid Mubarak (a blessed Eid)'),
    P('مِنْ فَضْلِكِ', 'min faḍliki', 'Please (to a girl or woman)'),
  ],
}

// ---- أَنْتَ or أَنْتِ? ------------------------------------------------------------------------------
// Young: pick the pronoun for each person. Older: pick the right sentence.
// Older pairs are bank items (so they are reviewed and get audio): { right, wrong }.
export const politeYoung = [
  { title: 'What do you say to your Grandpa?', art: '👴', who: 'Grandpa', right: 'أَنْتَ' },
  { title: 'What do you say to your Mum?', art: '👩', who: 'Mum', right: 'أَنْتِ' },
  { title: 'What do you say to your friend Yusuf?', art: '🧑', who: 'Yusuf', right: 'أَنْتَ' },
  { title: 'What do you say to your friend Layla?', art: '👧', who: 'Layla', right: 'أَنْتِ' },
  { title: 'Grandma is talking to Sara. What does Grandma say?', art: '👵', who: 'Grandma to Sara', right: 'أَنْتِ' },
  { title: 'What do you say to your Dad?', art: '👨', who: 'Dad', right: 'أَنْتَ' },
]

export const politeOlder = [
  {
    title: 'You ask Grandma how she is. What do you say?',
    art: '👵',
    right: P('كَيْفَ حَالُكِ يَا جَدَّتِي؟', 'kayfa ḥaaluki yaa jaddatii?', 'How are you, Grandma?'),
    wrong: [P('كَيْفَ حَالُكَ يَا جَدَّتِي؟', 'kayfa ḥaaluka yaa jaddatii?', 'How are you, Grandma? (the "you" for a man)')],
  },
  {
    title: 'You ask Dad for some water. What do you say?',
    art: '👨',
    right: P('يَا أَبِي، أَعْطِنِي قَلِيلًا مِنَ الْمَاءِ مِنْ فَضْلِكَ.', 'yaa abii, aʿṭinii qaliilan mina l-maaʾi min faḍlika.', 'Dad, please give me a little water.'),
    wrong: [P('يَا أَبِي، أَعْطِنِي قَلِيلًا مِنَ الْمَاءِ مِنْ فَضْلِكِ.', 'yaa abii, aʿṭinii qaliilan mina l-maaʾi min faḍliki.', 'Dad, please give me a little water. (the "please" for a woman)')],
  },
  {
    title: 'You ask your friend Yusuf to play. What do you say?',
    art: '🧑',
    right: P('يَا يُوسُفُ، هَلْ تَلْعَبُ مَعِي؟', 'yaa yuusufu, hal talʿabu maʿii?', 'Yusuf, will you play with me?'),
    wrong: [P('يَا يُوسُفُ، هَلْ تَلْعَبِينَ مَعِي؟', 'yaa yuusufu, hal talʿabiina maʿii?', 'Yusuf, will you play with me? (the verb for a girl)')],
  },
  {
    title: 'You invite Grandpa to sit down. What do you say?',
    art: '👴',
    right: P('تَفَضَّلْ يَا جَدِّي، اِجْلِسْ هُنَا.', 'tafaḍḍal yaa jaddii, ijlis hunaa.', 'Please, Grandpa, sit here.'),
    wrong: [P('تَفَضَّلِي يَا جَدِّي، اِجْلِسِي هُنَا.', 'tafaḍḍalii yaa jaddii, ijlisii hunaa.', 'Please, Grandpa, sit here. (the words for a woman)')],
  },
  {
    title: 'Grandpa asks Sara if she washed her hands. What does he say?',
    art: '👴',
    right: P('هَلْ غَسَلْتِ يَدَيْكِ يَا سَارَةُ؟', 'hal ghasalti yadayki yaa saaratu?', 'Did you wash your hands, Sara?'),
    wrong: [P('هَلْ غَسَلْتَ يَدَيْكَ يَا سَارَةُ؟', 'hal ghasalta yadayka yaa saaratu?', 'Did you wash your hands, Sara? (the words for a boy)')],
  },
  {
    title: 'You thank Mum for dinner. What do you say?',
    art: '👩',
    right: P('شُكْرًا لَكِ يَا أُمِّي.', 'shukran laki yaa ummii.', 'Thank you, Mum.'),
    wrong: [P('شُكْرًا لَكَ يَا أُمِّي.', 'shukran laka yaa ummii.', 'Thank you, Mum. (the "you" for a man)')],
  },
]

// ---- Conversations --------------------------------------------------------------------------------
// young: 4 short lines with picture cues.  older: 6–7 line conversations.
const S = (key, title, emoji, young, older) => ({ key, title, emoji, young, older })

const allScenes = [
  // ===================================== MORNINGS =====================================
  S('wake', 'Good Morning!', '⏰',
    [
      L('um', 'اِسْتَيْقِظِي يَا سَارَةُ، جَاءَ الصَّبَاحُ.', 'istayqiẓii yaa saaratu, jaaʾa ṣ-ṣabaaḥ.', 'Wake up, Sara. Morning is here.', '⏰'),
      L('t', 'صَبَاحُ الْخَيْرِ يَا أُمِّي.', 'ṣabaaḥu l-khayri yaa ummii.', 'Good morning, Mum.', '👋'),
      L('um', 'صَبَاحُ النُّورِ. اِغْسِلِي وَجْهَكِ.', 'ṣabaaḥu n-nuur. ighsilii wajhaki.', 'Good morning to you. Wash your face.', '🚿'),
      L('t', 'نَعَمْ يَا أُمِّي.', 'naʿam, yaa ummii.', 'Yes, Mum.', '✅'),
    ],
    [
      L('um', 'اِسْتَيْقِظِي يَا ابْنَتِي، السَّاعَةُ السَّابِعَةُ.', 'istayqiẓii yaa bnatii, as-saaʿatu s-saabiʿa.', "Wake up, my daughter. It's seven o'clock."),
      L('t', 'خَمْسُ دَقَائِقَ فَقَطْ يَا أُمِّي!', 'khamsu daqaaʾiqa faqaṭ, yaa ummii!', 'Just five minutes, Mum!'),
      L('um', 'لَا، سَتَتَأَخَّرِينَ عَنِ الْمَدْرَسَةِ.', 'laa, sa-tataʾakhkhariina ʿani l-madrasa.', 'No, you will be late for school.'),
      L('t', 'حَسَنًا، أَنَا أَسْتَيْقِظُ. صَبَاحُ الْخَيْرِ يَا أُمِّي.', 'ḥasanan, ana astayqiẓ. ṣabaaḥu l-khayri yaa ummii.', "OK, I'm getting up. Good morning, Mum."),
      L('um', 'صَبَاحُ النُّورِ. اِغْسِلِي وَجْهَكِ وَيَدَيْكِ بِسُرْعَةٍ.', 'ṣabaaḥu n-nuur. ighsilii wajhaki wa-yadayki bi-surʿa.', 'Good morning to you. Wash your face and hands, quickly.'),
      L('t', 'هَلْ حَضَّرْتِ الْفُطُورَ يَا أُمِّي؟', 'hal ḥaḍḍarti l-fuṭuura yaa ummii?', 'Have you made breakfast, Mum?'),
      L('um', 'نَعَمْ، الْبَيْضُ وَالْخُبْزُ جَاهِزَانِ.', 'naʿam, al-bayḍu wa-l-khubzu jaahizaan.', 'Yes, the eggs and bread are ready.'),
    ]),
  S('ready', 'Ready for School', '🎒',
    [
      L('ab', 'أَيْنَ حَقِيبَتُكِ يَا سَارَةُ؟', 'ayna ḥaqiibatuki yaa saaratu?', 'Where is your school bag, Sara?', '🎒'),
      L('t', 'هَا هِيَ يَا أَبِي.', 'haa hiya yaa abii.', 'Here it is, Dad.', '👉'),
      L('ab', 'أَحْسَنْتِ! اِلْبَسِي حِذَاءَكِ.', 'aḥsanti! ilbasii ḥidhaaʾaki.', 'Well done! Put your shoes on.', '👟'),
      L('t', 'نَعَمْ يَا أَبِي.', 'naʿam, yaa abii.', 'Yes, Dad.', '✅'),
    ],
    [
      L('ab', 'هَلْ أَنْتِ جَاهِزَةٌ يَا سَارَةُ؟ سَنَخْرُجُ فِي الثَّامِنَةِ.', 'hal anti jaahizatun yaa saaratu? sa-nakhruju fi th-thaamina.', "Are you ready, Sara? We're leaving at eight."),
      L('t', 'نَعَمْ يَا أَبِي، أَلْبَسُ حِذَائِي الْآنَ.', 'naʿam yaa abii, albasu ḥidhaaʾi l-aan.', "Yes, Dad, I'm putting my shoes on now."),
      L('ab', 'هَلْ وَضَعْتِ كُتُبَكِ فِي الْحَقِيبَةِ؟', 'hal waḍaʿti kutubaki fi l-ḥaqiiba?', 'Have you put your books in the bag?'),
      L('t', 'نَعَمْ، وَوَضَعْتُ دَفْتَرِي وَأَقْلَامِي أَيْضًا.', 'naʿam, wa-waḍaʿtu daftarii wa-aqlaamii ayḍan.', 'Yes, and I put my notebook and pens in too.'),
      L('ab', 'مُمْتَازٌ. وَأَيْنَ زُجَاجَةُ الْمَاءِ؟', 'mumtaaz. wa-ayna zujaajatu l-maaʾ?', 'Excellent. And where is the water bottle?'),
      L('t', 'أُوه، نَسِيتُهَا! سَأُحْضِرُهَا حَالًا.', 'uuh, nasiituhaa! sa-uḥḍiruhaa ḥaalan.', "Oh, I forgot it! I'll get it right away."),
      L('ab', 'هَيَّا بِنَا، لَا نُرِيدُ أَنْ نَتَأَخَّرَ.', 'hayyaa binaa, laa nuriidu an nataʾakhkhar.', "Let's go, we don't want to be late."),
    ]),

  // ===================================== SCHOOL DAYS =====================================
  S('home', 'Home from School', '🏠',
    [
      L('t', 'السَّلَامُ عَلَيْكُمْ يَا أُمِّي!', 'as-salaamu ʿalaykum yaa ummii!', 'Peace be upon you, Mum!', '🏠'),
      L('um', 'وَعَلَيْكُمُ السَّلَامُ يَا حَبِيبَتِي.', 'wa-ʿalaykumu s-salaamu yaa ḥabiibatii.', 'And peace be upon you, my darling.', '🤗'),
      L('um', 'كَيْفَ كَانَتِ الْمَدْرَسَةُ؟', 'kayfa kaanati l-madrasa?', 'How was school?', '🏫'),
      L('t', 'كَانَتْ جَمِيلَةً جِدًّا!', 'kaanat jamiilatan jiddan!', 'It was really lovely!', '😄'),
    ],
    [
      L('t', 'السَّلَامُ عَلَيْكُمْ! لَقَدْ عُدْتُ مِنَ الْمَدْرَسَةِ.', 'as-salaamu ʿalaykum! laqad ʿudtu mina l-madrasa.', "Peace be upon you! I'm back from school."),
      L('um', 'وَعَلَيْكُمُ السَّلَامُ يَا حَبِيبَتِي. كَيْفَ كَانَ يَوْمُكِ؟', 'wa-ʿalaykumu s-salaamu yaa ḥabiibatii. kayfa kaana yawmuki?', 'And peace be upon you, my darling. How was your day?'),
      L('t', 'كَانَ جَيِّدًا. أَخَذْتُ نَجْمَةً فِي دَرْسِ الرِّيَاضِيَّاتِ!', 'kaana jayyidan. akhadhtu najmatan fii darsi r-riyaaḍiyyaat!', 'It was good. I got a star in the maths lesson!'),
      L('um', 'مَا شَاءَ اللّٰهُ! أَنَا فَخُورَةٌ بِكِ.', 'maa shaaʾa llaah! ana fakhuuratun biki.', "Ma sha Allah! I'm proud of you."),
      L('t', 'أَنَا جَائِعَةٌ جِدًّا يَا أُمِّي.', 'ana jaaʾiʿatun jiddan yaa ummii.', "I'm really hungry, Mum."),
      L('um', 'اِغْسِلِي يَدَيْكِ، وَالْغَدَاءُ جَاهِزٌ بَعْدَ قَلِيلٍ.', 'ighsilii yadayki, wa-l-ghadaaʾu jaahizun baʿda qaliil.', 'Wash your hands; lunch will be ready soon.'),
    ]),
  S('friend', 'My Friend Layla', '👭',
    [
      L('ly', 'مَرْحَبًا يَا سَارَةُ!', 'marḥaban yaa saaratu!', 'Hi, Sara!', '👋'),
      L('t', 'مَرْحَبًا يَا لَيْلَى! كَيْفَ حَالُكِ؟', 'marḥaban yaa laylaa! kayfa ḥaaluki?', 'Hi, Layla! How are you?', '😊'),
      L('ly', 'أَنَا بِخَيْرٍ. هَلْ نَلْعَبُ مَعًا؟', 'ana bi-khayr. hal nalʿabu maʿan?', "I'm fine. Shall we play together?", '⚽'),
      L('t', 'نَعَمْ، هَيَّا!', 'naʿam, hayyaa!', "Yes, let's go!", '🎉'),
    ],
    [
      L('ly', 'صَبَاحُ الْخَيْرِ يَا سَارَةُ! هَلْ حَلَلْتِ الْوَاجِبَ؟', 'ṣabaaḥu l-khayri yaa saaratu! hal ḥalalti l-waajib?', 'Good morning, Sara! Did you do the homework?'),
      L('t', 'نَعَمْ، وَلٰكِنَّ السُّؤَالَ الْأَخِيرَ كَانَ صَعْبًا.', 'naʿam, wa-laakinna s-suʾaala l-akhiira kaana ṣaʿban.', 'Yes, but the last question was hard.'),
      L('ly', 'صَحِيحٌ! هَلْ تُسَاعِدِينَنِي فِيهِ فِي الِاسْتِرَاحَةِ؟', 'ṣaḥiiḥ! hal tusaaʿidiinanii fiihi fi l-istiraaḥa?', 'True! Will you help me with it at break?'),
      L('t', 'طَبْعًا. وَبَعْدَ ذٰلِكَ نَلْعَبُ بِالْكُرَةِ.', 'ṭabʿan. wa-baʿda dhaalika nalʿabu bi-l-kura.', 'Of course. And after that we play ball.'),
      L('ly', 'فِكْرَةٌ رَائِعَةٌ! أَنْتِ أَفْضَلُ صَدِيقَةٍ.', 'fikratun raaʾiʿa! anti afḍalu ṣadiiqa.', "Great idea! You're the best friend."),
      L('t', 'وَأَنْتِ أَيْضًا يَا لَيْلَى!', 'wa-anti ayḍan yaa laylaa!', 'And so are you, Layla!'),
    ]),

  // ===================================== FOOD & KITCHEN =====================================
  S('meal', 'Dinner Time', '🍲',
    [
      L('um', 'الطَّعَامُ جَاهِزٌ!', 'aṭ-ṭaʿaamu jaahiz!', 'Food is ready!', '🍲'),
      L('t', 'بِسْمِ اللّٰهِ.', 'bismi llaah.', 'In the name of God.', '🤲'),
      L('ab', 'كُلِي جَيِّدًا يَا سَارَةُ.', 'kulii jayyidan yaa saaratu.', 'Eat well, Sara.', '🍚', 't'),
      L('t', 'الْحَمْدُ لِلّٰهِ، شَبِعْتُ!', 'al-ḥamdu lillaah, shabiʿtu!', "Praise be to God, I'm full!", '😋'),
    ],
    [
      L('um', 'تَعَالَوْا، الْعَشَاءُ جَاهِزٌ!', 'taʿaalaw, al-ʿashaaʾu jaahiz!', 'Come, dinner is ready!'),
      L('ab', 'مَا هٰذِهِ الرَّائِحَةُ الطَّيِّبَةُ؟', 'maa haadhihi r-raaʾiḥatu ṭ-ṭayyiba?', 'What is that lovely smell?'),
      L('um', 'طَبَخْتُ دَجَاجًا مَعَ الْأَرُزِّ.', 'ṭabakhtu dajaajan maʿa l-aruzz.', 'I cooked chicken with rice.'),
      L('t', 'يَمّ! هٰذَا طَعَامِي الْمُفَضَّلُ.', 'yamm! haadhaa ṭaʿaamii l-mufaḍḍal.', 'Yum! This is my favourite food.'),
      L('ab', 'قُولِي "بِسْمِ اللّٰهِ" أَوَّلًا يَا سَارَةُ.', 'quulii "bismi llaah" awwalan yaa saaratu.', 'Say "Bismillah" first, Sara.'),
      L('t', 'بِسْمِ اللّٰهِ. شُكْرًا لَكِ يَا أُمِّي، الطَّعَامُ لَذِيذٌ!', 'bismi llaah. shukran laki yaa ummii, aṭ-ṭaʿaamu ladhiidh!', 'Bismillah. Thank you, Mum, the food is delicious!', undefined, 'um'),
      L('um', 'بِالْهَنَاءِ وَالشِّفَاءِ يَا حَبِيبَتِي.', 'bi-l-hanaaʾi wa-sh-shifaaʾ yaa ḥabiibatii.', 'Enjoy it, my darling.'),
    ]),
  S('souq', 'At the Souq', '🛍️',
    [
      L('ab', 'هَيَّا نَذْهَبُ إِلَى السُّوقِ.', 'hayyaa nadhhabu ila s-suuq.', "Let's go to the market.", '🛍️'),
      L('t', 'أُرِيدُ تُفَّاحًا يَا أَبِي.', 'uriidu tuffaaḥan yaa abii.', 'I want apples, Dad.', '🍎'),
      L('shop', 'تَفَضَّلِي، هٰذَا تُفَّاحٌ أَحْمَرُ.', 'tafaḍḍalii, haadhaa tuffaaḥun aḥmar.', 'Here you are, these are red apples.', '🍎', 't'),
      L('t', 'شُكْرًا لَكَ!', 'shukran laka!', 'Thank you!', '🙏'),
    ],
    [
      L('shop', 'أَهْلًا وَسَهْلًا! مَاذَا تُرِيدُ؟', 'ahlan wa-sahlan! maadhaa turiid?', 'Welcome! What would you like?', undefined, 'ab'),
      L('ab', 'أُرِيدُ كِيلُو مِنَ الطَّمَاطِمِ، مِنْ فَضْلِكَ.', 'uriidu kiiluu mina ṭ-ṭamaaṭim, min faḍlik.', 'A kilo of tomatoes, please.'),
      L('t', 'أَبِي، هَلْ نَشْتَرِي بُرْتُقَالًا أَيْضًا؟', 'abii, hal nashtarii burtuqaalan ayḍan?', 'Dad, shall we buy oranges too?'),
      L('ab', 'نَعَمْ. بِكَمِ الْبُرْتُقَالُ؟', 'naʿam. bi-kami l-burtuqaal?', 'Yes. How much are the oranges?', undefined, 'shop'),
      L('shop', 'الْكِيلُو بِعَشَرَةٍ.', 'al-kiiluu bi-ʿashara.', 'Ten a kilo.'),
      L('ab', 'حَسَنًا، كِيلُو وَاحِدٌ مِنْ فَضْلِكَ.', 'ḥasanan, kiiluu waaḥidun min faḍlik.', 'OK, one kilo please.'),
      L('t', 'شُكْرًا لَكَ يَا عَمُّ!', 'shukran laka yaa ʿammu!', 'Thank you, sir! (يَا عَمُّ, "uncle", is a polite way to speak to an older man)', undefined, 'shop'),
    ]),

  // ===================================== PRAYER & RAMADAN =====================================
  S('masjid', 'To the Mosque', '🕌',
    [
      L('jd', 'هَيَّا إِلَى الْمَسْجِدِ يَا سَارَةُ.', 'hayyaa ila l-masjidi yaa saaratu.', "Let's go to the mosque, Sara.", '🕌'),
      L('t', 'نَعَمْ يَا جَدِّي، أَنَا جَاهِزَةٌ.', 'naʿam yaa jaddii, ana jaahiza.', "Yes, Grandpa, I'm ready.", '✅'),
      L('jd', 'اِخْلَعِي حِذَاءَكِ هُنَا.', 'ikhlaʿii ḥidhaaʾaki hunaa.', 'Take your shoes off here.', '👟'),
      L('t', 'الْمَسْجِدُ جَمِيلٌ جِدًّا!', 'al-masjidu jamiilun jiddan!', 'The mosque is very beautiful!', '🤩'),
    ],
    [
      L('jd', 'سَارَةُ، هَلْ تَأْتِينَ مَعِي إِلَى صَلَاةِ الْعَصْرِ؟', 'saaratu, hal taʾtiina maʿii ilaa ṣalaati l-ʿaṣr?', 'Sara, will you come with me to the afternoon prayer?'),
      L('t', 'نَعَمْ يَا جَدِّي، سَأَتَوَضَّأُ أَوَّلًا.', 'naʿam yaa jaddii, sa-atawaḍḍaʾu awwalan.', "Yes, Grandpa, I'll do wudu first."),
      L('jd', 'أَحْسَنْتِ. وَلَا تَنْسَيْ حِجَابَكِ.', 'aḥsanti. wa-laa tansay ḥijaabaki.', "Well done. And don't forget your headscarf."),
      L('t', 'لِمَاذَا نَدْخُلُ بِالْقَدَمِ الْيُمْنَى؟', 'limaadhaa nadkhulu bi-l-qadami l-yumnaa?', 'Why do we go in with the right foot?'),
      L('jd', 'هٰذِهِ سُنَّةٌ. وَنَقُولُ دُعَاءَ دُخُولِ الْمَسْجِدِ.', 'haadhihi sunna. wa-naquulu duʿaaʾa dukhuuli l-masjid.', "It's the Sunnah. And we say the prayer for entering the mosque."),
      L('t', 'بَعْدَ الصَّلَاةِ، هَلْ نَقْرَأُ الْقُرْآنَ مَعًا؟', 'baʿda ṣ-ṣalaah, hal naqraʾu l-qurʾaana maʿan?', 'After the prayer, shall we read the Quran together?'),
      L('jd', 'بِكُلِّ سُرُورٍ يَا حَبِيبَتِي.', 'bi-kulli suruur, yaa ḥabiibatii.', 'With great pleasure, my darling.'),
    ]),
  S('iftar', 'Iftar in Ramadan', '🌙',
    [
      L('um', 'حَانَ وَقْتُ الْإِفْطَارِ!', 'ḥaana waqtu l-ifṭaar!', "It's time for iftar!", '🌅'),
      L('t', 'هَلْ نَأْكُلُ التَّمْرَ أَوَّلًا؟', 'hal naʾkulu t-tamra awwalan?', 'Do we eat dates first?', '🌴'),
      L('um', 'نَعَمْ، وَنَشْرَبُ الْمَاءَ.', 'naʿam, wa-nashrabu l-maaʾ.', 'Yes, and we drink water.', '💧'),
      L('t', 'رَمَضَانُ كَرِيمٌ!', 'ramaḍaanu kariim!', 'Ramadan Kareem!', '🌙'),
    ],
    [
      L('ab', 'كَمْ بَقِيَ عَلَى أَذَانِ الْمَغْرِبِ؟', 'kam baqiya ʿalaa adhaani l-maghrib?', 'How long until the Maghrib call to prayer?', undefined, 'um'),
      L('um', 'خَمْسُ دَقَائِقَ فَقَطْ.', 'khamsu daqaaʾiqa faqaṭ.', 'Only five minutes.'),
      L('t', 'صُمْتُ الْيَوْمَ كُلَّهُ، وَأَنَا عَطْشَانَةٌ جِدًّا!', 'ṣumtu l-yawma kullahu, wa-ana ʿaṭshaanatun jiddan!', "I fasted the whole day, and I'm so thirsty!"),
      L('ab', 'مَا شَاءَ اللّٰهُ، أَنْتِ صَائِمَةٌ صَغِيرَةٌ قَوِيَّةٌ.', 'maa shaaʾa llaah, anti ṣaaʾimatun ṣaghiiratun qawiyya.', "Ma sha Allah, you're a strong little faster."),
      L('um', 'اِسْمَعُوا، الْأَذَانُ!', 'ismaʿuu, al-adhaan!', 'Listen, the call to prayer!'),
      L('t', 'بِسْمِ اللّٰهِ. أَبْدَأُ بِالتَّمْرِ.', 'bismi llaah. abdaʾu bi-t-tamr.', "Bismillah. I'll start with a date."),
      L('ab', 'تَقَبَّلَ اللّٰهُ صِيَامَكِ يَا سَارَةُ.', 'taqabbala llaahu ṣiyaamaki yaa saaratu.', 'May God accept your fast, Sara.', undefined, 't'),
    ]),

  // ===================================== GRANDPARENTS =====================================
  S('story', "Grandpa's Story", '📖',
    [
      L('t', 'يَا جَدِّي، اِحْكِ لِي قِصَّةً.', 'yaa jaddii, iḥki lii qiṣṣa.', 'Grandpa, tell me a story.', '📖'),
      L('jd', 'حَسَنًا. كَانَ يَا مَا كَانَ…', 'ḥasanan. kaana yaa maa kaan…', 'All right. Once upon a time…', '✨'),
      L('jd', 'كَانَ هُنَاكَ جَمَلٌ صَغِيرٌ فِي الصَّحْرَاءِ.', 'kaana hunaaka jamalun ṣaghiirun fi ṣ-ṣaḥraaʾ.', 'There was a little camel in the desert.', '🐪'),
      L('t', 'وَمَاذَا حَدَثَ بَعْدَ ذٰلِكَ؟', 'wa-maadhaa ḥadatha baʿda dhaalik?', 'And what happened after that?', '🤔'),
    ],
    [
      L('t', 'جَدِّي، كَيْفَ كَانَتِ الْحَيَاةُ عِنْدَمَا كُنْتَ صَغِيرًا؟', 'jaddii, kayfa kaanati l-ḥayaatu ʿindamaa kunta ṣaghiiran?', 'Grandpa, what was life like when you were little?'),
      L('jd', 'كُنَّا نَسْكُنُ فِي قَرْيَةٍ صَغِيرَةٍ قُرْبَ النَّهْرِ.', 'kunnaa naskunu fii qaryatin ṣaghiiratin qurba n-nahr.', 'We lived in a small village near the river.'),
      L('t', 'هَلْ كَانَ عِنْدَكُمْ تِلْفَازٌ؟', 'hal kaana ʿindakum tilfaaz?', 'Did you have a television?'),
      L('jd', 'لَا! كُنَّا نَلْعَبُ فِي الْحُقُولِ حَتَّى الْمَغْرِبِ.', 'laa! kunnaa nalʿabu fi l-ḥuquuli ḥatta l-maghrib.', 'No! We played in the fields until sunset.'),
      L('t', 'وَمَاذَا كُنْتَ تُحِبُّ أَنْ تَأْكُلَ؟', 'wa-maadhaa kunta tuḥibbu an taʾkul?', 'And what did you like to eat?'),
      L('jd', 'خُبْزَ جَدَّتِي الْحَارَّ مِنَ الْفُرْنِ، مَعَ الْعَسَلِ.', 'khubza jaddatii l-ḥaarra mina l-furn, maʿa l-ʿasal.', "My grandmother's hot bread from the oven, with honey."),
      L('t', 'يَا سَلَامُ! أُرِيدُ أَنْ أَزُورَ الْقَرْيَةَ يَوْمًا.', 'yaa salaam! uriidu an azuura l-qaryata yawman.', 'Wow! I want to visit the village one day.'),
    ]),
  S('videocall', 'A Call with Grandma', '📱',
    [
      L('t', 'مَرْحَبًا يَا جَدَّتِي!', 'marḥaban yaa jaddatii!', 'Hello, Grandma!', '📱'),
      L('jt', 'أَهْلًا يَا حَبِيبَتِي! اِشْتَقْتُ إِلَيْكِ.', 'ahlan yaa ḥabiibatii! ishtaqtu ilayki.', 'Hello, my darling! I missed you.', '🥰'),
      L('t', 'وَأَنَا اشْتَقْتُ إِلَيْكِ أَيْضًا.', 'wa-ana shtaqtu ilayki ayḍan.', 'I missed you too.', '❤️'),
      L('jt', 'مَعَ السَّلَامَةِ يَا سَارَةُ.', 'maʿa s-salaamati yaa saaratu.', 'Goodbye, Sara.', '👋'),
    ],
    [
      L('jt', 'هَلْ تَسْمَعِينَنِي يَا سَارَةُ؟', 'hal tasmaʿiinanii yaa saaratu?', 'Can you hear me, Sara?'),
      L('t', 'نَعَمْ يَا جَدَّتِي، أَسْمَعُكِ وَأَرَاكِ!', 'naʿam yaa jaddatii, asmaʿuki wa-araaki!', 'Yes, Grandma, I can hear you and see you!'),
      L('jt', 'مَا شَاءَ اللّٰهُ، كَبِرْتِ كَثِيرًا!', 'maa shaaʾa llaah, kabirti kathiiran!', "Ma sha Allah, you've grown so much!"),
      L('t', 'كَيْفَ حَالُكِ يَا جَدَّتِي؟ وَكَيْفَ صِحَّتُكِ؟', 'kayfa ḥaaluki yaa jaddatii? wa-kayfa ṣiḥḥatuki?', 'How are you, Grandma? And how is your health?'),
      L('jt', 'الْحَمْدُ لِلّٰهِ، أَنَا بِخَيْرٍ. مَتَى تَزُورِينَنَا؟', 'al-ḥamdu lillaah, ana bi-khayr. mataa tazuuriinanaa?', 'Praise be to God, I am well. When will you visit us?'),
      L('t', 'فِي الْعُطْلَةِ الصَّيْفِيَّةِ، إِنْ شَاءَ اللّٰهُ.', 'fi l-ʿuṭlati ṣ-ṣayfiyya, in shaaʾa llaah.', 'In the summer holiday, God willing.'),
      L('jt', 'سَأَخْبِزُ لَكِ الْكَعْكَ الَّذِي تُحِبِّينَهُ.', 'sa-akhbizu laki l-kaʿka lladhii tuḥibbiinahu.', 'I will bake you the biscuits you love.'),
    ]),

  // ===================================== PLAY & OUTINGS =====================================
  S('play', 'Hide and Seek', '🙈',
    [
      L('fr', 'هَيَّا نَلْعَبُ الْغُمَّيْضَةَ!', 'hayyaa nalʿabu l-ghummayḍa!', "Let's play hide and seek!", '🙈'),
      L('t', 'أَنَا أَعُدُّ: وَاحِد، اِثْنَان، ثَلَاثَة…', 'ana aʿuddu: waaḥid, ithnaan, thalaatha…', "I'll count: one, two, three…", '🔢'),
      L('fr', 'أَيْنَ أَنَا؟', 'ayna ana?', 'Where am I?', '🤫'),
      L('t', 'وَجَدْتُكَ يَا يُوسُفُ!', 'wajadtuka yaa yuusuf!', 'Found you, Yusuf!', '🎉'),
    ],
    [
      L('fr', 'سَارَةُ، هَلْ تَلْعَبِينَ مَعَنَا الْغُمَّيْضَةَ؟', 'saaratu, hal talʿabiina maʿanaa l-ghummayḍa?', 'Sara, will you play hide and seek with us?'),
      L('t', 'نَعَمْ! مَنْ يَعُدُّ أَوَّلًا؟', 'naʿam! man yaʿuddu awwalan?', 'Yes! Who counts first?'),
      L('fr', 'أَنَا أَعُدُّ إِلَى عِشْرِينَ، وَأَنْتِ تَخْتَبِئِينَ.', 'ana aʿuddu ilaa ʿishriin, wa-anti takhtabiʾiin.', "I'll count to twenty, and you hide."),
      L('t', 'حَسَنًا، لَا تَفْتَحْ عَيْنَيْكَ!', 'ḥasanan, laa taftaḥ ʿaynayk!', "OK, don't open your eyes!"),
      L('fr', '…ثَمَانِيَةَ عَشَرَ، تِسْعَةَ عَشَرَ، عِشْرُونَ! أَنَا قَادِمٌ!', '…thamaaniyata ʿashar, tisʿata ʿashar, ʿishruun! ana qaadim!', '…eighteen, nineteen, twenty! Here I come!'),
      L('fr', 'وَجَدْتُكِ خَلْفَ الشَّجَرَةِ!', 'wajadtuki khalfa sh-shajara!', 'Found you behind the tree!'),
      L('t', 'أُوه! الْآنَ دَوْرِي أَنَا.', 'uuh! al-aana dawrii ana.', "Oh! Now it's my turn."),
    ]),
  S('rain', 'A Rainy Day', '🌧️',
    [
      L('t', 'اُنْظُرِي يَا أُمِّي، إِنَّهَا تُمْطِرُ!', 'unẓurii yaa ummii, innahaa tumṭir!', "Look, Mum, it's raining!", '🌧️'),
      L('um', 'خُذِي الْمِظَلَّةَ.', 'khudhi l-miẓalla.', 'Take the umbrella.', '☂️'),
      L('t', 'أُحِبُّ صَوْتَ الْمَطَرِ.', 'uḥibbu ṣawta l-maṭar.', 'I love the sound of the rain.', '🎵'),
      L('um', 'وَأَنَا أَيْضًا. الْمَطَرُ رَحْمَةٌ.', 'wa-ana ayḍan. al-maṭaru raḥma.', 'Me too. Rain is a blessing.', '🌈'),
    ],
    [
      L('t', 'أُمِّي! السَّمَاءُ مَلِيئَةٌ بِالْغُيُومِ.', 'ummii! as-samaaʾu maliiʾatun bi-l-ghuyuum.', 'Mum! The sky is full of clouds.'),
      L('um', 'نَعَمْ، سَتُمْطِرُ قَرِيبًا. أَدْخِلِي الْغَسِيلَ مِنْ فَضْلِكِ.', 'naʿam, sa-tumṭiru qariiban. adkhilii l-ghasiila min faḍliki.', 'Yes, it will rain soon. Bring the washing in, please.'),
      L('t', 'حَسَنًا… أَسْمَعُ الرَّعْدَ!', 'ḥasanan… asmaʿu r-raʿd!', 'OK… I can hear thunder!'),
      L('um', 'لَا تَخَافِي. نَقُولُ: اللّٰهُمَّ صَيِّبًا نَافِعًا.', 'laa takhaafii. naquulu: allaahumma ṣayyiban naafiʿan.', "Don't be scared. We say: O God, let it be a helpful rain."),
      L('t', 'اللّٰهُمَّ صَيِّبًا نَافِعًا. هَلْ أَلْعَبُ فِي الْمَطَرِ قَلِيلًا؟', 'allaahumma ṣayyiban naafiʿan. hal alʿabu fi l-maṭari qaliilan?', 'O God, let it be a helpful rain. Can I play in the rain a little?'),
      L('um', 'قَلِيلًا فَقَطْ، ثُمَّ تُغَيِّرِينَ مَلَابِسَكِ.', 'qaliilan faqaṭ, thumma tughayyiriina malaabisaki.', 'Just a little, then you change your clothes.'),
    ]),

  // ===================================== CARE & MANNERS =====================================
  S('sorry', 'Saying Sorry', '🤝',
    [
      L('t', 'أَنَا آسِفَةٌ يَا أُمِّي.', 'ana aasifatun yaa ummii.', "I'm sorry, Mum.", '😔'),
      L('um', 'مَاذَا حَدَثَ؟', 'maadhaa ḥadath?', 'What happened?', '❓'),
      L('t', 'كَسَرْتُ الْكُوبَ.', 'kasartu l-kuub.', 'I broke the cup.', '🥛'),
      L('um', 'لَا بَأْسَ، الْمُهِمُّ أَنَّكِ بِخَيْرٍ.', 'laa baʾs, al-muhimmu annaki bi-khayr.', "Never mind, what matters is that you're OK.", '🤗'),
    ],
    [
      L('t', 'لَيْلَى، أَنَا آسِفَةٌ.', 'laylaa, ana aasifa.', "Layla, I'm sorry.", undefined, 'ly'),
      L('ly', 'لِمَاذَا؟ مَاذَا حَدَثَ؟', 'limaadhaa? maadhaa ḥadath?', 'Why? What happened?'),
      L('t', 'أَوْقَعْتُ الْمَاءَ عَلَى رَسْمَتِكِ بِدُونِ قَصْدٍ.', 'awqaʿtu l-maaʾa ʿalaa rasmatiki bi-duuni qaṣd.', 'I spilled water on your drawing by accident.'),
      L('ly', 'أُوه… كَانَتْ رَسْمَةً جَمِيلَةً.', 'uuh… kaanat rasmatan jamiila.', 'Oh… it was a beautiful drawing.'),
      L('t', 'أَعْرِفُ. هَلْ نَرْسُمُ وَاحِدَةً جَدِيدَةً مَعًا؟', 'aʿrifu. hal narsumu waaḥidatan jadiidatan maʿan?', 'I know. Shall we draw a new one together?'),
      L('ly', 'فِكْرَةٌ جَمِيلَةٌ. سَامَحْتُكِ يَا سَارَةُ.', 'fikratun jamiila. saamaḥtuki yaa saaratu.', 'Lovely idea. I forgive you, Sara.'),
      L('t', 'شُكْرًا لَكِ يَا لَيْلَى. أَنْتِ صَدِيقَةٌ طَيِّبَةٌ.', 'shukran laki yaa laylaa. anti ṣadiiqatun ṭayyiba.', "Thank you, Layla. You're a kind friend."),
    ]),
  S('bed', 'Bedtime', '🛏️',
    [
      L('ab', 'حَانَ وَقْتُ النَّوْمِ يَا سَارَةُ.', 'ḥaana waqtu n-nawmi yaa saaratu.', "It's bedtime, Sara.", '🛏️'),
      L('t', 'تُصْبِحُ عَلَى خَيْرٍ يَا أَبِي.', 'tuṣbiḥu ʿalaa khayrin yaa abii.', 'Good night, Dad.', '🌙'),
      L('ab', 'وَأَنْتِ مِنْ أَهْلِهِ يَا حَبِيبَتِي.', 'wa-anti min ahlihi yaa ḥabiibatii.', 'And to you, my darling.', '❤️'),
      L('t', 'أَحْلَامٌ سَعِيدَةٌ!', 'aḥlaamun saʿiida!', 'Sweet dreams!', '😴'),
    ],
    [
      L('ab', 'سَارَةُ، السَّاعَةُ التَّاسِعَةُ. هَلْ نَظَّفْتِ أَسْنَانَكِ؟', 'saaratu, as-saaʿatu t-taasiʿa. hal naẓẓafti asnaanaki?', "Sara, it's nine o'clock. Have you brushed your teeth?"),
      L('t', 'نَعَمْ يَا أَبِي. هَلْ تَقْرَأُ لِي قِصَّةً؟', 'naʿam yaa abii. hal taqraʾu lii qiṣṣa?', 'Yes, Dad. Will you read me a story?'),
      L('ab', 'قِصَّةٌ قَصِيرَةٌ وَاحِدَةٌ فَقَطْ.', 'qiṣṣatun qaṣiiratun waaḥidatun faqaṭ.', 'Just one short story.'),
      L('t', 'شُكْرًا يَا أَبِي. أُحِبُّكَ!', 'shukran yaa abii. uḥibbuka!', 'Thank you, Dad. I love you!'),
      L('ab', 'وَأَنَا أُحِبُّكِ. لَا تَنْسَيْ دُعَاءَ النَّوْمِ.', 'wa-ana uḥibbuki. laa tansay duʿaaʾa n-nawm.', "And I love you. Don't forget the bedtime prayer."),
      L('t', 'بِاسْمِكَ اللّٰهُمَّ أَمُوتُ وَأَحْيَا.', 'bi-smika llaahumma amuutu wa-aḥyaa.', 'In Your name, O God, I die and I live.', undefined, 'god'),
      L('ab', 'تُصْبِحِينَ عَلَى خَيْرٍ يَا سَارَةُ.', 'tuṣbiḥiina ʿalaa khayrin yaa saaratu.', 'Good night, Sara.'),
    ]),
]

export const scenes = {
  young: allScenes.map((s) => ({ key: s.key, title: s.title, emoji: s.emoji, lines: s.young })),
  older: allScenes.map((s) => ({ key: s.key, title: s.title, emoji: s.emoji, lines: s.older })),
}

// Unit layout: which conversations make up each Family unit (the same for both tracks).
const layout = [
  { key: 'morning', title: 'Family: Mornings', emoji: '⏰', blurb: 'Waking up and getting ready for school', scenes: ['wake', 'ready'] },
  { key: 'school', title: 'Family: School Days', emoji: '🎒', blurb: 'Coming home, and a friend at school', scenes: ['home', 'friend'] },
  { key: 'food', title: 'Family: Food & Kitchen', emoji: '🍲', blurb: 'Dinner and the souq', scenes: ['meal', 'souq'] },
  { key: 'prayer', title: 'Family: Prayer & Ramadan', emoji: '🕌', blurb: 'The mosque and iftar', scenes: ['masjid', 'iftar'] },
  { key: 'elders', title: 'Family: Grandpa & Grandma', emoji: '👴', blurb: 'Stories and calls with grandparents', scenes: ['story', 'videocall'] },
  { key: 'play', title: 'Family: Play & Outings', emoji: '⚽', blurb: 'Hide and seek, and a rainy day', scenes: ['play', 'rain'] },
  { key: 'care', title: 'Family: Care & Manners', emoji: '🤝', blurb: 'Saying sorry and bedtime', scenes: ['sorry', 'bed'] },
]
export const unitLayout = { young: layout, older: layout }
