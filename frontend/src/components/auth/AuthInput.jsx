export default function AuthInput({
  label,
  id,
  type = 'text',
  autoComplete,
  placeholder,
  ...props
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/80 bg-white/60 px-4 py-3 text-slate-800 shadow-sm ring-1 ring-violet-100/50 backdrop-blur-sm transition placeholder:text-slate-400 focus:border-violet-300 focus:bg-white/80 focus:outline-none focus:ring-2 focus:ring-violet-300/40"
        {...props}
      />
    </div>
  )
}
