import AuthCard from '../components/auth/AuthCard'
import AuthPageLayout from '../components/auth/AuthPageLayout'
import LoginForm from '../components/auth/LoginForm'

export default function LoginPage() {
  return (
    <AuthPageLayout>
      <AuthCard
        title="Welcome back"
        subtitle="Sign in to continue your wellness journey."
      >
        <LoginForm />
      </AuthCard>
    </AuthPageLayout>
  )
}
