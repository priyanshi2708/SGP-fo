import express from 'express'
import {
  getDashboardData,
  getDomains,
  getMentors,
  getCourses,
} from '../controllers/dashboardController.js'

const router = express.Router()

router.get('/dashboard', getDashboardData)
router.get('/domains', getDomains)
router.get('/mentors', getMentors)
router.get('/courses', getCourses)

export default router
