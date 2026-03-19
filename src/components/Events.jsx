import { EVENTI } from '../data/siteData'

export default function Events() {
  return (
    <section className="eventi" id="eventi">
      <div className="container">
        <div className="eventi-intro">
          <div className="reveal">
            <p className="sec-label">I nostri servizi</p>
            <h2 className="sec-title">
              Ogni occasione
              <br />
              merita la <em>magia</em>
            </h2>
          </div>
          <div className="reveal rd1">
            <p className="sec-text">
              Curiamo allestimenti e decorazioni per qualsiasi tipo di evento.
              Dalla scelta dei fiori alle scenografie complete, siamo al tuo fianco
              in ogni momento speciale.
            </p>
            <br />
            <a
              href="#contatti"
              className="btn btn-gold"
              style={{ marginTop: '0.5rem' }}
            >
              Organizza una consulenza
            </a>
          </div>
        </div>

        <div className="eventi-grid">
          {EVENTI.map((ev, i) => (
            <div
              key={ev.num}
              className={`ev-card reveal${i % 3 === 1 ? ' rd1' : i % 3 === 2 ? ' rd2' : ''}`}
            >
              <div className="ev-num">{ev.num}</div>
              <div className="ev-icon">{ev.icon}</div>
              <h3>{ev.title}</h3>
              <p>{ev.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
