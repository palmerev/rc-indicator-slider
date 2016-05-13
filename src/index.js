import React from 'react'
import ReactDOM from 'react-dom'
import Slider from 'rc-slider'
import IndicatorSlider from './components/IndicatorSlider'

require('./styles/index.scss')

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  handleOnChange(val) {
    this.setState({ value: val })
  }
  render() {
    return (
      <div>
        <h1>IndicatorSlider test</h1>
        <p>Control Slider</p>
        <div className="slider-wrapper">
          <Slider defaultValue={this.state.value} onChange={this.handleOnChange} />
        </div>
        <p>IndicatorSlider</p>
        <div className="indicator-wrapper">
          <IndicatorSlider value={this.state.value} onChange={this.handleOnChange} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app-container'))
