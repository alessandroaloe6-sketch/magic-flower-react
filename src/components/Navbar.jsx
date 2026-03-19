import { useState, useEffect } from 'react'
import logoSrc from '../assets/logo.svg'
import { NAV_LINKS, CONTACT } from '../data/siteData'

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">
          <img src={logoSrc} alt="Magic Flower & Events" />
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="nav-cta">
          Scrivici su WhatsApp
        </a>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Apri menu"
        >
          <span /><span /><span />
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={closeMenu}>✕</button>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          style={{ color: 'var(--gold)' }}
        >
          📱 WhatsApp
        </a>
      </div>
    </>
  )
}
