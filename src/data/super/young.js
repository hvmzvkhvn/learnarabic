// Super challenges for the 5–7 track (Little Learners), keyed by unit id. Letter units (script: true) are real
// words made only from letters taught so far; the rest share their sets with 8–12 (see ./shared.js).
import { shared } from './shared'
import { familyYoung } from './youngFamily'

export const youngSuper = {
  'y-l1': {
    label: 'Alif and the be family', script: true,
    items: [['آپ', 'you (respectful)'], ['اب', 'now'], ['باب', 'a chapter'], ['بابا', 'grandpa, or "dad"'], ['پتا', 'a leaf'], ['ٹاٹ', 'sackcloth']],
  },
  'y-l2': {
    label: 'Jeem and daal', script: true,
    items: [['دادا', "dad's father"], ['تاج', 'crown'], ['جب', 'when'], ['چپ', 'quiet'], ['باجا', 'a musical instrument'], ['چچا', "dad's younger brother"]],
  },
  'y-l3': {
    label: 'Re, seen and suaad', script: true,
    items: [['بڑا', 'big'], ['شاباش', 'well done!'], ['سبز', 'green'], ['دس', 'ten'], ['سر', 'head'], ['تارا', 'star']],
  },
  'y-l4': {
    label: 'Ain to qaaf', script: true,
    items: [['باغ', 'garden'], ['برف', 'snow, ice'], ['صاف', 'clean'], ['فرش', 'floor'], ['طرف', 'side, direction'], ['عادت', 'a habit']],
  },
  'y-l5': {
    label: 'Kaaf to noon', script: true,
    items: [['کتاب', 'book'], ['قلم', 'pen'], ['آسمان', 'sky'], ['گلاب', 'rose'], ['ماں', 'mother'], ['کان', 'ear']],
  },
  'y-l6': {
    label: 'The last letters', script: true,
    items: [['گھر', 'house, home'], ['ہاتھی', 'elephant'], ['دودھ', 'milk'], ['بیٹی', 'daughter'], ['پانی', 'water'], ['ہوا', 'air, wind']],
  },
  'y-family': {
    label: 'Family Words',
    items: [
      ['امی اور ابو، بھائی اور بہن۔', 'Mum and Dad, brother and sister.'],
      ['دادا اور دادی، نانا اور نانی۔', "Dad's parents and Mum's parents."],
      ['چچا اور تایا، ماموں اور خالہ۔', 'Uncles and an aunt.'],
      ['لڑکا اور لڑکی، بھائی اور بہن۔', 'A boy and a girl, a brother and a sister.'],
      ['امی، ابو، پھپھو اور خالہ۔', 'Mum, Dad and two aunts.'],
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
  'y-pk': shared.pakistan,
  'y-hello': shared.hello,
}
