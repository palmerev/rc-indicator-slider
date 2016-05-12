import React from 'react'
import ReactDOM from 'react-dom'
import IndicatorSlider from './components/IndicatorSlider'

require('./styles/index.scss')

const App = () => {
  return (
    <div>
      <p>IndicatorSlider test</p>
      <IndicatorSlider />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app-container'))
