import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './store/store'
import App from './components/App';

const store = appStore();

const template = (
  <Provider store={store}>
    <BrowserRouter>    
      <App />    
    </BrowserRouter>
  </Provider>
);

render(template, document.getElementById('root'));