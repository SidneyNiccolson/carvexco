import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: <img src={require('./images/image1.png')} />,

    }
  };

  componentDidMount() {
  };


  render() {
    return (
      <div>
        <NavBar title={this.state.title} >

        </NavBar>
        <div className="container">
          <div className="row">
            <div className="col-md-6">


              <br/>
              <Switch>
                         <Route exact path='/' component={Home}/>
                         <Route exact path='/about' component={About}/>
                         <Route exact path='/products' component={Products}/>
                         <Route exact path='/contact' component={Contact}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>


    )
  }
};

export default App;
