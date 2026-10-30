// Super challenges for the 16–18 track (Pathfinders), keyed by unit id.
import { exploreSuperSet } from './explore'
import { teenShared } from './teen'

export const seniorSuper = {
  'p-script': teenShared.script2,
  'p-reading': teenShared.reading,
  'p-identity': teenShared.identity,
  'p-numbers': teenShared.money,
  'p-travel': teenShared.travel,
  'p-study': {
    label: 'Study, Work & Dreams',
    items: [
      ['عِنْدِي اِمْتِحَانٌ غَدًا، وَأَنَا قَلِقٌ قَلِيلًا.', "I have an exam tomorrow, and I'm a little worried. (a boy speaking)"],
      ['حُلْمِي وَظِيفَةُ طَبِيبٍ أَوْ مُهَنْدِسٍ.', 'My dream is a job as a doctor or an engineer.'],
      ['فَازَ الْفَرِيقُ بِالْمُبَارَاةِ، وَالْجُمْهُورُ سَعِيدٌ.', 'The team won the match, and the fans are happy.'],
      ['فِي رَأْيِي، الْعَمَلُ فِي شَرِكَةٍ رَائِعٌ.', 'In my opinion, working for a company is wonderful.'],
      ['بَعْدَ الْجَامِعَةِ أُرِيدُ وَظِيفَةً فِي شَرِكَةٍ.', 'After university I want a job with a company.'],
    ],
  },
  'p-celebrate': {
    label: 'Celebrations & Weddings',
    items: [
      ['فِي الْعُرْسِ عَرُوسٌ وَعَرِيسٌ وَضُيُوفٌ.', 'At a wedding there are a bride, a groom and guests.'],
      ['أَلْفُ مَبْرُوكٍ! الْعَرُوسُ وَالْعَرِيسُ سَعِيدَانِ.', 'A thousand congratulations! The bride and groom are happy.'],
      ['فِي عِيدِ الْفِطْرِ كَعْكٌ، وَنَلْبَسُ ثِيَابًا جَدِيدَةً.', 'At Eid al-Fitr there are Eid biscuits, and we wear new clothes.'],
      ['فِي حَفْلَةِ الْحِنَّاءِ هَدِيَّةٌ لِلْعَرُوسِ.', 'At the henna party there is a present for the bride.'],
      ['بَعْدَ رَمَضَانَ يَأْتِي عِيدُ الْفِطْرِ.', 'After Ramadan comes Eid al-Fitr.'],
    ],
  },
  'p-history': teenShared.history,
  'p-art': {
    label: 'Poetry, Proverbs & Film',
    items: [
      ['لِلشَّاعِرِ قَصِيدَةٌ عَنِ الْخَيْلِ وَاللَّيْلِ.', 'The poet has a poem about horses and the night.'],
      ['الْعِلْمُ نُورٌ، وَالصَّبْرُ مِفْتَاحُ الْفَرَجِ.', 'Knowledge is light, and patience is the key to relief.'],
      ['أَعْجَبَنِي الْفِيلْمُ، خُصُوصًا الْمُوسِيقَى وَالْأَغَانِي.', 'I liked the film, especially the music and the songs.'],
      ['تَذْكِرَتَيْنِ لِعَرْضِ الْمَسْرَحِ، مِنْ فَضْلِكَ.', 'Two tickets for the theatre show, please.'],
      ['يَدٌ وَاحِدَةٌ لَا تُصَفِّقُ، وَلِكُلِّ جَوَادٍ كَبْوَةٌ.', 'One hand cannot clap, and every good horse stumbles.'],
    ],
  },
  'p-grammar': teenShared.grammar,
  'p-explore': exploreSuperSet,
}
