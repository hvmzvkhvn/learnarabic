// Super challenge sets used by both the 5–7 and the 8–12 track (the same words are taught in both).
// Each item is [Urdu, English]. Sentences avoid gendered "I" verbs, so they suit every learner.

export const shared = {
  hello: {
    label: 'Say Hello',
    items: [
      ['السلام علیکم! آپ کیسے ہیں؟ میں ٹھیک ہوں۔', 'Peace be upon you! How are you? I am fine.'],
      ['صبح بخیر! خوش آمدید، آپ کیسے ہیں؟', 'Good morning! Welcome, how are you?'],
      ['وعلیکم السلام! میں ٹھیک ہوں، شکریہ۔', 'And peace be upon you! I am fine, thank you.'],
      ['خوش آمدید! میں ٹھیک ہوں، شکریہ۔', 'Welcome! I am fine, thank you.'],
      ['صبح بخیر! میں ٹھیک ہوں، آپ کیسے ہیں؟', 'Good morning! I am fine, how are you?'],
    ],
  },
  numbers: {
    label: 'Numbers',
    items: [
      ['دو اور تین پانچ، چار اور چھ دس۔', 'Two and three is five, four and six is ten.'],
      ['ایک اور ایک دو، دو اور دو چار۔', 'One and one is two, two and two is four.'],
      ['سات اور تین دس، آٹھ اور ایک نو۔', 'Seven and three is ten, eight and one is nine.'],
      ['پانچ اور پانچ دس، اور دس اور صفر دس۔', 'Five and five is ten, and ten and zero is ten.'],
      ['نو اور ایک دس، چھ اور ایک سات۔', 'Nine and one is ten, six and one is seven.'],
    ],
  },
  colours: {
    label: 'Colours',
    items: [
      ['ایک لال، دو نیلے اور تین ہرے۔', 'One red, two blue and three green.'],
      ['پانچ پیلے اور چار نارنجی۔', 'Five yellow and four orange.'],
      ['سفید، کالا، لال، نیلا اور ہرا۔', 'White, black, red, blue and green.'],
      ['لال اور پیلا، نیلا اور ہرا، کالا اور سفید۔', 'Red and yellow, blue and green, black and white.'],
      ['سات جامنی، آٹھ بھورے اور نو سفید۔', 'Seven purple, eight brown and nine white.'],
    ],
  },
  animals: {
    label: 'Animals',
    items: [
      ['بلی کالی ہے اور کتا بھورا ہے۔', 'The cat is black and the dog is brown.'],
      ['طوطا ہرا ہے اور گائے سفید ہے۔', 'The parrot is green and the cow is white.'],
      ['ایک شیر، دو ہاتھی اور تین بندر۔', 'One lion, two elephants and three monkeys.'],
      ['مچھلی نارنجی ہے اور مینڈک ہرا ہے۔', 'The fish is orange and the frog is green.'],
      ['چار بکریاں، پانچ مرغیاں اور ایک گھوڑا۔', 'Four goats, five hens and one horse.'],
    ],
  },
  food: {
    label: 'Food & Drink',
    items: [
      ['آم پیلا ہے اور سیب لال ہے۔', 'The mango is yellow and the apple is red.'],
      ['بندر کیلا کھاتا ہے اور خرگوش گاجر۔', 'The monkey eats a banana and the rabbit a carrot.'],
      ['انڈا، روٹی، دودھ اور چائے۔', 'Egg, roti, milk and tea.'],
      ['تربوز ہرا ہے اور انگور جامنی ہیں۔', 'The watermelon is green and the grapes are purple.'],
      ['چاول، گاجر، آلو اور پیاز۔', 'Rice, carrots, potatoes and onions.'],
    ],
  },
  body: {
    label: 'My Body',
    items: [
      ['میری دو آنکھیں اور دو کان ہیں۔', 'I have two eyes and two ears.'],
      ['ایک ناک، ایک منہ اور ایک سر۔', 'One nose, one mouth and one head.'],
      ['ہاتھ میں پانچ انگلیاں ہوتی ہیں۔', 'A hand has five fingers.'],
      ['سفید دانت، کالے بال اور لال زبان۔', 'White teeth, black hair and a red tongue.'],
      ['دانت صاف کرو اور ہاتھ دھو لو۔', 'Brush your teeth and wash your hands.'],
    ],
  },
  around: {
    label: 'Around Us',
    items: [
      ['سورج پیلا ہے اور بادل سفید ہیں۔', 'The sun is yellow and the clouds are white.'],
      ['چاند، ستارہ، سورج اور بادل۔', 'The moon, a star, the sun and the clouds.'],
      ['گھر کے پاس ایک درخت ہے۔', 'There is a tree near the house.'],
      ['کتاب، قلم، کرسی اور بستر۔', 'A book, a pen, a chair and a bed.'],
      ['میری کتاب اور قلم کرسی پر ہیں۔', 'My book and pen are on the chair.'],
    ],
  },
  pakistan: {
    label: 'Pakistan',
    items: [
      ['پاکستان کا جھنڈا ہرا اور سفید ہے۔', 'Pakistan\'s flag is green and white.'],
      ['جھنڈے پر چاند تارا ہے۔', 'There is a crescent and star on the flag.'],
      ['مارخور بھورا اور سفید ہے۔', 'The markhor is brown and white.'],
      ['پاکستان میں آم بہت میٹھے ہوتے ہیں۔', 'Mangoes are very sweet in Pakistan.'],
      ['رکشہ، کرکٹ، آم اور چنبیلی۔', 'Rickshaws, cricket, mangoes and jasmine.'],
    ],
  },
}

