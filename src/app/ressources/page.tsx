import Link from 'next/link'
import { articles } from '@/lib/articles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = { title: 'Ressources — Maître Yoann Goinguene, Avocat à Bordeaux' }

export default function RessourcesPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f0efed', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '7rem' }}>
        <div className="max-w-6xl mx-auto px-6">

          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
              <div style={{ width: '24px', height: '1px', background: '#9a5a3c' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#9a5a3c', textTransform: 'uppercase' }}>Notes juridiques</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#2a2e38', margin: 0, lineHeight: 1.20 }}>
              Ressources
            </h1>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {articles.map((a) => (
              <Link key={a.slug} href={`/ressources/${a.slug}`} style={{ textDecoration: 'none' }}>
                <article style={{ background: '#ffffff', padding: '2.5rem', border: '1px solid #d4d0cc', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '0.58rem', letterSpacing: '0.20em', color: 'rgba(154,90,60,0.60)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    {a.categorie}
                  </p>
                  <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', fontWeight: 400, color: '#2a2e38', margin: '0 0 1rem', lineHeight: 1.40, flex: 1 }}>
                    {a.titre}
                  </h2>
                  <p style={{ fontSize: '0.76rem', color: '#585d6c', lineHeight: 1.72, marginBottom: '1.6rem' }}>
                    {a.description}
                  </p>
                  <span style={{ fontSize: '0.60rem', letterSpacing: '0.10em', color: 'rgba(42,46,56,0.45)' }}>
                    {new Date(a.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </article>
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
