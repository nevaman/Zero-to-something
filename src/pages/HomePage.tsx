import { useEffect } from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Countdown } from '../components/Countdown'
import { Thesis, Protocol, CurrentCycleSection, Services, Investors, Manifesto, Team, Testimonials, Follow } from '../components/Sections'
import { ShipLog } from '../components/ShipLog'
import { RegistrationForm } from '../components/RegistrationForm'
import { Footer } from '../components/Footer'
import { trackPageView, updateActiveSession } from '../lib/analytics'

export const HomePage = () => {
  useEffect(() => {
    trackPageView()
    updateActiveSession()

    const sessionInterval = setInterval(updateActiveSession, 30000)

    return () => clearInterval(sessionInterval)
  }, [])

  return (
    <div className="overflow-x-hidden">
      <div className="canvas-bg" />
      <Header />
      <main className="pt-24 md:pt-32">
        <Hero />
        <Countdown />
        <Thesis />
        <Protocol />
        <ShipLog />
        <CurrentCycleSection />
        <Services />
        <Investors />
        <Manifesto />
        <Team />
        <Testimonials />
        <Follow />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  )
}
