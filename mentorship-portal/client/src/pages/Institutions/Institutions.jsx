import { useState, useEffect } from 'react'
import { institutionAPI } from '../../services/api'

function Institutions() {
  const [institutions, setInstitutions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchInstitutions()
  }, [])

  const fetchInstitutions = async () => {
    try {
      setLoading(true)
      setError(null)
      console.log('📊 Fetching institutions...')
      
      const response = await institutionAPI.getInstitutions()
      console.log('✅ Institutions fetched:', response.data)
      
      setInstitutions(response.data.data || [])
    } catch (err) {
      console.error('❌ Error fetching institutions:', err)
      setError(err.response?.data?.error || 'Failed to fetch institutions')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Loading institutions...</h2>
        <p>Connecting to database...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>⚠️ Error</h2>
        <p style={{ color: 'red' }}>{error}</p>
        <button onClick={fetchInstitutions} style={{ marginTop: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>
          Retry
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🏫 Institutions</h1>
      
      {institutions.length === 0 ? (
        <p>No institutions found. Please run the scraper first.</p>
      ) : (
        <div>
          <p style={{ marginBottom: '1.5rem', color: '#666' }}>
            Total institutions: <strong>{institutions.length}</strong>
          </p>
          
          {institutions.map((institution) => (
            <div 
              key={institution._id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                backgroundColor: '#f9f9f9',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <h2 style={{ marginTop: 0, color: '#333' }}>
                {institution.name}
              </h2>
              
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>📍 Location:</strong> {institution.location}
              </p>
              
              {institution.established && (
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>📅 Established:</strong> {institution.established}
                </p>
              )}
              
              {institution.description && (
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>📝 Description:</strong> {institution.description}
                </p>
              )}
              
              {institution.website && (
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>🌐 Website:</strong>{' '}
                  <a 
                    href={institution.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#0066cc' }}
                  >
                    {institution.website}
                  </a>
                </p>
              )}
              
              <div style={{ marginTop: '1rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>🎓 Domains & Fields of Study:</h3>
                {institution.domains && institution.domains.length > 0 ? (
                  <ul style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '0.5rem',
                    listStyle: 'none',
                    padding: 0
                  }}>
                    {institution.domains.map((domain, idx) => (
                      <li 
                        key={idx}
                        style={{
                          backgroundColor: '#e3f2fd',
                          padding: '0.75rem',
                          borderRadius: '4px',
                          border: '1px solid #90caf9'
                        }}
                      >
                        ✓ {domain}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ color: '#999' }}>No domains listed</p>
                )}
              </div>
              
              <div style={{ marginTop: '1rem' }}>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: institution.status === 'active' ? '#4caf50' : '#f44336',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: 'bold'
                }}>
                  {institution.status?.toUpperCase() || 'ACTIVE'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Institutions
