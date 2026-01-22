import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './pages/Dashboard/Dashboard'
import Domains from './pages/Domains/Domains'
import Mentors from './pages/Mentors/Mentors'

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/domains" element={<Domains />} />
              <Route path="/mentors" element={<Mentors />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  )
}

export default App
