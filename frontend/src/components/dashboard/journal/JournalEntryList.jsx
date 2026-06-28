import { BookOpen } from 'lucide-react'
import DashboardCard from '../DashboardCard'
import { JOURNAL_ENTRIES } from '../mockData'

export default function JournalEntryList() {
  return (
    <DashboardCard delay={0.08}>
      <div className="flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-violet-600" />
        <h2 className="text-lg font-semibold text-slate-800">Recent entries</h2>
      </div>
      <ul className="mt-4 space-y-3">
        {JOURNAL_ENTRIES.map((entry) => (
          <li
            key={entry.id}
            className="rounded-xl border border-white/60 bg-white/50 p-4 transition-shadow hover:shadow-md"
          >
            <p className="text-xs font-medium text-violet-600">{entry.date}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
              {entry.preview}
            </p>
          </li>
        ))}
      </ul>
    </DashboardCard>
  )
}