// One set per Family unit, built from the 8–12 conversations (5–7 has its own, in ./youngFamily.js).
export const familySets = {
  morning: {
    label: 'Family: Mornings',
    items: [
      ['صبح ہو گئی، جلدی سے منہ دھو لو۔', 'It is morning, quickly wash your face.'],
      ['امی نے ناشتہ بنا لیا، پراٹھا تیار ہے۔', 'Ammi has made breakfast, the paratha is ready.'],
      ['بستہ، بوتل اور ٹفن تیار ہیں۔', 'The school bag, the bottle and the lunchbox are ready.'],
      ['ابو گاڑی میں انتظار کر رہے ہیں۔', 'Abbu is waiting in the car.'],
      ['ٹفن میں آلو کا پراٹھا اور اچار ہے۔', 'There is a potato paratha and pickle in the lunchbox.'],
    ],
  },
  school: {
    label: 'Family: School Days',
    items: [
      ['آج ہم نے سائنس میں پودے لگائے۔', 'Today we planted plants in science.'],
      ['کھانے کے بعد ہوم ورک کرنا ہے۔', 'There is homework to do after lunch.'],
      ['علی میرا بہت اچھا دوست ہے۔', 'Ali is my very good friend.'],
      ['اردو میں ایک کہانی لکھنی ہے۔', 'A story has to be written in Urdu.'],
      ['املا دیکھ لیں گے، لیکن پہلے خود کوشش کرو۔', 'I\'ll check the spelling, but first try by yourself.'],
    ],
  },
  food: {
    label: 'Family: Food & Kitchen',
    items: [
      ['کھانا تیار ہے، سب کو بلا لو۔', 'The food is ready, call everyone.'],
      ['آلو گوشت اور چاول بہت مزے کے ہیں۔', 'The meat with potatoes and the rice are delicious.'],
      ['ٹماٹر، پیاز اور آم کتنے کے ہیں؟', 'How much are the tomatoes, onions and mangoes?'],
      ['پہلے ہاتھ دھو لو، پھر بسم اللہ پڑھو۔', 'First wash your hands, then say Bismillah.'],
      ['امی بریانی بنا رہی ہیں اور خوشبو اچھی ہے۔', 'Ammi is making biryani and it smells good.'],
    ],
  },
  prayer: {
    label: 'Family: Prayer & Ramzan',
    items: [
      ['عصر کی اذان ہو گئی، مسجد چلو۔', 'The call to the afternoon prayer has been made, come to the mosque.'],
      ['نماز سے پہلے وضو کرتے ہیں۔', 'We do wudu before the prayer.'],
      ['کھجور سے روزہ کھولتے ہیں، بسم اللہ۔', 'We break the fast with a date, Bismillah.'],
      ['عید پر نئے کپڑے کیسے لگ رہے ہیں؟', 'How do the new clothes look for Eid?'],
      ['عید مبارک، امی! اللہ آپ کو خوش رکھے۔', 'Eid Mubarak, Ammi! May Allah keep you happy.'],
    ],
  },
  elders: {
    label: 'Family: Nana, Dada & Nani',
    items: [
      ['نانا جان گاؤں کی کہانی سناتے ہیں۔', 'Nana tells the story of the village.'],
      ['دادا جان کے باغ میں ٹماٹر کے پودے ہیں۔', 'There are tomato plants in Dada\'s garden.'],
      ['نانی جان عید پر ہمارے پاس آئیں گی۔', 'Nani will come to visit us at Eid.'],
      ['نانا لالٹین کی روشنی میں پڑھتے تھے۔', 'Nana used to study by the light of a lantern.'],
      ['نانا جان، یہ آپ کی چائے ہے۔', 'Nana, this is your tea.'],
    ],
  },
  play: {
    label: 'Family: Play & Outings',
    items: [
      ['چھٹی کے دن پارک میں سائیکل چلائیں۔', 'Let\'s ride bikes in the park on the day off.'],
      ['زور کی بارش ہو رہی ہے، کھڑکی بند کر دو۔', 'It\'s raining hard, close the window.'],
      ['برسات میں امی پکوڑے بناتی ہیں۔', 'In the monsoon Ammi makes pakoras.'],
      ['شام کو پارک میں کرکٹ کی پریکٹس ہے۔', 'There is cricket practice in the park in the evening.'],
      ['علی، کل اسکول میں کرکٹ میچ ہے۔', 'Ali, there\'s a cricket match at school tomorrow.'],
    ],
  },
  care: {
    label: 'Family: Care & Manners',
    items: [
      ['ابو کا چشمہ گر کر ٹوٹ گیا۔', 'Abbu\'s glasses fell and broke.'],
      ['سچ بتانے کا شکریہ، یہ اہم ہے۔', 'Thank you for telling the truth, it matters.'],
      ['ڈاکٹر صاحب، مجھے دو دن سے بخار ہے۔', 'Doctor, I\'ve had a fever for two days.'],
      ['سونے سے پہلے دانت صاف کرو۔', 'Brush your teeth before you sleep.'],
      ['شب بخیر، امی، اللہ حافظ۔', 'Good night, Ammi, goodbye.'],
    ],
  },
}
