// The 18+ track ("Wayfarers"): adult vocabulary, sentences and readings. Modern Standard Arabic, starting from zero.
//
// Readings lead with an English paragraph (`lead`) so history, politics and culture can be understood properly
// while the Arabic stays short and learnable; the Arabic lines carry the facts in simple sentences.
// Facts are kept to what is well established; contested subjects are described neutrally.
// Writers still in copyright (Nizar Qabbani, Mahmoud Darwish…) are mentioned, never quoted.
const W = (bn, roman, en, emoji) => ({ bn, roman, en, emoji })
const S = (bn, roman, en) => ({ bn, roman, en })
const L = (bn, roman, en) => ({ bn, roman, en })

export const adultWordCategories = [
  {
    key: 'inlaws', title: 'In-laws & Extended Family', emoji: '👨‍👩‍👧‍👦',
    note: 'Arabic has a word for each kind of cousin: اِبْنُ الْعَمِّ is your dad\'s brother\'s son, اِبْنُ الْخَالِ your mum\'s brother\'s son, and so on.',
    words: [
      W('زَوْج', 'zawj', 'husband', '🤵'), W('زَوْجَة', 'zawja', 'wife', '👰'), W('حَمُو', 'ḥamuu', 'father-in-law', '👴'),
      W('حَمَاة', 'ḥamaat', 'mother-in-law', '👵'), W('صِهْر', 'ṣihr', 'son-in-law, brother-in-law', '🧑'), W('كَنَّة', 'kanna', 'daughter-in-law', '👩'),
      W('اِبْنُ الْعَمِّ', 'ibnu l-ʿamm', "cousin (dad's brother's son)", '👦'), W('بِنْتُ الْعَمِّ', 'bintu l-ʿamm', "cousin (dad's brother's daughter)", '👧'),
      W('اِبْنُ الْخَالِ', 'ibnu l-khaal', "cousin (mum's brother's son)", '👦'), W('بِنْتُ الْخَالَةِ', 'bintu l-khaala', "cousin (mum's sister's daughter)", '👧'),
      W('حَفِيد', 'ḥafiid', 'grandson', '👶'), W('حَفِيدَة', 'ḥafiida', 'granddaughter', '👶'), W('أَقَارِب', 'aqaarib', 'relatives', '👨‍👩‍👧‍👦'),
    ],
  },
  {
    key: 'work', title: 'Work & Office', emoji: '💼',
    note: 'At work people are often spoken to with a title: يَا أُسْتَاذُ / يَا أُسْتَاذَةُ (Mr / Ms), يَا دُكْتُورُ, يَا مُهَنْدِسُ.',
    words: [
      W('مَكْتَب', 'maktab', 'office, desk', '🏢'), W('وَظِيفَة', 'waẓiifa', 'job', '💼'), W('عَمَل', 'ʿamal', 'work', '🛠️'), W('رَاتِب', 'raatib', 'salary', '💵'),
      W('زَمِيل', 'zamiil', 'colleague', '🧑‍💼'), W('اِجْتِمَاع', 'ijtimaaʿ', 'meeting', '🗓️'), W('تَقْرِير', 'taqriir', 'report', '📄'), W('إِجَازَة', 'ijaaza', 'leave, holiday', '🏖️'),
      W('تِجَارَة', 'tijaara', 'business, trade', '🏪'), W('شَرِكَة', 'sharika', 'company', '🏭'), W('مُقَابَلَة', 'muqaabala', 'interview', '🤝'), W('مُدِير', 'mudiir', 'manager', '👔'),
    ],
  },
  {
    key: 'bank', title: 'Bank, Forms & Documents', emoji: '🏦',
    note: 'Paperwork has its own vocabulary. Learn these before your first visit to a bank or a government office.',
    words: [
      W('بَنْك', 'bank', 'bank', '🏦'), W('حِسَاب', 'ḥisaab', 'account', '💳'), W('اِسْتِمَارَة', 'istimaara', 'form', '📝'), W('تَوْقِيع', 'tawqiiʿ', 'signature', '✍️'),
      W('جَوَازُ السَّفَرِ', 'jawaazu s-safar', 'passport', '🛂'), W('بِطَاقَةُ الْهُوِيَّةِ', 'biṭaaqatu l-huwiyya', 'ID card', '🪪'), W('تَحْوِيل', 'taḥwiil', 'transfer', '💸'),
      W('قَرْض', 'qarḍ', 'loan', '💰'), W('فَاتُورَة', 'faatuura', 'bill, invoice', '🧾'), W('رَقْم', 'raqm', 'number', '🔢'), W('تَارِيخُ الْمِيلَادِ', 'taariikhu l-miilaad', 'date of birth', '🎂'),
    ],
  },
  {
    key: 'health', title: 'Health & the Doctor', emoji: '🩺',
    note: "Useful the moment you feel unwell: say what hurts, and understand the doctor's answer.",
    words: [
      W('مُسْتَشْفَى', 'mustashfaa', 'hospital', '🏥'), W('صَيْدَلِيَّة', 'ṣaydaliyya', 'pharmacy', '💊'), W('دَوَاء', 'dawaaʾ', 'medicine', '💊'), W('مَوْعِد', 'mawʿid', 'appointment', '📅'),
      W('أَلَم', 'alam', 'pain', '🤕'), W('حُمَّى', 'ḥummaa', 'fever', '🌡️'), W('سُعَال', 'suʿaal', 'cough', '😷'), W('صُدَاع', 'ṣudaaʿ', 'headache', '🤯'),
      W('مَرِيض', 'mariiḍ', 'ill; a patient', '🛌'), W('مُمَرِّضَة', 'mumarriḍa', 'nurse (a woman)', '👩‍⚕️'), W('وَصْفَة', 'waṣfa', 'prescription', '📃'), W('حَسَاسِيَّة', 'ḥasaasiyya', 'allergy', '🤧'),
    ],
  },
  {
    key: 'politics', title: 'Government & Politics', emoji: '🏛️',
    note: 'The words you meet in a newspaper or on the news.',
    words: [
      W('حُكُومَة', 'ḥukuuma', 'government', '🏛️'), W('رَئِيس', 'raʾiis', 'president, head', '👔'), W('مَلِك', 'malik', 'king', '👑'), W('وَزِير', 'waziir', 'minister', '🧑‍💼'),
      W('بَرْلَمَان', 'barlamaan', 'parliament', '🏛️'), W('اِنْتِخَابَات', 'intikhaabaat', 'elections', '🗳️'), W('دُسْتُور', 'dustuur', 'constitution', '📜'), W('قَانُون', 'qaanuun', 'law', '⚖️'),
      W('حِزْب', 'ḥizb', 'political party', '🎗️'), W('سِيَاسَة', 'siyaasa', 'politics', '🗣️'), W('جَامِعَةُ الدُّوَلِ الْعَرَبِيَّةِ', 'jaamiʿatu d-duwali l-ʿarabiyya', 'the Arab League', '🤝'), W('دَوْلَة', 'dawla', 'state, country', '🗺️'),
    ],
  },
  {
    key: 'economy', title: 'Economy & Development', emoji: '📈',
    note: 'How people talk about work, trade and prices.',
    words: [
      W('اِقْتِصَاد', 'iqtiṣaad', 'economy', '📈'), W('نِفْط', 'nifṭ', 'oil', '🛢️'), W('غَاز', 'ghaaz', 'gas', '🔥'), W('تَصْدِير', 'taṣdiir', 'export', '📦'),
      W('اِسْتِيرَاد', 'istiiraad', 'import', '📥'), W('سِيَاحَة', 'siyaaḥa', 'tourism', '🧳'), W('زِرَاعَة', 'ziraaʿa', 'farming', '🌾'), W('صِنَاعَة', 'ṣinaaʿa', 'industry', '🏭'),
      W('أَسْعَار', 'asʿaar', 'prices', '🏷️'), W('بَطَالَة', 'baṭaala', 'unemployment', '📉'), W('تَنْمِيَة', 'tanmiya', 'development', '🏗️'), W('ثَرْوَة', 'tharwa', 'wealth', '💎'),
    ],
  },
  {
    key: 'culture2', title: 'Faith, Clothes & Music', emoji: '🎶',
    note: 'Words for places of worship, what people wear, and the sounds of the Arab world.',
    words: [
      W('مَسْجِد', 'masjid', 'mosque', '🕌'), W('كَنِيسَة', 'kaniisa', 'church', '⛪'), W('صَلَاة', 'ṣalaah', 'prayer', '🤲'), W('صَوْم', 'ṣawm', 'fasting', '🌙'),
      W('زَكَاة', 'zakaah', 'zakat (charity)', '💰'), W('أَذَان', 'adhaan', 'the call to prayer', '📢'), W('ثَوْب', 'thawb', 'thobe (a long robe)', '👘'), W('عَبَاءَة', 'ʿabaaʾa', 'abaya (a long cloak)', '🧕'),
      W('حِجَاب', 'ḥijaab', 'headscarf', '🧕'), W('كُوفِيَّة', 'kuufiyya', 'keffiyeh (a headscarf)', '🧣'), W('عُود', 'ʿuud', 'oud (a lute)', '🪕'), W('طَبْلَة', 'ṭabla', 'drum', '🥁'),
    ],
  },
  {
    key: 'dialects', title: 'Fusha & Dialects: Different Words', emoji: '🔁',
    note: 'Arabs everywhere read and write Fusha (الْفُصْحَى), but at home each country speaks its own dialect. Egyptian is widely understood thanks to its films, and Levantine (Syria, Lebanon, Jordan, Palestine) thanks to TV dramas. Here is the same word in Fusha, Egyptian and Levantine Arabic.',
    words: [
      W('مَاذَا', 'maadhaa', 'what (Fusha)', '❓'), W('إِيه', 'eeh', 'what (Egypt)', '❓'), W('شُو', 'shuu', 'what (Levant)', '❓'),
      W('الْآن', 'al-aan', 'now (Fusha)', '⏳'), W('دِلْوَقْتِي', 'dilwaʾti', 'now (Egypt)', '⏳'), W('هَلَّقْ', 'hallaʾ', 'now (Levant)', '⏳'),
      W('أُرِيدُ', 'uriidu', 'I want (Fusha)', '🙋'), W('عَايِز', 'ʿaayiz', 'I want (Egypt, a man speaking)', '🙋'), W('بَدِّي', 'baddi', 'I want (Levant)', '🙋'),
      W('جَيِّد', 'jayyid', 'good (Fusha)', '👍'), W('كْوَيِّس', 'kwayyis', 'good (Egypt)', '👍'), W('مْنِيح', 'mniiḥ', 'good (Levant)', '👍'),
      W('كَيْفَ حَالُكَ؟', 'kayfa ḥaaluk?', 'how are you? (Fusha, to a man)', '💬'), W('إِزَّيَّكْ؟', 'izzayyak?', 'how are you? (Egypt, to a man)', '💬'),
      W('كِيفَكْ؟', 'kiifak?', 'how are you? (Levant, to a man)', '💬'), W('شْلُونَكْ؟', 'shloonak?', 'how are you? (Iraq and the Gulf, to a man)', '💬'),
    ],
  },
]

