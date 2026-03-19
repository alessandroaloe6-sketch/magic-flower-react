import { useEffect } from 'react'
import './styles/global.css'
import { useScrollReveal } from './hooks/useScrollReveal'

import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import Divider        from './components/Divider'
import Process        from './components/Process'
import Events         from './components/Events'
import Wedding        from './components/Wedding'
import Gallery        from './components/Gallery'
import About          from './components/About'
import Stats          from './components/Stats'
import Contacts       from './components/Contacts'
import MapSection     from './components/MapSection'
import Footer         from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  // Attiva le animazioni scroll-reveal
  useScrollReveal()

  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
      <Process />
      <Events />
      <Wedding />
      <Gallery />
      <About />
      <Stats />
      <Contacts />
      <MapSection />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
