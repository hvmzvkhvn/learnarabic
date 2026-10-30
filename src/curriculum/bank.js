// The content bank: every letter, sign, syllable, word and sentence in the curriculum,
// each with a stable id. Lessons only refer to ids, so one correction fixes everywhere.
import { letterGroups, vowelSigns, aspirates } from '../data/alphabet'
import { wordCategories } from '../data/words'
import { grammarWordCategories, sunMoonPicks } from '../data/grammar'
import { sentenceGroups, verbs, pronounForms } from '../data/sentences'
import { roster, phrases, scenes, politeYoung, politeOlder, unitLayout, ADDRESS_TIP } from '../data/family'
import { conjuncts } from '../data/conjuncts'
import { teenWordCategories } from '../data/teenWords'
import { teenSentenceGroups, tenseVerbs, tensePronouns } from '../data/teenSentences'
import { poems, passages, cinemaScenes } from '../data/teenText'
import { stories } from '../data/stories'
import { exploreRegions } from '../data/explore'
import { SUPER } from '../data/super'
import { allLines as playbookLines, allWords as playbookWords } from '../data/playbook'
import { adultWordCategories, adultSentenceGroups, adultPassages } from '../data/adultText'

export const bank = new Map()
const add = (item) => {
  bank.set(item.id, item)
  return item.id
}

// ---- Letters (in shape families) ------------------------------------------
const letterItem = (l, section) =>
  add({ id: `letter:${l.letter}`, kind: 'letter', section, bn: l.letter, roman: l.roman, sound: l.sound, art: l.example.emoji, example: l.example })

export const letterGroupIds = letterGroups.map((g) => ({ key: g.key, name: g.name, hint: g.hint, ids: g.letters.map((l) => letterItem(l, g.name)) }))
export const aspirateIds = aspirates.map((l) => letterItem(l, 'Hamza & special shapes'))

// ---- Vowel marks and long vowels (shown on ب) and practice syllables -------------
export const signIds = vowelSigns.map((s) =>
  add({ id: `sign:${s.sign}`, kind: 'sign', section: 'Vowel marks', bn: s.combined, roman: s.combinedRoman, signChar: s.sign, signRoman: s.roman, signSays: s.says, signName: s.name }),
)

const SYL_CONSONANTS = ['ت', 'ج', 'د', 'ر', 'س', 'ك', 'ف', 'ل', 'م', 'ن', 'ق', 'ح', 'ش', 'ه']
const soundOf = (letter) => bank.get(`letter:${letter}`).sound

export const syllableIdsBySign = vowelSigns.map((s, i) =>
  [0, 1, 2, 3].map((j) => SYL_CONSONANTS[(i * 3 + j) % SYL_CONSONANTS.length]).map((c) =>
    add({ id: `syl:${c}${s.sign}`, kind: 'syllable', section: 'Vowel marks', bn: s.make ? s.make(c) : c + s.sign, roman: s.rom ? s.rom(soundOf(c)) : soundOf(c) + s.roman }),
  ),
)

// ---- Words ---------------------------------------------------------------
export const wordIdsByCat = {}
export const categoryMeta = {}
const allWordCategories = [...wordCategories, ...grammarWordCategories]
allWordCategories.forEach((c) => {
  categoryMeta[c.key] = { title: c.title, emoji: c.emoji, visual: Boolean(c.visual), note: c.note }
  wordIdsByCat[c.key] = c.words.map((w) =>
    add({
      id: `word:${c.key}:${w.bn}`,
      kind: 'word',
      section: c.title,
      cat: c.key,
      visual: Boolean(c.visual),
      bn: w.bn,
      roman: w.roman,
      en: w.en,
      art: w.digit || w.emoji,
      digit: w.digit,
    }),
  )
})

// ---- Sentences -------------------------------------------------------------
export const sentenceIdsByGroup = {}
export const sentenceMeta = {}
sentenceGroups.forEach((g) => {
  sentenceMeta[g.key] = { title: g.title, emoji: g.emoji }
  sentenceIdsByGroup[g.key] = g.sentences.map((s) =>
    add({ id: `sent:${s.bn}`, kind: 'sentence', section: g.title, group: g.key, bn: s.bn, roman: s.roman, en: s.en, tokens: s.bn.split(' ') }),
  )
})

// ---- Verb patterns ---------------------------------------------------------
export const formIdsByVerb = {}
verbs.forEach((v) => {
  formIdsByVerb[v.key] = pronounForms.map((p, i) =>
    add({
      id: `form:${v.key}:${p.roman}`,
      kind: 'form',
      section: `Verb: ${v.inf} (to ${v.en})`,
      verb: v.key,
      pronoun: p.bn,
      form: v.forms[i],
      bn: `${p.bn} ${v.forms[i]}`,
      roman: `${p.roman} ${v.romans[i]}`,
      en: `${p.en} ${v.enForms[i]}`,
      tokens: [p.bn, v.forms[i]],
      allForms: v.forms,
    }),
  )
})

