// Super challenges for the 8–12 track (Explorers), keyed by unit id. Each item is [Urdu, English]; never transliterated.
// Letter units (script: true) use only letters and vowel marks taught so far; the rest are longer sentences
// built from words already taught (checked by `npm run lint:super`). Shared sets live in ./shared.js.
import { shared, familySets } from './shared'

export const olderSuper = {
  'o-l1': {
    label: 'Letters I', script: true,
    items: [['آپ', 'you (respectful)'], ['اب', 'now'], ['تاج', 'crown'], ['تخت', 'throne'], ['باپ', 'father'], ['بابا', 'grandpa, or "dad"']],
  },
  'o-l2': {
    label: 'Letters II', script: true,
    items: [['بڑا', 'big'], ['خط', 'a letter (to post)'], ['سبز', 'green'], ['سردار', 'a chief'], ['شاباش', 'well done!'], ['دادا', "dad's father"]],
  },
  'o-l3': {
    label: 'Letters III', script: true,
    items: [['کتاب', 'book'], ['قلم', 'pen'], ['گلاب', 'rose'], ['آسمان', 'sky'], ['باغ', 'garden'], ['برف', 'snow, ice']],
  },
  'o-l4': {
    label: 'Letters IV', script: true,
    items: [['گھر', 'house, home'], ['ہاتھی', 'elephant'], ['دودھ', 'milk'], ['بیٹی', 'daughter'], ['پانی', 'water'], ['ہوا', 'air, wind']],
  },
  'o-asp': {
    label: 'Aspirated Sounds', script: true,
    items: [['جھولا', 'swing'], ['پھول', 'flower'], ['تھالی', 'plate'], ['کھانا', 'food'], ['دھوپ', 'sunshine'], ['گھڑی', 'clock, watch']],
  },
  'o-signs': {
    label: 'Vowel Marks', script: true,
    items: [['کِتاب', 'book'], ['قَلَم', 'pen'], ['گُلاب', 'rose'], ['دِل', 'heart'], ['مُرغی', 'hen'], ['سُورج', 'sun']],
  },
  'o-read': {
    label: 'Read Your First Words',
    items: [
      ['نانا کے ہاتھ میں چائے ہے۔', 'Nana has tea in his hand.'],
      ['نانا کے ہاتھ میں کتاب ہے۔', 'Nana has a book in his hand.'],
      ['دادا کے گھر میں پھول ہیں۔', "There are flowers at Dada's house."],
      ['دوست، بہن، نانا اور دادا۔', 'A friend, a sister, Nana and Dada.'],
      ['امی کا لال پھول اور ابو کی کتاب۔', "Ammi's red flower and Abbu's book."],
    ],
  },
  'o-hello': shared.hello,
  'o-numbers': shared.numbers,
  'o-people': {
    label: 'People & Pronouns',
    items: [
      ['میرے امی ابو، بھائی اور بہن میرا خاندان ہیں۔', 'My mum and dad, brother and sister are my family.'],
      ['تم میرے دوست ہو، اور وہ میرا بھائی ہے۔', 'You are my friend, and he is my brother.'],
      ['آپ میرے استاد ہیں، اور یہ میرے دوست ہیں۔', 'You are my teacher, and these are my friends.'],
      ['ہم سب ایک خاندان ہیں۔', 'We are all one family.'],
      ['یہ میری بہن ہے اور وہ میرا بھائی ہے۔', 'This is my sister and that is my brother.'],
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
      ['چائے گرم ہے اور پانی ٹھنڈا ہے۔', 'The tea is hot and the water is cold.'],
      ['نئی کتاب اچھی ہے، پرانی کتاب بھی اچھی ہے۔', 'The new book is good, and the old book is good too.'],
      ['گھوڑا تیز ہے اور گائے آہستہ ہے۔', 'The horse is fast and the cow is slow.'],
      ['تم کیوں اداس ہو؟ آج تو سب خوش ہیں۔', 'Why are you sad? Everyone is happy today.'],
      ['کون آیا؟ کہاں سے آیا؟ کب آیا؟', 'Who came? Where from? When?'],
    ],
  },
  'o-time': {
    label: 'Days, Months & Seasons',
    items: [
      ['آج پیر ہے اور کل منگل ہے۔', 'Today is Monday and tomorrow is Tuesday.'],
      ['جمعہ کو ہم مسجد جاتے ہیں۔', 'On Friday we go to the mosque.'],
      ['جنوری اور دسمبر میں بہت سردی ہوتی ہے۔', 'It is very cold in January and December.'],
      ['جون میں گرمی ہوتی ہے اور جولائی میں برسات۔', 'It is hot in June, and July brings the monsoon.'],
      ['بہار میں پھول اور خزاں میں پتے۔', 'Flowers in spring and leaves in autumn.'],
    ],
  },
  'o-sent': {
    label: 'Sentences',
    items: [
      ['میرا نام علی ہے اور میں دس سال کا ہوں۔', 'My name is Ali and I am ten years old.'],
      ['یہ میری کتاب ہے اور وہ تمہارا بستہ ہے۔', 'This is my book and that is your school bag.'],
      ['مجھے بھوک لگی ہے، مجھے تھوڑا کھانا دیں۔', 'I am hungry, please give me a little food.'],
      ['آج میری سالگرہ ہے اور سب خوش ہیں۔', 'Today is my birthday and everyone is happy.'],
      ['آسمان نیلا ہے اور درخت پر پرندہ ہے۔', 'The sky is blue and there is a bird in the tree.'],
    ],
  },
  'o-verbs': {
    label: 'Verb Patterns',
    items: [
      ['میں اسکول جاتا ہوں اور وہ گھر آتا ہے۔', 'I go to school and he comes home.'],
      ['تم کتاب پڑھتے ہو اور میں لکھتا ہوں۔', 'You read a book and I write.'],
      ['وہ روٹی کھاتا ہے اور پانی پیتا ہے۔', 'He eats roti and drinks water.'],
      ['تم کیا دیکھتے ہو؟ میں چاند دیکھتا ہوں۔', 'What do you see? I see the moon.'],
      ['ہم شام کو پارک میں کھیلتے ہیں۔', 'We play in the park in the evening.'],
    ],
  },
  'o-pk': shared.pakistan,
}
