import DashboardCard from './DashboardCard'
import MoodSelector from './MoodSelector'

export default function MoodTrackerCards() {
  return (
    <DashboardCard id="mood-tracker" delay={0.05}>
      <h2 className="text-lg font-semibold text-slate-800">How are you feeling?</h2>
      <p className="mt-1 text-sm text-slate-600">Tap to log today&apos;s mood</p>
      <div className="mt-4">
        <MoodSelector />
      </div>
    </DashboardCard>
  )
}
