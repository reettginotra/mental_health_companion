import { ExternalLink } from 'lucide-react'
import DashboardCard from '../DashboardCard'
import { RESOURCES } from '../mockData'

export default function ResourceCards() {
  return (
    <DashboardCard delay={0.04}>
      <h2 className="text-lg font-semibold text-slate-800">Wellness resources</h2>
      <p className="mt-1 text-sm text-slate-600">Curated guides for your journey</p>
      <ul className="mt-4 space-y-3">
        {RESOURCES.map((item) => (
          <li
            key={item.title}
            className="flex items-start justify-between gap-3 rounded-xl border border-white/60 bg-white/50 p-4 transition-shadow hover:shadow-md"
          >
            <div>
              <span className="text-xs font-medium text-violet-600">{item.tag}</span>
              <p className="mt-1 font-semibold text-slate-800">{item.title}</p>
              <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-lg p-2 text-violet-600 transition hover:bg-violet-50"
              aria-label={`Open ${item.title}`}
            >
              <ExternalLink className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
    </DashboardCard>
  )
}
