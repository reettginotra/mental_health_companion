import { useEffect, useState } from 'react'
import { Loader2, Server, Wifi, WifiOff } from 'lucide-react'
import { checkHealth } from '../../services/api'
import { API_BASE_URL } from '../../config/api'
import DashboardCard from './DashboardCard'

export default function BackendStatus() {
  const [status, setStatus] = useState('loading')
  const [detail, setDetail] = useState('')

  useEffect(() => {
    let cancelled = false

    async function loadStatus() {
      try {
        const data = await checkHealth()
        if (cancelled) return

        const message =
          typeof data === 'string'
            ? data
            : data?.message || data?.status || 'Backend is healthy'

        setStatus('connected')
        setDetail(message)
      } catch {
        if (!cancelled) {
          setStatus('disconnected')
          setDetail(`Could not reach ${API_BASE_URL}/health`)
        }
      }
    }

    loadStatus()
    return () => {
      cancelled = true
    }
  }, [])

  const styles = {
    loading: {
      icon: Loader2,
      label: 'Checking connection…',
      badge: 'bg-slate-100 text-slate-600',
      iconClass: 'animate-spin text-slate-500',
    },
    connected: {
      icon: Wifi,
      label: 'Backend connected',
      badge: 'bg-emerald-100 text-emerald-700',
      iconClass: 'text-emerald-600',
    },
    disconnected: {
      icon: WifiOff,
      label: 'Backend offline',
      badge: 'bg-rose-100 text-rose-700',
      iconClass: 'text-rose-600',
    },
  }

  const current = styles[status]
  const Icon = current.icon

  return (
    <DashboardCard delay={0.02}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-sky-100">
            <Server className="h-5 w-5 text-violet-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-800">Backend status</h2>
            <p className="mt-0.5 text-sm text-slate-600">{detail || current.label}</p>
          </div>
        </div>
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium ${current.badge}`}
        >
          <Icon className={`h-4 w-4 ${current.iconClass}`} />
          {current.label}
        </span>
      </div>
    </DashboardCard>
  )
}
