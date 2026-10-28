// Poems, reading passages and film conversations for the 13–15 ("teen") and 16–18 ("senior") tracks (the 18+ track
// shares the 16–18 versions).
//
// Only public-domain or traditional works are quoted: Allama Iqbal (d. 1938), Mirza Ghalib (d. 1869), Mir Taqi Mir
// (d. 1810) and a folk rhyme. Faiz Ahmed Faiz (d. 1984) and Hafeez Jalandhari, who wrote the national anthem (d. 1982),
// are still in copyright: they appear in facts only and their words are NOT quoted.
const L = (bn, roman, en) => ({ bn, roman, en })

// ---- Poems ---------------------------------------------------------------------------------
export const poems = [
  {
    key: 'dua', title: 'لب پہ آتی ہے دعا', emoji: '🕯️', author: 'Allama Iqbal',
    note: "A child's prayer-poem by Allama Iqbal (1902), recited in school assemblies all over Pakistan. Iqbal is Pakistan's national poet.",
    teen: [
      L('لب پہ آتی ہے دعا بن کے تمنا میری', 'lab pe aati hai dua ban ke tamanna meri', 'My wish comes to my lips as a prayer:'),
      L('زندگی شمع کی صورت ہو خدایا میری', "zindagi sham'a ki soorat ho khudaaya meri", 'O God, may my life be like a candle.'),
    ],
    senior: [
      L('لب پہ آتی ہے دعا بن کے تمنا میری', 'lab pe aati hai dua ban ke tamanna meri', 'My wish comes to my lips as a prayer:'),
      L('زندگی شمع کی صورت ہو خدایا میری', "zindagi sham'a ki soorat ho khudaaya meri", 'O God, may my life be like a candle.'),
      L('دور دنیا کا مرے دم سے اندھیرا ہو جائے', 'door duniya ka mere dam se andhera ho jaaye', "May the world's darkness be driven away by me,"),
      L('ہر جگہ میرے چمکنے سے اجالا ہو جائے', 'har jagah mere chamakne se ujaala ho jaaye', 'and may my shining bring light everywhere.'),
    ],
  },
  {
    key: 'ghalib', title: 'ہزاروں خواہشیں ایسی', emoji: '🌹', author: 'Mirza Ghalib',
    note: 'Two of the most quoted lines of Mirza Ghalib (1797–1869), the great master of the Urdu ghazal. The 16+ version adds the opening of another of his ghazals.',
    teen: [
      L('ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے', 'hazaaron khwaahishen aisi ke har khwaahish pe dam nikle', 'Thousands of wishes, each one worth dying for;'),
      L('بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے', 'bohat nikle mere armaan lekin phir bhi kam nikle', 'many of my hopes came true, and yet they were too few.'),
    ],
    senior: [
      L('ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے', 'hazaaron khwaahishen aisi ke har khwaahish pe dam nikle', 'Thousands of wishes, each one worth dying for;'),
      L('بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے', 'bohat nikle mere armaan lekin phir bhi kam nikle', 'many of my hopes came true, and yet they were too few.'),
      L('دلِ ناداں تجھے ہوا کیا ہے', 'dil-e-naadaan tujhe hua kya hai', 'O foolish heart, what has happened to you?'),
      L('آخر اس درد کی دوا کیا ہے', 'aakhir is dard ki dawa kya hai', 'What, after all, is the cure for this pain?'),
    ],
  },
  {
    key: 'mir', title: 'پتا پتا بوٹا بوٹا', emoji: '🍃', author: 'Mir Taqi Mir',
    note: 'A famous couplet by Mir Taqi Mir (1723–1810), one of the first great poets of Urdu: the whole garden knows of his love — except the rose.',
    teen: [
      L('پتا پتا بوٹا بوٹا حال ہمارا جانے ہے', 'patta patta booṭa booṭa haal hamaara jaane hai', 'Every leaf and every plant knows how I am;'),
      L('جانے نہ جانے گل ہی نہ جانے باغ تو سارا جانے ہے', 'jaane na jaane gul hi na jaane, baagh to saara jaane hai', 'only the rose does not know — the whole garden knows.'),
    ],
    senior: [
      L('پتا پتا بوٹا بوٹا حال ہمارا جانے ہے', 'patta patta booṭa booṭa haal hamaara jaane hai', 'Every leaf and every plant knows how I am;'),
      L('جانے نہ جانے گل ہی نہ جانے باغ تو سارا جانے ہے', 'jaane na jaane gul hi na jaane, baagh to saara jaane hai', 'only the rose does not know — the whole garden knows.'),
    ],
  },
  {
    key: 'machhli', title: 'مچھلی جل کی رانی ہے', emoji: '🐟', author: 'Traditional rhyme',
    note: 'A traditional nursery rhyme that almost every Urdu-speaking child grows up with.',
    teen: [
      L('مچھلی جل کی رانی ہے', 'machhli jal ki raani hai', 'The fish is the queen of the water,'),
      L('جیون اس کا پانی ہے', 'jeewan us ka paani hai', 'water is her life.'),
      L('ہاتھ لگاؤ ڈر جائے گی', 'haath lagaao ḍar jaaegi', 'Touch her and she will be frightened,'),
      L('باہر نکالو مر جائے گی', 'baahar nikaalo mar jaaegi', 'take her out and she will die.'),
    ],
    senior: [
      L('مچھلی جل کی رانی ہے', 'machhli jal ki raani hai', 'The fish is the queen of the water,'),
      L('جیون اس کا پانی ہے', 'jeewan us ka paani hai', 'water is her life.'),
      L('ہاتھ لگاؤ ڈر جائے گی', 'haath lagaao ḍar jaaegi', 'Touch her and she will be frightened,'),
      L('باہر نکالو مر جائے گی', 'baahar nikaalo mar jaaegi', 'take her out and she will die.'),
    ],
  },
]

