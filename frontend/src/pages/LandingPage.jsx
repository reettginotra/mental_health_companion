import FeaturesSection from '../components/landing/FeaturesSection'
import GradientBackground from '../components/landing/GradientBackground'
import HeroSection from '../components/landing/HeroSection'
import LandingNavbar from '../components/landing/LandingNavbar'
import WellnessStats from '../components/landing/WellnessStats'
import '../components/landing/landing.css'

/**
 * Full-viewport landing experience with its own navbar.
 * Uses fixed positioning so it sits above the default app shell nav.
 */
export default function LandingPage() {
  return (
    <>
      {/* Keeps layout height so other routes are unaffected */}
      <div className="min-h-svh" aria-hidden />

      <div className="landing-page fixed inset-0 z-50 overflow-y-auto">
        <GradientBackground />
        <div className="relative flex min-h-svh flex-col">
          <LandingNavbar />
          <HeroSection />
          <FeaturesSection />
          <WellnessStats />
        </div>
      </div>
    </>
  )
}
