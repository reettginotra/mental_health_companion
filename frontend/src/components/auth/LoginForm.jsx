import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'
import AuthButton from './AuthButton'
import AuthInput from './AuthInput'

function handleSubmit(e) {
  e.preventDefault()
  // Backend integration coming later
}

export default function LoginForm() {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
        autoComplete="current-password"
        placeholder="••••••••"
        required
      />

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <label className="flex cursor-pointer items-center gap-2 text-slate-600">
          <input
            type="checkbox"
            name="remember"
            className="h-4 w-4 rounded border-violet-200 text-violet-600 focus:ring-violet-400/40"
          />
          Remember me
        </label>
        <button
          type="button"
          className="font-medium text-violet-700 transition-colors hover:text-violet-900"
        >
          Forgot password?
        </button>
      </div>

      <AuthButton>Log in</AuthButton>

      <p className="text-center text-sm text-slate-600">
        No account?{' '}
        <Link
          to={ROUTES.SIGNUP}
          className="font-semibold text-violet-700 hover:text-violet-900"
        >
          Sign up
        </Link>
      </p>
    </form>
  )
}
