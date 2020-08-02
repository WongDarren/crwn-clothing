import React from 'react';

import './custom-button.styles.scss';

// <input> and <button> both can take property type='submit' 
// and can both submit the form they're in
// both trigger the obSubmit method on Form

// pull the children off of our props that get passed into our custom button
// spread otherProps into our custom button
const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
  <button 
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;