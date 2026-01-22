import app from './app.js'

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('🚀 Server Information:')
  console.log(`   Port: ${PORT}`)
  console.log(`   Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log(`   Server is running on http://localhost:${PORT}`)
})
