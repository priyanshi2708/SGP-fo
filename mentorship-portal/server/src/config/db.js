import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/mentorship_portal'
    
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    
    console.log('✅ MongoDB connected successfully')
    console.log(`📊 Database: ${mongoose.connection.name}`)
    console.log(`🔗 Connection URI: ${mongoUri.replace(/mongodb\+srv:\/\/[^:]+:[^@]+@/, 'mongodb+srv://***:***@')}`)
    
    // Connection event listeners
    mongoose.connection.on('disconnected', () => {
      console.log('⚠️  MongoDB disconnected')
    })
    
    mongoose.connection.on('error', (error) => {
      console.error('❌ MongoDB connection error:', error.message)
    })
    
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message)
    console.error('📝 Error details:', error)
    process.exit(1)
  }
}

export default connectDB
