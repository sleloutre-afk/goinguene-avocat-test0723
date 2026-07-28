import Link from 'next/link'
import { Monogram } from './Navbar'

export default function Footer() {
  return (
    <footer style={{ background: '#2e3340', borderTop: '1px solid rgba(240,239,237,0.08)', padding: '3.5rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <Monogram size={36} color="rgba(240,239,237,0.35)" strokeWidth={1.0} />
            <div style={{ width: '1px', height: '28px', background: 'rgba(240,239,237,0.12)' }} />
            <p style={{ fontSize: '0.60rem', letterSpacing: '0.14em', color: 'rgba(240,239,237,0.30)', textTransform: 'uppercase', margin: 0 }}>
              Barreau de Bordeaux · Case 1122
            </p>
          </div>

          <nav style={{ display: 'flex', gap: '2.2rem', flexWrap: 'wrap' }}>
            {[
              { href: '#cabinet', label: 'Cabinet' },
              { href: '#domaines', label: 'Domaines' },
              { href: '#honoraires', label: 'Honoraires' },
              { href: '/ressources', label: 'Ressources' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{
                fontSize: '0.60rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'rgba(240,239,237,0.38)', textDecoration: 'none',
              }}>
                {link.label}
              </Link>
            ))}
          </nav>

        </div>

        <div style={{ marginTop: '2.5rem', paddingTop: '1.8rem', borderTop: '1px solid rgba(240,239,237,0.07)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.60rem', color: 'rgba(240,239,237,0.22)', letterSpacing: '0.06em', margin: 0 }}>
            © {new Date().getFullYear()} Yoann Goinguene — Avocat au Barreau de Bordeaux
          </p>
          <p style={{ fontSize: '0.60rem', color: 'rgba(240,239,237,0.15)', margin: 0 }}>
            Les informations figurant sur ce site ont un caractère général et ne constituent pas un conseil juridique.
          </p>
        </div>

      </div>
    </footer>
  )
}
