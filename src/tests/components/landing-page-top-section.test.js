import React from 'react'
import { shallow } from 'enzyme'

import { ConnectedLandingPageTopSection as LandingPageTopSection } from '../../components/landing-page-top-section'

describe('<LandingPageTopSection />', () => {
  it('Renders without crashing', () => {
    shallow(<LandingPageTopSection/>)
  })
})