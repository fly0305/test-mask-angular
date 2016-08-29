# Angular 2 Input Mask
This Angular 2 Directive is also compatible with Ionic 2 `ion-input`.

## Getting started

First, install it.

```bash
npm i angular2-text-mask --save
```

Then, require it and use it:

```typescript
import {Component} from '@angular/core';
import MaskedInput from 'angular2-text-mask'

@Component({
  selector: 'app',
  template: `
    <input [textMask]="{mask: mask}" [(ngModel)]="myModel" type="text"/>
  `,
  directives: [MaskedInput]
})
export class SomeComponent {
  public myModel = ''
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
}
```

## Documentation

As you can see in the code above, you are passing an object to the `textMask` directive.

&#x1F4CD; For more information about the values that the `textMask` object accepts, see 
**[this page](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme)**.

#### Other use-cases

##### Unmasking the value that is stored in the model

Text Mask does not provide an option to unmask the model before storing it. You can sanitize the model on your
side. See [here](https://github.com/text-mask/text-mask/issues/109) for details.

## Example

To see an example of the code running, follow these steps:

1. Clone the repo, `git clone git@github.com:text-mask/text-mask.git`
1. `cd text-mask`
1. `npm install`
1. `npm run angular2:dev`
1. Open [http://localhost:3000](http://localhost:3000)

The code of the example is in [`angular2/example`](https://github.com/text-mask/text-mask/tree/master/angular2/example).

## Contributing

We would love some contributions! Check out [this document](https://github.com/text-mask/text-mask/blob/master/howToContribute.md#readme) to get started.

## License

Public domain - [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)
