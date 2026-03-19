import { CONTACT } from '../data/siteData'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      title="Scrivici su WhatsApp"
    >
      <div className="wa-tooltip">Scrivici su WhatsApp</div>
      <WhatsAppIcon />
    </a>
  )
}
