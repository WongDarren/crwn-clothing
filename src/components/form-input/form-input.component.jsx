/*
  This component is used to manage the label and the little iteractions that happen when we click on the form.
*/

import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
  <div className='group'>
    <input className='form-input' onchange={handleChange} {...otherProps}/>
    {
      // selectively render a label
      // if label exists, then do <label></label>
      label ? 
      // create label component
      // selectively render a string interpolated value where we take otherProps.value.length
      // and if it is in, then we apply className of shrink, otherwise empty
      // and always have form-input-label
      (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label `}> 
        {label} 
      </label>)
      // otherwise render nothing
      : null
    }
  </div>
)

export default FormInput;