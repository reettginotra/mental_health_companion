import DashboardLayout from './DashboardLayout'

export default function DashboardPageShell({ children, title = 'Dashboard' }) {
  return (
    <>
      <div className="min-h-svh" aria-hidden />
      <DashboardLayout title={title}>
        <div className="mx-auto max-w-6xl">{children}</div>
      </DashboardLayout>
    </>
  )
}
