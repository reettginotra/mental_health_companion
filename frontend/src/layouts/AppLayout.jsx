import { Outlet, useLocation } from 'react-router-dom'
import AppNav from '../components/navigation/AppNav'
import { APP_PATHS, AUTH_PATHS } from '../routes/paths'

/**
 * Shared shell for every page: optional nav + page content via <Outlet />.
 */
export default function AppLayout() {
  const { pathname } = useLocation()
  const showNav = !AUTH_PATHS.includes(pathname) && !APP_PATHS.includes(pathname)

  return (
    <div className="min-h-screen bg-violet-50">
      {showNav && <AppNav />}
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}
