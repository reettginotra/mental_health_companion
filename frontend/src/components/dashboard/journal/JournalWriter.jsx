import { PenLine } from 'lucide-react'
import { useState } from 'react'
import DashboardCard from '../DashboardCard'

export default function JournalWriter() {
  const [entry, setEntry] = useState('')

  function handleSave(e) {
    e.preventDefault()
    setEntry('')
  }

  return (
    <DashboardCard delay={0.04}>
      <div className="flex items-center gap-2">
        <PenLine className="h-5 w-5 text-violet-600" />
        <h2 className="text-lg font-semibold text-slate-800">Write today&apos;s entry</h2>
      </div>
      <form onSubmit={handleSave} className="mt-4 space-y-3">
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          rows={6}
          placeholder="What's on your mind? Write freely — this space is just for you."
          className="w-full resize-none rounded-xl border border-white/80 bg-white/60 px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-violet-100/50 backdrop-blur-sm transition placeholder:text-slate-400 focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-300/40"
        />
        <button
          type="submit"
          className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-400/30 transition hover:from-violet-500 hover:to-indigo-500"
        >
          Save entry
        </button>
      </form>
    </DashboardCard>
  )
}
