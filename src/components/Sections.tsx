import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { trackEvent } from '../lib/analytics'
import { supabase } from '../lib/supabase'
import { Zap, ChartBar as BarChart3, ShieldX, Search, DraftingCompass, Rocket, Flag, Info, Check, Clock, ChartBar as BarChart, FileText, Gavel, Users, Lock, CircleCheck as CheckCircle2, Send, Github, Linkedin, Dribbble, Twitter } from 'lucide-react'

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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-fgMuted max-w-prose">
            <p>We believe the fastest way to validate an idea is to build and ship a functional version. Prolonged analysis leads to paralysis. We prioritize rapid, iterative execution to generate real-world data.</p>
            <p>Our 14-day cycles force clarity and focus. Constraints breed creativity. We either find product-market fit quickly, or we kill the project and move on. This discipline minimizes waste and maximizes learning velocity.</p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[.03] p-4 flex items-center space-x-6">
              <Zap className="w-8 h-8 text-[#F0F0F0]" />
              <div>
                <h3 className="font-semibold">Rapid Prototyping</h3>
                <p className="text-sm text-fgMuted">From idea to live product in 14 days.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[.03] p-4 flex items-center space-x-6">
              <BarChart3 className="w-8 h-8 text-[#F0F0F0]" />
              <div>
                <h3 className="font-semibold">Data-Driven Decisions</h3>
                <p className="text-sm text-fgMuted">Real user metrics guide every pivot or kill decision.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[.03] p-4 flex items-center space-x-6">
              <ShieldX className="w-8 h-8 text-[#F0F0F0]" />
              <div>
                <h3 className="font-semibold">Portfolio Discipline</h3>
                <p className="text-sm text-fgMuted">No emotional attachment. We fund winners.</p>
              </div>
            </div>
          </div>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glassy-card rounded-2xl p-6 text-center transform hover:-translate-y-1 transition-transform duration-200 border-t-2 border-transparent hover:border-[#F0F0F0]">
            <Search className="w-12 h-12 mx-auto text-fgMuted mb-6" />
            <h3 className="font-bold text-xl mb-2">Days 1–3</h3>
            <p className="text-sm text-fgMuted">Define the core problem, user profile, and critical path. Set kill metrics.</p>
          </div>
          <div className="glassy-card rounded-2xl p-6 text-center transform hover:-translate-y-1 transition-transform duration-200 border-t-2 border-transparent hover:border-[#F0F0F0]">
            <DraftingCompass className="w-12 h-12 mx-auto text-fgMuted mb-6" />
            <h3 className="font-bold text-xl mb-2">Days 4–7</h3>
            <p className="text-sm text-fgMuted">Build the minimum viable product (MVP). Focus on core functionality only.</p>
          </div>
          <div className="glassy-card rounded-2xl p-6 text-center transform hover:-translate-y-1 transition-transform duration-200 border-t-2 border-transparent hover:border-[#F0F0F0]">
            <Rocket className="w-12 h-12 mx-auto text-fgMuted mb-6" />
            <h3 className="font-bold text-xl mb-2">Days 8–11</h3>
            <p className="text-sm text-fgMuted">Ship to a pilot group. Gather quantitative and qualitative feedback.</p>
          </div>
          <div className="glassy-card rounded-2xl p-6 text-center transform hover:-translate-y-1 transition-transform duration-200 border-t-2 border-transparent hover:border-[#F0F0F0]">
            <Flag className="w-12 h-12 mx-auto text-fgMuted mb-6" />
            <h3 className="font-bold text-xl mb-2">Days 12–14</h3>
            <p className="text-sm text-fgMuted">Analyze data against kill metrics. Make the Pivot or Sunset decision.</p>
          </div>
        </div>
        <div className="glassy-card rounded-2xl p-6 mt-12 max-w-3xl mx-auto">
          <h3 className="font-semibold text-center mb-4">Gate Checks</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="rounded-full text-xs font-semibold px-4 py-2 bg-white/5 flex items-center gap-2">
              Problem Validated <Info className="w-4 h-4 text-fgMuted" />
            </span>
            <span className="rounded-full text-xs font-semibold px-4 py-2 bg-white/5 flex items-center gap-2">
              MVP Shipped <Info className="w-4 h-4 text-fgMuted" />
            </span>
            <span className="rounded-full text-xs font-semibold px-4 py-2 bg-white/5 flex items-center gap-2">
              Pilot Feedback Received <Info className="w-4 h-4 text-fgMuted" />
            </span>
            <span className="rounded-full text-xs font-semibold px-4 py-2 bg-white/5 flex items-center gap-2">
              Metrics Met <Info className="w-4 h-4 text-fgMuted" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export const CurrentCycleSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  const [currentCycle, setCurrentCycle] = useState({
    title: 'DevTool Logger',
    hypothesis: 'Developers need a smarter, context-aware logging tool that automatically correlates logs with source code and user sessions.',
    phase: 'BUILD' as const,
    days_progress: 12,
    total_days: 14,
    pilot_users: 42,
    retention_target: '68%',
    cost_envelope: '$3,500'
  })

  useEffect(() => {
    const fetchCurrentCycle = async () => {
      const { data } = await supabase.from('current_cycles').select('*').eq('is_active', true).maybeSingle()
      if (data) setCurrentCycle(data)
    }
    fetchCurrentCycle()
  }, [])

  const progressPercentage = (currentCycle.days_progress / currentCycle.total_days) * 100
  const circumference = 276.46
  const strokeDashoffset = circumference * (1 - progressPercentage / 100)

  return (
    <section id="current-cycle" ref={elementRef as React.RefObject<HTMLElement>} className={'py-16 md:py-24 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="glassy-card rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-normal mb-4">Current Cycle: {currentCycle.title}</h2>
              <p className="text-fgMuted mb-6">Hypothesis: {currentCycle.hypothesis}</p>
              <div className="flex flex-wrap gap-2">
                <span className={`rounded-full text-xs font-bold px-3 py-1 ${currentCycle.phase === 'BUILD' ? 'bg-gray-500/20 text-gray-400' : 'bg-white/10 text-fgMuted'}`}>BUILD</span>
                <span className={`rounded-full text-xs font-bold px-3 py-1 ${currentCycle.phase === 'TEST' ? 'bg-gray-500/20 text-gray-400' : 'bg-white/10 text-fgMuted'}`}>TEST</span>
                <span className={`rounded-full text-xs font-bold px-3 py-1 ${currentCycle.phase === 'DECIDE' ? 'bg-gray-500/20 text-gray-400' : 'bg-white/10 text-fgMuted'}`}>DECIDE</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle className="stroke-current text-white/10" strokeWidth="12" cx="50" cy="50" r="44" fill="transparent"></circle>
                  <circle 
                    className="progress-ring__circle stroke-current text-[#F0F0F0]" 
                    strokeWidth="12" 
                    strokeLinecap="round" 
                    cx="50" 
                    cy="50" 
                    r="44" 
                    fill="transparent" 
                    strokeDasharray="276.46" 
                    strokeDashoffset={strokeDashoffset}
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <span className="text-3xl font-bold">{currentCycle.days_progress}/{currentCycle.total_days}</span>
                  <span className="text-xs text-fgMuted">DAYS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-center mt-12 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-semibold">{currentCycle.pilot_users}</p>
              <p className="text-sm text-fgMuted">Pilot Users</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">{currentCycle.retention_target}</p>
              <p className="text-sm text-fgMuted">D7 Retention Target</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">{currentCycle.cost_envelope}</p>
              <p className="text-sm text-fgMuted">Build Cost Envelope</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Services = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  const [services, setServices] = useState([
    {
      title: 'Idea Validation Sprint',
      features: ['Define and scope an MVP', 'Build and ship within 14 days', 'Deliver actionable user data'],
      pricing_note: 'Fixed cost, defined scope.',
      cta_text: 'Start a build'
    },
    {
      title: 'Co-Build Partnership',
      features: ['Full product development cycle', 'Shared risk and reward model', 'Ideal for early-stage founders'],
      pricing_note: 'Equity-based partnership.',
      cta_text: 'Start a build'
    },
    {
      title: 'Studio-as-a-Service',
      features: ['Dedicated build team on retainer', 'Continuous cycle of innovation', 'For VCs and corporate ventures'],
      pricing_note: 'Monthly retainer.',
      cta_text: 'Start a build'
    }
  ])

  useEffect(() => {
    const fetchServices = async () => {
      const { data } = await supabase.from('services').select('*').order('display_order')
      if (data && data.length > 0) setServices(data)
    }
    fetchServices()
  }, [])

  return (
    <section id="services" ref={elementRef as React.RefObject<HTMLElement>} className={'py-16 md:py-24 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#F0F0F0] mb-2">Services</p>
          <h2 className="text-3xl md:text-4xl font-normal">Build With Us</h2>
          <p className="text-lg text-fgMuted mt-4">Leverage our 14-day cycle methodology to validate and ship your next product idea.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glassy-card rounded-2xl p-8 flex flex-col">
              <h3 className="font-bold text-xl mb-4">{service.title}</h3>
              <ul className="space-y-3 text-sm text-fgMuted flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-fgMuted mt-4">{service.pricing_note}</p>
              <a 
                href="#registration" 
                className="primary-btn mt-6 text-center rounded-full px-6 py-3 text-sm font-semibold bg-[#F0F0F0] text-black hover:bg-white transition-colors"
                onClick={() => trackEvent('service_cta_click', { service: service.title })}
              >
                {service.cta_text}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center rounded-full text-sm bg-yellow-500/10 text-yellow-300 px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />
            We accept 2 client builds per month. Waitlist applies.
          </div>
        </div>
      </div>
    </section>
  )
}

export const Investors = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  return (
    <section id="investors" ref={elementRef as React.RefObject<HTMLElement>} className={'py-16 md:py-24 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#F0F0F0] mb-2">For Investors</p>
            <h2 className="text-3xl md:text-4xl font-normal mb-4">Invest in Velocity</h2>
            <p className="text-lg text-fgMuted max-w-prose">We offer a unique model for deploying capital into high-velocity product experiments. Our disciplined process de-risks early-stage investment by focusing on rapid validation and data-driven capital allocation.</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <button className="rounded-full text-sm font-semibold px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10">SPVs</button>
              <button className="rounded-full text-sm font-semibold px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10">Studio</button>
              <button className="rounded-full text-sm font-semibold px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10">Co-builds</button>
            </div>
            <div className="mt-10">
              <a 
                href="#" 
                className="primary-btn rounded-full px-8 py-4 text-base font-semibold bg-[#F0F0F0] text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200"
                onClick={() => trackEvent('data_room_request', {})}
              >
                Request the Data Room
              </a>
            </div>
          </div>
          <div className="glassy-card rounded-2xl p-8">
            <h3 className="font-bold text-xl mb-4">Data Room</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm">
                <BarChart className="w-5 h-5 text-fgMuted" />
                <span>Live Portfolio KPIs</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FileText className="w-5 h-5 text-fgMuted" />
                <span>Detailed Build Logs</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Gavel className="w-5 h-5 text-fgMuted" />
                <span>Gate Check & Kill Policy</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Users className="w-5 h-5 text-fgMuted" />
                <span>Founder & Team Profiles</span>
              </li>
            </ul>
            <p className="flex items-center text-xs text-fgMuted mt-6">
              <Lock className="w-4 h-4 mr-2" />
              Attribution and NDAs available upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Manifesto = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  const [manifestoItems, setManifestoItems] = useState([
    { title: 'Speed is the primary metric.', description: 'Learning velocity compounds faster than any other advantage.' },
    { title: 'Code is a liability.', description: 'We write the minimum amount required to test a hypothesis.' },
    { title: 'Data beats opinion.', description: 'Decisions are made based on user behavior, not internal debate.' },
    { title: 'Discipline over delusion.', description: 'We are ruthless about killing projects that don\'t meet metrics.' }
  ])

  useEffect(() => {
    const fetchManifesto = async () => {
      const { data } = await supabase.from('manifesto_items').select('*').order('display_order')
      if (data && data.length > 0) setManifestoItems(data)
    }
    fetchManifesto()
  }, [])

  return (
    <section id="manifesto" ref={elementRef as React.RefObject<HTMLElement>} className={'py-16 md:py-24 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8 text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          {manifestoItems.map((item, index) => (
            <div key={index} className="manifesto-item group">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal flex items-center justify-center gap-4 font-serif">
                <CheckCircle2 className="w-8 h-8 text-[#F0F0F0]" />
                <span>{item.title}</span>
              </h3>
              <p className="manifesto-subtext h-0 opacity-0 text-fgMuted group-hover:h-auto group-hover:opacity-100 group-hover:mt-2 transition-all duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Team = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  const [teamMembers, setTeamMembers] = useState([
    {
      name: 'Alex Johnson',
      role: 'Lead Engineer',
      avatar_url: 'https://placehold.co/120x120/1E2A44/E6EDF3?text=AV',
      github_url: '#',
      linkedin_url: '#'
    },
    {
      name: 'Maria Garcia',
      role: 'Product & Design',
      avatar_url: 'https://placehold.co/120x120/1E2A44/E6EDF3?text=AV',
      dribbble_url: '#',
      linkedin_url: '#'
    },
    {
      name: 'Chen Wei',
      role: 'Growth & Ops',
      avatar_url: 'https://placehold.co/120x120/1E2A44/E6EDF3?text=AV',
      twitter_url: '#',
      linkedin_url: '#'
    }
  ])

  useEffect(() => {
    const fetchTeam = async () => {
      const { data } = await supabase.from('team_members').select('*').order('display_order')
      if (data && data.length > 0) setTeamMembers(data)
    }
    fetchTeam()
  }, [])

  return (
    <section id="team" ref={elementRef as React.RefObject<HTMLElement>} className={'py-16 md:py-24 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#F0F0F0] mb-2">The Crew</p>
          <h2 className="text-3xl md:text-4xl font-normal">Our Team</h2>
          <p className="text-lg text-fgMuted mt-4 max-w-xl mx-auto">A small, senior team obsessed with shipping.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="glassy-card rounded-2xl p-8 text-center">
              <img 
                src={member.avatar_url} 
                alt="Team member avatar" 
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white/10"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-fgMuted">{member.role}</p>
              <div className="flex justify-center space-x-4 mt-4">
                {member.github_url && (
                  <a href={member.github_url} className="text-fgMuted hover:text-fgPrimary">
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.linkedin_url && (
                  <a href={member.linkedin_url} className="text-fgMuted hover:text-fgPrimary">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.dribbble_url && (
                  <a href={member.dribbble_url} className="text-fgMuted hover:text-fgPrimary">
                    <Dribbble className="w-5 h-5" />
                  </a>
                )}
                {member.twitter_url && (
                  <a href={member.twitter_url} className="text-fgMuted hover:text-fgPrimary">
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-fgMuted mt-12 font-mono">"Execution &gt; theory."</p>
      </div>
    </section>
  )
}

export const Testimonials = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  const [testimonials, setTestimonials] = useState([
    {
      quote: "ZTS delivered a working prototype in two weeks that blew away what our internal team had been planning for six months. Their process is a game-changer.",
      author: "— CEO, Series A Fintech Startup",
      company_logo_url: "https://placehold.co/100x40/transparent/9AA7B2?text=LOGO"
    }
  ])

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data } = await supabase.from('testimonials').select('*').eq('is_active', true).order('display_order')
      if (data && data.length > 0) setTestimonials(data)
    }
    fetchTestimonials()
  }, [])

  return (
    <section id="testimonials" ref={elementRef as React.RefObject<HTMLElement>} className={'py-16 md:py-24 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="bg-black/20 py-20">
        <div className="container mx-auto max-w-[1200px] px-6 md:px-8 text-center">
          <h2 className="text-3xl font-normal mb-2">Proof &gt; Promises</h2>
          <p className="text-fgMuted mb-12">What our partners say.</p>
          <div className="relative max-w-2xl mx-auto">
            {testimonials.length > 0 && (
              <div className="glassy-card rounded-2xl p-8">
                <p className="text-lg instrument-serif-regular-italic">{testimonials[0].quote}</p>
                <p className="mt-6 font-semibold">{testimonials[0].author}</p>
                <img 
                  src={testimonials[0].company_logo_url} 
                  alt="Client Logo" 
                  className="mx-auto mt-4 opacity-60"
                />
              </div>
            )}
          </div>
          <a 
            href="#" 
            className="mt-8 inline-block text-sm text-[#F0F0F0] hover:underline"
            onClick={() => trackEvent('case_studies_request', {})}
          >
            Request attributed case studies
          </a>
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
        <div className="glassy-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center">
          <Send className="w-12 h-12 text-[#F0F0F0] mx-auto mb-4" />
          <h2 className="text-3xl font-normal mb-2">Follow the Signal</h2>
          <p className="text-fgMuted mb-8">Get real-time updates on our build cycles, pivots, and learnings. No fluff.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#" 
              className="primary-btn w-full sm:w-auto rounded-full px-8 py-3 text-base font-semibold bg-[#F0F0F0] text-black hover:bg-white transition-colors"
              onClick={() => trackEvent('telegram_join', {})}
            >
              Join Telegram Channel
            </a>
            <a 
              href="#" 
              className="w-full sm:w-auto rounded-full px-8 py-3 text-base font-semibold border border-white/15 hover:bg-white/5 transition-colors"
              onClick={() => trackEvent('ship_notes_view', {})}
            >
              See Ship Notes
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}