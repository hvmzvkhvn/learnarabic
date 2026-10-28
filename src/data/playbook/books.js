// Picture books: each page is one illustration + one short Urdu line (with romanisation and English).
//   young  — ages 5–7: one very short line per picture
//   older  — ages 8–15: a little story across seven pages
// Pages are { scene, bn, roman, en }   (bn = the Urdu). Scenes are described in src/art/Scene.jsx.
const sc = (bg, time, ...items) => ({ bg, time, items, ...(items.some((i) => ['🌙', '🌅', '☀️'].includes(i.e)) ? { noLuminary: true } : {}) })
const it = (e, x, y, s = 44, extra = {}) => ({ e, x, y, s, ...extra })
const pg = (scene, bn, roman, en) => ({ scene, bn, roman, en })

export const youngBooks = [
  {
    id: 'sara-morning', emoji: '🌅', title: { bn: 'سارہ کی صبح', en: "Sara's Morning" },
    pages: [
      pg(sc('room', 'day', it('🛏️', 22, 64, 66), it('👧', 55, 72, 54, { anim: 'bob' }), it('⏰', 82, 46, 34, { anim: 'pulse' })), 'صبح ہو گئی۔', 'subh ho gayi.', 'It is morning.'),
      pg(sc('room', 'day', it('🚿', 24, 52, 60), it('👧', 56, 72, 54), it('🧼', 82, 84, 32, { anim: 'bob' })), 'سارہ منہ دھوتی ہے۔', 'Sara munh dhoti hai.', 'Sara washes her face.'),
      pg(sc('kitchen', 'day', it('🍳', 18, 38, 38), it('👩', 34, 70, 58), it('👧', 64, 76, 48), it('🥛', 86, 76, 32)), 'امی ناشتہ دیتی ہیں۔', 'ammi naashta deti hain.', 'Ammi gives her breakfast.'),
      pg(sc('room', 'day', it('👧', 38, 72, 56), it('🎒', 64, 76, 46, { anim: 'bob' }), it('👟', 84, 86, 30)), 'سارہ بستہ لیتی ہے۔', 'Sara basta leti hai.', 'Sara takes her school bag.'),
      pg(sc('city', 'day', it('👧', 22, 80, 46), it('🚌', 60, 76, 66, { anim: 'bob' })), 'سارہ بس میں بیٹھتی ہے۔', 'Sara bas mein baiṭhti hai.', 'Sara gets on the bus.'),
      pg(sc('meadow', 'day', it('🏫', 50, 52, 84), it('👧', 24, 80, 46), it('🧒', 76, 80, 46, { anim: 'bob' })), 'سارہ اسکول جاتی ہے۔', 'Sara school jaati hai.', 'Sara goes to school.'),
    ],
  },
  {
    id: 'nana-village', emoji: '🌾', title: { bn: 'نانا کا گاؤں', en: "Nana's Village" },
    pages: [
      pg(sc('village', 'day', it('🛶', 44, 80, 62, { anim: 'bob' }), it('🌴', 12, 62, 64, { anim: 'sway' }), it('🏡', 82, 58, 56)), 'کشتی دریا میں چلتی ہے۔', 'kashti darya mein chalti hai.', 'The boat goes along the river.'),
      pg(sc('meadow', 'day', it('🌾', 18, 72, 54, { anim: 'sway' }), it('🌾', 38, 76, 54, { anim: 'sway' }), it('🌾', 62, 72, 54, { anim: 'sway' }), it('🌾', 82, 76, 54, { anim: 'sway' }), it('👨‍🌾', 50, 62, 52)), 'کھیت میں گندم۔', 'khet mein gandum.', 'Wheat in the field.'),
      pg(sc('village', 'day', it('🦆', 28, 80, 40, { anim: 'bob' }), it('🦆', 50, 84, 40, { anim: 'bob' }), it('🦆', 72, 80, 40, { anim: 'bob' })), 'تالاب میں بطخیں تیرتی ہیں۔', 'taalaab mein batakhen tairti hain.', 'Ducks swim in the pond.'),
      pg(sc('meadow', 'day', it('🌳', 34, 54, 96, { anim: 'sway' }), it('🥭', 26, 38, 26), it('🥭', 38, 30, 26), it('🥭', 44, 44, 26), it('👧', 70, 78, 48)), 'درخت پر آم۔', 'darakht par aam.', 'Mangoes on the tree.'),
      pg(sc('meadow', 'day', it('🐄', 40, 72, 66, { anim: 'bob' }), it('🐦', 76, 28, 30, { anim: 'drift' }), it('🌼', 18, 82, 26)), 'کھیت میں گائے۔', 'khet mein gaaye.', 'A cow in the field.'),
      pg(sc('village', 'evening', it('🏡', 28, 58, 62), it('👴', 58, 76, 48), it('👧', 74, 80, 42)), 'سورج ڈوبتا ہے۔', 'sooraj ḍoobta hai.', 'The sun sets.'),
    ],
  },
  {
    id: 'rainy-day', emoji: '🌧️', title: { bn: 'بارش کا دن', en: 'A Rainy Day' },
    pages: [
      pg(sc('meadow', 'rain', it('☁️', 50, 20, 70, { anim: 'drift' }), it('🏠', 72, 62, 56)), 'آسمان پر بادل۔', 'aasmaan par baadal.', 'Clouds in the sky.'),
      pg(sc('meadow', 'rain', it('🧒', 44, 76, 54), it('🏠', 76, 58, 50)), 'بارش ہو رہی ہے۔', 'baarish ho rahi hai.', 'It is raining.'),
      pg(sc('meadow', 'rain', it('☂️', 40, 52, 62, { anim: 'sway' }), it('🧒', 40, 78, 50)), 'میرے پاس چھتری ہے۔', 'mere paas chhatri hai.', 'I have an umbrella.'),
      pg(sc('meadow', 'rain', it('🧒', 38, 76, 52, { anim: 'bob' }), it('💦', 62, 84, 52, { anim: 'pulse' })), 'پانی میں چھپ چھپ!', 'paani mein chhap chhap!', 'Splash, splash in the water!'),
      pg(sc('village', 'day', it('⛵', 46, 80, 44, { anim: 'bob' }), it('🧒', 20, 62, 48)), 'میری کاغذ کی کشتی۔', 'meri kaaghaz ki kashti.', 'My paper boat.'),
      pg(sc('meadow', 'day', it('🌈', 50, 28, 120), it('🧒', 36, 80, 50, { anim: 'bob' })), 'وہ دیکھو، دھنک!', 'woh dekho, dhanak!', 'Look, a rainbow!'),
    ],
  },
  {
    id: 'my-animals', emoji: '🐘', title: { bn: 'میرے جانور', en: 'My Animals' },
    pages: [
      pg(sc('meadow', 'day', it('🐶', 30, 74, 56, { anim: 'bob' }), it('🐱', 66, 76, 52)), 'کتا اور بلی۔', 'kutta aur billi.', 'A dog and a cat.'),
      pg(sc('meadow', 'day', it('🐄', 30, 72, 62), it('🐐', 68, 76, 50, { anim: 'bob' })), 'گائے اور بکری۔', 'gaaye aur bakri.', 'A cow and a goat.'),
      pg(sc('meadow', 'day', it('🐘', 50, 66, 104, { anim: 'sway' })), 'ہاتھی بہت بڑا ہے۔', 'haathi bohat baṛa hai.', 'The elephant is very big.'),
      pg(sc('meadow', 'day', it('🌳', 40, 54, 100), it('🐒', 40, 40, 38, { anim: 'bob' }), it('🍌', 62, 70, 28)), 'بندر درخت پر بیٹھا ہے۔', 'bandar darakht par baiṭha hai.', 'The monkey is sitting in the tree.'),
      pg(sc('meadow', 'day', it('🦚', 50, 68, 90, { anim: 'sway' })), 'مور ناچتا ہے۔', 'mor naachta hai.', 'The peacock dances.'),
      pg(sc('river', 'day', it('🐟', 30, 76, 40, { anim: 'bob' }), it('🐠', 56, 84, 40, { anim: 'bob' }), it('🐟', 78, 72, 36, { anim: 'bob' })), 'مچھلیاں پانی میں۔', 'machhliyaan paani mein.', 'Fish in the water.'),
    ],
  },
  {
    id: 'at-market', emoji: '🛒', title: { bn: 'بازار میں', en: 'At the Market' },
    pages: [
      pg(sc('city', 'day', it('👨', 34, 76, 58), it('👧', 58, 82, 44, { anim: 'bob' })), 'ہم بازار جاتے ہیں۔', 'hum baazaar jaate hain.', 'We go to the market.'),
      pg(sc('market', 'day', it('🥭', 22, 76, 40), it('🥭', 34, 80, 40), it('🥭', 46, 76, 40), it('🧑‍🌾', 74, 66, 56)), 'ہم آم خریدیں گے۔', 'hum aam khareedein ge.', 'We will buy mangoes.'),
      pg(sc('market', 'day', it('🐟', 24, 78, 46), it('🐟', 42, 82, 42), it('🧑‍🌾', 72, 66, 56)), 'مچھلی کتنے کی ہے؟', 'machhli kitne ki hai?', 'How much is the fish?'),
      pg(sc('market', 'day', it('💵', 38, 74, 56, { anim: 'pulse' }), it('🧑‍🌾', 72, 66, 56)), 'سو روپے۔', 'sau rupay.', 'One hundred rupees.'),
      pg(sc('market', 'day', it('🛍️', 44, 72, 62, { anim: 'bob' }), it('🍎', 24, 80, 30), it('🍌', 66, 80, 30)), 'میرے تھیلے میں پھل۔', 'mere thaile mein phal.', 'Fruit in my bag.'),
      pg(sc('meadow', 'evening', it('🏠', 70, 58, 62), it('👨', 28, 78, 54), it('👧', 46, 82, 42, { anim: 'bob' })), 'گھر چلو۔', 'ghar chalo.', "Let's go home."),
    ],
  },
  {
    id: 'eid-morning', emoji: '🌙', title: { bn: 'عید کی صبح', en: 'Eid Morning' },
    pages: [
      pg(sc('meadow', 'evening', it('🌙', 74, 24, 54, { anim: 'pulse' }), it('🕌', 36, 56, 84)), 'آج عید ہے!', 'aaj eid hai!', 'Today is Eid!'),
      pg(sc('room', 'day', it('👧', 40, 70, 58), it('👗', 66, 70, 52, { anim: 'bob' })), 'نئے کپڑے۔', 'naye kapṛe.', 'New clothes.'),
      pg(sc('meadow', 'day', it('🕌', 50, 52, 86), it('👨', 22, 80, 50), it('👦', 80, 82, 44)), 'ہم مسجد جاتے ہیں۔', 'hum masjid jaate hain.', 'We go to the mosque.'),
      pg(sc('meadow', 'day', it('🤗', 40, 66, 70, { anim: 'pulse' }), it('👨', 20, 80, 46), it('👦', 70, 82, 44)), 'سب گلے ملتے ہیں۔', 'sab gale milte hain.', 'Everyone hugs.'),
      pg(sc('kitchen', 'day', it('🍛', 36, 76, 54), it('🍮', 62, 78, 46), it('🥛', 82, 76, 32)), 'مزیدار کھانا۔', 'mazedaar khaana.', 'Delicious food.'),
      pg(sc('meadow', 'day', it('💵', 36, 70, 54, { anim: 'pulse' }), it('🎈', 66, 40, 46, { anim: 'drift' }), it('👧', 62, 80, 46)), 'مجھے عیدی ملی۔', 'mujhe eidi mili.', 'I got Eidi (Eid money).'),
    ],
  },
]

