import { useEffect, useState } from 'react'
import { Users, UserPlus, MousePointerClick, Eye, TrendingUp } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import { AdminLayout } from '../../components/admin/AdminLayout'

export const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalVisitors: 0,
    totalRegistrations: 0,
    activeUsers: 0,
    totalClicks: 0,
    todayVisitors: 0,
  })

  useEffect(() => {
    fetchStats()
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
  }, [])

  const fetchStats = async () => {
    const [
      { count: totalVisitors },
      { count: totalRegistrations },
      { count: activeUsers },
      { count: totalClicks },
      { count: todayVisitors },
    ] = await Promise.all([
      supabase.from('analytics_events').select('*', { count: 'exact', head: true }).eq('event_type', 'page_view'),
      supabase.from('registrations').select('*', { count: 'exact', head: true }),
      supabase.from('active_sessions').select('*', { count: 'exact', head: true }),
      supabase.from('analytics_events').select('*', { count: 'exact', head: true }).eq('event_type', 'button_click'),
      supabase
        .from('analytics_events')
        .select('*', { count: 'exact', head: true })
        .eq('event_type', 'page_view')
        .gte('created_at', new Date(new Date().setHours(0, 0, 0, 0)).toISOString()),
    ])

    setStats({
      totalVisitors: totalVisitors || 0,
      totalRegistrations: totalRegistrations || 0,
      activeUsers: activeUsers || 0,
      totalClicks: totalClicks || 0,
      todayVisitors: todayVisitors || 0,
    })
  }

  const statCards = [
    {
      icon: Eye,
      label: 'Total Visitors',
      value: stats.totalVisitors,
      color: 'from-blue-500/20 to-blue-600/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: TrendingUp,
      label: 'Today\'s Visitors',
      value: stats.todayVisitors,
      color: 'from-green-500/20 to-green-600/20',
      iconColor: 'text-green-400',
    },
    {
      icon: Users,
      label: 'Active Users Now',
      value: stats.activeUsers,
      color: 'from-purple-500/20 to-purple-600/20',
      iconColor: 'text-purple-400',
    },
    {
      icon: UserPlus,
      label: 'Total Registrations',
      value: stats.totalRegistrations,
      color: 'from-orange-500/20 to-orange-600/20',
      iconColor: 'text-orange-400',
    },
    {
      icon: MousePointerClick,
      label: 'Total Clicks',
      value: stats.totalClicks,
      color: 'from-pink-500/20 to-pink-600/20',
      iconColor: 'text-pink-400',
    },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-fgMuted">Welcome to the ZTS admin dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {statCards.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className={`glassy-card rounded-2xl p-6 bg-gradient-to-br ${stat.color}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-black/20 ${stat.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-bold mb-1">{stat.value.toLocaleString()}</p>
                  <p className="text-sm text-fgMuted">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glassy-card rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <a
                href="/admin/ship-log"
                className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-1">Add New Project</h4>
                <p className="text-sm text-fgMuted">Create a new ship log entry</p>
              </a>
              <a
                href="/admin/registrations"
                className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-1">View Registrations</h4>
                <p className="text-sm text-fgMuted">Manage incoming leads</p>
              </a>
              <a
                href="/admin/analytics"
                className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-1">View Analytics</h4>
                <p className="text-sm text-fgMuted">Deep dive into visitor behavior</p>
              </a>
            </div>
          </div>

          <div className="glassy-card rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">System Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10">
                <span className="text-sm">Website</span>
                <span className="text-xs font-semibold text-green-400">Online</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10">
                <span className="text-sm">Database</span>
                <span className="text-xs font-semibold text-green-400">Connected</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10">
                <span className="text-sm">Analytics</span>
                <span className="text-xs font-semibold text-green-400">Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
