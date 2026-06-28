import { motion } from 'framer-motion'
import { Sun } from 'lucide-react'

export default function WelcomeSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-white/70 bg-gradient-to-r from-violet-500/10 via-white/50 to-sky-500/10 p-6 shadow-lg shadow-violet-200/20 ring-1 ring-white/60 backdrop-blur-xl sm:p-7"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-violet-600">Welcome back</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Good afternoon, Alex
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Here&apos;s a gentle snapshot of your wellness today. No pressure — just
            check in when you&apos;re ready.
          </p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-violet-100 text-amber-600 shadow-sm">
          <Sun className="h-6 w-6" />
        </div>
      </div>
    </motion.div>
  )
}
