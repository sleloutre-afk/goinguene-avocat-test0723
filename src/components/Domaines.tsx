import Image from 'next/image'

const FEATURED = {
  svg: '/migrant.svg',
  titre: 'Droits des étrangers',
  desc: 'Accompagnement complet des ressortissants étrangers face aux procédures administratives et judiciaires : demande et renouvellement de titres de séjour, recours contre les OQTF, contestation des mesures de rétention administrative, droit d\'asile devant la CNDA et l\'OFPRA.',
  points: ['Titres de séjour & régularisation', 'OQTF — recours d\'urgence', 'Rétention administrative (CRA)', 'Droit d\'asile & réfugiés'],
}

const DOMAINES = [
  {
    svg: '/penal.svg',
    titre: 'Pénal — Crimes & Délits',
    desc: 'Défense pénale à tous les stades de la procédure : garde à vue, instruction, jugement correctionnel ou d\'assises. Assistance des mis en cause comme des victimes.',
  },
  {
    svg: '/corporel.svg',
    titre: 'Dommages corporels',
    desc: 'Évaluation et défense des préjudices corporels subis suite à un accident de la route, une agression ou une faute médicale. Négociation amiable et contentieux indemnitaire.',
  },
  {
    svg: '/pi.svg',
    titre: 'Propriété intellectuelle & Droit à l\'image',
    desc: 'Protection des œuvres, des marques et des droits à l\'image. Contentieux en contrefaçon, atteinte au droit à l\'image et concurrence déloyale.',
  },
  {
    svg: '/europe.svg',
    titre: 'Droit européen & international',
    desc: 'Conseil et contentieux en droit de l\'Union européenne et en droit international privé : compétence juridictionnelle, droit applicable, reconnaissance et exécution des décisions étrangères.',
  },
  {
    svg: '/automobile.svg',
    titre: 'Permis — Infractions routières',
    desc: 'Défense lors des procédures de retrait ou suspension de permis de conduire. Contestation des contraventions, délits routiers et récupération de points.',
  },
  {
    svg: '/victime.svg',
    titre: 'Indemnisation des victimes',
    desc: 'Assistance des victimes d\'infractions pénales devant les juridictions et les fonds de garantie (FGTI). Obtention de l\'indemnisation la plus complète au titre du préjudice subi.',
  },
]

export default function Domaines() {
  return (
    <section id="domaines" style={{ background: '#f0efed', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#9a5a3c' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#9a5a3c', textTransform: 'uppercase' }}>Domaines d&apos;intervention</span>
            <div style={{ width: '24px', height: '1px', background: '#9a5a3c' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#2a2e38', margin: 0, lineHeight: 1.20 }}>
            Défense des droits, en toutes matières
          </h2>
        </div>

        {/* Featured */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, marginBottom: '1.5rem', background: '#3a3f4a' }}>
          <div style={{ padding: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Image src={FEATURED.svg} alt="" width={28} height={28} style={{ opacity: 0.70, filter: 'invert(1)' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: 'rgba(240,239,237,0.55)', textTransform: 'uppercase' }}>Compétence principale</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.6rem', fontWeight: 400, color: '#f0efed', margin: '0 0 1.2rem', lineHeight: 1.25 }}>
              {FEATURED.titre}
            </h3>
            <p style={{ fontSize: '0.84rem', color: 'rgba(240,239,237,0.58)', lineHeight: 1.80 }}>
              {FEATURED.desc}
            </p>
          </div>
          <div style={{ padding: '3rem', borderLeft: '1px solid rgba(240,239,237,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
            {FEATURED.points.map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                <div style={{ width: '20px', height: '1px', background: '#9a5a3c', flexShrink: 0 }} />
                <span style={{ fontSize: '0.82rem', color: 'rgba(240,239,237,0.72)' }}>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid 3×2 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#d4d0cc' }}>
          {DOMAINES.map((d) => (
            <div key={d.titre} className="card-hover" style={{ background: '#ffffff', padding: '2rem 1.8rem' }}>
              <Image src={d.svg} alt="" width={28} height={28} style={{ marginBottom: '1.2rem', opacity: 0.55 }} />
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.95rem', fontWeight: 400, color: '#2a2e38', margin: '0 0 0.9rem', lineHeight: 1.30 }}>
                {d.titre}
              </h3>
              <p style={{ fontSize: '0.76rem', color: '#585d6c', lineHeight: 1.72 }}>{d.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
