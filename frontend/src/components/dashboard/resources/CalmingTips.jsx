import { Sparkles } from 'lucide-react'
import DashboardCard from '../DashboardCard'
import { CALMING_TIPS } from '../mockData'

export default function CalmingTips() {
  return (
    <DashboardCard delay={0.12}>
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-violet-600" />
        <h2 className="text-lg font-semibold text-slate-800">Calming tips</h2>
      </div>
      <ul className="mt-4 space-y-2">
        {CALMING_TIPS.map((tip) => (
          <li
            key={tip}
            className="flex gap-3 rounded-xl border border-white/60 bg-white/50 px-4 py-3 text-sm text-slate-700"
          >
            <span className="text-violet-400">•</span>
            {tip}
          </li>
        ))}
      </ul>
    </DashboardCard>
  )
}
