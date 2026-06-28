import { FileText, PenLine, TrendingUp } from 'lucide-react'
import DashboardCard from '../DashboardCard'

const STATS = [
  { icon: FileText, label: 'Total entries', value: '28' },
  { icon: PenLine, label: 'This week', value: '5' },
  { icon: TrendingUp, label: 'Avg length', value: '142 words' },
]

export default function JournalingStats() {
  return (
    <DashboardCard delay={0.1}>
      <h2 className="text-lg font-semibold text-slate-800">Journaling statistics</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {STATS.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="rounded-xl border border-white/60 bg-gradient-to-br from-white/70 to-violet-50/50 p-4"
          >
            <Icon className="h-4 w-4 text-violet-600" />
            <p className="mt-2 text-xl font-bold text-slate-800">{value}</p>
            <p className="text-xs text-slate-600">{label}</p>
          </div>
        ))}
      </div>
    </DashboardCard>
  )
}
