import { MAP, project } from '../../data/bdMap'
import { exploreRegions } from '../../data/explore'

// Where a region's name reads best (Islamabad is tiny, so its name sits beside it)
const LABEL = { islamabad: { cx: 392, cy: 122 }, kp: { cx: 262, cy: 92 }, gb: { cx: 372, cy: 52 }, punjab: { cx: 300, cy: 215 } }
const SHORT = { kp: 'Khyber Pakhtunkhwa', gb: 'Gilgit-Baltistan' }

/** Pakistan's regions as a tappable map. Locked ones are grey; stamped ones carry a tick. Azad Kashmir (MAP.other) is plain grey. */
export default function BdMap({ selected, onSelect, unlocked, stamped, cities = [], activeCity, onCity, labels = true, tint = {} }) {
  return (
    <svg viewBox={`0 0 ${MAP.width} ${MAP.height}`} className="mx-auto w-full max-w-sm drop-shadow-sm" role="group" aria-label="Map of Pakistan">
      {Object.entries(MAP.other ?? {}).map(([id, o]) => <path key={id} d={o.d} fill="#E4E4DE" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />)}
      {exploreRegions.map((r) => {
        const geo = { ...MAP.divisions[r.id], ...(LABEL[r.id] ?? {}) }
        const open = unlocked(r)
        const sel = selected === r.id
        return (
          <g key={r.id} onClick={() => onSelect(r)} className="cursor-pointer" role="button" tabIndex={0} aria-label={`${r.name}${open ? '' : ' (locked)'}`} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(r)}>
            <path d={geo.d} fill={tint[r.id] ?? (open ? r.color : '#CFCFC8')} fillOpacity={sel || tint[r.id] ? 1 : 0.72} stroke="#fff" strokeWidth={sel ? 3 : 1.6} strokeLinejoin="round" className="transition-all hover:fill-opacity-100" />
            {labels && (
              <>
            <text x={geo.cx} y={geo.cy} textAnchor="middle" fontSize={r.id === 'islamabad' || r.id === 'gb' || r.id === 'kp' ? 12 : 15} fontWeight="800" fill="#fff" stroke="rgba(0,0,0,.35)" strokeWidth="0.6" paintOrder="stroke" style={{ pointerEvents: 'none' }}>
              {SHORT[r.id] ?? r.name}
            </text>
            <text x={geo.cx} y={geo.cy + 17} textAnchor="middle" fontSize="13" style={{ pointerEvents: 'none' }}>
              {open ? (stamped(r) ? '✅' : '') : '🔒'}
            </text>
              </>
            )}
          </g>
        )
      })}
      {cities.map((c) => {
        const [x, y] = project(c.lon, c.lat)
        const on = activeCity === c.id
        return (
          <g key={c.id} onClick={() => onCity?.(c)} className="cursor-pointer">
            <circle cx={x} cy={y} r={on ? 9 : 6} fill={on ? '#F4A324' : '#fff'} stroke="#0F6E4F" strokeWidth="2.5" />
            <text x={x} y={y - 12} textAnchor="middle" fontSize="11" fontWeight="800" fill="#2D2D2D" stroke="#fff" strokeWidth="3" paintOrder="stroke" style={{ pointerEvents: 'none' }}>
              {c.name}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
