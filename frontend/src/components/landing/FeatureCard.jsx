import { motion } from 'framer-motion'

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -5 }}
      className="group rounded-2xl border border-white/70 bg-white/50 p-6 shadow-lg shadow-violet-200/25 ring-1 ring-white/60 backdrop-blur-xl transition-shadow duration-300 hover:shadow-xl hover:shadow-violet-200/40"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-sky-100 text-violet-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-slate-800">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </motion.article>
  )
}
