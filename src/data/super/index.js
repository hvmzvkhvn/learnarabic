// "Super challenge" sets: one per unit, written with ONLY vocabulary taught by the end of that unit (checked by
// `npm run lint:super`). Each item is [Urdu, English]. They never show transliteration.
import { teenSuper } from './teen'
import { seniorSuper } from './senior'
import { adultSuper } from './adult'
import { olderSuper } from './older'
import { youngSuper } from './young'

export const SUPER = { ...youngSuper, ...olderSuper, ...teenSuper, ...seniorSuper, ...adultSuper }
