import Link from 'next/link'
import { Monogram } from './Navbar'

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '640px', overflow: 'hidden', background: '#2e3340' }}>
      <img
        src="/hero.png"
        alt=""
        aria-hidden
        className="ken-burns"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(46,51,64,0.94) 0%, rgba(46,51,64,0.78) 52%, rgba(46,51,64,0.45) 100%)',
      }} />

      <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '600px' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ width: '28px', height: '1px', background: '#9a5a3c' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: 'rgba(240,239,237,0.65)', textTransform: 'uppercase' }}>
              Avocat au Barreau de Bordeaux
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.6rem', margin: '0 0 1.8rem' }}>
            <Monogram size={108} color="rgba(240,239,237,0.80)" strokeWidth={1.0} />
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 400, color: '#f0efed',
              lineHeight: 1.18, margin: 0,
            }}>
              Yoann<br />Goinguene
            </h1>
          </div>

          <p style={{
            fontSize: 'clamp(0.82rem, 1.4vw, 0.95rem)',
            color: 'rgba(240,239,237,0.65)',
            lineHeight: 1.78, margin: '0 0 0.6rem',
          }}>
            Droits des étrangers · Droit pénal · Dommages corporels
          </p>
          <p style={{
            fontSize: 'clamp(0.78rem, 1.2vw, 0.88rem)',
            color: 'rgba(240,239,237,0.42)',
            lineHeight: 1.78, margin: '0 0 2.8rem',
          }}>
            Propriété intellectuelle · Droit européen et international
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+33672780630" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#9a5a3c', color: '#f0efed',
              padding: '1rem 2.4rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Appeler
            </a>
            <a href="mailto:yoanngoinguene.avocat@gmail.com" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(240,239,237,0.30)', color: 'rgba(240,239,237,0.75)',
              padding: '1rem 2.4rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Écrire
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
