import { supabase } from './supabase'

const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('session_id')
  if (!sessionId) {
    const timestamp = Date.now()
    const random = Math.random().toString(36).substring(7)
    sessionId = 'session_' + timestamp + '_' + random
    sessionStorage.setItem('session_id', sessionId)
  }
  return sessionId
}

const getDeviceType = (): string => {
  const width = window.innerWidth
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

const getBrowser = (): string => {
  const ua = navigator.userAgent
  if (ua.includes('Firefox')) return 'Firefox'
  if (ua.includes('Chrome')) return 'Chrome'
  if (ua.includes('Safari')) return 'Safari'
  if (ua.includes('Edge')) return 'Edge'
  return 'Other'
}

export const trackEvent = async (
  eventType: string,
  eventData: Record<string, any> = {}
) => {
  try {
    await supabase.from('analytics_events').insert({
      event_type: eventType,
      event_data: eventData,
      session_id: getSessionId(),
      page_url: window.location.href,
      referrer: document.referrer || null,
      device_type: getDeviceType(),
      browser: getBrowser(),
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

export const trackPageView = () => {
  trackEvent('page_view')
}

export const trackButtonClick = (buttonName: string) => {
  trackEvent('button_click', { button_name: buttonName })
}

export const trackSectionScroll = (sectionName: string) => {
  trackEvent('section_scroll', { section_name: sectionName })
}

export const updateActiveSession = async () => {
  try {
    await supabase.from('active_sessions').upsert({
      session_id: getSessionId(),
      last_seen: new Date().toISOString(),
      page_url: window.location.href,
      device_type: getDeviceType(),
      browser: getBrowser(),
    })
  } catch (error) {
    console.error('Session update error:', error)
  }
}
