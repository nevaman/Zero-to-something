import { useEffect, useState } from 'react'
import { ArrowRight, ArrowLeft, X } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { trackEvent } from '../lib/analytics'
import { supabase } from '../lib/supabase'
import { ShipLogProject } from '../types/database'

export const ShipLog = () => {
  const { elementRef, isVisible } = useIntersectionObserver()
  const [projects, setProjects] = useState<ShipLogProject[]>([])
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.status === filter.toUpperCase())

  const openModal = (index: number) => {
    setSelectedProject(index)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
    trackEvent('ship_log_modal_open', { project: projects[index]?.title })
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = ''
  }

  const nextProject = () => {
    if (selectedProject !== null) {
      setSelectedProject((selectedProject + 1) % projects.length)
    }
  }

  const prevProject = () => {
    if (selectedProject !== null) {
      setSelectedProject((selectedProject - 1 + projects.length) % projects.length)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return
      
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') nextProject()
      if (e.key === 'ArrowLeft') prevProject()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, selectedProject])

  const getActionText = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'View Details'
      case 'PIVOTED': return 'Read Post-Mortem'
      case 'SUNSET': return 'View Analysis'
      default: return 'View Details'
    }
  }

  return (
    <>
      <section id="ship-log" ref={elementRef as React.RefObject<HTMLElement>} className={'py-16 md:py-24 section-fade-up ' + (isVisible ? 'visible' : '')}>
        <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#F0F0F0] mb-2">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-normal">Ship Log</h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-4"></div>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="rounded-full p-1 bg-white/5 border border-white/10 flex space-x-1 text-sm">
              {['All', 'Active', 'Pivots', 'Sunset'].map((filterOption) => (
                <button
                  key={filterOption}
                  onClick={() => setFilter(filterOption)}
                  className={`px-4 py-1.5 rounded-full transition-colors ${
                    filter === filterOption ? 'bg-white/10' : 'hover:bg-white/5'
                  }`}
                >
                  {filterOption}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="glassy-card rounded-2xl flex flex-col cursor-pointer transform hover:scale-[1.02] hover:border-white/20 transition-all duration-200"
                onClick={() => openModal(projects.findIndex(p => p.id === project.id))}
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className={'rounded-full text-xs font-bold px-3 py-1 ' + getStatusColor(project.status)}>
                      {project.status}
                    </span>
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br from-${project.gradient_from} to-${project.gradient_to} opacity-50`}></div>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-sm text-fgMuted mb-4">{project.description}</p>
                </div>
                <div className="border-t border-white/10 p-6">
                  <span className="text-sm font-semibold text-[#F0F0F0] flex items-center">
                    {getActionText(project.status)} <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                  <p className="text-xs text-fgMuted mt-1">Cycle: {project.cycle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ship Log Modal */}
      {isModalOpen && selectedProject !== null && (
        <div 
          className={`fixed inset-0 bg-black/80 backdrop-blur-lg z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ease-out ${
            isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div 
            className={`relative w-full max-w-4xl max-h-[90vh] bg-[#0A0E12] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-transform duration-300 ease-out ${
              isModalOpen ? 'scale-100' : 'scale-95'
            }`}
          >
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${selectedProject * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-none p-8 md:p-12 overflow-y-auto">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                      <img 
                        src={project.image_url} 
                        alt="Project Mock Image" 
                        className="rounded-lg w-full mb-4"
                      />
                      <h4 className="font-semibold mt-4 mb-2">Tech Stack</h4>
                      <p className="text-sm text-fgMuted">{project.tech_stack}</p>
                    </div>
                    <div>
                      <span className={'rounded-full text-xs font-bold px-3 py-1 ' + getStatusColor(project.status)}>
                        {project.status}
                      </span>
                      <h3 className="text-3xl font-serif mt-4 mb-2">{project.title}</h3>
                      <p className="text-fgMuted mb-6">{project.description}</p>
                      <h4 className="font-semibold mb-2">Problem</h4>
                      <p className="text-sm text-fgMuted mb-4">{project.problem}</p>
                      <h4 className="font-semibold mb-2">
                        {project.status === 'ACTIVE' ? 'Solution' : 'Outcome'}
                      </h4>
                      <p className="text-sm text-fgMuted">{project.solution_outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Controls */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-fgMuted hover:text-fgPrimary transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            {projects.length > 1 && (
              <>
                <button 
                  onClick={prevProject}
                  className="absolute top-1/2 left-4 -translate-y-1/2 text-fgMuted hover:text-fgPrimary transition-colors z-10 bg-black/20 rounded-full p-2"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextProject}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-fgMuted hover:text-fgPrimary transition-colors z-10 bg-black/20 rounded-full p-2"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}