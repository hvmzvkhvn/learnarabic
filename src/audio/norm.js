// Shared by the app and scripts/generate-audio.mjs so both agree on what gets recorded.
import { allLetters, aspirates } from '../data/alphabet'

// A letter on its own is spoken by its name (ب → "بے"), the way the alphabet is recited.
const SAY = Object.fromEntries([...allLetters, ...aspirates].map((l) => [l.letter, l.name]))

/** Key used to look a piece of text up in the audio manifest. */
export const norm = (text) => text.replace(/…/g, '').trim()

/** What is actually spoken for that text. */
export const sayFor = (text) => SAY[norm(text)] ?? norm(text)
