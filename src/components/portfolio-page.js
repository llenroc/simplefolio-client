import React from 'react'
import ConnectedUserNav from './user-nav'
import { connect } from 'react-redux'
import { formatPortfolioAndPieChart, getPriceDataAndFormatPortfolio, editPortfolioToggle, getPortfolio } from '../actions'
import { withRouter } from 'react-router-dom'
import { ConnectedPortfolio } from './portfolio'
import ConnectedEditPortfolio from './edit-portfolio'
import './portfolio-page.css'

// const samplePortfolio = [
//   {id: 1, quantity: 0.1},
//   {id: 1230, quantity: 150}
// ]

class PortfolioPage extends React.Component {
  componentDidMount () {
    this.props.getPortfolio()
  }

  render () {
    return (
      <div className='portfolio-container container'>
        <ConnectedUserNav/>
        {this.props.editPortfolio ? <ConnectedEditPortfolio/> : <ConnectedPortfolio/>}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loading: state.index.loading,
    cryptoPriceData: state.index.cryptoPriceData,
    formattedPortfolioList: state.index.formattedPortfolioList,
    pieChartData: state.index.pieChartData,
    editPortfolio: state.index.editPortfolio
  }
}

const mapDispatchToProps = {
  getPriceDataAndFormatPortfolio,
  formatPortfolioAndPieChart,
  editPortfolioToggle,
  getPortfolio
}

export const ConnectedPortfolioPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(PortfolioPage))