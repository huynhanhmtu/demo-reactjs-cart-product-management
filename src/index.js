import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';//Create store bằng redux
import { rootReducer } from './reduces';//Import rootReducer
import { Provider } from 'react-redux';//Connect react và redux

// Khi không sử dụng API => tạo store với tham số là rootReducer; tham số thứ 2 có thể có hoặc ko, dùng cho extension redux dev tool trên trình duyệt để xem cho dễ dàng
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
