// Sentences for the 13–15, 16–18 and 18+ tracks (standard Pakistani Urdu). { bn, roman, en }   (bn = the Urdu)
// Where a sentence changes with the speaker's gender, the English says who is speaking.
const S = (bn, roman, en) => ({ bn, roman, en })

export const teenSentenceGroups = [
  {
    key: 'identity',
    title: 'Who I Am',
    emoji: '🪪',
    sentences: [
      S('میرا نام عمر ہے۔', 'mera naam Umar hai.', 'My name is Umar.'),
      S('میں پاکستانی ہوں۔', 'main paakistaani hoon.', 'I am Pakistani.'),
      S('میرے والدین لاہور سے ہیں۔', 'mere waalidain Lahore se hain.', 'My parents are from Lahore.'),
      S('میں لندن میں پیدا ہوا۔', 'main London mein paida hua.', 'I was born in London. (a boy speaking)'),
      S('میں تھوڑی تھوڑی اردو بول سکتا ہوں۔', 'main thoṛi thoṛi Urdu bol sakta hoon.', 'I can speak a little Urdu. (a boy speaking)'),
      S('میں تھوڑی تھوڑی اردو بول سکتی ہوں۔', 'main thoṛi thoṛi Urdu bol sakti hoon.', 'I can speak a little Urdu. (a girl speaking)'),
      S('آپ کہاں سے ہیں؟', 'aap kahaan se hain?', 'Where are you from?'),
      S('آپ کیا کام کرتے ہیں؟', 'aap kya kaam karte hain?', 'What do you do for work?'),
      S('میں طالب علم ہوں۔', 'main taalib-e-ilm hoon.', 'I am a student.'),
      S('آپ سے مل کر خوشی ہوئی۔', 'aap se mil kar khushi hui.', 'Nice to meet you.'),
    ],
  },
  {
    key: 'bazaar',
    title: 'In the Bazaar',
    emoji: '🛍️',
    sentences: [
      S('یہ کتنے کا ہے؟', 'yeh kitne ka hai?', 'How much is this?'),
      S('یہ بہت مہنگا ہے۔', 'yeh bohat mehnga hai.', 'This is very expensive.'),
      S('تھوڑا کم کر دیں۔', 'thoṛa kam kar dein.', 'Please bring the price down a little.'),
      S('مجھے ایک کلو آم چاہییں۔', 'mujhe ek kilo aam chaahiyein.', 'I need a kilo of mangoes.'),
      S('کیا آپ کے پاس بقایا ہے؟', 'kya aap ke paas baqaaya hai?', 'Do you have change?'),
      S('رسید دے دیں۔', 'raseed de dein.', 'Please give me a receipt.'),
      S('کیا یہ تازہ ہے؟', 'kya yeh taaza hai?', 'Is this fresh?'),
      S('میں بس دیکھ رہا ہوں۔', 'main bas dekh raha hoon.', "I'm just looking. (a boy speaking)"),
      S('ٹھیک ہے، میں یہ لے لیتی ہوں۔', 'ṭheek hai, main yeh le leti hoon.', "OK, I'll take this. (a girl speaking)"),
      S('شکریہ، اللہ حافظ۔', 'shukriya, allah haafiz.', 'Thank you, goodbye.'),
    ],
  },
  {
    key: 'travel',
    title: 'Getting Around',
    emoji: '🧭',
    sentences: [
      S('اسٹیشن کہاں ہے؟', 'isṭeshan kahaan hai?', 'Where is the station?'),
      S('سیدھا جائیں، پھر بائیں مڑیں۔', 'seedha jaaein, phir baaeen muṛein.', 'Go straight on, then turn left.'),
      S('کیا یہ بس کراچی جاتی ہے؟', 'kya yeh bas Karaachi jaati hai?', 'Does this bus go to Karachi?'),
      S('ایک ٹکٹ دے دیں۔', 'ek ṭikaṭ de dein.', 'One ticket, please.'),
      S('یہاں سے کتنی دور ہے؟', 'yahaan se kitni door hai?', 'How far is it from here?'),
      S('مجھے راستہ نہیں معلوم۔', 'mujhe raasta nahin maaloom.', "I don't know the way."),
      S('مجھے ہوائی اڈے جانا ہے۔', 'mujhe hawaai aḍḍe jaana hai.', 'I need to go to the airport.'),
      S('ریل گاڑی کتنے بجے چلے گی؟', 'rel gaaṛi kitne baje chale gi?', 'What time will the train leave?'),
      S('مہربانی کر کے آہستہ چلائیں۔', 'mehrbaani kar ke aahista chalaaein.', 'Please drive slowly.'),
      S('یہاں روک دیں۔', 'yahaan rok dein.', 'Please stop here.'),
    ],
  },
  {
    key: 'history',
    title: 'Our History',
    emoji: '📜',
    sentences: [
      S('پاکستان ۱۴ اگست ۱۹۴۷ کو بنا۔', 'paakistaan chaudah agast unnees sau saintaalees ko bana.', 'Pakistan was created on 14 August 1947.'),
      S('قائد اعظم پاکستان کے بانی ہیں۔', "qaa'id-e-aazam paakistaan ke baani hain.", 'The Quaid-e-Azam is the founder of Pakistan.'),
      S('علامہ اقبال ہمارے قومی شاعر ہیں۔', "allaama iqbaal hamaare qaumi shaa'ir hain.", 'Allama Iqbal is our national poet.'),
      S('اردو پاکستان کی قومی زبان ہے۔', 'urdu paakistaan ki qaumi zabaan hai.', "Urdu is Pakistan's national language."),
      S('لاہور میں مغلوں کا بنایا ہوا قلعہ ہے۔', "Lahore mein mughalon ka banaaya hua qil'a hai.", 'In Lahore there is a fort built by the Mughals.'),
      S('۲۳ مارچ کو یومِ پاکستان منایا جاتا ہے۔', 'teyees maarch ko yaum-e-paakistaan manaaya jaata hai.', 'Pakistan Day is celebrated on 23 March.'),
      S('۱۹۴۰ میں قراردادِ لاہور منظور ہوئی۔', 'unnees sau chaalees mein qaraardaad-e-Lahore manzoor hui.', 'In 1940 the Lahore Resolution was passed.'),
      S('آزادی کے وقت لاکھوں لوگوں نے ہجرت کی۔', 'aazaadi ke waqt laakhon logon ne hijrat ki.', 'At independence, millions of people migrated.'),
      S('مینارِ پاکستان قرارداد کی یادگار ہے۔', 'minaar-e-paakistaan qaraardaad ki yaadgaar hai.', 'Minar-e-Pakistan is a memorial to the Resolution.'),
      S('ہمیں اپنے ورثے پر فخر ہے۔', 'hamein apne virse par fakhr hai.', 'We are proud of our heritage.'),
    ],
  },
  {
    key: 'culture',
    title: 'Culture & Customs',
    emoji: '🎨',
    sentences: [
      S('پاکستان میں بہت سی زبانیں بولی جاتی ہیں۔', 'paakistaan mein bohat si zabaanen boli jaati hain.', 'Many languages are spoken in Pakistan.'),
      S('پنجابی، سندھی، پشتو اور بلوچی بھی اہم زبانیں ہیں۔', 'panjaabi, sindhi, pashto aur balochi bhi aham zabaanen hain.', 'Punjabi, Sindhi, Pashto and Balochi are important languages too.'),
      S('قوالی صوفی موسیقی ہے۔', 'qawwaali soofi mauseeqi hai.', 'Qawwali is Sufi music.'),
      S('ٹرک آرٹ پاکستان کی پہچان ہے۔', 'ṭrak aarṭ paakistaan ki pehchaan hai.', 'Truck art is one of the symbols of Pakistan.'),
      S('عید پر سب ایک دوسرے کے گلے ملتے ہیں۔', 'eid par sab ek doosre ke gale milte hain.', 'At Eid everyone embraces one another.'),
      S('مہمان کو چائے پیش کرنا ہماری روایت ہے۔', 'mehmaan ko chaaye pesh karna hamaari riwaayat hai.', 'Offering tea to a guest is our tradition.'),
      S('شادیوں میں ڈھولک بجائی جاتی ہے۔', 'shaadiyon mein ḍholak bajaai jaati hai.', 'The dholak drum is played at weddings.'),
      S('لوگ شام کو چائے کے ساتھ گپ شپ کرتے ہیں۔', 'log shaam ko chaaye ke saath gap shap karte hain.', 'People chat over tea in the evening.'),
      S('بسنت پر آسمان پتنگوں سے بھر جاتا تھا۔', 'basant par aasmaan patangon se bhar jaata tha.', 'At Basant the sky used to fill with kites.'),
    ],
  },
  {
    key: 'opinions',
    title: 'What I Think',
    emoji: '💭',
    sentences: [
      S('میرے خیال میں یہ فلم بہت اچھی ہے۔', 'mere khayaal mein yeh film bohat achchhi hai.', 'In my opinion this film is very good.'),
      S('مجھے یہ بالکل پسند نہیں۔', 'mujhe yeh bilkul pasand nahin.', "I don't like this at all."),
      S('میں آپ سے متفق ہوں۔', 'main aap se muttafiq hoon.', 'I agree with you.'),
      S('آپ کی کیا رائے ہے؟', "aap ki kya raa'e hai?", 'What is your opinion?'),
      S('یہ سچ ہے۔', 'yeh sach hai.', "That's true."),
      S('شاید آپ صحیح ہیں۔', 'shaayad aap sahih hain.', 'Maybe you are right.'),
      S('مجھے لگتا ہے کہ کل بارش ہو گی۔', 'mujhe lagta hai ke kal baarish hogi.', 'I think it will rain tomorrow.'),
      S('بات تو ٹھیک ہے، مگر…', 'baat to ṭheek hai, magar…', "That's a fair point, but…"),
      S('میں متفق نہیں، لیکن آپ کی بات سمجھ گیا۔', 'main muttafiq nahin, lekin aap ki baat samajh gaya.', "I don't agree, but I see your point. (a boy speaking)"),
      S('دونوں طرف کی بات سنیں۔', 'donon taraf ki baat sunein.', 'Listen to both sides.'),
    ],
  },
  {
    key: 'proverbs',
    title: 'Proverbs',
    emoji: '🦉',
    sentences: [
      S('جیسی کرنی ویسی بھرنی۔', 'jaisi karni waisi bharni.', 'As you do, so you will receive. (You reap what you sow.)'),
      S('دور کے ڈھول سہانے۔', 'door ke ḍhol suhaane.', 'Drums sound sweet from far away. (The grass is always greener.)'),
      S('اونٹ کے منہ میں زیرہ۔', 'oonṭ ke munh mein zeera.', "A cumin seed in a camel's mouth. (Far too little.)"),
      S('ایک انار سو بیمار۔', 'ek anaar sau beemaar.', 'One pomegranate, a hundred sick people. (Far too many want the one thing.)'),
      S('بندر کیا جانے ادرک کا سواد۔', 'bandar kya jaane adrak ka swaad.', 'What does a monkey know of the taste of ginger? (Some people cannot appreciate good things.)'),
      S('جس کی لاٹھی اس کی بھینس۔', 'jis ki laaṭhi us ki bhains.', 'Whoever holds the stick owns the buffalo. (Might is right.)'),
      S('گھر کی مرغی دال برابر۔', 'ghar ki murghi daal baraabar.', 'The chicken at home is worth no more than lentils. (We undervalue what we have.)'),
      S('اب پچھتائے کیا ہوت جب چڑیاں چگ گئیں کھیت۔', 'ab pachhtaaye kya hot jab chiṛiyaan chug gaeen khet.', 'What use is regret once the birds have eaten the crop? (No use crying over spilt milk.)'),
    ],
  },
]

