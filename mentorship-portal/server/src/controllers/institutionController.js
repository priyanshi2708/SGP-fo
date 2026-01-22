import Institution from '../models/Institution.js'

export const getInstitutions = async (req, res) => {
  try {
    console.log('📊 Fetching institutions from database...')
    const institutions = await Institution.find()
    
    res.json({
      data: institutions,
      count: institutions.length,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('❌ Institutions error:', error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getInstitutionById = async (req, res) => {
  try {
    const { id } = req.params
    console.log(`📊 Fetching institution with ID: ${id}`)
    
    const institution = await Institution.findById(id)
    
    if (!institution) {
      return res.status(404).json({ error: 'Institution not found' })
    }
    
    res.json({
      data: institution,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('❌ Institution error:', error.message)
    res.status(500).json({ error: error.message })
  }
}

export const createInstitution = async (req, res) => {
  try {
    const { name, location, domains, established, website, description, status } = req.body
    
    // Validate required fields
    if (!name || !location || !domains || !Array.isArray(domains)) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, location, domains (array)' 
      })
    }
    
    console.log(`📝 Creating new institution: ${name}`)
    
    const institution = new Institution({
      name,
      location,
      domains,
      established,
      website,
      description,
      status
    })
    
    await institution.save()
    
    res.status(201).json({
      data: institution,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('❌ Creation error:', error.message)
    res.status(500).json({ error: error.message })
  }
}
