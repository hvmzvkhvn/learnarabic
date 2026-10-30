// Hand corrections to the generated stroke guides, made on /review/strokes.
//   order: stroke indices in writing order · reverse: strokes to draw the other way · drop: strokes to leave out
// س ش ص ض: the generator drew the bowl before the small tooth beside it; Arabic is written right to left in one
// flow, so the tooth comes before the bowl. ع غ: the head is drawn from its right end, round to the left and down.
// أ إ آ: the alif first, then the hamza or madda.
export const FIXES = {
  'س': { order: [0, 2, 1] },
  'ش': { order: [0, 2, 1] },
  'ص': { order: [0, 2, 1] },
  'ض': { order: [0, 2, 1] },
  'ع': { reverse: [0] },
  'غ': { reverse: [0] },
  'أ': { order: [1, 0] },
  'إ': { order: [1, 0] },
  'آ': { order: [1, 0] },
}
