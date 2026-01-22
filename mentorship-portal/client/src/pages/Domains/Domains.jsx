import React, { useState, useEffect } from 'react'
import { dashboardAPI } from '../../services/api'
import Loader from '../../components/common/Loader'

const Domains = () => {
  const [domains, setDomains] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        setLoading(true)
        const response = await dashboardAPI.getDomains()
        setDomains(response.data)
      } catch (err) {
        setError(err.message || 'Failed to fetch domains')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchDomains()
  }, [])

  if (loading) return <Loader />

  return (
    <div className="domains">
      <h2>Domains</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Domain Name</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {domains.length > 0 ? (
              domains.map((domain) => (
                <tr key={domain._id}>
                  <td>{domain.name}</td>
                  <td>{domain.description}</td>
                  <td>{domain.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No domains found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Domains
