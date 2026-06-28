import AuthCard from '../components/auth/AuthCard'
import AuthPageLayout from '../components/auth/AuthPageLayout'
import SignupForm from '../components/auth/SignupForm'

export default function SignupPage() {
  return (
    <AuthPageLayout>
      <AuthCard
        title="Create your account"
        subtitle="A calm, private space for your emotional wellness."
      >
        <SignupForm />
      </AuthCard>
    </AuthPageLayout>
  )
}
