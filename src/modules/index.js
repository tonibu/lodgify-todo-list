import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';

import App from 'modules/app';
import './styles.css';

const rootDiv = document.createElement('div');
rootDiv.id = 'root';

document.body.appendChild(rootDiv);

render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.querySelector('#root')
);