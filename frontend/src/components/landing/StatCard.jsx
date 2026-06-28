import { motion } from 'framer-motion'

export default function StatCard({ icon: Icon, value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/70 bg-white/50 p-5 shadow-lg shadow-violet-200/30 ring-1 ring-white/60 backdrop-blur-xl transition-shadow duration-300 hover:shadow-xl hover:shadow-violet-200/40"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-sky-100 text-violet-600">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <p className="text-2xl font-bold tracking-tight text-slate-800">{value}</p>
      <p className="mt-1 text-sm leading-snug text-slate-600">{label}</p>
    </motion.div>
  )
}
