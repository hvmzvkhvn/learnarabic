// Exports every Arabic item in the app for a teacher to check, grouped by section:
//   review/arabic-review.csv   one row per item (opens in Excel / Google Sheets; UTF-8 with BOM)
//   review/arabic-review.html  a printable sheet: Arabic large and right to left, with a box for corrections
// Corrections can go straight into the sheet, or be marked on /review in the app (which exports them as JSON).
//
//   npm run review:export
import { createServer } from 'vite'
import { fileURLToPath } from 'node:url'
import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const server = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { allItems } = await server.ssrLoadModule('/src/curriculum/bank.js')
await server.close()

const KIND = { letter: 'Letter', sign: 'Vowel mark', syllable: 'Syllable', word: 'Word', sentence: 'Sentence', form: 'Verb form', line: 'Family line', beat: 'Story line', fact: 'English fact' }
const items = allItems().filter((i) => i.bn)
const sections = []
for (const i of items) {
  let s = sections.find((x) => x.name === i.section)
  if (!s) sections.push((s = { name: i.section, items: [] }))
  s.items.push(i)
}

// CSV
const q = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`
const rows = [['Section', 'Kind', 'Arabic', 'Transliteration', 'English', 'OK?', 'Correction / note', 'id']]
for (const s of sections) for (const i of s.items) rows.push([s.name, KIND[i.kind] ?? i.kind, i.bn, i.roman, i.en ?? '', '', '', i.id])
const outDir = path.join(root, 'review')
mkdirSync(outDir, { recursive: true })
writeFileSync(path.join(outDir, 'arabic-review.csv'), '﻿' + rows.map((r) => r.map(q).join(',')).join('\r\n') + '\r\n')

// HTML
const esc = (t) => String(t ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])
const toc = sections.map((s, n) => `<li><a href="#s${n}">${esc(s.name)}</a> <span class="n">${s.items.length}</span></li>`).join('')
const body = sections
  .map(
    (s, n) => `<section id="s${n}"><h2>${esc(s.name)} <span class="n">${s.items.length} items</span></h2><table>
<thead><tr><th class="ok">✓</th><th>Arabic</th><th>Transliteration · English</th><th class="fix">Correction / note</th></tr></thead><tbody>
${s.items.map((i) => `<tr><td class="ok">☐</td><td class="ar" dir="rtl" lang="ar">${esc(i.bn)}</td><td><div class="ro">${esc(i.roman)}</div><div class="en">${esc(i.en)}</div><div class="id">${esc(i.id)}</div></td><td class="fix"></td></tr>`).join('\n')}
</tbody></table></section>`,
  )
  .join('\n')
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Learn Arabic: content review</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@500;700&family=Nunito:wght@400;700;800&display=swap">
<style>
body{font-family:Nunito,system-ui,sans-serif;color:#2d2d2d;background:#fffdf7;margin:0 auto;max-width:960px;padding:24px 16px}
h1{color:#24539a;margin:0 0 4px}h2{color:#24539a;font-size:18px;margin:32px 0 8px;border-bottom:2px solid #e8e1cf;padding-bottom:4px}
.lead{color:#555;max-width:70ch}.n{color:#999;font-size:13px;font-weight:700}
ol.toc{columns:2;font-size:14px}ol.toc a{color:#24539a;text-decoration:none}
table{width:100%;border-collapse:collapse;font-size:14px}th{text-align:left;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:.03em}
td,th{border-bottom:1px solid #eee;padding:6px 8px;vertical-align:top}
.ar{font-family:'Noto Naskh Arabic',serif;font-size:24px;line-height:1.9;color:#24539a;text-align:right;width:38%}
.ro{font-weight:700}.en{color:#555}.id{color:#bbb;font-size:11px;font-family:ui-monospace,monospace}
.ok{width:24px;text-align:center;font-size:18px;color:#999}.fix{width:28%;border-left:1px dashed #ddd}
@media print{body{max-width:none;padding:0}ol.toc{display:none}section{break-inside:auto}tr{break-inside:avoid}h2{break-after:avoid}}
</style></head><body>
<h1>Learn Arabic: content review</h1>
<p class="lead">Every Arabic line in the app (${items.length} items in ${sections.length} sections), Modern Standard Arabic, fully vowelled. Please check the vowel marks, the spelling, the transliteration and the English. Tick the box when an item is right, or write the correction beside it. Single words are written without case endings (كِتَاب); sentences carry them (هٰذَا كِتَابٌ). Lines said to a girl or by a girl are marked in the English.</p>
<ol class="toc">${toc}</ol>
${body}
</body></html>
`
writeFileSync(path.join(outDir, 'arabic-review.html'), html)
console.log(`Wrote review/arabic-review.csv and review/arabic-review.html: ${items.length} items in ${sections.length} sections.`)
