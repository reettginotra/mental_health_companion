import JournalEntryList from '../components/dashboard/journal/JournalEntryList'
import JournalWriter from '../components/dashboard/journal/JournalWriter'
import DashboardPageShell from '../components/dashboard/DashboardPageShell'
import PageHeader from '../components/dashboard/PageHeader'

export default function JournalPage() {
  return (
    <DashboardPageShell title="Journal">
      <PageHeader
        title="Journal"
        subtitle="Write and revisit your reflections in a private, calming space."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <JournalWriter />
        <JournalEntryList />
      </div>
    </DashboardPageShell>
  )
}
