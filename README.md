# rc-indicator-slider
React slider with optional colored background sections. Based on https://github.com/react-component/slider

## Basic Example
This component renders an instance of rc-slider with several default props that make it function more like an indicator. It takes advantage of rc-slider's ability to render children and can render each child (a `<span>` element) with a different background color (or potentially other styles applied to the childrens' class names). For example, you can do something like the following:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import IndicatorSlider from './IndicatorSlider'

...

ReactDOM.render(
  <IndicatorSlider
  value={this.state.someValue}
  onChange={this.someHandlerFunction}
/>,
  document.getElementById('app-container')
)
```

For reference, the props for `rc-slider` are given below:

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>className</td>
          <td>String</td>
          <td>rc-slider</td>
          <td>Additional css class for the root dom node</td>
        </tr>
        <tr>
          <td>min</td>
          <td>number</td>
          <td>0</td>
          <td>The minimum value of the slider</td>
        </tr>
        <tr>
          <td>max</td>
          <td>number</td>
          <td>100</td>
          <td>The maximum value of the slider</td>
        </tr>
        <tr>
          <td>marks</td>
          <td>object{number: string} or object{number: object{ style, label }}</td>
          <td>{}</td>
          <td>Mark on the slider. The key determines the position, and the value determines what will show. If you want to set the style of a specific mark point, the value should be an object which contains `style` and `label` properties.</td>
        </tr>
        <tr>
          <td>step</td>
          <td>number or `null`</td>
          <td>1</td>
          <td>Value to be added or subtracted on each step the slider makes. Must be greater than zero. max - min should be evenly divisible by the step value. When `marks` is not an empty object, `step` can be set to `null`, to make marks as steps.</td>
        </tr>
        <tr>
          <td>range</td>
          <td>boolean</td>
          <td>false</td>
          <td>Determines the type of slider. If range is `true`, two handles will be rendered in order to select a range.</td>
        </tr>
        <tr>
          <td>allowCross</td>
          <td>boolean</td>
          <td>true</td>
          <td>When `range` is `true`, `allowCross` could be set as `true` to allow those two handles cross.</td>
        </tr>
        <tr>
          <td>vertical</td>
          <td>boolean</td>
          <td>false</td>
          <td>If vertical is `true`, the slider will be vertical.</td>
        </tr>
        <tr>
          <td>defaultValue</td>
          <td>number or [number, number]</td>
          <td>0 or [0, 0]</td>
          <td>Set initial positions of handles. If range is `false`, the type of `defaultValue` should be `number`. Otherwise, `[number, number]`</td>
        </tr>
        <tr>
          <td>value</td>
          <td>number or [number, number]</td>
          <td></td>
          <td>Set current positions of handles. If range is `false`, the type of `defaultValue` should be `number`. Otherwise, `[number, number]`</td>
        </tr>
        <tr>
          <td>included</td>
          <td>boolean</td>
          <td>true</td>
          <td>If the value is `true`, it means a continuous value interval, otherwise, it is a independent value.</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>boolean</td>
          <td>false</td>
          <td>If `true`, handles can't be moved.</td>
        </tr>
        <tr>
          <td>tipTransitionName</td>
          <td>string</td>
          <td>''</td>
          <td>Set the animation for tooltip if it shows.</td>
        </tr>
        <tr>
          <td>tipFormatter</td>
          <td>function or `null`</td>
          <td></td>
          <td>Format the value of the tooltip if it shows. If `null` the tooltip will always be hidden.</td>
        </tr>
        <tr>
          <td>dots</td>
          <td>bool</td>
          <td>false</td>
          <td>When the `step` value is greater than 1, you can set the `dots` to  `true` if you want to render the slider with dots.</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>function</td>
          <td>NOOP</td>
          <td>`onChange` will be triggered while the value of Slider changing.</td>
        </tr>
        <tr>
          <td>onAfterChange</td>
          <td>function</td>
          <td>NOOP</td>
          <td>`onAfterChange` will be triggered when `ontouchend` or `onmouseup` is triggered.</td>
        </tr>
    </tbody>
</table>

**The prefixCls prop**

`rc-slider` also defines an undocumented `prefixCls` prop, which is used as the prefix for all class names in the rendered DOM output. By default `rc-slider` sets this to "rc-slider". `rc-indicator-slider` overrides this and sets it to "rc-indicator-slider", generating class names. Pass the `prefixCls` prop if you want to define different class names in your stylesheets.

`rc-indicator-slider` will render an `rc-slider` with the following changes to props:

- `props.tipFormatter` will be `null` (no tooltip will be displayed)
- `props.children` will be populated with `<span>` elements (see **children** section below)


## children
