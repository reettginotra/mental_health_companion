import BackendStatus from '../components/dashboard/BackendStatus'
import DashboardPageShell from '../components/dashboard/DashboardPageShell'
import MoodAnalyticsPreview from '../components/dashboard/MoodAnalyticsPreview'
import MoodTrackerCards from '../components/dashboard/MoodTrackerCards'
import MotivationalQuote from '../components/dashboard/MotivationalQuote'
import QuickJournal from '../components/dashboard/QuickJournal'
import SelfCareCard from '../components/dashboard/SelfCareCard'
import WelcomeSection from '../components/dashboard/WelcomeSection'
import WellnessStatsCards from '../components/dashboard/WellnessStatsCards'

export default function DashboardPage() {
  return (
    <DashboardPageShell title="Dashboard">
      <div className="space-y-6">
        <WelcomeSection />
        <BackendStatus />
        <MoodTrackerCards />
        <div className="grid gap-6 lg:grid-cols-2">
          <QuickJournal />
          <div className="space-y-6">
            <SelfCareCard />
            <MotivationalQuote />
          </div>
        </div>
        <WellnessStatsCards />
        <MoodAnalyticsPreview />
      </div>
    </DashboardPageShell>
  )
}
