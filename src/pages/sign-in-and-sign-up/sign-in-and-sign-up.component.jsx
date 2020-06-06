import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import './sign-in-and-sign-up.styles.scss';

// using functional component because we will keep the states in the sign-in and sign-up components, not this page component
const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
  </div>
);

export default SignInAndSignUpPage;