// Branching story chats. Modern Standard Arabic, fully vowelled. (The 13+ stories come with those tracks.)
//
// A story is a graph of nodes, played as a text-message conversation:
//   say(...)     an NPC message         ask(...)   the learner picks a reply (each option can move the meter)
//   sys(...)     English narration      branch(...) jumps to an ending by meter score
//   end(...)     an ending card
// The learner may be a boy or a girl, and Arabic says "you" differently to each. A line spoken to the learner is
// written for a boy (أَنْتَ، -كَ، تَفَضَّلْ), with the girl's version as the last argument: [bn, roman]. The player asks
// once who is playing and shows the right one. The learner's own replies avoid words that describe themselves
// (جَائِع / جَائِعَة) or carry a girl's version too. Characters are spoken to with the "you" for their own gender.
// `place.older` is the 8–12 unit the story is inserted into (see curriculum/tracks.js).
const fem = (f) => (f ? { f: { bn: f[0], roman: f[1] } } : {})
const sys = (en, next) => ({ sys: en, next })
const say = (who, bn, roman, en, next, f) => ({ who, bn, roman, en, next, ...fem(f) })
const o = (bn, roman, en, meter, next, f) => ({ bn, roman, en, meter, next, ...fem(f) })
const ask = (...options) => ({ choice: options })
const branch = (...rules) => ({ branch: rules })
const end = (title, emoji, en, tier) => ({ end: { title, emoji, en, tier } })

