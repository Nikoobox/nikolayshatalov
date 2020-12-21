import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);


serviceWorker.unregister();
