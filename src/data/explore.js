// Explore Pakistan — four provinces, Gilgit-Baltistan and the capital, for the 13–15, 16–18 and 18+ tracks.
//
// Every region follows the same card: Famous for · Then · Now · Made here · 4 places.
// English leads (hook, history, recent) and a short Urdu line follows each part, so learners read real Urdu in context.
// Facts are kept few and checkable; recent developments carry the year; figures are rounded and hedged.
// Contested matters (Kashmir, Balochistan's politics) are described neutrally. Urdu is reviewed on /review like everything else.
const S = (bn, roman, en) => ({ bn, roman, en })
const F = (emoji, line) => ({ emoji, ...line })
const W = (bn, roman, en, emoji) => ({ bn, roman, en, emoji })
const city = (id, name, bn, roman, emoji, lon, lat, fact, line, words) => ({ id, name, bn, roman, emoji, lon, lat, fact, line, words })

export const exploreRegions = [
  // ------------------------------------------------------------------------------------------------ Punjab
  {
    id: 'punjab', name: 'Punjab', bn: 'پنجاب', roman: 'panjaab', emoji: '🌾', color: '#E8A23A', unlock: 0,
    hook: "The land of five rivers, home to more than half of all Pakistanis. Punjab grows most of the country's wheat, and Lahore, its capital, is the cultural heart of Pakistan: Mughal monuments, poets, food streets and cricket.",
    intro: S('پنجاب پانچ دریاؤں کی سرزمین ہے۔', 'panjaab paanch daryaaon ki sarzameen hai.', 'Punjab is the land of five rivers.'),
    famous: [
      F('🕌', S('لاہور میں بادشاہی مسجد ہے۔', 'Lahore mein baadshaahi masjid hai.', 'Lahore has the Badshahi Mosque.')),
      F('🌾', S('پنجاب میں گندم کے کھیت ہیں۔', 'panjaab mein gandum ke khet hain.', 'Punjab has fields of wheat.')),
      F('🏏', S('پنجاب کے لوگ کرکٹ کے دیوانے ہیں۔', 'panjaab ke log krikeṭ ke deewaane hain.', 'The people of Punjab are mad about cricket.')),
    ],
    then: {
      en: 'Lahore was a great Mughal city: Akbar held court here, and Aurangzeb completed the Badshahi Mosque in 1673. After the British took Punjab in 1849 they dug canals that turned dry plains into farmland.',
      line: S('لاہور مغلوں کا شہر تھا۔', 'Lahore mughalon ka shehar tha.', 'Lahore was a city of the Mughals.'),
    },
    now: {
      en: "Today Punjab produces most of Pakistan's wheat and much of its cotton, and its cities make textiles, sports goods and surgical instruments. Lahore's Orange Line metro train opened in 2020.",
      line: S('لاہور میں اب میٹرو ٹرین چلتی ہے۔', 'Lahore mein ab meṭro ṭren chalti hai.', 'A metro train now runs in Lahore.'),
    },
    made: [
      F('👕', S('فیصل آباد میں کپڑا بنتا ہے۔', 'faisalaabaad mein kapṛa banta hai.', 'Cloth is made in Faisalabad.')),
      F('⚽', S('سیالکوٹ میں فٹ بال بنتے ہیں۔', 'siyaalkoṭ mein fuṭ baal bante hain.', 'Footballs are made in Sialkot.')),
      F('🥭', S('ملتان کے آم بہت میٹھے ہیں۔', 'Multan ke aam bohat meeṭhe hain.', 'The mangoes of Multan are very sweet.')),
    ],
    timeline: [
      ['1673', 'Emperor Aurangzeb completes the Badshahi Mosque in Lahore.'],
      ['1849', 'The British annex Punjab and begin building canal colonies.'],
      ['1940', 'The Lahore Resolution is passed on 23 March.'],
      ['1947', 'Punjab is divided between Pakistan and India; millions migrate in both directions.'],
      ['2020', 'The Orange Line metro opens in Lahore.'],
    ],
    economy: "Punjab is Pakistan's farming heartland — wheat, rice, sugar cane and cotton — and its industrial centre: Faisalabad for textiles, Sialkot for footballs and surgical instruments, Gujranwala for engineering.",
    cities: [
      city('lahore', 'Lahore', 'لاہور', 'Lahore', '🕌', 74.34, 31.55, 'Capital of Punjab and of Mughal splendour: the Royal Fort, the Badshahi Mosque and the Shalimar Gardens.', S('لاہور بہت پرانا شہر ہے۔', 'Lahore bohat puraana shehar hai.', 'Lahore is a very old city.'), [
        W('قلعہ', "qil'a", 'fort', '🏯'), W('باغ', 'baagh', 'garden', '🌳'), W('مسجد', 'masjid', 'mosque', '🕌')]),
      city('faisalabad', 'Faisalabad', 'فیصل آباد', 'faisalaabaad', '🧵', 73.08, 31.42, "Built by the British as Lyallpur in the 1890s around a clock tower; now Pakistan's textile city.", S('فیصل آباد میں گھنٹہ گھر ہے۔', 'faisalaabaad mein ghanṭa ghar hai.', 'Faisalabad has a clock tower.'), [
        W('گھنٹہ گھر', 'ghanṭa ghar', 'clock tower', '🕰️'), W('کپڑا', 'kapṛa', 'cloth', '🧵'), W('کارخانہ', 'kaarkhaana', 'factory', '🏭')]),
      city('multan', 'Multan', 'ملتان', 'Multan', '🕌', 71.47, 30.20, 'The "City of Saints", with blue-tiled Sufi shrines, famous mangoes and sohan halwa.', S('ملتان اولیا کا شہر ہے۔', 'Multan auliya ka shehar hai.', 'Multan is the city of saints.'), [
        W('ولی', 'wali', 'saint', '🕌'), W('حلوہ', 'halwa', 'halwa (a sweet)', '🍮'), W('گرمی', 'garmi', 'heat', '☀️')]),
      city('sialkot', 'Sialkot', 'سیالکوٹ', 'siyaalkoṭ', '⚽', 74.53, 32.49, "Makes many of the world's hand-stitched footballs, and is Allama Iqbal's birthplace.", S('علامہ اقبال سیالکوٹ میں پیدا ہوئے۔', 'allaama iqbaal siyaalkoṭ mein paida hue.', 'Allama Iqbal was born in Sialkot.'), [
        W('فٹ بال', 'fuṭ baal', 'football', '⚽'), W('سلائی', 'silaai', 'stitching', '🪡'), W('شاعر', "shaa'ir", 'poet', '✒️')]),
    ],
  },
  // ------------------------------------------------------------------------------------------------ Sindh
  {
    id: 'sindh', name: 'Sindh', bn: 'سندھ', roman: 'sindh', emoji: '🌊', color: '#2F7FB5', unlock: 0,
    hook: "Where the Indus meets the sea. Sindh holds Karachi, Pakistan's biggest city and port, and Mohenjo-daro, one of the oldest cities in the world, built some 4,500 years ago.",
    intro: S('سندھ میں دریائے سندھ سمندر سے ملتا ہے۔', 'sindh mein daryaa-e-sindh samandar se milta hai.', 'In Sindh the Indus river meets the sea.'),
    famous: [
      F('🏛️', S('موئن جو دڑو بہت پرانا شہر ہے۔', 'moen jo daṛo bohat puraana shehar hai.', 'Mohenjo-daro is a very old city.')),
      F('🟥', S('سندھ کی اجرک مشہور ہے۔', 'sindh ki ajrak mash-hoor hai.', 'The ajrak of Sindh is famous.')),
      F('🎶', S('سندھ میں صوفی کلام گایا جاتا ہے۔', 'sindh mein soofi kalaam gaaya jaata hai.', 'Sufi poetry is sung in Sindh.')),
    ],
    then: {
      en: "Around 2500 BCE the Indus Valley Civilisation built planned cities such as Mohenjo-daro, with straight streets, wells and covered drains. In 1947 Karachi became Pakistan's first capital and grew from a port town into a megacity as migrants arrived.",
      line: S('۱۹۴۷ میں کراچی پاکستان کا دارالحکومت بنا۔', 'unnees sau saintaalees mein Karaachi paakistaan ka daar-ul-hukoomat bana.', "In 1947 Karachi became Pakistan's capital."),
    },
    now: {
      en: "Karachi, with well over fifteen million people, handles most of Pakistan's sea trade and is its business and banking centre. In the east, the Thar desert's large coal reserves are now used to make electricity.",
      line: S('کراچی پاکستان کا سب سے بڑا شہر ہے۔', 'Karaachi paakistaan ka sab se baṛa shehar hai.', "Karachi is Pakistan's biggest city."),
    },
    made: [
      F('🚢', S('کراچی کی بندرگاہ پر جہاز آتے ہیں۔', 'Karaachi ki bandargaah par jahaaz aate hain.', "Ships come in to Karachi's port.")),
      F('☁️', S('سندھ میں کپاس اگتی ہے۔', 'sindh mein kapaas ugti hai.', 'Cotton grows in Sindh.')),
      F('🥭', S('سندھڑی آم سندھ کا ہے۔', 'sindhṛi aam sindh ka hai.', 'The Sindhri mango comes from Sindh.')),
    ],
    timeline: [
      ['c. 2500 BCE', 'Mohenjo-daro flourishes in the Indus Valley.'],
      ['711', 'Muhammad bin Qasim reaches Sindh, and Islam spreads in the region.'],
      ['1843', 'The British conquer Sindh.'],
      ['1947', "Karachi becomes Pakistan's first capital."],
      ['1960s', 'The capital moves north to Islamabad; Karachi stays the centre of business.'],
    ],
    economy: "Karachi drives the national economy: the main ports, the stock exchange, banks, textiles and much of manufacturing. Inland Sindh grows cotton, rice, sugar cane and mangoes, and the Thar desert holds one of the world's large coal deposits.",
    cities: [
      city('karachi', 'Karachi', 'کراچی', 'Karaachi', '🌊', 67.01, 24.86, "Pakistan's largest city and port, and the resting place of the Quaid-e-Azam in a white marble mausoleum.", S('کراچی سمندر کے کنارے ہے۔', 'Karaachi samandar ke kinaare hai.', 'Karachi is by the sea.'), [
        W('سمندر', 'samandar', 'sea', '🌊'), W('بندرگاہ', 'bandargaah', 'port', '⚓'), W('مزار', 'mazaar', 'mausoleum, shrine', '🕌')]),
      city('hyderabad', 'Hyderabad', 'حیدرآباد', 'haidaraabaad', '💍', 68.37, 25.40, "Sindh's second city, known for its glass bangles.", S('حیدرآباد کی چوڑیاں مشہور ہیں۔', 'haidaraabaad ki chooṛiyaan mash-hoor hain.', 'The bangles of Hyderabad are famous.'), [
        W('چوڑی', 'chooṛi', 'bangle', '💍'), W('شیشہ', 'sheesha', 'glass', '🪞'), W('بازار', 'baazaar', 'market', '🛒')]),
      city('sukkur', 'Sukkur', 'سکھر', 'sakhar', '🌉', 68.86, 27.70, "The Sukkur Barrage, opened in 1932, feeds one of the world's largest canal systems.", S('سکھر میں دریا پر بیراج ہے۔', 'sakhar mein darya par beraaj hai.', 'In Sukkur there is a barrage across the river.'), [
        W('بیراج', 'beraaj', 'barrage', '🌉'), W('نہر', 'nehar', 'canal', '🏞️'), W('پانی', 'paani', 'water', '💧')]),
      city('mohenjodaro', 'Mohenjo-daro', 'موئن جو دڑو', 'moen jo daṛo', '🏛️', 68.14, 27.33, 'Ruins of a 4,500-year-old city of the Indus Valley Civilisation, and a UNESCO World Heritage Site.', S('موئن جو دڑو کھنڈرات کا شہر ہے۔', 'moen jo daṛo khanḍaraat ka shehar hai.', 'Mohenjo-daro is a city of ruins.'), [
        W('کھنڈر', 'khanḍar', 'ruin', '🏚️'), W('اینٹ', 'eenṭ', 'brick', '🧱'), W('پرانا', 'puraana', 'old', '⏳')]),
    ],
  },
  // ------------------------------------------------------------------------------------------------ Islamabad
  {
    id: 'islamabad', name: 'Islamabad', bn: 'اسلام آباد', roman: 'islaamaabaad', emoji: '🏛️', color: '#8A63B8', unlock: 0,
    hook: 'A capital built from scratch. Islamabad was planned in the 1960s at the foot of the green Margalla Hills, next to the old city of Rawalpindi. Its white Faisal Mosque is one of the largest mosques in the world.',
    intro: S('اسلام آباد پاکستان کا دارالحکومت ہے۔', 'islaamaabaad paakistaan ka daar-ul-hukoomat hai.', "Islamabad is Pakistan's capital."),
    famous: [
      F('🕌', S('فیصل مسجد بہت بڑی ہے۔', 'faisal masjid bohat baṛi hai.', 'The Faisal Mosque is very big.')),
      F('⛰️', S('شہر کے پاس مارگلہ کی پہاڑیاں ہیں۔', 'shehar ke paas maargala ki pahaaṛiyaan hain.', 'The Margalla Hills are next to the city.')),
      F('🌳', S('اسلام آباد بہت سرسبز شہر ہے۔', 'islaamaabaad bohat sarsabz shehar hai.', 'Islamabad is a very green city.')),
    ],
    then: {
      en: 'In 1959 the government decided to build a new capital in the cooler north. The Greek planner Constantinos Doxiadis laid it out in sectors, each with its own market and green belt, and government offices moved in during the 1960s.',
      line: S('اسلام آباد ۱۹۶۰ کی دہائی میں بنا۔', 'islaamaabaad unnees sau saaṭh ki dahaai mein bana.', 'Islamabad was built in the 1960s.'),
    },
    now: {
      en: 'Parliament, the Supreme Court and the foreign embassies are here. The Faisal Mosque was completed in 1986 and the Pakistan Monument opened in 2007. With Rawalpindi next door, it forms one of the country\'s largest urban areas.',
      line: S('یہاں پارلیمنٹ اور سپریم کورٹ ہیں۔', 'yahaan paarliment aur sapreem korṭ hain.', 'Parliament and the Supreme Court are here.'),
    },
    made: [
      F('🎓', S('اسلام آباد میں بہت سی یونیورسٹیاں ہیں۔', 'islaamaabaad mein bohat si yooniwarsiṭiyaan hain.', 'There are many universities in Islamabad.')),
      F('💻', S('یہاں سافٹ ویئر کمپنیاں بھی ہیں۔', 'yahaan saafṭ wear kampaniyaan bhi hain.', 'There are software companies here too.')),
      F('🏺', S('لوک ورثہ میں پاکستان کی ثقافت دکھائی جاتی ہے۔', 'lok virsa mein paakistaan ki saqaafat dikhaai jaati hai.', "Lok Virsa shows Pakistan's culture.")),
    ],
    timeline: [
      ['1959', 'The government decides to build a new capital in the north.'],
      ['1961', 'Construction of Islamabad begins.'],
      ['1960s', 'Government offices move from Karachi (via Rawalpindi) to Islamabad.'],
      ['1986', 'The Faisal Mosque is completed.'],
      ['2007', 'The Pakistan Monument opens.'],
    ],
    economy: "Government, universities, embassies and services, plus a growing IT and software sector. Rawalpindi next door is an old trading and army city, and together the twin cities are one of the country's largest urban areas.",
    cities: [
      city('islamabad', 'Islamabad', 'اسلام آباد', 'islaamaabaad', '🏛️', 73.05, 33.69, 'The planned capital, laid out in lettered sectors such as F-6 and G-9.', S('اسلام آباد ایک صاف شہر ہے۔', 'islaamaabaad ek saaf shehar hai.', 'Islamabad is a clean city.'), [
        W('دارالحکومت', 'daar-ul-hukoomat', 'capital city', '🏛️'), W('سیکٹر', 'sekṭar', 'sector', '🗺️'), W('سفارت خانہ', 'sifaarat khaana', 'embassy', '🏢')]),
      city('rawalpindi', 'Rawalpindi', 'راولپنڈی', 'raawalpinḍi', '🚌', 73.05, 33.60, "Islamabad's older twin city next door (in Punjab), with busy bazaars like Raja Bazaar.", S('راولپنڈی اسلام آباد کا جڑواں شہر ہے۔', 'raawalpinḍi islaamaabaad ka juṛwaan shehar hai.', 'Rawalpindi is the twin city of Islamabad.'), [
        W('جڑواں', 'juṛwaan', 'twin', '👯'), W('بازار', 'baazaar', 'market', '🛒'), W('بس', 'bas', 'bus', '🚌')]),
      city('murree', 'Murree', 'مری', 'mari', '🌲', 73.39, 33.91, 'A hill station about an hour away (in Punjab), where families go to escape the summer heat and see snow in winter.', S('مری میں سردیوں میں برف پڑتی ہے۔', 'mari mein sardiyon mein barf paṛti hai.', 'Snow falls in Murree in winter.'), [
        W('برف', 'barf', 'snow', '❄️'), W('پہاڑی', 'pahaaṛi', 'hill', '⛰️'), W('سیر', 'sair', 'outing, trip', '🚶')]),
      city('taxila', 'Taxila', 'ٹیکسلا', 'ṭaiksila', '🏺', 72.80, 33.75, 'Ruins of an ancient city of learning from the Gandhara era, a UNESCO World Heritage Site (in Punjab).', S('ٹیکسلا میں پرانے کھنڈرات ہیں۔', 'ṭaiksila mein puraane khanḍaraat hain.', 'There are old ruins in Taxila.'), [
        W('عجائب گھر', "ajaa'ib ghar", 'museum', '🏛️'), W('مجسمہ', 'mujassama', 'statue', '🗿'), W('علم', 'ilm', 'knowledge, learning', '📚')]),
    ],
  },
  // ------------------------------------------------------------------------------------------------ Khyber Pakhtunkhwa
  {
    id: 'kp', name: 'Khyber Pakhtunkhwa', bn: 'خیبر پختونخوا', roman: 'khaibar pakhtoonkhwa', emoji: '🏞️', color: '#3E9B5F', unlock: 5,
    hook: 'Mountains, valleys and one of the oldest cities in South Asia. Khyber Pakhtunkhwa runs from the green Swat valley to the Khyber Pass, the ancient gateway to Afghanistan. Most people here speak Pashto.',
    intro: S('خیبر پختونخوا میں اونچے پہاڑ ہیں۔', 'khaibar pakhtoonkhwa mein oonche pahaaṛ hain.', 'Khyber Pakhtunkhwa has high mountains.'),
    famous: [
      F('🏞️', S('سوات کی وادی بہت خوبصورت ہے۔', 'swaat ki waadi bohat khoobsoorat hai.', 'The Swat valley is very beautiful.')),
      F('🛤️', S('درۂ خیبر ایک مشہور راستہ ہے۔', 'darra-e-khaibar ek mash-hoor raasta hai.', 'The Khyber Pass is a famous route.')),
      F('🍢', S('پشاور کے چپلی کباب مشہور ہیں۔', 'peshaawar ke chapli kabaab mash-hoor hain.', 'The chapli kebabs of Peshawar are famous.')),
    ],
    then: {
      en: 'Peshawar is one of the oldest living cities in South Asia. Around 2,000 years ago it was a capital of Gandhara, where Buddhist art flourished, and for centuries traders and armies crossed the Khyber Pass.',
      line: S('پشاور بہت پرانا شہر ہے۔', 'peshaawar bohat puraana shehar hai.', 'Peshawar is a very old city.'),
    },
    now: {
      en: 'The province was renamed Khyber Pakhtunkhwa in 2010, and the former tribal areas joined it in 2018. Peshawar\'s rapid bus line opened in 2020, and Swat and Chitral draw growing numbers of tourists.',
      line: S('۲۰۱۰ میں صوبے کا نیا نام رکھا گیا۔', 'do hazaar das mein soobe ka naya naam rakha gaya.', 'In 2010 the province was given a new name.'),
    },
    made: [
      F('🫖', S('پشاور میں تانبے کے برتن بنتے ہیں۔', 'peshaawar mein taambe ke bartan bante hain.', 'Copper pots are made in Peshawar.')),
      F('🍯', S('یہاں کا شہد مشہور ہے۔', 'yahaan ka shahad mash-hoor hai.', 'The honey from here is famous.')),
      F('💡', S('تربیلا ڈیم سے بجلی بنتی ہے۔', 'tarbela ḍaim se bijli banti hai.', 'Electricity is made at Tarbela Dam.')),
    ],
    timeline: [
      ['c. 100', 'Gandhara Buddhist art flourishes around Peshawar.'],
      ['1901', 'The British create the North-West Frontier Province.'],
      ['1976', 'Tarbela Dam on the Indus is completed.'],
      ['2010', 'The province is renamed Khyber Pakhtunkhwa.'],
      ['2018', 'The former tribal areas are merged into the province.'],
    ],
    economy: 'Farming, fruit orchards and forests in the valleys; hydropower from Tarbela and other dams; trade with Afghanistan through the Khyber Pass at Torkham; and a growing tourist trade in Swat, Chitral and Kaghan.',
    cities: [
      city('peshawar', 'Peshawar', 'پشاور', 'peshaawar', '🍢', 71.58, 34.01, 'One of South Asia\'s oldest cities, with the Qissa Khwani ("storytellers\'") bazaar.', S('پشاور میں قصہ خوانی بازار ہے۔', 'peshaawar mein qissa khwaani baazaar hai.', "Peshawar has the Storytellers' Bazaar."), [
        W('قصہ', 'qissa', 'tale', '📖'), W('کباب', 'kabaab', 'kebab', '🍢'), W('قہوہ', 'qahwa', 'green tea (kahwa)', '🍵')]),
      city('swat', 'Mingora (Swat)', 'سوات', 'swaat', '🏞️', 72.36, 34.77, 'The main town of the Swat valley, often called the "Switzerland of the East" for its snowy peaks.', S('سوات میں برف پڑتی ہے۔', 'swaat mein barf paṛti hai.', 'Snow falls in Swat.'), [
        W('وادی', 'waadi', 'valley', '🏞️'), W('جھیل', 'jheel', 'lake', '🏔️'), W('دریا', 'darya', 'river', '🌊')]),
      city('abbottabad', 'Abbottabad', 'ایبٹ آباد', 'aibaṭaabaad', '🌲', 73.21, 34.17, 'A hill town of pine forests and schools, on the road north towards the mountains.', S('ایبٹ آباد ٹھنڈا شہر ہے۔', 'aibaṭaabaad ṭhanḍa shehar hai.', 'Abbottabad is a cool city.'), [
        W('چیڑ', 'cheeṛ', 'pine tree', '🌲'), W('پہاڑی', 'pahaaṛi', 'hill', '⛰️'), W('ٹھنڈا', 'ṭhanḍa', 'cool, cold', '🥶')]),
      city('chitral', 'Chitral', 'چترال', 'chitraal', '🏇', 71.79, 35.85, 'High in the Hindu Kush, home of the Kalash people, and near the Shandur polo festival.', S('چترال میں پولو کھیلا جاتا ہے۔', 'chitraal mein polo khela jaata hai.', 'Polo is played in Chitral.'), [
        W('پولو', 'polo', 'polo', '🏇'), W('گھوڑا', 'ghoṛa', 'horse', '🐴'), W('درہ', 'darra', 'mountain pass', '🛤️')]),
    ],
  },
  // ------------------------------------------------------------------------------------------------ Balochistan
  {
    id: 'balochistan', name: 'Balochistan', bn: 'بلوچستان', roman: 'balochistaan', emoji: '🏜️', color: '#D9822B', unlock: 10,
    hook: "The largest province by far — about two-fifths of Pakistan's land — but the smallest by population. Deserts, rugged mountains and a long Arabian Sea coast, with Quetta's fruit orchards in the north.",
    intro: S('بلوچستان پاکستان کا سب سے بڑا صوبہ ہے۔', 'balochistaan paakistaan ka sab se baṛa soobah hai.', "Balochistan is Pakistan's largest province."),
    famous: [
      F('🏜️', S('بلوچستان میں صحرا اور پہاڑ ہیں۔', 'balochistaan mein sehra aur pahaaṛ hain.', 'Balochistan has deserts and mountains.')),
      F('🍎', S('کوئٹہ کے سیب اور انگور مشہور ہیں۔', 'kwaṭṭa ke seb aur angoor mash-hoor hain.', 'The apples and grapes of Quetta are famous.')),
      F('🌊', S('گوادر سمندر کے کنارے ہے۔', 'gawaadar samandar ke kinaare hai.', 'Gwadar is on the coast.')),
    ],
    then: {
      en: 'Mehrgarh, near the Bolan Pass, is one of the oldest farming villages in South Asia, about 9,000 years old. Much later the Khanate of Kalat ruled large parts of the region; it joined Pakistan in 1948.',
      line: S('مہر گڑھ بہت پرانا گاؤں ہے۔', 'mehar gaṛh bohat puraana gaaon hai.', 'Mehrgarh is a very old village.'),
    },
    now: {
      en: 'Balochistan holds gas, copper and gold; the Sui gas field, found in 1952, supplied homes across the country for decades. Gwadar has been developed as a deep-sea port since the 2000s. The province is rich in resources but has the highest poverty rates, and its politics are often tense.',
      line: S('گوادر میں نئی بندرگاہ بنی ہے۔', 'gawaadar mein nayi bandargaah bani hai.', 'A new port has been built at Gwadar.'),
    },
    made: [
      F('🔥', S('سوئی سے گیس نکلتی ہے۔', 'sui se gais nikalti hai.', 'Gas comes from Sui.')),
      F('🧶', S('بلوچی کڑھائی بہت رنگین ہوتی ہے۔', 'balochi kaṛhaai bohat rangeen hoti hai.', 'Balochi embroidery is very colourful.')),
      F('🌴', S('تربت میں کھجوریں اگتی ہیں۔', 'turbat mein khajooren ugti hain.', 'Dates grow in Turbat.')),
    ],
    timeline: [
      ['c. 7000 BCE', 'Farming begins at Mehrgarh near the Bolan Pass.'],
      ['1948', 'The state of Kalat joins Pakistan.'],
      ['1952', 'Natural gas is discovered at Sui.'],
      ['1970', 'Balochistan becomes a full province.'],
      ['2007', 'The first phase of Gwadar port opens.'],
    ],
    economy: 'Natural gas from Sui, minerals such as copper and gold at Saindak and Reko Diq, fishing along the Makran coast, and fruit — apples, grapes and dates — around Quetta and Turbat. Gwadar is being developed as a major port.',
    cities: [
      city('quetta', 'Quetta', 'کوئٹہ', 'kwaṭṭa', '🍎', 67.00, 30.18, 'The provincial capital, ringed by mountains and famous for its fruit and dried fruit.', S('کوئٹہ پہاڑوں میں ہے۔', 'kwaṭṭa pahaaṛon mein hai.', 'Quetta is in the mountains.'), [
        W('سیب', 'seb', 'apple', '🍎'), W('خشک میوہ', 'khushk mewa', 'dried fruit and nuts', '🥜'), W('سردی', 'sardi', 'cold', '❄️')]),
      city('gwadar', 'Gwadar', 'گوادر', 'gawaadar', '⚓', 62.33, 25.13, 'A fishing town on the Arabian Sea, now a deep-sea port.', S('گوادر میں مچھیرے رہتے ہیں۔', 'gawaadar mein machhere rehte hain.', 'Fishermen live in Gwadar.'), [
        W('مچھیرا', 'machhera', 'fisherman', '🎣'), W('کشتی', 'kashti', 'boat', '⛵'), W('ساحل', 'saahil', 'coast, beach', '🏖️')]),
      city('ziarat', 'Ziarat', 'زیارت', 'ziyaarat', '🌲', 67.72, 30.38, 'A hill station with ancient juniper forests, where the Quaid-e-Azam spent his last summer in 1948.', S('زیارت میں صنوبر کے پرانے درخت ہیں۔', 'ziyaarat mein sanobar ke puraane darakht hain.', 'Ziarat has ancient juniper trees.'), [
        W('صنوبر', 'sanobar', 'juniper', '🌲'), W('جنگل', 'jangal', 'forest', '🌳'), W('آرام', 'aaraam', 'rest', '😌')]),
      city('turbat', 'Turbat', 'تربت', 'turbat', '🌴', 63.05, 26.00, 'In the Kech valley, known for its dates.', S('تربت کی کھجوریں مشہور ہیں۔', 'turbat ki khajooren mash-hoor hain.', 'The dates of Turbat are famous.'), [
        W('کھجور', 'khajoor', 'date (fruit)', '🌴'), W('وادی', 'waadi', 'valley', '🏞️'), W('گرمی', 'garmi', 'heat', '☀️')]),
    ],
  },
  // ------------------------------------------------------------------------------------------------ Gilgit-Baltistan
  {
    id: 'gb', name: 'Gilgit-Baltistan', bn: 'گلگت بلتستان', roman: 'gilgit baltistaan', emoji: '🏔️', color: '#4C9BD6', unlock: 15,
    hook: "The roof of Pakistan. Five of the world's fourteen peaks over 8,000 metres stand here, including K2, and the Karakoram Highway climbs to the Khunjerab Pass on the border with China.",
    intro: S('گلگت بلتستان میں دنیا کے اونچے پہاڑ ہیں۔', 'gilgit baltistaan mein duniya ke oonche pahaaṛ hain.', "Gilgit-Baltistan has some of the world's highest mountains."),
    famous: [
      F('🏔️', S('کے ٹو دنیا کا دوسرا بلند پہاڑ ہے۔', 'ke ṭu duniya ka doosra baland pahaaṛ hai.', "K2 is the world's second-highest mountain.")),
      F('🧊', S('یہاں بڑے بڑے گلیشیئر ہیں۔', 'yahaan baṛe baṛe gleshiyar hain.', 'There are huge glaciers here.')),
      F('🍑', S('ہنزہ کی خوبانیاں مشہور ہیں۔', 'hunza ki khubaaniyaan mash-hoor hain.', 'The apricots of Hunza are famous.')),
    ],
    then: {
      en: 'For centuries small mountain kingdoms such as Hunza and Nagar ruled the valleys, and travellers crossed on Silk Road routes. In 1947–48 the region came under Pakistani administration.',
      line: S('ہنزہ ایک پرانی ریاست تھی۔', 'hunza ek puraani riyaasat thi.', 'Hunza was an old princely state.'),
    },
    now: {
      en: 'The Karakoram Highway, completed in 1978, links the region to China. Gilgit-Baltistan has had its own elected assembly since 2009. Its status is tied to the wider Kashmir dispute, so it is administered by Pakistan but is not a full province.',
      line: S('شاہراہِ قراقرم چین تک جاتی ہے۔', 'shaahraah-e-qaraaqaram cheen tak jaati hai.', 'The Karakoram Highway goes all the way to China.'),
    },
    made: [
      F('🍑', S('یہاں خوبانیاں سکھائی جاتی ہیں۔', 'yahaan khubaaniyaan sukhaai jaati hain.', 'Apricots are dried here.')),
      F('🧗', S('کوہ پیما دنیا بھر سے آتے ہیں۔', 'koh paima duniya bhar se aate hain.', 'Climbers come from all over the world.')),
      F('💧', S('گلیشیئر دریائے سندھ کو پانی دیتے ہیں۔', 'gleshiyar daryaa-e-sindh ko paani dete hain.', 'The glaciers give water to the Indus.')),
    ],
    timeline: [
      ['1891', 'The British take control of Hunza and Nagar.'],
      ['1948', 'The region comes under Pakistani administration.'],
      ['1954', 'K2 is first climbed, by an Italian expedition.'],
      ['1978', 'The Karakoram Highway is completed.'],
      ['2009', 'Gilgit-Baltistan gets its own elected assembly.'],
    ],
    economy: 'Tourism and mountaineering, apricots, cherries and other fruit, and trade with China over the Khunjerab Pass. The glaciers here feed the Indus, which the whole country depends on.',
    cities: [
      city('gilgit', 'Gilgit', 'گلگت', 'gilgit', '🌉', 74.31, 35.92, 'The regional capital, near where the Gilgit and Hunza rivers meet.', S('گلگت دریاؤں کے پاس ہے۔', 'gilgit daryaaon ke paas hai.', 'Gilgit is near the rivers.'), [
        W('پل', 'pul', 'bridge', '🌉'), W('دریا', 'darya', 'river', '🌊'), W('پہاڑ', 'pahaaṛ', 'mountain', '⛰️')]),
      city('hunza', 'Karimabad (Hunza)', 'ہنزہ', 'hunza', '🍑', 74.66, 36.32, 'Terraced orchards beneath Baltit Fort, with views of the peak of Rakaposhi.', S('ہنزہ میں بلتت قلعہ ہے۔', "hunza mein baltit qil'a hai.", 'Hunza has Baltit Fort.'), [
        W('خوبانی', 'khubaani', 'apricot', '🍑'), W('قلعہ', "qil'a", 'fort', '🏯'), W('کھیت', 'khet', 'field', '🌾')]),
      city('skardu', 'Skardu', 'اسکردو', 'iskardu', '🧗', 75.63, 35.30, 'On the Indus, and the gateway to K2 and the Baltoro Glacier.', S('اسکردو سے کے ٹو کا راستہ جاتا ہے۔', 'iskardu se ke ṭu ka raasta jaata hai.', 'The route to K2 starts from Skardu.'), [
        W('گلیشیئر', 'gleshiyar', 'glacier', '🧊'), W('کوہ پیما', 'koh paima', 'mountain climber', '🧗'), W('صحرا', 'sehra', 'desert', '🏜️')]),
      city('khunjerab', 'Khunjerab Pass', 'خنجراب', 'khunjeraab', '🛂', 75.42, 36.85, 'At about 4,700 metres, one of the highest paved border crossings in the world, on the road to China.', S('خنجراب پر پاکستان اور چین ملتے ہیں۔', 'khunjeraab par paakistaan aur cheen milte hain.', 'Pakistan and China meet at Khunjerab.'), [
        W('سرحد', 'sarhad', 'border', '🛂'), W('برف', 'barf', 'snow', '❄️'), W('یاک', 'yaak', 'yak', '🐂')]),
    ],
  },
]