export const stories = [
  // ============================================ 8–12 ============================================
  {
    id: 'sweets', tracks: ['older'], place: { older: 'o-numbers' }, title: 'At the Sweet Shop', emoji: '🍬',
    blurb: 'Dad gave you money for sweets. Ask politely and count your pounds!',
    meter: { label: 'Manners', emoji: '😊', start: 50 },
    cast: { seller: { bn: 'الْبَائِع', en: 'Shopkeeper', emoji: '🧑‍🍳' } },
    start: 's0',
    keys: ['n1', 'r1a', 'n3', 'r3a'],
    nodes: {
      s0: sys('Dad gave you 100 pounds to buy sweets for the family. You walk into the sweet shop.', 'n1'),
      n1: say('seller', 'أَهْلًا وَسَهْلًا! مَاذَا تُرِيدُ؟', 'ahlan wa-sahlan! maadhaa turiid?', 'Welcome! What would you like?', 'c1',
        ['أَهْلًا وَسَهْلًا! مَاذَا تُرِيدِينَ؟', 'ahlan wa-sahlan! maadhaa turiidiin?']),
      c1: ask(
        o('أُرِيدُ قِطْعَتَيْنِ مِنَ الْبَقْلَاوَةِ، مِنْ فَضْلِكَ.', 'uriidu qiṭʿatayni mina l-baqlaawa, min faḍlik.', 'Two pieces of baklava, please.', 20, 'r1a'),
        o('لَوْ سَمَحْتَ، قِطْعَةَ كُنَافَةٍ وَاحِدَةً.', 'law samaḥta, qiṭʿata kunaafatin waaḥida.', 'Excuse me, one piece of kunafa, please.', 15, 'r1b'),
        o('أَعْطِنِي حَلْوَى!', 'aʿṭinii ḥalwaa!', 'Give me sweets!', -10, 'r1c'),
      ),
      r1a: say('seller', 'تَفَضَّلْ.', 'tafaḍḍal.', 'Here you are.', 'n2', ['تَفَضَّلِي.', 'tafaḍḍalii.']),
      r1b: say('seller', 'بِكُلِّ سُرُورٍ! الْكُنَافَةُ لَذِيذَةٌ الْيَوْمَ.', 'bi-kulli suruur! al-kunaafatu ladhiidhatun al-yawm.', 'With pleasure! The kunafa is delicious today.', 'n2'),
      r1c: say('seller', 'قُلْ "مِنْ فَضْلِكَ" يَا صَغِيرِي.', 'qul "min faḍlik" yaa ṣaghiirii.', 'Say "please", little one.', 'n2',
        ['قُولِي "مِنْ فَضْلِكَ" يَا صَغِيرَتِي.', 'quulii "min faḍlik" yaa ṣaghiiratii.']),
      n2: say('seller', 'هَلْ تُرِيدُ شَيْئًا آخَرَ؟', 'hal turiidu shayʾan aakhar?', 'Would you like anything else?', 'c2',
        ['هَلْ تُرِيدِينَ شَيْئًا آخَرَ؟', 'hal turiidiina shayʾan aakhar?']),
      c2: ask(
        o('لَا، شُكْرًا.', 'laa, shukran.', 'No, thank you.', 10, 'r2a'),
        o('نَعَمْ، وَأَرْبَعَ قِطَعٍ مِنَ الْمَعْمُولِ أَيْضًا.', 'naʿam, wa-arbaʿa qiṭaʿin mina l-maʿmuul ayḍan.', 'Yes, and four maamoul biscuits too.', 10, 'r2b'),
        o('لَا!', 'laa!', 'No!', -5, 'r2c'),
      ),
      r2a: say('seller', 'حَسَنًا.', 'ḥasanan.', 'All right.', 'n3'),
      r2b: say('seller', 'مُمْتَازٌ! تَفَضَّلْ.', 'mumtaaz! tafaḍḍal.', 'Excellent! Here you are.', 'n3', ['مُمْتَازٌ! تَفَضَّلِي.', 'mumtaaz! tafaḍḍalii.']),
      r2c: say('seller', 'حَسَنًا…', 'ḥasanan…', 'All right…', 'n3'),
      n3: say('seller', 'الْمَجْمُوعُ مِئَةُ جُنَيْهٍ.', 'al-majmuuʿu miʾatu junayh.', 'That comes to one hundred pounds.', 'c3'),
      c3: ask(
        o('تَفَضَّلْ، مِئَةُ جُنَيْهٍ.', 'tafaḍḍal, miʾatu junayh.', 'Here you are, one hundred pounds.', 20, 'r3a'),
        o('تَفَضَّلْ، خَمْسُونَ جُنَيْهًا.', 'tafaḍḍal, khamsuuna junayhan.', 'Here you are, fifty pounds.', -10, 'r3b'),
        o('هٰذَا غَالٍ جِدًّا!', 'haadhaa ghaalin jiddan!', "That's too expensive!", -5, 'r3c'),
      ),
      r3a: say('seller', 'شُكْرًا! مَعَ السَّلَامَةِ.', 'shukran! maʿa s-salaama.', 'Thank you! Goodbye.', 'b1'),
      r3b: say('seller', 'لَا يَا صَغِيرِي، مِئَةُ جُنَيْهٍ.', 'laa yaa ṣaghiirii, miʾatu junayh.', 'No, little one, one hundred pounds.', 'b1',
        ['لَا يَا صَغِيرَتِي، مِئَةُ جُنَيْهٍ.', 'laa yaa ṣaghiiratii, miʾatu junayh.']),
      r3c: say('seller', 'هٰذَا سِعْرٌ عَادِلٌ يَا صَغِيرِي.', 'haadhaa siʿrun ʿaadilun yaa ṣaghiirii.', 'This is a fair price, little one.', 'b1',
        ['هٰذَا سِعْرٌ عَادِلٌ يَا صَغِيرَتِي.', 'haadhaa siʿrun ʿaadilun yaa ṣaghiiratii.']),
      b1: branch({ min: 85, next: 'eA' }, { min: 60, next: 'eB' }, { next: 'eC' }),
      eA: end('Sweet success!', '🍬', 'You asked nicely, counted your money and went home with the sweets. Dad will be so pleased!', 'great'),
      eB: end('Sweets in the bag', '🙂', 'You got the sweets. Remember to say مِنْ فَضْلِكَ and to count your money carefully.', 'ok'),
      eC: end('A sour start', '🍋', 'It was a bit tricky. Try again: ask with مِنْ فَضْلِكَ and say شُكْرًا.', 'rough'),
    },
  },

  {
    id: 'newfriend', tracks: ['older'], place: { older: 'o-hello' }, title: 'A New Friend at the Park', emoji: '🛝',
    blurb: 'A girl on the swing says salaam. Make a friend!',
    meter: { label: 'Friendship', emoji: '💛', start: 50 },
    cast: { maryam: { bn: 'مَرْيَم', en: 'Maryam', emoji: '👧', female: true } },
    start: 's0',
    keys: ['n1', 'r1a', 'n2', 'n4'],
    nodes: {
      s0: sys('You are at the park. A girl on the swing waves at you.', 'n1'),
      n1: say('maryam', 'السَّلَامُ عَلَيْكُمْ! اِسْمِي مَرْيَمُ.', 'as-salaamu ʿalaykum! ismii maryam.', 'Peace be upon you! My name is Maryam.', 'c1'),
      c1: ask(
        o('وَعَلَيْكُمُ السَّلَامُ يَا مَرْيَمُ! تَشَرَّفْتُ بِمَعْرِفَتِكِ.', 'wa-ʿalaykumu s-salaamu yaa maryam! tasharraftu bi-maʿrifatiki.', 'And peace be upon you, Maryam! Nice to meet you.', 20, 'r1a'),
        o('مَرْحَبًا.', 'marḥaban.', 'Hello.', 5, 'r1b'),
        o('مَنْ أَنْتِ؟', 'man anti?', 'Who are you?', -10, 'r1c'),
      ),
      r1a: say('maryam', 'وَأَنَا أَيْضًا تَشَرَّفْتُ!', 'wa-ana ayḍan tasharraftu!', 'Nice to meet you too!', 'n2'),
      r1b: say('maryam', 'مَرْحَبًا! تَعَالَ نَلْعَبْ.', 'marḥaban! taʿaala nalʿab.', "Hello! Come on, let's play.", 'n2', ['مَرْحَبًا! تَعَالَيْ نَلْعَبْ.', 'marḥaban! taʿaalay nalʿab.']),
      r1c: say('maryam', 'أَنَا مَرْيَمُ… أَنَا جَدِيدَةٌ هُنَا.', 'ana maryam… ana jadiidatun hunaa.', "I'm Maryam… I'm new here.", 'n2'),
      n2: say('maryam', 'أَيْنَ تَسْكُنُ؟', 'ayna taskun?', 'Where do you live?', 'c2', ['أَيْنَ تَسْكُنِينَ؟', 'ayna taskuniin?']),
      c2: ask(
        o('أَسْكُنُ قُرْبَ الْحَدِيقَةِ.', 'askunu qurba l-ḥadiiqa.', 'I live near the park.', 15, 'r2a'),
        o('هُنَاكَ، قُرْبَ الْمَسْجِدِ.', 'hunaaka, qurba l-masjid.', 'Over there, near the mosque.', 15, 'r2b'),
        o('لِمَاذَا تَسْأَلِينَ؟', 'limaadhaa tasʾaliin?', 'Why are you asking?', -5, 'r2c'),
      ),
      r2a: say('maryam', 'حَقًّا؟ بَيْتِي قَرِيبٌ أَيْضًا!', 'ḥaqqan? baytii qariibun ayḍan!', 'Really? My house is close too!', 'n3'),
      r2b: say('maryam', 'نَحْنُ نَسْكُنُ خَلْفَ الْمَسْجِدِ!', 'naḥnu naskunu khalfa l-masjid!', 'We live behind the mosque!', 'n3'),
      r2c: say('maryam', 'لَا لِشَيْءٍ.', 'laa li-shayʾ.', 'No reason.', 'n3'),
      n3: say('maryam', 'هَلْ نَلْعَبُ عَلَى الْأُرْجُوحَةِ؟ اِجْلِسْ أَنْتَ أَوَّلًا.', 'hal nalʿabu ʿala l-urjuuḥa? ijlis anta awwalan.', 'Shall we go on the swing? You sit first.', 'c3',
        ['هَلْ نَلْعَبُ عَلَى الْأُرْجُوحَةِ؟ اِجْلِسِي أَنْتِ أَوَّلًا.', 'hal nalʿabu ʿala l-urjuuḥa? ijlisii anti awwalan.']),
      c3: ask(
        o('لَا، أَنْتِ أَوَّلًا. شُكْرًا!', 'laa, anti awwalan. shukran!', 'No, you go first. Thank you!', 20, 'r3a'),
        o('حَسَنًا، شُكْرًا!', 'ḥasanan, shukran!', 'OK, thank you!', 10, 'r3b'),
        o('اِبْتَعِدِي! هٰذَا دَوْرِي!', 'ibtaʿidii! haadhaa dawrii!', "Move! It's my turn!", -15, 'r3c'),
      ),
      r3a: say('maryam', 'مَا أَلْطَفَكَ!', 'maa alṭafak!', 'How kind you are!', 'n4', ['مَا أَلْطَفَكِ!', 'maa alṭafaki!']),
      r3b: say('maryam', 'هٰذَا مُمْتِعٌ!', 'haadhaa mumtiʿ!', 'This is fun!', 'n4'),
      r3c: say('maryam', 'أُوه… حَسَنًا.', 'uuh… ḥasanan.', 'Oh… all right.', 'n4'),
      n4: say('maryam', 'يَجِبُ أَنْ أَذْهَبَ إِلَى الْبَيْتِ. هَلْ نَلْعَبُ غَدًا؟', 'yajibu an adhhaba ila l-bayt. hal nalʿabu ghadan?', 'I have to go home. Shall we play tomorrow?', 'c4'),
      c4: ask(
        o('نَعَمْ، طَبْعًا! مَعَ السَّلَامَةِ يَا مَرْيَمُ.', 'naʿam, ṭabʿan! maʿa s-salaama yaa maryam.', 'Yes, of course! Goodbye, Maryam.', 15, 'r4a'),
        o('رُبَّمَا.', 'rubbamaa.', 'Maybe.', 0, 'r4b'),
        o('لَا.', 'laa.', 'No.', -10, 'r4c'),
      ),
      r4a: say('maryam', 'مَعَ السَّلَامَةِ! إِلَى اللِّقَاءِ غَدًا.', 'maʿa s-salaama! ila l-liqaaʾi ghadan.', 'Goodbye! See you tomorrow.', 'b1'),
      r4b: say('maryam', 'حَسَنًا، سَنَرَى.', 'ḥasanan, sanaraa.', "OK, we'll see.", 'b1'),
      r4c: say('maryam', 'أُوه… حَسَنًا.', 'uuh… ḥasanan.', 'Oh… all right.', 'b1'),
      b1: branch({ min: 85, next: 'eA' }, { min: 60, next: 'eB' }, { next: 'eC' }),
      eA: end('A new best friend', '🌟', 'You greeted Maryam warmly, let her go first on the swing and made plans for tomorrow. What a lovely afternoon!', 'great'),
      eB: end('A friendly hello', '🙂', 'You and Maryam had fun. Next time, answer her salaam with وَعَلَيْكُمُ السَّلَامُ and let her go first.', 'ok'),
      eC: end('Not quite friends yet', '🌧️', 'It was a bit awkward. Try again: answer her salaam, be kind about turns, and say مَعَ السَّلَامَةِ.', 'rough'),
    },
  },

  {
    id: 'grandmavisit', tracks: ['older'], place: { older: 'o-ft-elders' }, title: 'Grandma Comes to Visit', emoji: '👵',
    blurb: 'Grandma has come all the way from Alexandria. Make her feel welcome!',
    meter: { label: 'Respect', emoji: '🤲', start: 50 },
    cast: { jt: { bn: 'جَدَّتِي', en: 'Grandma', emoji: '👵', female: true } },
    start: 's0',
    keys: ['n1', 'r1a', 'r2a', 'r3a'],
    nodes: {
      s0: sys('Grandma has come from Alexandria to stay with you. She rings the doorbell.', 'n1'),
      n1: say('jt', 'السَّلَامُ عَلَيْكُمْ يَا حَبِيبِي! كَيْفَ حَالُكَ؟', 'as-salaamu ʿalaykum yaa ḥabiibii! kayfa ḥaaluk?', 'Peace be upon you, my darling! How are you?', 'c1',
        ['السَّلَامُ عَلَيْكُمْ يَا حَبِيبَتِي! كَيْفَ حَالُكِ؟', 'as-salaamu ʿalaykum yaa ḥabiibatii! kayfa ḥaaluki?']),
      c1: ask(
        o('وَعَلَيْكُمُ السَّلَامُ يَا جَدَّتِي! أَنَا بِخَيْرٍ، وَكَيْفَ حَالُكِ أَنْتِ؟', 'wa-ʿalaykumu s-salaamu yaa jaddatii! ana bi-khayr, wa-kayfa ḥaaluki anti?', 'And peace be upon you, Grandma! I am fine, and how are you?', 20, 'r1a'),
        o('بِخَيْرٍ.', 'bi-khayr.', 'Fine.', 0, 'r1b'),
        o('كَيْفَ حَالُكَ يَا جَدَّتِي؟', 'kayfa ḥaaluka yaa jaddatii?', 'How are you, Grandma? (the "you" for a man)', -15, 'r1c'),
      ),
      r1a: say('jt', 'الْحَمْدُ لِلّٰهِ، أَنَا بِخَيْرٍ.', 'al-ḥamdu lillaah, ana bi-khayr.', 'Praise be to God, I am well.', 'n2'),
      r1b: say('jt', 'بِخَيْرٍ فَقَطْ؟ تَعَالَ وَعَانِقْنِي!', 'bi-khayrin faqaṭ? taʿaala wa-ʿaaniqnii!', 'Just fine? Come and give me a hug!', 'n2',
        ['بِخَيْرٍ فَقَطْ؟ تَعَالَيْ وَعَانِقِينِي!', 'bi-khayrin faqaṭ? taʿaalay wa-ʿaaniqiinii!']),
      r1c: say('jt', 'يَا حَبِيبِي، لِلْمَرْأَةِ نَقُولُ: "كَيْفَ حَالُكِ".', 'yaa ḥabiibii, li-l-marʾati naquul: "kayfa ḥaaluki".', 'Darling, to a woman we say كَيْفَ حَالُكِ.', 'n2',
        ['يَا حَبِيبَتِي، لِلْمَرْأَةِ نَقُولُ: "كَيْفَ حَالُكِ".', 'yaa ḥabiibatii, li-l-marʾati naquul: "kayfa ḥaaluki".']),
      n2: say('jt', 'أَنَا مُتْعَبَةٌ جِدًّا مِنَ السَّفَرِ.', 'ana mutʿabatun jiddan mina s-safar.', "I'm very tired from the journey.", 'c2'),
      c2: ask(
        o('تَفَضَّلِي اجْلِسِي يَا جَدَّتِي. هَلْ أُحْضِرُ لَكِ مَاءً؟', 'tafaḍḍalii jlisii yaa jaddatii. hal uḥḍiru laki maaʾan?', 'Please sit down, Grandma. Shall I bring you some water?', 20, 'r2a'),
        o('هَلْ أَحْمِلُ حَقِيبَتَكِ؟', 'hal aḥmilu ḥaqiibataki?', 'Shall I carry your bag?', 15, 'r2b'),
        o('الرُّسُومُ الْمُتَحَرِّكَةُ عَلَى التِّلْفَازِ الْآنَ.', 'ar-rusuumu l-mutaḥarrikatu ʿala t-tilfaazi l-aan.', 'Cartoons are on TV right now.', -10, 'r2c'),
      ),
      r2a: say('jt', 'أَحْسَنْتَ! نَعَمْ، مَاءً بَارِدًا مِنْ فَضْلِكَ.', 'aḥsanta! naʿam, maaʾan baaridan min faḍlik.', 'Well done! Yes, some cold water please.', 'n3',
        ['أَحْسَنْتِ! نَعَمْ، مَاءً بَارِدًا مِنْ فَضْلِكِ.', 'aḥsanti! naʿam, maaʾan baaridan min faḍliki.']),
      r2b: say('jt', 'شُكْرًا يَا حَبِيبِي. مَا شَاءَ اللّٰهُ!', 'shukran yaa ḥabiibii. maa shaaʾa llaah!', 'Thank you, my darling. Ma sha Allah!', 'n3',
        ['شُكْرًا يَا حَبِيبَتِي. مَا شَاءَ اللّٰهُ!', 'shukran yaa ḥabiibatii. maa shaaʾa llaah!']),
      r2c: say('jt', 'حَسَنًا… سَأُحْضِرُ الْمَاءَ بِنَفْسِي.', 'ḥasanan… sa-uḥḍiru l-maaʾa bi-nafsii.', "Oh… I'll get the water myself.", 'n3'),
      n3: say('jt', 'اُنْظُرْ مَاذَا أَحْضَرْتُ لَكَ!', 'unẓur maadhaa aḥḍartu lak!', 'Look what I brought you!', 'c3',
        ['اُنْظُرِي مَاذَا أَحْضَرْتُ لَكِ!', 'unẓurii maadhaa aḥḍartu laki!']),
      c3: ask(
        o('يَا سَلَامُ! شُكْرًا يَا جَدَّتِي!', 'yaa salaam! shukran yaa jaddatii!', 'Wow! Thank you, Grandma!', 20, 'r3a'),
        o('مَا هٰذَا؟', 'maa haadhaa?', 'What is it?', 5, 'r3b'),
        o('هٰذَا فَقَطْ؟', 'haadhaa faqaṭ?', 'Is that all?', -15, 'r3c'),
      ),
      r3a: say('jt', 'هٰذِهِ حَلْوَى مِنَ الْإِسْكَنْدَرِيَّةِ. أَنْتَ تُحِبُّهَا، أَلَيْسَ كَذٰلِكَ؟', 'haadhihi ḥalwaa mina l-iskandariyya. anta tuḥibbuhaa, alaysa kadhaalik?', "These are sweets from Alexandria. You love them, don't you?", 'n4',
        ['هٰذِهِ حَلْوَى مِنَ الْإِسْكَنْدَرِيَّةِ. أَنْتِ تُحِبِّينَهَا، أَلَيْسَ كَذٰلِكَ؟', 'haadhihi ḥalwaa mina l-iskandariyya. anti tuḥibbiinahaa, alaysa kadhaalik?']),
      r3b: say('jt', 'حَلْوَى مِنَ الْإِسْكَنْدَرِيَّةِ! ذُقْهَا.', 'ḥalwaa mina l-iskandariyya! dhuqhaa.', 'Sweets from Alexandria! Taste them.', 'n4',
        ['حَلْوَى مِنَ الْإِسْكَنْدَرِيَّةِ! ذُوقِيهَا.', 'ḥalwaa mina l-iskandariyya! dhuuqiihaa.']),
      r3c: say('jt', 'يَا حَبِيبِي، نَقُولُ "شُكْرًا" عَلَى الْهَدِيَّةِ.', 'yaa ḥabiibii, naquulu "shukran" ʿala l-hadiyya.', 'Darling, we say "thank you" for a present.', 'n4',
        ['يَا حَبِيبَتِي، نَقُولُ "شُكْرًا" عَلَى الْهَدِيَّةِ.', 'yaa ḥabiibatii, naquulu "shukran" ʿala l-hadiyya.']),
      n4: say('jt', 'هَلْ أَحْكِي لَكَ قِصَّةً اللَّيْلَةَ؟', 'hal aḥkii laka qiṣṣatan al-layla?', 'Shall I tell you a story tonight?', 'c4',
        ['هَلْ أَحْكِي لَكِ قِصَّةً اللَّيْلَةَ؟', 'hal aḥkii laki qiṣṣatan al-layla?']),
      c4: ask(
        o('نَعَمْ يَا جَدَّتِي! قِصَصُكِ أَجْمَلُ الْقِصَصِ.', 'naʿam yaa jaddatii! qiṣaṣuki ajmalu l-qiṣaṣ.', 'Yes, Grandma! Your stories are the best.', 15, 'r4a'),
        o('حَسَنًا.', 'ḥasanan.', 'OK.', 5, 'r4b'),
        o('لَا، أُرِيدُ الْهَاتِفَ.', 'laa, uriidu l-haatif.', 'No, I want the phone.', -10, 'r4c'),
      ),
      r4a: say('jt', 'إِنْ شَاءَ اللّٰهُ، أَحْكِي لَكَ قِصَّةَ الْمَلِكِ وَالْحِصَانِ.', 'in shaaʾa llaah, aḥkii laka qiṣṣata l-maliki wa-l-ḥiṣaan.', "God willing, I'll tell you the story of the king and the horse.", 'b1',
        ['إِنْ شَاءَ اللّٰهُ، أَحْكِي لَكِ قِصَّةَ الْمَلِكِ وَالْحِصَانِ.', 'in shaaʾa llaah, aḥkii laki qiṣṣata l-maliki wa-l-ḥiṣaan.']),
      r4b: say('jt', 'حَسَنًا، بَعْدَ الْعَشَاءِ.', 'ḥasanan, baʿda l-ʿashaaʾ.', 'All right, after dinner.', 'b1'),
      r4c: say('jt', 'الْهَاتِفُ قَلِيلًا، ثُمَّ الْقِصَّةُ.', 'al-haatifu qaliilan, thumma l-qiṣṣa.', 'The phone for a little while, then the story.', 'b1'),
      b1: branch({ min: 85, next: 'eA' }, { min: 60, next: 'eB' }, { next: 'eC' }),
      eA: end("Grandma's favourite", '💖', 'You greeted Grandma kindly, looked after her and thanked her for the sweets. She tells everyone how well brought up you are!', 'great'),
      eB: end('A warm welcome', '🙂', 'Grandma had a nice arrival. Remember: كَيْفَ حَالُكِ to a woman, and offer to help before you are asked.', 'ok'),
      eC: end('A wobbly welcome', '🌧️', 'Grandma felt a little ignored. Try again: greet her with كَيْفَ حَالُكِ, offer her water, and say شُكْرًا for her present.', 'rough'),
    },
  },

  {
    id: 'rainyday', tracks: ['older'], place: { older: 'o-around' }, title: 'A Rainy Day with Mum', emoji: '🌧️',
    blurb: 'School is closed because of the rain. Find something fun to do with Mum.',
    meter: { label: 'Fun', emoji: '☔', start: 50 },
    cast: { um: { bn: 'أُمِّي', en: 'Mum', emoji: '👩', female: true } },
    start: 's0',
    keys: ['n1', 'r1a', 'n3', 'r3b'],
    nodes: {
      s0: sys('It is raining hard and school is closed. You are at home with Mum.', 'n1'),
      n1: say('um', 'الْمَطَرُ شَدِيدٌ الْيَوْمَ. مَاذَا نَفْعَلُ؟', 'al-maṭaru shadiidun al-yawm. maadhaa nafʿal?', "It's raining hard today. What shall we do?", 'c1'),
      c1: ask(
        o('أُمِّي، هَلْ نَصْنَعُ قَوَارِبَ مِنَ الْوَرَقِ؟', 'ummii, hal naṣnaʿu qawaariba mina l-waraq?', 'Mum, shall we make paper boats?', 20, 'r1a'),
        o('هَلْ أَقْرَأُ كِتَابًا؟', 'hal aqraʾu kitaaban?', 'Shall I read a book?', 15, 'r1b'),
        o('أَشْعُرُ بِالْمَلَلِ!', 'ashʿuru bi-l-malal!', "I'm so bored!", -5, 'r1c'),
      ),
      r1a: say('um', 'فِكْرَةٌ جَمِيلَةٌ! أَحْضِرِ الْوَرَقَ.', 'fikratun jamiila! aḥḍiri l-waraq.', 'Lovely idea! Bring the paper.', 'n2', ['فِكْرَةٌ جَمِيلَةٌ! أَحْضِرِي الْوَرَقَ.', 'fikratun jamiila! aḥḍirii l-waraq.']),
      r1b: say('um', 'أَحْسَنْتَ! وَبَعْدَ ذٰلِكَ نَصْنَعُ قَارِبًا.', 'aḥsanta! wa-baʿda dhaalika naṣnaʿu qaariban.', "Well done! And after that we'll make a boat.", 'n2',
        ['أَحْسَنْتِ! وَبَعْدَ ذٰلِكَ نَصْنَعُ قَارِبًا.', 'aḥsanti! wa-baʿda dhaalika naṣnaʿu qaariban.']),
      r1c: say('um', 'هَيَّا نَفْعَلُ شَيْئًا مُمْتِعًا.', 'hayyaa nafʿalu shayʾan mumtiʿan.', "Come on, let's do something fun.", 'n2'),
      n2: say('um', 'اُنْظُرْ، مَاذَا تَرَى مِنَ النَّافِذَةِ؟', 'unẓur, maadhaa taraa mina n-naafidha?', 'Look, what can you see from the window?', 'c2',
        ['اُنْظُرِي، مَاذَا تَرَيْنَ مِنَ النَّافِذَةِ؟', 'unẓurii, maadhaa tarayna mina n-naafidha?']),
      c2: ask(
        o('غُيُومًا وَمَطَرًا!', 'ghuyuuman wa-maṭaran!', 'Clouds and rain!', 15, 'r2a'),
        o('عُصْفُورًا عَلَى الشَّجَرَةِ.', 'ʿuṣfuuran ʿala sh-shajara.', 'A bird in the tree.', 15, 'r2b'),
        o('لَا شَيْءَ.', 'laa shayʾ.', 'Nothing.', -5, 'r2c'),
      ),
      r2a: say('um', 'نَعَمْ! السَّمَاءُ رَمَادِيَّةٌ.', 'naʿam! as-samaaʾu ramaadiyya.', 'Yes! The sky is grey.', 'n3'),
      r2b: say('um', 'الْمِسْكِينُ! يَخْتَبِئُ مِنَ الْمَطَرِ.', 'al-miskiin! yakhtabiʾu mina l-maṭar.', 'Poor thing! It is hiding from the rain.', 'n3'),
      r2c: say('um', 'اُنْظُرْ جَيِّدًا!', 'unẓur jayyidan!', 'Look carefully!', 'n3', ['اُنْظُرِي جَيِّدًا!', 'unẓurii jayyidan!']),
      n3: say('um', 'هَلْ أَنْتَ جَائِعٌ؟', 'hal anta jaaʾiʿ?', 'Are you hungry?', 'c3', ['هَلْ أَنْتِ جَائِعَةٌ؟', 'hal anti jaaʾiʿa?']),
      c3: ask(
        o('نَعَمْ يَا أُمِّي. هَلْ تَصْنَعِينَ الْفَطَائِرَ؟', 'naʿam yaa ummii. hal taṣnaʿiina l-faṭaaʾir?', 'Yes, Mum. Will you make pastries?', 15, 'r3a'),
        o('نَعَمْ، هَلْ أُسَاعِدُكِ؟', 'naʿam, hal usaaʿiduki?', 'Yes, shall I help you?', 20, 'r3b'),
        o('أَعْطِينِي طَعَامًا الْآنَ!', 'aʿṭiinii ṭaʿaaman al-aan!', 'Give me food now!', -15, 'r3c'),
      ),
      r3a: say('um', 'طَبْعًا! الْفَطَائِرُ السَّاخِنَةُ لَذِيذَةٌ فِي الْمَطَرِ.', 'ṭabʿan! al-faṭaaʾiru s-saakhinatu ladhiidhatun fi l-maṭar.', 'Of course! Hot pastries are delicious on a rainy day.', 'b1'),
      r3b: say('um', 'أَحْسَنْتَ! تَعَالَ وَاغْسِلْ يَدَيْكَ.', 'aḥsanta! taʿaala wa-ghsil yadayk.', 'Well done! Come and wash your hands.', 'b1',
        ['أَحْسَنْتِ! تَعَالَيْ وَاغْسِلِي يَدَيْكِ.', 'aḥsanti! taʿaalay wa-ghsilii yadayki.']),
      r3c: say('um', 'يَا حَبِيبِي، قُلْ "مِنْ فَضْلِكِ" لِأُمِّكَ.', 'yaa ḥabiibii, qul "min faḍliki" li-ummik.', 'Darling, say "please" to your mum.', 'b1',
        ['يَا حَبِيبَتِي، قُولِي "مِنْ فَضْلِكِ" لِأُمِّكِ.', 'yaa ḥabiibatii, quulii "min faḍliki" li-ummiki.']),
      b1: branch({ min: 85, next: 'eA' }, { min: 60, next: 'eB' }, { next: 'eC' }),
      eA: end('Best rainy day ever', '⛵', 'Paper boats, bird-watching and hot pastries with Mum. You were polite and helpful the whole time!', 'great'),
      eB: end('A cosy afternoon', '☕', 'A nice day indoors. Next time, offer to help Mum in the kitchen.', 'ok'),
      eC: end('A grumpy rainy day', '🌧️', 'The rain made everyone grumpy. Try again: suggest something fun and ask Mum with مِنْ فَضْلِكِ.', 'rough'),
    },
  },
]

export const storiesFor = (track) => stories.filter((s) => s.tracks.includes(track))
