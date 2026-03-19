import { STATS } from '../data/siteData'

export default function Stats() {
  return (
    <div className="stats">
      <div className="stats-inner">
        {STATS.map((s, i) => (
          <div key={s.label} className={`reveal${i > 0 ? ` rd${i}` : ''}`}>
            <div className="stat-n">{s.num}</div>
            <div className="stat-l">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
