import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { LandingNav } from './landing-nav'
import './landing-page-top-section.css'
import { connect } from 'react-redux'
import { login } from '../actions/auth'

class LandingPageTopSection extends React.Component {
  tryDemo () {
    // there are 10 demo accounts
    // we pick a random one and then log the user in to try it out
    const randomDemoAccountNumber = Math.floor(Math.random() * 10)
    const demoAccountName = 'demo' + randomDemoAccountNumber
    console.log(`logging into ${demoAccountName}`)
    this.props.dispatch(login(demoAccountName, 'trydemoaccount'))
  }

  render () {
    const pieChartSvg =
      <svg width='251' height='250' viewBox='0 0 251 250' xmlns='http://www.w3.org/2000/svg'>
        {/* Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch */}
        <g id='Landing-Page' fill='none' fillRule='evenodd'>
          <g id='preview' transform='translate(-562 -426)'>
            <g id='pie-chart' transform='translate(563 426)'>
              <circle id='Oval' fill='#F7D633' cx='125' cy='125' r='125'/>
              <path d='M126.774623,117.369886 L96.473374,243.834127' id='Line-4' stroke='#A084D1'
                    strokeWidth='3' strokeLinecap='square'/>
              <path d='M124.26746,117.349498 L1.14860984,122.617057' id='Line-5' stroke='#A084D1'
                    strokeWidth='3' strokeLinecap='square'/>
              <path d='M232.128568,190.323276 L28.7437914,47.9710388' id='Line-6' stroke='#A084D1'
                    strokeWidth='3' strokeLinecap='square'/>
            </g>
          </g>
        </g>
      </svg>

    return (
      <div className="background-top">
        <div className="container">
          <LandingNav/>
          <div className="landing-message">
            <div className="landing-pie-chart">
              {pieChartSvg}
            </div>
            <div className="landing-copy-and-button">
              <div className="landing-copy-top">
                A simple cryptocurrency portfolio for those
                who don’t want to get bogged down with
                complicated features.
              </div>
              <Link to={'/signup'}>
                <button className="get-started fade-in-out">Get Started</button>
              </Link>
              <button className="try-demo fade-in-out" onClick={() => this.tryDemo()}>or try a demo</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const ConnectedLandingPageTopSection = withRouter(connect()(LandingPageTopSection))