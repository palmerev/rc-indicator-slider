# rc-indicator-slider
React slider with optional colored background sections. Based on https://github.com/react-component/slider

## Usage
This component renders an instance of rc-slider with several default props that make it function more like an indicator. It takes advantage of rc-slider's ability to render children and can render each child (a `<span>` element) with a different background color (or potentially other styles applied to the childrens' class names). For example, you can do something like the following:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import IndicatorSlider from './IndicatorSlider'

...

ReactDOM.render(
  <IndicatorSlider
    value={this.state.someValue}
    prefixCls="some-class-name"
    sections={4}
  />,
  document.getElementById('app-container')
)
```

The example component includes the following props:
- `value` (number): the value of the slider
- `prefixCls` (optional string, default: 'rc-indicator-slider'): the prefix for all class names in the DOM output
- sections (number): the number of sections (children) to give the component

For reference, the props for `rc-slider` are given below.

In a real application, you will probably want to render more than just this component alone. The demo [here]() shows an example of using another component to control some state, while the IndicatorSlider reflects the state, but can't be manipulated directly. You can also examine the DOM to see the differences between the output of `rc-slider` and `rc-indicator-slider`.

**rc-slider props API**

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

`rc-slider` also defines an undocumented `prefixCls` prop, which is used as the prefix for all class names in the rendered DOM output. By default `rc-slider` sets this to "rc-slider". `rc-indicator-slider` overrides this and sets it to "rc-indicator-slider". Passing the `prefixCls` prop is useful if you want to define different class names in your CSS.

`rc-indicator-slider` will render an `rc-slider` with the following changes to props:

- `rc-slider`'s `props.tipFormatter` will be `null` (no tooltip will be displayed)
- `rc-slider`'s `props.children` will be populated with `<span>` elements based on the value of the 'sections' prop (see [Children](#children) section below)
- You should prefer applying styles using CSS classes (see the generated class names below), but inline background-color styles can be defined for each section, if desired. Pass a `colors` prop with an array of CSS color values as strings, and these will be applied to each section's backgroundColor property in the order they are given.

## Children

`rc-indicator-slider` renders an `rc-slider` component with `<span>` elements added as children:

```javascript
<Slider
  prefixCls={prefixCls}
  tipFormatter={null}
  value={value}
>
  {children}
</Slider>
```

**Number of children**

The number of children will be determined by the length of the `colors` array, if it is defined and contains at least one item. Otherwise, it will fall back to using the `sections` prop. Thus, you must pass either `colors` or `sections`, but if you pass both, the length of `colors` will be used. If you pass neither, no children will be generated.

**Child elements' class names**

The generated child elements will have class names `prefixCls-section` and `prefixCls-section-i`, where `prefixCls` is the value of the `prefixCls` prop and `i` is a number between 1 and the number of children, (incremented for each element). With the default `prefixCls` and `sections={4}`:

```html
<div class="rc-indicator-slider">
  ...
  <span class="rc-indicator-slider-section rc-indicator-slider-section-1"></span>
  <span class="rc-indicator-slider-section rc-indicator-slider-section-2"></span>
  <span class="rc-indicator-slider-section rc-indicator-slider-section-3"></span>
  <span class="rc-indicator-slider-section rc-indicator-slider-section-4"></span>
</div>
```

## Rendered output

Besides the additional `<span>` elements, the component produces similar output to `rc-slider`, with the default `prefixCls` changed to "rc-indicator-slider".

```xml
<IndicatorSlider
  value={someValue}
  prefixCls="rc-indicator-slider"
  sections={4}
/>
```

renders to:

```html
<div class="rc-indicator-slider">
  <div style="left: 0%;" class="rc-indicator-slider-handle"></div>
  <div style="visibility: visible; left: 0%; width: 0%;" class="rc-indicator-slider-track"></div>
  <div class="rc-indicator-slider-step"></div>
  <div class="rc-indicator-slider-mark"></div>
  <span class="rc-indicator-slider-section rc-indicator-slider-section-1"></span>
  <span class="rc-indicator-slider-section rc-indicator-slider-section-2"></span>
  <span class="rc-indicator-slider-section rc-indicator-slider-section-3"></span>
  <span class="rc-indicator-slider-section rc-indicator-slider-section-4"></span>
</div>
```

If the `colors` prop is passed, each color is added to the `style` attribute of the `<span>` elements

```html
<span style="background-color: rgb(239, 94, 63);" ...></span>
```

### Style examples

With the HTML output from above, it's easy to style each `<span>` through CSS:

```css
rc-indicator-slider-section {
  height:20px;
  width: 25%;
}
rc-indicator-slider-section-1 {
  background-color: #b5441d;
}
rc-indicator-slider-section-2 {
  background-color: #dc6632;
}
rc-indicator-slider-section-3 {
  background-color: #eadd69;
}
rc-indicator-slider-section-4 {
  background-color: #eee597;
}
```


Licensed under the MIT license.
