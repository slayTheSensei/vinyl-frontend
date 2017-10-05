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
import Dashboard from './components/dashboard/Dashboard.js'

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        user_id: '',
        token: ''
      }
      this.setToken = this.setToken.bind(this)
  }

  setToken (token, user_id) {
    this.setState({
      token: token,
      user_id: user_id
    })
  }


  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={ () => <SignUpForm />} />
          <Route path="/sign-in" render={ () => <SignInForm data={this.setToken} />} />
          <Route path="/dashboard" render={ () => <Dashboard data={this.state} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
