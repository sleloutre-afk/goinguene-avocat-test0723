import { notFound } from 'next/navigation'
import { articles, getArticleBySlug } from '@/lib/articles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return { title: `${article.titre} — Maître Yoann Goinguene` }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const paragraphs = article.contenu.split('\n\n')

  return (
    <>
      <Navbar />
      <main style={{ background: '#f0efed', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '7rem' }}>
        <div className="max-w-3xl mx-auto px-6">

          <div style={{ marginBottom: '3.5rem' }}>
            <Link href="/ressources" style={{
              fontSize: '0.60rem', letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(154,90,60,0.70)', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              marginBottom: '2.5rem',
            }}>
              ← Toutes les notes
            </Link>

            <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: 'rgba(154,90,60,0.65)', textTransform: 'uppercase', marginBottom: '1rem' }}>
              {article.categorie}
            </p>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 400, color: '#2a2e38', margin: '0 0 1.5rem', lineHeight: 1.25 }}>
              {article.titre}
            </h1>
            <p style={{ fontSize: '0.78rem', color: 'rgba(42,46,56,0.50)', marginBottom: '2.5rem' }}>
              {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
            <div style={{ height: '1px', background: '#d4d0cc' }} />
          </div>

          <div style={{ fontSize: '0.88rem', color: '#2a2e38', lineHeight: 1.85 }}>
            {paragraphs.map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <h2 key={i} style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.15rem', fontWeight: 400, color: '#2a2e38', margin: '2.5rem 0 1rem', lineHeight: 1.30 }}>
                    {block.replace('## ', '')}
                  </h2>
                )
              }
              if (block.startsWith('---')) {
                return <hr key={i} style={{ border: 'none', borderTop: '1px solid #d4d0cc', margin: '3rem 0' }} />
              }
              const withLinks = block.replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                `<a href="$2" style="color:#9a5a3c;text-decoration:underline;text-underline-offset:3px">$1</a>`
              )
              return <p key={i} style={{ marginBottom: '1.4rem' }} dangerouslySetInnerHTML={{ __html: withLinks }} />
            })}
          </div>

          <div style={{ marginTop: '4rem', padding: '2.5rem', background: '#3a3f4a' }}>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', color: '#f0efed', margin: '0 0 0.5rem' }}>
              Une question sur ce sujet ?
            </p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(240,239,237,0.45)', margin: '0 0 1.8rem' }}>
              Maître Yoann Goinguene peut vous accompagner sur votre situation spécifique.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33672780630" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#9a5a3c', color: '#f0efed',
                padding: '0.9rem 2rem', textDecoration: 'none',
                fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              }}>
                Appeler
              </a>
              <a href="mailto:yoanngoinguene.avocat@gmail.com" style={{
                display: 'inline-flex', alignItems: 'center',
                border: '1px solid rgba(240,239,237,0.30)', color: 'rgba(240,239,237,0.75)',
                padding: '0.9rem 2rem', textDecoration: 'none',
                fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              }}>
                Écrire
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
