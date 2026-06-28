import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import AnalyticsPage from '../pages/AnalyticsPage'
import DashboardPage from '../pages/DashboardPage'
import JournalPage from '../pages/JournalPage'
import LandingPage from '../pages/LandingPage'
import LoginPage from '../pages/LoginPage'
import MoodTrackerPage from '../pages/MoodTrackerPage'
import ResourcesPage from '../pages/ResourcesPage'
import SignupPage from '../pages/SignupPage'
import { ROUTES } from './paths'

/**
 * Route tree: one layout wraps all pages; each child renders in <Outlet />.
 * Add new pages here and a path in paths.js.
 */
export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: ROUTES.HOME, element: <LandingPage /> },
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.SIGNUP, element: <SignupPage /> },
      { path: ROUTES.DASHBOARD, element: <DashboardPage /> },
      { path: ROUTES.JOURNAL, element: <JournalPage /> },
      { path: ROUTES.MOOD_TRACKER, element: <MoodTrackerPage /> },
      { path: ROUTES.ANALYTICS, element: <AnalyticsPage /> },
      { path: ROUTES.RESOURCES, element: <ResourcesPage /> },
    ],
  },
])
