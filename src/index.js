import React from 'react';
import ReactDOM from 'react-dom';
// Need BrowerRouter component to wrap around our application
// That gives us all of the functionalities of routing in our App
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);