export const adultSentenceGroups = [
  {
    key: 'awork', title: 'At Work', emoji: '💼',
    sentences: [
      S('عِنْدِي اِجْتِمَاعٌ فِي السَّاعَةِ الْعَاشِرَةِ.', 'ʿindii jtimaaʿun fi s-saaʿati l-ʿaashira.', "I have a meeting at ten o'clock."),
      S('أَعْمَلُ فِي شَرِكَةٍ كَبِيرَةٍ.', 'aʿmalu fii sharikatin kabiira.', 'I work at a big company.'),
      S('أُرِيدُ إِجَازَةً يَوْمَ الْخَمِيسِ.', 'uriidu ijaazatan yawma l-khamiis.', 'I would like a day off on Thursday.'),
      S('هَلْ أَرْسَلْتَ التَّقْرِيرَ؟', 'hal arsalta t-taqriir?', 'Have you sent the report? (to a man)'),
      S('الْمُدِيرُ فِي اِجْتِمَاعٍ الْآنَ.', 'al-mudiiru fii jtimaaʿin al-aan.', 'The manager is in a meeting now.'),
      S('سَأُرْسِلُ لَكِ رِسَالَةً بَعْدَ قَلِيلٍ.', 'sa-ursilu laki risaalatan baʿda qaliil.', "I'll send you a message shortly. (to a woman)"),
      S('تَشَرَّفْتُ بِالْعَمَلِ مَعَكُمْ.', 'tasharraftu bi-l-ʿamali maʿakum.', 'It has been an honour working with you all.'),
    ],
  },
  {
    key: 'abank', title: 'Bank & Forms', emoji: '🏦',
    sentences: [
      S('أُرِيدُ أَنْ أَفْتَحَ حِسَابًا.', 'uriidu an aftaḥa ḥisaaban.', 'I would like to open an account.'),
      S('اِمْلَأْ هٰذِهِ الِاسْتِمَارَةَ، مِنْ فَضْلِكَ.', 'imlaʾ haadhihi l-istimaara, min faḍlik.', 'Please fill in this form. (to a man)'),
      S('وَقِّعِي هُنَا، مِنْ فَضْلِكِ.', 'waqqiʿii hunaa, min faḍliki.', 'Sign here, please. (to a woman)'),
      S('هَلْ مَعَكَ جَوَازُ السَّفَرِ؟', 'hal maʿaka jawaazu s-safar?', 'Do you have your passport with you? (to a man)'),
      S('أُرِيدُ أَنْ أُحَوِّلَ نُقُودًا إِلَى أَهْلِي.', 'uriidu an uḥawwila nuquudan ilaa ahlii.', 'I want to send money to my family.'),
      S('مَا رَقْمُ الْحِسَابِ؟', 'maa raqmu l-ḥisaab?', 'What is the account number?'),
    ],
  },
  {
    key: 'ahealth', title: 'At the Doctor', emoji: '🩺',
    sentences: [
      S('عِنْدِي مَوْعِدٌ مَعَ الطَّبِيبِ.', 'ʿindii mawʿidun maʿa ṭ-ṭabiib.', 'I have an appointment with the doctor.'),
      S('رَأْسِي يُؤْلِمُنِي مُنْذُ أَمْسِ.', 'raʾsii yuʾlimunii mundhu ams.', 'My head has hurt since yesterday.'),
      S('عِنْدِي حُمَّى وَسُعَالٌ.', 'ʿindii ḥummaa wa-suʿaal.', 'I have a fever and a cough.'),
      S('خُذْ هٰذَا الدَّوَاءَ ثَلَاثَ مَرَّاتٍ فِي الْيَوْمِ.', 'khudh haadha d-dawaaʾa thalaatha marraatin fi l-yawm.', 'Take this medicine three times a day. (to a man)'),
      S('أَيْنَ أَقْرَبُ صَيْدَلِيَّةٍ؟', 'ayna aqrabu ṣaydaliyya?', 'Where is the nearest pharmacy?'),
      S('عِنْدِي حَسَاسِيَّةٌ مِنَ الْبِنِسِلِينِ.', 'ʿindii ḥasaasiyyatun mina l-binisiliin.', 'I am allergic to penicillin.'),
    ],
  },
  {
    key: 'anews', title: 'News & Opinions', emoji: '📰',
    sentences: [
      S('أَجْرَتِ الْبِلَادُ اِنْتِخَابَاتٍ بَرْلَمَانِيَّةً.', 'ajrati l-bilaadu ntikhaabaatin barlamaaniyya.', 'The country held parliamentary elections.'),
      S('اِرْتَفَعَتِ الْأَسْعَارُ هٰذَا الشَّهْرَ.', 'irtafaʿati l-asʿaaru haadha sh-shahr.', 'Prices rose this month.'),
      S('اِجْتَمَعَ وُزَرَاءُ الْخَارِجِيَّةِ الْعَرَبُ فِي الْقَاهِرَةِ.', 'ijtamaʿa wuzaraaʾu l-khaarijiyyati l-ʿarabu fi l-qaahira.', 'Arab foreign ministers met in Cairo.'),
      S('تَحْتَاجُ الْبِلَادُ إِلَى وَظَائِفَ لِلشَّبَابِ.', 'taḥtaaju l-bilaadu ilaa waẓaaʾifa li-sh-shabaab.', 'The country needs jobs for young people.'),
      S('فِي رَأْيِي، التَّعْلِيمُ أَهَمُّ شَيْءٍ.', 'fii raʾyii, at-taʿliimu ahammu shayʾ.', 'In my opinion, education is the most important thing.'),
      S('يَخْتَلِفُ النَّاسُ فِي هٰذِهِ الْقَضِيَّةِ.', 'yakhtalifu n-naasu fii haadhihi l-qaḍiyya.', 'People disagree about this issue.'),
    ],
  },
]

