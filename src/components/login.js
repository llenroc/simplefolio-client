import React from 'react'
import { LandingNav } from './landing-nav'
import './login.css'

export function Login () {
  return (
    <div className="login-background">
      <div className="container">
        <LandingNav/>
        <form className="login-form">
          <div className="login-message">Log in to go to your account. <span role='img' aria-label='slightly smiling emoji'>&#x1F642;</span></div>
          <div className="login-field">
            <input type="text" className="login-email" id="login-email" placeholder="email" required />
          </div>
          <div className="login-field">
            <input type="password" className="login-email" id="login-password" placeholder="password" required />
          </div>
          <div className="submit-button-container">
            <button type="submit" className='login-submit-button fade-in-out'>Let's go!</button>
          </div>
        </form>
      </div>
    </div>
  )
}