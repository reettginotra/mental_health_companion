import {
  BarChart3,
  BookOpen,
  Heart,
  LayoutDashboard,
  Settings,
  Smile,
  Sparkles,
} from 'lucide-react'
import { ROUTES } from '../../routes/paths'

export const SIDEBAR_LINKS = [
  { label: 'Dashboard', to: ROUTES.DASHBOARD, icon: LayoutDashboard, end: true },
  { label: 'Journal', to: ROUTES.JOURNAL, icon: BookOpen },
  { label: 'Mood Tracker', to: ROUTES.MOOD_TRACKER, icon: Smile },
  { label: 'Analytics', to: ROUTES.ANALYTICS, icon: BarChart3 },
  { label: 'Resources', to: ROUTES.RESOURCES, icon: Sparkles },
  { label: 'Settings', to: `${ROUTES.DASHBOARD}#settings`, icon: Settings },
]

export const BRAND = {
  name: 'Mental Health Companion',
  short: 'Companion',
}
