import { Monogram } from './Navbar'

export default function Cabinet() {
  return (
    <section id="cabinet" style={{ background: '#ffffff', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }}>

          {/* Monogramme */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <div style={{
              width: '100%', aspectRatio: '1',
              maxWidth: '280px',
              background: '#f0efed',
              border: '1px solid #d4d0cc',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}>
              <Monogram size={140} color="#9a5a3c" strokeWidth={1.0} />
              <div style={{
                position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
                background: '#9a5a3c', padding: '0.4rem 1rem', whiteSpace: 'nowrap',
              }}>
                <span style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: '#ffffff', textTransform: 'uppercase' }}>
                  Serment 2022
                </span>
              </div>
            </div>
            {/* Coordonnées rapides */}
            <div style={{ width: '100%', maxWidth: '280px', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <a href="tel:+33672780630" style={{ fontSize: '0.82rem', color: '#9a5a3c', textDecoration: 'none', fontFamily: 'var(--font-playfair)' }}>
                06 72 78 06 30
              </a>
              <a href="mailto:yoanngoinguene.avocat@gmail.com" style={{ fontSize: '0.75rem', color: '#585d6c', textDecoration: 'none' }}>
                yoanngoinguene.avocat@gmail.com
              </a>
              <p style={{ fontSize: '0.75rem', color: '#585d6c', lineHeight: 1.5 }}>
                2 rue Franklin<br />33000 Bordeaux
              </p>
            </div>
          </div>

          {/* Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
              <div style={{ width: '24px', height: '1px', background: '#9a5a3c' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#9a5a3c', textTransform: 'uppercase' }}>Le Cabinet</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#2a2e38', margin: '0 0 2rem', lineHeight: 1.20 }}>
              Maître Yoann Goinguene
            </h2>

            <p style={{ fontSize: '0.87rem', color: '#585d6c', lineHeight: 1.85, marginBottom: '1.4rem' }}>
              Maître Yoann Goinguene est avocat au Barreau de Bordeaux depuis décembre 2022. Formé à l&apos;École des Avocats Aliénor (EDA Aliénor) au sein du ressort de la Cour d&apos;appel de Bordeaux, il a construit une pratique centrée sur la défense des droits fondamentaux des personnes physiques.
            </p>
            <p style={{ fontSize: '0.87rem', color: '#585d6c', lineHeight: 1.85, marginBottom: '1.4rem' }}>
              Son engagement auprès des personnes étrangères — titres de séjour, obligations de quitter le territoire français, rétention administrative, droit d&apos;asile — constitue le cœur de son activité. Membre de l&apos;Institut de Défense des Étrangers (IDE) du Barreau de Bordeaux, il intervient dans les procédures d&apos;urgence devant les juridictions administratives et judiciaires.
            </p>
            <p style={{ fontSize: '0.87rem', color: '#585d6c', lineHeight: 1.85, marginBottom: '2.5rem' }}>
              Au-delà du droit des étrangers, il accompagne ses clients en matière pénale, en indemnisation des dommages corporels et des victimes, ainsi qu&apos;en droit de la propriété intellectuelle et en droit européen et international. Il accepte les missions au titre de l&apos;aide juridictionnelle.
            </p>

            <div style={{ borderTop: '1px solid #d4d0cc', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: 'rgba(42,46,56,0.50)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                Appartenance institutionnelle
              </p>
              {[
                { titre: 'Barreau de Bordeaux', detail: 'Inscription au tableau — Case 1122' },
                { titre: 'IDE — Institut de Défense des Étrangers', detail: 'Association spécialisée en droit des étrangers, Barreau de Bordeaux' },
                { titre: 'EDA Aliénor', detail: 'École des Avocats Aliénor — Formation professionnelle initiale' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.2rem', alignItems: 'baseline' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#9a5a3c', flexShrink: 0, marginTop: '6px' }} />
                  <div>
                    <span style={{ fontSize: '0.80rem', color: '#2a2e38', fontWeight: 500 }}>{item.titre}</span>
                    <p style={{ fontSize: '0.68rem', color: 'rgba(42,46,56,0.48)', marginTop: '0.1rem' }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
