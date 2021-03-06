import React from 'react'
import { Link } from 'react-router-dom'
import './landing-nav.css'

export function LandingNav () {
  return (
    <nav className='landing-nav'>
      <Link to={'/'}>
        <div className="site-logo fade-in-out">Simplefol.io</div>
      </Link>
      <div className="nav-buttons">
        <Link to={'/login'}>
          <button className="login fade-in-out">Login</button>
        </Link>
        <Link to={'/signup'}>
          <button className="signup fade-in-out">Sign Up</button>
        </Link>
      </div>
    </nav>
  )
}