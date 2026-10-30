// Explore the Arab World — six regions, for the 13–15, 16–18 and 18+ tracks.
//
// Every region follows the same card: Famous for · Then · Now · Made here · 4 places.
// English leads (hook, history, recent) and a short Arabic line follows each part, so learners read real Arabic in context.
// Facts are kept few and checkable; recent developments carry the year; figures are rounded and hedged.
// Contested matters (Jerusalem and Palestine, Western Sahara, the wars in Sudan, Syria and Yemen) are described
// neutrally. Arabic is reviewed on /review like everything else.
const S = (bn, roman, en) => ({ bn, roman, en })
const F = (emoji, line) => ({ emoji, ...line })
const W = (bn, roman, en, emoji) => ({ bn, roman, en, emoji })
const city = (id, name, bn, roman, emoji, lon, lat, fact, line, words) => ({ id, name, bn, roman, emoji, lon, lat, fact, line, words })

export const exploreRegions = [
  // ------------------------------------------------------------------------------------------------ Egypt & Sudan
  {
    id: 'nile', name: 'Egypt & Sudan', bn: 'مِصْرُ وَالسُّودَانُ', roman: 'miṣru wa-s-suudaan', emoji: '🔺', color: '#2F7FB5', unlock: 0,
    hook: 'The Nile runs the length of both countries. Egypt is the most populous Arab country, home to the Pyramids of Giza and to Cairo, the largest city in the Arab world. Sudan, where the Blue and White Nile meet at Khartoum, has even more ancient pyramids than Egypt.',
    intro: S('النِّيلُ أَطْوَلُ نَهْرٍ فِي إِفْرِيقْيَا.', 'an-niilu aṭwalu nahrin fii ifriiqyaa.', 'The Nile is the longest river in Africa.'),
    famous: [
      F('🔺', S('فِي مِصْرَ أَهْرَامَاتُ الْجِيزَةِ.', 'fii miṣra ahraamaatu l-jiiza.', 'Egypt has the Pyramids of Giza.')),
      F('📚', S('الْأَزْهَرُ فِي الْقَاهِرَةِ جَامِعَةٌ قَدِيمَةٌ جِدًّا.', 'al-azharu fi l-qaahira jaamiʿatun qadiimatun jiddan.', 'Al-Azhar in Cairo is a very old university.')),
      F('🌊', S('يَلْتَقِي النِّيلُ الْأَزْرَقُ وَالنِّيلُ الْأَبْيَضُ فِي الْخُرْطُومِ.', 'yaltaqi n-niilu l-azraqu wa-n-niilu l-abyaḍu fi l-khurṭuum.', 'The Blue Nile and the White Nile meet in Khartoum.')),
    ],
    then: {
      en: 'About 4,500 years ago the pharaohs built the Great Pyramid at Giza. Cairo was founded by the Fatimids in 969, and the Al-Azhar mosque followed a year later; it is among the oldest working universities in the world.',
      line: S('بَنَى الْفَرَاعِنَةُ الْأَهْرَامَاتِ.', 'banaa l-faraaʿinatu l-ahraamaat.', 'The pharaohs built the pyramids.'),
    },
    now: {
      en: "Egypt's population passed 100 million in 2020, and the Grand Egyptian Museum beside the Pyramids opened in 2025. Sudan has been torn by war since April 2023, which has forced millions of people from their homes.",
      line: S('يَعِيشُ فِي مِصْرَ أَكْثَرُ مِنْ مِئَةِ مِلْيُونِ شَخْصٍ.', 'yaʿiishu fii miṣra aktharu min miʾati milyuuni shakhṣ.', 'More than a hundred million people live in Egypt.'),
    },
    made: [
      F('👕', S('الْقُطْنُ الْمِصْرِيُّ مَشْهُورٌ.', 'al-quṭnu l-miṣriyyu mashhuur.', 'Egyptian cotton is famous.')),
      F('🚢', S('تَمُرُّ السُّفُنُ فِي قَنَاةِ السُّوَيْسِ.', 'tamurru s-sufunu fii qanaati s-suways.', 'Ships pass through the Suez Canal.')),
      F('🌿', S('يَأْتِي الصَّمْغُ الْعَرَبِيُّ مِنَ السُّودَانِ.', 'yaʾti ṣ-ṣamghu l-ʿarabiyyu mina s-suudaan.', 'Gum arabic comes from Sudan.')),
    ],
    timeline: [
      ['c. 2560 BCE', 'The Great Pyramid of Giza is completed.'],
      ['969', 'The Fatimids found Cairo; Al-Azhar is built the next year.'],
      ['1869', 'The Suez Canal opens.'],
      ['1956', 'Sudan becomes independent; Egypt nationalises the Suez Canal.'],
      ['2023', 'War breaks out in Sudan in April.'],
    ],
    economy: "Egypt earns from the Suez Canal, tourism, natural gas, farming along the Nile and money sent home by Egyptians working abroad. Sudan farms cotton, sesame and livestock and produces much of the world's gum arabic; its economy has been shattered by the war.",
    cities: [
      city('cairo', 'Cairo', 'الْقَاهِرَة', 'al-qaahira', '🕌', 31.24, 30.04, 'The largest city in the Arab world: the old Islamic city, Al-Azhar, the Khan el-Khalili market and, at Giza on its edge, the Pyramids.', S('الْقَاهِرَةُ مَدِينَةٌ كَبِيرَةٌ جِدًّا.', 'al-qaahiratu madiinatun kabiiratun jiddan.', 'Cairo is a very big city.'), [
        W('مَدِينَة', 'madiina', 'city', '🏙️'), W('جَامِعَة', 'jaamiʿa', 'university', '🎓'), W('سُوق', 'suuq', 'market', '🛍️')]),
      city('alexandria', 'Alexandria', 'الْإِسْكَنْدَرِيَّة', 'al-iskandariyya', '⛵', 29.92, 31.20, 'Founded by Alexander the Great in 331 BCE. Its ancient lighthouse was one of the Seven Wonders of the World, and its new library opened in 2002.', S('الْإِسْكَنْدَرِيَّةُ عَلَى الْبَحْرِ.', 'al-iskandariyyatu ʿala l-baḥr.', 'Alexandria is on the sea.'), [
        W('مَكْتَبَة', 'maktaba', 'library', '📚'), W('مَنَارَة', 'manaara', 'lighthouse', '🗼'), W('مِينَاء', 'miinaaʾ', 'port', '⚓')]),
      city('luxor', 'Luxor', 'الْأُقْصُر', 'al-uqṣur', '🏛️', 32.64, 25.69, "Ancient Thebes: the temples of Karnak and Luxor, and Tutankhamun's tomb in the Valley of the Kings.", S('فِي الْأُقْصُرِ مَعَابِدُ قَدِيمَةٌ.', 'fi l-uqṣuri maʿaabidu qadiima.', 'There are ancient temples in Luxor.'), [
        W('مَعْبَد', 'maʿbad', 'temple', '🏛️'), W('مَلِك', 'malik', 'king', '👑'), W('تَارِيخ', 'taariikh', 'history', '📜')]),
      city('khartoum', 'Khartoum', 'الْخُرْطُوم', 'al-khurṭuum', '🌊', 32.53, 15.50, "Sudan's capital, where the Blue Nile and the White Nile meet. Much of the city has been damaged in the war since 2023.", S('الْخُرْطُومُ عَاصِمَةُ السُّودَانِ.', 'al-khurṭuumu ʿaaṣimatu s-suudaan.', 'Khartoum is the capital of Sudan.'), [
        W('عَاصِمَة', 'ʿaaṣima', 'capital city', '🏛️'), W('نَهْر', 'nahr', 'river', '🏞️'), W('جِسْر', 'jisr', 'bridge', '🌉')]),
    ],
  },
  // ------------------------------------------------------------------------------------------------ The Levant
  {
    id: 'levant', name: 'The Levant', bn: 'بِلَادُ الشَّامِ', roman: 'bilaadu sh-shaam', emoji: '🌲', color: '#2E8B57', unlock: 0,
    hook: "Syria, Lebanon, Jordan and Palestine, along the eastern Mediterranean. Damascus is one of the oldest continuously inhabited cities in the world; Jerusalem is holy to Muslims, Christians and Jews; and Petra, carved into rose-red rock, is Jordan's great wonder.",
    intro: S('بِلَادُ الشَّامِ عَلَى الْبَحْرِ الْأَبْيَضِ الْمُتَوَسِّطِ.', 'bilaadu sh-shaami ʿala l-baḥri l-abyaḍi l-mutawassiṭ.', 'The Levant is on the Mediterranean Sea.'),
    famous: [
      F('🕌', S('فِي الْقُدْسِ الْمَسْجِدُ الْأَقْصَى.', 'fi l-qudsi l-masjidu l-aqṣaa.', 'Al-Aqsa Mosque is in Jerusalem.')),
      F('🌲', S('الْأَرْزُ رَمْزُ لُبْنَانَ.', 'al-arzu ramzu lubnaan.', 'The cedar is the symbol of Lebanon.')),
      F('🏜️', S('الْبَتْرَاءُ مَدِينَةٌ مَنْحُوتَةٌ فِي الصَّخْرِ.', 'al-batraaʾu madiinatun manḥuutatun fi ṣ-ṣakhr.', 'Petra is a city carved into the rock.')),
    ],
    then: {
      en: "Damascus became the capital of the Umayyad caliphate in 661, and its great Umayyad Mosque was finished around 715. When the Ottoman Empire fell in 1918, Britain and France divided the region between them and drew most of today's borders.",
      line: S('كَانَتْ دِمَشْقُ عَاصِمَةَ الْأُمَوِيِّينَ.', 'kaanat dimashqu ʿaaṣimata l-umawiyyiin.', 'Damascus was the capital of the Umayyads.'),
    },
    now: {
      en: "Syria's war, which began in 2011, drove millions from their homes; the Assad government fell in December 2024. Lebanon has been in a deep economic crisis since 2019, Gaza has suffered devastating war since October 2023, and Jordan hosts large numbers of refugees.",
      line: S('يَسْتَقْبِلُ الْأُرْدُنُّ لَاجِئِينَ كَثِيرِينَ.', 'yastaqbilu l-urdunnu laajiʾiina kathiiriin.', 'Jordan takes in many refugees.'),
    },
    made: [
      F('🫒', S('تُزْرَعُ أَشْجَارُ الزَّيْتُونِ فِي فِلَسْطِينَ.', 'tuzraʿu ashjaaru z-zaytuuni fii filasṭiin.', 'Olive trees are grown in Palestine.')),
      F('🧼', S('صَابُونُ حَلَبَ مَشْهُورٌ.', 'ṣaabuunu ḥalaba mashhuur.', 'Aleppo soap is famous.')),
      F('🥙', S('الْحُمُّصُ وَالْفَلَافِلُ مِنْ أَطْبَاقِ الشَّامِ.', 'al-ḥummuṣu wa-l-falaafilu min aṭbaaqi sh-shaam.', 'Hummus and falafel are dishes of the Levant.')),
    ],
    timeline: [
      ['661', 'Damascus becomes the capital of the Umayyad caliphate.'],
      ['1187', 'Salah al-Din (Saladin) takes Jerusalem.'],
      ['1918', 'Ottoman rule ends; British and French mandates follow.'],
      ['1948', 'Israel is created; some 700,000 Palestinians flee or are driven from their homes — the Nakba ("catastrophe").'],
      ['2011', 'War begins in Syria.'],
    ],
    economy: "Jordan relies on services, tourism, phosphates and potash; Lebanon on banking, tourism and money sent home by Lebanese abroad, all hit hard by its crisis. Palestinian farmers grow olives and citrus, and Syria's farms and factories are slowly rebuilding after years of war.",
    cities: [
      city('damascus', 'Damascus', 'دِمَشْق', 'dimashq', '🕌', 36.29, 33.51, 'One of the oldest continuously inhabited cities in the world, with the Umayyad Mosque and the covered Hamidiyya souq.', S('دِمَشْقُ مَدِينَةٌ قَدِيمَةٌ جِدًّا.', 'dimashqu madiinatun qadiimatun jiddan.', 'Damascus is a very old city.'), [
        W('جَامِع', 'jaamiʿ', 'great mosque', '🕌'), W('قَدِيم', 'qadiim', 'old', '🏚️'), W('يَاسَمِين', 'yaasamiin', 'jasmine', '🌼')]),
      city('jerusalem', 'Jerusalem', 'الْقُدْس', 'al-quds', '🕌', 35.23, 31.78, 'Holy to Muslims, Christians and Jews: the Dome of the Rock and Al-Aqsa Mosque, the Church of the Holy Sepulchre and the Western Wall all stand within its old walls. Its status is one of the most disputed questions in the world.', S('الْقُدْسُ مَدِينَةٌ مُقَدَّسَةٌ.', 'al-qudsu madiinatun muqaddasa.', 'Jerusalem is a holy city.'), [
        W('قُبَّة', 'qubba', 'dome', '🕌'), W('صَخْرَة', 'ṣakhra', 'rock', '🪨'), W('سُور', 'suur', 'city wall', '🧱')]),
      city('beirut', 'Beirut', 'بَيْرُوت', 'bayruut', '🌊', 35.50, 33.89, "Lebanon's capital on the Mediterranean, known for its books, music and food. The port explosion of August 2020 destroyed much of the city centre.", S('بَيْرُوتُ عَلَى الْبَحْرِ.', 'bayruutu ʿala l-baḥr.', 'Beirut is on the sea.'), [
        W('مَطْبَعَة', 'maṭbaʿa', 'printing press', '🖨️'), W('شَاطِئ', 'shaaṭiʾ', 'beach', '🏖️'), W('أَرْز', 'arz', 'cedar', '🌲')]),
      city('amman', 'Amman', 'عَمَّان', 'ʿammaan', '🏛️', 35.93, 31.95, "Jordan's capital, built on hills around a Roman theatre; Petra and the desert of Wadi Rum are a few hours to the south.", S('فِي عَمَّانَ مَسْرَحٌ رُومَانِيٌّ.', 'fii ʿammaana masraḥun ruumaaniyy.', 'There is a Roman theatre in Amman.'), [
        W('مَسْرَح', 'masraḥ', 'theatre', '🎭'), W('تَلّ', 'tall', 'hill', '⛰️'), W('صَحْرَاء', 'ṣaḥraaʾ', 'desert', '🏜️')]),
    ],
  },
  // ------------------------------------------------------------------------------------------------ The Gulf
  {
    id: 'gulf', name: 'The Gulf', bn: 'الْخَلِيجُ', roman: 'al-khaliij', emoji: '🏙️', color: '#E8A23A', unlock: 0,
    hook: "Saudi Arabia, Kuwait, Bahrain, Qatar and the United Arab Emirates. Makkah and Madinah, Islam's two holiest cities, are here, and so are some of the world's largest oil and gas reserves, which turned fishing and pearl-diving towns into glittering modern cities in a few decades.",
    intro: S('فِي الْخَلِيجِ صَحْرَاءُ وَبَحْرٌ وَمُدُنٌ حَدِيثَةٌ.', 'fi l-khaliiji ṣaḥraaʾu wa-baḥrun wa-mudunun ḥadiitha.', 'The Gulf has desert, sea and modern cities.'),
    famous: [
      F('🕋', S('يَحُجُّ الْمُسْلِمُونَ إِلَى مَكَّةَ.', 'yaḥujju l-muslimuuna ilaa makka.', 'Muslims go on Hajj to Makkah.')),
      F('🏙️', S('بُرْجُ خَلِيفَةَ فِي دُبَيّ أَطْوَلُ بِنَاءٍ فِي الْعَالَمِ.', 'burju khaliifata fii dubayy aṭwalu binaaʾin fi l-ʿaalam.', 'The Burj Khalifa in Dubai is the tallest building in the world.')),
      F('🦅', S('الصَّقْرُ طَائِرٌ مَحْبُوبٌ فِي الْخَلِيجِ.', 'aṣ-ṣaqru ṭaaʾirun maḥbuubun fi l-khaliij.', 'The falcon is a much-loved bird in the Gulf.')),
    ],
    then: {
      en: 'The Prophet Muhammad was born in Makkah around 570, and Islam spread from Makkah and Madinah across the world. Before oil, Gulf towns lived from pearl-diving, fishing and trade; oil was found in Bahrain in 1932 and in Saudi Arabia in 1938.',
      line: S('كَانَ النَّاسُ يَغُوصُونَ لِيَجْمَعُوا اللُّؤْلُؤَ.', 'kaana n-naasu yaghuuṣuuna li-yajmaʿu l-luʾluʾ.', 'People used to dive to gather pearls.'),
    },
    now: {
      en: 'Oil and gas made the Gulf states among the richest in the world per person, and they are now spending to build tourism, finance, sport and technology for the years after oil. Qatar hosted the football World Cup in 2022, and Saudi Arabia will host it in 2034.',
      line: S('أُقِيمَتْ كَأْسُ الْعَالَمِ فِي قَطَرَ سَنَةَ ٢٠٢٢.', 'uqiimat kaʾsu l-ʿaalami fii qaṭara sanata alfayn wa-thnayn wa-ʿishriin.', 'The World Cup was held in Qatar in 2022.'),
    },
    made: [
      F('🛢️', S('يُصَدِّرُ الْخَلِيجُ النِّفْطَ وَالْغَازَ.', 'yuṣaddiru l-khaliiju n-nifṭa wa-l-ghaaz.', 'The Gulf exports oil and gas.')),
      F('🌴', S('تَمْرُ السُّعُودِيَّةِ لَذِيذٌ.', 'tamru s-suʿuudiyyati ladhiidh.', 'Saudi dates are delicious.')),
      F('🦪', S('اللُّؤْلُؤُ مِنْ مِيَاهِ الْخَلِيجِ.', 'al-luʾluʾu min miyaahi l-khaliij.', 'Pearls come from the waters of the Gulf.')),
    ],
    timeline: [
      ['c. 570', 'The Prophet Muhammad is born in Makkah.'],
      ['1932', 'The Kingdom of Saudi Arabia is proclaimed; oil is found in Bahrain.'],
      ['1938', 'Oil is found in Saudi Arabia.'],
      ['1971', 'The United Arab Emirates is formed; Bahrain and Qatar become independent.'],
      ['2022', 'Qatar hosts the football World Cup.'],
    ],
    economy: "Oil and gas pay for most of the Gulf's government spending, and Saudi Arabia is one of the world's largest oil exporters. Dubai and Doha are hubs for airlines, trade and finance, and much of the work is done by millions of workers from South Asia, Africa and elsewhere.",
    cities: [
      city('makkah', 'Makkah', 'مَكَّة', 'makka', '🕋', 39.83, 21.42, "Islam's holiest city, with the Kaaba at the heart of the Grand Mosque. Millions come every year for Hajj and Umrah.", S('الْكَعْبَةُ فِي مَكَّةَ الْمُكَرَّمَةِ.', 'al-kaʿbatu fii makkata l-mukarrama.', 'The Kaaba is in Makkah.'), [
        W('حَجّ', 'ḥajj', 'the Hajj (pilgrimage)', '🕋'), W('حَاجّ', 'ḥaajj', 'pilgrim', '🧳'), W('زَمْزَم', 'zamzam', 'Zamzam (the holy well)', '💧')]),
      city('riyadh', 'Riyadh', 'الرِّيَاض', 'ar-riyaaḍ', '🏙️', 46.72, 24.71, "Saudi Arabia's capital, grown from a mud-brick oasis town into a city of millions.", S('الرِّيَاضُ عَاصِمَةُ السُّعُودِيَّةِ.', 'ar-riyaaḍu ʿaaṣimatu s-suʿuudiyya.', 'Riyadh is the capital of Saudi Arabia.'), [
        W('طِين', 'ṭiin', 'mud', '🧱'), W('مَتْحَف', 'matḥaf', 'museum', '🏛️'), W('نَخِيل', 'nakhiil', 'palm trees', '🌴')]),
      city('dubai', 'Dubai', 'دُبَيّ', 'dubayy', '🏙️', 55.27, 25.20, 'A pearl-diving and trading port that became a world hub of flights, trade and tourism; home to the Burj Khalifa.', S('دُبَيّ مَدِينَةٌ حَدِيثَةٌ.', 'dubayy madiinatun ḥadiitha.', 'Dubai is a modern city.'), [
        W('مَطَار', 'maṭaar', 'airport', '🛫'), W('بُرْج', 'burj', 'tower', '🏙️'), W('سَفِينَة', 'safiina', 'ship', '🚢')]),
      city('doha', 'Doha', 'الدَّوْحَة', 'ad-dawḥa', '⚽', 51.53, 25.29, "Qatar's capital on the Gulf, with the Museum of Islamic Art and the stadiums of the 2022 World Cup.", S('فِي الدَّوْحَةِ مَتْحَفُ الْفَنِّ الْإِسْلَامِيِّ.', 'fi d-dawḥati matḥafu l-fanni l-islaamiyy.', 'Doha has the Museum of Islamic Art.'), [
        W('مَلْعَب', 'malʿab', 'stadium', '🏟️'), W('فَنّ', 'fann', 'art', '🎨'), W('كُرَة', 'kura', 'ball', '⚽')]),
    ],
  },
  // ------------------------------------------------------------------------------------------------ The Maghreb
  {
    id: 'maghreb', name: 'The Maghreb', bn: 'الْمَغْرِبُ الْعَرَبِيُّ', roman: 'al-maghribu l-ʿarabiyy', emoji: '🕌', color: '#B83280', unlock: 5,
    hook: 'Libya, Tunisia, Algeria, Morocco and Mauritania, from the Mediterranean to the Atlantic and deep into the Sahara. Arabic mixes here with Amazigh (Berber) languages and French, and the cities are famous for their walled medinas, tiled courtyards and couscous.',
    intro: S('الْمَغْرِبُ الْعَرَبِيُّ فِي شَمَالِ إِفْرِيقْيَا.', 'al-maghribu l-ʿarabiyyu fii shamaali ifriiqyaa.', 'The Maghreb is in North Africa.'),
    famous: [
      F('🍲', S('الْكُسْكُسُ طَبَقٌ مَشْهُورٌ فِي الْمَغْرِبِ الْعَرَبِيِّ.', 'al-kuskusu ṭabaqun mashhuurun fi l-maghribi l-ʿarabiyy.', 'Couscous is a famous dish in the Maghreb.')),
      F('🏜️', S('الصَّحْرَاءُ الْكُبْرَى كَبِيرَةٌ جِدًّا.', 'aṣ-ṣaḥraaʾu l-kubraa kabiiratun jiddan.', 'The Sahara is very big.')),
      F('🎓', S('جَامِعَةُ الْقَرَوِيِّينَ فِي فَاسَ قَدِيمَةٌ جِدًّا.', 'jaamiʿatu l-qarawiyyiina fii faasa qadiimatun jiddan.', 'Al-Qarawiyyin University in Fez is very old.')),
    ],
    then: {
      en: "Carthage, near today's Tunis, was a great trading power until Rome destroyed it in 146 BCE. Arab armies brought Islam in the 600s and founded Kairouan in 670; in 859 Fatima al-Fihri founded al-Qarawiyyin in Fez, often called the oldest university still working.",
      line: S('أَسَّسَتْ فَاطِمَةُ الْفِهْرِيَّةُ جَامِعَةَ الْقَرَوِيِّينَ.', 'assasat faaṭimatu l-fihriyyatu jaamiʿata l-qarawiyyiin.', 'Fatima al-Fihri founded al-Qarawiyyin University.'),
    },
    now: {
      en: "Morocco has become a big car maker and one of the world's largest exporters of phosphates (rock used to make fertiliser), and it will co-host the football World Cup in 2030. Algeria and Libya export oil and gas. Tunisia's revolution of 2010–11 began the Arab Spring.",
      line: S('سَتُقَامُ كَأْسُ الْعَالَمِ فِي الْمَغْرِبِ سَنَةَ ٢٠٣٠.', 'satuqaamu kaʾsu l-ʿaalami fi l-maghribi sanata alfayn wa-thalaathiin.', 'The World Cup will be held in Morocco in 2030.'),
    },
    made: [
      F('🫒', S('زَيْتُ الزَّيْتُونِ التُّونِسِيُّ مَشْهُورٌ.', 'zaytu z-zaytuuni t-tuunisiyyu mashhuur.', 'Tunisian olive oil is famous.')),
      F('🌰', S('زَيْتُ الْأَرْكَانِ مِنَ الْمَغْرِبِ.', 'zaytu l-arkaani mina l-maghrib.', 'Argan oil comes from Morocco.')),
      F('🌴', S('تَمْرُ الْجَزَائِرِ حُلْوٌ.', 'tamru l-jazaaʾiri ḥulw.', 'Algerian dates are sweet.')),
    ],
    timeline: [
      ['146 BCE', 'Rome destroys Carthage.'],
      ['670', 'Kairouan is founded in Tunisia.'],
      ['859', 'Fatima al-Fihri founds al-Qarawiyyin in Fez.'],
      ['1962', 'Algeria wins independence from France after an eight-year war.'],
      ['2011', 'The Arab Spring begins in Tunisia (December 2010 – January 2011).'],
    ],
    economy: 'Algeria and Libya depend on oil and gas. Morocco makes cars, aircraft parts and fertiliser from its phosphates and earns from tourism; Tunisia exports olive oil, dates, clothing and car parts. Mauritania exports iron ore and fish.',
    cities: [
      city('fez', 'Fez', 'فَاس', 'faas', '🎓', -5.00, 34.03, 'Its walled medina is one of the largest car-free urban areas in the world, with leather tanneries, craft workshops and al-Qarawiyyin.', S('فِي فَاسَ مَدِينَةٌ قَدِيمَةٌ.', 'fii faasa madiinatun qadiima.', 'Fez has an old walled city.'), [
        W('جِلْد', 'jild', 'leather', '👜'), W('حِرْفَة', 'ḥirfa', 'craft', '🧵'), W('زُقَاق', 'zuqaaq', 'alley', '🛤️')]),
      city('marrakesh', 'Marrakesh', 'مَرَّاكُش', 'marraakush', '🌴', -7.99, 31.63, 'The "red city" at the foot of the Atlas mountains, with the storytellers and musicians of Jemaa el-Fna square.', S('مَرَّاكُشُ مَدِينَةٌ حَمْرَاءُ.', 'marraakushu madiinatun ḥamraaʾ.', 'Marrakesh is a red city.'), [
        W('سَاحَة', 'saaḥa', 'square', '🏟️'), W('حَكَوَاتِيّ', 'ḥakawaatiyy', 'storyteller', '🗣️'), W('جَبَل', 'jabal', 'mountain', '⛰️')]),
      city('tunis', 'Tunis', 'تُونِس', 'tuunis', '🏛️', 10.18, 36.81, "Tunisia's capital, beside the ruins of ancient Carthage; its medina is full of mosques and souqs.", S('قُرْبَ تُونِسَ آثَارُ قَرْطَاجَ.', 'qurba tuunisa aathaaru qarṭaaj.', 'Near Tunis are the ruins of Carthage.'), [
        W('آثَار', 'aathaar', 'ruins', '🏛️'), W('زَيْتُون', 'zaytuun', 'olives', '🫒'), W('مِينَاء', 'miinaaʾ', 'port', '⚓')]),
      city('algiers', 'Algiers', 'الْجَزَائِر', 'al-jazaaʾir', '🏙️', 3.06, 36.75, "Algeria's capital, rising in white buildings above its bay; the old Casbah is a World Heritage site.", S('الْجَزَائِرُ مَدِينَةٌ بَيْضَاءُ.', 'al-jazaaʾiru madiinatun bayḍaaʾ.', 'Algiers is a white city.'), [
        W('قَصَبَة', 'qaṣaba', 'casbah (old citadel)', '🏰'), W('خَلِيج', 'khaliij', 'bay', '🌊'), W('اِسْتِقْلَال', 'istiqlaal', 'independence', '🎉')]),
    ],
  },
  // ------------------------------------------------------------------------------------------------ Iraq
  {
    id: 'iraq', name: 'Iraq', bn: 'الْعِرَاقُ', roman: 'al-ʿiraaq', emoji: '🌴', color: '#7A4FB5', unlock: 10,
    hook: 'The land between the Tigris and the Euphrates — Mesopotamia — where writing and some of the first cities began over 5,000 years ago. Baghdad was the capital of the Abbasid caliphate and, in its golden age, one of the greatest centres of learning in the world.',
    intro: S('الْعِرَاقُ بَيْنَ نَهْرَيْ دِجْلَةَ وَالْفُرَاتِ.', 'al-ʿiraaqu bayna nahray dijlata wa-l-furaat.', 'Iraq lies between the Tigris and the Euphrates.'),
    famous: [
      F('✍️', S('بَدَأَتِ الْكِتَابَةُ فِي بِلَادِ الرَّافِدَيْنِ.', 'badaʾati l-kitaabatu fii bilaadi r-raafidayn.', 'Writing began in Mesopotamia.')),
      F('📚', S('كَانَ بَيْتُ الْحِكْمَةِ فِي بَغْدَادَ.', 'kaana baytu l-ḥikmati fii baghdaad.', 'The House of Wisdom was in Baghdad.')),
      F('🌴', S('فِي الْعِرَاقِ نَخِيلٌ كَثِيرٌ.', 'fi l-ʿiraaqi nakhiilun kathiir.', 'Iraq has many palm trees.')),
    ],
    then: {
      en: 'The Sumerians invented writing in cities such as Uruk around 3200 BCE. In 762 the Abbasid caliph al-Mansur founded Baghdad, the "round city", where scholars translated and built on Greek, Persian and Indian learning. The Mongols sacked Baghdad in 1258.',
      line: S('أَسَّسَ الْمَنْصُورُ بَغْدَادَ.', 'assasa l-manṣuuru baghdaad.', 'Al-Mansur founded Baghdad.'),
    },
    now: {
      en: "Iraq has some of the largest oil reserves in the world, and oil pays for almost all of the government's budget. After decades of war — with Iran from 1980 to 1988, in 1991, the 2003 invasion and the fight against ISIS, defeated in 2017 — the country is rebuilding.",
      line: S('يَبْنِي الْعِرَاقِيُّونَ بِلَادَهُمْ مِنْ جَدِيدٍ.', 'yabni l-ʿiraaqiyyuuna bilaadahum min jadiid.', 'Iraqis are rebuilding their country.'),
    },
    made: [
      F('🛢️', S('يُصَدِّرُ الْعِرَاقُ النِّفْطَ.', 'yuṣaddiru l-ʿiraaqu n-nifṭ.', 'Iraq exports oil.')),
      F('🌴', S('تَمْرُ الْبَصْرَةِ مَشْهُورٌ.', 'tamru l-baṣrati mashhuur.', 'The dates of Basra are famous.')),
      F('🐟', S('الْمَسْكُوفُ سَمَكٌ مَشْوِيٌّ عِرَاقِيٌّ.', 'al-maskuufu samakun mashwiyyun ʿiraaqiyy.', 'Masgouf is an Iraqi grilled fish.')),
    ],
    timeline: [
      ['c. 3200 BCE', 'Writing is invented in Sumer, in southern Iraq.'],
      ['762', 'The caliph al-Mansur founds Baghdad.'],
      ['1258', 'The Mongols sack Baghdad.'],
      ['1932', 'Iraq becomes independent.'],
      ['2017', 'ISIS is defeated in Mosul and across Iraq.'],
    ],
    economy: "Oil makes up nearly all of Iraq's exports and most of the state's income. Farming along the rivers — dates, wheat and barley — once fed the country and is now threatened by drought and falling river levels. Many Iraqis work for the state, and creating private-sector jobs is a big challenge.",
    cities: [
      city('baghdad', 'Baghdad', 'بَغْدَاد', 'baghdaad', '📚', 44.36, 33.31, 'Founded in 762 as the Abbasid capital. Mutanabbi Street, named after a great poet, is its famous book market.', S('شَارِعُ الْمُتَنَبِّي سُوقُ الْكُتُبِ فِي بَغْدَادَ.', 'shaariʿu l-mutanabbii suuqu l-kutubi fii baghdaad.', 'Mutanabbi Street is the book market of Baghdad.'), [
        W('شَارِع', 'shaariʿ', 'street', '🛣️'), W('شَاعِر', 'shaaʿir', 'poet', '✒️'), W('كُتُب', 'kutub', 'books', '📚')]),
      city('basra', 'Basra', 'الْبَصْرَة', 'al-baṣra', '🌴', 47.78, 30.51, "Iraq's port in the far south, near where the Tigris and Euphrates join as the Shatt al-Arab; famous for its dates.", S('الْبَصْرَةُ مَدِينَةُ النَّخِيلِ.', 'al-baṣratu madiinatu n-nakhiil.', 'Basra is the city of palm trees.'), [
        W('نَخِيل', 'nakhiil', 'palm trees', '🌴'), W('مِينَاء', 'miinaaʾ', 'port', '⚓'), W('شَطّ', 'shaṭṭ', 'riverbank', '🏞️')]),
      city('mosul', 'Mosul', 'الْمَوْصِل', 'al-mawṣil', '🕌', 43.13, 36.34, 'An old trading city on the Tigris. Its al-Nuri mosque and leaning minaret, destroyed in 2017, have been rebuilt with help from UNESCO.', S('أُعِيدَ بِنَاءُ الْمِئْذَنَةِ الْحَدْبَاءِ.', 'uʿiida binaaʾu l-miʾdhanati l-ḥadbaaʾ.', 'The leaning minaret has been rebuilt.'), [
        W('مِئْذَنَة', 'miʾdhana', 'minaret', '🕌'), W('بِنَاء', 'binaaʾ', 'building', '🏗️'), W('تَاجِر', 'taajir', 'merchant', '🧑‍💼')]),
      city('erbil', 'Erbil', 'أَرْبِيل', 'arbiil', '🏰', 44.01, 36.19, 'Capital of the Kurdistan Region. Its citadel, on a mound in the middle of the city, has been lived in for thousands of years.', S('قَلْعَةُ أَرْبِيلَ قَدِيمَةٌ جِدًّا.', 'qalʿatu arbiila qadiimatun jiddan.', 'The citadel of Erbil is very old.'), [
        W('قَلْعَة', 'qalʿa', 'citadel, fort', '🏰'), W('كُرْدِيّ', 'kurdiyy', 'Kurdish', '🗣️'), W('جَبَل', 'jabal', 'mountain', '⛰️')]),
    ],
  },
  // ------------------------------------------------------------------------------------------------ Yemen & Oman
  {
    id: 'southarabia', name: 'Yemen & Oman', bn: 'الْيَمَنُ وَعُمَانُ', roman: 'al-yamanu wa-ʿumaan', emoji: '⛰️', color: '#C2410C', unlock: 15,
    hook: 'The southern corner of Arabia, where mountains catch the monsoon rain. The mud-brick tower houses of Sanaa and Shibam are among the oldest high-rise buildings in the world, and Yemen gave the world coffee as a drink; Oman is a land of forts, frankincense and sailors.',
    intro: S('الْيَمَنُ وَعُمَانُ فِي جَنُوبِ جَزِيرَةِ الْعَرَبِ.', 'al-yamanu wa-ʿumaanu fii januubi jaziirati l-ʿarab.', 'Yemen and Oman are in the south of Arabia.'),
    famous: [
      F('☕', S('شَرِبَ النَّاسُ الْقَهْوَةَ فِي الْيَمَنِ مُنْذُ زَمَنٍ بَعِيدٍ.', 'shariba n-naasu l-qahwata fi l-yamani mundhu zamanin baʿiid.', 'People have drunk coffee in Yemen for a very long time.')),
      F('🏰', S('فِي عُمَانَ قِلَاعٌ كَثِيرَةٌ.', 'fii ʿumaana qilaaʿun kathiira.', 'Oman has many forts.')),
      F('🏙️', S('بُيُوتُ شِبَامَ عَالِيَةٌ وَمَصْنُوعَةٌ مِنَ الطِّينِ.', 'buyuutu shibaama ʿaaliyatun wa-maṣnuuʿatun mina ṭ-ṭiin.', 'The houses of Shibam are tall and made of mud.')),
    ],
    then: {
      en: 'Over 2,500 years ago the kingdom of Saba (Sheba) grew rich on the incense trade and built a great dam at Marib. From the 1500s the port of Mocha shipped Yemeni coffee to the world, and Omani sailors traded across the Indian Ocean as far as Zanzibar, which Oman ruled in the 1800s.',
      line: S('كَانَ مِينَاءُ الْمُخَا يُصَدِّرُ الْقَهْوَةَ.', 'kaana miinaaʾu l-mukhaa yuṣaddiru l-qahwa.', 'The port of Mocha exported coffee.'),
    },
    now: {
      en: "Yemen has been at war since 2014, causing one of the world's worst humanitarian crises; millions depend on aid. Oman, at peace, has built roads, schools and a tourist industry, and is known as a quiet go-between in disputes in the region.",
      line: S('عُمَانُ بَلَدٌ هَادِئٌ وَجَمِيلٌ.', 'ʿumaanu baladun haadiʾun wa-jamiil.', 'Oman is a calm and beautiful country.'),
    },
    made: [
      F('🌿', S('يَأْتِي اللُّبَانُ مِنْ ظُفَارَ.', 'yaʾti l-lubaanu min ẓufaar.', 'Frankincense comes from Dhofar.')),
      F('🍯', S('عَسَلُ السِّدْرِ الْيَمَنِيُّ غَالٍ.', 'ʿasalu s-sidri l-yamaniyyu ghaal.', 'Yemeni sidr honey is expensive.')),
      F('⛵', S('يَصْنَعُ الْعُمَانِيُّونَ سُفُنًا مِنَ الْخَشَبِ.', 'yaṣnaʿu l-ʿumaaniyyuuna sufunan mina l-khashab.', 'Omanis build ships out of wood.')),
    ],
    timeline: [
      ['c. 700 BCE', 'The kingdom of Saba builds the great dam at Marib.'],
      ['1500s', 'Coffee from Yemen spreads around the world from the port of Mocha.'],
      ['1970', 'Sultan Qaboos comes to power and begins to modernise Oman.'],
      ['1990', 'North and South Yemen unite.'],
      ['2014', 'War begins in Yemen.'],
    ],
    economy: "Oman earns mainly from oil and gas but is investing in ports, tourism and fishing. Yemen's economy, already the poorest in the Arab world, has been shattered by war; coffee, honey and fish are among its traditional products.",
    cities: [
      city('sanaa', 'Sanaa', 'صَنْعَاء', 'ṣanʿaaʾ', '🏙️', 44.21, 15.35, "Yemen's capital, high in the mountains. Its old city of decorated mud-brick tower houses is a World Heritage site.", S('بُيُوتُ صَنْعَاءَ الْقَدِيمَةُ جَمِيلَةٌ.', 'buyuutu ṣanʿaaʾa l-qadiimatu jamiila.', 'The old houses of Sanaa are beautiful.'), [
        W('نَافِذَة', 'naafidha', 'window', '🪟'), W('طَابِق', 'ṭaabiq', 'floor (storey)', '🏢'), W('زَخْرَفَة', 'zakhrafa', 'decoration', '🎨')]),
      city('aden', 'Aden', 'عَدَن', 'ʿadan', '⚓', 45.03, 12.79, 'A port built in the crater of an old volcano, guarding the way into the Red Sea.', S('عَدَنُ مِينَاءٌ قَدِيمٌ.', 'ʿadanu miinaaʾun qadiim.', 'Aden is an old port.'), [
        W('مِينَاء', 'miinaaʾ', 'port', '⚓'), W('بُرْكَان', 'burkaan', 'volcano', '🌋'), W('سَفِينَة', 'safiina', 'ship', '🚢')]),
      city('muscat', 'Muscat', 'مَسْقَط', 'masqaṭ', '🏰', 58.41, 23.59, "Oman's capital, between the mountains and the sea, guarded by two forts from the time of the Portuguese.", S('فِي مَسْقَطَ قِلَاعٌ عَلَى الْبَحْرِ.', 'fii masqaṭa qilaaʿun ʿala l-baḥr.', 'Muscat has forts by the sea.'), [
        W('قَلْعَة', 'qalʿa', 'fort', '🏰'), W('سُلْطَان', 'sulṭaan', 'sultan', '👑'), W('بَحْر', 'baḥr', 'sea', '🌊')]),
      city('salalah', 'Salalah', 'صَلَالَة', 'ṣalaala', '🌿', 54.09, 17.02, 'In Dhofar in the far south. The summer monsoon (khareef) turns its hills green, and frankincense trees grow nearby.', S('فِي الصَّيْفِ تَصِيرُ صَلَالَةُ خَضْرَاءَ.', 'fi ṣ-ṣayfi taṣiiru ṣalaalatu khaḍraaʾ.', 'In summer Salalah turns green.'), [
        W('لُبَان', 'lubaan', 'frankincense', '🌿'), W('خَرِيف', 'khariif', 'the monsoon season (khareef)', '🌧️'), W('ضَبَاب', 'ḍabaab', 'fog', '🌫️')]),
    ],
  },
]

