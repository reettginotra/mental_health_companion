import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'

const buttonMotion = {
  whileHover: { y: -3, scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 400, damping: 22 },
}

export default function HeroCTAs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:mt-9 sm:flex-row sm:gap-4"
    >
      <motion.div {...buttonMotion} className="w-full sm:w-auto">
        <Link
          to={ROUTES.SIGNUP}
          className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-11 py-[1.125rem] text-lg font-semibold text-white shadow-xl shadow-violet-500/30 ring-1 ring-violet-400/20 transition-[box-shadow,background] duration-300 hover:from-violet-500 hover:to-indigo-500 hover:shadow-2xl hover:shadow-violet-500/40 sm:w-auto"
        >
          Start your journey
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>

      <motion.div {...buttonMotion} className="w-full sm:w-auto">
        <Link
          to={ROUTES.DASHBOARD}
          className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/80 bg-white/55 px-11 py-[1.125rem] text-lg font-semibold text-slate-700 shadow-lg shadow-slate-300/40 ring-1 ring-white/60 backdrop-blur-xl transition-[box-shadow,background,border-color] duration-300 hover:border-violet-200/80 hover:bg-white/75 hover:shadow-xl hover:shadow-violet-200/30 sm:w-auto"
        >
          <Sparkles className="h-5 w-5 text-violet-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          Explore the app
        </Link>
      </motion.div>
    </motion.div>
  )
}
