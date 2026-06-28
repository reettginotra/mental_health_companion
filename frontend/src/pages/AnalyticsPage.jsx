import BarChart from '../components/dashboard/BarChart'
import JournalingStats from '../components/dashboard/analytics/JournalingStats'
import DashboardPageShell from '../components/dashboard/DashboardPageShell'
import { WELLNESS_OVERVIEW_DATA, WEEK_MOOD_DATA } from '../components/dashboard/mockData'
import PageHeader from '../components/dashboard/PageHeader'
import DashboardCard from '../components/dashboard/DashboardCard'
import { Activity, Heart } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <DashboardPageShell title="Analytics">
      <PageHeader
        title="Analytics"
        subtitle="Gentle insights from your mood and journaling patterns."
      />
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <DashboardCard delay={0.04}>
            <Activity className="h-5 w-5 text-violet-600" />
            <p className="mt-2 text-2xl font-bold text-slate-800">7.4</p>
            <p className="text-sm text-slate-600">Average wellness score</p>
          </DashboardCard>
          <DashboardCard delay={0.06}>
            <Heart className="h-5 w-5 text-rose-500" />
            <p className="mt-2 text-2xl font-bold text-slate-800">+12%</p>
            <p className="text-sm text-slate-600">Mood improvement this month</p>
          </DashboardCard>
        </div>
        <BarChart
          title="Wellness overview"
          subtitle="Monthly wellness activity"
          data={WELLNESS_OVERVIEW_DATA}
          delay={0.08}
        />
        <BarChart
          title="Mood trends"
          subtitle="Daily mood intensity over the past week"
          data={WEEK_MOOD_DATA}
          delay={0.1}
        />
        <JournalingStats />
      </div>
    </DashboardPageShell>
  )
}
