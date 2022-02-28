import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from 'redux';//applyMiddleware và compose để xử lý bất đồng bộ trước khi dispatch lên store của reducer
import { rootReducer } from './reduces';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';//Đồng bộ hóa dữ liệu trước khi đưa lên store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();