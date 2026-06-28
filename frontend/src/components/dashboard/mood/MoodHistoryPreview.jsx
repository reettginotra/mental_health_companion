import { Calendar } from 'lucide-react'
import DashboardCard from '../DashboardCard'
import { MOOD_HISTORY } from '../mockData'

export default function MoodHistoryPreview() {
  return (
    <DashboardCard delay={0.1}>
      <div className="flex items-center gap-2">
        <Calendar className="h-5 w-5 text-violet-600" />
        <h2 className="text-lg font-semibold text-slate-800">Mood history</h2>
      </div>
      <ul className="mt-4 space-y-2">
        {MOOD_HISTORY.map((item) => (
          <li
            key={item.date}
            className="flex items-center justify-between rounded-xl border border-white/60 bg-white/50 px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-slate-800">{item.date}</p>
              <p className="text-xs text-slate-500">{item.mood}</p>
            </div>
            <span className="text-xl" role="img" aria-label={item.mood}>
              {item.emoji}
            </span>
          </li>
        ))}
      </ul>
    </DashboardCard>
  )
}
