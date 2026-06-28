import { motion } from 'framer-motion'
import { BarChart3, MessageCircleHeart, NotebookPen, Smile } from 'lucide-react'
import FeatureCard from './FeatureCard'

const FEATURES = [
  {
    icon: Smile,
    title: 'Mood Tracking',
    description:
      'Log how you feel with gentle prompts and see patterns unfold over time.',
  },
  {
    icon: MessageCircleHeart,
    title: 'AI Emotional Support',
    description:
      'Receive compassionate, judgment-free guidance whenever you need to talk.',
  },
  {
    icon: NotebookPen,
    title: 'Private Journaling',
    description:
      'Express yourself in a secure space designed for honesty and reflection.',
  },
  {
    icon: BarChart3,
    title: 'Wellness Analytics',
    description:
      'Understand your emotional trends with calm, easy-to-read insights.',
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      aria-labelledby="features-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-8 top-0 h-48 rounded-full bg-violet-300/10 blur-3xl"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 sm:text-sm">
          Features
        </p>
        <h2
          id="features-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Care designed around{' '}
          <span className="bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
            how you feel
          </span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          Thoughtful tools that work together — private, calming, and always on
          your side.
        </p>
      </motion.div>

      <div className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
        {FEATURES.map((feature, i) => (
          <FeatureCard key={feature.title} {...feature} delay={i * 0.08} />
        ))}
      </div>
    </section>
  )
}
