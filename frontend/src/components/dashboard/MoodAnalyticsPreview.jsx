import BarChart from './BarChart'
import { WEEK_MOOD_DATA } from './mockData'

export default function MoodAnalyticsPreview() {
  return (
    <BarChart
      title="Mood analytics"
      subtitle="Your week at a glance"
      data={WEEK_MOOD_DATA}
      delay={0.14}
    />
  )
}
