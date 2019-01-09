import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './customstyle.css';
import 'typeface-roboto';
import App from './App.jsx';

ReactDOM.render((

  <Router>
  <App />
  </Router>
), document.getElementById('root'))

