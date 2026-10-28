// The 18+ track ("Wayfarers"): adult vocabulary, sentences and readings. Standard Pakistani Urdu, starting from zero.
//
// Readings lead with an English paragraph (`lead`) so history, politics and culture can be understood properly
// while the Urdu stays short and learnable; the Urdu lines carry the facts in simple sentences.
// Facts are kept to what is well established; contested subjects are described neutrally.
// Poems and anything by writers still in copyright (Faiz, the national anthem) are not quoted.
const W = (bn, roman, en, emoji) => ({ bn, roman, en, emoji })
const S = (bn, roman, en) => ({ bn, roman, en })
const L = (bn, roman, en) => ({ bn, roman, en })

export const adultWordCategories = [
  {
    key: 'inlaws', title: 'In-laws & Extended Family', emoji: '👨‍👩‍👧‍👦',
    note: 'Family is wide in Pakistan and every relation has its own word. Use آپ for all of these elders.',
    words: [
      W('سسر', 'susar', 'father-in-law', '👴'), W('ساس', 'saas', 'mother-in-law', '👵'), W('داماد', 'daamaad', 'son-in-law', '🧑'),
      W('بہو', 'bahu', 'daughter-in-law', '👰'), W('بھابھی', 'bhaabhi', "brother's wife", '👩'), W('بہنوئی', 'behnoi', "sister's husband", '🧔'),
      W('نند', 'nand', "husband's sister", '👩'), W('دیور', 'dewar', "husband's younger brother", '🧑'), W('جیٹھ', 'jeṭh', "husband's elder brother", '👨'),
      W('سالا', 'saala', "wife's brother", '🧑'), W('ممانی', 'mumaani', "mother's brother's wife", '👩'), W('خالو', 'khaalu', "mother's sister's husband", '👨'),
      W('چچی', 'chachi', "father's younger brother's wife", '👩'),
    ],
  },
  {
    key: 'work', title: 'Work & Office', emoji: '💼', note: 'Offices run on polite language: use آپ with colleagues you do not know well and with every senior.',
    words: [
      W('دفتر', 'daftar', 'office', '🏢'), W('نوکری', 'naukri', 'job', '💼'), W('کام', 'kaam', 'work', '🛠️'), W('تنخواہ', 'tankhwaah', 'salary', '💵'),
      W('ساتھی', 'saathi', 'colleague, companion', '🧑‍💼'), W('میٹنگ', 'meeṭing', 'meeting', '🗓️'), W('ای میل', 'ee mel', 'email', '📧'), W('چھٹی', 'chhuṭṭi', 'leave, holiday', '🏖️'),
      W('کاروبار', 'kaarobaar', 'business', '🏪'), W('کمپنی', 'kampani', 'company', '🏭'), W('انٹرویو', 'inṭarvyu', 'interview', '🤝'), W('درخواست', 'darkhwaast', 'application', '📝'),
    ],
  },
  {
    key: 'bank', title: 'Bank, Forms & Documents', emoji: '🏦', note: 'Paperwork has its own vocabulary. Learn these before your first visit to a bank or an office.',
    words: [
      W('بینک', 'baink', 'bank', '🏦'), W('اکاؤنٹ', 'akaaunṭ', 'account', '📒'), W('فارم', 'faarm', 'form', '📄'), W('دستخط', 'dastkhat', 'signature', '✍️'),
      W('شناختی کارڈ', 'shanaakhti kaarḍ', 'national ID card', '🪪'), W('پاسپورٹ', 'paaspoorṭ', 'passport', '🛂'), W('قرض', 'qarz', 'loan, debt', '💳'), W('رقم', 'raqam', 'amount (of money)', '💰'),
      W('جمع کرانا', "jama' karaana", 'to deposit', '📥'), W('نکالنا', 'nikaalna', 'to withdraw', '📤'), W('چیک', 'chaik', 'cheque', '🧾'), W('بل', 'bil', 'bill', '🧾'),
    ],
  },
  {
    key: 'health', title: 'Health & the Doctor', emoji: '🩺', note: "Useful the moment you feel unwell: say what hurts, and understand the doctor's answer.",
    words: [
      W('ہسپتال', 'haspataal', 'hospital', '🏥'), W('دوائی', 'dawaai', 'medicine', '💊'), W('بخار', 'bukhaar', 'fever', '🤒'), W('درد', 'dard', 'pain', '🤕'),
      W('سر درد', 'sar dard', 'headache', '🤯'), W('کھانسی', 'khaansi', 'cough', '😷'), W('زکام', 'zukaam', 'a cold', '🤧'), W('نسخہ', 'nuskha', 'prescription', '📝'),
      W('ٹیکہ', 'ṭeeka', 'injection, vaccine', '💉'), W('بیمار', 'beemaar', 'ill', '🛌'), W('صحت', 'sehat', 'health', '❤️'), W('مریض', 'mareez', 'patient', '🧑‍🦽'),
    ],
  },
  {
    key: 'politics', title: 'Government & Politics', emoji: '🏛️', note: 'The words you meet in a newspaper or on the news.',
    words: [
      W('حکومت', 'hukoomat', 'government', '🏛️'), W('وزیر اعظم', 'wazeer-e-aazam', 'prime minister', '👔'), W('صدر', 'sadr', 'president', '🎖️'), W('قومی اسمبلی', 'qaumi asembli', 'National Assembly', '🏛️'),
      W('انتخابات', 'intikhaabaat', 'elections', '🗳️'), W('ووٹ', 'voṭ', 'vote', '✅'), W('جماعت', "jamaa'at", 'party (political)', '🚩'), W('قانون', 'qaanoon', 'law', '⚖️'),
      W('عدالت', 'adaalat', 'court', '👨‍⚖️'), W('صوبہ', 'soobah', 'province', '🗺️'), W('وزیر', 'wazeer', 'minister', '🧑‍💼'), W('اخبار', 'akhbaar', 'newspaper', '📰'),
    ],
  },
  {
    key: 'economy', title: 'Economy & Development', emoji: '📈', note: 'How people talk about work, trade and prices.',
    words: [
      W('معیشت', "ma'eeshat", 'economy', '📈'), W('تجارت', 'tijaarat', 'trade', '🚢'), W('برآمدات', 'bar-aamadaat', 'exports', '📦'), W('درآمدات', 'dar-aamadaat', 'imports', '📥'),
      W('مہنگائی', 'mehngaai', 'inflation, rising prices', '📊'), W('کسان', 'kisaan', 'farmer', '👨‍🌾'), W('کھیت', 'khet', 'field', '🌾'), W('کپاس', 'kapaas', 'cotton', '☁️'),
      W('گندم', 'gandum', 'wheat', '🌾'), W('کارخانہ', 'kaarkhaana', 'factory', '🏭'), W('ٹیکس', 'ṭaiks', 'tax', '🧾'), W('ترقی', 'taraqqi', 'development, progress', '🚀'),
    ],
  },
  {
    key: 'culture2', title: 'Faith, Clothes & Music', emoji: '🎶', note: 'Words for places of worship, what people wear, and the sounds of Pakistan.',
    words: [
      W('مذہب', 'mazhab', 'religion', '🕊️'), W('گرجا گھر', 'girja ghar', 'church', '⛪'), W('مندر', 'mandir', 'Hindu temple', '🛕'), W('گوردوارہ', 'gurdwaara', 'gurdwara (Sikh temple)', '🛕'),
      W('مزار', 'mazaar', 'shrine of a saint', '🕌'), W('عرس', 'urs', "a saint's yearly festival", '🎊'), W('شلوار قمیض', 'shalwaar qameez', 'shalwar kameez', '👘'), W('دوپٹہ', 'dupaṭṭa', 'dupatta (long scarf)', '🧣'),
      W('اجرک', 'ajrak', 'ajrak (block-printed Sindhi shawl)', '🟥'), W('ستار', 'sitaar', 'sitar', '🎸'), W('ڈھول', 'ḍhol', 'dhol (drum)', '🥁'), W('میلہ', 'mela', 'fair, festival', '🎡'),
    ],
  },
  {
    key: 'urduhindi', title: 'Urdu & Hindi: Different Words', emoji: '🔁',
    note: 'Everyday spoken Urdu and Hindi are so close that speakers understand each other, but formal words differ: Urdu borrows from Persian and Arabic, Hindi from Sanskrit. The Hindi words are written here in Urdu script.',
    words: [
      W('شکریہ', 'shukriya', 'thank you (Urdu; Hindi: دھنیواد)', '🙏'), W('دھنیواد', 'dhanyavaad', 'thank you (Hindi)', '🙏'),
      W('زبان', 'zabaan', 'language (Urdu; Hindi: بھاشا)', '🗣️'), W('بھاشا', 'bhaasha', 'language (Hindi)', '🗣️'),
      W('دنیا', 'duniya', 'world (Urdu; Hindi: سنسار)', '🌍'), W('سنسار', 'sansaar', 'world (Hindi)', '🌍'),
      W('جواب', 'jawaab', 'answer (Urdu; Hindi: اتر)', '💬'), W('اتر', 'uttar', 'answer (Hindi)', '💬'),
      W('خوبصورت', 'khoobsoorat', 'beautiful (Urdu; Hindi: سندر)', '🌺'), W('سندر', 'sundar', 'beautiful (Hindi)', '🌺'),
      W('شہر', 'shehar', 'city (Urdu; Hindi: نگر)', '🏙️'), W('نگر', 'nagar', 'city, town (Hindi)', '🏙️'),
    ],
  },
]

