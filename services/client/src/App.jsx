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
      title: <img src={require('./images/image1.png')} alt={'broken image'} />,

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
              <br/>
              <Switch>
                         <Route exact path='/' component={Home}/>
                         <Route exact path='/about' component={About}/>
                         <Route exact path='/products' component={Products}/>
                         <Route exact path='/contact' component={Contact} />
              </Switch>

        </div>


        <footer className="footer" >
  <div className="content has-text-centered">
    <sub>
      Carvexco by APframeworks 2019
    </sub>
  </div>
</footer>
      </div>


    )
  }
};

export default App;
