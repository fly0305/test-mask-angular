# React Input Mask

## Getting started

First, install it.

```bash
npm i @msafi/react-text-mask --save
```

Then, require it and use it.

```js
var React = require('react')
var MaskedInput = require('@msafi/react-text-mask')

var MyComponent = React.createClass({
  render() {
    return (
      <div>
        <MaskedInput mask="(111) 111-1111" />
      </div>
    )
  }
})
```

`<MaskedInput/>` is fully compatible with `<input/>` element. So, you can
pass to it CSS classes, a placeholder attribute, or whatever.

For example, the following works:

```html
<MaskedTextInput
  mask="11111"
  className="form-control"
  placeholder="Enter zip code"
  id="my-input-id"
/>
```

## Example

For a working example, check out the source code of
[this HTML file](https://msafi.github.io/text-mask/integrations/react/example.html).

## Source code

The source code for React Text Mask is [available here](https://github.com/msafi/text-mask/tree/master/integrations/react).

## License

Public domain - [CC0 1.0 Universal (CC0 1.0)](https://creativecommons.org/publicdomain/zero/1.0/)
