/**
 * Central place for all URL paths.
 * Import ROUTES anywhere you need a link or redirect — avoids typos.
 */
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  DASHBOARD: '/dashboard',
  JOURNAL: '/journal',
  MOOD_TRACKER: '/mood-tracker',
  ANALYTICS: '/analytics',
  RESOURCES: '/resources',
}

/** Paths where the main app navigation is hidden (auth screens). */
export const AUTH_PATHS = [ROUTES.LOGIN, ROUTES.SIGNUP]

/** App pages that use the dashboard shell (sidebar layout). */
export const APP_PATHS = [
  ROUTES.DASHBOARD,
  ROUTES.JOURNAL,
  ROUTES.MOOD_TRACKER,
  ROUTES.ANALYTICS,
  ROUTES.RESOURCES,
]
