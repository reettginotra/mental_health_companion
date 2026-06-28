import { Heart, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { BRAND, SIDEBAR_LINKS } from './dashboardNav'

function linkClass({ isActive }) {
  return [
    'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200',
    isActive
      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-400/30'
      : 'text-slate-600 hover:bg-white/60 hover:text-violet-800',
  ].join(' ')
}

export default function DashboardSidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-label="Close sidebar"
        />
      )}

      <aside
        className={[
          'fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-white/60 bg-white/55 p-5 shadow-xl shadow-violet-200/20 backdrop-blur-2xl transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        ].join(' ')}
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-white shadow-md">
              <Heart className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="text-sm font-semibold leading-tight text-slate-800">
              Mental Health
              <span className="block text-violet-600">{BRAND.short}</span>
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-500 hover:bg-white/60 lg:hidden"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1" aria-label="Dashboard">
          {SIDEBAR_LINKS.map(({ label, to, icon: Icon, end }) => (
            <NavLink
              key={label}
              to={to}
              end={end}
              className={linkClass}
              onClick={onClose}
            >
              <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
              {label}
            </NavLink>
          ))}
        </nav>

        <p id="settings" className="mt-6 text-xs leading-relaxed text-slate-500">
          You&apos;re doing enough. Take it one gentle step at a time.
        </p>
      </aside>
    </>
  )
}
