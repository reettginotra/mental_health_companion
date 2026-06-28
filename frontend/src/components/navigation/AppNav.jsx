import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'

const NAV_LINKS = [
  { to: ROUTES.HOME, label: 'Home' },
  { to: ROUTES.DASHBOARD, label: 'Dashboard' },
  { to: ROUTES.JOURNAL, label: 'Journal' },
  { to: ROUTES.ANALYTICS, label: 'Analytics' },
  { to: ROUTES.RESOURCES, label: 'Resources' },
]

const AUTH_LINKS = [
  { to: ROUTES.LOGIN, label: 'Log in' },
  { to: ROUTES.SIGNUP, label: 'Sign up' },
]

function linkClass({ isActive }) {
  return [
    'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-violet-600 text-white'
      : 'text-violet-900 hover:bg-violet-100',
  ].join(' ')
}

export default function AppNav() {
  return (
    <header className="border-b border-violet-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <NavLink
          to={ROUTES.HOME}
          className="text-lg font-semibold text-violet-800 hover:text-violet-600"
        >
          Mental Health Companion
        </NavLink>

        <nav className="flex flex-wrap items-center gap-1" aria-label="Main">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass} end={to === ROUTES.HOME}>
              {label}
            </NavLink>
          ))}
        </nav>

        <nav className="flex items-center gap-1" aria-label="Account">
          {AUTH_LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
