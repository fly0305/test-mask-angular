import adjustCaretPosition from './adjustCaretPosition.js'
import conformToMask from './conformToMask.js'
import {convertMaskToPlaceholder, isString, isNumber} from './utilities.js'

export default function createTextMaskInputElement({
  inputElement,
  mask: providedMask,
  guide,
  validator,
  placeholderChar,
  onAccept,
  onReject
}) {
  const state = {previousConformedInput: ''}

  let componentPlaceholder = ''
  let mask

  if (isString(providedMask)) {
    componentPlaceholder = convertMaskToPlaceholder(providedMask, placeholderChar)
  }

  if (inputElement.placeholder === '') {
    inputElement.setAttribute('placeholder', componentPlaceholder)
  }

  return {
    state,

    update(valueToConform = inputElement.value) {
      if (valueToConform === state.previousConformedInput) { return }

      if (typeof providedMask === 'function') {
        mask = providedMask(valueToConform)

        componentPlaceholder = convertMaskToPlaceholder(mask, placeholderChar)
      } else {
        mask = providedMask
      }

      const {selectionStart: currentCaretPosition} = inputElement
      const {previousConformedInput} = state
      const safeValueToConform = getSafeInputValue(valueToConform)
      const conformToMaskConfig = {previousConformedInput, guide, placeholderChar, validator}
      const conformToMaskResults = conformToMask(safeValueToConform, mask, conformToMaskConfig)
      const {output: outputOfConformToMask} = conformToMaskResults
      const adjustedCaretPosition = adjustCaretPosition({
        previousConformedInput,
        conformToMaskResults,
        currentCaretPosition,
        placeholderChar
      })
      const valueShouldBeEmpty = (
        outputOfConformToMask === componentPlaceholder && adjustedCaretPosition === 0
      )
      const conformedInput = (valueShouldBeEmpty) ? '' : outputOfConformToMask
      const isDeletion = safeValueToConform.length < previousConformedInput.length

      if (typeof onAccept === 'function' && conformedInput !== previousConformedInput) {
        onAccept()
      }

      if (
        typeof onReject === 'function' &&
        conformedInput === previousConformedInput &&
        isDeletion === false &&
        currentCaretPosition <= mask.length
      ) {
        onReject()
      }

      inputElement.value = conformedInput
      state.previousConformedInput = conformedInput
      safeSetSelection(inputElement, adjustedCaretPosition)
    }
  }
}

function safeSetSelection(element, selectionPosition) {
  if (document.activeElement === element) {
    element.setSelectionRange(selectionPosition, selectionPosition, 'none')
  }
}

function getSafeInputValue(inputValue) {
  if (isString(inputValue)) {
    return inputValue
  } else if (isNumber(inputValue)) {
    return String(inputValue)
  } else if (inputValue === undefined || inputValue === null) {
    return ''
  } else {
    throw new Error(
      "The 'value' provided to Text Mask needs to be a string or a number. The value " +
      `received was:\n\n ${JSON.stringify(inputValue)}`
    )
  }
}
