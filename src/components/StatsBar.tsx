const STATS = [
  { value: '2022', label: 'Prestation de serment' },
  { value: 'Case 1122', label: 'Barreau de Bordeaux' },
  { value: 'IDE', label: 'Institut de Défense des Étrangers' },
  { value: 'AJ', label: 'Aide juridictionnelle acceptée' },
]

export default function StatsBar() {
  return (
    <div style={{ background: '#e8e5e0', borderTop: '1px solid #d4d0cc', borderBottom: '1px solid #d4d0cc' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: '1.8rem 1.2rem',
              borderRight: i < 3 ? '1px solid #d4d0cc' : 'none',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontStyle: 'italic', color: '#2a2e38', marginBottom: '0.3rem' }}>
                {s.value}
              </p>
              <p style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(42,46,56,0.50)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
