# Text Mask Core

This module contains the core functions that power Text Mask. Currently, Text Mask
has a wrapper for React, which can be used directly.

However, Text Mask Core functions could be useful on their own. That's why they are published
and documented here as a separate module.

## Getting started

To download the script, use npm.

```
npm i @msafi/text-mask-core --save
```

### Include it

After installing with npm, you could possibly do something like this from your `index.html`:

```html
<script src="./node_modules/@msafi/text-mask-core/dist/textMaskCore.js"></script>
```

Including this file in your source code will expose the global object `textMaskCore`.

Or if you're using Node.js or a bundler such as webpack or Browserify, you can require
`textMaskCore` as such:

```js
var textMaskCore = require('@msafi/text-mask-core')
```

## How to use

`textMaskCore` exposes three functions:

* conformToMask
* adjustCaretPosition
* convertMaskToPlaceholder

### Overview

The general idea is to take user input, conform it to your desired mask using `conformToMask`,
and then apply the output of `conformToMask` to the value of the HTML input element.
Once you do that however, the caret position will be lost. You can then use `adjustCaretPosition`
to restore the caret to its proper position.

To learn more about how to do that, see the API documentation below:

## API documentation

### `convertMaskToPlaceholder(mask)`

This function takes a mask (string), i.e. `11/11/1111`, and returns a placeholder (string).

```
const placeholder = convertMaskToPlaceholder('11/11/1111')

placeholder // __/__/____
```

You can use this function to initialize an `input` element to a placeholder value.

---

### `conformToMask(userInput, mask)`

This function takes two arguments:

* userInput (string): the string value that you want to conform to the mask
* mask (string): the mask to which you want the string to conform

And it returns an object that contains the conformed string as well as other meta-data.

```
const results = conformToMask('5554833902', '(111) 111-1111')

results // {output: '(555) 483-3902', mask: '(111) 111-1111'}
```

Whenever the value of the `input` element changes, you can pass that value to `conformToMask`
and it'll make sure that the string looks like the given mask. You can then set that conformed
string as the new value of the `input` element.

---

### `adjustCaretPosition(argumentsObject)`

When you set the value of the `input` element, you lose the position of the caret. This function
helps you restore the position.

`adjustCaretPosition` takes the following object of arguments:

* previousInput (string): the string value of the `input` before the last time you set its value
* conformedToMaskResults (object): the return value of the last call to `conformToMask`
* currentCaretPosition (integer): the position of the caret before the last time you set `input` value

`adjustCaretPosition` will diff the new input and the previous input to
guess where the caret should be.

## License

Public domain - [CC0 1.0 Universal (CC0 1.0)](https://creativecommons.org/publicdomain/zero/1.0/)
