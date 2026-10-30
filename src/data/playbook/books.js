// Picture books: each page is one illustration + one short Arabic line (with transliteration and English).
//   young  — ages 5–7: one very short line per picture
//   older  — ages 8–15: a little story across seven pages
// Pages are { scene, bn, roman, en }   (bn = the Arabic). Scenes are described in src/art/Scene.jsx.
// No line speaks to the reader as "you", so the books need no girl's versions.
const sc = (bg, time, ...items) => ({ bg, time, items, ...(items.some((i) => ['🌙', '🌅', '☀️'].includes(i.e)) ? { noLuminary: true } : {}) })
const it = (e, x, y, s = 44, extra = {}) => ({ e, x, y, s, ...extra })
const pg = (scene, bn, roman, en) => ({ scene, bn, roman, en })

export const youngBooks = [
  {
    id: 'sara-morning', emoji: '🌅', title: { bn: 'صَبَاحُ سَارَةَ', en: "Sara's Morning" },
    pages: [
      pg(sc('room', 'day', it('🛏️', 22, 64, 66), it('👧', 55, 72, 54, { anim: 'bob' }), it('⏰', 82, 46, 34, { anim: 'pulse' })), 'جَاءَ الصَّبَاحُ.', 'jaaʾa ṣ-ṣabaaḥ.', 'Morning is here.'),
      pg(sc('room', 'day', it('🚿', 24, 52, 60), it('👧', 56, 72, 54), it('🧼', 82, 84, 32, { anim: 'bob' })), 'سَارَةُ تَغْسِلُ وَجْهَهَا.', 'saaratu taghsilu wajhahaa.', 'Sara washes her face.'),
      pg(sc('kitchen', 'day', it('🍳', 18, 38, 38), it('👩', 34, 70, 58), it('👧', 64, 76, 48), it('🥛', 86, 76, 32)), 'أُمُّ سَارَةَ تُعِدُّ الْفُطُورَ.', 'ummu saarata tuʿiddu l-fuṭuur.', "Sara's mum makes breakfast."),
      pg(sc('room', 'day', it('👧', 38, 72, 56), it('🎒', 64, 76, 46, { anim: 'bob' }), it('👟', 84, 86, 30)), 'سَارَةُ تَأْخُذُ حَقِيبَتَهَا.', 'saaratu taʾkhudhu ḥaqiibatahaa.', 'Sara takes her school bag.'),
      pg(sc('city', 'day', it('👧', 22, 80, 46), it('🚌', 60, 76, 66, { anim: 'bob' })), 'سَارَةُ تَرْكَبُ الْحَافِلَةَ.', 'saaratu tarkabu l-ḥaafila.', 'Sara gets on the bus.'),
      pg(sc('meadow', 'day', it('🏫', 50, 52, 84), it('👧', 24, 80, 46), it('🧒', 76, 80, 46, { anim: 'bob' })), 'سَارَةُ تَذْهَبُ إِلَى الْمَدْرَسَةِ.', 'saaratu tadh-habu ila l-madrasa.', 'Sara goes to school.'),
    ],
  },
  {
    id: 'grandpa-farm', emoji: '🌴', title: { bn: 'مَزْرَعَةُ جَدِّي', en: "Grandpa's Farm" },
    pages: [
      pg(sc('village', 'day', it('🏡', 28, 58, 60), it('👴', 58, 76, 50), it('🌴', 84, 60, 64, { anim: 'sway' })), 'هٰذِهِ مَزْرَعَةُ جَدِّي.', 'haadhihi mazraʿatu jaddii.', "This is Grandpa's farm."),
      pg(sc('meadow', 'day', it('🌴', 16, 60, 64, { anim: 'sway' }), it('🌴', 40, 56, 70, { anim: 'sway' }), it('🌴', 64, 60, 64, { anim: 'sway' }), it('🌴', 86, 58, 66, { anim: 'sway' })), 'فِي الْمَزْرَعَةِ نَخْلٌ كَثِيرٌ.', 'fi l-mazraʿati nakhlun kathiir.', 'There are lots of palm trees on the farm.'),
      pg(sc('meadow', 'day', it('🌴', 34, 54, 96, { anim: 'sway' }), it('dates', 70, 78, 40), it('👧', 84, 80, 42)), 'التَّمْرُ حُلْوٌ.', 'at-tamru ḥulw.', 'Dates are sweet.'),
      pg(sc('meadow', 'day', it('🐄', 30, 72, 62), it('🐐', 68, 76, 50, { anim: 'bob' })), 'هُنَا بَقَرَةٌ وَمَاعِزٌ.', 'hunaa baqaratun wa-maaʿiz.', 'Here are a cow and a goat.'),
      pg(sc('village', 'day', it('🦆', 28, 80, 40, { anim: 'bob' }), it('🦆', 50, 84, 40, { anim: 'bob' }), it('🦆', 72, 80, 40, { anim: 'bob' })), 'الْبَطُّ فِي الْمَاءِ.', 'al-baṭṭu fi l-maaʾ.', 'The ducks are in the water.'),
      pg(sc('village', 'evening', it('🏡', 28, 58, 62), it('👴', 58, 76, 48), it('👧', 74, 80, 42)), 'غَرَبَتِ الشَّمْسُ.', 'gharabati sh-shams.', 'The sun has set.'),
    ],
  },
  {
    id: 'rainy-day', emoji: '🌧️', title: { bn: 'يَوْمٌ مُمْطِرٌ', en: 'A Rainy Day' },
    pages: [
      pg(sc('meadow', 'rain', it('☁️', 50, 20, 70, { anim: 'drift' }), it('🏠', 72, 62, 56)), 'فِي السَّمَاءِ غُيُومٌ.', 'fi s-samaaʾi ghuyuum.', 'There are clouds in the sky.'),
      pg(sc('meadow', 'rain', it('🧒', 44, 76, 54), it('🏠', 76, 58, 50)), 'الْمَطَرُ يَنْزِلُ.', 'al-maṭaru yanzil.', 'The rain is falling.'),
      pg(sc('meadow', 'rain', it('☂️', 40, 52, 62, { anim: 'sway' }), it('🧒', 40, 78, 50)), 'عِنْدِي مِظَلَّةٌ.', 'ʿindii miẓalla.', 'I have an umbrella.'),
      pg(sc('meadow', 'rain', it('🧒', 38, 76, 52, { anim: 'bob' }), it('💦', 62, 84, 52, { anim: 'pulse' })), 'طَشْ طَشْ فِي الْمَاءِ!', 'ṭash ṭash fi l-maaʾ!', 'Splash, splash in the water!'),
      pg(sc('village', 'day', it('⛵', 46, 80, 44, { anim: 'bob' }), it('🧒', 20, 62, 48)), 'قَارِبِي مِنْ وَرَقٍ.', 'qaaribii min waraq.', 'My boat is made of paper.'),
      pg(sc('meadow', 'day', it('🌈', 50, 28, 120), it('🧒', 36, 80, 50, { anim: 'bob' })), 'مَا أَجْمَلَ قَوْسَ قُزَحَ!', 'maa ajmala qawsa quzaḥ!', 'What a beautiful rainbow!'),
    ],
  },
  {
    id: 'my-animals', emoji: '🐫', title: { bn: 'حَيَوَانَاتِي', en: 'My Animals' },
    pages: [
      pg(sc('meadow', 'day', it('🐶', 30, 74, 56, { anim: 'bob' }), it('🐱', 66, 76, 52)), 'كَلْبٌ وَقِطَّةٌ.', 'kalbun wa-qiṭṭa.', 'A dog and a cat.'),
      pg(sc('desert', 'day', it('🐫', 50, 70, 90, { anim: 'bob' }), it('🌴', 84, 58, 56)), 'الْجَمَلُ فِي الصَّحْرَاءِ.', 'al-jamalu fi ṣ-ṣaḥraaʾ.', 'The camel is in the desert.'),
      pg(sc('meadow', 'day', it('🐘', 50, 66, 104, { anim: 'sway' })), 'الْفِيلُ كَبِيرٌ جِدًّا.', 'al-fiilu kabiirun jiddan.', 'The elephant is very big.'),
      pg(sc('meadow', 'day', it('🌳', 40, 54, 100), it('🐒', 40, 40, 38, { anim: 'bob' }), it('🍌', 62, 70, 28)), 'الْقِرْدُ عَلَى الشَّجَرَةِ.', 'al-qirdu ʿala sh-shajara.', 'The monkey is in the tree.'),
      pg(sc('meadow', 'day', it('🐦', 36, 34, 50, { anim: 'drift' }), it('🐦', 66, 26, 40, { anim: 'drift' })), 'الطَّائِرُ يَطِيرُ.', 'aṭ-ṭaaʾiru yaṭiir.', 'The bird flies.'),
      pg(sc('river', 'day', it('🐟', 30, 76, 40, { anim: 'bob' }), it('🐠', 56, 84, 40, { anim: 'bob' }), it('🐟', 78, 72, 36, { anim: 'bob' })), 'السَّمَكُ فِي الْمَاءِ.', 'as-samaku fi l-maaʾ.', 'The fish are in the water.'),
    ],
  },
  {
    id: 'at-souq', emoji: '🛒', title: { bn: 'فِي السُّوقِ', en: 'At the Souq' },
    pages: [
      pg(sc('city', 'day', it('👨', 34, 76, 58), it('👧', 58, 82, 44, { anim: 'bob' })), 'نَذْهَبُ إِلَى السُّوقِ.', 'nadh-habu ila s-suuq.', 'We go to the souq.'),
      pg(sc('market', 'day', it('🍌', 22, 78, 40), it('🍎', 36, 80, 40), it('🍎', 48, 78, 40), it('🧑‍🌾', 74, 66, 56)), 'نَشْتَرِي الْمَوْزَ وَالتُّفَّاحَ.', 'nashtarii l-mawza wa-t-tuffaaḥ.', 'We buy bananas and apples.'),
      pg(sc('market', 'day', it('🐟', 24, 78, 46), it('🐟', 42, 82, 42), it('🧑‍🌾', 72, 66, 56)), 'بِكَمِ السَّمَكُ؟', 'bikami s-samak?', 'How much is the fish?'),
      pg(sc('market', 'day', it('💵', 38, 74, 56, { anim: 'pulse' }), it('🧑‍🌾', 72, 66, 56)), 'بِعَشَرَةِ دَنَانِيرَ.', 'bi-ʿasharati danaaniir.', 'Ten dinars.'),
      pg(sc('market', 'day', it('🛍️', 44, 72, 62, { anim: 'bob' }), it('🍎', 24, 80, 30), it('🍌', 66, 80, 30)), 'الْفَاكِهَةُ فِي الْكِيسِ.', 'al-faakihatu fi l-kiis.', 'The fruit is in the bag.'),
      pg(sc('meadow', 'evening', it('🏠', 70, 58, 62), it('👨', 28, 78, 54), it('👧', 46, 82, 42, { anim: 'bob' })), 'هَيَّا إِلَى الْبَيْتِ!', 'hayyaa ila l-bayt!', "Let's go home!"),
    ],
  },
  {
    id: 'eid-morning', emoji: '🌙', title: { bn: 'صَبَاحُ الْعِيدِ', en: 'Eid Morning' },
    pages: [
      pg(sc('meadow', 'evening', it('🌙', 74, 24, 54, { anim: 'pulse' }), it('🕌', 36, 56, 84)), 'الْيَوْمَ عِيدٌ!', 'al-yawma ʿiid!', 'Today is Eid!'),
      pg(sc('room', 'day', it('👧', 40, 70, 58), it('👗', 66, 70, 52, { anim: 'bob' })), 'مَلَابِسُ جَدِيدَةٌ.', 'malaabisu jadiida.', 'New clothes.'),
      pg(sc('meadow', 'day', it('🕌', 50, 52, 86), it('👨', 22, 80, 50), it('👦', 80, 82, 44)), 'نَذْهَبُ إِلَى الْمَسْجِدِ.', 'nadh-habu ila l-masjid.', 'We go to the mosque.'),
      pg(sc('meadow', 'day', it('🤗', 40, 66, 70, { anim: 'pulse' }), it('👨', 20, 80, 46), it('👦', 70, 82, 44)), 'عِيدٌ مُبَارَكٌ!', 'ʿiidun mubaarak!', 'Blessed Eid!'),
      pg(sc('kitchen', 'day', it('🍬', 36, 76, 50), it('🍮', 62, 78, 46), it('🥛', 82, 76, 32)), 'كَعْكُ الْعِيدِ لَذِيذٌ.', 'kaʿku l-ʿiidi ladhiidh.', 'Eid biscuits are delicious.'),
      pg(sc('meadow', 'day', it('💵', 36, 70, 54, { anim: 'pulse' }), it('🎈', 66, 40, 46, { anim: 'drift' }), it('👧', 62, 80, 46)), 'أَخَذْتُ الْعِيدِيَّةَ.', 'akhadhtu l-ʿiidiyya.', 'I got my Eid money.'),
    ],
  },
]

