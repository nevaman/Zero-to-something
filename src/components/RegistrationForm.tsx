import { useState } from 'react'
import { trackEvent } from '../lib/analytics'
import { supabase } from '../lib/supabase'

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', project_description: '', budget: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await supabase.from('registrations').insert([formData])
      trackEvent('registration_submitted', { email: formData.email })
      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', project_description: '', budget: '' })
    } catch (error) {
      console.error('Registration error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="registration" className="py-16 md:py-24">
        <div className="container mx-auto max-w-[600px] px-6 md:px-8">
          <div className="glassy-card rounded-2xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Thanks for your interest!</h3>
            <p className="text-fgMuted mb-6">We've received your submission. Our team will review it and get back to you within 48 hours.</p>
            <button onClick={() => setSubmitted(false)} className="rounded-full px-6 py-3 text-sm font-semibold border border-white/15 hover:bg-white/5 transition-colors">Submit Another</button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="registration" className="py-16 md:py-24">
      <div className="container mx-auto max-w-[600px] px-6 md:px-8">
        <div className="glassy-card rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-normal mb-2 text-center">Start a Build</h2>
          <p className="text-fgMuted mb-8 text-center">Tell us about your project and we'll get back to you within 48 hours.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name *</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors" placeholder="Your full name" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email *</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Company</label>
              <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors" placeholder="Your company name" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Project Description</label>
              <textarea value={formData.project_description} onChange={(e) => setFormData({ ...formData, project_description: e.target.value })} rows={4} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors" placeholder="Tell us about your project idea..." />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Budget Range</label>
              <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors">
                <option value="">Select budget range</option>
                <option value="<$5k">&lt;$5k</option>
                <option value="$5k-$10k">$5k-$10k</option>
                <option value="$10k-$25k">$10k-$25k</option>
                <option value="$25k+">$25k+</option>
              </select>
            </div>
            <button type="submit" disabled={isSubmitting} className="primary-btn w-full rounded-full px-8 py-4 text-base font-semibold bg-[#F0F0F0] text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200 disabled:opacity-50">
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
