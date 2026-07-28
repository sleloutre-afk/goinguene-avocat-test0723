'use client'

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#3a3f4a', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>

      {/* Office background — right half */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '42%', height: '100%',
        backgroundImage: 'url(/office.png)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, #3a3f4a 0%, rgba(58,63,74,0.50) 60%, rgba(58,63,74,0.25) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="120" height="120" viewBox="0 0 60 60" fill="none" style={{ opacity: 0.15 }}>
            <circle cx="30" cy="30" r="27" stroke="#f0efed" strokeWidth="1.2" />
            <circle cx="30" cy="30" r="23" stroke="#f0efed" strokeWidth="0.4" opacity="0.5" />
            <text x="30" y="34" textAnchor="middle" fill="#f0efed"
              fontFamily="Georgia, serif" fontSize="12" letterSpacing="2.5" fontStyle="italic">
              YGA
            </text>
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative' }}>
        <div style={{ maxWidth: '520px' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(240,239,237,0.35)' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: 'rgba(240,239,237,0.55)', textTransform: 'uppercase' }}>Contact</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#f0efed', margin: '0 0 3.5rem', lineHeight: 1.20 }}>
            Prendre contact
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem', marginBottom: '3rem' }}>

            {[
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(240,239,237,0.65)" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .98h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16z"/>
                  </svg>
                ),
                label: 'Téléphone',
                content: <a href="tel:+33672780630" style={{ fontSize: '0.92rem', color: '#f0efed', textDecoration: 'none', fontFamily: 'var(--font-playfair)' }}>06 72 78 06 30</a>,
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(240,239,237,0.65)" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                label: 'Email',
                content: <a href="mailto:yoanngoinguene.avocat@gmail.com" style={{ fontSize: '0.85rem', color: '#f0efed', textDecoration: 'none', fontFamily: 'var(--font-playfair)' }}>yoanngoinguene.avocat@gmail.com</a>,
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(240,239,237,0.65)" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                label: 'Adresse',
                content: <p style={{ fontSize: '0.85rem', color: 'rgba(240,239,237,0.85)', lineHeight: 1.60, margin: 0 }}>2 rue Franklin<br />33000 Bordeaux</p>,
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.4rem', alignItems: 'flex-start' }}>
                <div style={{ width: '36px', height: '36px', border: '1px solid rgba(240,239,237,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize: '0.60rem', letterSpacing: '0.18em', color: 'rgba(240,239,237,0.45)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{item.label}</p>
                  {item.content}
                </div>
              </div>
            ))}

          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+33672780630" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#9a5a3c', color: '#f0efed',
              padding: '1.1rem 2.4rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              Appeler
            </a>
            <a href="mailto:yoanngoinguene.avocat@gmail.com" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(240,239,237,0.40)', color: 'rgba(240,239,237,0.85)',
              padding: '1.1rem 2.4rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              Écrire
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
