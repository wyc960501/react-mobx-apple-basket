import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import apple from './stores/appleStore'
import { Provider } from 'mobx-react'
import './index.css'

ReactDOM.render(
  <Provider apple={apple}><App /></Provider>,
  document.getElementById('root')
);
