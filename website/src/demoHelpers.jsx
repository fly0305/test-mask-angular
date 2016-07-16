import React from 'react' // eslint-disable-line
import createMmddyyyyValidator from '../../addons/src/createMmddyyyyValidator.js'
import createCurrencyMask from '../../addons/src/createCurrencyMask'

const dynamicMaskDocumentationLink = 'https://github.com/msafi/text-mask/blob/master/' +
  'componentDocumentation.md#mask-function-aka-dynamic-mask'

export const initialState = {
  choices: [{
    value: 'usPhoneNumber',
    name: 'US phone number',
    mask: '(111) 111-1111',
    placeholder: '(555) 495-3947'
  }, {
    value: 'usPhoneNumberWithCountryCode',
    name: 'US phone number with country code',
    mask: '+\\1 (111) 111-1111',
    placeholder: '+1 (555) 495-3947'
  }, {
    value: 'canadianPostalCode',
    name: 'Canadian postal code',
    mask: 'U1U 1U1',
    placeholder: 'K1A 0B2'
  }, {
    value: 'date',
    name: 'Date (not validated)',
    mask: '11/11/1111',
    placeholder: '25/09/1970'
  }, {
    value: 'birthDay',
    name: 'Birth day (validated)',
    mask: '11/11/1111',
    validator: createMmddyyyyValidator({
      minimumDate: '01/01/1900',
      maximumDate: (new Date()).toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    }),
    onRejectMessage: (
      <span>
        Please enter an actual calendar date between 01/01/1900 and today,
        with the following format `mm/dd/yyyy`.
      </span>
    ),
    placeholder: 'Date between 01/01/1900 and today',
    help: (
      <span>
        This mask configuration is validated with
        {' '}
        <a
          className='alert-link'
          target='_blank'
          href='https://github.com/msafi/text-mask/blob/master/addons/src/createMmddyyyyValidator.js'>
          createMmddyyyyValidator
        </a>, which needs to be installed separately as a
        {' '}
        <a
          className='alert-link'
          target='_blank'
          href='https://github.com/msafi/text-mask/tree/master/addons/#readme'>
          Text Mask addon
        </a>.

        <br/><br/>

        It also uses the
        {' '}<a
          target='_blank'
          href='https://github.com/msafi/text-mask/blob/master/componentDocumentation.md#onreject'
        >
          <code>onReject</code>
        </a>{' '}
        callback to show a hint message when user enters a rejected character.
      </span>
    )
  }, {
    value: 'currency',
    name: 'U.S. dollars currency',
    mask: createCurrencyMask(),
    placeholder: 'Enter an amount',
    help: (
      <span>
        This is a
        {' '}
          <a
            className='alert-link'
            target='_blank'
            href={dynamicMaskDocumentationLink}>
            dynamic mask
          </a>,
        {' '}
        which was created with
        {' '}
        <a
          className='alert-link'
          target='_blank'
          href='https://github.com/msafi/text-mask/blob/master/addons/src/createCurrencyMask.js'>
          createCurrencyMask
        </a>. It needs to be installed separately as a
        {' '}
        <a
          className='alert-link'
          target='_blank'
          href='https://github.com/msafi/text-mask/tree/master/addons/#readme'>
          Text Mask addon
        </a>.
      </span>
    ),
    style: {textAlign: 'right'}
  }, {
    value: 'fiveDigitNumber',
    name: 'Five digit number (zip code)',
    mask: '11111',
    placeholder: '94303'
  }, {
    value: 'threeLetterMonth',
    name: 'Three letter month name',
    mask: 'ULL',
    placeholder: 'Mar'
  }, {
    value: 'custom',
    name: 'Custom',
    mask: '',
    placeholder: undefined
  }],

  selectedChoice: 0,

  placeholderChar: '\u2000',

  guide: true,

  keepCharPositions: false
}

const githubLink = 'https://github.com/msafi/text-mask/'

export const DemoTop = () => (
  <div>
    <p>
      <img
        src='./assets/logo.png'
        alt='Text Mask'
        className='img-responsive'
        width='331'
        height='67'/>
    </p>

    <p>
      This is a demo of Text Mask. Try filling out the masked input field.
      Try entering bad characters. Pasting. Deleting.
      Or using auto-fill. Try it on mobile too.
    </p>
  </div>
)

export const DemoBottom = () => (
  <p className='col-sm-8 col-sm-offset-4'>
    For more information about
    installation, usage, and documentation, see the <a href={githubLink}>GitHub page</a>.
  </p>
)