export const olderBooks = [
  {
    id: 'nile-felucca', emoji: '⛵', title: { bn: 'فَلُوكَةٌ عَلَى النِّيلِ', en: 'A Felucca on the Nile' },
    pages: [
      pg(sc('city', 'day', it('🚗', 30, 80, 54), it('🚌', 72, 76, 58)), 'الْقَاهِرَةُ مَدِينَةٌ كَبِيرَةٌ جِدًّا.', 'al-qaahiratu madiinatun kabiiratun jiddan.', 'Cairo is a very big city.'),
      pg(sc('city', 'day', it('🚗', 20, 80, 46), it('🚌', 50, 78, 54), it('🚗', 82, 80, 46)), 'فِي الشَّوَارِعِ سَيَّارَاتٌ كَثِيرَةٌ.', 'fi sh-shawaariʿi sayyaaraatun kathiira.', 'There are lots of cars in the streets.'),
      pg(sc('river', 'day', it('⛵', 56, 66, 70, { anim: 'bob' }), it('👨', 22, 56, 46), it('👧', 36, 60, 36)), 'أَرْكَبُ الْفَلُوكَةَ مَعَ أَبِي.', 'arkabu l-faluukata maʿa abii.', 'I get into the felucca with Dad.'),
      pg(sc('river', 'day', it('⛵', 46, 64, 72, { anim: 'bob' }), it('☁️', 76, 20, 44, { anim: 'drift' })), 'الْقَارِبُ يَمْشِي بِالرِّيحِ.', 'al-qaaribu yamshii bi-r-riiḥ.', 'The boat moves with the wind.'),
      pg(sc('river', 'day', it('🌴', 16, 46, 60, { anim: 'sway' }), it('🌴', 84, 44, 64, { anim: 'sway' }), it('⛵', 48, 70, 50, { anim: 'bob' })), 'نَرَى النَّخْلَ عَلَى الشَّاطِئِ.', 'naraa n-nakhla ʿala sh-shaaṭiʾ.', 'We see palm trees on the bank.'),
      pg(sc('river', 'evening', it('⛵', 40, 66, 60), it('💵', 74, 50, 46, { anim: 'pulse' })), 'يَا عَمُّ، كَمِ الْأُجْرَةُ؟', 'yaa ʿammu, kami l-ujra?', 'How much is the fare, sir?'),
      pg(sc('city', 'evening', it('🏠', 70, 60, 60), it('👨', 28, 80, 48), it('👧', 46, 84, 40, { anim: 'bob' })), 'شُكْرًا يَا عَمُّ. مَعَ السَّلَامَةِ.', 'shukran yaa ʿamm. maʿa s-salaama.', 'Thank you, sir. Goodbye.'),
    ],
  },
  {
    id: 'ramadan-nights', emoji: '🏮', title: { bn: 'لَيَالِي رَمَضَانَ', en: 'Ramadan Nights' },
    pages: [
      pg(sc('city', 'evening', it('🌙', 74, 22, 50, { anim: 'pulse' }), it('🕌', 34, 58, 76)), 'هٰذَا هِلَالُ رَمَضَانَ.', 'haadhaa hilaalu ramaḍaan.', 'This is the new moon of Ramadan.'),
      pg(sc('city', 'night', it('🏮', 22, 34, 46, { anim: 'sway' }), it('🏮', 50, 30, 50, { anim: 'sway' }), it('🏮', 78, 34, 46, { anim: 'sway' }), it('👧', 40, 82, 44), it('👦', 62, 82, 44)), 'نُعَلِّقُ الْفَوَانِيسَ فِي الشَّارِعِ.', 'nuʿalliqu l-fawaaniisa fi sh-shaariʿ.', 'We hang lanterns in the street.'),
      pg(sc('meadow', 'day', it('☀️', 50, 22, 50, { anim: 'pulse' }), it('👨‍👩‍👧', 50, 78, 60)), 'نَصُومُ مِنَ الْفَجْرِ إِلَى الْمَغْرِبِ.', 'naṣuumu mina l-fajri ila l-maghrib.', 'We fast from dawn until sunset.'),
      pg(sc('kitchen', 'evening', it('dates', 32, 76, 44), it('🥛', 54, 76, 36), it('👦', 78, 76, 48)), 'نُفْطِرُ عَلَى التَّمْرِ وَالْمَاءِ.', 'nufṭiru ʿala t-tamri wa-l-maaʾ.', 'We break our fast with dates and water.'),
      pg(sc('kitchen', 'evening', it('🍛', 50, 74, 50), it('🥘', 72, 76, 42), it('👨‍👩‍👧‍👦', 24, 76, 58)), 'تَجْتَمِعُ الْعَائِلَةُ حَوْلَ الْمَائِدَةِ.', 'tajtamiʿu l-ʿaaʾilatu ḥawla l-maaʾida.', 'The family gathers round the table.'),
      pg(sc('city', 'night', it('🕌', 50, 54, 90), it('👨', 22, 80, 48), it('👦', 80, 82, 42)), 'بَعْدَ الْإِفْطَارِ نَذْهَبُ إِلَى الْمَسْجِدِ.', 'baʿda l-ifṭaari nadh-habu ila l-masjid.', 'After iftar we go to the mosque.'),
      pg(sc('city', 'night', it('🏮', 30, 40, 54, { anim: 'sway' }), it('🌙', 72, 22, 46, { anim: 'pulse' }), it('🎉', 60, 72, 50, { anim: 'pulse' })), 'رَمَضَانُ كَرِيمٌ!', 'ramaḍaanu kariim!', 'Ramadan Kareem!'),
    ],
  },
  {
    id: 'fisherman', emoji: '🐟', title: { bn: 'الصَّيَّادُ وَالْبَحْرُ', en: 'The Fisherman and the Sea' },
    pages: [
      pg(sc('sea', 'day', it('⛵', 44, 52, 62, { anim: 'bob' })), 'يَخْرُجُ الصَّيَّادُ إِلَى الْبَحْرِ.', 'yakhruju ṣ-ṣayyaadu ila l-baḥr.', 'The fisherman goes out to sea.'),
      pg(sc('sea', 'day', it('🛶', 40, 52, 62, { anim: 'bob' }), it('🧑‍🌾', 40, 42, 36), it('🕸️', 70, 64, 50, { anim: 'sway' })), 'يَرْمِي الشَّبَكَةَ فِي الْمَاءِ.', 'yarmii sh-shabakata fi l-maaʾ.', 'He casts his net into the water.'),
      pg(sc('sea', 'day', it('🕸️', 36, 60, 56), it('🐟', 26, 70, 36, { anim: 'bob' }), it('🐟', 44, 74, 36, { anim: 'bob' }), it('🐟', 62, 68, 36, { anim: 'bob' })), 'فِي الشَّبَكَةِ سَمَكٌ كَثِيرٌ.', 'fi sh-shabakati samakun kathiir.', 'There are lots of fish in the net.'),
      pg(sc('paper', 'day', it('🐚', 50, 56, 100, { anim: 'pulse' })), 'قَدِيمًا بَحَثَ النَّاسُ هُنَا عَنِ اللُّؤْلُؤِ.', 'qadiiman baḥatha n-naasu hunaa ʿani l-luʾluʾ.', 'Long ago, people here dived for pearls.'),
      pg(sc('market', 'day', it('🐟', 26, 78, 46), it('🐟', 44, 82, 46), it('💵', 66, 74, 46), it('🧑‍🌾', 84, 64, 50)), 'يَبِيعُ الصَّيَّادُ السَّمَكَ فِي السُّوقِ.', 'yabiiʿu ṣ-ṣayyaadu s-samaka fi s-suuq.', 'The fisherman sells the fish at the souq.'),
      pg(sc('kitchen', 'day', it('👩', 36, 70, 58), it('🍳', 18, 40, 36), it('🐟', 64, 76, 44)), 'أُمِّي تَطْبُخُ السَّمَكَ مَعَ الْأَرُزِّ.', 'ummii taṭbukhu s-samaka maʿa l-aruzz.', 'Mum cooks the fish with rice.'),
      pg(sc('kitchen', 'day', it('🍛', 50, 74, 60), it('😋', 76, 50, 46, { anim: 'bob' })), 'السَّمَكُ وَالْأَرُزُّ طَعَامٌ لَذِيذٌ!', 'as-samaku wa-l-aruzzu ṭaʿaamun ladhiidh!', 'Fish and rice is delicious!'),
    ],
  },
  {
    id: 'grandma-village', emoji: '🫒', title: { bn: 'قَرْيَةُ جَدَّتِي', en: "Grandma's Village" },
    pages: [
      pg(sc('hills', 'day', it('🚗', 44, 78, 56, { anim: 'bob' }), it('🏡', 80, 56, 50)), 'نُسَافِرُ إِلَى قَرْيَةِ جَدَّتِي.', 'nusaafiru ilaa qaryati jaddatii.', "We travel to Grandma's village."),
      pg(sc('hills', 'day', it('🌳', 18, 62, 56, { anim: 'sway' }), it('🌳', 42, 66, 56, { anim: 'sway' }), it('🌳', 66, 62, 56, { anim: 'sway' }), it('🌳', 88, 66, 56, { anim: 'sway' })), 'فِي الْقَرْيَةِ أَشْجَارُ زَيْتُونٍ كَثِيرَةٌ.', 'fi l-qaryati ashjaaru zaytuunin kathiira.', 'The village has lots of olive trees.'),
      pg(sc('hills', 'day', it('🌳', 36, 56, 96, { anim: 'sway' }), it('👵', 64, 78, 48), it('👧', 82, 82, 40)), 'فِي الْخَرِيفِ نَقْطِفُ الزَّيْتُونَ مَعًا.', 'fi l-khariifi naqṭifu z-zaytuuna maʿan.', 'In autumn we pick the olives together.'),
      pg(sc('kitchen', 'day', it('👵', 36, 70, 58), it('🥘', 66, 76, 46)), 'جَدَّتِي تَخْبِزُ الْخُبْزَ.', 'jaddatii takhbizu l-khubz.', 'Grandma bakes bread.'),
      pg(sc('kitchen', 'day', it('🥘', 40, 76, 50), it('🌿', 62, 74, 40), it('👧', 82, 76, 44)), 'نَأْكُلُ الْخُبْزَ مَعَ الزَّيْتِ وَالزَّعْتَرِ.', 'naʾkulu l-khubza maʿa z-zayti wa-z-zaʿtar.', 'We eat bread with olive oil and zaatar.'),
      pg(sc('room', 'night', it('👵', 36, 72, 54), it('👧', 62, 78, 44), it('📖', 50, 56, 38, { anim: 'bob' })), 'فِي اللَّيْلِ تَحْكِي جَدَّتِي قِصَصًا.', 'fi l-layli taḥkii jaddatii qiṣaṣan.', 'At night Grandma tells stories.'),
      pg(sc('hills', 'day', it('❤️', 50, 30, 60, { anim: 'pulse' }), it('👵', 36, 76, 50), it('👧', 64, 80, 42)), 'أُحِبُّ قَرْيَةَ جَدَّتِي كَثِيرًا.', 'uḥibbu qaryata jaddatii kathiiran.', "I love Grandma's village."),
    ],
  },
  {
    id: 'our-school', emoji: '🏫', title: { bn: 'مَدْرَسَتُنَا', en: 'Our School' },
    pages: [
      pg(sc('meadow', 'day', it('🏫', 52, 52, 84), it('🧒', 22, 80, 46), it('👧', 80, 82, 44)), 'فِي الصَّبَاحِ نَذْهَبُ إِلَى الْمَدْرَسَةِ.', 'fi ṣ-ṣabaaḥi nadh-habu ila l-madrasa.', 'In the morning we go to school.'),
      pg(sc('classroom', 'day', it('🧑‍🏫', 40, 64, 52), it('🧒', 20, 82, 40), it('👧', 72, 82, 40)), 'يَدْخُلُ الْمُعَلِّمُ إِلَى الصَّفِّ.', 'yadkhulu l-muʿallimu ila ṣ-ṣaff.', 'The teacher comes into the class.'),
      pg(sc('classroom', 'day', it('📖', 30, 80, 44, { anim: 'bob' }), it('📖', 56, 82, 44), it('🧒', 82, 78, 44)), 'نَفْتَحُ كُتُبَنَا.', 'naftaḥu kutubanaa.', 'We open our books.'),
      pg(sc('classroom', 'day', it('🖊️', 40, 78, 44, { anim: 'bob' }), it('📓', 62, 80, 46), it('🧒', 20, 80, 44)), 'نَكْتُبُ فِي الدَّفْتَرِ.', 'naktubu fi d-daftar.', 'We write in our exercise books.'),
      pg(sc('meadow', 'day', it('⚽', 52, 80, 40, { anim: 'bob' }), it('🧒', 26, 76, 48), it('👧', 76, 76, 48)), 'فِي الِاسْتِرَاحَةِ نَلْعَبُ كُرَةَ الْقَدَمِ.', 'fi l-istiraaḥati nalʿabu kurata l-qadam.', 'At break time we play football.'),
      pg(sc('meadow', 'evening', it('🏫', 50, 52, 80), it('🔔', 20, 40, 40, { anim: 'sway' })), 'يَرِنُّ الْجَرَسُ بَعْدَ الظُّهْرِ.', 'yarinnu l-jarasu baʿda ẓ-ẓuhr.', 'The bell rings in the afternoon.'),
      pg(sc('meadow', 'evening', it('🏠', 72, 58, 60), it('🧒', 36, 80, 48, { anim: 'bob' })), 'نَرْجِعُ إِلَى الْبَيْتِ.', 'narjiʿu ila l-bayt.', 'We go back home.'),
    ],
  },
  {
    id: 'desert-trip', emoji: '🏜️', title: { bn: 'رِحْلَةٌ إِلَى الصَّحْرَاءِ', en: 'A Trip to the Desert' },
    pages: [
      pg(sc('desert', 'day', it('🚗', 46, 76, 62, { anim: 'bob' })), 'نُسَافِرُ بِالسَّيَّارَةِ إِلَى الصَّحْرَاءِ.', 'nusaafiru bi-s-sayyaarati ila ṣ-ṣaḥraaʾ.', 'We drive out to the desert.'),
      pg(sc('desert', 'day', it('☀️', 80, 18, 50, { anim: 'pulse' }), it('🧒', 30, 78, 46), it('👧', 50, 80, 44)), 'الرَّمْلُ فِي كُلِّ مَكَانٍ.', 'ar-ramlu fii kulli makaan.', 'There is sand everywhere.'),
      pg(sc('desert', 'day', it('🐫', 34, 70, 78, { anim: 'bob' }), it('🐫', 70, 72, 70, { anim: 'bob' })), 'نَرْكَبُ الْجِمَالَ.', 'narkabu l-jimaal.', 'We ride camels.'),
      pg(sc('desert', 'evening', it('☕', 40, 74, 50), it('dates', 60, 78, 36), it('👴', 80, 74, 50)), 'نَشْرَبُ الْقَهْوَةَ الْعَرَبِيَّةَ مَعَ التَّمْرِ.', 'nashrabu l-qahwata l-ʿarabiyyata maʿa t-tamr.', 'We drink Arabic coffee with dates.'),
      pg(sc('desert', 'evening', it('🌅', 50, 46, 90, { anim: 'pulse' })), 'تَغْرُبُ الشَّمْسُ وَرَاءَ الْكُثْبَانِ.', 'taghrubu sh-shamsu waraaʾa l-kuthbaan.', 'The sun sets behind the dunes.'),
      pg(sc('desert', 'night', it('⭐', 24, 20, 30, { anim: 'pulse' }), it('⭐', 50, 14, 26, { anim: 'pulse' }), it('⭐', 78, 24, 30, { anim: 'pulse' }), it('🌙', 64, 30, 40)), 'فِي اللَّيْلِ نَرَى نُجُومًا كَثِيرَةً.', 'fi l-layli naraa nujuuman kathiira.', 'At night we see lots of stars.'),
      pg(sc('desert', 'night', it('🧒', 30, 80, 48), it('👨', 56, 78, 54), it('❤️', 76, 40, 44, { anim: 'pulse' })), 'سَنَرْجِعُ مَرَّةً أُخْرَى!', 'sanarjiʿu marratan ukhraa!', 'We will come back again!'),
    ],
  },
]
