import express from 'express'
import {
  getInstitutions,
  getInstitutionById,
  createInstitution,
} from '../controllers/institutionController.js'

const router = express.Router()

// GET all institutions
router.get('/', getInstitutions)

// GET institution by ID
router.get('/:id', getInstitutionById)

// CREATE new institution
router.post('/', createInstitution)

export default router
