import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import dashboardRoutes from './routes/dashboardRoutes.js'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Database Connection
connectDB()

// Routes
app.use('/api', dashboardRoutes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

export default app
