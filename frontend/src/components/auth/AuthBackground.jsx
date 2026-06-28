import { motion } from 'framer-motion'

export default function AuthBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100/90 via-slate-50 to-sky-100/80" />
      <motion.div
        className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-violet-400/25 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-16 bottom-20 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl"
        animate={{ x: [0, -24, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.75),transparent_60%)]" />
    </div>
  )
}
