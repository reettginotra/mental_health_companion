import { Wind } from 'lucide-react'
import DashboardCard from '../DashboardCard'
import { BREATHING_EXERCISES } from '../mockData'

export default function BreathingExercises() {
  return (
    <DashboardCard delay={0.08}>
      <div className="flex items-center gap-2">
        <Wind className="h-5 w-5 text-sky-600" />
        <h2 className="text-lg font-semibold text-slate-800">Breathing exercises</h2>
      </div>
      <ul className="mt-4 space-y-3">
        {BREATHING_EXERCISES.map((ex) => (
          <li
            key={ex.name}
            className="rounded-xl border border-white/60 bg-gradient-to-br from-sky-50/80 to-white/60 p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold text-slate-800">{ex.name}</p>
              <span className="rounded-full bg-white/70 px-2.5 py-0.5 text-xs font-medium text-sky-700">
                {ex.duration}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{ex.steps}</p>
            <button
              type="button"
              className="mt-3 text-sm font-semibold text-violet-700 hover:text-violet-900"
            >
              Start exercise →
            </button>
          </li>
        ))}
      </ul>
    </DashboardCard>
  )
}
