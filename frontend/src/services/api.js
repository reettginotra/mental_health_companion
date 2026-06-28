import axios from 'axios'
import { API_BASE_URL } from '../config/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * Check if the backend is running (GET /health).
 * Returns response data on success; throws on failure.
 */
export async function checkHealth() {
  const response = await api.get('/health')
  return response.data
}

export default api
