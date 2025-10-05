import { ReactNode, useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { LayoutDashboard, FileText, Users, Settings, ChartBar as BarChart3, LogOut, Menu, X, Package, Briefcase, MessageSquare, BookOpen, Clock, Target } from 'lucide-react'
import { supabase } from '../../lib/supabase'

interface AdminLayoutProps {
  children: ReactNode
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession()
      if (!data.session) {
        navigate('/admin/login')
      }
    }
    checkAuth()
  }, [navigate])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin/login')
  }

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
    { icon: FileText, label: 'Ship Log', path: '/admin/ship-log' },
    { icon: Target, label: 'Current Cycle', path: '/admin/current-cycle' },
    { icon: Clock, label: 'Countdown', path: '/admin/countdown' },
    { icon: Briefcase, label: 'Services', path: '/admin/services' },
    { icon: Users, label: 'Team', path: '/admin/team' },
    { icon: MessageSquare, label: 'Testimonials', path: '/admin/testimonials' },
    { icon: BookOpen, label: 'Manifesto', path: '/admin/manifesto' },
    { icon: Package, label: 'Registrations', path: '/admin/registrations' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ]

  return (
    <div className="min-h-screen bg-[#010203]">
      <div className="canvas-bg" />

      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#010203]/90 backdrop-blur-sm border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/xqvCR4WQ/zts-logo.png" alt="ZTS" className="h-6" />
            <span className="font-bold">ZTS Admin</span>
          </div>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0A0E12] border-r border-white/10 z-40 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/xqvCR4WQ/zts-logo.png" alt="ZTS" className="h-8" />
            <span className="font-bold text-lg">ZTS Admin</span>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-white/10 text-[#F0F0F0]'
                    : 'text-fgMuted hover:bg-white/5 hover:text-fgPrimary'
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-fgMuted hover:bg-white/5 hover:text-fgPrimary transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className={`lg:ml-64 min-h-screen pt-20 lg:pt-0 transition-all duration-300`}>
        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  )
}
