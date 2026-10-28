// Super challenges for the 13–15 track (Voyagers), keyed by unit id. Sets used by the 16–18 and 18+ tracks too are
// exported as `teenShared`.   'unit-id': { label, script?: true (letters only), items: [['Urdu', 'English'], …] }
import { exploreSuperSet } from './explore'

const set = (label, items, script) => ({ label, items, ...(script ? { script: true } : {}) })

export const teenShared = {
  script1: set('Script 1', [['تاج', 'crown'], ['تخت', 'throne'], ['باپ', 'father'], ['دادا', "dad's father"], ['بڑا', 'big'], ['آج', 'today']], true),
  script2: set('The Whole Alphabet', [['کتاب', 'book'], ['گھر', 'house, home'], ['پھول', 'flower'], ['شیر', 'lion'], ['قلم', 'pen'], ['عید', 'Eid']], true),
  reading: set('Vowel Marks, Joins & Reading', [
    ['امی چائے پیتی ہیں۔', 'Ammi drinks tea.'],
    ['دادا کے ہاتھ میں کتاب ہے۔', 'Dada has a book in his hand.'],
    ['لال پھول بہت خوبصورت ہے۔', 'The red flower is very beautiful.'],
    ['گھر میں پانی نہیں ہے۔', 'There is no water in the house.'],
    ['ابو اور بہن آم کھاتے ہیں۔', 'Abbu and my sister are eating mangoes.'],
  ], true),
  identity: set('People & Identity', [
    ['السلام علیکم! میرا نام عمر ہے اور میں پاکستانی ہوں۔', "Peace be upon you! My name is Umar and I'm Pakistani."],
    ['آپ کہاں سے ہیں؟ میرے والدین لاہور سے ہیں۔', 'Where are you from? My parents are from Lahore.'],
    ['یہ میرا بھائی ہے اور وہ میری بہن ہے۔', 'This is my brother and that is my sister.'],
    ['آپ سے مل کر خوشی ہوئی، خدا حافظ۔', 'It was nice to meet you, goodbye.'],
    ['میں طالب علم ہوں، آپ کیا کام کرتے ہیں؟', 'I am a student — what do you do?'],
  ]),
  money: set('Numbers & Money', [
    ['یہ کتنے کا ہے؟ یہ بہت مہنگا ہے۔', 'How much is this? It is very expensive.'],
    ['ایک کلو آم تین سو روپے کا ہے۔', 'A kilo of mangoes costs three hundred rupees.'],
    ['تھوڑا کم کر دیں، دو سو روپے ٹھیک ہیں۔', 'Bring it down a little — two hundred rupees is fair.'],
    ['دس اور بیس تیس، اور تیس اور بیس پچاس۔', 'Ten and twenty is thirty, and thirty and twenty is fifty.'],
    ['رسید دے دیں اور بقایا بھی۔', 'Please give me the receipt and my change too.'],
  ]),
  travel: set('Travel', [
    ['اسٹیشن یہاں سے کتنی دور ہے؟', 'How far is the station from here?'],
    ['سیدھا جائیں، پھر بائیں مڑیں، ہوٹل قریب ہے۔', 'Go straight, then turn left; the hotel is near.'],
    ['مجھے ہوائی اڈے جانا ہے، ایک ٹکٹ دے دیں۔', 'I need to go to the airport — one ticket, please.'],
    ['ریل گاڑی کتنے بجے چلے گی؟', 'What time will the train leave?'],
    ['میرا سامان اور نقشہ کہاں ہے؟', 'Where are my luggage and my map?'],
  ]),
  film: set('Film, Music & Poetry', [
    ['یہ گانا بہت اچھا ہے اور گلوکار کی آواز خوبصورت ہے۔', "This song is very good and the singer's voice is beautiful."],
    ['یہ اداکار ایک اچھا گلوکار بھی ہے۔', 'This actor is a good singer too.'],
    ['آج رات سات بجے ایک نئی فلم ہے۔', "There's a new film at seven tonight."],
    ['قوالی اور غزل مجھے بہت پسند ہیں۔', 'I really like qawwali and ghazals.'],
    ['مچھلی جل کی رانی ہے، جیون اس کا پانی ہے۔', 'The fish is the queen of the water, water is her life.'],
  ]),
  history: set('History & Identity', [
    ['پاکستان ۱۴ اگست ۱۹۴۷ کو آزاد ہوا۔', 'Pakistan became independent on 14 August 1947.'],
    ['قائد اعظم اور علامہ اقبال قوم کا ورثہ ہیں۔', 'The Quaid-e-Azam and Allama Iqbal are part of the nation\'s heritage.'],
    ['لاہور میں مغلوں کا قلعہ اور بادشاہی مسجد ہے۔', 'Lahore has the Mughal fort and the Badshahi Mosque.'],
    ['ہجرت کے بعد آزادی کا جشن ہوا۔', 'After the migration, freedom was celebrated.'],
    ['اردو پاکستان کی قومی زبان اور ثقافت ہے۔', "Urdu is Pakistan's national language and culture."],
  ]),
  grammar: set('Grammar in Action', [
    ['میں کل لاہور جاؤں گا اور پرسوں آؤں گا۔', "I'll go to Lahore tomorrow and come the day after."],
    ['تم کب آئے ہو؟ میں آج پہنچا ہوں۔', 'When did you come? I arrived today.'],
    ['آپ کب پہنچیں گے؟ ہم شام کو بیٹھیں گے۔', 'When will you arrive? We will sit together in the evening.'],
    ['وہ صبح کتاب پڑھتا ہے اور شام کو لکھتا ہے۔', 'He reads a book in the morning and writes in the evening.'],
    ['میرے خیال میں یہ صحیح ہے، شاید آپ متفق ہوں۔', 'I think this is right — perhaps you agree.'],
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
    ['آج پیر ہے اور کل منگل ہو گا۔', 'Today is Monday and tomorrow will be Tuesday.'],
    ['جنوری میں سردی اور جون میں گرمی ہوتی ہے۔', 'It is cold in January and hot in June.'],
    ['شام کو ریسٹورنٹ میں مزیدار نہاری ہے۔', 'In the evening there is delicious nihari at the restaurant.'],
    ['یہ کباب بہت تیکھا ہے مگر مزیدار ہے۔', 'This kebab is very spicy but delicious.'],
    ['مینو، بل اور لسی، شکریہ۔', 'The menu, the bill and a lassi, thank you.'],
  ]),
  'v-film': teenShared.film,
  'v-history': teenShared.history,
  'v-grammar': teenShared.grammar,
  'v-explore': exploreSuperSet,
}
