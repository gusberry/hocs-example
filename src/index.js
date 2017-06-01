import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import fetchDataHoc from './HOCs/fetchDataHoc';


const middleware = [thunk, createLogger()];
const store = createStore(
  (state, action) => ({ state: null }),
  applyMiddleware(...middleware)
)



const Connected = fetchDataHoc(App)

const Application = () => (
  <Provider store={store}>
    <Connected />
  </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
