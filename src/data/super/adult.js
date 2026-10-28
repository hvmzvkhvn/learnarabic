// Super challenges for the 18+ track (Wayfarers), keyed by unit id.
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
      ['میں دفتر میں کام کرتا ہوں، یہ میری نوکری ہے۔', 'I work in an office — this is my job.'],
      ['کل میری کمپنی میں ایک میٹنگ ہے۔', 'Tomorrow there is a meeting at my company.'],
      ['نوکری کے لیے درخواست اور انٹرویو ہے۔', 'There is an application and an interview for the job.'],
      ['بینک میں اکاؤنٹ کھولنے کے لیے شناختی کارڈ چاہیے۔', 'You need an ID card to open a bank account.'],
      ['یہاں دستخط کریں، پھر فارم جمع کرانا ہے۔', 'Sign here, then the form has to be handed in.'],
    ],
  },
  'a-health': {
    label: 'Health, Study & Eating Out',
    items: [
      ['مجھے بخار اور کھانسی ہے، ڈاکٹر کے پاس جانا ہے۔', 'I have a fever and a cough; I need to see the doctor.'],
      ['ڈاکٹر نے دوائی کا نسخہ دیا۔', 'The doctor gave a prescription for medicine.'],
      ['ہسپتال میں بہت سے مریض تھے۔', 'There were many patients in the hospital.'],
      ['زکام، سر درد اور کھانسی کی دوائی۔', 'Medicine for a cold, a headache and a cough.'],
      ['اس ریسٹورنٹ کی نہاری بہت مزیدار ہے۔', 'The nihari at this restaurant is delicious.'],
    ],
  },
  'a-politics': {
    label: 'News, Politics & the Economy',
    items: [
      ['انتخابات میں عوام ووٹ دیتے ہیں۔', 'In elections the people vote.'],
      ['مہنگائی پر حکومت کا نیا قانون۔', "The government's new law on inflation."],
      ['کپاس اور کپڑا پاکستان کی برآمدات ہیں۔', "Cotton and textiles are among Pakistan's exports."],
      ['اخبار میں وزیر اعظم کی خبر ہے۔', 'There is news about the prime minister in the paper.'],
      ['ہر صوبے کی اپنی اسمبلی اور حکومت ہے۔', 'Every province has its own assembly and government.'],
    ],
  },
  'a-history': teenShared.history,
  'a-faith': {
    label: 'Faith, Culture & the Arts',
    items: [
      ['پاکستان میں مسجد، مندر، گرجا گھر اور گوردوارہ ہیں۔', 'Pakistan has mosques, temples, churches and gurdwaras.'],
      ['مزار پر عرس کا میلہ لگتا ہے۔', "A fair is held at the shrine for the saint's urs."],
      ['عید پر سب شلوار قمیض پہنتے ہیں۔', 'At Eid everyone wears shalwar kameez.'],
      ['سندھ کی اجرک اور ڈھول مشہور ہیں۔', "Sindh's ajrak and dhol drums are famous."],
      ['مہمان کو چائے پیش کرنا ہماری روایت ہے۔', 'Offering tea to a guest is our tradition.'],
    ],
  },
  'a-world': {
    label: 'Urdu Beyond Borders',
    items: [
      ['اردو اور ہندی بولنے والے ایک دوسرے کو سمجھتے ہیں۔', 'Speakers of Urdu and Hindi understand each other.'],
      ['شکریہ اور دھنیواد کا مطلب ایک ہی ہے۔', 'Shukriya and dhanyavaad mean the same thing.'],
      ['برطانیہ میں بہت سے پاکستانی رہتے ہیں۔', 'Many Pakistanis live in Britain.'],
      ['دنیا کے بہت سے شہروں میں اردو سنائی دیتی ہے۔', 'Urdu can be heard in many cities of the world.'],
      ['خوبصورت اور سندر، دونوں کا مطلب ایک ہے۔', 'Khoobsoorat and sundar both mean the same.'],
    ],
  },
  'a-grammar': teenShared.grammar,
  'a-explore': exploreSuperSet,
}
