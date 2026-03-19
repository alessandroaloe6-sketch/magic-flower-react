import { useEffect } from 'react'

/**
 * Observes all elements with class "reveal" and adds "visible"
 * when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )

    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => obs.observe(el))

    return () => obs.disconnect()
  }, [])
}
