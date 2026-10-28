// Super challenges for the 5–7 track (Little Learners), keyed by unit id. Letter units (script: true) are real
// words made only from letters taught so far; the rest share their sets with 8–12 (see ./shared.js).
// The first letter unit (ا ب ت ث) has no set: those four letters make no words a young child would know.
import { shared } from './shared'
import { familyYoung } from './youngFamily'

export const youngSuper = {
  'y-l2': {
    label: 'Jiim and daal', script: true,
    items: [['دُبّ', 'bear'], ['جَدّ', 'grandfather'], ['دَجَاج', 'chickens'], ['تَاج', 'crown'], ['بَاب', 'door'], ['خَدّ', 'cheek']],
  },
  'y-l3': {
    label: 'Raa, siin and ṣaad', script: true,
    items: [['بَحْر', 'sea'], ['خُبْز', 'bread'], ['شَجَر', 'trees'], ['دَرْس', 'lesson'], ['جَزَر', 'carrots'], ['شَرِبَ', 'he drank']],
  },
  'y-l4': {
    label: 'Ṭaa to qaaf', script: true,
    items: [['ضِفْدَع', 'frog'], ['صَقْر', 'falcon'], ['شَعْر', 'hair'], ['طَبَق', 'plate'], ['فَرَس', 'horse'], ['سَقْف', 'ceiling']],
  },
  'y-l5': {
    label: 'Kaaf to nuun', script: true,
    items: [['قَمَر', 'moon'], ['قَلَم', 'pen'], ['كَلْب', 'dog'], ['جَمَل', 'camel'], ['عَسَل', 'honey'], ['نَمِر', 'tiger']],
  },
  'y-l6': {
    label: 'The last letters', script: true,
    items: [['بَيْت', 'house'], ['قِطَّة', 'cat'], ['وَرْدَة', 'rose'], ['سَمَاء', 'sky'], ['فِيل', 'elephant'], ['شَجَرَة', 'tree']],
  },
  'y-family': {
    label: 'Family Words',
    items: [
      ['أُمٌّ وَأَبٌ، وَأَخٌ وَأُخْتٌ.', 'A mother and a father, a brother and a sister.'],
      ['جَدٌّ وَجَدَّةٌ، وَعَمٌّ وَعَمَّةٌ.', "A grandfather and a grandmother, and Dad's brother and sister."],
      ['خَالٌ وَخَالَةٌ، وَابْنٌ وَبِنْتٌ.', "Mum's brother and sister, a son and a daughter."],
      ['وَلَدٌ وَبِنْتٌ، وَطِفْلٌ وَصَدِيقٌ.', 'A boy and a girl, a child and a friend.'],
      ['أُمٌّ، وَأَبٌ، وَجَدٌّ، وَجَدَّةٌ، وَأَخٌ.', 'A mother, a father, a grandfather, a grandmother and a brother.'],
    ],
  },
  'y-ft-morning': familyYoung.morning,
  'y-ft-school': familyYoung.school,
  'y-ft-food': familyYoung.food,
  'y-ft-prayer': familyYoung.prayer,
  'y-ft-elders': familyYoung.elders,
  'y-ft-play': familyYoung.play,
  'y-ft-care': familyYoung.care,
  'y-numbers': shared.numbers,
  'y-colours': shared.colours,
  'y-animals': shared.animals,
  'y-food': shared.food,
  'y-body': shared.body,
  'y-around': shared.around,
  'y-arab': shared.arab,
  'y-hello': shared.hello,
}
