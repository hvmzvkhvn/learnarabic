// Super challenges for the 16–18 track (Pathfinders), keyed by unit id.
import { exploreSuperSet } from './explore'
import { teenShared } from './teen'

export const seniorSuper = {
  'p-script': teenShared.script2,
  'p-reading': teenShared.reading,
  'p-identity': teenShared.identity,
  'p-numbers': teenShared.money,
  'p-travel': teenShared.travel,
  'p-study': {
    label: 'Study, Work & Dreams',
    items: [
      ['میرا امتحان کل ہے، اس لیے میں پریشان ہوں۔', "My exam is tomorrow, so I'm worried."],
      ['میرا خواب ڈاکٹر یا انجینئر کی نوکری ہے۔', 'My dream is a job as a doctor or an engineer.'],
      ['ٹیم میچ جیت گئی، سب خوش ہیں۔', 'The team won the match — everyone is happy.'],
      ['میرے خیال میں ریاضی سب سے اچھا مضمون ہے۔', 'In my opinion maths is the best subject.'],
      ['یونیورسٹی کے بعد مجھے نوکری چاہیے۔', 'After university I need a job.'],
    ],
  },
  'p-celebrate': {
    label: 'Celebrations & Weddings',
    items: [
      ['شادی میں مہندی، بارات اور ولیمہ ہوتے ہیں۔', 'A wedding has the mehndi, the baraat and the waleema.'],
      ['دولہا اور دلہن کو بہت مبارک!', 'Many congratulations to the groom and the bride!'],
      ['عید پر بچوں کو عیدی اور تحفے ملتے ہیں۔', 'At Eid children get Eidi and presents.'],
      ['شادی کے مہمان بہت خوش ہیں۔', 'The wedding guests are very happy.'],
      ['نکاح کے بعد سب نے مبارک دی۔', 'After the nikah everyone offered congratulations.'],
    ],
  },
  'p-history': teenShared.history,
  'p-art': teenShared.film,
  'p-grammar': teenShared.grammar,
  'p-explore': exploreSuperSet,
}
