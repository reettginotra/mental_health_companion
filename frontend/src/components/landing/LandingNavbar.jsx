import { motion } from 'framer-motion'
import { Heart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'

const NAV_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Resources', to: ROUTES.RESOURCES },
]

function navLinkClass({ isActive }) {
  return [
    'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'text-violet-800'
      : 'text-slate-600 hover:bg-white/50 hover:text-violet-800',
  ].join(' ')
}

export default function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative z-20 px-4 pt-5 sm:px-6 lg:px-8"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/70 bg-white/50 px-4 py-3 shadow-lg shadow-violet-200/35 ring-1 ring-white/60 backdrop-blur-xl sm:px-6"
        aria-label="Landing"
      >
        <Link
          to={ROUTES.HOME}
          className="flex items-center gap-2 text-slate-800 transition-opacity hover:opacity-80"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-white shadow-md shadow-violet-300/50">
            <Heart className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            Mental Health <span className="text-violet-600">Companion</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              {item.to ? (
                <NavLink to={item.to} className={navLinkClass}>
                  {item.label}
                </NavLink>
              ) : (
                <a
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white/50 hover:text-violet-800"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            to={ROUTES.LOGIN}
            className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white/60"
          >
            Log in
          </Link>
          <Link
            to={ROUTES.SIGNUP}
            className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-violet-400/40 transition hover:from-violet-500 hover:to-indigo-500"
          >
            Get started
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 hover:bg-white/50 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/60 bg-white/50 p-4 shadow-lg backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {item.to ? (
                  <NavLink
                    to={item.to}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <a
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2 border-t border-white/60 pt-3">
              <Link
                to={ROUTES.LOGIN}
                className="rounded-xl px-3 py-2 text-center text-sm font-medium text-slate-700"
                onClick={() => setMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                to={ROUTES.SIGNUP}
                className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                Get started
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