// "Have done" (present perfect) and "will do" (future) patterns. forms = [میں, تم, آپ], boys' / men's endings
// (women say گئی ہوں, جاؤں گی…). These verbs don't take نے, so the form changes with the person in both tenses.
const T = (key, inf, en, perfect, future) => ({ key, inf, en, perfect, future })
const tp = (forms, romans, enForm) => ({ forms, romans, enForm })

export const tenseVerbs = [
  T('jaana', 'جانا', 'go',
    tp(['گیا ہوں', 'گئے ہو', 'گئے ہیں'], ['gaya hoon', 'gaye ho', 'gaye hain'], 'have gone'),
    tp(['جاؤں گا', 'جاؤ گے', 'جائیں گے'], ['jaaoon ga', 'jaao ge', 'jaaein ge'], 'will go')),
  T('aana', 'آنا', 'come',
    tp(['آیا ہوں', 'آئے ہو', 'آئے ہیں'], ['aaya hoon', 'aaye ho', 'aaye hain'], 'have come'),
    tp(['آؤں گا', 'آؤ گے', 'آئیں گے'], ['aaoon ga', 'aao ge', 'aaein ge'], 'will come')),
  T('sona', 'سونا', 'sleep',
    tp(['سویا ہوں', 'سوئے ہو', 'سوئے ہیں'], ['soya hoon', 'soye ho', 'soye hain'], 'have slept'),
    tp(['سوؤں گا', 'سوؤ گے', 'سوئیں گے'], ['sooon ga', 'soo ge', 'soein ge'], 'will sleep')),
  T('uthna', 'اٹھنا', 'get up',
    tp(['اٹھا ہوں', 'اٹھے ہو', 'اٹھے ہیں'], ['uṭha hoon', 'uṭhe ho', 'uṭhe hain'], 'have got up'),
    tp(['اٹھوں گا', 'اٹھو گے', 'اٹھیں گے'], ['uṭhoon ga', 'uṭho ge', 'uṭhein ge'], 'will get up')),
  T('baithna', 'بیٹھنا', 'sit',
    tp(['بیٹھا ہوں', 'بیٹھے ہو', 'بیٹھے ہیں'], ['baiṭha hoon', 'baiṭhe ho', 'baiṭhe hain'], 'have sat down'),
    tp(['بیٹھوں گا', 'بیٹھو گے', 'بیٹھیں گے'], ['baiṭhoon ga', 'baiṭho ge', 'baiṭhein ge'], 'will sit')),
  T('pahunchna', 'پہنچنا', 'arrive',
    tp(['پہنچا ہوں', 'پہنچے ہو', 'پہنچے ہیں'], ['pahuncha hoon', 'pahunche ho', 'pahunche hain'], 'have arrived'),
    tp(['پہنچوں گا', 'پہنچو گے', 'پہنچیں گے'], ['pahunchoon ga', 'pahuncho ge', 'pahunchein ge'], 'will arrive')),
]

export const tensePronouns = [
  { bn: 'میں', roman: 'main', en: 'I' },
  { bn: 'تم', roman: 'tum', en: 'You' },
  { bn: 'آپ', roman: 'aap', en: 'You (respectful)' },
]
