// Guided stroke-order demos are generated from each glyph (see curriculum/trace.js) and are only shown to
// learners once they have been checked on the review page (/review/strokes).
//
// Checked so far (October 2026, by eye, before a teacher's review): the letters whose generated order and direction
// are right, or right after the corrections in strokeFixes.js (س ش ص ض ع غ أ إ آ), seven digits and five simple joins.
// Still hidden: ه ء لا, the digits ٣ ٧ ٨, the harder joins, the vowel signs and whole words. An Arabic teacher should
// look at those, and confirm the rest, on /review/strokes.
// To approve: list individual glyphs in APPROVED (the review page copies the list for you), or set APPROVE_ALL.
// Words are never listed one by one: set APPROVE_WORDS once the sample on the review page looks right.
// Leave everything as it is and learners only get the (always-on) accuracy-scored tracing.
export const APPROVE_ALL = false
export const APPROVE_WORDS = false
export const APPROVED = new Set([
  ...'ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن و ي ة'.split(' '),
  ...'أ إ آ ى ؤ ئ'.split(' '),
  ...'٠ ١ ٢ ٤ ٥ ٦ ٩'.split(' '),
  ...'با بي كا كي لي'.split(' '),
])

// A reviewer can switch every demo on for their own device from the review page.
const preview = () => {
  try {
    return localStorage.getItem('lb.previewGuides') === 'true'
  } catch {
    return false
  }
}

export const isGuideApproved = (glyph, gKind) => APPROVE_ALL || APPROVED.has(glyph) || (gKind === 'word' && APPROVE_WORDS) || preview()

/** Corrections made on this device's review page (only used while previewing guides). */
export const localEdits = () => {
  try {
    return preview() ? JSON.parse(localStorage.getItem('lb.strokeEdits') ?? '{}') : undefined
  } catch {
    return undefined
  }
}