// "Go deeper" notes for 18+: the economy and politics behind each region, in English.
const deep = {
  nile: [
    'Egypt is the most populous Arab country, with well over 100 million people, nearly all living in the narrow Nile valley and delta — only a small fraction of its land. Feeding and housing a fast-growing population, keeping prices under control and creating jobs for young people are its great challenges; the government is building a New Administrative Capital east of Cairo.',
    "Water is a constant worry: Egypt depends on the Nile for almost all its water, and Ethiopia's Grand Ethiopian Renaissance Dam on the Blue Nile has caused years of dispute between Egypt, Sudan and Ethiopia. In Sudan, the war that began in April 2023 between the army and the Rapid Support Forces has caused one of the largest displacement crises in the world.",
  ],
  levant: [
    "The Levant's modern borders were largely drawn by Britain and France after the First World War. Lebanon's political system shares power among its religious communities — the president is a Maronite Christian, the prime minister a Sunni Muslim and the speaker of parliament a Shia Muslim — a balance that has kept the peace but is often blamed for paralysis and corruption.",
    'The question of Palestine has shaped the region since 1948. Palestinians in the West Bank and Gaza, and millions of Palestinian refugees and their descendants in Jordan, Lebanon and Syria, seek a state of their own; how and whether that happens, and the future of Jerusalem, are among the most argued-over questions in world politics. Syria, after more than a decade of war and the fall of the Assad government in December 2024, faces the task of rebuilding.',
  ],
  gulf: [
    'The Gulf monarchies — Saudi Arabia, Kuwait, Bahrain, Qatar, the UAE and Oman — work together in the Gulf Cooperation Council, set up in 1981. Their citizens enjoy free healthcare and education, often paid for by oil, while foreign workers make up a large share of the population — in Qatar and the UAE the great majority.',
    "Saudi Arabia's Vision 2030 plan aims to move the economy away from oil, opening the country to tourism and entertainment; women have been allowed to drive there since 2018. The region's rulers face questions about political rights, the treatment of migrant workers and how to prepare for a world that burns less oil.",
  ],
  maghreb: [
    'The Maghreb was ruled by France (Algeria from 1830, Tunisia from 1881, most of Morocco from 1912) and Italy (Libya from 1911), and French is still widely used in business and universities in Morocco, Algeria and Tunisia. Amazigh (Berber) languages are official in Morocco and Algeria, and many families speak them at home alongside the local spoken Arabic, Darija.',
    'Western Sahara, south of Morocco, is disputed: Morocco controls most of it and considers it part of its territory, while the Polisario Front seeks independence, and the question has long been before the United Nations. Libya has been divided between rival governments for much of the time since 2011, and young people across the region often look for work in Europe.',
  ],
  iraq: [
    'Iraq is home to Arabs and Kurds, Sunni and Shia Muslims, Christians, Yazidis, Turkmen and others. The Kurdistan Region in the north has its own government and parliament, and Kurdish is an official language of Iraq alongside Arabic. Since 2005 politics has been shaped by a constitution that shares power among these communities.',
    "Iraq's two great rivers are shrinking because of dams upstream in Turkey and Iran, drought and rising heat, and the southern marshes — home to the Marsh Arabs for thousands of years and a World Heritage site since 2016 — have suffered. Reducing dependence on oil and providing reliable electricity are among the country's biggest tasks.",
  ],
  southarabia: [
    'Yemen was divided for most of the 20th century between a northern state and a southern one (a British colony around Aden until 1967, then a socialist republic), and united in 1990. Since 2014 a war between the Houthi movement, which holds Sanaa, and the internationally recognised government, backed by a Saudi-led coalition, has killed many thousands and left most Yemenis in need of aid.',
    "Oman's Sultan Qaboos ruled from 1970 until his death in 2020, turning a country with only a few kilometres of paved road into a modern state, and kept Oman neutral and on good terms with its neighbours. His successor, Sultan Haitham, is working to reduce the country's dependence on oil.",
  ],
}
exploreRegions.forEach((r) => {
  r.deep = deep[r.id]
})

export const exploreById = Object.fromEntries(exploreRegions.map((r) => [r.id, r]))

/** Every region name and city with its picture, for the quizzes. */
export const exploreCities = exploreRegions.flatMap((r) => r.cities.map((c) => ({ ...c, region: r.id })))
