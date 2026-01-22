import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-title">🎓 Mentorship Portal</h1>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <span>Profile</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
