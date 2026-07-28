const MODES = [
  {
    num: '01',
    titre: 'Honoraires au temps passé',
    desc: 'Le temps consacré à votre dossier est facturé sur la base d\'un taux horaire défini dans une convention d\'honoraires signée avant toute intervention. Cette formule est adaptée aux dossiers contentieux et aux missions de conseil ponctuelles.',
    usage: 'Contentieux, consultations ponctuelles',
  },
  {
    num: '02',
    titre: 'Forfait',
    desc: 'Pour les missions à périmètre défini — recours contre une OQTF, demande de titre de séjour, défense en première instance —, un honoraire forfaitaire est convenu à l\'avance pour une totale transparence sur le coût de l\'intervention.',
    usage: 'Procédures identifiées, actes ciblés',
  },
  {
    num: '03',
    titre: 'Aide juridictionnelle',
    desc: 'Maître Goinguene accepte les missions relevant de l\'aide juridictionnelle totale ou partielle. Cette prise en charge, accordée sous conditions de ressources, permet à toute personne d\'accéder à la justice, quelle que soit sa situation.',
    usage: 'Sous conditions de ressources',
  },
]

export default function Honoraires() {
  return (
    <section id="honoraires" style={{ background: '#ffffff', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#9a5a3c' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#9a5a3c', textTransform: 'uppercase' }}>Honoraires</span>
            <div style={{ width: '24px', height: '1px', background: '#9a5a3c' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#2a2e38', margin: '0 0 1.2rem', lineHeight: 1.20 }}>
            Une défense accessible à tous
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#585d6c', lineHeight: 1.75, maxWidth: '540px', margin: '0 auto' }}>
            Chaque mission fait l&apos;objet d&apos;une convention d&apos;honoraires signée en amont. Le mode de facturation est adapté à votre situation et à la nature de votre dossier.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
          {MODES.map((m) => (
            <div key={m.num} style={{ border: '1px solid #d4d0cc', padding: '2.4rem 2rem', background: '#f0efed' }}>
              <div style={{ fontSize: '0.58rem', letterSpacing: '0.20em', color: 'rgba(154,90,60,0.45)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {m.num}
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontWeight: 400, color: '#2a2e38', margin: '0 0 1rem', lineHeight: 1.30 }}>
                {m.titre}
              </h3>
              <p style={{ fontSize: '0.80rem', color: '#585d6c', lineHeight: 1.78, margin: '0 0 1.2rem' }}>{m.desc}</p>
              <p style={{ fontSize: '0.68rem', color: 'rgba(154,90,60,0.65)', letterSpacing: '0.04em' }}>{m.usage}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#3a3f4a', padding: '2.5rem 3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', color: '#f0efed', margin: '0 0 0.4rem', fontWeight: 400 }}>
              Discuter de votre situation
            </p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(240,239,237,0.40)', margin: 0 }}>
              Premier contact · Devis sans engagement
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+33672780630" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#9a5a3c', color: '#f0efed',
              padding: '1rem 2rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              Appeler
            </a>
            <a href="mailto:yoanngoinguene.avocat@gmail.com" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(240,239,237,0.30)', color: 'rgba(240,239,237,0.80)',
              padding: '1rem 2rem', textDecoration: 'none',
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
