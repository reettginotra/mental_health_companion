import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'
import HeroCTAs from './HeroCTAs'

const floatTransition = (duration, delay = 0) => ({
  duration,
  repeat: Infinity,
  ease: 'easeInOut',
  delay,
})

function HeroDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute left-[8%] top-[18%] h-3 w-3 rounded-full bg-violet-400/40 blur-[1px]"
        animate={{ y: [0, -14, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={floatTransition(7)}
      />
      <motion.div
        className="absolute right-[12%] top-[28%] h-4 w-4 rounded-full bg-sky-400/35 blur-[1px]"
        animate={{ y: [0, 12, 0], opacity: [0.35, 0.7, 0.35] }}
        transition={floatTransition(8, 1)}
      />
      <motion.div
        className="absolute left-[18%] bottom-[32%] h-20 w-20 rounded-full border border-violet-200/40 bg-violet-100/10 blur-sm"
        animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
        transition={floatTransition(12, 0.5)}
      />
      <motion.div
        className="absolute right-[10%] bottom-[38%] h-14 w-14 rounded-full border border-sky-200/50 bg-sky-100/10"
        animate={{ y: [0, 8, 0], scale: [1, 1.05, 1] }}
        transition={floatTransition(10, 1.2)}
      />
      <motion.div
        className="absolute left-1/2 top-[12%] h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-300/50 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={floatTransition(9)}
      />
    </div>
  )
}

const FEATURES = [
  { title: 'Mood check-in', desc: 'Gentle daily reflections' },
  { title: 'Private journal', desc: 'Write without judgment' },
  { title: 'Guided calm', desc: 'Breathing & mindfulness' },
]

export default function HeroSection() {
  return (
    <section className="relative z-10 mx-auto flex max-w-6xl flex-col px-4 pb-4 pt-5 sm:px-6 sm:pt-7 lg:px-8 lg:pt-9">
      <HeroDecorations />

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-violet-700 shadow-md shadow-violet-200/30 backdrop-blur-xl sm:mb-6 sm:text-sm sm:normal-case sm:tracking-normal"
        >
          <Leaf className="h-4 w-4 shrink-0 text-emerald-500" />
          A gentler way to care for your mind
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-[3.125rem] font-bold leading-[1.02] tracking-tight text-slate-900 sm:text-7xl lg:text-[4.75rem]"
        >
          <span className="block text-slate-800/90">Your calm space for</span>
          <span className="mt-0.5 block bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent sm:mt-1">
            emotional wellness
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600 sm:mt-6 sm:text-xl sm:leading-relaxed"
        >
          Track moods, journal with intention, and discover supportive resources —
          designed with softness, privacy, and compassion at the center.
        </motion.p>

        <HeroCTAs />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.38 }}
        className="relative mx-auto mt-12 w-full max-w-4xl sm:mt-14"
      >
        <div
          className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-violet-400/15 via-indigo-400/10 to-sky-400/15 blur-2xl"
          aria-hidden
        />
        <div className="relative rounded-[1.75rem] border border-white/70 bg-white/40 p-7 shadow-2xl shadow-violet-300/25 ring-1 ring-white/80 backdrop-blur-2xl sm:p-9">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
            {FEATURES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48 + i * 0.07 }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-white/60 bg-gradient-to-br from-white/80 to-violet-50/60 p-5 text-center shadow-md shadow-violet-100/50 backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-violet-200/40"
              >
                <p className="text-base font-semibold text-slate-800">{item.title}</p>
                <p className="mt-1.5 text-sm leading-snug text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
