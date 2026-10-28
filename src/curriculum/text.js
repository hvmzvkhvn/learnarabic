// Marks that attach to the previous letter: zabar, zer, pesh, tanween, shadd, jazm, hamza above/below, khari zabar
// (U+064B–U+065F, U+0670), and do-chashmi he (ھ), which makes aspirates like بھ and پھ one sound.
const isMark = (cp) => (cp >= 0x64b && cp <= 0x65f) || cp === 0x670 || cp === 0x6be

/** Split an Urdu word into tile-sized clusters (a letter + its marks; aspirates like بھ stay together). */
export function splitClusters(word) {
  const units = []
  for (const ch of Array.from(word)) {
    if (units.length && isMark(ch.codePointAt(0))) units[units.length - 1] += ch
    else units.push(ch)
  }
  return units
}

/** True when the text contains Urdu (Arabic-script) letters. */
export const hasUrdu = (s) => /[\u0600-\u06FF]/.test(s ?? '')

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export const sample = (arr, n) => shuffle(arr).slice(0, n)
// Split into evenly sized groups of at most `size` (avoids a tiny leftover lesson).
export const chunk = (arr, size) => {
  if (!arr.length) return []
  const per = Math.ceil(arr.length / Math.ceil(arr.length / size))
  const out = []
  for (let i = 0; i < arr.length; i += per) out.push(arr.slice(i, i + per))
  return out
}
