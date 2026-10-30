// Super challenges for the 8–12 track (Explorers), keyed by unit id. Each item is [Arabic, English]; never transliterated.
// Letter units (script: true) use only letters taught so far; the rest are longer sentences built from words
// already taught (checked by `npm run lint:super`). Shared sets live in ./shared.js.
import { shared, familySets, gemsSet } from './shared'

export const olderSuper = {
  'o-l1': {
    label: 'Letters I', script: true,
    items: [['بَاب', 'door'], ['تَاج', 'crown'], ['حُبّ', 'love'], ['حَجّ', 'the Hajj'], ['ثَابِت', 'steady']],
  },
  'o-l2': {
    label: 'Letters II', script: true,
    items: [['دُبّ', 'bear'], ['جَدّ', 'grandfather'], ['بَحْر', 'sea'], ['خُبْز', 'bread'], ['شَجَر', 'trees'], ['دَرْس', 'lesson']],
  },
  'o-l3': {
    label: 'Letters III', script: true,
    items: [['قَمَر', 'moon'], ['قَلَم', 'pen'], ['كَلْب', 'dog'], ['جَمَل', 'camel'], ['ضِفْدَع', 'frog'], ['صَقْر', 'falcon']],
  },
  'o-l4': {
    label: 'Letters IV', script: true,
    items: [['بَيْت', 'house'], ['قِطَّة', 'cat'], ['وَرْدَة', 'rose'], ['سَمَاء', 'sky'], ['فِيل', 'elephant'], ['مَدْرَسَة', 'school']],
  },
  'o-asp': {
    label: 'Hamza & Special Shapes', script: true,
    items: [['أُمّ', 'mother'], ['أَسَد', 'lion'], ['إِصْبَع', 'finger'], ['مُسْتَشْفَى', 'hospital'], ['سُؤَال', 'question'], ['ذِئْب', 'wolf']],
  },
  'o-signs': {
    label: 'Vowel Marks', script: true,
    items: [['كُرْسِيّ', 'chair'], ['شَمْس', 'sun'], ['قِطَّة', 'cat'], ['مَدْرَسَة', 'school'], ['جَمِيل', 'beautiful'], ['شُكْرًا', 'thank you']],
  },
  'o-read': {
    label: 'Read Your First Words',
    items: [
      ['الْكِتَابُ وَالْقَلَمُ فِي يَدِ الْوَلَدِ.', "The book and the pen are in the boy's hand."],
      ['أُمٌّ وَأَبٌ وَأَخٌ وَجَدٌّ وَبِنْتٌ.', 'A mother, a father, a brother, a grandfather and a girl.'],
      ['الْخُبْزُ وَالتَّمْرُ وَالْمَاءُ فِي الْبَيْتِ.', 'The bread, the dates and the water are in the house.'],
      ['الشَّمْسُ وَالْقَمَرُ، وَالْبَابُ وَالْبَيْتُ وَالْكِتَابُ.', 'The sun and the moon, the door, the house and the book.'],
      ['لِلْوَلَدِ أَنْفٌ وَفَمٌ وَيَدٌ وَكِتَابٌ.', 'The boy has a nose, a mouth, a hand and a book.'],
    ],
  },
  'o-hello': shared.hello,
  'o-numbers': shared.numbers,
  'o-people': {
    label: 'People & Pronouns',
    items: [
      ['أَنَا وَأَبِي وَأُمِّي وَأُخْتِي عَائِلَةٌ.', 'My dad, my mum, my sister and I are a family.'],
      ['أَنْتَ صَدِيقِي، وَهُوَ أَخِي، وَهِيَ أُخْتِي.', 'You are my friend, he is my brother and she is my sister.'],
      ['أَنْتِ صَدِيقَتِي، وَهٰذِهِ أُمِّي، وَهٰذَا أَبِي.', 'You are my friend, this is my mum and this is my dad.'],
      ['نَحْنُ عَائِلَةٌ: جَدٌّ وَجَدَّةٌ وَعَمٌّ وَخَالٌ.', 'We are a family: a grandfather, a grandmother and two uncles.'],
      ['هٰذَا عَمِّي، وَهٰذِهِ خَالَتِي، وَهٰذَا ابْنُهَا.', "This is my uncle, this is my aunt, and this is her son."],
    ],
  },
  'o-ft-morning': familySets.morning,
  'o-ft-school': familySets.school,
  'o-ft-food': familySets.food,
  'o-ft-prayer': familySets.prayer,
  'o-ft-elders': familySets.elders,
  'o-ft-play': familySets.play,
  'o-ft-care': familySets.care,
  'o-colours': shared.colours,
  'o-animals': shared.animals,
  'o-food': shared.food,
  'o-body': shared.body,
  'o-around': shared.around,
  'o-describe': {
    label: 'Describing & Doing',
    items: [
      ['الْفِيلُ كَبِيرٌ، وَالْفَأْرُ صَغِيرٌ جِدًّا.', 'The elephant is big, and the mouse is very small.'],
      ['الشَّايُ حَارٌّ، وَالْمَاءُ بَارِدٌ، وَالْخُبْزُ جَدِيدٌ.', 'The tea is hot, the water is cold and the bread is fresh.'],
      ['أَيْنَ الْقَلَمُ الْجَدِيدُ؟ وَمَتَى نَلْعَبُ؟', 'Where is the new pen? And when do we play?'],
      ['الْحِصَانُ سَرِيعٌ، وَالْجَمَلُ بَطِيءٌ وَطَوِيلٌ.', 'The horse is fast, and the camel is slow and tall.'],
      ['لِمَاذَا الْوَلَدُ حَزِينٌ؟ وَمَنْ هُوَ؟', 'Why is the boy sad? And who is he?'],
    ],
  },
  'o-time': {
    label: 'Days, Months & Seasons',
    items: [
      ['السَّبْت، الْأَحَد، الِاثْنَيْن، الثُّلَاثَاء، الْأَرْبِعَاء.', 'Saturday, Sunday, Monday, Tuesday, Wednesday.'],
      ['فِي الشِّتَاءِ يَنَايِرُ وَفِبْرَايِرُ وَدِيسَمْبِرُ.', 'Winter has January, February and December.'],
      ['فِي الصَّيْفِ يُونْيُو وَيُولْيُو وَأَغُسْطُسُ.', 'Summer has June, July and August.'],
      ['الرَّبِيعُ جَمِيلٌ، وَالْخَرِيفُ بَارِدٌ قَلِيلًا.', 'Spring is beautiful, and autumn is a little cold.'],
      ['يَوْمَ الْجُمُعَةِ نَذْهَبُ إِلَى الْمَسْجِدِ.', 'On Friday we go to the mosque.'],
    ],
  },
  'o-sent': {
    label: 'Sentences',
    items: [
      ['اِسْمِي يُوسُفُ، وَعُمْرِي عَشْرُ سَنَوَاتٍ.', 'My name is Yusuf, and I am ten years old.'],
      ['هٰذَا كِتَابِي، وَهٰذِهِ حَقِيبَتُكَ يَا يُوسُفُ.', 'This is my book, and this is your bag, Yusuf.'],
      ['أَنَا جَائِعَةٌ، أَعْطِنِي قَلِيلًا مِنَ الْخُبْزِ.', 'I am hungry (a girl speaking), give me a little bread.'],
      ['الْيَوْمَ عِيدُ مِيلَادِي، وَالسَّمَاءُ زَرْقَاءُ.', 'Today is my birthday, and the sky is blue.'],
      ['الْقَمَرُ فِي السَّمَاءِ، وَعَلَى الشَّجَرَةِ عُصْفُورٌ.', 'The moon is in the sky, and there is a bird in the tree.'],
    ],
  },
  'o-verbs': {
    label: 'Verb Patterns',
    items: [
      ['أَنَا أَذْهَبُ إِلَى الْمَدْرَسَةِ، وَهُوَ يَلْعَبُ.', 'I go to school, and he plays.'],
      ['أَنْتَ تَقْرَأُ كِتَابًا، وَأَنَا أَكْتُبُ.', 'You read a book, and I write.'],
      ['هُوَ يَأْكُلُ الْخُبْزَ وَيَشْرَبُ الْمَاءَ.', 'He eats bread and drinks water.'],
      ['مَاذَا تَسْمَعُ يَا يُوسُفُ؟ أَسْمَعُ الْمَطَرَ.', 'What can you hear, Yusuf? I can hear the rain.'],
      ['أَنَا آكُلُ التَّمْرَ، ثُمَّ أَنَامُ قَلِيلًا.', 'I eat dates, then I sleep a little.'],
    ],
  },
  'o-gems': gemsSet,
  'o-arab': shared.arab,
}
