import BarChart from '../BarChart'
import { WEEK_MOOD_DATA } from '../mockData'

export default function WeeklyMoodSummary() {
  return (
    <BarChart
      title="Weekly mood summary"
      subtitle="Average mood intensity this week"
      data={WEEK_MOOD_DATA}
      delay={0.12}
    />
  )
}
