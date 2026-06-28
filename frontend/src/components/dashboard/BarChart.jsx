import DashboardCard from './DashboardCard'

export default function BarChart({ title, subtitle, data, delay = 0 }) {
  return (
    <DashboardCard delay={delay}>
      <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-slate-600">{subtitle}</p>}
      <div className="mt-6 flex h-40 items-end justify-between gap-2 sm:gap-3">
        {data.map((bar) => (
          <div key={bar.day} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-32 w-full items-end justify-center">
              <div
                className="w-full max-w-10 rounded-t-lg bg-gradient-to-t from-violet-500 to-indigo-400 opacity-80 transition-all duration-300 hover:opacity-100"
                style={{ height: bar.height }}
              />
            </div>
            <span className="text-xs font-medium text-slate-500">{bar.day}</span>
          </div>
        ))}
      </div>
    </DashboardCard>
  )
}
