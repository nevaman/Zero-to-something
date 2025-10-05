import { useEffect, useState } from 'react'
import { useCountdown } from '../hooks/useCountdown'
import { supabase } from '../lib/supabase'

export const Countdown = () => {
  const [targetDate, setTargetDate] = useState(new Date(Date.now() + 14 * 24 * 60 * 60 * 1000))
  const [label, setLabel] = useState('Next product drop')
  const time = useCountdown(targetDate)

  useEffect(() => {
    const fetchCountdown = async () => {
      const { data } = await supabase.from('countdown_timers').select('*').eq('is_active', true).maybeSingle()
      if (data) {
        setLabel(data.label)
        setTargetDate(new Date(data.target_date))
      }
    }
    fetchCountdown()
  }, [])

  const formatNumber = (num: number) => String(num).padStart(2, '0')

  return (
    <section className="relative -mt-16 md:-mt-24 pb-16 md:pb-24 section-fade-up visible">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="glassy-card rounded-2xl w-full max-w-lg mx-auto p-4 flex items-center justify-between text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-fgMuted">{label}</p>
          <div className="flex items-center gap-4 font-mono">
            <div><span className="text-2xl font-semibold">{formatNumber(time.days)}</span><span className="block text-xs text-fgMuted">DAYS</span></div>
            <div><span className="text-2xl font-semibold">{formatNumber(time.hours)}</span><span className="block text-xs text-fgMuted">HRS</span></div>
            <div><span className="text-2xl font-semibold">{formatNumber(time.minutes)}</span><span className="block text-xs text-fgMuted">MIN</span></div>
            <div><span className="text-2xl font-semibold">{formatNumber(time.seconds)}</span><span className="block text-xs text-fgMuted">SEC</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
