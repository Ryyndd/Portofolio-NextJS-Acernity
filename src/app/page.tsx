import { Nav } from '@/components/nav'
import { ParticleBackground } from '@/components/particles'
import { Hero } from '@/components'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { DockDemo } from '@/components/dock'
import { SafariDemo } from '@/components/recent-project'

export default function Home() {
  return (
    <main>
      <ParticleBackground />
      <Nav />
      <DockDemo/>
      <Hero />
      <About />
      <SafariDemo/>
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

