import DashboardCard from '../components/dashboard/DashboardCard'
import DashboardPageShell from '../components/dashboard/DashboardPageShell'
import MoodHistoryPreview from '../components/dashboard/mood/MoodHistoryPreview'
import MoodSelector from '../components/dashboard/MoodSelector'
import WeeklyMoodSummary from '../components/dashboard/mood/WeeklyMoodSummary'
import PageHeader from '../components/dashboard/PageHeader'

export default function MoodTrackerPage() {
  return (
    <DashboardPageShell title="Mood Tracker">
      <PageHeader
        title="Mood Tracker"
        subtitle="Check in with how you feel — every mood is valid and worth noticing."
      />
      <div className="space-y-6">
        <DashboardCard delay={0.04}>
          <h2 className="text-lg font-semibold text-slate-800">How are you feeling today?</h2>
          <p className="mt-1 text-sm text-slate-600">Select the mood that fits best right now</p>
          <div className="mt-4">
            <MoodSelector />
          </div>
        </DashboardCard>
        <div className="grid gap-6 lg:grid-cols-2">
          <MoodHistoryPreview />
          <WeeklyMoodSummary />
        </div>
      </div>
    </DashboardPageShell>
  )
}