// ---- Family unit: phrases, أَنْتَ/أَنْتِ practice and conversations -------------------------------
export { roster, unitLayout, ADDRESS_TIP }
const AGES = { young: '5–7', older: '8–12' }

export const family = {}
for (const track of ['young', 'older']) {
  const phraseIds = phrases[track].map((p) =>
    add({
      id: `sent:fam:${track}:${p.bn}`, kind: 'sentence', section: `Family · Everyday phrases (${AGES[track]})`,
      group: `fam-phrases-${track}`, bn: p.bn, roman: p.roman, en: p.en, tokens: p.bn.split(' '),
    }),
  )

  // أَنْتَ / أَنْتِ practice
  let polite
  if (track === 'young') {
    const anta = 'word:pronouns:أَنْتَ'
    const anti = 'word:pronouns:أَنْتِ'
    polite = politeYoung.map((c) => ({
      title: c.title, stem: { art: c.art, text: c.who },
      rightId: c.right === 'أَنْتَ' ? anta : anti, wrongIds: [c.right === 'أَنْتَ' ? anti : anta],
    }))
  } else {
    polite = politeOlder.map((c) => {
      const mk = (x) =>
        add({ id: `sent:polite:${x.bn}`, kind: 'sentence', section: 'Family · أَنْتَ or أَنْتِ? (8–12)', group: 'fam-polite', bn: x.bn, roman: x.roman, en: x.en, tokens: x.bn.split(' ') })
      const rightId = c.existing ? `sent:${c.right.bn}` : mk(c.right)
      const wrongIds = c.wrong.map((w) => (c.existing ? `sent:${w.bn}` : mk(w)))
      return { title: c.title, stem: { art: c.art }, rightId, wrongIds }
    })
  }

  // conversations
  const sceneList = scenes[track].map((sc) => {
    const lineIds = []
    sc.lines.forEach((l, i) => {
      const id = `line:${track}:${sc.key}:${i}`
      lineIds.push(
        add({
          id, kind: 'line', track, sceneKey: sc.key, sceneTitle: sc.title, section: `Family · ${sc.title} (${AGES[track]})`,
          speaker: l.who, speakerName: roster[l.who].en, bn: l.bn, roman: l.roman, en: l.en, art: l.art,
          tokens: l.bn.split(' '), prevId: i > 0 ? `line:${track}:${sc.key}:${i - 1}` : null,
        }),
      )
    })
    return { key: sc.key, title: sc.title, emoji: sc.emoji, tip: sc.tip, lineIds }
  })
  family[track] = { phraseIds, polite, scenes: sceneList }
}

// ---- 13–18 tracks: conjuncts, vocabulary, sentences, tenses, poems, passages, scenes, stories --------------------
export const conjunctIds = conjuncts.map((c) =>
  add({ id: `letter:${c.letter}`, kind: 'letter', section: 'Joined letters', bn: c.letter, roman: c.roman, art: c.example.emoji, example: c.example }),
)

teenWordCategories.forEach((c) => {
  categoryMeta[c.key] = { title: c.title, emoji: c.emoji, visual: false, note: c.note }
  wordIdsByCat[c.key] = c.words.map((w) =>
    add({ id: `word:${c.key}:${w.bn}`, kind: 'word', section: c.title, cat: c.key, visual: false, bn: w.bn, roman: w.roman, en: w.en, art: w.emoji }),
  )
})

teenSentenceGroups.forEach((g) => {
  sentenceMeta[g.key] = { title: g.title, emoji: g.emoji }
  sentenceIdsByGroup[g.key] = g.sentences.map((x) =>
    add({ id: `sent:${x.bn}`, kind: 'sentence', section: g.title, group: g.key, bn: x.bn, roman: x.roman, en: x.en, tokens: x.bn.split(' ') }),
  )
})

