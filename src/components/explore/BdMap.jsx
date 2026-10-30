import { MAP, project } from '../../data/bdMap'
import { exploreRegions } from '../../data/explore'

// Where a region's name reads best (the Levant is small, so its name sits out in the Mediterranean beside it)
const LABEL = { levant: { cx: 268, cy: 40 }, iraq: { cx: 372, cy: 40 }, gulf: { cx: 372, cy: 100 }, nile: { cx: 252, cy: 128 }, maghreb: { cx: 130, cy: 80 }, southarabia: { cx: 390, cy: 160 } }
const SHORT = { southarabia: 'Yemen & Oman', nile: 'Egypt & Sudan' }
const SMALL = new Set(['levant', 'iraq', 'southarabia'])

/** The regions as a tappable map. Locked ones are grey; stamped ones carry a tick. MAP.other is drawn plain grey. */
export default function BdMap({ selected, onSelect, unlocked, stamped, cities = [], activeCity, onCity, labels = true, tint = {} }) {
  return (
    <svg viewBox={`0 0 ${MAP.width} ${MAP.height}`} className="mx-auto w-full max-w-xl drop-shadow-sm" role="group" aria-label="Map of the Arab world">
      {Object.entries(MAP.other ?? {}).map(([id, o]) => <path key={id} d={o.d} fill="#E4E4DE" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />)}
      {exploreRegions.map((r) => {
        const geo = { ...MAP.divisions[r.id], ...(LABEL[r.id] ?? {}) }
        const open = unlocked(r)
        const sel = selected === r.id
        return (
          <g key={r.id} onClick={() => onSelect(r)} className="cursor-pointer" role="button" tabIndex={0} aria-label={`${r.name}${open ? '' : ' (locked)'}`} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(r)}>
            <path d={geo.d} fill={tint[r.id] ?? (open ? r.color : '#CFCFC8')} fillOpacity={sel || tint[r.id] ? 1 : 0.72} stroke="#fff" strokeWidth={sel ? 3 : 1.6} strokeLinejoin="round" className="transition-all hover:fill-opacity-100" />
          </g>
        )
      })}
      {labels && exploreRegions.map((r) => {
        const geo = { ...MAP.divisions[r.id], ...(LABEL[r.id] ?? {}) }
        const open = unlocked(r)
        return (
          <g key={`label-${r.id}`} style={{ pointerEvents: 'none' }}>
            <text x={geo.cx} y={geo.cy} textAnchor="middle" fontSize={SMALL.has(r.id) ? 11 : 13} fontWeight="800" fill="#2D2D2D" stroke="#fff" strokeWidth="3" paintOrder="stroke">
              {SHORT[r.id] ?? r.name}
            </text>
            <text x={geo.cx} y={geo.cy + 15} textAnchor="middle" fontSize="12">
              {open ? (stamped(r) ? '✅' : '') : '🔒'}
            </text>
          </g>
        )
      })}
      {cities.map((c) => {
        const [x, y] = project(c.lon, c.lat)
        const on = activeCity === c.id
        return (
          <g key={c.id} onClick={() => onCity?.(c)} className="cursor-pointer">
            <circle cx={x} cy={y} r={on ? 9 : 6} fill={on ? '#F4A324' : '#fff'} stroke="#24539A" strokeWidth="2.5" />
            <text x={x} y={y - 12} textAnchor="middle" fontSize="11" fontWeight="800" fill="#2D2D2D" stroke="#fff" strokeWidth="3" paintOrder="stroke" style={{ pointerEvents: 'none' }}>
              {c.name}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
