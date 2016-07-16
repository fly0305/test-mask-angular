import testParameters, {noGuideMode} from './../../common/testParameters.js'
import dynamicMaskTests from './../../common/dynamicMaskTests.js'
import {convertMaskToPlaceholder} from '../src/utilities.js'
import {placeholderChar} from '../src/constants.js'
import packageJson from '../package.json'

const adjustCaretPosition = (isVerify()) ?
  require(`../${packageJson.main}`).adjustCaretPosition :
  require('../src/adjustCaretPosition.js').default

describe('adjustCaretPosition', () => {
  it('places the caret after the last change when operation is addition', () => {
    expect(adjustCaretPosition({
      previousConformedValue: '3333',
      placeholderChar,
      conformedValue: '2938',
      placeholder: convertMaskToPlaceholder('1111'),
      rawValue: '2938',
      currentCaretPosition: 4
    })).to.equal(4)
  })

  it('sets the caret back in order to prevent it from moving when the change ' +
    'has not actually modified the output and the operation is not deletion', () => {
    expect(adjustCaretPosition({
      previousConformedValue: '(123) ___-____',
      conformedValue: '(123) ___-____',
      rawValue: '(123) ___-f____',
      placeholder: convertMaskToPlaceholder('(111) 111-1111'),
      placeholderChar,
      currentCaretPosition: 11
    })).to.equal(10)
  })

  it('moves the caret to the nearest placeholder character if the previous input and new ' +
    'conformed output are the same but the reverted position is not a ' +
    'placeholder character', () => {
    expect(adjustCaretPosition({
      previousConformedValue: '(___)      ___-____',
      conformedValue: '(___)      ___-____',
      rawValue: '(___))      ___-____',
      placeholder: convertMaskToPlaceholder('(111)      111-1111'),
      placeholderChar,
      currentCaretPosition: 5
    })).to.equal(11)
  })

  it('knows to move the caret back when the previousInput and conformToMaskResults output ' +
    'are identical but the operation is deletion', () => {
    expect(adjustCaretPosition({
      previousConformedValue: '(123) ___-____',
      conformedValue: '(123) ___-____',
      rawValue: '(123 ___-____',
      placeholder: convertMaskToPlaceholder('(111) 111-1111'),
      placeholderChar,
      currentCaretPosition: 4
    })).to.equal(4)
  })

  it('knows to move caret to the next mask area when the last character of the current part ' +
    'has just been filled and the caret is at the end of the mask part', () => {
    expect(adjustCaretPosition({
      previousConformedValue: '(12_) _',
      conformedValue: '(123) _',
      rawValue: '(123_) _',
      placeholder: convertMaskToPlaceholder('(111) 1'),
      placeholderChar,
      currentCaretPosition: 4
    })).to.equal(6)

    expect(adjustCaretPosition({
      previousConformedValue: '(12_) 7',
      conformedValue: '(132) _',
      rawValue: '(132_) 7',
      placeholder: convertMaskToPlaceholder('(111) 1'),
      placeholderChar,
      currentCaretPosition: 3
    })).to.equal(3)
  })

  it('knows to move caret to previous mask part when the first character of current part ' +
    'has just been deleted and the caret is at the beginning of the mask part', () => {
    expect(adjustCaretPosition({
      previousConformedValue: '(124) 3',
      conformedValue: '(124) _',
      rawValue: '(124) ',
      placeholder: convertMaskToPlaceholder('(111) 1'),
      placeholderChar,
      currentCaretPosition: 6
    })).to.equal(4)

    expect(adjustCaretPosition({
      previousConformedValue: '(12_) 3',
      conformedValue: '(12_) _',
      rawValue: '(12_) ',
      placeholder: convertMaskToPlaceholder('(111) 1'),
      placeholderChar,
      currentCaretPosition: 6
    })).to.equal(4)
  })

  describe('Guide mode', () => {
    dynamicTests(
      _.filter(testParameters, (testParameter) => {
        return !(
          _.isArray(testParameter.skips) &&
          _.includes(testParameter.skips, 'adjustCaretPosition')
        )
      }),

      (test) => ({
        description: `for input: ${JSON.stringify(test.input)} and conformToMaskResults: ${
          JSON.stringify({
            input: test.input.rawValue,
            output: test.output.conformedValue,
            placeholder: convertMaskToPlaceholder(test.input.mask),
            placeholderChar,
          })}, it knows to adjust the caret to '${
          test.output.adjustedCaretPosition
          }'. Line: ${test.line}`,

        body: () => {
          expect(adjustCaretPosition({
            previousConformedValue: test.input.previousConformedValue,
            conformedValue: test.output.conformedValue,
            rawValue: test.input.rawValue,
            placeholder: convertMaskToPlaceholder(test.input.mask),
            guide: true,
            placeholderChar,
            currentCaretPosition: test.input.currentCaretPosition,
          })).to.equal(test.output.adjustedCaretPosition)
        }
      })
    )
  })

  describe('No-guide mode', () => {
    dynamicTests(
      _.filter(noGuideMode, (testParameter) => {
        return !(
          _.isArray(testParameter.skips) &&
          _.includes(testParameter.skips, 'adjustCaretPosition')
        )
      }),

      (test) => ({
        description: `for input: ${JSON.stringify(test.input)} and conformToMaskResults: ${
          JSON.stringify({
            input: test.input.rawValue,
            output: test.output.conformedValue,
            placeholder: convertMaskToPlaceholder(test.input.mask),
            placeholderChar
          })}, it knows to adjust the caret to '${
          test.output.adjustedCaretPosition
          }'`,

        body: () => {
          expect(adjustCaretPosition({
            previousConformedValue: test.input.previousConformedValue,
            conformedValue: test.output.conformedValue,
            rawValue: test.input.rawValue,
            placeholder: convertMaskToPlaceholder(test.input.mask),
            guide: false,
            placeholderChar,
            currentCaretPosition: test.input.currentCaretPosition,
          })).to.equal(test.output.adjustedCaretPosition)
        }
      })
    )
  })

  describe('Dynamic mask tests', () => {
    dynamicTests(
      _.filter(dynamicMaskTests, (testParameter) => (
        !_.includes(testParameter.skips, 'adjustCaretPosition')
      )),

      (test) => ({
        description: `for input: ${JSON.stringify(test.input)}, it knows to adjust the caret to ` +
        `'${test.output.adjustedCaretPosition}'`,

        body: () => {
          expect(adjustCaretPosition({
            previousConformedValue: test.input.previousConformedValue,
            conformedValue: test.input.conformedValue,
            rawValue: test.input.rawValue,
            placeholder: convertMaskToPlaceholder(test.input.mask),
            guide: false,
            placeholderChar,
            currentCaretPosition: test.input.currentCaretPosition,
          })).to.equal(test.output.adjustedCaretPosition)
        }
      })
    )
  })
})
