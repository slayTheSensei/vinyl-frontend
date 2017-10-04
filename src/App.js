import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/Signin.js'

class App extends Component {
state = {
  email: '',
  password:'',
  password_confirm: '',
}

  render() {

    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

export default App;
