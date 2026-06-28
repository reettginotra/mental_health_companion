import { motion } from 'framer-motion'

export default function AuthButton({ children, type = 'submit' }) {
  return (
    <motion.button
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-400/30 ring-1 ring-violet-400/20 transition-[box-shadow] duration-300 hover:from-violet-500 hover:to-indigo-500 hover:shadow-xl hover:shadow-violet-400/40"
    >
      {children}
    </motion.button>
  )
}
