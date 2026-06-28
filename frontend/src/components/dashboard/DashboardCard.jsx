import { motion } from 'framer-motion'

export default function DashboardCard({
  children,
  className = '',
  delay = 0,
  id,
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`rounded-2xl border border-white/70 bg-white/50 p-5 shadow-lg shadow-violet-200/20 ring-1 ring-white/60 backdrop-blur-xl sm:p-6 ${className}`}
    >
      {children}
    </motion.section>
  )
}
