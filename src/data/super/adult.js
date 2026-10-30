// Super challenges for the 18+ track (Wayfarers), keyed by unit id.
import { gemsSet } from './shared'
import { exploreSuperSet } from './explore'
import { teenShared } from './teen'

export const adultSuper = {
  'a-script': teenShared.script2,
  'a-reading': teenShared.reading,
  'a-identity': teenShared.identity,
  'a-numbers': teenShared.money,
  'a-travel': teenShared.travel,
  'a-work': {
    label: 'Work, Money & Forms',
    items: [
      ['عِنْدِي اِجْتِمَاعٌ مَعَ الْمُدِيرِ فِي الْمَكْتَبِ.', 'I have a meeting with the manager in the office.'],
      ['أَعْمَلُ فِي شَرِكَةٍ كَبِيرَةٍ مَعَ زَمِيلِي.', 'I work at a big company with my colleague.'],
      ['أُرِيدُ أَنْ أَفْتَحَ حِسَابًا فِي الْبَنْكِ.', 'I would like to open an account at the bank.'],
      ['وَقِّعِي هُنَا، وَهٰذَا رَقْمُ الْحِسَابِ.', 'Sign here — and this is the account number.'],
      ['هَلْ مَعَكَ جَوَازُ السَّفَرِ وَبِطَاقَةُ الْهُوِيَّةِ؟', 'Do you have your passport and your ID card?'],
    ],
  },
  'a-health': {
    label: 'Health, Study & Eating Out',
    items: [
      ['عِنْدِي صُدَاعٌ وَحُمَّى، أَيْنَ الصَّيْدَلِيَّةُ؟', 'I have a headache and a fever — where is the pharmacy?'],
      ['عِنْدِي مَوْعِدٌ مَعَ الطَّبِيبِ فِي الْمُسْتَشْفَى.', 'I have an appointment with the doctor at the hospital.'],
      ['خُذْ هٰذَا الدَّوَاءَ فِي الصَّبَاحِ وَالْمَسَاءِ.', 'Take this medicine in the morning and the evening.'],
      ['أَنَا طَالِبٌ فِي الْجَامِعَةِ، وَعِنْدِي اِمْتِحَانٌ غَدًا.', "I'm a university student, and I have an exam tomorrow."],
      ['الْحِسَابُ مِنْ فَضْلِكَ، كَانَ الْعَشَاءُ لَذِيذًا.', 'The bill, please — dinner was delicious.'],
    ],
  },
  'a-politics': {
    label: 'News, Politics & the Economy',
    items: [
      ['الْحُكُومَةُ وَالْبَرْلَمَانُ وَالدُّسْتُورُ وَالْقَانُونُ وَالِانْتِخَابَاتُ.', 'The government, parliament, the constitution, the law and elections.'],
      ['اِرْتَفَعَتِ الْأَسْعَارُ، وَالْبِلَادُ تَحْتَاجُ إِلَى وَظَائِفَ.', 'Prices have risen, and the country needs jobs.'],
      ['يَعْتَمِدُ الِاقْتِصَادُ عَلَى النِّفْطِ وَالسِّيَاحَةِ.', 'The economy depends on oil and tourism.'],
      ['بَدَأَ الرَّبِيعُ الْعَرَبِيُّ فِي تُونِسَ سَنَةَ ٢٠١١.', 'The Arab Spring began in Tunisia in 2011.'],
      ['فِي رَأْيِي، التَّعْلِيمُ أَهَمُّ شَيْءٍ لِلشَّبَابِ.', 'In my opinion, education matters most for young people.'],
    ],
  },
  'a-history': teenShared.history,
  'a-faith': {
    label: 'Faith, Culture & the Arts',
    items: [
      ['يُصَلِّي الْمُسْلِمُونَ فِي الْمَسْجِدِ، وَالْمَسِيحِيُّونَ فِي الْكَنِيسَةِ.', 'Muslims pray in the mosque, and Christians in the church.'],
      ['فِي رَمَضَانَ صَوْمٌ وَصَلَاةٌ وَزَكَاةٌ.', 'Ramadan means fasting, prayer and charity.'],
      ['يَسْمَعُ النَّاسُ فَيْرُوزَ وَأُمَّ كُلْثُومٍ.', 'People listen to Fairuz and Umm Kulthum.'],
      ['نَلْبَسُ الثَّوْبَ وَالْكُوفِيَّةَ فِي الْعِيدِ.', 'We wear the thobe and the keffiyeh at Eid.'],
      ['الشِّعْرُ فَنُّ الْعَرَبِ، وَالْعِلْمُ نُورٌ.', 'Poetry is the art of the Arabs, and knowledge is light.'],
    ],
  },
  'a-world': {
    label: 'Arabic Beyond Borders',
    items: [
      ['فِي مِصْرَ يَقُولُونَ "إِيه"، وَفِي لُبْنَانَ "شُو".', 'In Egypt they say "eeh" (what), and in Lebanon "shu".'],
      ['الْفُصْحَى لُغَةُ الصُّحُفِ وَالْأَخْبَارِ وَالْكُتُبِ.', 'Fusha is the language of newspapers, the news and books.'],
      ['يَتَعَلَّمُ الْمُسْلِمُونَ الْعَرَبِيَّةَ فِي كُلِّ الْعَالَمِ.', 'Muslims learn Arabic all over the world.'],
      ['كُلُّ اللَّهَجَاتِ جَمِيلَةٌ، وَالْفُصْحَى وَاحِدَةٌ.', 'All the dialects are beautiful, and Fusha is one and the same.'],
      ['نَجِيب مَحْفُوظ كَتَبَ عَنْ حَيَاةِ النَّاسِ فِي الْقَاهِرَةِ.', 'Naguib Mahfouz wrote about the lives of people in Cairo.'],
    ],
  },
  'a-grammar': teenShared.grammar,
  'a-gems': gemsSet,
  'a-explore': exploreSuperSet,
}
