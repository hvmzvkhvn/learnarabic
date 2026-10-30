// Super challenges for the 13–15 track (Voyagers), keyed by unit id. Sets used by the 16–18 and 18+ tracks too are
// exported as `teenShared`.   'unit-id': { label, script?: true (letters only), items: [['Arabic', 'English'], …] }
import { exploreSuperSet } from './explore'

const set = (label, items, script) => ({ label, items, ...(script ? { script: true } : {}) })

export const teenShared = {
  script1: set('Script 1', [['بَحْر', 'sea'], ['خُبْز', 'bread'], ['تَاج', 'crown'], ['جَدّ', 'grandfather'], ['دُبّ', 'bear'], ['حُبّ', 'love']], true),
  script2: set('The Whole Alphabet', [['كِتَاب', 'book'], ['بَيْت', 'house'], ['شَمْس', 'sun'], ['قَلَم', 'pen'], ['عِيد', 'Eid'], ['أُمّ', 'mother']], true),
  reading: set('Vowel Marks, Joins & Reading', [
    ['الْكِتَابُ فِي الْبَيْتِ.', 'The book is in the house.'],
    ['لِلْوَلَدِ قَلَمٌ أَحْمَرُ.', 'The boy has a red pen.'],
    ['الشَّمْسُ وَالْقَمَرُ فِي السَّمَاءِ.', 'The sun and the moon are in the sky.'],
    ['أَبِي يَأْكُلُ الْخُبْزَ وَالتَّمْرَ.', 'My dad is eating bread and dates.'],
    ['فِي يَدِ الْبِنْتِ مَاءٌ.', "There's water in the girl's hand."],
  ], true),
  identity: set('People & Identity', [
    ['السَّلَامُ عَلَيْكُمْ! اِسْمِي عُمَرُ، وَأَنَا مِنْ لَنْدَنَ.', "Peace be upon you! My name is Omar, and I'm from London."],
    ['مِنْ أَيْنَ أَنْتِ؟ أَهْلِي مِنْ مِصْرَ.', 'Where are you from? My family is from Egypt.'],
    ['هٰذَا أَخِي، وَهٰذِهِ أُخْتِي، وَهٰذِهِ أُمِّي.', 'This is my brother, this is my sister and this is my mum.'],
    ['تَشَرَّفْنَا! مَعَ السَّلَامَةِ يَا عُمَرُ.', 'Nice to meet you! Goodbye, Omar.'],
    ['أَنَا طَالِبٌ، وَأَتَكَلَّمُ الْعَرَبِيَّةَ قَلِيلًا.', "I'm a student, and I speak a little Arabic."],
  ]),
  money: set('Numbers & Money', [
    ['بِكَمْ هٰذَا؟ هٰذَا غَالٍ جِدًّا.', 'How much is this? It is very expensive.'],
    ['هٰذَا الْقَمِيصُ بِخَمْسِينَ دِرْهَمًا فَقَطْ.', 'This shirt is only fifty dirhams.'],
    ['عَشَرَةٌ وَعِشْرُونَ ثَلَاثُونَ، وَثَلَاثُونَ وَعِشْرُونَ خَمْسُونَ.', 'Ten and twenty is thirty, and thirty and twenty is fifty.'],
    ['هَلْ تَقْبَلُونَ الْبِطَاقَةَ؟ أُرِيدُ كِيسًا أَيْضًا.', 'Do you take cards? I would like a bag too.'],
    ['السِّعْرُ رَخِيصٌ، سَآخُذُهُ يَا عَمُّ.', "The price is cheap — I'll take it, sir."],
  ]),
  travel: set('Travel', [
    ['أَيْنَ مَحَطَّةُ الْقِطَارِ؟ هَلْ هِيَ بَعِيدَةٌ؟', 'Where is the train station? Is it far?'],
    ['اِذْهَبْ إِلَى الْأَمَامِ، ثُمَّ إِلَى الْيَسَارِ.', 'Go straight ahead, then to the left.'],
    ['أُرِيدُ تَذْكِرَةً إِلَى الْمَطَارِ، مِنْ فَضْلِكَ.', 'I would like a ticket to the airport, please.'],
    ['مَتَى تَصِلُ الْحَافِلَةُ إِلَى الْفُنْدُقِ؟', 'When does the bus get to the hotel?'],
    ['أَيْنَ حَقِيبَةُ السَّفَرِ وَالْخَرِيطَةُ يَا أَبِي؟', 'Where are the suitcase and the map, Dad?'],
  ]),
  history: set('History & Identity', [
    ['اللُّغَةُ الْعَرَبِيَّةُ لُغَةُ الْقُرْآنِ وَالْعِلْمِ.', 'Arabic is the language of the Quran and of learning.'],
    ['كَانَتْ بَغْدَادُ مَدِينَةَ الْعِلْمِ وَالْحَضَارَةِ.', 'Baghdad was a city of learning and civilisation.'],
    ['لِكُلِّ شَعْبٍ عَلَمٌ وَتُرَاثٌ وَتَارِيخٌ.', 'Every people has a flag, a heritage and a history.'],
    ['أَنَا فَخُورٌ بِلُغَتِي وَتُرَاثِي وَوَطَنِي.', 'I am proud of my language, my heritage and my homeland. (a boy speaking)'],
    ['حَكَمَ الْمُسْلِمُونَ الْأَنْدَلُسَ، وَكَانَتْ بَغْدَادُ مَدِينَةَ الْعِلْمِ.', 'Muslims ruled al-Andalus, and Baghdad was a city of learning.'],
  ]),
  grammar: set('Grammar in Action', [
    ['أَمْسِ ذَهَبْتُ إِلَى الْمَدْرَسَةِ، وَغَدًا سَأَذْهَبُ إِلَى السُّوقِ.', 'Yesterday I went to school, and tomorrow I will go to the market.'],
    ['هَلْ كَتَبْتِ الرِّسَالَةَ؟ سَأَكْتُبُهَا غَدًا.', "Have you written the message? I'll write it tomorrow."],
    ['أَنَا أَنَامُ مُبَكِّرًا، وَهُوَ يَنَامُ مُتَأَخِّرًا.', 'I go to bed early, and he goes to bed late.'],
    ['الصَّبْرُ مِفْتَاحُ الْفَرَجِ، وَمَنْ جَدَّ وَجَدَ.', 'Patience is the key to relief, and whoever works hard succeeds.'],
    ['مَتَى وَصَلْتِ؟ وَصَلْتُ فِي الصَّبَاحِ.', 'When did you arrive? I arrived in the morning.'],
  ]),
}