// Fuller reading for the 18+ track: two short paragraphs per region on why it matters.
// Figures are rounded and hedged and should be rechecked when they are reviewed.
const deep = {
  punjab: [
    'Punjab is home to well over half of Pakistan\'s population and produces most of its wheat and a large share of its rice, cotton and sugar cane, thanks to a canal network built from the late 1800s onwards. Its cities hold much of the country\'s industry: textiles in Faisalabad, sports goods and surgical instruments in Sialkot, and light engineering in Gujranwala.',
    'Because it is so large, Punjab carries great political weight, and the balance between Punjab and the smaller provinces is a constant theme in national politics. The partition of 1947 cut Punjab in two; memories of that migration, and of the families divided by the border, are still part of family life on both sides.',
  ],
  sindh: [
    "Karachi is Pakistan's commercial capital: most of its sea trade passes through Karachi port and Port Qasim, and the stock exchange, central bank and many company headquarters are there. The city grew enormously after 1947 as migrants arrived from India and later from every part of Pakistan, which makes it the country's most diverse city.",
    'Inland, Sindh depends on the Indus and its barrages for farming, and it is among the places most exposed to floods and heat; the 2022 floods hit Sindh especially hard. Its Sufi heritage — the poetry of Shah Abdul Latif Bhittai and the shrine of Lal Shahbaz Qalandar at Sehwan — is central to its identity.',
  ],
  islamabad: [
    'Islamabad was designed as a modern administrative city, with sectors separated by green belts and the Margalla Hills National Park on its northern edge. It is home to the federal government, the courts, the diplomatic enclave and several leading universities, and it has one of the highest average incomes in the country.',
    "Rawalpindi next door is older and busier: an army headquarters town and a trading city. The twin cities depend on each other — many people live in one and work in the other — and the metro bus line opened in 2015 to connect them.",
  ],
  kp: [
    'Khyber Pakhtunkhwa is the heartland of the Pashtun people and their language, Pashto, though Hindko, Chitrali (Khowar) and other languages are spoken too. Its rivers and dams, especially Tarbela on the Indus, produce a large share of the country\'s hydroelectric power.',
    'The province suffered badly from militant violence in the 2000s and 2010s, and the merger of the former tribal areas in 2018 was meant to bring them into the normal system of law and government. Peace has brought tourists back to Swat, Chitral and Kaghan, and its border with Afghanistan remains important for trade.',
  ],
  balochistan: [
    "Balochistan covers roughly two-fifths of Pakistan's land but holds only around a twentieth of its people. It is rich in natural gas, copper, gold and coal, and its coast includes Gwadar, developed with Chinese investment as part of the China–Pakistan Economic Corridor.",
    'Many Baloch feel they have not shared fairly in the wealth taken from their land, and there have been several periods of insurgency since 1948 as well as heavy security operations. Questions of rights, development and provincial control of resources are among the most debated in Pakistani politics.',
  ],
  gb: [
    "Gilgit-Baltistan's glaciers are among the largest outside the polar regions, and their meltwater feeds the Indus that the rest of Pakistan depends on. Climate change and glacial lake floods are growing concerns here, along with landslides on the Karakoram Highway.",
    'Its constitutional status is linked to the Kashmir dispute between Pakistan and India, so it is administered by Pakistan with its own assembly and government but without full provincial status. Tourism, mountaineering and trade with China are its main hopes for growth.',
  ],
}
exploreRegions.forEach((r) => {
  r.deep = deep[r.id]
})

export const exploreById = Object.fromEntries(exploreRegions.map((r) => [r.id, r]))

/** Every region name and city with its picture, for the quizzes. */
export const exploreCities = exploreRegions.flatMap((r) => r.cities.map((c) => ({ ...c, region: r.id })))
