// Super challenge sets for the 5–7 Family units. Those conversations are shorter than the 8–12 ones,
// so these sets only use words from the 5–7 lines.
const S = (label, items) => ({ label, items })

export const familyYoung = {
  morning: S('Family: Mornings', [
    ['صبح ہو گئی، جلدی سے منہ دھو لو۔', 'It is morning, quickly wash your face.'],
    ['سارہ، بستہ اور ٹفن کہاں ہے؟', 'Sara, where are your bag and lunchbox?'],
    ['شاباش! جوتے پہن لو، سارہ۔', 'Well done! Put your shoes on, Sara.'],
    ['ٹفن میں انڈا، روٹی اور ایک سیب۔', 'An egg, roti and an apple in the lunchbox.'],
    ['السلام علیکم، امی! صبح ہو گئی۔', "Peace be upon you, Ammi! It's morning."],
  ]),
  school: S('Family: School Days', [
    ['اسکول کیسا رہا؟ بہت اچھا، امی!', 'How was school? Very good, Ammi!'],
    ['ابو، ہوم ورک کا سوال مشکل ہے۔', 'Abbu, the homework question is hard.'],
    ['آؤ، مل کر ہوم ورک کرتے ہیں۔', "Come, let's do the homework together."],
    ['ہاں علی، چلو گیند پکڑو!', 'Yes Ali, come on, catch the ball!'],
    ['ہاتھ دھو لو، کھانا تیار ہے۔', 'Wash your hands, the food is ready.'],
  ]),
  food: S('Family: Food & Kitchen', [
    ['کھانا تیار ہے، بسم اللہ!', 'The food is ready, Bismillah!'],
    ['دال اور روٹی بہت مزے کی ہے۔', 'The lentils and roti are delicious.'],
    ['پہلے ہاتھ دھو لو، پھر کھاؤ۔', 'First wash your hands, then eat.'],
    ['چلو، بازار سے میٹھے آم لیں۔', "Come on, let's buy sweet mangoes at the market."],
    ['امی، میری روٹی بہت گول ہے!', 'Ammi, my roti is very round!'],
  ]),
  prayer: S('Family: Prayer & Ramzan', [
    ['وضو کر لو، چلو مسجد چلیں۔', "Do wudu, let's go to the mosque."],
    ['افطار کا وقت ہو گیا، کھجور لو۔', "It's time to break the fast, have a date."],
    ['عید مبارک! یہ لو، تمہاری عیدی۔', 'Eid Mubarak! Here is your Eidi.'],
    ['عید مبارک، دادی! اللہ آپ کو خوش رکھے۔', 'Eid Mubarak, Dadi! May Allah keep you happy.'],
    ['شکریہ ابو، میں تیار ہوں!', "Thank you Abbu, I'm ready!"],
  ]),
  elders: S('Family: Nana, Dada & Nani', [
    ['یہاں آؤ، سارہ، کہانی سنو۔', 'Come here, Sara, listen to a story.'],
    ['دیکھو، دادا جان کا گلاب کھل گیا!', "Look, Dada's rose has bloomed!"],
    ['پودوں کو پانی دو، سارہ۔', 'Water the plants, Sara.'],
    ['نانی جان، آپ کیسی ہیں؟ میں ٹھیک ہوں۔', 'Nani, how are you? I am fine.'],
    ['گلاب کتنا خوبصورت ہے، دادا جان!', 'How beautiful the rose is, Dada!'],
  ]),
  play: S('Family: Play & Outings', [
    ['حنا، تم گنتی گنو، ایک، دو، تین!', 'Hina, you count: one, two, three!'],
    ['بارش ہو رہی ہے، چھتری لے لو۔', "It's raining, take an umbrella."],
    ['کاغذ کی کشتی بناؤں، امی؟', 'Shall I make a paper boat, Ammi?'],
    ['یہ لو، گیند آ رہی ہے، چھکا!', 'Here comes the ball — a six!'],
    ['چلو حنا، آج کرکٹ کھیلیں!', "Come on Hina, let's play cricket today!"],
  ]),
  care: S('Family: Care & Manners', [
    ['گلاس ٹوٹ گیا، معاف کیجیے، امی۔', "The glass broke — I'm sorry, Ammi."],
    ['کوئی بات نہیں، احتیاط کرنا۔', 'Never mind, be careful.'],
    ['ڈاکٹر صاحب، میرے پیٹ میں درد ہے۔', 'Doctor, my tummy hurts.'],
    ['سونے کا وقت ہو گیا، شب بخیر۔', "It's time to sleep, good night."],
    ['دانت صاف کر لیے، شب بخیر، امی!', "I've brushed my teeth — good night, Ammi!"],
  ]),
}
