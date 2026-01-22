import Domain from '../models/Domain.js'
import Course from '../models/Course.js'
import Mentor from '../models/Mentor.js'

export const getDashboardData = async (req, res) => {
  try {
    const domains = await Domain.countDocuments()
    const courses = await Course.countDocuments()
    const mentors = await Mentor.countDocuments()

    res.json({
      domains,
      courses,
      mentors,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getDomains = async (req, res) => {
  try {
    const domains = await Domain.find()
    res.json(domains)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find()
    res.json(mentors)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('domainId')
    res.json(courses)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
