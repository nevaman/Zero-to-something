import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { AdminLayout } from '../../components/admin/AdminLayout'
import { Registration } from '../../types/database'
import { format } from 'date-fns'

export const RegistrationsAdmin = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    fetchRegistrations()
  }, [])

  const fetchRegistrations = async () => {
    const { data } = await supabase.from('registrations').select('*').order('created_at', { ascending: false })
    if (data) setRegistrations(data)
  }

  const updateStatus = async (id: string, status: string) => {
    await supabase.from('registrations').update({ status }).eq('id', id)
    fetchRegistrations()
  }

  const filteredRegistrations =
    filter === 'all' ? registrations : registrations.filter((r) => r.status === filter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500/20 text-blue-400'
      case 'contacted':
        return 'bg-yellow-500/20 text-yellow-400'
      case 'qualified':
        return 'bg-green-500/20 text-green-400'
      case 'closed':
        return 'bg-gray-500/20 text-gray-400'
      default:
        return 'bg-white/10'
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Registrations</h1>
          <p className="text-fgMuted">Manage incoming leads and registrations</p>
        </div>

        <div className="flex gap-2">
          {['all', 'new', 'contacted', 'qualified', 'closed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === status ? 'bg-white/10' : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid gap-4">
          {filteredRegistrations.map((reg) => (
            <div key={reg.id} className="glassy-card rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-bold text-lg">{reg.name}</h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(reg.status)}`}>
                      {reg.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-fgMuted">Email:</span>{' '}
                      <a href={`mailto:${reg.email}`} className="text-[#F0F0F0] hover:underline">
                        {reg.email}
                      </a>
                    </p>
                    {reg.company && (
                      <p>
                        <span className="text-fgMuted">Company:</span> {reg.company}
                      </p>
                    )}
                    {reg.budget && (
                      <p>
                        <span className="text-fgMuted">Budget:</span> {reg.budget}
                      </p>
                    )}
                    {reg.project_description && (
                      <p>
                        <span className="text-fgMuted">Project:</span> {reg.project_description}
                      </p>
                    )}
                    <p className="text-xs text-fgMuted">
                      Submitted: {format(new Date(reg.created_at), 'MMM d, yyyy h:mm a')}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <select
                    value={reg.status}
                    onChange={(e) => updateStatus(reg.id, e.target.value)}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none text-sm"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRegistrations.length === 0 && (
          <div className="glassy-card rounded-2xl p-12 text-center">
            <p className="text-fgMuted">No registrations found</p>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
