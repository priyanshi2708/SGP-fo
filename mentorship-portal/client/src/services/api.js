import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const dashboardAPI = {
  getDashboardData: () => apiClient.get('/dashboard'),
  getDomains: () => apiClient.get('/domains'),
  getMentors: () => apiClient.get('/mentors'),
}

export const institutionAPI = {
  getInstitutions: () => apiClient.get('/institutions'),
  getInstitutionById: (id) => apiClient.get(`/institutions/${id}`),
  createInstitution: (data) => apiClient.post('/institutions', data),
}

export default apiClient
