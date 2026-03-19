import { WEDDING_FEATURES, WEDDING_BOXES, CONTACT } from '../data/siteData'

export default function Wedding() {
  return (
    <section className="wedding" id="matrimoni">
      <div className="container">
        <div className="wedding-inner">
          {/* Left column */}
          <div className="reveal">
            <p className="sec-label">Il nostro fiore all'occhiello</p>
            <h2 className="sec-title">
              Matrimoni
              <br />
              <em>da sogno</em>
            </h2>
            <p className="sec-text">
              Siamo specializzati nella pianificazione e nell'allestimento di
              matrimoni. Dal primo sopralluogo al giorno delle nozze, seguiamo ogni
              dettaglio per garantire un evento perfetto.
            </p>

            <div className="w-features">
              {WEDDING_FEATURES.map((feat) => (
                <div className="w-feat" key={feat}>
                  <div className="w-dot" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              <a href="#contatti" className="btn btn-gold">Consulenza gratuita</a>
              <a href={CONTACT.phoneHref} className="btn btn-outline-white">📞 Chiamaci</a>
            </div>
          </div>

          {/* Right column: boxes */}
          <div className="w-boxes reveal rd2">
            {WEDDING_BOXES.map((box) => (
              <div className="w-box" key={box.title}>
                <div className="wb-ico">{box.icon}</div>
                <h4>{box.title}</h4>
                <p>{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
