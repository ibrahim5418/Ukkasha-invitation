import { useRef } from 'react'
import { Divider } from './Ornaments'
import useScrollHint from '../hooks/useScrollHint'

export default function Hero({ data, ready }) {
  const { bride, groom, hero, media } = data
  const heroRef = useRef(null)
  const { phase, scrollTo } = useScrollHint(ready)
  return (
    <section ref={heroRef} className={`hero ${ready ? 'is-ready' : ''}`}>
      <img className="hero-bg stage-media" src={media.heroBg} alt="" draggable="false" />
      <div className="hero-shade" aria-hidden="true" />
      {/* same box as the cover-fitted background, so text stays inside the arch */}
      <div className="hero-frame">
        <div className="hero-content">
          {data.bismillah && (
            <p className="bismillah hero-item" style={{ '--d': 0 }} lang="ar">
              ﷽
            </p>
          )}
          <Divider star className="hero-item hero-divider" style={{ '--d': 1 }} />
          <p className="hero-eyebrow hero-item" style={{ '--d': 2 }}>
            {hero.request}
          </p>
          <h1 className="hero-name hero-item" style={{ '--d': 3 }}>
            {groom.full}
          </h1>
          {groom.qualification && (
            <p className="hero-qual hero-item" style={{ '--d': 3 }}>
              {groom.qualification}
            </p>
          )}
          <p className="hero-parents hero-item" style={{ '--d': 4 }}>
            S/o {groom.parents}
          </p>
          <p className="hero-amp hero-item" style={{ '--d': 5 }}>
            &amp;
          </p>
          <h1 className="hero-name hero-item" style={{ '--d': 6 }}>
            {bride.full}
          </h1>
          {bride.qualification && (
            <p className="hero-qual hero-item" style={{ '--d': 6 }}>
              {bride.qualification}
            </p>
          )}
          <p className="hero-parents hero-item" style={{ '--d': 7 }}>
            D/o {bride.parents}
          </p>
          <p className="hero-eyebrow hero-closing hero-item" style={{ '--d': 8 }}>
            {hero.closing}
          </p>
        </div>
      </div>
      <div className={`scroll-hint is-${phase}`}>
        <button
          type="button"
          className="scroll-hint-btn"
          onClick={() => scrollTo(heroRef.current?.parentElement?.querySelector('.hero ~ section'))}
          tabIndex={phase === 'off' ? -1 : 0}
          aria-hidden={phase === 'off'}
        >
          <span>Scroll down</span>
          <svg className="scroll-hint-chevron" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
    </section>
  )
}
