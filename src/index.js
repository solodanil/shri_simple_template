/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Application } from './Application';

import './index.css';
import { initStore } from './store';

const store = initStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Application />
    </Provider>
  </BrowserRouter>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
