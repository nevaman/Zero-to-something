import { useEffect, useState } from 'react'
import { Plus, CreditCard as Edit, Trash2, Save, X } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import { AdminLayout } from '../../components/admin/AdminLayout'
import { ShipLogProject } from '../../types/database'

export const ShipLogAdmin = () => {
  const [projects, setProjects] = useState<ShipLogProject[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingProject, setEditingProject] = useState<Partial<ShipLogProject> | null>(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    const { data } = await supabase.from('ship_log_projects').select('*').order('display_order')
    if (data) setProjects(data)
  }

  const handleSave = async () => {
    if (!editingProject) return

    if (editingProject.id) {
      await supabase.from('ship_log_projects').update(editingProject).eq('id', editingProject.id)
    } else {
      await supabase.from('ship_log_projects').insert([{ ...editingProject, display_order: projects.length + 1 }])
    }

    fetchProjects()
    setIsEditing(false)
    setEditingProject(null)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      await supabase.from('ship_log_projects').delete().eq('id', id)
      fetchProjects()
    }
  }

  const handleEdit = (project: ShipLogProject) => {
    setEditingProject(project)
    setIsEditing(true)
  }

  const handleNew = () => {
    setEditingProject({
      title: '',
      description: '',
      status: 'ACTIVE',
      cycle: '',
      tech_stack: '',
      problem: '',
      solution_outcome: '',
      image_url: 'https://placehold.co/600x400/1E2A44/E6EDF3?text=Project+View',
      gradient_from: 'gray-500',
      gradient_to: 'gray-600',
    })
    setIsEditing(true)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Ship Log Projects</h1>
            <p className="text-fgMuted">Manage portfolio projects</p>
          </div>
          <button
            onClick={handleNew}
            className="primary-btn flex items-center gap-2 px-6 py-3 rounded-full bg-[#F0F0F0] text-black hover:bg-white transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Project
          </button>
        </div>

        {isEditing && editingProject && (
          <div className="glassy-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">
                {editingProject.id ? 'Edit Project' : 'New Project'}
              </h3>
              <button onClick={() => setIsEditing(false)} className="text-fgMuted hover:text-fgPrimary">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Title *</label>
                <input
                  type="text"
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Status *</label>
                <select
                  value={editingProject.status}
                  onChange={(e) => setEditingProject({ ...editingProject, status: e.target.value as any })}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none"
                >
                  <option value="ACTIVE">Active</option>
                  <option value="PIVOTED">Pivoted</option>
                  <option value="SUNSET">Sunset</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">Description *</label>
                <textarea
                  value={editingProject.description}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Cycle *</label>
                <input
                  type="text"
                  value={editingProject.cycle}
                  onChange={(e) => setEditingProject({ ...editingProject, cycle: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none"
                  placeholder="2024-Q4-C1"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Tech Stack *</label>
                <input
                  type="text"
                  value={editingProject.tech_stack}
                  onChange={(e) => setEditingProject({ ...editingProject, tech_stack: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none"
                  placeholder="React, Node.js, PostgreSQL"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">Problem *</label>
                <textarea
                  value={editingProject.problem}
                  onChange={(e) => setEditingProject({ ...editingProject, problem: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">Solution/Outcome *</label>
                <textarea
                  value={editingProject.solution_outcome}
                  onChange={(e) => setEditingProject({ ...editingProject, solution_outcome: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">Image URL *</label>
                <input
                  type="text"
                  value={editingProject.image_url}
                  onChange={(e) => setEditingProject({ ...editingProject, image_url: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleSave}
                className="primary-btn flex items-center gap-2 px-6 py-3 rounded-full bg-[#F0F0F0] text-black hover:bg-white transition-colors"
              >
                <Save className="w-5 h-5" />
                Save Project
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-3 rounded-full border border-white/15 hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="glassy-card rounded-2xl p-6">
              <div className="flex justify-between items-start mb-4">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    project.status === 'ACTIVE'
                      ? 'bg-green-500/20 text-green-400'
                      : project.status === 'PIVOTED'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {project.status}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-fgMuted mb-2">{project.description}</p>
              <p className="text-xs text-fgMuted">Cycle: {project.cycle}</p>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}