export const adultSentenceGroups = [
  {
    key: 'awork', title: 'At Work', emoji: '💼',
    sentences: [
      S('میں دفتر میں کام کرتا ہوں۔', 'main daftar mein kaam karta hoon.', 'I work in an office. (a man speaking)'),
      S('آج میری ایک میٹنگ ہے۔', 'aaj meri ek meeṭing hai.', 'I have a meeting today.'),
      S('آپ کا انٹرویو کب ہے؟', 'aap ka inṭarvyu kab hai?', 'When is your interview?'),
      S('میں نوکری ڈھونڈ رہی ہوں۔', 'main naukri ḍhoonḍ rahi hoon.', 'I am looking for a job. (a woman speaking)'),
      S('میں کل چھٹی پر ہوں گا۔', 'main kal chhuṭṭi par hoon ga.', 'I will be on leave tomorrow. (a man speaking)'),
      S('مہربانی کر کے مجھے ای میل کر دیں۔', 'mehrbaani kar ke mujhe ee mel kar dein.', 'Please email me.'),
    ],
  },
  {
    key: 'abank', title: 'Bank & Forms', emoji: '🏦',
    sentences: [
      S('مجھے بینک میں اکاؤنٹ کھولنا ہے۔', 'mujhe baink mein akaaunṭ kholna hai.', 'I want to open a bank account.'),
      S('یہ فارم کیسے بھروں؟', 'yeh faarm kaise bharoon?', 'How do I fill in this form?'),
      S('یہاں دستخط کر دیں۔', 'yahaan dastkhat kar dein.', 'Please sign here.'),
      S('اپنا شناختی کارڈ دکھا دیں۔', 'apna shanaakhti kaarḍ dikha dein.', 'Please show your ID card.'),
      S('مجھے پچاس ہزار روپے نکالنے ہیں۔', 'mujhe pachaas hazaar rupay nikaalne hain.', 'I need to withdraw fifty thousand rupees.'),
    ],
  },
  {
    key: 'ahealth', title: 'At the Doctor', emoji: '🩺',
    sentences: [
      S('مجھے کل سے بخار ہے۔', 'mujhe kal se bukhaar hai.', "I've had a fever since yesterday."),
      S('میرے سر میں درد ہے۔', 'mere sar mein dard hai.', 'I have a headache.'),
      S('یہ دوائی دن میں دو بار کھائیں۔', 'yeh dawaai din mein do baar khaaein.', 'Take this medicine twice a day.'),
      S('کیا مجھے ٹیکہ لگے گا؟', 'kya mujhe ṭeeka lage ga?', 'Will I need an injection?'),
      S('قریب ترین ہسپتال کہاں ہے؟', 'qareeb tareen haspataal kahaan hai?', 'Where is the nearest hospital?'),
    ],
  },
  {
    key: 'anews', title: 'News & Opinions', emoji: '📰',
    sentences: [
      S('آج کے اخبار میں کیا خبر ہے؟', 'aaj ke akhbaar mein kya khabar hai?', "What's the news in today's paper?"),
      S('انتخابات اگلے سال ہوں گے۔', 'intikhaabaat agle saal hon ge.', 'The elections will be next year.'),
      S('مہنگائی بہت بڑھ گئی ہے۔', 'mehngaai bohat baṛh gayi hai.', 'Prices have gone up a lot.'),
      S('حکومت نے نیا قانون بنایا ہے۔', 'hukoomat ne naya qaanoon banaaya hai.', 'The government has made a new law.'),
      S('میرے خیال میں دونوں جماعتوں کی بات میں وزن ہے۔', "mere khayaal mein donon jamaa'aton ki baat mein wazan hai.", 'I think both parties have a point.'),
      S('خبر کی تصدیق ضرور کریں۔', 'khabar ki tasdeeq zaroor karein.', 'Always check that a news story is true.'),
    ],
  },
]

