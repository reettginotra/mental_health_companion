/** Backend base URL — override in .env with VITE_API_BASE_URL */
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'
