import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { trackEvent } from '../lib/analytics'
import { supabase } from '../lib/supabase'
import { ShipLogProject } from '../types/database'

export const ShipLog = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  const [projects, setProjects] = useState<ShipLogProject[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from('ship_log_projects').select('*').order('display_order')
      if (data) setProjects(data)
    }
    fetchProjects()
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'bg-green-500/20 text-green-400'
      case 'PIVOTED': return 'bg-yellow-500/20 text-yellow-400'
      case 'SUNSET': return 'bg-red-500/20 text-red-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  return (
    <section id="ship-log" ref={elementRef as React.RefObject<HTMLElement>} className={'py-16 md:py-24 section-fade-up ' + (isVisible ? 'visible' : '')}>
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#F0F0F0] mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-normal">Ship Log</h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-4"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="glassy-card rounded-2xl flex flex-col transform hover:scale-[1.02] hover:border-white/20 transition-all duration-200" onClick={() => trackEvent('ship_log_card_click', { project: project.title })}>
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className={'rounded-full text-xs font-bold px-3 py-1 ' + getStatusColor(project.status)}>{project.status}</span>
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-500 to-gray-600 opacity-50"></div>
                </div>
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-sm text-fgMuted mb-4">{project.description}</p>
              </div>
              <div className="border-t border-white/10 p-6">
                <span className="text-sm font-semibold text-[#F0F0F0] flex items-center">
                  {project.status === 'ACTIVE' ? 'View Details' : project.status === 'PIVOTED' ? 'Read Post-Mortem' : 'View Analysis'}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
                <p className="text-xs text-fgMuted mt-1">Cycle: {project.cycle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