// ---- Reading passages ----------------------------------------------------------------------
export const passages = [
  {
    key: 'independence', title: 'Independence Day', emoji: '🇵🇰',
    teen: {
      lines: [
        L('۱۴ اگست پاکستان کا یومِ آزادی ہے۔', 'chaudah agast paakistaan ka yaum-e-aazaadi hai.', "14 August is Pakistan's Independence Day."),
        L('اس دن ۱۹۴۷ میں پاکستان بنا۔', 'is din unnees sau saintaalees mein paakistaan bana.', 'On this day in 1947 Pakistan was created.'),
        L('لوگ گھروں پر سبز ہلالی پرچم لگاتے ہیں۔', 'log gharon par sabz hilaali parcham lagaate hain.', 'People put the green crescent flag up on their houses.'),
      ],
      questions: [
        { q: "When is Pakistan's Independence Day?", options: ['23 March', '14 August', '25 December'], answer: 1 },
        { q: 'What do people put up on their houses?', options: ['Lanterns', 'The green crescent flag', 'Paper boats'], answer: 1 },
      ],
    },
    senior: {
      lines: [
        L('۱۴ اگست پاکستان کا یومِ آزادی ہے۔', 'chaudah agast paakistaan ka yaum-e-aazaadi hai.', "14 August is Pakistan's Independence Day."),
        L('اس دن ۱۹۴۷ میں پاکستان بنا۔', 'is din unnees sau saintaalees mein paakistaan bana.', 'On this day in 1947 Pakistan was created.'),
        L('قائد اعظم محمد علی جناح نے آزادی کی تحریک کی رہنمائی کی۔', "qaa'id-e-aazam muhammad ali jinnah ne aazaadi ki tehreek ki rehnumaai ki.", 'The Quaid-e-Azam, Muhammad Ali Jinnah, led the independence movement.'),
        L('آزادی کے وقت لاکھوں لوگوں کو اپنے گھر چھوڑنے پڑے۔', 'aazaadi ke waqt laakhon logon ko apne ghar chhoṛne paṛe.', 'At independence, millions of people had to leave their homes.'),
        L('آج لوگ گھروں پر سبز ہلالی پرچم لگاتے ہیں اور رات کو آتش بازی ہوتی ہے۔', 'aaj log gharon par sabz hilaali parcham lagaate hain aur raat ko aatish baazi hoti hai.', 'Today people put up the green crescent flag and there are fireworks at night.'),
      ],
      questions: [
        { q: 'Who led the independence movement?', options: ['Allama Iqbal', 'Muhammad Ali Jinnah', 'Mirza Ghalib'], answer: 1 },
        { q: 'What happened to millions of people at independence?', options: ['They had to leave their homes', 'They went on holiday', 'They learnt a new language'], answer: 0 },
        { q: 'What happens at night on 14 August today?', options: ['A cricket match', 'Fireworks', 'A kite festival'], answer: 1 },
      ],
    },
  },
  {
    key: 'lahore', title: 'A Day in Lahore', emoji: '🕌',
    teen: {
      lines: [
        L('لاہور پاکستان کا دوسرا بڑا شہر ہے۔', 'Lahore paakistaan ka doosra baṛa shehar hai.', "Lahore is Pakistan's second-largest city."),
        L('یہاں بادشاہی مسجد اور شاہی قلعہ ہیں۔', "yahaan baadshaahi masjid aur shaahi qil'a hain.", 'The Badshahi Mosque and the Royal Fort are here.'),
        L('لاہور کے کھانے بہت مشہور ہیں۔', 'Lahore ke khaane bohat mash-hoor hain.', "Lahore's food is very famous."),
      ],
      questions: [
        { q: "Which is Pakistan's second-largest city?", options: ['Lahore', 'Quetta', 'Multan'], answer: 0 },
        { q: 'Which two buildings are named?', options: ['A bridge and a tower', 'The Badshahi Mosque and the Royal Fort', 'A school and a hospital'], answer: 1 },
      ],
    },
    senior: {
      lines: [
        L('لاہور پاکستان کا دوسرا بڑا شہر ہے۔', 'Lahore paakistaan ka doosra baṛa shehar hai.', "Lahore is Pakistan's second-largest city."),
        L('یہاں مغلوں کی بنائی ہوئی بادشاہی مسجد اور شاہی قلعہ ہیں۔', "yahaan mughalon ki banaai hui baadshaahi masjid aur shaahi qil'a hain.", 'The Badshahi Mosque and the Royal Fort, built by the Mughals, are here.'),
        L('مینارِ پاکستان بھی لاہور میں ہے۔', 'minaar-e-paakistaan bhi Lahore mein hai.', 'Minar-e-Pakistan is in Lahore too.'),
        L('شام کو لوگ فوڈ اسٹریٹ میں کھانا کھانے جاتے ہیں۔', 'shaam ko log fooḍ isṭreeṭ mein khaana khaane jaate hain.', 'In the evening people go to eat on Food Street.'),
        L('لوگ کہتے ہیں: جس نے لاہور نہیں دیکھا، وہ پیدا ہی نہیں ہوا۔', 'log kehte hain: jis ne Lahore nahin dekha, woh paida hi nahin hua.', "People say: whoever hasn't seen Lahore hasn't been born."),
      ],
      questions: [
        { q: 'Who built the Badshahi Mosque and the Royal Fort?', options: ['The British', 'The Mughals', 'The Greeks'], answer: 1 },
        { q: 'Where do people go to eat in the evening?', options: ['Food Street', 'The airport', 'The river'], answer: 0 },
        { q: 'What do people say about Lahore?', options: ['It is too hot', "Whoever hasn't seen Lahore hasn't been born", 'It is a small town'], answer: 1 },
      ],
    },
  },
  {
    key: 'mango', title: 'The King of Fruits', emoji: '🥭',
    teen: {
      lines: [
        L('آم پاکستان کا قومی پھل ہے۔', 'aam paakistaan ka qaumi phal hai.', "The mango is Pakistan's national fruit."),
        L('گرمیوں میں ہر طرف آم ملتے ہیں۔', 'garmiyon mein har taraf aam milte hain.', 'In summer there are mangoes everywhere.'),
        L('چونسا اور انور رٹول مشہور قسمیں ہیں۔', 'chaunsa aur anwar raṭaul mash-hoor qismen hain.', 'Chaunsa and Anwar Ratol are famous varieties.'),
      ],
      questions: [
        { q: "What is Pakistan's national fruit?", options: ['The apple', 'The mango', 'The banana'], answer: 1 },
        { q: 'When are there mangoes everywhere?', options: ['In winter', 'In summer', 'In autumn'], answer: 1 },
      ],
    },
    senior: {
      lines: [
        L('آم پاکستان کا قومی پھل ہے۔', 'aam paakistaan ka qaumi phal hai.', "The mango is Pakistan's national fruit."),
        L('گرمیوں میں ہر طرف آم ملتے ہیں۔', 'garmiyon mein har taraf aam milte hain.', 'In summer there are mangoes everywhere.'),
        L('ملتان اور سندھ میں آم کے بڑے بڑے باغ ہیں۔', 'Multan aur Sindh mein aam ke baṛe baṛe baagh hain.', 'There are huge mango orchards in Multan and Sindh.'),
        L('چونسا، سندھڑی اور انور رٹول مشہور قسمیں ہیں۔', 'chaunsa, sindhṛi aur anwar raṭaul mash-hoor qismen hain.', 'Chaunsa, Sindhri and Anwar Ratol are famous varieties.'),
        L('پاکستان دنیا بھر میں آم بھیجتا ہے۔', 'paakistaan duniya bhar mein aam bhejta hai.', 'Pakistan sends mangoes all over the world.'),
      ],
      questions: [
        { q: 'Where are there huge mango orchards?', options: ['Multan and Sindh', 'Gilgit and Skardu', 'Quetta and Gwadar'], answer: 0 },
        { q: 'Which of these is a mango variety?', options: ['Chaunsa', 'Nihari', 'Dholak'], answer: 0 },
        { q: 'Where does Pakistan send its mangoes?', options: ['Only to Lahore', 'All over the world', 'Nowhere'], answer: 1 },
      ],
    },
  },
  {
    key: 'eid', title: 'Eid Morning', emoji: '🌙',
    teen: {
      lines: [
        L('عید کی صبح سب نئے کپڑے پہنتے ہیں۔', 'eid ki subh sab naye kapṛe pehante hain.', 'On Eid morning everyone wears new clothes.'),
        L('لوگ عید کی نماز پڑھنے جاتے ہیں۔', 'log eid ki namaaz paṛhne jaate hain.', 'People go to say the Eid prayer.'),
        L('بچوں کو عیدی ملتی ہے۔', 'bachchon ko eidi milti hai.', 'Children are given Eidi.'),
      ],
      questions: [
        { q: 'What does everyone wear on Eid morning?', options: ['School uniform', 'New clothes', 'Raincoats'], answer: 1 },
        { q: 'What are children given?', options: ['Homework', 'Eidi', 'A kite'], answer: 1 },
      ],
    },
    senior: {
      lines: [
        L('عید کی صبح سب نئے کپڑے پہنتے ہیں۔', 'eid ki subh sab naye kapṛe pehante hain.', 'On Eid morning everyone wears new clothes.'),
        L('لوگ عید کی نماز پڑھنے جاتے ہیں۔', 'log eid ki namaaz paṛhne jaate hain.', 'People go to say the Eid prayer.'),
        L('نماز کے بعد سب ایک دوسرے کو عید مبارک کہتے ہیں۔', 'namaaz ke baad sab ek doosre ko eid mubaarak kehte hain.', 'After the prayer everyone wishes each other Eid Mubarak.'),
        L('گھر میں سویاں اور شیر خرما بنتا ہے۔', 'ghar mein siwaiyaan aur sheer khurma banta hai.', 'Vermicelli and sheer khurma are made at home.'),
        L('بچوں کو عیدی ملتی ہے اور سب رشتہ داروں سے ملنے جاتے ہیں۔', 'bachchon ko eidi milti hai aur sab rishtedaaron se milne jaate hain.', 'Children are given Eidi and everyone goes to visit relatives.'),
      ],
      questions: [
        { q: 'What does everyone say after the prayer?', options: ['Eid Mubarak', 'Good night', 'Happy birthday'], answer: 0 },
        { q: 'Which sweet dish is made at home?', options: ['Sheer khurma', 'Nihari', 'Pakoras'], answer: 0 },
        { q: 'Whom does everyone go to visit?', options: ['Teachers', 'Relatives', 'Doctors'], answer: 1 },
      ],
    },
  },
]

