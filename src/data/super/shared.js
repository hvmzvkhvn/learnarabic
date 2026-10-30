// Super challenge sets used by both the 5–7 and the 8–12 track (the same words are taught in both).
// Each item is [Arabic, English], fully vowelled. Sentences avoid words that describe the speaker (سَعِيد / سَعِيدَة),
// so they suit every learner. Colours stay in their "he" form, so they describe "he" words only.

export const shared = {
  hello: {
    label: 'Say Hello',
    items: [
      ['السَّلَامُ عَلَيْكُمْ! مَرْحَبًا، صَبَاحُ الْخَيْرِ!', 'Peace be upon you! Hello, good morning!'],
      ['وَعَلَيْكُمُ السَّلَامُ! أَهْلًا وَسَهْلًا، شُكْرًا!', 'And peace be upon you! Welcome, thank you!'],
      ['مَرْحَبًا! مَسَاءُ الْخَيْرِ، أَهْلًا وَسَهْلًا!', 'Hello! Good evening, welcome!'],
      ['شُكْرًا! مَسَاءُ الْخَيْرِ، وَتُصْبِحُ عَلَى خَيْرٍ.', 'Thank you! Good evening, and good night.'],
      ['صَبَاحُ الْخَيْرِ! أَهْلًا وَسَهْلًا، مَرْحَبًا!', 'Good morning! Welcome, hello!'],
    ],
  },
  numbers: {
    label: 'Numbers',
    items: [
      ['وَاحِدٌ وَاثْنَانِ ثَلَاثَةٌ، وَأَرْبَعَةٌ وَسِتَّةٌ عَشَرَةٌ.', 'One and two is three, and four and six is ten.'],
      ['اِثْنَانِ وَاثْنَانِ أَرْبَعَةٌ، وَخَمْسَةٌ وَخَمْسَةٌ عَشَرَةٌ.', 'Two and two is four, and five and five is ten.'],
      ['سَبْعَةٌ وَثَلَاثَةٌ عَشَرَةٌ، وَثَمَانِيَةٌ وَوَاحِدٌ تِسْعَةٌ.', 'Seven and three is ten, and eight and one is nine.'],
      ['خَمْسَةٌ وَصِفْرٌ خَمْسَةٌ، وَتِسْعَةٌ وَوَاحِدٌ عَشَرَةٌ.', 'Five and zero is five, and nine and one is ten.'],
      ['سِتَّةٌ وَوَاحِدٌ سَبْعَةٌ، وَسَبْعَةٌ وَوَاحِدٌ ثَمَانِيَةٌ.', 'Six and one is seven, and seven and one is eight.'],
    ],
  },
  colours: {
    label: 'Colours',
    items: [
      ['أَحْمَرُ، أَزْرَقُ، أَخْضَرُ، أَصْفَرُ وَأَبْيَضُ.', 'Red, blue, green, yellow and white.'],
      ['أَسْوَدُ وَأَبْيَضُ، أَحْمَرُ وَأَخْضَرُ، وَبُنِّيٌّ.', 'Black and white, red and green, and brown.'],
      ['بُرْتُقَالِيٌّ وَوَرْدِيٌّ وَبَنَفْسَجِيٌّ وَأَزْرَقُ وَأَسْوَدُ.', 'Orange, pink, purple, blue and black.'],
      ['أَصْفَرُ وَأَحْمَرُ وَبُرْتُقَالِيٌّ وَبُنِّيٌّ وَأَبْيَضُ.', 'Yellow, red, orange, brown and white.'],
      ['وَرْدِيٌّ وَأَبْيَضُ، بَنَفْسَجِيٌّ وَأَزْرَقُ، أَخْضَرُ وَأَصْفَرُ.', 'Pink and white, purple and blue, green and yellow.'],
    ],
  },
  animals: {
    label: 'Animals',
    items: [
      ['الْكَلْبُ أَسْوَدُ، وَالْحِصَانُ بُنِّيٌّ، وَالدُّبُّ بُنِّيٌّ.', 'The dog is black, the horse is brown and the bear is brown.'],
      ['الضِّفْدَعُ أَخْضَرُ، وَالْبَبَّغَاءُ أَحْمَرُ وَأَخْضَرُ.', 'The frog is green, and the parrot is red and green.'],
      ['أَسَدٌ وَاحِدٌ، وَدُبٌّ وَاحِدٌ، وَجَمَلٌ وَاحِدٌ.', 'One lion, one bear and one camel.'],
      ['الْأَرْنَبُ أَبْيَضُ، وَالْفَأْرُ بُنِّيٌّ، وَالْأَسَدُ أَصْفَرُ.', 'The rabbit is white, the mouse is brown and the lion is yellow.'],
      ['قِطَّةٌ، وَكَلْبٌ، وَبَقَرَةٌ، وَحِصَانٌ، وَدَجَاجَةٌ.', 'A cat, a dog, a cow, a horse and a hen.'],
    ],
  },
  food: {
    label: 'Food & Drink',
    items: [
      ['الْمَوْزُ أَصْفَرُ، وَالْعِنَبُ أَخْضَرُ، وَالْجَزَرُ بُرْتُقَالِيٌّ.', 'The banana is yellow, the grapes are green and the carrots are orange.'],
      ['خُبْزٌ وَبَيْضَةٌ وَحَلِيبٌ وَشَايٌ وَعَسَلٌ.', 'Bread, an egg, milk, tea and honey.'],
      ['الْقِرْدُ وَالْمَوْزُ، وَالْأَرْنَبُ وَالْجَزَرُ، وَالْفَأْرُ وَالْخُبْزُ.', 'The monkey and the banana, the rabbit and the carrots, the mouse and the bread.'],
      ['أَرُزٌّ وَبَطَاطَا وَبَصَلٌ وَمِلْحٌ وَمَاءٌ.', 'Rice, potatoes, onions, salt and water.'],
      ['التَّمْرُ وَالْحَلِيبُ، وَالتُّفَّاحَةُ وَالْبِطِّيخُ وَالْمَاءُ.', 'Dates and milk, an apple, watermelon and water.'],
    ],
  },
  body: {
    label: 'My Body',
    items: [
      ['رَأْسٌ وَاحِدٌ، وَأَنْفٌ وَاحِدٌ، وَفَمٌ وَاحِدٌ.', 'One head, one nose and one mouth.'],
      ['عَيْنٌ وَأُذُنٌ وَيَدٌ وَقَدَمٌ وَقَلْبٌ.', 'An eye, an ear, a hand, a foot and a heart.'],
      ['الشَّعْرُ أَسْوَدُ، وَاللِّسَانُ أَحْمَرُ، وَالسِّنُّ أَبْيَضُ.', 'The hair is black, the tongue is red and the tooth is white.'],
      ['إِصْبَعٌ وَاحِدٌ، وَيَدٌ، وَرِجْلٌ، وَقَدَمٌ.', 'One finger, a hand, a leg and a foot.'],
      ['رَأْسٌ وَشَعْرٌ، وَعَيْنٌ وَأُذُنٌ وَأَنْفٌ.', 'A head and hair, an eye, an ear and a nose.'],
    ],
  },
  around: {
    label: 'Around Us',
    items: [
      ['الشَّمْسُ وَالْقَمَرُ وَنَجْمَةٌ وَغَيْمَةٌ وَمَطَرٌ.', 'The sun and the moon, a star, a cloud and rain.'],
      ['بَيْتٌ، وَبَابٌ، وَكُرْسِيٌّ، وَسَرِيرٌ، وَسَاعَةٌ.', 'A house, a door, a chair, a bed and a clock.'],
      ['كِتَابٌ وَقَلَمٌ، وَزَهْرَةٌ وَشَجَرَةٌ وَسَيَّارَةٌ.', 'A book and a pen, a flower, a tree and a car.'],
      ['الْقَلَمُ أَزْرَقُ، وَالْكِتَابُ أَحْمَرُ، وَالْبَابُ بُنِّيٌّ.', 'The pen is blue, the book is red and the door is brown.'],
      ['الْكُرْسِيُّ أَبْيَضُ، وَالسَّرِيرُ أَزْرَقُ، وَالْبَيْتُ أَصْفَرُ.', 'The chair is white, the bed is blue and the house is yellow.'],
    ],
  },
  arab: {
    label: 'The Arab World',
    items: [
      ['صَحْرَاءُ وَنَخْلَةٌ وَوَاحَةٌ وَجَمَلٌ وَخَيْمَةٌ.', 'A desert, a palm tree, an oasis, a camel and a tent.'],
      ['الْجَمَلُ فِي الصَّحْرَاءِ، وَالنَّخْلَةُ فِي الْوَاحَةِ.', 'The camel is in the desert, and the palm tree is in the oasis.'],
      ['سُوقٌ وَفَانُوسٌ وَخَيْمَةٌ وَصَقْرٌ وَجَمَلٌ.', 'A market, a lantern, a tent, a falcon and a camel.'],
      ['الْفَانُوسُ أَحْمَرُ، وَالصَّقْرُ بُنِّيٌّ، وَالْجَمَلُ أَصْفَرُ.', 'The lantern is red, the falcon is brown and the camel is yellow.'],
      ['فِي الصَّحْرَاءِ خَيْمَةٌ وَجَمَلٌ وَنَخْلَةٌ.', 'In the desert there is a tent, a camel and a palm tree.'],
    ],
  },
}