export const adultPassages = [
  {
    key: 'islam', title: 'The Rise of Islam and the Spread of Arabic', emoji: '🕋',
    lead: 'By Muslim tradition, in 610 the Prophet Muhammad received the first revelation of the Quran in a cave near Makkah. In 622 he and his followers moved to Madinah — the Hijra, which begins the Islamic calendar. Within a century of his death in 632, Muslim rule stretched from Spain to Central Asia, and Arabic, the language of the Quran, became the language of government, faith and learning across that world.',
    lines: [
      L('نَزَلَ الْقُرْآنُ بِاللُّغَةِ الْعَرَبِيَّةِ.', 'nazala l-qurʾaanu bi-l-lughati l-ʿarabiyya.', 'The Quran was revealed in Arabic.'),
      L('هَاجَرَ النَّبِيُّ مُحَمَّدٌ مِنْ مَكَّةَ إِلَى الْمَدِينَةِ سَنَةَ ٦٢٢.', 'haajara n-nabiyyu muḥammadun min makkata ila l-madiinati sanata sittimiʾa wa-thnayn wa-ʿishriin.', 'The Prophet Muhammad migrated from Makkah to Madinah in 622.'),
      L('تَبْدَأُ السَّنَةُ الْهِجْرِيَّةُ مِنَ الْهِجْرَةِ.', 'tabdaʾu s-sanatu l-hijriyyatu mina l-hijra.', 'The Hijri year starts from the Hijra.'),
      L('اِنْتَشَرَ الْإِسْلَامُ مِنْ إِسْبَانِيَا إِلَى آسِيَا الْوُسْطَى.', 'intashara l-islaamu min isbaanyaa ilaa aasyaa l-wusṭaa.', 'Islam spread from Spain to Central Asia.'),
      L('صَارَتِ الْعَرَبِيَّةُ لُغَةَ الدِّينِ وَالْعِلْمِ.', 'ṣaarati l-ʿarabiyyatu lughata d-diini wa-l-ʿilm.', 'Arabic became the language of religion and learning.'),
      L('تَعَلَّمَ النَّاسُ الْعَرَبِيَّةَ لِيَقْرَؤُوا الْقُرْآنَ.', 'taʿallama n-naasu l-ʿarabiyyata li-yaqraʾu l-qurʾaan.', 'People learnt Arabic so they could read the Quran.'),
    ],
    questions: [
      { q: 'Where did the Prophet migrate to in 622?', options: ['Madinah', 'Damascus', 'Cairo'], answer: 0 },
      { q: 'What starts from the Hijra?', options: ['The Hijri (Islamic) year', 'The week', 'The school year'], answer: 0 },
      { q: 'Why did many people learn Arabic?', options: ['To read the Quran', 'For trade with China', 'For football'], answer: 0 },
    ],
  },
  {
    key: 'golden', title: "Baghdad's Golden Age", emoji: '📚',
    lead: "Under the Abbasid caliphs, especially in the 800s, Baghdad became one of the world's great centres of learning. Scholars at the House of Wisdom and elsewhere translated Greek, Persian and Indian works into Arabic and went further: al-Khwarizmi wrote the book that gave us the word \"algebra\" (and, through his own name, \"algorithm\"), and paper, brought from China, made books cheap. Much of this knowledge later reached Europe through Arabic.",
    lines: [
      L('كَانَتْ بَغْدَادُ عَاصِمَةَ الْعَبَّاسِيِّينَ.', 'kaanat baghdaadu ʿaaṣimata l-ʿabbaasiyyiin.', 'Baghdad was the capital of the Abbasids.'),
      L('تَرْجَمَ الْعُلَمَاءُ كُتُبًا كَثِيرَةً إِلَى الْعَرَبِيَّةِ.', 'tarjama l-ʿulamaaʾu kutuban kathiiratan ila l-ʿarabiyya.', 'Scholars translated many books into Arabic.'),
      L('كَتَبَ الْخَوَارِزْمِيُّ كِتَابًا عَنِ الْجَبْرِ.', 'kataba l-khawaarizmiyyu kitaaban ʿani l-jabr.', 'Al-Khwarizmi wrote a book about algebra.'),
      L('كَلِمَةُ "الْجَبْرِ" عَرَبِيَّةٌ.', 'kalimatu "al-jabr" ʿarabiyya.', 'The word "algebra" is Arabic.'),
      L('جَعَلَ الْوَرَقُ الْكُتُبَ رَخِيصَةً.', 'jaʿala l-waraqu l-kutuba rakhiiṣa.', 'Paper made books cheap.'),
      L('وَصَلَ هٰذَا الْعِلْمُ إِلَى أُورُوبَّا بَعْدَ ذٰلِكَ.', 'waṣala haadha l-ʿilmu ilaa uuruubbaa baʿda dhaalik.', 'This knowledge later reached Europe.'),
    ],
    questions: [
      { q: 'Who wrote a book about algebra?', options: ['al-Khwarizmi', 'al-Mutanabbi', 'Saladin'], answer: 0 },
      { q: 'What made books cheap?', options: ['Paper', 'The printing press', 'Computers'], answer: 0 },
      { q: 'Which English word comes from Arabic?', options: ['Algebra', 'Football', 'Window'], answer: 0 },
    ],
  },
  {
    key: 'andalus', title: 'Al-Andalus, 711–1492', emoji: '🏰',
    lead: 'In 711 Muslim armies crossed from North Africa into Spain. For nearly eight centuries much of the Iberian peninsula, called al-Andalus, was under Muslim rule. Cordoba in the 900s was one of the largest cities in Europe, with its Great Mosque and libraries, and Muslims, Christians and Jews often lived and worked side by side. The last Muslim kingdom, Granada, with its Alhambra palace, fell in 1492.',
    lines: [
      L('دَخَلَ الْمُسْلِمُونَ الْأَنْدَلُسَ سَنَةَ ٧١١.', 'dakhala l-muslimuuna l-andalusa sanata sabʿimiʾa wa-aḥada ʿashar.', 'Muslims entered al-Andalus in 711.'),
      L('كَانَتْ قُرْطُبَةُ مَدِينَةً كَبِيرَةً وَجَمِيلَةً.', 'kaanat qurṭubatu madiinatan kabiiratan wa-jamiila.', 'Cordoba was a big and beautiful city.'),
      L('فِي قُرْطُبَةَ مَسْجِدٌ كَبِيرٌ وَمَشْهُورٌ.', 'fii qurṭubata masjidun kabiirun wa-mashhuur.', 'Cordoba has a large and famous mosque.'),
      L('عَاشَ الْمُسْلِمُونَ وَالْمَسِيحِيُّونَ وَالْيَهُودُ مَعًا.', 'ʿaasha l-muslimuuna wa-l-masiiḥiyyuuna wa-l-yahuudu maʿan.', 'Muslims, Christians and Jews lived together.'),
      L('قَصْرُ الْحَمْرَاءِ فِي غَرْنَاطَةَ.', 'qaṣru l-ḥamraaʾi fii gharnaaṭa.', 'The Alhambra palace is in Granada.'),
      L('سَقَطَتْ غَرْنَاطَةُ سَنَةَ ١٤٩٢.', 'saqaṭat gharnaaṭatu sanata alf wa-arbaʿimiʾa wa-thnayn wa-tisʿiin.', 'Granada fell in 1492.'),
    ],
    questions: [
      { q: 'When did Muslims enter al-Andalus?', options: ['711', '1492', '1918'], answer: 0 },
      { q: 'Where is the Alhambra?', options: ['Granada', 'Cairo', 'Baghdad'], answer: 0 },
      { q: 'Who lived together in al-Andalus?', options: ['Muslims, Christians and Jews', 'Only soldiers', 'Nobody'], answer: 0 },
    ],
  },
  {
    key: 'ottoman', title: 'From the Ottomans to Independence', emoji: '🗺️',
    lead: "From the 1500s most of the Arab world was part of the Ottoman Empire, ruled from Istanbul. After the empire's defeat in the First World War, Britain and France took control of much of the region under \"mandates\", and European powers had already colonised most of North Africa. Between the 1920s and the 1970s Arab countries won their independence one by one — Egypt in 1922, Iraq in 1932, Lebanon in 1943, Syria and Jordan in 1946, Libya in 1951, Morocco and Tunisia in 1956, Algeria in 1962 after a long war, and the Gulf states by 1971. The Arab League was founded in Cairo in 1945.",
    lines: [
      L('حَكَمَ الْعُثْمَانِيُّونَ أَكْثَرَ الْبِلَادِ الْعَرَبِيَّةِ قُرُونًا.', 'ḥakama l-ʿuthmaaniyyuuna akthara l-bilaadi l-ʿarabiyyati quruunan.', 'The Ottomans ruled most Arab lands for centuries.'),
      L('بَعْدَ الْحَرْبِ الْعَالَمِيَّةِ الْأُولَى جَاءَتْ بِرِيطَانِيَا وَفَرَنْسَا.', 'baʿda l-ḥarbi l-ʿaalamiyyati l-uulaa jaaʾat biriiṭaanyaa wa-faransaa.', 'After the First World War, Britain and France came.'),
      L('اِسْتَقَلَّتْ مِصْرُ سَنَةَ ١٩٢٢.', 'istaqallat miṣru sanata alf wa-tisʿimiʾa wa-thnayn wa-ʿishriin.', 'Egypt became independent in 1922.'),
      L('تَأَسَّسَتْ جَامِعَةُ الدُّوَلِ الْعَرَبِيَّةِ سَنَةَ ١٩٤٥.', 'taʾassasat jaamiʿatu d-duwali l-ʿarabiyyati sanata alf wa-tisʿimiʾa wa-khamsin wa-arbaʿiin.', 'The Arab League was founded in 1945.'),
      L('اِسْتَقَلَّتِ الْجَزَائِرُ سَنَةَ ١٩٦٢ بَعْدَ حَرْبٍ طَوِيلَةٍ.', 'istaqallati l-jazaaʾiru sanata alf wa-tisʿimiʾa wa-thnayn wa-sittiin baʿda ḥarbin ṭawiila.', 'Algeria became independent in 1962 after a long war.'),
      L('فِي الْجَامِعَةِ الْعَرَبِيَّةِ الْيَوْمَ اِثْنَتَانِ وَعِشْرُونَ دَوْلَةً.', 'fi l-jaamiʿati l-ʿarabiyyati l-yawma thnataani wa-ʿishruuna dawla.', 'Today the Arab League has twenty-two member states.'),
    ],
    questions: [
      { q: 'Who ruled most Arab lands for centuries?', options: ['The Ottomans', 'The Romans', 'The Mongols'], answer: 0 },
      { q: 'When was the Arab League founded?', options: ['1945', '1492', '2011'], answer: 0 },
      { q: 'How many states are in the Arab League?', options: ['Twenty-two', 'Five', 'Fifty'], answer: 0 },
    ],
  },
  {
    key: 'nahda', title: 'The Nahda: A Modern Arabic', emoji: '📰',
    lead: 'In the 1800s a cultural revival called the Nahda ("awakening") swept through Cairo, Beirut and Damascus. Printing presses, newspapers and translations spread, and writers modernised the language for science, politics and the novel, creating the Modern Standard Arabic used in newspapers and on the news today. In 1988 the Egyptian novelist Naguib Mahfouz became the first writer in Arabic to win the Nobel Prize for Literature.',
    lines: [
      L('النَّهْضَةُ تَعْنِي الِاسْتِيقَاظَ.', 'an-nahḍatu taʿni l-istiiqaaẓ.', 'Nahda means awakening.'),
      L('فِي الْقَرْنِ التَّاسِعَ عَشَرَ اِنْتَشَرَتِ الصُّحُفُ وَالْمَطَابِعُ.', 'fi l-qarni t-taasiʿa ʿashara ntasharati ṣ-ṣuḥufu wa-l-maṭaabiʿ.', 'In the nineteenth century newspapers and printing presses spread.'),
      L('كَتَبَ الْأُدَبَاءُ رِوَايَاتٍ وَمَقَالَاتٍ جَدِيدَةً.', 'kataba l-udabaaʾu riwaayaatin wa-maqaalaatin jadiida.', 'Writers wrote new novels and articles.'),
      L('الْفُصْحَى الْحَدِيثَةُ لُغَةُ الصُّحُفِ وَالْأَخْبَارِ.', 'al-fuṣḥaa l-ḥadiithatu lughatu ṣ-ṣuḥufi wa-l-akhbaar.', 'Modern Standard Arabic is the language of newspapers and the news.'),
      L('فَازَ نَجِيب مَحْفُوظ بِجَائِزَةِ نُوبِل سَنَةَ ١٩٨٨.', 'faaza najiib maḥfuuẓ bi-jaaʾizati nuubil sanata alf wa-tisʿimiʾa wa-thamaaniya wa-thamaaniin.', 'Naguib Mahfouz won the Nobel Prize in 1988.'),
      L('كَتَبَ مَحْفُوظ عَنْ حَيَاةِ النَّاسِ فِي الْقَاهِرَةِ.', 'kataba maḥfuuẓ ʿan ḥayaati n-naasi fi l-qaahira.', 'Mahfouz wrote about the lives of people in Cairo.'),
    ],
    questions: [
      { q: 'What does Nahda mean?', options: ['Awakening', 'River', 'Poem'], answer: 0 },
      { q: 'What spread in the 1800s?', options: ['Newspapers and printing presses', 'Television', 'The internet'], answer: 0 },
      { q: 'Who won the Nobel Prize in 1988?', options: ['Naguib Mahfouz', 'Ahmad Shawqi', 'al-Mutanabbi'], answer: 0 },
    ],
  },
  {
    key: 'arabspring', title: 'The Arab Spring, 2011', emoji: '✊',
    lead: 'In December 2010 a young Tunisian street seller, Mohamed Bouazizi, set himself on fire in protest after officials took his goods. Protests spread across Tunisia, and its president fled in January 2011. Within weeks huge demonstrations swept Egypt, Libya, Yemen, Syria, Bahrain and elsewhere, demanding jobs, dignity and an end to corruption. The results were very different: Tunisia moved to elections, Egypt\'s president fell, and Libya, Syria and Yemen descended into long wars. People still argue about what the Arab Spring achieved.',
    lines: [
      L('بَدَأَ الرَّبِيعُ الْعَرَبِيُّ فِي تُونِسَ.', 'badaʾa r-rabiiʿu l-ʿarabiyyu fii tuunis.', 'The Arab Spring began in Tunisia.'),
      L('خَرَجَ النَّاسُ إِلَى الشَّوَارِعِ.', 'kharaja n-naasu ila sh-shawaariʿ.', 'People went out into the streets.'),
      L('طَلَبُوا الْعَمَلَ وَالْكَرَامَةَ وَالْحُرِّيَّةَ.', 'ṭalabu l-ʿamala wa-l-karaamata wa-l-ḥurriyya.', 'They asked for work, dignity and freedom.'),
      L('اِنْتَشَرَتِ الْمُظَاهَرَاتُ إِلَى مِصْرَ وَبُلْدَانٍ أُخْرَى.', 'intasharati l-muẓaaharaatu ilaa miṣra wa-buldaanin ukhraa.', 'Demonstrations spread to Egypt and other countries.'),
      L('كَانَتِ النَّتَائِجُ مُخْتَلِفَةً فِي كُلِّ بَلَدٍ.', 'kaanati n-nataaʾiju mukhtalifatan fii kulli balad.', 'The results were different in each country.'),
      L('مَا زَالَ النَّاسُ يَتَنَاقَشُونَ فِي الرَّبِيعِ الْعَرَبِيِّ.', 'maa zaala n-naasu yatanaaqashuuna fi r-rabiiʿi l-ʿarabiyy.', 'People still debate the Arab Spring.'),
    ],
    questions: [
      { q: 'Where did the Arab Spring begin?', options: ['Tunisia', 'Oman', 'Morocco'], answer: 0 },
      { q: 'What did people ask for?', options: ['Work, dignity and freedom', 'Football', 'More holidays'], answer: 0 },
      { q: 'Were the results the same everywhere?', options: ['Yes', 'No, they were different in each country', 'There were none'], answer: 1 },
    ],
  },
  {
    key: 'oil', title: 'Oil and the Arab Economy', emoji: '🛢️',
    lead: 'Oil was found around the Gulf from the 1930s, and when oil prices rose sharply in the 1970s, enormous wealth flowed to Saudi Arabia, Kuwait, the UAE, Qatar, Iraq, Libya and Algeria. Oil paid for roads, schools, hospitals and new cities, and drew millions of workers from Egypt, South Asia and beyond. But it also made economies depend on one product whose price rises and falls. Many oil states are now trying to diversify — into tourism, finance, technology and renewable energy — while countries without much oil, like Egypt, Jordan and Morocco, rely more on farming, industry, tourism and money sent home by workers abroad.',
    lines: [
      L('وُجِدَ النِّفْطُ فِي الْخَلِيجِ فِي الثَّلَاثِينِيَّاتِ.', 'wujida n-nifṭu fi l-khaliiji fi th-thalaathiiniyyaat.', 'Oil was found in the Gulf in the 1930s.'),
      L('جَلَبَ النِّفْطُ ثَرْوَةً كَبِيرَةً.', 'jalaba n-nifṭu tharwatan kabiira.', 'Oil brought great wealth.'),
      L('بُنِيَتْ مُدُنٌ وَمَدَارِسُ وَمُسْتَشْفَيَاتٌ.', 'buniyat mudunun wa-madaarisu wa-mustashfayaat.', 'Cities, schools and hospitals were built.'),
      L('جَاءَ عُمَّالٌ كَثِيرُونَ مِنْ بِلَادٍ أُخْرَى.', 'jaaʾa ʿummaalun kathiiruuna min bilaadin ukhraa.', 'Many workers came from other countries.'),
      L('يَتَغَيَّرُ سِعْرُ النِّفْطِ كَثِيرًا.', 'yataghayyaru siʿru n-nifṭi kathiiran.', 'The price of oil changes a lot.'),
      L('تُرِيدُ الدُّوَلُ اقْتِصَادًا لَا يَعْتَمِدُ عَلَى النِّفْطِ فَقَطْ.', 'turiidu d-duwalu qtiṣaadan laa yaʿtamidu ʿala n-nifṭi faqaṭ.', 'Countries want an economy that does not depend on oil alone.'),
    ],
    questions: [
      { q: 'When was oil found in the Gulf?', options: ['In the 1930s', 'In 1492', 'In 2020'], answer: 0 },
      { q: 'What did oil pay for?', options: ['Cities, schools and hospitals', 'Nothing', 'Only palaces'], answer: 0 },
      { q: 'What do oil states want now?', options: ['An economy not based on oil alone', 'More oil and nothing else', 'No economy'], answer: 0 },
    ],
  },
  {
    key: 'faith', title: 'Faith in the Arab World', emoji: '🕌',
    lead: 'Most Arabs are Muslims — mostly Sunni, though most people in Iraq and Bahrain are Shia, as are many Lebanese — and Islam shapes daily life, from the call to prayer five times a day to the fast of Ramadan and the two Eids. The Arab world is also home to some of the oldest Christian communities on earth, such as the Copts of Egypt and the many churches of Lebanon, Syria, Iraq, Jordan and Palestine, who also pray in Arabic. With Makkah, Madinah and Jerusalem, the region is central to the faith of billions.',
    lines: [
      L('أَكْثَرُ الْعَرَبِ مُسْلِمُونَ.', 'aktharu l-ʿarabi muslimuun.', 'Most Arabs are Muslims.'),
      L('يُصَلِّي الْمُسْلِمُونَ خَمْسَ مَرَّاتٍ فِي الْيَوْمِ.', 'yuṣalli l-muslimuuna khamsa marraatin fi l-yawm.', 'Muslims pray five times a day.'),
      L('يَسْمَعُ النَّاسُ الْأَذَانَ مِنَ الْمَسَاجِدِ.', 'yasmaʿu n-naasu l-adhaana mina l-masaajid.', 'People hear the call to prayer from the mosques.'),
      L('فِي مِصْرَ وَلُبْنَانَ وَسُورِيَا مَسِيحِيُّونَ عَرَبٌ.', 'fii miṣra wa-lubnaana wa-suuryaa masiiḥiyyuuna ʿarab.', 'There are Arab Christians in Egypt, Lebanon and Syria.'),
      L('يُصَلِّي الْمَسِيحِيُّونَ الْعَرَبُ بِالْعَرَبِيَّةِ أَيْضًا.', 'yuṣalli l-masiiḥiyyuuna l-ʿarabu bi-l-ʿarabiyyati ayḍan.', 'Arab Christians pray in Arabic too.'),
      L('مَكَّةُ وَالْمَدِينَةُ وَالْقُدْسُ مُدُنٌ مُقَدَّسَةٌ.', 'makkatu wa-l-madiinatu wa-l-qudsu mudunun muqaddasa.', 'Makkah, Madinah and Jerusalem are holy cities.'),
    ],
    questions: [
      { q: 'How many times a day do Muslims pray?', options: ['Five', 'Two', 'Ten'], answer: 0 },
      { q: 'In which language do Arab Christians pray?', options: ['In Arabic too', 'Only in English', 'Only in Latin'], answer: 0 },
      { q: 'Which are holy cities?', options: ['Makkah, Madinah and Jerusalem', 'Paris and London', 'Dubai and Doha'], answer: 0 },
    ],
  },
  {
    key: 'artsculture', title: 'Music, Poets & Cinema', emoji: '🎶',
    lead: "Arabic culture prizes the word above all: poetry was the great art of the Arabs long before Islam, and people still quote al-Mutanabbi in conversation. In the 20th century Cairo became the capital of Arab film and music. Umm Kulthum's monthly concerts emptied the streets, Fairuz's songs from Lebanon are played on radios across the Arab world every morning, and Egyptian films and Syrian TV dramas are watched everywhere, especially in Ramadan. Modern poets such as Nizar Qabbani and Mahmoud Darwish are deeply loved (their poems are still in copyright, so they are not quoted here).",
    lines: [
      L('الشِّعْرُ فَنُّ الْعَرَبِ الْأَوَّلُ.', 'ash-shiʿru fannu l-ʿarabi l-awwal.', 'Poetry is the first art of the Arabs.'),
      L('كَانَتِ الْقَاهِرَةُ عَاصِمَةَ السِّينَمَا الْعَرَبِيَّةِ.', 'kaanati l-qaahiratu ʿaaṣimata s-siinamaa l-ʿarabiyya.', 'Cairo was the capital of Arab cinema.'),
      L('غَنَّتْ أُمُّ كُلْثُومٍ فِي حَفَلَاتٍ طَوِيلَةٍ.', 'ghannat ummu kulthuumin fii ḥafalaatin ṭawiila.', 'Umm Kulthum sang in long concerts.'),
      L('يَسْمَعُ النَّاسُ فَيْرُوزَ فِي الصَّبَاحِ.', 'yasmaʿu n-naasu fayruuza fi ṣ-ṣabaaḥ.', 'People listen to Fairuz in the morning.'),
      L('الْمُسَلْسَلَاتُ الْعَرَبِيَّةُ مَشْهُورَةٌ فِي رَمَضَانَ.', 'al-musalsalaatu l-ʿarabiyyatu mashhuuratun fii ramaḍaan.', 'Arab TV series are popular in Ramadan.'),
      L('مَا زَالَ النَّاسُ يَحْفَظُونَ الشِّعْرَ.', 'maa zaala n-naasu yaḥfaẓuuna sh-shiʿr.', 'People still learn poetry by heart.'),
    ],
    questions: [
      { q: 'What is the first art of the Arabs?', options: ['Poetry', 'Football', 'Painting'], answer: 0 },
      { q: 'Whose songs are played in the morning?', options: ['Fairuz', 'Naguib Mahfouz', 'al-Khwarizmi'], answer: 0 },
      { q: 'When are Arab TV series especially popular?', options: ['In Ramadan', 'In winter', 'Never'], answer: 0 },
    ],
  },
  {
    key: 'diaspora', title: 'Arabic Around the World', emoji: '🌍',
    lead: 'Arabic is spoken by over 400 million people and is one of the six official languages of the United Nations. Millions of Arabs live outside the Arab world: in France (many with roots in Algeria, Morocco and Tunisia), Germany, Britain, Spain, the Americas — Brazil has one of the largest communities of Lebanese and Syrian descent — and West Africa. Muslims everywhere learn some Arabic for prayer and the Quran, and Arabic has given English words like coffee, sugar, cotton, algebra and zero. Many children of the diaspora understand Arabic at home and learn to read and write it later — just as you are doing.',
    lines: [
      L('الْعَرَبِيَّةُ إِحْدَى اللُّغَاتِ السِّتِّ فِي الْأُمَمِ الْمُتَّحِدَةِ.', 'al-ʿarabiyyatu iḥda l-lughaati s-sitti fi l-umami l-muttaḥida.', 'Arabic is one of the six languages of the United Nations.'),
      L('يَعِيشُ عَرَبٌ كَثِيرُونَ فِي أُورُوبَّا وَأَمْرِيكَا.', 'yaʿiishu ʿarabun kathiiruuna fii uuruubbaa wa-amriikaa.', 'Many Arabs live in Europe and America.'),
      L('فِي الْبَرَازِيلِ نَاسٌ أُصُولُهُمْ مِنْ لُبْنَانَ وَسُورِيَا.', 'fi l-baraaziili naasun uṣuuluhum min lubnaana wa-suuryaa.', 'In Brazil there are people whose roots are in Lebanon and Syria.'),
      L('يَتَعَلَّمُ الْمُسْلِمُونَ فِي كُلِّ الْعَالَمِ شَيْئًا مِنَ الْعَرَبِيَّةِ.', 'yataʿallamu l-muslimuuna fii kulli l-ʿaalami shayʾan mina l-ʿarabiyya.', 'Muslims all over the world learn some Arabic.'),
      L('كَلِمَاتٌ إِنْجِلِيزِيَّةٌ كَثِيرَةٌ أَصْلُهَا عَرَبِيٌّ، مِثْلُ "سُكَّر".', 'kalimaatun injiliiziyyatun kathiiratun aṣluhaa ʿarabiyy, mithlu "sukkar".', 'Many English words come from Arabic, like "sugar" (سُكَّر).'),
      L('أَنَا أَتَعَلَّمُ الْعَرَبِيَّةَ الْآنَ!', 'ana ataʿallamu l-ʿarabiyyata l-aan!', 'I am learning Arabic now!'),
    ],
    questions: [
      { q: 'How many official UN languages are there?', options: ['Six', 'Two', 'Twenty'], answer: 0 },
      { q: 'Which country has many people of Lebanese and Syrian descent?', options: ['Brazil', 'Japan', 'Iceland'], answer: 0 },
      { q: 'Which English word comes from Arabic?', options: ['Sugar', 'House', 'Tree'], answer: 0 },
    ],
  },
]
