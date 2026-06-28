import { motion } from 'framer-motion'
import { Brain, HeartHandshake, Moon, Smile } from 'lucide-react'
import StatCard from './StatCard'

const STATS = [
  {
    icon: Smile,
    value: '87%',
    label: 'Users report improved daily mood tracking',
    delay: 0.5,
  },
  {
    icon: Brain,
    value: '12k+',
    label: 'Mindful journal entries written with care',
    delay: 0.58,
  },
  {
    icon: Moon,
    value: '4.9',
    label: 'Average calm-session rating from our community',
    delay: 0.66,
  },
  {
    icon: HeartHandshake,
    value: '24/7',
    label: 'Access to wellness resources when you need them',
    delay: 0.74,
  },
]

export default function WellnessStats() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.45 }}
      className="relative z-10 mx-auto mt-4 max-w-6xl px-4 pb-24 sm:px-6 lg:px-8"
      aria-label="Wellness highlights"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </motion.section>
  )
}
