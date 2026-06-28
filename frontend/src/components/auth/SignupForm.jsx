import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'
import AuthButton from './AuthButton'
import AuthInput from './AuthInput'

function handleSubmit(e) {
  e.preventDefault()
  // Backend integration coming later
}

export default function SignupForm() {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <AuthInput
        label="Full name"
        id="fullName"
        type="text"
        autoComplete="name"
        placeholder="Your name"
        required
      />
      <AuthInput
        label="Email"
        id="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        required
      />
      <AuthInput
        label="Password"
        id="password"
        type="password"
        autoComplete="new-password"
        placeholder="Create a password"
        required
      />
      <AuthInput
        label="Confirm password"
        id="confirmPassword"
        type="password"
        autoComplete="new-password"
        placeholder="Confirm your password"
        required
      />

      <div className="pt-2">
        <AuthButton>Create account</AuthButton>
      </div>

      <p className="text-center text-sm text-slate-600">
        Already have an account?{' '}
        <Link
          to={ROUTES.LOGIN}
          className="font-semibold text-violet-700 hover:text-violet-900"
        >
          Log in
        </Link>
      </p>
    </form>
  )
}