export const olderBooks = [
  {
    id: 'lahore-rickshaw', emoji: '🛺', title: { bn: 'لاہور میں رکشہ', en: 'A Rickshaw in Lahore' },
    pages: [
      pg(sc('city', 'day', it('🛺', 30, 78, 58), it('🚌', 72, 76, 58)), 'لاہور بہت بڑا شہر ہے۔', 'Lahore bohat baṛa shehar hai.', 'Lahore is a very big city.'),
      pg(sc('city', 'day', it('🛺', 22, 78, 50), it('🛺', 52, 80, 50), it('🛺', 80, 78, 50)), 'سڑک پر بہت سے رکشے چلتے ہیں۔', 'saṛak par bohat se rikshe chalte hain.', 'Lots of rickshaws go along the road.'),
      pg(sc('city', 'day', it('🛺', 56, 76, 66, { anim: 'bob' }), it('👨', 22, 80, 48), it('👧', 40, 84, 38)), 'میں ابو کے ساتھ رکشے میں بیٹھتی ہوں۔', 'main abbu ke saath rikshe mein baiṭhti hoon.', 'I get into the rickshaw with Abbu.'),
      pg(sc('city', 'day', it('🛺', 46, 76, 66, { anim: 'bob' }), it('🚴', 78, 80, 44)), 'رکشہ تیز تیز چلتا ہے۔', 'riksha tez tez chalta hai.', 'The rickshaw zips along.'),
      pg(sc('market', 'day', it('🛺', 36, 80, 56, { anim: 'bob' }), it('🥭', 70, 78, 38), it('🐟', 84, 82, 34)), 'ہم بازار کے پاس سے گزرتے ہیں۔', 'hum baazaar ke paas se guzarte hain.', 'We go past the market.'),
      pg(sc('city', 'evening', it('🛺', 40, 78, 60), it('💵', 74, 74, 46, { anim: 'pulse' })), 'بھائی، کرایہ کتنا ہے؟', 'bhaai, kiraaya kitna hai?', 'Brother, how much is the fare?'),
      pg(sc('city', 'evening', it('🏠', 70, 60, 60), it('👨', 28, 80, 48), it('👧', 46, 84, 40, { anim: 'bob' })), 'شکریہ، بھائی۔ اللہ حافظ۔', 'shukriya, bhaai. allah haafiz.', 'Thank you, brother. Goodbye.'),
    ],
  },
  {
    id: 'jashn-azadi', emoji: '🇵🇰', title: { bn: 'جشنِ آزادی', en: 'Independence Day' },
    pages: [
      pg(sc('meadow', 'day', it('🇵🇰', 50, 34, 70, { anim: 'sway' }), it('🏠', 22, 62, 52)), 'آج ۱۴ اگست ہے۔', 'aaj chaudah agast hai.', 'Today is 14 August.'),
      pg(sc('room', 'day', it('👧', 34, 70, 56), it('👦', 62, 72, 52), it('👗', 84, 74, 40)), 'سب ہرے اور سفید کپڑے پہنتے ہیں۔', 'sab hare aur safed kapṛe pehante hain.', 'Everyone wears green and white clothes.'),
      pg(sc('meadow', 'day', it('🎪', 52, 54, 84), it('👨‍👩‍👧', 26, 80, 54)), 'ہم میلے میں جاتے ہیں۔', 'hum mele mein jaate hain.', 'We go to the fair.'),
      pg(sc('market', 'day', it('🎈', 22, 60, 44, { anim: 'drift' }), it('🎈', 46, 56, 44, { anim: 'drift' }), it('🪆', 68, 78, 44), it('🏺', 86, 80, 40)), 'میلے میں رنگین غبارے اور کھلونے ہیں۔', 'mele mein rangeen ghubaare aur khilaune hain.', 'The fair has colourful balloons and toys.'),
      pg(sc('meadow', 'day', it('🎈', 50, 36, 70, { anim: 'drift' }), it('🧒', 50, 78, 52)), 'مجھے لال غبارہ ملا۔', 'mujhe laal ghubaara mila.', 'I got a red balloon.'),
      pg(sc('market', 'day', it('🍥', 30, 78, 46), it('🍬', 54, 80, 46), it('🍮', 78, 76, 46)), 'ہم جلیبی اور مٹھائی کھاتے ہیں۔', 'hum jalebi aur miṭhaai khaate hain.', 'We eat jalebi and sweets.'),
      pg(sc('meadow', 'night', it('🎆', 30, 26, 60, { anim: 'pulse' }), it('🎆', 68, 34, 54, { anim: 'pulse' }), it('👨‍👩‍👧‍👦', 50, 80, 58)), 'پاکستان زندہ باد!', 'paakistaan zinda baad!', 'Long live Pakistan!'),
    ],
  },
  {
    id: 'palla-river', emoji: '🐟', title: { bn: 'دریا کی پلا', en: 'Palla Fish on the Indus' },
    pages: [
      pg(sc('river', 'evening', it('🛶', 44, 66, 62, { anim: 'bob' })), 'دریا میں کشتی چلتی ہے۔', 'darya mein kashti chalti hai.', 'A boat goes along the river.'),
      pg(sc('river', 'day', it('🛶', 40, 64, 62, { anim: 'bob' }), it('🧑‍🌾', 40, 52, 36), it('🕸️', 70, 76, 50, { anim: 'sway' })), 'مچھیرے جال ڈالتے ہیں۔', 'machhere jaal ḍaalte hain.', 'The fishermen cast their net.'),
      pg(sc('river', 'day', it('🕸️', 36, 70, 56), it('🐟', 26, 80, 36, { anim: 'bob' }), it('🐟', 44, 84, 36, { anim: 'bob' }), it('🐟', 62, 78, 36, { anim: 'bob' })), 'جال میں بہت سی مچھلیاں ہیں۔', 'jaal mein bohat si machhliyaan hain.', 'There are lots of fish in the net.'),
      pg(sc('paper', 'day', it('🐟', 50, 56, 110, { anim: 'bob' })), 'پلا چاندی جیسی مچھلی ہے۔', 'palla chaandi jaisi machhli hai.', 'Palla is a silvery fish.'),
      pg(sc('market', 'day', it('🐟', 26, 78, 46), it('🐟', 44, 82, 46), it('💵', 66, 74, 46), it('🧑‍🌾', 84, 64, 50)), 'بازار میں پلا کی قیمت زیادہ ہے۔', 'baazaar mein palla ki qeemat zyaada hai.', 'Palla is expensive at the market.'),
      pg(sc('kitchen', 'day', it('👩', 36, 70, 58), it('🍳', 18, 40, 36), it('🐟', 64, 76, 44)), 'امی مچھلی پکاتی ہیں۔', 'ammi machhli pakaati hain.', 'Ammi cooks the fish.'),
      pg(sc('meadow', 'day', it('🇵🇰', 50, 38, 80, { anim: 'sway' }), it('🐟', 50, 80, 50, { anim: 'bob' })), 'سندھ کے لوگ پلا بہت پسند کرتے ہیں۔', 'sindh ke log palla bohat pasand karte hain.', 'The people of Sindh love palla.'),
    ],
  },
  {
    id: 'dada-village', emoji: '🌳', title: { bn: 'دادا کا گاؤں', en: "Dada's Village" },
    pages: [
      pg(sc('river', 'day', it('🚤', 44, 70, 60, { anim: 'bob' }), it('👧', 44, 56, 30)), 'ہم گاؤں جاتے ہیں۔', 'hum gaaon jaate hain.', 'We go to the village.'),
      pg(sc('meadow', 'day', it('🌾', 20, 72, 50, { anim: 'sway' }), it('🌾', 44, 76, 50, { anim: 'sway' }), it('🌾', 68, 72, 50, { anim: 'sway' }), it('🌾', 86, 76, 50, { anim: 'sway' })), 'گاؤں میں گندم کے بڑے کھیت ہیں۔', 'gaaon mein gandum ke baṛe khet hain.', 'The village has big wheat fields.'),
      pg(sc('village', 'day', it('🏊', 30, 82, 40, { anim: 'bob' }), it('🏊', 58, 80, 40, { anim: 'bob' }), it('🌴', 84, 62, 56)), 'تالاب میں لڑکے تیرتے ہیں۔', 'taalaab mein laṛke tairte hain.', 'Boys swim in the pond.'),
      pg(sc('meadow', 'day', it('🌳', 36, 52, 100, { anim: 'sway' }), it('👴', 48, 78, 52)), 'دادا درخت کے نیچے بیٹھتے ہیں۔', 'daada darakht ke neeche baiṭhte hain.', 'Dada sits under the tree.'),
      pg(sc('meadow', 'evening', it('👴', 36, 74, 54), it('👧', 62, 80, 44), it('📖', 50, 56, 38, { anim: 'bob' })), 'وہ مجھے کہانیاں سناتے ہیں۔', 'woh mujhe kahaaniyaan sunaate hain.', 'He tells me stories.'),
      pg(sc('village', 'night', it('🏡', 30, 58, 62), it('🌙', 76, 22, 44, { anim: 'pulse' })), 'شام کو آسمان پر چاند نکلتا ہے۔', 'shaam ko aasmaan par chaand nikalta hai.', 'In the evening the moon comes out.'),
      pg(sc('village', 'day', it('❤️', 50, 30, 60, { anim: 'pulse' }), it('👴', 36, 76, 50), it('👧', 64, 80, 42)), 'مجھے دادا کا گاؤں بہت اچھا لگتا ہے۔', 'mujhe daada ka gaaon bohat achchha lagta hai.', "I really like Dada's village."),
    ],
  },
  {
    id: 'our-school', emoji: '🏫', title: { bn: 'ہمارا اسکول', en: 'Our School' },
    pages: [
      pg(sc('meadow', 'day', it('🏫', 52, 52, 84), it('🧒', 22, 80, 46), it('👧', 80, 82, 44)), 'صبح ہم اسکول جاتے ہیں۔', 'subh hum school jaate hain.', 'In the morning we go to school.'),
      pg(sc('classroom', 'day', it('🧑‍🏫', 40, 64, 52), it('🧒', 20, 82, 40), it('👧', 72, 82, 40)), 'استاد کلاس میں آتے ہیں۔', 'ustaad klaas mein aate hain.', 'The teacher comes into the class.'),
      pg(sc('classroom', 'day', it('📖', 30, 80, 44, { anim: 'bob' }), it('📖', 56, 82, 44), it('🧒', 82, 78, 44)), 'ہم کتابیں کھولتے ہیں۔', 'hum kitaaben kholte hain.', 'We open our books.'),
      pg(sc('classroom', 'day', it('🖊️', 40, 78, 44, { anim: 'bob' }), it('📓', 62, 80, 46), it('🧒', 20, 80, 44)), 'ہم کاپی میں لکھتے ہیں۔', 'hum kaapi mein likhte hain.', 'We write in our exercise books.'),
      pg(sc('meadow', 'day', it('⚽', 52, 80, 40, { anim: 'bob' }), it('🧒', 26, 76, 48), it('👧', 76, 76, 48)), 'وقفے میں ہم کھیلتے ہیں۔', 'waqfe mein hum khelte hain.', 'At break time we play.'),
      pg(sc('meadow', 'evening', it('🏫', 50, 52, 80), it('🔔', 20, 40, 40, { anim: 'sway' })), 'دوپہر کو چھٹی ہوتی ہے۔', 'dopahar ko chhuṭṭi hoti hai.', 'School finishes in the afternoon.'),
      pg(sc('meadow', 'evening', it('🏠', 72, 58, 60), it('🧒', 36, 80, 48, { anim: 'bob' })), 'ہم گھر واپس آتے ہیں۔', 'hum ghar waapas aate hain.', 'We come back home.'),
    ],
  },
  {
    id: 'karachi-sea', emoji: '🏖️', title: { bn: 'کراچی کا سمندر', en: 'The Sea at Karachi' },
    pages: [
      pg(sc('city', 'day', it('🚌', 46, 76, 66, { anim: 'bob' })), 'ہم کراچی جاتے ہیں۔', 'hum Karaachi jaate hain.', 'We go to Karachi.'),
      pg(sc('sea', 'day', it('⛱️', 28, 78, 52), it('🌴', 82, 66, 60, { anim: 'sway' })), 'یہاں کلفٹن کا ساحل ہے۔', 'yahaan klifṭan ka saahil hai.', 'Here is Clifton beach.'),
      pg(sc('sea', 'day', it('🌊', 50, 48, 100, { anim: 'bob' })), 'سمندر کی لہریں بڑی ہیں۔', 'samandar ki lehren baṛi hain.', 'The waves of the sea are big.'),
      pg(sc('sea', 'day', it('🐚', 36, 84, 38), it('🦀', 62, 86, 30, { anim: 'bob' }), it('🧒', 20, 74, 46)), 'ہم ریت میں سیپیاں ڈھونڈتے ہیں۔', 'hum ret mein seepiyaan ḍhoonḍte hain.', 'We look for shells in the sand.'),
      pg(sc('sea', 'day', it('🏊', 40, 56, 40, { anim: 'bob' }), it('🏊', 66, 60, 40, { anim: 'bob' })), 'بچے پانی میں کھیلتے ہیں۔', 'bachche paani mein khelte hain.', 'Children play in the water.'),
      pg(sc('sea', 'evening', it('🌅', 50, 46, 90, { anim: 'pulse' })), 'شام کو سورج سمندر میں ڈوبتا ہے۔', 'shaam ko sooraj samandar mein ḍoobta hai.', 'In the evening the sun sets into the sea.'),
      pg(sc('sea', 'evening', it('🧒', 30, 80, 48), it('👨', 56, 78, 54), it('❤️', 76, 40, 44, { anim: 'pulse' })), 'ہم پھر آئیں گے۔', 'hum phir aaein ge.', 'We will come again.'),
    ],
  },
]
