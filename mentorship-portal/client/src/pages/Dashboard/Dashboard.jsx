import React, { useState, useEffect } from 'react'
import { dashboardAPI } from '../../services/api'
import Loader from '../../components/common/Loader'

const Dashboard = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await dashboardAPI.getDashboardData()
        setData(response.data)
      } catch (err) {
        setError(err.message || 'Failed to fetch data')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <Loader />

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      {error && <div className="error-message">{error}</div>}
      {data && (
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Domains</h3>
            <p className="stat-value">{data.domains}</p>
          </div>
          <div className="stat-card">
            <h3>Total Courses</h3>
            <p className="stat-value">{data.courses}</p>
          </div>
          <div className="stat-card">
            <h3>Total Mentors</h3>
            <p className="stat-value">{data.mentors}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