export const teenSuper = {
  'v-script1': teenShared.script1,
  'v-script2': teenShared.script2,
  'v-reading': teenShared.reading,
  'v-hello': teenShared.identity,
  'v-numbers': teenShared.money,
  'v-travel': teenShared.travel,
  'v-daily': set('Everyday Life', [
    ['الْيَوْمَ يَوْمُ الْأَحَدِ، وَغَدًا يَوْمُ الِاثْنَيْنِ.', 'Today is Sunday, and tomorrow is Monday.'],
    ['الْقَهْوَةُ فِي الصَّبَاحِ، وَالشَّايُ فِي الْمَسَاءِ.', 'Coffee in the morning, and tea in the evening.'],
    ['الْمَطْعَمُ جَدِيدٌ، وَالطَّعَامُ لَذِيذٌ جِدًّا.', 'The restaurant is new, and the food is very tasty.'],
    ['الصَّيْفُ حَارٌّ، وَالشِّتَاءُ بَارِدٌ جِدًّا.', 'Summer is hot, and winter is very cold.'],
    ['الْحِسَابُ مِنْ فَضْلِكَ، كَانَ الْعَشَاءُ لَذِيذًا.', 'The bill, please — dinner was delicious.'],
  ]),
  'v-film': set('Film, Music & Poetry', [
    ['هٰذِهِ الْأُغْنِيَةُ جَمِيلَةٌ، وَصَوْتُ الْمُغَنِّيَةِ جَمِيلٌ جِدًّا.', "This song is lovely, and the singer's voice is very beautiful."],
    ['فِي السِّينَمَا فِيلْمٌ مِصْرِيٌّ جَدِيدٌ.', "There's a new Egyptian film at the cinema."],
    ['لِلشَّاعِرِ قَصِيدَةٌ جَمِيلَةٌ عَنِ الْقَمَرِ.', 'The poet has a beautiful poem about the moon.'],
    ['تَذْكِرَتَيْنِ، مِنْ فَضْلِكَ، لِعَرْضِ السَّاعَةِ السَّابِعَةِ.', "Two tickets, please, for the seven o'clock showing."],
    ['أُحِبُّ الْمُوسِيقَى وَالشِّعْرَ وَالْمَسْرَحَ كَثِيرًا.', 'I really love music, poetry and the theatre.'],
  ]),
  'v-history': teenShared.history,
  'v-grammar': teenShared.grammar,
  'v-explore': exploreSuperSet,
}
