import { Leaf } from 'lucide-react'
import DashboardCard from './DashboardCard'

export default function SelfCareCard() {
  return (
    <DashboardCard delay={0.16}>
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-teal-50 text-emerald-600">
          <Leaf className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-800">Self-care suggestion</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Take five slow breaths by a window. Notice one sound, one scent, and one
            thing you&apos;re grateful for today.
          </p>
          <button
            type="button"
            className="mt-4 text-sm font-semibold text-violet-700 transition hover:text-violet-900"
          >
            Mark as done →
          </button>
        </div>
      </div>
    </DashboardCard>
  )
}