// ---- Film conversations ---------------------------------------------------------------------
// Sara (t) is a girl, so her verbs end in -ی / گی; Ali (fr) is a boy.
const D = (who, bn, roman, en) => ({ who, bn, roman, en })

export const cinemaScenes = {
  movienight: {
    title: 'Movie Night', emoji: '🍿',
    lines: [
      D('fr', 'کیا تم آج فلم دیکھنے چلو گی؟', 'kya tum aaj film dekhne chalo gi?', 'Will you come and see a film today?'),
      D('t', 'ہاں! کون سی فلم؟', 'haan! kaun si film?', 'Yes! Which film?'),
      D('fr', 'ایک نئی پاکستانی فلم۔ سنا ہے کہانی بہت اچھی ہے۔', 'ek nayi paakistaani film. suna hai kahaani bohat achchhi hai.', 'A new Pakistani film. I hear the story is very good.'),
      D('t', 'تو چلو۔ کتنے بجے شروع ہو گی؟', 'to chalo. kitne baje shuroo hogi?', "Then let's go. What time does it start?"),
      D('fr', 'شام سات بجے۔', 'shaam saat baje.', 'At seven in the evening.'),
      D('t', 'ٹھیک ہے۔ ٹکٹ میں لے لوں گی۔', 'ṭheek hai. ṭikaṭ main le loon gi.', "OK. I'll get the tickets."),
      D('fr', 'اور میں پاپ کارن لے آؤں گا۔', 'aur main paap kaarn le aaoon ga.', "And I'll bring popcorn."),
    ],
  },
  song: {
    title: 'Talking About a Song', emoji: '🎵',
    lines: [
      D('t', 'کیا تم نے یہ گانا سنا ہے؟', 'kya tum ne yeh gaana suna hai?', 'Have you heard this song?'),
      D('fr', 'ہاں، مجھے یہ گانا بہت پسند ہے۔', 'haan, mujhe yeh gaana bohat pasand hai.', 'Yes, I really like this song.'),
      D('t', 'گلوکار کی آواز بہت خوبصورت ہے۔', 'gulookaar ki aawaaz bohat khoobsoorat hai.', "The singer's voice is beautiful."),
      D('fr', 'اور دھن بھی یاد رہ جاتی ہے۔', 'aur dhun bhi yaad reh jaati hai.', 'And the tune stays in your head too.'),
      D('t', 'ایک بار پھر سنیں؟', 'ek baar phir sunein?', 'Shall we listen once more?'),
      D('fr', 'ضرور!', 'zaroor!', 'Of course!'),
    ],
  },
  ticket: {
    title: 'At the Ticket Counter', emoji: '🎫',
    lines: [
      D('t', 'بھائی، دو ٹکٹ دے دیں۔', 'bhaai, do ṭikaṭ de dein.', 'Brother, two tickets please.'),
      D('shop', 'کون سے شو کے؟', 'kaun se sho ke?', 'For which show?'),
      D('t', 'سات بجے والے شو کے۔', 'saat baje waale sho ke.', "For the seven o'clock show."),
      D('shop', 'دو ٹکٹ، ایک ہزار روپے۔', 'do ṭikaṭ, ek hazaar rupay.', 'Two tickets, one thousand rupees.'),
    ],
  },
  filmtalk: {
    title: 'After the Film', emoji: '🎞️',
    lines: [
      D('fr', 'فلم کیسی لگی؟', 'film kaisi lagi?', 'How did you find the film?'),
      D('t', 'کہانی اچھی تھی، لیکن آخر تھوڑا لمبا تھا۔', 'kahaani achchhi thi, lekin aakhir thoṛa lamba tha.', 'The story was good, but the ending dragged a little.'),
      D('fr', 'مجھے اداکاری بہت پسند آئی۔', 'mujhe adaakaari bohat pasand aai.', 'I really liked the acting.'),
      D('t', 'ہاں، خاص طور پر ہیرو کے والد کا کردار۔', 'haan, khaas taur par hero ke waalid ka kirdaar.', "Yes, especially the role of the hero's father."),
      D('fr', 'اور موسیقی؟ میرے خیال میں گانے کمال کے تھے۔', 'aur mauseeqi? mere khayaal mein gaane kamaal ke the.', 'And the music? I thought the songs were amazing.'),
      D('t', 'متفق! چلو، اگلے ہفتے ایک اور فلم دیکھیں۔', 'muttafiq! chalo, agle hafte ek aur film dekhein.', "Agreed! Let's see another film next week."),
    ],
  },
}
