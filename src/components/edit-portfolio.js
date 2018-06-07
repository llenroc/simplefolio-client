import React from 'react'
import './sign-up.css'
import { editPortfolioToggle, getCryptoListings } from '../actions'
import { connect } from 'react-redux'
import './edit-portfolio.css'

class EditPortfolio extends React.Component {
  constructor (props) {
    super(props)

    let holdings = {}
    this.props.portfolioData.forEach(crypto => holdings[crypto.name] = crypto)

    this.state = {
      portfolio: holdings,
      dropdown: 'Pick Cryptocurrency'
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addCrypto = this.addCrypto.bind(this)
  }

  componentDidMount () {
    this.props.getCryptoListings()
    console.log(this.state)
  }

  handleInputChange (event) {
    const value = event.target.value
    const name = event.target.name

    if (name === 'dropdown')
      this.setState({
        dropdown: value
      })
    else
      this.setState(prevState => ({
        portfolio: {
          ...prevState.portfolio,
          [name]: {
            ...prevState.portfolio[name],
            quantity: value
          }
        }
      }))
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log(this.state)
  }

  addCrypto () {
    const name = this.state.dropdown
    const dataFromListing = this.props.cryptoListings.find(crypto => crypto.name === name)

    this.setState(prevState => ({
      portfolio: {
        ...prevState.portfolio,
        [name]: {
          id: dataFromListing.id,
          name,
          symbol: dataFromListing.symbol,
          quantity: 0
        }
      }
    }))
  }

  // TODO prevent user from picking same crypto multiple times in add menu

  render () {
    let portfolioKeys = Object.keys(this.state.portfolio)
    let editPortfolioFields = portfolioKeys.map((key, index) => {
      return (
        <div className='edit-portfolio-field' key={index}>
          {this.state.portfolio[key].name}
          <div className="edit-input-container">
            <input
              name={this.state.portfolio[key].name}
              type="number"
              value={this.state.portfolio[key].quantity}
              onChange={this.handleInputChange}/>&nbsp;
            {this.state.portfolio[key].symbol}
            {/* x to close div goes here*/}
          </div>
        </div>
      )
    })

    let cryptoDropdownOptions = []
    if (this.props.cryptoListings) {
      let cryptoNames = this.props.cryptoListings.map(cryptoData => cryptoData.name).sort()
      cryptoDropdownOptions = cryptoNames.map((name, index) => <option key={index} value={name}>{name}</option>)
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="title-and-button">
          <div className="portfolio-title">Portfolio</div>
          <button className="edit fade-in-out">
            Cancel
          </button>
          <button className="edit fade-in-out">
            Save
          </button>
        </div>
        <div className="edit-portfolio">
          {editPortfolioFields}
          <div className="dropdown-container">
            <select value={this.state.dropdown} onChange={this.handleInputChange} className='dropdown' name='dropdown'>
              <option value="Pick Cryptocurrency" disabled>Pick Cryptocurrency</option>
              {cryptoDropdownOptions}
            </select>
            <button type='button' className="edit fade-in-out" onClick={this.addCrypto}>Add</button>
          </div>
        </div>
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {
    portfolioData: state.index.portfolioData,
    cryptoListings: state.index.cryptoListings,
  }
}

const mapDispatchToProps = {
  editPortfolioToggle,
  getCryptoListings
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPortfolio)
