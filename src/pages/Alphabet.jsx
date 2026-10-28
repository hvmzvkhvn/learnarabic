import { useState } from 'react'
import { letterGroups, vowelSigns, aspirates } from '../data/alphabet'
import Speaker from '../components/Speaker'
import { useRoman } from '../state/roman'

const TABS = [
  { key: 'letters', label: 'Letters' },
  { key: 'signs', label: 'Vowel marks' },
  { key: 'aspirates', label: 'أ إ لا…' },
]

function LetterCard({ item }) {
  const { letter, roman, example } = item
  const [romanOn] = useRoman()
  return (
    <div className="card flex flex-col items-center !p-4 text-center">
      <span className="font-arabic text-6xl font-bold leading-tight text-primary">{letter}</span>
      <div className="mt-1 flex items-center gap-2">
        {romanOn && <span className="rounded-full bg-accent px-3 py-0.5 text-sm font-extrabold">{roman}</span>}
        <Speaker text={letter} size="sm" label="Hear the letter" />
      </div>
      <div className="mt-3 w-full border-t border-primary/10 pt-3">
        <span className="text-3xl">{example.emoji}</span>
        <p className="font-arabic text-xl font-bold text-ink">{example.bn}</p>
        {romanOn && <p className="text-sm font-bold text-primary">{example.roman}</p>}
        <p className="mb-1 text-xs text-ink/50">{example.en}</p>
        <Speaker text={example.bn} size="sm" label="Hear the word" />
      </div>
    </div>
  )
}

const GRID = 'grid grid-cols-2 gap-3 sm:grid-cols-3'

export default function Alphabet() {
  const [romanOn] = useRoman()
  const [tab, setTab] = useState('letters')

  return (
    <div className="py-2">
      <h1 className="text-3xl font-extrabold text-primary">The Arabic Alphabet</h1>
      <p className="mb-4 text-ink/60"><span className="font-arabic">الْحُرُوفُ الْعَرَبِيَّةُ</span> — tap a tab to explore.</p>

      <div className="mb-6 flex gap-2 rounded-full bg-primary/10 p-1">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`flex-1 rounded-full px-3 py-2 text-sm font-extrabold transition ${
              tab === t.key ? 'bg-primary text-white shadow' : 'text-primary'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'letters' && (
        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-extrabold text-ink">
              Letters <span className="font-arabic text-primary">الْحُرُوف</span>
            </h2>
            <p className="text-sm text-ink/60">
              Arabic is written from right to left. Its 28 letters (plus hamza ء and taa marbuuṭa ة) are grouped here in
              families that share one shape and differ only by their dots. Tap 🔊 to hear each letter's name.
            </p>
          </div>
          {letterGroups.map((group) => (
            <div key={group.name}>
              <h3 className="text-lg font-extrabold text-primary">{group.name}</h3>
              <p className="mb-3 text-sm text-ink/60">{group.hint}</p>
              <div className={GRID}>
                {group.letters.map((c) => (
                  <LetterCard key={c.letter} item={c} />
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {tab === 'aspirates' && (
        <section>
          <h2 className="text-xl font-extrabold text-ink">
            Hamza &amp; special shapes <span className="font-arabic text-primary">الْهَمْزَة</span>
          </h2>
          <p className="mb-4 text-sm text-ink/60">Hamza (ء) often sits on a seat — alif, waaw or a dotless yaa. ى is an alif at the end of a word, and ل + ا join as لا.</p>
          <div className={GRID}>
            {aspirates.map((v) => (
              <LetterCard key={v.letter} item={v} />
            ))}
          </div>
        </section>
      )}

      {tab === 'signs' && (
        <section>
          <h2 className="text-xl font-extrabold text-ink">
            Vowel marks <span className="font-arabic text-primary">الْحَرَكَات</span>
          </h2>
          <p className="mb-4 text-sm text-ink/60">
            Short vowels are small marks above or below a letter (fatḥa, kasra, ḍamma). Long vowels are written with
            the letters ا، ي، و. Sukuun means no vowel, shadda doubles a letter, and tanwiin adds an -n. Here they all are on{' '}
            <span className="font-arabic font-bold">ب</span> (baa).
          </p>
          <div className={GRID}>
            {vowelSigns.map((s) => (
              <div key={s.sign} className="card flex flex-col items-center !p-4 text-center">
                <span className="font-arabic text-5xl font-bold text-primary">{s.combined}</span>
                <span className="mt-1 flex items-center gap-2">
                  {romanOn && <span className="rounded-full bg-accent px-3 py-0.5 text-sm font-extrabold">{s.combinedRoman}</span>}
                  <Speaker text={s.combined} size="sm" label="Hear it" />
                </span>
                <p className="mt-3 text-xs text-ink/50">
                  {s.name} <span className="font-arabic text-lg font-bold text-ink">◌{s.sign}</span> {s.says ? <> {s.says}</> : romanOn && <> = "{s.roman}"</>}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
