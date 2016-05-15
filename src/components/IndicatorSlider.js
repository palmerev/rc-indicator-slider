import React, { PropTypes } from 'react'
import Slider from 'rc-slider'
import classnames from 'classnames'

export default class IndicatorSlider extends React.Component {
  constructor() {
    super()
  }
  render() {
    const {prefixCls, value, colors, sections} = this.props
    if (colors && colors.length && colors.length !== sections) {
       throw new Error('number of sections and colors must match')
    }
    let sectionList = Array.from(Array(sections).keys()).map(
      (sectionNum) => {
        let classes = classnames({
            [`${prefixCls}-section`]: true,
            [`${prefixCls}-section-${sectionNum+1}`]: true
        })
        if (colors) {
          let style = { backgroundColor: colors[sectionNum+1] }
          return (<span key={sectionNum} className={classes} style={style}></span>)
        }
        else {
            return (<span key={sectionNum} className={classes}></span>)
        }
      }
    )
    return (
      <Slider
        prefixCls={prefixCls}
        tipFormatter={null}
        value={value}
      >
        {sectionList}
      </Slider>
    )
  }
}

IndicatorSlider.propTypes = {
  prefixCls: PropTypes.string,
  sections: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.number
}

IndicatorSlider.defaultProps = {
  prefixCls: "rc-indicator-slider",
  sections: 4,
  value: 0
}
