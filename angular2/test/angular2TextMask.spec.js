require('ts-node').register({project: './angular2/'}) // Allows us to load a TypeScript file

import 'reflect-metadata'
import packageJson from '../package.json'

const MaskedInput = (isVerify()) ?
  require(`../${packageJson.main}`).MaskedInputDirective :
  require('../src/angular2TextMask.ts').MaskedInputDirective

describe('MaskedInput', () => {
  let inputElement
  let ngModel
  let renderer

  beforeEach(() => {
    inputElement = document.createElement('input')
    renderer = {}
  })

  it('does not throw when instantiated', () => {
    expect(() => {
      const maskedInput = new MaskedInput(renderer, {nativeElement: inputElement}, ngModel)

      maskedInput.ngOnInit({mask: '(111)'})

      return maskedInput
    }).not.to.throw()
  })
})
