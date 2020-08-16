import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import allReducers from './reducer';
import './style.css';

// Create redux store. allReducers is exported from reducer/index.js
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// React render App.js into index.html <div id='root' />
// Router wrapped around App allows React-router-dom {Switch, Route} for App
// Provider wrapped around App creates redux store for App
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

