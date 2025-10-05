import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { trackButtonClick } from '../lib/analytics'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (section: string) => {
    trackButtonClick('nav_' + section)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className={'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out py-4 ' + (isScrolled ? 'header-scrim' : '')}>
        <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
          <nav className="flex justify-between items-center">
            <a href="#" className="flex items-center gap-2 text-lg font-bold transition-opacity hover:opacity-80" onClick={() => trackButtonClick('logo')}>
              <img src="https://i.ibb.co/xqvCR4WQ/zts-logo.png" alt="ZTS Logo" className="h-6 w-auto" />
              <span>ZTS_</span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              {['manifesto', 'protocol', 'ship-log', 'services', 'team', 'investors'].map((item) => (
                <a key={item} href={'#' + item} className="text-sm nav-link-underline text-fgMuted hover:text-fgPrimary" onClick={() => handleNavClick(item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                </a>
              ))}
              <a href="#" className="text-sm nav-link-underline text-fgMuted hover:text-fgPrimary" onClick={() => trackButtonClick('nav_telegram')}>
                Telegram
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="rounded-full px-5 py-2.5 text-sm font-semibold border border-white/15 hover:bg-white/5 transition-colors duration-200" onClick={() => trackButtonClick('data_room_header')}>
                Data Room
              </a>
              <a href="#registration" className="primary-btn rounded-full px-5 py-2.5 text-sm font-semibold bg-[#F0F0F0] text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200" onClick={() => trackButtonClick('start_build_header')}>
                Start a Build
              </a>
            </div>
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#010203]/90 backdrop-blur-lg z-40 p-8">
          <div className="flex justify-end mb-8">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            {['manifesto', 'protocol', 'ship-log', 'services', 'team', 'investors'].map((item) => (
              <a key={item} href={'#' + item} className="text-fgMuted hover:text-fgPrimary" onClick={() => handleNavClick(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
              </a>
            ))}
            <a href="#" className="text-fgMuted hover:text-fgPrimary" onClick={() => handleNavClick('telegram')}>Telegram</a>
            <div className="pt-8 flex flex-col space-y-4 w-full max-w-xs">
              <a href="#" className="text-center rounded-full px-6 py-3 font-semibold border border-white/15 hover:bg-white/5 transition-colors duration-200" onClick={() => trackButtonClick('data_room_mobile')}>Data Room</a>
              <a href="#registration" className="text-center primary-btn rounded-full px-6 py-3 font-semibold bg-[#F0F0F0] text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200" onClick={() => trackButtonClick('start_build_mobile')}>Start a Build</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
