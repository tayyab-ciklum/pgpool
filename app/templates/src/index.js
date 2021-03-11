import "antd/dist/antd.css";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppStore from './redux/app-store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={AppStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
      </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
