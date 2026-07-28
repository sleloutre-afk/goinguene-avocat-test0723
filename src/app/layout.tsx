import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maître Yoann Goinguene — Avocat à Bordeaux',
  description: 'Avocat au Barreau de Bordeaux. Droits des étrangers, droit pénal, dommages corporels, propriété intellectuelle, droit européen et international.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${lato.variable}`} style={{ fontFamily: 'var(--font-lato), sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
