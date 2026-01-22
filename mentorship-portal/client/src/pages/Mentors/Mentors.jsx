import React, { useState, useEffect } from 'react'
import { dashboardAPI } from '../../services/api'
import Loader from '../../components/common/Loader'

const Mentors = () => {
  const [mentors, setMentors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        setLoading(true)
        const response = await dashboardAPI.getMentors()
        setMentors(response.data)
      } catch (err) {
        setError(err.message || 'Failed to fetch mentors')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchMentors()
  }, [])

  if (loading) return <Loader />

  return (
    <div className="mentors">
      <h2>Mentors</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Expertise</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            {mentors.length > 0 ? (
              mentors.map((mentor) => (
                <tr key={mentor._id}>
                  <td>{mentor.name}</td>
                  <td>{mentor.email}</td>
                  <td>{mentor.expertise}</td>
                  <td>{mentor.experience} years</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No mentors found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Mentors
