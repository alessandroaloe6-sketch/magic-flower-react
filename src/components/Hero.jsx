import logoSrc from '../assets/logo.svg'
import { HERO_BADGES } from '../data/siteData'

export default function Hero() {
  return (
    <section className="hero">
      {/* Decorative lines */}
      <div className="h-line hl1" />
      <div className="h-line hl2" />
      <div className="h-line hl3" />
      <div className="h-line hl4" />
      {/* Decorative rings */}
      <div className="h-ring hr1" />
      <div className="h-ring hr2" />
      <div className="h-ring hr3" />

      <div className="hero-inner">
        {/* Left: text */}
        <div className="hero-text">
          <p className="hero-eyebrow">Wedding Planner · Allestimenti · Decorazioni</p>
          <img
            src={logoSrc}
            alt="Magic Flower & Events"
            className="hero-logo-img"
          />
          <p className="hero-sub">
            Fiori · Bomboniere · Articoli da Regalo
            <br />
            <span style={{ fontSize: '0.95rem', fontStyle: 'normal', color: 'var(--muted)' }}>
              Trasformiamo i tuoi momenti speciali in ricordi indimenticabili.
            </span>
          </p>
          <div className="hero-btns">
            <a href="#eventi"   className="btn btn-gold">Scopri i servizi</a>
            <a href="#contatti" className="btn btn-outline">Organizza consulenza</a>
          </div>
        </div>

        {/* Right: badges */}
        <div className="hero-badges">
          {HERO_BADGES.map((b) => (
            <div className="badge" key={b.title}>
              <div className="badge-icon">{b.icon}</div>
              <div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