// 18+: vocabulary for adult life
adultWordCategories.forEach((c) => {
  if (wordIdsByCat[c.key]) throw new Error(`word category "${c.key}" already exists`)
  categoryMeta[c.key] = { title: c.title, emoji: c.emoji, visual: false, note: c.note }
  wordIdsByCat[c.key] = c.words.map((w) =>
    add({ id: `word:${c.key}:${w.bn}`, kind: 'word', section: c.title, cat: c.key, visual: false, bn: w.bn, roman: w.roman, en: w.en, art: w.emoji }),
  )
})
adultSentenceGroups.forEach((g) => {
  if (sentenceIdsByGroup[g.key]) throw new Error(`sentence group "${g.key}" already exists`)
  sentenceMeta[g.key] = { title: g.title, emoji: g.emoji }
  sentenceIdsByGroup[g.key] = g.sentences.map((x) =>
    add({ id: `sent:${x.bn}`, kind: 'sentence', section: g.title, group: g.key, bn: x.bn, roman: x.roman, en: x.en, tokens: x.bn.split(' ') }),
  )
})

// Perfect / future patterns: tense -> verb -> [pronoun] form ids
export const formIdsByTense = { perfect: {}, future: {} }
tenseVerbs.forEach((v) => {
  ;['perfect', 'future'].forEach((tense) => {
    const t = v[tense]
    formIdsByTense[tense][v.key] = tensePronouns.map((p, i) =>
      add({
        id: `form:${tense}:${v.key}:${p.roman}`, kind: 'form', section: `Verb: ${v.inf} (${tense})`, verb: `${tense}:${v.key}`,
        pronoun: p.bn, form: t.forms[i], bn: `${p.bn} ${t.forms[i]}`, roman: `${p.roman} ${t.romans[i]}`,
        en: `${p.en} ${t.enForm}`, tokens: [p.bn, t.forms[i]], allForms: t.forms,
      }),
    )
  })
})

// Poems, passages and cinema conversations as lines (kind 'line'), per track.
const TEEN_AGES = { teen: '13–15', senior: '16–18' }
export const teenText = {}
for (const track of ['teen', 'senior']) {
  const mk = (sceneKey, sceneTitle, label, lines, speakerOf) =>
    lines.map((l, i) =>
      add({
        id: `line:${track}:${sceneKey}:${i}`, kind: 'line', track, sceneKey, sceneTitle, section: `${label} · ${sceneTitle} (${TEEN_AGES[track]})`,
        speaker: speakerOf(l), speakerName: speakerOf(l) === 'text' ? '' : roster[speakerOf(l)]?.en,
        bn: l.bn, roman: l.roman, en: l.en, tokens: l.bn.split(' '), prevId: i > 0 ? `line:${track}:${sceneKey}:${i - 1}` : null,
      }),
    )
  teenText[track] = {
    poems: poems.map((p) => ({ key: p.key, title: p.title, emoji: p.emoji, author: p.author, note: p.note, lineIds: mk(`poem-${p.key}`, p.title, 'Poem', p[track], () => 'text') })),
    passages: passages.map((p) => ({
      key: p.key, title: p.title, emoji: p.emoji, questions: p[track].questions,
      lineIds: mk(`read-${p.key}`, p.title, 'Reading', p[track].lines, () => 'text'),
    })),
    scenes: Object.entries(cinemaScenes).map(([key, sc]) => ({ key, title: sc.title, emoji: sc.emoji, lineIds: mk(`scene-${key}`, sc.title, 'Conversation', sc.lines, (l) => l.who) })),
  }
}

// 18+: the 16–18 poems, scenes and readings are shared (so each line is reviewed once); the history, politics,
// economy, faith, culture and diaspora readings are new.
teenText.adult = {
  poems: teenText.senior.poems,
  scenes: teenText.senior.scenes,
  passages: [
    ...teenText.senior.passages,
    ...adultPassages.map((p) => ({
      key: p.key, title: p.title, emoji: p.emoji, lead: p.lead, questions: p.questions,
      lineIds: p.lines.map((l, i) =>
        add({
          id: `line:adult:read-${p.key}:${i}`, kind: 'line', track: 'adult', sceneKey: `read-${p.key}`, sceneTitle: p.title, section: `Reading · ${p.title} (18+)`,
          speaker: 'text', speakerName: '', bn: l.bn, roman: l.roman, en: l.en, tokens: l.bn.split(' '), prevId: i > 0 ? `line:adult:read-${p.key}:${i - 1}` : null,
        }),
      ),
    })),
  ],
}
adultPassages.forEach((p) => add({ id: `fact:adult:lead:${p.key}`, kind: 'fact', section: 'Readings (18+) · English introductions', bn: '', roman: p.title, en: p.lead, art: p.emoji }))

