import { useCallback, useEffect, useRef, useState } from 'react'

// One-time "scroll down" nudge for the hero.
//
//   off      → hero still settling, or the 8s wait is running (label hidden)
//   bouncing → the whole page bounces (html.hint-bounce) and the chevron jumps
//   idle     → bounce over; the label stays with a gentle chevron bob
//   static   → prefers-reduced-motion: label shown, nothing moves
//
// All timing runs on setTimeout. Any user scroll cancels whatever is pending
// or playing, and the nudge plays at most once per page load.
const HERO_SETTLE_MS = 2400 // longest hero entrance transition (.hero-bg zoom)
const WAIT_MS = 8000 // pause on the fully visible hero before nudging
const BOUNCE_MS = 10000 // 5 × 2s page-bounce cycles (see styles.css)
const PAGE_CLASS = 'hint-bounce'
const SCROLL_KEYS = new Set(['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' ', 'Spacebar'])

let played = false

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function useScrollHint(ready) {
  const [phase, setPhase] = useState('off')
  const cancelRef = useRef(() => {})

  useEffect(() => {
    if (!ready) return

    if (reducedMotion()) {
      const t = setTimeout(() => setPhase('static'), HERO_SETTLE_MS)
      return () => clearTimeout(t)
    }
    if (played) return

    const root = document.documentElement
    const timers = []
    const later = (fn, ms) => timers.push(setTimeout(fn, ms))
    let bouncing = false

    const detach = () => {
      timers.forEach(clearTimeout)
      timers.length = 0
      root.classList.remove(PAGE_CLASS)
      window.removeEventListener('scroll', onUser)
      window.removeEventListener('wheel', onUser)
      window.removeEventListener('touchmove', onUser)
      window.removeEventListener('keydown', onKey)
    }
    // the guest scrolled (or tapped the label): stop at once, never replay
    function onUser() {
      played = true
      detach()
      if (bouncing) setPhase('idle')
      bouncing = false
    }
    function onKey(e) {
      if (SCROLL_KEYS.has(e.key)) onUser()
    }
    cancelRef.current = onUser

    window.addEventListener('scroll', onUser, { passive: true })
    window.addEventListener('wheel', onUser, { passive: true })
    window.addEventListener('touchmove', onUser, { passive: true })
    window.addEventListener('keydown', onKey)

    later(() => {
      later(() => {
        // only nudge while the hero is actually what's on screen
        if (window.scrollY > 2) return onUser()
        played = true
        bouncing = true
        root.classList.add(PAGE_CLASS)
        setPhase('bouncing')
        later(() => {
          bouncing = false
          detach()
          setPhase('idle')
        }, BOUNCE_MS)
      }, WAIT_MS)
    }, HERO_SETTLE_MS)

    // unmount / StrictMode re-run: clear everything without marking it played
    return () => {
      detach()
      cancelRef.current = () => {}
    }
  }, [ready])

  const scrollTo = useCallback((target) => {
    cancelRef.current()
    target?.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' })
  }, [])

  return { phase, scrollTo }
}
