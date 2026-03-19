import logoSrc from '../assets/logo.svg'
import { CONTACT, FOOTER_SERVICES } from '../data/siteData'
import InstagramIcon from './icons/InstagramIcon'
import FacebookIcon  from './icons/FacebookIcon'
import WhatsAppIcon  from './icons/WhatsAppIcon'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <img src={logoSrc} alt="Magic Flower & Events" />
          <p>
            Fiori, bomboniere, allestimenti e decorazioni per ogni evento speciale.
            Con passione e cura artigianale dal cuore dell'Emilia-Romagna.
          </p>
          <div className="social-links" style={{ marginTop: '1.2rem' }}>
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

        {/* Servizi */}
        <div className="footer-col">
          <h4>Servizi</h4>
          <ul>
            {FOOTER_SERVICES.map((s) => (
              <li key={s}>
                <a href="#eventi">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contatti */}
        <div className="footer-col">
          <h4>Contatti</h4>
          <ul>
            <li><a href="#">{CONTACT.address}, Ozzano (BO)</a></li>
            <li><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><a href="#">Lun–Ven: 9:00–19:00</a></li>
            <li><a href="#">Sab: 9:00–18:00</a></li>
            <li>
              <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer">
                📍 Come raggiungerci
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Magic Flower &amp; Events · {CONTACT.address}, Ozzano dell'Emilia (BO)</span>
        <span>P.IVA 04325661207 · Tutti i diritti riservati</span>
      </div>
    </footer>
  )
}
