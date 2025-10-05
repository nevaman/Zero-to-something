import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { trackButtonClick } from '../lib/analytics'
import { supabase } from '../lib/supabase'

export const Hero = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  const [settings, setSettings] = useState({
    tagline: 'Built in Ethiopia. Designed for scale.',
    title: 'We turn hard problems into cash‑flowing software.',
    subtitle: 'One 14‑day sprint. Ship or kill. 2 client slots per month.',
  })

  useEffect(() => {
    const fetchSettings = async () => {
      const { data } = await supabase.from('site_settings').select('key, value').in('key', ['hero_tagline', 'hero_title', 'hero_subtitle'])
      if (data) {
        const settingsMap: Record<string, string> = {}
        data.forEach((item) => { settingsMap[item.key] = item.value })
        setSettings({
          tagline: settingsMap.hero_tagline || settings.tagline,
          title: settingsMap.hero_title || settings.title,
          subtitle: settingsMap.hero_subtitle || settings.subtitle,
        })
      }
    }
    fetchSettings()
  }, [])

  return (
    <section ref={elementRef as React.RefObject<HTMLElement>} className={'text-center py-20 md:py-32 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <p className="text-lg text-fgMuted mb-4">{settings.tagline}</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tighter leading-tight max-w-4xl mx-auto">{settings.title}</h1>
        <p className="text-lg md:text-xl text-fgMuted max-w-2xl mx-auto mt-6">{settings.subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          <a href="#registration" className="primary-btn w-full sm:w-auto rounded-full px-8 py-4 text-base font-semibold bg-[#F0F0F0] text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200 shadow-lg" onClick={() => trackButtonClick('start_build_hero')}>Start a build</a>
          <a href="#current-cycle" className="w-full sm:w-auto rounded-full px-8 py-4 text-base font-semibold border border-white/15 hover:bg-white/5 transition-colors duration-200" onClick={() => trackButtonClick('view_current_cycle')}>View current cycle</a>
        </div>
        <div className="flex justify-center flex-wrap gap-3 mt-12">
          <span className="rounded-full text-xs font-mono px-3 py-1 bg-white/5 border border-white/10">Public cycles</span>
          <span className="rounded-full text-xs font-mono px-3 py-1 bg-white/5 border border-white/10">AI‑native</span>
          <span className="rounded-full text-xs font-mono px-3 py-1 bg-white/5 border border-white/10">Portfolio discipline</span>
        </div>
      </div>
    </section>
  )
}
