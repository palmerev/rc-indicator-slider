import React, { PropTypes } from 'react'
import Slider from 'rc-slider'
import classnames from 'classnames'

export default class IndicatorSlider extends React.Component {
  constructor() {
    super()
  }
  render() {
    if (this.props.colors.length !== this.props.sections) {
       throw new Error('number of sections and colors must match')
    }
    let sections = [],
        colors = this.props.colors,
        numSections = this.props.sections
    for(let i = 0; i < numSections; i++) {
      let style = { backgroundColor: colors[i] }
      let uniqueClass = 'rc-slider-section-' + i;
      let classes = classnames({ 'rc-slider-section': true, uniqueClass })
      sections.push(
        <span key={i} className={classes} style={style}></span>
      )
    }
    return (
      <Slider tipFormatter={null} value={this.props.defaultValue}>
        {sections}
      </Slider>
    )
  }
}

IndicatorSlider.propTypes = {
  sections: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string),
  defaultValue: PropTypes.number
}

IndicatorSlider.defaultProps = {
  sections: 4,
  colors: ["#333", "#666", "#999", "#CCC"],
  defaultValue: 25
}
