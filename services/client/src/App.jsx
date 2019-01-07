import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './components/About';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
  };


  render() {
    return (
       <Switch>
                  <Route exact path='/' render={() => (
                  <h1>bla</h1>
                  )} />
                  <Route exact path='/about' component={About}/>
       </Switch>
    )
  }
};

export default App;