import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

// importing components
import SignUpForm from './components/login/Sign-up.js'
import SignInForm from './components/login/Sign-in.js'

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={SignUpForm} />
          <Route path="/sign-in" component={SignInForm} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
