export default function Citation() {
  return (
    <section style={{ background: '#3a3f4a', padding: '6rem 0' }}>
      <div className="max-w-3xl mx-auto px-6" style={{ textAlign: 'center' }}>

        <svg width="32" height="24" viewBox="0 0 32 24" fill="none" style={{ marginBottom: '2.5rem', opacity: 0.20 }}>
          <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6 6.4 9.6H12V24H0zm18 0V14.4C18 6.4 22.8 1.6 32.4 0L34 2.4C28.4 3.6 25.6 6 24.4 9.6H30V24H18z" fill="#f0efed"/>
        </svg>

        <blockquote style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)',
          fontWeight: 400, fontStyle: 'italic',
          color: '#f0efed', lineHeight: 1.65,
          margin: '0 0 2.5rem',
        }}>
          Derrière chaque dossier, il y a une personne. Qu&apos;il s&apos;agisse d&apos;un titre de séjour refusé, d&apos;une mise en cause pénale ou d&apos;un préjudice à réparer, l&apos;enjeu est toujours le même&nbsp;: défendre des droits fondamentaux avec une rigueur sans compromis.
        </blockquote>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <div style={{ width: '32px', height: '1px', background: 'rgba(240,239,237,0.25)' }} />
          <span style={{ fontSize: '0.60rem', letterSpacing: '0.20em', color: 'rgba(240,239,237,0.50)', textTransform: 'uppercase' }}>
            Maître Yoann Goinguene
          </span>
          <div style={{ width: '32px', height: '1px', background: 'rgba(240,239,237,0.25)' }} />
        </div>

      </div>
    </section>
  )
}