// Readings. `lead` is shown in English first; the Urdu lines follow, then a few questions.
export const adultPassages = [
  {
    key: 'mughals', title: 'The Mughals and the Birth of Urdu', emoji: '🏰',
    lead: 'The Mughal emperors ruled much of the subcontinent from 1526 to 1857. Their court spoke Persian, but in the markets and army camps an everyday language grew out of the speech of the Delhi region, mixed with Persian, Arabic and Turkish words. By the 1700s poets such as Mir were writing in it, and in time it came to be called Urdu, from a Turkish word for "camp" or "army". The Mughals also left the buildings that still define Lahore and Delhi.',
    lines: [
      L('مغل بادشاہوں نے ۱۵۲۶ سے ۱۸۵۷ تک حکومت کی۔', 'mughal baadshaahon ne pandrah sau chhabbees se aṭhaarah sau sattaawan tak hukoomat ki.', 'The Mughal emperors ruled from 1526 to 1857.'),
      L('دربار کی زبان فارسی تھی۔', 'darbaar ki zabaan faarsi thi.', 'The language of the court was Persian.'),
      L('بازاروں اور لشکروں میں ایک نئی زبان بنی۔', 'baazaaron aur lashkaron mein ek nayi zabaan bani.', 'A new language took shape in the markets and army camps.'),
      L('اس میں مقامی، فارسی، عربی اور ترکی الفاظ ملے۔', 'is mein maqaami, faarsi, arabi aur turki alfaaz mile.', 'Local, Persian, Arabic and Turkish words mixed in it.'),
      L('اسی زبان کو بعد میں اردو کہا گیا۔', 'isi zabaan ko baad mein urdu kaha gaya.', 'This language was later called Urdu.'),
      L('اردو ترکی لفظ ہے جس کا مطلب لشکر ہے۔', 'urdu turki lafz hai jis ka matlab lashkar hai.', '"Urdu" is a Turkish word meaning "army camp".'),
      L('لاہور کا شاہی قلعہ اور بادشاہی مسجد مغلوں نے بنائے۔', "Lahore ka shaahi qil'a aur baadshaahi masjid mughalon ne banaaye.", 'The Mughals built the Royal Fort and the Badshahi Mosque in Lahore.'),
    ],
    questions: [
      { q: 'When did the Mughals rule?', options: ['1526–1857', '1947–1971', '1000–1200'], answer: 0 },
      { q: 'What was the language of the Mughal court?', options: ['Urdu', 'Persian', 'English'], answer: 1 },
      { q: 'What does the word "Urdu" mean?', options: ['Army camp', 'River', 'Poem'], answer: 0 },
    ],
  },
  {
    key: 'lahore1940', title: 'The Lahore Resolution, 1940', emoji: '📜',
    lead: 'By the 1930s many Muslims in British India feared they would be a permanent minority in a united, independent India. In 1930 the poet and philosopher Muhammad Iqbal spoke of a Muslim homeland in the north-west. On 23 March 1940, at a session of the All-India Muslim League in Lahore, a resolution was passed calling for independent states in the Muslim-majority areas. It became known as the Pakistan Resolution, and 23 March is now Pakistan Day.',
    lines: [
      L('۱۹۰۶ میں آل انڈیا مسلم لیگ بنی۔', 'unnees sau chhe mein aal inḍya muslim leeg bani.', 'The All-India Muslim League was founded in 1906.'),
      L('۱۹۳۰ میں علامہ اقبال نے ایک الگ وطن کا خیال پیش کیا۔', 'unnees sau tees mein allaama iqbaal ne ek alag watan ka khayaal pesh kiya.', 'In 1930 Allama Iqbal put forward the idea of a separate homeland.'),
      L('۲۳ مارچ ۱۹۴۰ کو لاہور میں ایک قرارداد منظور ہوئی۔', 'teyees maarch unnees sau chaalees ko Lahore mein ek qaraardaad manzoor hui.', 'On 23 March 1940 a resolution was passed in Lahore.'),
      L('اس میں مسلم اکثریتی علاقوں کے لیے آزاد ریاستوں کا مطالبہ تھا۔', 'is mein muslim aksariyati ilaaqon ke liye aazaad riyaaston ka mutaalaba tha.', 'It called for independent states for the Muslim-majority areas.'),
      L('اسے قراردادِ پاکستان بھی کہتے ہیں۔', 'ise qaraardaad-e-paakistaan bhi kehte hain.', 'It is also called the Pakistan Resolution.'),
      L('جہاں یہ جلسہ ہوا، وہاں آج مینارِ پاکستان ہے۔', 'jahaan yeh jalsa hua, wahaan aaj minaar-e-paakistaan hai.', 'Where the meeting was held, Minar-e-Pakistan stands today.'),
    ],
    questions: [
      { q: 'When was the resolution passed?', options: ['14 August 1947', '23 March 1940', '1857'], answer: 1 },
      { q: 'Who put forward the idea of a homeland in 1930?', options: ['Allama Iqbal', 'Mirza Ghalib', 'Mir Taqi Mir'], answer: 0 },
      { q: 'What stands where the meeting was held?', options: ['Minar-e-Pakistan', 'The Badshahi Mosque', 'A railway station'], answer: 0 },
    ],
  },
  {
    key: 'partition1947', title: 'Independence and Partition, 1947', emoji: '🗺️',
    lead: 'In August 1947 British rule ended and the subcontinent was divided into two independent countries, India and Pakistan. Pakistan was formed from Muslim-majority areas in the north-west and in the east (East Bengal), and both Punjab and Bengal were split. Independence was a moment of great hope, but partition also brought one of the largest migrations in history: millions crossed the new borders in both directions, and hundreds of thousands were killed in the violence. Many families still tell these stories.',
    lines: [
      L('۱۹۴۷ میں برطانوی راج ختم ہوا۔', 'unnees sau saintaalees mein bartaanwi raaj khatam hua.', 'In 1947 British rule ended.'),
      L('برصغیر دو ملکوں میں تقسیم ہوا: پاکستان اور بھارت۔', 'barr-e-sagheer do mulkon mein taqseem hua: paakistaan aur bhaarat.', 'The subcontinent was divided into two countries: Pakistan and India.'),
      L('پنجاب اور بنگال بھی تقسیم ہو گئے۔', 'panjaab aur bangaal bhi taqseem ho gaye.', 'Punjab and Bengal were divided too.'),
      L('لاکھوں لوگوں نے دونوں طرف ہجرت کی۔', 'laakhon logon ne donon taraf hijrat ki.', 'Millions of people migrated in both directions.'),
      L('اس دوران بہت تشدد ہوا اور بہت سے لوگ مارے گئے۔', 'is dauraan bohat tashaddud hua aur bohat se log maare gaye.', 'There was terrible violence and many people were killed.'),
      L('قائد اعظم پاکستان کے پہلے گورنر جنرل بنے۔', "qaa'id-e-aazam paakistaan ke pehle gavarnar jeneral bane.", "The Quaid-e-Azam became Pakistan's first Governor-General."),
      L('کراچی پاکستان کا پہلا دارالحکومت تھا۔', 'Karaachi paakistaan ka pehla daar-ul-hukoomat tha.', "Karachi was Pakistan's first capital."),
    ],
    questions: [
      { q: 'Which two provinces were divided?', options: ['Punjab and Bengal', 'Sindh and Balochistan', 'Kashmir and Gilgit'], answer: 0 },
      { q: "Who became Pakistan's first Governor-General?", options: ['Allama Iqbal', 'The Quaid-e-Azam', 'Mirza Ghalib'], answer: 1 },
      { q: "What was Pakistan's first capital?", options: ['Islamabad', 'Lahore', 'Karachi'], answer: 2 },
    ],
  },
  {
    key: 'urdulanguage', title: 'Urdu, the National Language', emoji: '🗣️',
    lead: "Urdu is the mother tongue of only a minority of Pakistanis — most grow up speaking Punjabi, Pashto, Sindhi, Saraiki, Balochi or another language — but it is the national language, the one Pakistanis from every province share. In 1948 the decision to make Urdu the sole state language was strongly opposed in East Bengal, where people spoke Bangla; the protests of 21 February 1952 are remembered today as International Mother Language Day. In 1956 both Urdu and Bengali were made state languages. Today Urdu and English are Pakistan's official languages.",
    lines: [
      L('اردو پاکستان کی قومی زبان ہے۔', 'urdu paakistaan ki qaumi zabaan hai.', "Urdu is Pakistan's national language."),
      L('زیادہ تر پاکستانیوں کی مادری زبان کوئی اور ہے۔', 'zyaada tar paakistaaniyon ki maadri zabaan koi aur hai.', 'Most Pakistanis have a different mother tongue.'),
      L('پنجابی، پشتو، سندھی، سرائیکی اور بلوچی بڑی زبانیں ہیں۔', 'panjaabi, pashto, sindhi, saraaiki aur balochi baṛi zabaanen hain.', 'Punjabi, Pashto, Sindhi, Saraiki and Balochi are major languages.'),
      L('اردو سب صوبوں کے لوگوں کو جوڑتی ہے۔', 'urdu sab soobon ke logon ko joṛti hai.', 'Urdu connects people from all the provinces.'),
      L('۱۹۵۲ میں مشرقی بنگال میں بنگلہ زبان کے لیے احتجاج ہوا۔', 'unnees sau baawan mein mashriqi bangaal mein bangla zabaan ke liye ehtijaaj hua.', 'In 1952 there were protests in East Bengal for the Bangla language.'),
      L('۱۹۵۶ میں اردو اور بنگلہ دونوں سرکاری زبانیں بنیں۔', 'unnees sau chhappan mein urdu aur bangla donon sarkaari zabaanen banein.', 'In 1956 both Urdu and Bangla became state languages.'),
      L('آج اردو اور انگریزی پاکستان کی سرکاری زبانیں ہیں۔', 'aaj urdu aur angrezi paakistaan ki sarkaari zabaanen hain.', "Today Urdu and English are Pakistan's official languages."),
    ],
    questions: [
      { q: 'What connects people from all the provinces?', options: ['Urdu', 'Pashto', 'Persian'], answer: 0 },
      { q: 'Where were there protests for the Bangla language in 1952?', options: ['East Bengal', 'Sindh', 'Punjab'], answer: 0 },
      { q: "What are Pakistan's official languages today?", options: ['Urdu and English', 'Urdu and Persian', 'Punjabi and Sindhi'], answer: 0 },
    ],
  },
  {
    key: 'government', title: 'How Pakistan Is Governed', emoji: '🏛️',
    lead: 'Pakistan is a federal parliamentary republic. Its current constitution dates from 1973. Voters elect the National Assembly, which chooses the Prime Minister, who leads the government; the President is the head of state. There are four provinces — Punjab, Sindh, Khyber Pakhtunkhwa and Balochistan — each with its own assembly, plus the Islamabad Capital Territory and the regions of Gilgit-Baltistan and Azad Jammu and Kashmir, which have their own arrangements. The army has ruled directly for long periods, and its role in politics is still widely debated.',
    lines: [
      L('پاکستان کا آئین ۱۹۷۳ میں بنا۔', "paakistaan ka aa'een unnees sau tihattar mein bana.", "Pakistan's constitution was made in 1973."),
      L('عوام ووٹ دے کر قومی اسمبلی چنتے ہیں۔', "awaam voṭ de kar qaumi asembli chunte hain.", 'The people elect the National Assembly by voting.'),
      L('قومی اسمبلی وزیر اعظم کو چنتی ہے۔', 'qaumi asembli wazeer-e-aazam ko chunti hai.', 'The National Assembly chooses the Prime Minister.'),
      L('صدر ملک کا سربراہ ہوتا ہے۔', 'sadr mulk ka sarbaraah hota hai.', 'The President is the head of state.'),
      L('پاکستان کے چار صوبے ہیں۔', 'paakistaan ke chaar soobe hain.', 'Pakistan has four provinces.'),
      L('ہر صوبے کی اپنی اسمبلی ہے۔', 'har soobe ki apni asembli hai.', 'Each province has its own assembly.'),
      L('اسلام آباد ملک کا دارالحکومت ہے۔', 'islaamaabaad mulk ka daar-ul-hukoomat hai.', 'Islamabad is the capital of the country.'),
    ],
    questions: [
      { q: 'When was the current constitution made?', options: ['1947', '1956', '1973'], answer: 2 },
      { q: 'Who chooses the Prime Minister?', options: ['The National Assembly', 'The provinces', 'The courts'], answer: 0 },
      { q: 'How many provinces does Pakistan have?', options: ['Two', 'Four', 'Eight'], answer: 1 },
    ],
  },
  {
    key: 'economy', title: 'From Cotton to Textiles', emoji: '📈',
    lead: "Farming still employs a large share of Pakistan's workers, thanks to the Indus and one of the world's largest irrigation systems. Wheat, rice, sugar cane and cotton are the main crops. Cotton feeds the biggest industry: textiles and clothing make up more than half of the country's exports, with Faisalabad as the textile capital. Money sent home by Pakistanis working abroad, in the Gulf, Britain and elsewhere, is another mainstay. High inflation and debt have been serious problems in recent years.",
    lines: [
      L('پاکستان ایک زرعی ملک ہے۔', "paakistaan ek zar'i mulk hai.", 'Pakistan is an agricultural country.'),
      L('دریائے سندھ سے کھیتوں کو پانی ملتا ہے۔', 'daryaa-e-sindh se kheton ko paani milta hai.', 'The fields get their water from the Indus river.'),
      L('گندم، چاول، گنا اور کپاس بڑی فصلیں ہیں۔', 'gandum, chaawal, ganna aur kapaas baṛi faslen hain.', 'Wheat, rice, sugar cane and cotton are the main crops.'),
      L('کپاس سے کپڑا بنتا ہے۔', 'kapaas se kapṛa banta hai.', 'Cloth is made from cotton.'),
      L('کپڑا پاکستان کی سب سے بڑی برآمد ہے۔', 'kapṛa paakistaan ki sab se baṛi bar-aamad hai.', "Textiles are Pakistan's biggest export."),
      L('فیصل آباد کپڑے کی صنعت کا مرکز ہے۔', "faisalaabaad kapṛe ki san'at ka markaz hai.", 'Faisalabad is the centre of the textile industry.'),
      L('باہر کام کرنے والے پاکستانی گھر پیسے بھیجتے ہیں۔', 'baahar kaam karne waale paakistaani ghar paise bhejte hain.', 'Pakistanis working abroad send money home.'),
    ],
    questions: [
      { q: 'Where do the fields get their water from?', options: ['The Indus river', 'The sea', 'Rain only'], answer: 0 },
      { q: "What is Pakistan's biggest export?", options: ['Textiles', 'Cars', 'Oil'], answer: 0 },
      { q: 'Which city is the centre of the textile industry?', options: ['Faisalabad', 'Gwadar', 'Murree'], answer: 0 },
    ],
  },
  {
    key: 'faith', title: 'Faith in Pakistan', emoji: '🕌',
    lead: 'Most Pakistanis are Muslims — the majority Sunni, with a significant Shia minority — and Islam shapes daily life, from the five daily prayers to Ramzan and the two Eids. Sufi shrines such as Data Darbar in Lahore and the shrine of Lal Shahbaz Qalandar in Sehwan draw huge crowds, especially at their yearly urs. Christians, Hindus, Sikhs and others are citizens too; the white in the flag stands for religious minorities, and Sikh pilgrims from around the world visit Nankana Sahib, the birthplace of Guru Nanak.',
    lines: [
      L('پاکستان میں زیادہ تر لوگ مسلمان ہیں۔', 'paakistaan mein zyaada tar log musalmaan hain.', 'Most people in Pakistan are Muslims.'),
      L('لوگ دن میں پانچ بار نماز پڑھتے ہیں۔', 'log din mein paanch baar namaaz paṛhte hain.', 'People pray five times a day.'),
      L('رمضان میں روزے رکھے جاتے ہیں۔', 'ramzaan mein roze rakhe jaate hain.', 'People fast in Ramzan.'),
      L('صوفیوں کے مزاروں پر عرس ہوتا ہے۔', 'soofiyon ke mazaaron par urs hota hai.', 'Yearly festivals (urs) are held at the shrines of Sufi saints.'),
      L('پاکستان میں عیسائی، ہندو اور سکھ بھی رہتے ہیں۔', "paakistaan mein eesaai, hindu aur sikh bhi rehte hain.", 'Christians, Hindus and Sikhs also live in Pakistan.'),
      L('جھنڈے کا سفید رنگ اقلیتوں کی علامت ہے۔', 'jhanḍe ka safed rang aqalliyaton ki alaamat hai.', 'The white in the flag is a symbol of the minorities.'),
      L('ننکانہ صاحب سکھوں کا مقدس شہر ہے۔', 'nankaana saahib sikhon ka muqaddas shehar hai.', 'Nankana Sahib is a holy city for Sikhs.'),
    ],
    questions: [
      { q: 'What is held at the shrines of Sufi saints?', options: ['An urs', 'A cricket match', 'An election'], answer: 0 },
      { q: 'What does the white in the flag stand for?', options: ['Snow', 'Religious minorities', 'The sea'], answer: 1 },
      { q: 'For whom is Nankana Sahib a holy city?', options: ['Sikhs', 'Buddhists', 'Parsis'], answer: 0 },
    ],
  },
  {
    key: 'artsculture', title: 'Clothes, Music & Poets', emoji: '🎶',
    lead: "Shalwar kameez is worn across Pakistan by men and women alike, with a dupatta for women, and each region adds its own touch, like Sindh's ajrak or Peshawar's chappals. Music runs from the qawwali of Nusrat Fateh Ali Khan, who took it to the world, to ghazal singers, folk music and Coke Studio. Poetry matters here as almost nowhere else: Iqbal is the national poet, Ghalib and Mir are quoted in everyday talk, and Faiz Ahmed Faiz wrote some of the best-loved poems of the 20th century (still in copyright, so not quoted here).",
    lines: [
      L('پاکستان میں مرد اور عورتیں شلوار قمیض پہنتے ہیں۔', 'paakistaan mein mard aur auraten shalwaar qameez pehante hain.', 'In Pakistan men and women wear shalwar kameez.'),
      L('عورتیں ساتھ دوپٹہ بھی لیتی ہیں۔', 'auraten saath dupaṭṭa bhi leti hain.', 'Women wear a dupatta with it too.'),
      L('سندھ کی اجرک بہت مشہور ہے۔', 'sindh ki ajrak bohat mash-hoor hai.', 'The ajrak of Sindh is very famous.'),
      L('نصرت فتح علی خان نے قوالی کو دنیا بھر میں پہنچایا۔', 'nusrat fateh ali khaan ne qawwaali ko duniya bhar mein pahunchaaya.', 'Nusrat Fateh Ali Khan took qawwali all over the world.'),
      L('لوگ روزمرہ باتوں میں غالب کے شعر سناتے ہیں۔', "log rozmarra baaton mein ghaalib ke she'r sunaate hain.", "People quote Ghalib's verses in everyday conversation."),
      L('علامہ اقبال پاکستان کے قومی شاعر ہیں۔', "allaama iqbaal paakistaan ke qaumi shaa'ir hain.", "Allama Iqbal is Pakistan's national poet."),
    ],
    questions: [
      { q: 'What do men and women wear across Pakistan?', options: ['Shalwar kameez', 'Kimonos', 'Kilts'], answer: 0 },
      { q: 'Who took qawwali to the world?', options: ['Nusrat Fateh Ali Khan', 'Allama Iqbal', 'The Quaid-e-Azam'], answer: 0 },
      { q: 'What is Sindh famous for?', options: ['The ajrak', 'Basant', 'Nihari'], answer: 0 },
    ],
  },
  {
    key: 'diaspora', title: 'Urdu Around the World', emoji: '🌍',
    lead: 'Urdu is spoken far beyond Pakistan. In India it is one of the official scheduled languages, with millions of speakers in cities such as Hyderabad, Lucknow and Delhi, where the language was born. Large Pakistani communities live in Britain — especially Birmingham, Bradford, Manchester and London — and in the Gulf, the United States and Canada. Everyday spoken Urdu and Hindi are so close that speakers understand each other easily. Children of the diaspora often understand Urdu at home and learn to read it later, exactly as you are doing.',
    lines: [
      L('اردو پاکستان کے باہر بھی بولی جاتی ہے۔', 'urdu paakistaan ke baahar bhi boli jaati hai.', 'Urdu is spoken outside Pakistan too.'),
      L('بھارت میں حیدرآباد اور لکھنؤ اردو کے بڑے مرکز ہیں۔', 'bhaarat mein haidaraabaad aur lakhnau urdu ke baṛe markaz hain.', 'In India, Hyderabad and Lucknow are great centres of Urdu.'),
      L('برطانیہ میں بہت سے پاکستانی رہتے ہیں۔', 'bartaaniya mein bohat se paakistaani rehte hain.', 'Many Pakistanis live in Britain.'),
      L('برمنگھم اور بریڈفورڈ میں اردو عام سنائی دیتی ہے۔', 'barmingham aur braiḍforḍ mein urdu aam sunaai deti hai.', 'Urdu is often heard in Birmingham and Bradford.'),
      L('خلیجی ملکوں میں بھی لاکھوں پاکستانی کام کرتے ہیں۔', 'khaleeji mulkon mein bhi laakhon paakistaani kaam karte hain.', 'Millions of Pakistanis also work in the Gulf countries.'),
      L('روزمرہ اردو اور ہندی بولنے والے ایک دوسرے کو سمجھ لیتے ہیں۔', 'rozmarra urdu aur hindi bolne waale ek doosre ko samajh lete hain.', 'Speakers of everyday Urdu and Hindi understand each other.'),
      L('بہت سے بچے گھر میں اردو سنتے ہیں اور بعد میں پڑھنا سیکھتے ہیں۔', 'bohat se bachche ghar mein urdu sunte hain aur baad mein paṛhna seekhte hain.', 'Many children hear Urdu at home and learn to read it later.'),
    ],
    questions: [
      { q: 'Which two Indian cities are named as centres of Urdu?', options: ['Hyderabad and Lucknow', 'Mumbai and Chennai', 'Goa and Pune'], answer: 0 },
      { q: 'In which British cities is Urdu often heard?', options: ['Birmingham and Bradford', 'Paris and Rome', 'Oslo and Dublin'], answer: 0 },
      { q: 'Who understand each other easily?', options: ['Speakers of everyday Urdu and Hindi', 'Speakers of Urdu and Chinese', 'No one'], answer: 0 },
    ],
  },
]
