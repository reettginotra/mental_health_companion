import BreathingExercises from '../components/dashboard/resources/BreathingExercises'
import CalmingTips from '../components/dashboard/resources/CalmingTips'
import ResourceCards from '../components/dashboard/resources/ResourceCards'
import DashboardPageShell from '../components/dashboard/DashboardPageShell'
import PageHeader from '../components/dashboard/PageHeader'

export default function ResourcesPage() {
  return (
    <DashboardPageShell title="Resources">
      <PageHeader
        title="Resources"
        subtitle="Tools, exercises, and gentle guidance for your wellness journey."
      />
      <div className="space-y-6">
        <ResourceCards />
        <div className="grid gap-6 lg:grid-cols-2">
          <BreathingExercises />
          <CalmingTips />
        </div>
      </div>
    </DashboardPageShell>
  )
}
