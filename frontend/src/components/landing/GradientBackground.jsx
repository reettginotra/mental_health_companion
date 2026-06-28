import { motion } from 'framer-motion'

export default function GradientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-violet-100/80 via-slate-50 to-sky-100/90" />

      <motion.div
        className="absolute -left-32 -top-20 h-[36rem] w-[36rem] rounded-full bg-violet-400/30 blur-[100px]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-24 top-20 h-[40rem] w-[40rem] rounded-full bg-sky-400/25 blur-[110px]"
        animate={{ x: [0, -40, 0], y: [0, 28, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-300/20 blur-[90px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-violet-300/20 blur-[80px]"
        animate={{ y: [0, -24, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,255,255,0.85),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(224,231,255,0.4),transparent_60%)]" />
    </div>
  )
}
