// Sentences: { bn, roman, en }   (`bn` = the Urdu text). Standard Pakistani Urdu.
// Urdu verbs change with the speaker's gender: a boy says جاتا ہوں, a girl says جاتی ہوں. Where it matters the English says who is speaking.
const S = (bn, roman, en) => ({ bn, roman, en })

export const sentenceGroups = [
  {
    key: 'introduce',
    title: 'Introduce Yourself',
    emoji: '🙋',
    sentences: [
      S('میرا نام علی ہے۔', 'mera naam Ali hai.', 'My name is Ali.'),
      S('تمہارا نام کیا ہے؟', 'tumhaara naam kya hai?', 'What is your name?'),
      S('میں ٹھیک ہوں۔', 'main ṭheek hoon.', 'I am fine.'),
      S('تم کیسے ہو؟', 'tum kaise ho?', 'How are you?'),
      S('آپ کیسے ہیں؟', 'aap kaise hain?', 'How are you? (respectful)'),
      S('تمہاری عمر کتنی ہے؟', 'tumhaari umar kitni hai?', 'How old are you?'),
      S('میں دس سال کا ہوں۔', 'main das saal ka hoon.', 'I am ten years old. (a boy speaking)'),
      S('میں دس سال کی ہوں۔', 'main das saal ki hoon.', 'I am ten years old. (a girl speaking)'),
      S('تم کہاں رہتے ہو؟', 'tum kahaan rehte ho?', 'Where do you live?'),
      S('میں لاہور میں رہتا ہوں۔', 'main Lahore mein rehta hoon.', 'I live in Lahore. (a boy speaking)'),
    ],
  },
  {
    key: 'things',
    title: 'This and That',
    emoji: '👉',
    sentences: [
      S('یہ کیا ہے؟', 'yeh kya hai?', 'What is this?'),
      S('یہ کتاب ہے۔', 'yeh kitaab hai.', 'This is a book.'),
      S('وہ درخت ہے۔', 'woh darakht hai.', 'That is a tree.'),
      S('یہ میری کتاب ہے۔', 'yeh meri kitaab hai.', 'This is my book.'),
      S('وہ تمہارا بستہ ہے۔', 'woh tumhaara basta hai.', 'That is your school bag.'),
      S('یہ میری امی ہیں۔', 'yeh meri ammi hain.', 'This is my mum.'),
      S('یہ میرے ابو ہیں۔', 'yeh mere abbu hain.', 'This is my dad.'),
      S('وہ میرا بھائی ہے۔', 'woh mera bhaai hai.', 'He is my brother.'),
      S('وہ میری بہن ہے۔', 'woh meri behan hai.', 'She is my sister.'),
    ],
  },
  {
    key: 'daily',
    title: 'Every Day',
    emoji: '☀️',
    sentences: [
      S('میں اسکول جاتا ہوں۔', 'main school jaata hoon.', 'I go to school. (a boy speaking)'),
      S('میں اسکول جاتی ہوں۔', 'main school jaati hoon.', 'I go to school. (a girl speaking)'),
      S('میں روٹی کھاتا ہوں۔', 'main roṭi khaata hoon.', 'I eat roti. (a boy speaking)'),
      S('میں کتاب پڑھتی ہوں۔', 'main kitaab paṛhti hoon.', 'I read a book. (a girl speaking)'),
      S('میں پانی پیتا ہوں۔', 'main paani peeta hoon.', 'I drink water. (a boy speaking)'),
      S('مجھے کھیلنا پسند ہے۔', 'mujhe khelna pasand hai.', 'I like to play.'),
      S('مجھے بھوک لگی ہے۔', 'mujhe bhook lagi hai.', 'I am hungry.'),
      S('مجھے پیاس لگی ہے۔', 'mujhe pyaas lagi hai.', 'I am thirsty.'),
      S('مجھے نیند آ رہی ہے۔', 'mujhe neend aa rahi hai.', 'I am sleepy.'),
      S('مجھے تھوڑا پانی دیں۔', 'mujhe thoṛa paani dein.', 'Please give me a little water.'),
    ],
  },
  {
    key: 'describe',
    title: 'Describe the World',
    emoji: '🌍',
    sentences: [
      S('آسمان نیلا ہے۔', 'aasmaan neela hai.', 'The sky is blue.'),
      S('پتا ہرا ہے۔', 'patta hara hai.', 'The leaf is green.'),
      S('ہاتھی بڑا ہے۔', 'haathi baṛa hai.', 'The elephant is big.'),
      S('چوہا چھوٹا ہے۔', 'chooha chhoṭa hai.', 'The mouse is small.'),
      S('چائے گرم ہے۔', 'chaaye garam hai.', 'The tea is hot.'),
      S('آسمان پر چاند ہے۔', 'aasmaan par chaand hai.', 'There is a moon in the sky.'),
      S('دریا میں مچھلیاں ہیں۔', 'darya mein machhliyaan hain.', 'There are fish in the river.'),
      S('درخت پر پرندہ ہے۔', 'darakht par parinda hai.', 'There is a bird in the tree.'),
      S('آج ہفتہ ہے۔', 'aaj hafta hai.', 'Today is Saturday.'),
      S('آج میری سالگرہ ہے۔', 'aaj meri saalgirah hai.', 'Today is my birthday.'),
    ],
  },
]

