export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-inner">
          {/* Visual */}
          <div className="about-vis reveal">
            <div className="av-b avb1" />
            <div className="av-b avb2" />
            <div className="av-badge">
              <strong>♡</strong>
              <span>Con Amore</span>
            </div>
            <div className="av-quote">
              <p>
                "Il più grande lusso è trasformare un sogno in un ricordo che dura
                tutta la vita."
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="reveal rd1">
            <p className="sec-label">Chi siamo</p>
            <h2 className="sec-title">
              La passione
              <br />
              che <em>fa la differenza</em>
            </h2>
            <p className="sec-text">
              Magic Flower &amp; Events nasce dall'amore per i fiori e dalla
              vocazione per gli eventi. Siamo ad Ozzano dell'Emilia, nel cuore
              dell'Emilia-Romagna, e accompagniamo famiglie e coppie nei loro
              momenti più preziosi.
            </p>
            <br />
            <p className="sec-text">
              Ogni evento è per noi una storia da raccontare attraverso i fiori, i
              colori e le emozioni. Seguiamo ogni cliente con dedizione, creatività
              e la stessa passione del primo giorno. Fiori freschi, bomboniere
              artigianali e articoli da regalo selezionati con cura: tutto in un
              unico posto.
            </p>
            <br />
            <a
              href="#contatti"
              className="btn btn-gold"
              style={{ marginTop: '0.5rem' }}
            >
              Parliamo del tuo evento
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