// Family sets for 8–12 (built from the longer 8–12 conversations; 5–7 has its own in ./youngFamily.js).
export const familySets = {
  morning: {
    label: 'Family: Mornings',
    items: [
      ['اِسْتَيْقِظِي يَا سَارَةُ، السَّاعَةُ السَّابِعَةُ الْآنَ.', "Wake up, Sara, it's seven o'clock now."],
      ['الْبَيْضُ وَالْخُبْزُ جَاهِزَانِ، وَالْحَلِيبُ مُفِيدٌ.', 'The eggs and bread are ready, and milk is good for you.'],
      ['هَلْ وَضَعْتِ كُتُبَكِ وَدَفْتَرَكِ فِي الْحَقِيبَةِ؟', 'Have you put your books and your notebook in the bag?'],
      ['فِي عُلْبَةِ الْغَدَاءِ سَنْدَوِيشُ جُبْنٍ وَتَمْرٌ.', 'In the lunchbox there is a cheese sandwich and dates.'],
      ['هَيَّا بِنَا، لَا نُرِيدُ أَنْ نَتَأَخَّرَ.', "Let's go, we don't want to be late."],
    ],
  },
  school: {
    label: 'Family: School Days',
    items: [
      ['أَخَذْتُ نَجْمَةً فِي دَرْسِ الرِّيَاضِيَّاتِ الْيَوْمَ!', 'I got a star in the maths lesson today!'],
      ['السُّؤَالُ الْأَخِيرُ كَانَ صَعْبًا جِدًّا.', 'The last question was very hard.'],
      ['عِنْدِي قِرَاءَةٌ وَرِيَاضِيَّاتٌ، ثُمَّ نَلْعَبُ بِالْكُرَةِ.', 'I have reading and maths, then we play ball.'],
      ['اِقْرَئِي السُّؤَالَ مَرَّةً أُخْرَى بِبُطْءٍ.', 'Read the question again, slowly.'],
      ['أَنْتِ أَفْضَلُ صَدِيقَةٍ يَا لَيْلَى!', "You're the best friend, Layla!"],
    ],
  },
  food: {
    label: 'Family: Food & Kitchen',
    items: [
      ['طَبَخْتُ دَجَاجًا مَعَ الْأَرُزِّ، وَالطَّعَامُ لَذِيذٌ.', 'I cooked chicken with rice, and the food is delicious.'],
      ['أُرِيدُ كِيلُو مِنَ الطَّمَاطِمِ، مِنْ فَضْلِكَ.', 'A kilo of tomatoes, please.'],
      ['اِغْسِلِي الطَّمَاطِمَ وَالْخِيَارَ لِلسَّلَطَةِ يَا سَارَةُ.', 'Wash the tomatoes and cucumbers for the salad, Sara.'],
      ['قَلِيلًا مِنَ الْمِلْحِ وَاللَّيْمُونِ، مِنْ فَضْلِكِ.', 'A little salt and lemon, please.'],
      ['بِكَمِ الْبُرْتُقَالُ يَا عَمُّ؟ الْكِيلُو بِعَشَرَةٍ.', 'How much are the oranges, sir? Ten a kilo.'],
    ],
  },
  prayer: {
    label: 'Family: Prayer & Ramadan',
    items: [
      ['هَلْ تَأْتِينَ مَعِي إِلَى صَلَاةِ الْعَصْرِ؟', 'Will you come with me to the afternoon prayer?'],
      ['صُمْتُ الْيَوْمَ كُلَّهُ، وَأَنَا عَطْشَانَةٌ.', 'I fasted the whole day, and I am thirsty.'],
      ['بَعْدَ الصَّلَاةِ نَقْرَأُ الْقُرْآنَ مَعًا.', 'After the prayer we read the Quran together.'],
      ['سَأَشْتَرِي كِتَابًا، وَأُعْطِي جُزْءًا لِلْفُقَرَاءِ.', "I'll buy a book, and give some to the poor."],
      ['عِيدٌ مُبَارَكٌ! تَقَبَّلَ اللّٰهُ مِنَّا وَمِنْكُمْ.', 'Eid Mubarak! May God accept it from us and from you.'],
    ],
  },
  elders: {
    label: 'Family: Grandpa & Grandma',
    items: [
      ['كُنَّا نَسْكُنُ فِي قَرْيَةٍ صَغِيرَةٍ قُرْبَ النَّهْرِ.', 'We lived in a small village near the river.'],
      ['كُنَّا نَلْعَبُ فِي الْحُقُولِ حَتَّى الْمَغْرِبِ.', 'We played in the fields until sunset.'],
      ['مَتَى تَزُورِينَنَا؟ فِي الْعُطْلَةِ الصَّيْفِيَّةِ، إِنْ شَاءَ اللّٰهُ.', 'When will you visit us? In the summer holiday, God willing.'],
      ['تَزْرَعُ جَدَّتِي شَجَرَةَ لَيْمُونٍ صَغِيرَةً مَعِي.', 'Grandma is planting a little lemon tree with me.'],
      ['الصَّبْرُ جَمِيلٌ، وَخُبْزُ الْفُرْنِ لَذِيذٌ.', 'Patience is beautiful, and bread from the oven is delicious.'],
    ],
  },
  play: {
    label: 'Family: Play & Outings',
    items: [
      ['أَنَا أَعُدُّ إِلَى عِشْرِينَ، وَأَنْتِ تَخْتَبِئِينَ.', "I'll count to twenty, and you hide."],
      ['وَجَدْتُكِ خَلْفَ الشَّجَرَةِ! الْآنَ دَوْرِي.', "Found you behind the tree! Now it's my turn."],
      ['السَّمَاءُ مَلِيئَةٌ بِالْغُيُومِ، وَأَسْمَعُ الرَّعْدَ.', 'The sky is full of clouds, and I can hear thunder.'],
      ['هُنَاكَ سَفِينَةٌ كَبِيرَةٌ وَقَارِبٌ صَغِيرٌ.', "There's a big ship and a small boat."],
      ['لَا تَبْتَعِدِي عَنِ الشَّاطِئِ يَا سَارَةُ.', "Don't go far from the shore, Sara."],
    ],
  },
  care: {
    label: 'Family: Care & Manners',
    items: [
      ['أَوْقَعْتُ الْمَاءَ عَلَى رَسْمَتِكِ بِدُونِ قَصْدٍ.', 'I spilled water on your drawing by accident.'],
      ['هَلْ نَرْسُمُ وَاحِدَةً جَدِيدَةً مَعًا؟', 'Shall we draw a new one together?'],
      ['عِنْدِي حَرَارَةٌ يَا دُكْتُورُ، وَرَأْسِي يُؤْلِمُنِي.', 'I have a temperature, doctor, and my head hurts.'],
      ['إِنَّهُ زُكَامٌ بَسِيطٌ، اِشْرَبِي السَّوَائِلَ.', "It's just a cold, drink plenty."],
      ['هَلْ نَظَّفْتِ أَسْنَانَكِ؟ السَّاعَةُ التَّاسِعَةُ.', "Have you brushed your teeth? It's nine o'clock."],
    ],
  },
}

// "How Arabic Works" (sun and moon letters, roots, one / two / many), used by every track from 8–12 up.
export const gemsSet = {
  label: 'How Arabic Works',
  items: [
    ['الشَّمْسُ فِي الصَّبَاحِ، وَالْقَمَرُ فِي اللَّيْلِ.', 'The sun in the morning, and the moon at night.'],
    ['عِنْدِي قَلَمَانِ وَكِتَابَانِ فِي الْمَدْرَسَةِ.', 'I have two pens and two books at school.'],
    ['الْأَوْلَادُ فِي الْمَلْعَبِ، وَالْمُعَلِّمُونَ فِي الْمَكْتَبِ.', 'The children are on the pitch, and the teachers are in the office.'],
    ['الرَّجُلُ يَشْرَبُ الْحَلِيبَ، وَالْوَلَدُ يَأْكُلُ التَّمْرَ.', 'The man drinks the milk, and the boy eats the dates.'],
    ['فِي الْمَكْتَبَةِ كُتُبٌ، وَفِي الْمَسْجِدِ سَجَّادَةٌ.', 'There are books in the library, and a prayer mat in the mosque.'],
  ],
}

