import { CONTACT, ORARI } from '../data/siteData'
import InstagramIcon from './icons/InstagramIcon'
import FacebookIcon  from './icons/FacebookIcon'
import WhatsAppIcon  from './icons/WhatsAppIcon'

export default function Contacts() {
  return (
    <section className="contacts" id="contatti">
      <div className="container">
        <div className="reveal">
          <p className="sec-label">Contattaci</p>
          <h2 className="sec-title">
            Iniziamo a
            <br />
            <em>sognare insieme</em>
          </h2>
          <p className="sec-text">
            Vieni a trovarci in negozio oppure scrivici o chiamaci per un
            preventivo gratuito e senza impegno. Siamo felici di ascoltare la tua
            storia.
          </p>
        </div>

        <div className="contacts-grid">
          {/* Left column */}
          <div>
            <div className="c-item reveal">
              <div className="c-lbl">📍 Indirizzo</div>
              <div className="c-val">
                {CONTACT.address}
                <br />
                {CONTACT.city}
              </div>
            </div>

            <div className="c-item reveal rd1">
              <div className="c-lbl">📞 Telefono</div>
              <div className="c-val">
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </div>
            </div>

            <div className="c-item reveal rd2">
              <div className="c-lbl">✉️ Email</div>
              <div className="c-val">
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </div>

            <div className="c-item reveal rd3">
              <div className="c-lbl">📱 Seguici sui social</div>
              <div className="social-links">
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soc-btn"
                  title="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soc-btn"
                  title="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soc-btn"
                  title="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="c-item reveal">
              <div className="c-lbl">🕐 Orari di apertura</div>
              <div className="orari">
                {ORARI.map((o) => (
                  <>
                    <span key={`${o.giorno}-d`} className="or-d">{o.giorno}</span>
                    <span key={`${o.giorno}-t`} className="or-t">{o.orario}</span>
                  </>
                ))}
              </div>
            </div>

            <br />

            <div className="c-item reveal rd1">
              <div className="c-lbl">💬 Appuntamenti</div>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--muted)',
                  lineHeight: 1.75,
                  marginTop: '0.5rem',
                }}
              >
                Per eventi e matrimoni consigliamo di fissare un appuntamento.
                Disponibili anche il sabato pomeriggio su prenotazione.
              </p>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ marginTop: '1.2rem' }}
              >
                💬 Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
