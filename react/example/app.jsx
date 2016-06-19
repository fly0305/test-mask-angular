import React from 'react'
import MaskedInput from '../src/reactTextMask' // eslint-disable-line

export default React.createClass({
  render() {
    return (
      <form className='form-horizontal'>
        <div className='form-group'>
          <label htmlFor='1' className='col-sm-2 control-label'>Masked input</label>

          <div className='col-sm-10'>
            <MaskedInput
              mask='(111) 111-1111'
              className='form-control'
              id='1'
              type='text'
            />
          </div>
        </div>
      </form>
    )
  }
})