// Story beats: every NPC line and every reply option, so they are reviewed and recorded like everything else.
// A line with a girl's version (`f`) gives a second beat, `…:f`.
export const storyBeatIds = {}
stories.forEach((st) => {
  storyBeatIds[st.id] = []
  const beat = (id, x, speaker, speakerName) => {
    storyBeatIds[st.id].push(add({ id, kind: 'beat', section: `Story · ${st.title}`, speaker, speakerName, bn: x.bn, roman: x.roman, en: x.en, tokens: x.bn.split(' ') }))
    if (x.f) {
      const en = `${x.en} (${speaker === 'you' ? 'a girl speaking' : 'to a girl'})`
      storyBeatIds[st.id].push(add({ id: `${id}:f`, kind: 'beat', section: `Story · ${st.title}`, speaker, speakerName, bn: x.f.bn, roman: x.f.roman, en, tokens: x.f.bn.split(' ') }))
    }
  }
  Object.entries(st.nodes).forEach(([nid, n]) => {
    if (n.bn) beat(`beat:${st.id}:${nid}`, n, n.who, st.cast[n.who]?.en)
    ;(n.choice ?? []).forEach((opt, i) => beat(`beat:${st.id}:${nid}:${i}`, opt, 'you', 'You (reply)'))
  })
})

// ---- Explore the Arab world: each region's words (cities + local vocabulary) and its reading lines ------------------------------
export const exploreCats = {}
exploreRegions.forEach((r) => {
  const cat = `x-${r.id}`
  const section = `Explore · ${r.name}`
  categoryMeta[cat] = { title: `${r.name}: places & words`, emoji: r.emoji, visual: false, note: `Words from ${r.name} — its cities first, then the things it is known for.` }
  const words = [
    ...r.cities.map((c) => ({ bn: c.bn, roman: c.roman, en: `${c.name} (a city)`, emoji: c.emoji })),
    ...r.cities.flatMap((c) => c.words),
  ]
  wordIdsByCat[cat] = words.map((w) => add({ id: `word:${cat}:${w.bn}`, kind: 'word', section, cat, visual: false, bn: w.bn, roman: w.roman, en: w.en, art: w.emoji }))
  sentenceMeta[cat] = { title: `${r.name}: reading`, emoji: r.emoji }
  const lines = [r.intro, ...r.famous, r.then.line, r.now.line, ...r.made, ...r.cities.map((c) => c.line)]
  sentenceIdsByGroup[cat] = lines.map((x) => add({ id: `sent:${x.bn}`, kind: 'sentence', section, group: cat, bn: x.bn, roman: x.roman, en: x.en, tokens: x.bn.split(' ') }))
  exploreCats[r.id] = cat
  // the English facts, so they can be checked on /review too
  const fsec = `Explore facts · ${r.name}`
  const fact = (key, label, en) => add({ id: `fact:${r.id}:${key}`, kind: 'fact', section: fsec, bn: '', roman: label, en, art: r.emoji })
  fact('hook', 'Introduction', r.hook)
  fact('then', 'Then', r.then.en)
  fact('now', 'Now', r.now.en)
  r.timeline.forEach(([y, t], i) => fact(`t${i}`, `Timeline ${y}`, t))
  fact('economy', 'Economy', r.economy)
  r.cities.forEach((c) => fact(`city-${c.id}`, c.name, c.fact))
  ;(r.deep ?? []).forEach((t, i) => fact(`deep${i}`, 'Go deeper (18+)', t))
})

// ---- Super challenges: longer sentences per unit (never shown with transliteration) ---------------------------------
export const superIdsByUnit = {}
Object.entries(SUPER).forEach(([unit, set]) => {
  superIdsByUnit[unit] = set.items.map(([bn, en]) =>
    add({ id: `super:${bn}`, kind: 'sentence', section: `Super challenge · ${set.label}`, group: `super:${unit}`, bn, roman: '', en, tokens: bn.split(' ') }),
  )
})

// ---- Playbook: picture-book lines, storyboard captions and Look & Learn words ----------------------------------------
export const playbookIds = playbookLines().map((x) =>
  add({ id: `pb:${x.bn}`, kind: 'sentence', section: x.group, group: 'playbook', bn: x.bn, roman: x.roman, en: x.en, tokens: x.bn.split(' ') }),
)
export const playbookWordIds = playbookWords().map((w) =>
  add({ id: `pbw:${w.bn}`, kind: 'word', section: 'Playbook · Look & Learn words', cat: 'playbook', bn: w.bn, roman: w.roman, en: w.en, art: w.e }),
)

// ---- How Arabic Works: the words sorted in "Sun or Moon?" (shown only as questions, so they get audio and review here) ---
export const sunMoonTestIds = sunMoonPicks.map((c) =>
  add({ id: `gt:${c.stem.bn}`, kind: 'word', section: 'How Arabic Works · Sun or Moon? test words', cat: 'sunmoon-test', bn: c.stem.bn, roman: c.roman, en: c.en }),
)

export const allItems = () => Array.from(bank.values())
