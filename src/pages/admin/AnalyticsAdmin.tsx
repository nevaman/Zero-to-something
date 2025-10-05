import { useEffect, useState } from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { supabase } from '../../lib/supabase'
import { AdminLayout } from '../../components/admin/AdminLayout'
import { format, subDays } from 'date-fns'

export const AnalyticsAdmin = () => {
  const [pageViews, setPageViews] = useState<any[]>([])
  const [topButtons, setTopButtons] = useState<any[]>([])
  const [deviceBreakdown, setDeviceBreakdown] = useState<any[]>([])

  useEffect(() => {
    fetchAnalytics()
  }, [])

  const fetchAnalytics = async () => {
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = subDays(new Date(), 6 - i)
      return format(date, 'yyyy-MM-dd')
    })

    const viewsData = await Promise.all(
      last7Days.map(async (date) => {
        const { count } = await supabase
          .from('analytics_events')
          .select('*', { count: 'exact', head: true })
          .eq('event_type', 'page_view')
          .gte('created_at', `${date}T00:00:00`)
          .lt('created_at', `${date}T23:59:59`)

        return { date: format(new Date(date), 'MMM dd'), views: count || 0 }
      })
    )

    setPageViews(viewsData)

    const { data: clicks } = await supabase
      .from('analytics_events')
      .select('event_data')
      .eq('event_type', 'button_click')
      .limit(1000)

    if (clicks) {
      const buttonCounts: Record<string, number> = {}
      clicks.forEach((event) => {
        const buttonName = event.event_data?.button_name || 'unknown'
        buttonCounts[buttonName] = (buttonCounts[buttonName] || 0) + 1
      })

      const topButtons = Object.entries(buttonCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([name, count]) => ({ name, clicks: count }))

      setTopButtons(topButtons)
    }

    const { data: sessions } = await supabase
      .from('analytics_events')
      .select('device_type')
      .eq('event_type', 'page_view')
      .limit(1000)

    if (sessions) {
      const deviceCounts: Record<string, number> = {}
      sessions.forEach((session) => {
        const device = session.device_type || 'unknown'
        deviceCounts[device] = (deviceCounts[device] || 0) + 1
      })

      const deviceData = Object.entries(deviceCounts).map(([device, count]) => ({
        device,
        count,
      }))

      setDeviceBreakdown(deviceData)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Analytics</h1>
          <p className="text-fgMuted">Deep dive into visitor behavior and site performance</p>
        </div>

        <div className="glassy-card rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">Page Views (Last 7 Days)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pageViews}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="date" stroke="#9AA7B2" />
                <YAxis stroke="#9AA7B2" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0A0E12',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                  }}
                />
                <Line type="monotone" dataKey="views" stroke="#F0F0F0" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glassy-card rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Top Button Clicks</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topButtons}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="#9AA7B2" />
                  <YAxis stroke="#9AA7B2" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0A0E12',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="clicks" fill="#F0F0F0" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glassy-card rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Device Breakdown</h3>
            <div className="space-y-4 mt-8">
              {deviceBreakdown.map((item) => (
                <div key={item.device}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="capitalize">{item.device}</span>
                    <span className="text-fgMuted">{item.count}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-[#F0F0F0] h-2 rounded-full"
                      style={{
                        width: `${
                          (item.count / deviceBreakdown.reduce((sum, d) => sum + d.count, 0)) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
