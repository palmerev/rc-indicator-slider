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
      <div className="demo-root">
        <h1>rc-indicator-slider Demo</h1>
        <p>Control component: rc-slider</p>
        <div className="slider-wrapper">
          <Slider
            defaultValue={this.state.value}
            onChange={this.handleOnChange}
          />
        </div>
        <p>IndicatorSlider</p>
        <div className="indicator-wrapper">
          <IndicatorSlider
            value={this.state.value}
            prefixCls="rc-indicator-slider"
            sections={4}
          />
        </div>
        <p className="description">All styles are defined in index.(s)css. The stylesheet is based on the one provided with rc-slider.</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app-container'))
