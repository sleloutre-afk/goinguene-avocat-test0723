import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import Cabinet from '@/components/Cabinet'
import Domaines from '@/components/Domaines'
import Citation from '@/components/Citation'
import Honoraires from '@/components/Honoraires'
import Ressources from '@/components/Ressources'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Cabinet />
      <Domaines />
      <Citation />
      <Honoraires />
      <Ressources />
      <Contact />
      <Footer />
    </>
  )
}
