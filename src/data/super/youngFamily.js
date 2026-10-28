// Super challenge sets for the 5–7 Family units. Those conversations are shorter than the 8–12 ones,
// so these sets only use words from the 5–7 lines.
const S = (label, items) => ({ label, items })

export const familyYoung = {
  morning: S('Family: Mornings', [
    ['صَبَاحُ الْخَيْرِ يَا سَارَةُ، الْفُطُورُ جَاهِزٌ.', 'Good morning, Sara, breakfast is ready.'],
    ['اِغْسِلِي وَجْهَكِ، وَالْبَسِي حِذَاءَكِ.', 'Wash your face, and put on your shoes.'],
    ['فِي الْعُلْبَةِ خُبْزٌ وَجُبْنٌ وَتُفَّاحَةٌ.', 'In the lunchbox there is bread, cheese and an apple.'],
    ['أَيْنَ حَقِيبَتُكِ يَا سَارَةُ؟ هَا هِيَ!', 'Where is your bag, Sara? Here it is!'],
    ['صَبَاحُ النُّورِ يَا أُمِّي، شُكْرًا لَكِ!', 'Good morning to you, Mum, thank you!'],
  ]),
  school: S('Family: School Days', [
    ['كَيْفَ كَانَتِ الْمَدْرَسَةُ يَا سَارَةُ؟', 'How was school, Sara?'],
    ['كَانَتْ جَمِيلَةً جِدًّا يَا أُمِّي!', 'It was really lovely, Mum!'],
    ['مَرْحَبًا يَا لَيْلَى! هَلْ نَلْعَبُ مَعًا؟', 'Hi, Layla! Shall we play together?'],
    ['يَا أَبِي، هٰذَا السُّؤَالُ صَعْبٌ جِدًّا.', 'Dad, this question is very hard.'],
    ['ثَلَاثَةٌ وَأَرْبَعَةٌ سَبْعَةٌ، يَا أَبِي!', 'Three and four is seven, Dad!'],
  ]),
  food: S('Family: Food & Kitchen', [
    ['الطَّعَامُ جَاهِزٌ، بِسْمِ اللّٰهِ!', 'The food is ready, Bismillah!'],
    ['هَيَّا نَذْهَبُ إِلَى السُّوقِ يَا أَبِي.', "Let's go to the market, Dad."],
    ['أُرِيدُ تُفَّاحًا أَحْمَرَ وَجَزَرًا.', 'I want red apples and carrots.'],
    ['هَيَّا نَطْبُخُ شُورْبَةَ عَدَسٍ مَعًا!', "Let's cook lentil soup together!"],
    ['الْحَمْدُ لِلّٰهِ، شَبِعْتُ يَا أُمِّي.', "Praise be to God, I'm full, Mum."],
  ]),
  prayer: S('Family: Prayer & Ramadan', [
    ['هَيَّا إِلَى الْمَسْجِدِ يَا جَدِّي!', "Let's go to the mosque, Grandpa!"],
    ['حَانَ وَقْتُ الْإِفْطَارِ، رَمَضَانُ كَرِيمٌ!', "It's time for iftar, Ramadan Kareem!"],
    ['نَأْكُلُ التَّمْرَ أَوَّلًا، وَنَشْرَبُ الْمَاءَ.', 'We eat dates first, and we drink water.'],
    ['عِيدٌ مُبَارَكٌ يَا عَمِّي، شُكْرًا جَزِيلًا!', 'Eid Mubarak, Uncle, thank you very much!'],
    ['الْمَسْجِدُ جَمِيلٌ جِدًّا، اِخْلَعِي حِذَاءَكِ.', 'The mosque is very beautiful, take your shoes off.'],
  ]),
  elders: S('Family: Grandpa & Grandma', [
    ['يَا جَدِّي، اِحْكِ لِي قِصَّةً.', 'Grandpa, tell me a story.'],
    ['كَانَ هُنَاكَ جَمَلٌ صَغِيرٌ فِي الصَّحْرَاءِ.', 'There was a little camel in the desert.'],
    ['مَرْحَبًا يَا جَدَّتِي، اِشْتَقْتُ إِلَيْكِ!', 'Hello, Grandma, I missed you!'],
    ['هَيَّا نَسْقِي الزُّهُورَ فِي الْحَدِيقَةِ.', "Let's water the flowers in the garden."],
    ['مَا أَجْمَلَ الْوُرُودَ يَا جَدَّتِي!', 'How beautiful the roses are, Grandma!'],
  ]),
  play: S('Family: Play & Outings', [
    ['هَيَّا نَلْعَبُ الْغُمَّيْضَةَ يَا يُوسُفُ!', "Let's play hide and seek, Yusuf!"],
    ['وَاحِد، اِثْنَان، ثَلَاثَة… وَجَدْتُكَ!', 'One, two, three… found you!'],
    ['أُحِبُّ صَوْتَ الْمَطَرِ يَا أُمِّي.', 'I love the sound of the rain, Mum.'],
    ['الْمَاءُ أَزْرَقُ، وَالشَّمْسُ حَارَّةٌ.', 'The water is blue, and the sun is hot.'],
    ['هَيَّا نَبْنِي قَلْعَةً مِنَ الرَّمْلِ!', "Let's build a sandcastle!"],
  ]),
  care: S('Family: Care & Manners', [
    ['أَنَا آسِفَةٌ يَا أُمِّي، كَسَرْتُ الْكُوبَ.', "I'm sorry, Mum, I broke the cup."],
    ['لَا بَأْسَ، الْمُهِمُّ أَنَّكِ بِخَيْرٍ.', "Never mind, what matters is that you're OK."],
    ['حَانَ وَقْتُ النَّوْمِ، أَحْلَامٌ سَعِيدَةٌ!', "It's bedtime, sweet dreams!"],
    ['بَطْنِي يُؤْلِمُنِي يَا دُكْتُورُ.', 'My tummy hurts, doctor.'],
    ['اِشْرَبِي الْمَاءَ وَارْتَاحِي يَا سَارَةُ.', 'Drink water and rest, Sara.'],
  ]),
}
