import AuthBackground from './AuthBackground'
import './auth.css'

export default function AuthPageLayout({ children }) {
  return (
    <section className="auth-page relative -mx-4 flex min-h-[calc(100svh-4rem)] items-center justify-center px-4 py-10 sm:-mx-0 sm:py-12">
      <AuthBackground />
      <div className="relative z-10 w-full max-w-md">{children}</div>
    </section>
  )
}
