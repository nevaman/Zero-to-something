import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export const Thesis = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  return (
    <section id="thesis" ref={elementRef as React.RefObject<HTMLElement>} className={'py-16 md:py-24 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#F0F0F0] mb-2">Thesis</p>
          <h2 className="text-3xl md:text-4xl font-normal">Execution Over Theory</h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-4"></div>
        </div>
        <div className="text-center max-w-3xl mx-auto space-y-6 text-lg text-fgMuted">
          <p>We believe the fastest way to validate an idea is to build and ship a functional version. Prolonged analysis leads to paralysis.</p>
          <p>Our 14-day cycles force clarity and focus. Constraints breed creativity.</p>
        </div>
      </div>
    </section>
  )
}

export const Protocol = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  return (
    <section id="protocol" ref={elementRef as React.RefObject<HTMLElement>} className={'py-16 md:py-24 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#F0F0F0] mb-2">Protocol</p>
          <h2 className="text-3xl md:text-4xl font-normal">The 14-Day Cycle</h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-4"></div>
        </div>
        <div className="text-center text-fgMuted">14-day rapid execution cycles</div>
      </div>
    </section>
  )
}

export const CurrentCycleSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  return (
    <section id="current-cycle" ref={elementRef as React.RefObject<HTMLElement>} className={'py-16 md:py-24 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="glassy-card rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-normal mb-4">Current Build Cycle</h2>
          <p className="text-fgMuted">Check back soon for updates on our current project</p>
        </div>
      </div>
    </section>
  )
}

export const Services = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  return (
    <section id="services" ref={elementRef as React.RefObject<HTMLElement>} className={'py-16 md:py-24 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#F0F0F0] mb-2">Services</p>
          <h2 className="text-3xl md:text-4xl font-normal">Build With Us</h2>
        </div>
        <div className="text-center text-fgMuted">Service offerings coming soon</div>
      </div>
    </section>
  )
}

export const Investors = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  return (
    <section id="investors" ref={elementRef as React.RefObject<HTMLElement>} className={'py-16 md:py-24 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-4">For Investors</h2>
          <p className="text-fgMuted">Invest in velocity</p>
        </div>
      </div>
    </section>
  )
}

export const Manifesto = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  return (
    <section id="manifesto" ref={elementRef as React.RefObject<HTMLElement>} className={'py-16 md:py-24 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8 text-center">
        <h2 className="text-3xl font-normal mb-8">Our Manifesto</h2>
        <div className="space-y-4 max-w-3xl mx-auto text-fgMuted">
          <p className="text-xl">Speed is the primary metric.</p>
          <p className="text-xl">Data beats opinion.</p>
          <p className="text-xl">Discipline over delusion.</p>
        </div>
      </div>
    </section>
  )
}

export const Team = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  return (
    <section id="team" ref={elementRef as React.RefObject<HTMLElement>} className={'py-16 md:py-24 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-normal mb-4">Our Team</h2>
          <p className="text-fgMuted">A small, senior team obsessed with shipping</p>
        </div>
      </div>
    </section>
  )
}

export const Testimonials = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  return (
    <section id="testimonials" ref={elementRef as React.RefObject<HTMLElement>} className={'py-16 md:py-24 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="bg-black/20 py-20">
        <div className="container mx-auto max-w-[1200px] px-6 md:px-8 text-center">
          <h2 className="text-3xl font-normal mb-2">Proof &gt; Promises</h2>
          <p className="text-fgMuted">What our partners say</p>
        </div>
      </div>
    </section>
  )
}

export const Follow = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  return (
    <section id="follow" ref={elementRef as React.RefObject<HTMLElement>} className={'py-20 md:py-32 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="glassy-card rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-normal mb-2">Follow the Signal</h2>
          <p className="text-fgMuted">Get real-time updates on our build cycles</p>
        </div>
      </div>
    </section>
  )
}
