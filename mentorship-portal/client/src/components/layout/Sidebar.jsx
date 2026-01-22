import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">Dashboard</Link>
        <Link to="/domains" className="sidebar-link">Domains</Link>
        <Link to="/mentors" className="sidebar-link">Mentors</Link>
        <Link to="/institutions" className="sidebar-link">Institutions</Link>
      </nav>
    </aside>
  )
}

export default Sidebar
