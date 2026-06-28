import { Quote } from 'lucide-react'
import DashboardCard from './DashboardCard'

export default function MotivationalQuote() {
  return (
    <DashboardCard delay={0.18}>
      <Quote className="h-8 w-8 text-violet-400/60" />
      <blockquote className="mt-3">
        <p className="text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
          &ldquo;You don&apos;t have to control your thoughts. You just have to stop
          letting them control you.&rdquo;
        </p>
        <footer className="mt-3 text-sm text-slate-500">— Dan Millman</footer>
      </blockquote>
    </DashboardCard>
  )
}
