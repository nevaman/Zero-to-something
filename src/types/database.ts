export interface ShipLogProject {
  id: string
  title: string
  description: string
  status: 'ACTIVE' | 'PIVOTED' | 'SUNSET'
  cycle: string
  tech_stack: string
  problem: string
  solution_outcome: string
  image_url: string
  gradient_from: string
  gradient_to: string
  created_at: string
  updated_at: string
  display_order: number
}

export interface CountdownTimer {
  id: string
  label: string
  target_date: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface CurrentCycle {
  id: string
  title: string
  hypothesis: string
  phase: 'BUILD' | 'TEST' | 'DECIDE'
  days_progress: number
  total_days: number
  pilot_users: number
  retention_target: string
  cost_envelope: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  avatar_url: string
  github_url?: string
  linkedin_url?: string
  twitter_url?: string
  dribbble_url?: string
  display_order: number
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  title: string
  features: string[]
  pricing_note: string
  cta_text: string
  display_order: number
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  company_logo_url: string
  is_active: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface ManifestoItem {
  id: string
  title: string
  description: string
  display_order: number
  created_at: string
  updated_at: string
}

export interface SiteSettings {
  id: string
  key: string
  value: string
  updated_at: string
}

export interface AnalyticsEvent {
  id: string
  event_type: string
  event_data: Record<string, any>
  session_id: string
  user_id?: string
  page_url: string
  referrer?: string
  device_type: string
  browser: string
  created_at: string
}

export interface Registration {
  id: string
  name: string
  email: string
  company?: string
  project_description?: string
  budget?: string
  status: 'new' | 'contacted' | 'qualified' | 'closed'
  notes?: string
  created_at: string
  updated_at: string
}
