import { motion } from 'framer-motion'
import { MOODS } from './mockData'

export default function MoodSelector() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {MOODS.map((mood, i) => (
        <motion.button
          key={mood.label}
          type="button"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05 + i * 0.04 }}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`rounded-2xl border border-white/70 bg-gradient-to-br ${mood.color} p-4 text-center shadow-sm transition-shadow hover:shadow-md`}
        >
          <span className="text-2xl" role="img" aria-label={mood.label}>
            {mood.emoji}
          </span>
          <p className="mt-2 text-sm font-medium text-slate-700">{mood.label}</p>
        </motion.button>
      ))}
    </div>
  )
}
