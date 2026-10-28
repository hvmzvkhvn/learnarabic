import { useState } from 'react'

const ROWS = {
  Letters: ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي', 'ة', 'ء'],
  More: ['أ', 'إ', 'آ', 'ى', 'ؤ', 'ئ', 'لا', '.', '؟', '،'],
  Marks: ['َ', 'ِ', 'ُ', 'ْ', 'ّ', 'ً', 'ٍ', 'ٌ'],
}
const SHOW = { Marks: (c) => `◌${c}` }

/** On-screen Arabic keyboard, laid out in alphabet order. Marks (fatḥa, kasra, ḍamma…) attach to the letter before them. */
export default function ArabicKeyboard({ onKey, onBackspace, onSpace }) {
  const [tab, setTab] = useState('Letters')
  return (
    <div className="rounded-3xl bg-white p-3 shadow-sm">
      <div className="mb-3 flex gap-1 rounded-full bg-primary/10 p-1">
        {Object.keys(ROWS).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`flex-1 rounded-full px-2 py-1.5 text-xs font-extrabold ${tab === t ? 'bg-primary text-white' : 'text-primary'}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div dir="rtl" className="grid grid-cols-6 gap-1.5 sm:grid-cols-8">
        {ROWS[tab].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => onKey(c)}
            className="h-11 rounded-xl bg-background font-arabic text-xl font-bold text-primary shadow-sm transition active:scale-90 hover:bg-accent/40"
          >
            {(SHOW[tab] ?? ((x) => x))(c)}
          </button>
        ))}
        <button type="button" onClick={onBackspace} aria-label="Backspace" className="h-11 rounded-xl bg-error/10 text-lg font-extrabold text-error active:scale-90">
          ⌫
        </button>
        <button type="button" onClick={onSpace} aria-label="Space" className="col-span-2 h-11 rounded-xl bg-background text-sm font-extrabold text-ink/50 active:scale-90">
          space
        </button>
      </div>
    </div>
  )
}