// Present-tense patterns. forms = [میں form, تم form, وہ form], boys' / men's endings.
// (Girls and women say -تی instead of -تا / -تے: میں کھاتی ہوں، تم کھاتی ہو، وہ کھاتی ہے.)
const V = (key, inf, infRoman, en, forms, romans, enForms) => ({ key, inf, infRoman, en, forms, romans, enForms })

export const verbs = [
  V('khaana', 'کھانا', 'khaana', 'eat', ['کھاتا ہوں', 'کھاتے ہو', 'کھاتا ہے'], ['khaata hoon', 'khaate ho', 'khaata hai'], ['eat', 'eat', 'eats']),
  V('jaana', 'جانا', 'jaana', 'go', ['جاتا ہوں', 'جاتے ہو', 'جاتا ہے'], ['jaata hoon', 'jaate ho', 'jaata hai'], ['go', 'go', 'goes']),
  V('karna', 'کرنا', 'karna', 'do', ['کرتا ہوں', 'کرتے ہو', 'کرتا ہے'], ['karta hoon', 'karte ho', 'karta hai'], ['do', 'do', 'does']),
  V('parhna', 'پڑھنا', 'paṛhna', 'read', ['پڑھتا ہوں', 'پڑھتے ہو', 'پڑھتا ہے'], ['paṛhta hoon', 'paṛhte ho', 'paṛhta hai'], ['read', 'read', 'reads']),
  V('likhna', 'لکھنا', 'likhna', 'write', ['لکھتا ہوں', 'لکھتے ہو', 'لکھتا ہے'], ['likhta hoon', 'likhte ho', 'likhta hai'], ['write', 'write', 'writes']),
  V('dekhna', 'دیکھنا', 'dekhna', 'see', ['دیکھتا ہوں', 'دیکھتے ہو', 'دیکھتا ہے'], ['dekhta hoon', 'dekhte ho', 'dekhta hai'], ['see', 'see', 'sees']),
  V('aana', 'آنا', 'aana', 'come', ['آتا ہوں', 'آتے ہو', 'آتا ہے'], ['aata hoon', 'aate ho', 'aata hai'], ['come', 'come', 'comes']),
  V('khelna', 'کھیلنا', 'khelna', 'play', ['کھیلتا ہوں', 'کھیلتے ہو', 'کھیلتا ہے'], ['khelta hoon', 'khelte ho', 'khelta hai'], ['play', 'play', 'plays']),
]

export const pronounForms = [
  { bn: 'میں', roman: 'main', en: 'I' },
  { bn: 'تم', roman: 'tum', en: 'You' },
  { bn: 'وہ', roman: 'woh', en: 'He' },
]
