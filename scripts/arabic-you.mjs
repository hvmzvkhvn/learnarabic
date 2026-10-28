// Spotting the gendered "you" in vowelled Arabic, shared by the checkers.
//   saysYouTo(bn) → { male, female }: whether the line uses the "you" for a boy or man (أَنْتَ، -كَ) or for a girl or woman (أَنْتِ، -كِ).
// Quoted text ("…") is ignored: it is something being taught or repeated, not said to the listener.

export const words = (bn) => bn.split(/[\s،؛؟!.…"“”:]+/).filter(Boolean)

// Words that end in كَ / كِ but are not "your" / "you": ذٰلِكَ، هُنَاكَ، تِلْكَ… and اِحْكِ ("tell!", to a boy or man).
// Verbs whose root ends in ك (بَارَكَ، تَرَكَ) are listed too. A leading وَ / فَ ("and") is ignored when looking words up,
// and a word with ال (الْكَعْكَ) never carries "your".
const NOT_YOU = new Set(['ذٰلِكَ', 'هُنَاكَ', 'كَذٰلِكَ', 'لِذٰلِكَ', 'تِلْكَ', 'بِذٰلِكَ', 'اِحْكِ', 'بَارَكَ', 'تَرَكَ', 'مُبَارَكَ'])
const bare = (w) => w.replace(/^[وف]َ/, '')
const suffix = (w, k) => w.length > 2 && w.endsWith(k) && !NOT_YOU.has(w) && !NOT_YOU.has(bare(w)) && !/^(ال|[وفب]َ?ال|لِل)/.test(w)
const MASC = (w) => bare(w) === 'أَنْتَ' || suffix(w, 'كَ')
const FEM = (w) => bare(w) === 'أَنْتِ' || suffix(w, 'كِ')

export function saysYouTo(bn) {
  const ws = words(bn.replace(/"[^"]*"/g, ''))
  return { male: ws.some(MASC), female: ws.some(FEM) }
}

export const hasMark = (w) => /[ً-ْٰ]/.test(w)
