import { useState, useEffect, useRef } from 'react'
import { SLIDES } from '../data/siteData'

export default function Gallery() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)
  const total = SLIDES.length

  const goTo = (index) => {
    setCurrent(((index % total) + total) % total)
  }

  const startAuto = () => {
    stopAuto()
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % total), 4500)
  }

  const stopAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current)
  }

  useEffect(() => {
    startAuto()
    return stopAuto
  }, [])

  const handleNav = (dir) => {
    goTo(current + dir)
    startAuto()
  }

  const handleDot = (i) => {
    goTo(i)
    startAuto()
  }

  return (
    <section className="gallery" id="galleria">
      <div className="container">
        <div className="gallery-intro reveal">
          <p className="sec-label">Le nostre creazioni</p>
          <h2 className="sec-title">
            La <em>bellezza</em> dei nostri lavori
          </h2>
          <p className="sec-text">
            Ogni allestimento è un'opera unica, creata con passione e cura
            artigianale. Sfoglia alcune delle nostre realizzazioni.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="carousel-wrap reveal">
        <div className="carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {SLIDES.map((slide, i) => (
              <div className="carousel-slide" key={i}>
                {/* Placeholder gradient when no real image */}
                <div
                  className="slide-placeholder"
                  style={{ background: slide.bg }}
                >
                  <img src={slide.image} alt={slide.label} className="slide-image" />
                </div>
                <div className="slide-caption">
                  <span>{slide.label}</span>
                  <p>{slide.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next */}
        <button
          className="carousel-btn carousel-prev"
          onClick={() => handleNav(-1)}
          aria-label="Precedente"
        >
          <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button
          className="carousel-btn carousel-next"
          onClick={() => handleNav(1)}
          aria-label="Successivo"
        >
          <svg viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>

        {/* Dots */}
        <div className="carousel-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`dot${current === i ? ' active' : ''}`}
              onClick={() => handleDot(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="carousel-thumbs">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`carousel-thumb${current === i ? ' active' : ''}`}
            onClick={() => handleDot(i)}
            style={{ background: slide.bg, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}
          >
            <img src={slide.image} alt={slide.label} className="slide-image" />
          </div>
        ))}
      </div>
    </section>
  )
}
