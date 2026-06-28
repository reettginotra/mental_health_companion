import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'

export default function AuthCard({ title, subtitle, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="relative w-full max-w-md rounded-[1.75rem] border border-white/70 bg-white/45 p-8 shadow-2xl shadow-violet-300/20 ring-1 ring-white/80 backdrop-blur-2xl sm:p-9"
    >
      <Link
        to={ROUTES.HOME}
        className="mb-6 inline-flex items-center gap-2 text-slate-800 transition-opacity hover:opacity-80"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-white shadow-md shadow-violet-300/40">
          <Heart className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <span className="text-sm font-semibold">
          Mental Health <span className="text-violet-600">Companion</span>
        </span>
      </Link>

      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
        {subtitle}
      </p>

      <div className="mt-8">{children}</div>
    </motion.div>
  )
}
