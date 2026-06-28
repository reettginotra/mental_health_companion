import { Calendar, Flame, Heart, TrendingUp } from 'lucide-react'
import DashboardCard from './DashboardCard'

const STATS = [
  { icon: Flame, label: 'Day streak', value: '12' },
  { icon: Calendar, label: 'Journal entries', value: '28' },
  { icon: Heart, label: 'Avg mood', value: '7.4' },
  { icon: TrendingUp, label: 'Calm sessions', value: '16' },
]

export default function WellnessStatsCards() {
  return (
    <DashboardCard delay={0.12}>
      <h2 className="text-lg font-semibold text-slate-800">Wellness stats</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {STATS.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="rounded-xl border border-white/60 bg-gradient-to-br from-white/70 to-violet-50/50 p-4 transition-shadow hover:shadow-md"
          >
            <Icon className="h-4 w-4 text-violet-600" />
            <p className="mt-2 text-xl font-bold text-slate-800">{value}</p>
            <p className="mt-0.5 text-xs text-slate-600">{label}</p>
          </div>
        ))}
      </div>
    </DashboardCard>
  )
}
