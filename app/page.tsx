import SvgSymbols    from './components/SvgSymbols'
import Preloader     from './components/Preloader'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Marquee       from './components/Marquee'
import HeroIntro     from './components/HeroIntro'
import Services      from './components/Services'
import Process       from './components/Process'
import About         from './components/About'
import Industries    from './components/Industries'
import Cta           from './components/Cta'
import Footer        from './components/Footer'
import ClientEffects from './components/ClientEffects'

export default function Page() {
  return (
    <>
      {/* Hidden SVG symbol defs — must be first in the DOM */}
      <SvgSymbols />

      {/* Preloader overlay + scroll bar + glow div */}
      <Preloader />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Marquee />
        <HeroIntro />
        <Services />
        <Process />
        <About />
        <Industries />
      </main>

      <Footer />

      {/* All client-side effects: reveals, tilt, magnetic, scroll bar */}
      <ClientEffects />
    </>
  )
}
