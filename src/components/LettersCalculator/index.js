import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {status: 0}

  onchangeEvent = event => {
    if (event.target.value.length !== 0) {
      this.setState({status: event.target.value.length})
    } else {
      this.setState({status: 0})
    }
  }

  render() {
    const {status} = this.state
    return (
      <div className="main-container">
        <div className="Container-1">
          <h1>Calculate the Letters you enter </h1>

          <label htmlFor="search-input">Enter the phrase</label>
          <input
            type="search"
            id="search-input"
            placeholder="Enter the phrase"
            onChange={this.onchangeEvent}
          />

          <p className="para">No.of letters: {status}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
