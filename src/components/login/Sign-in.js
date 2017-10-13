import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
class SignInForm extends Component {
  constructor(props) {
  super(props)
    this.state = {
      email: '',
      password: '',
      token: ''
  }
  this.onChange = this.onChange.bind(this)
  this.onSubmit = this.onSubmit.bind(this)
}

// listens for changes and field and changes state
onChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  })
}

// setToken = () => {
//   this.setState({
//     token: response.data.user.token
//   })
// }

// Submits credentials to api
onSubmit = () => {
  let self = this
  // pust json data into data variable
  let data = {
    credentials: {
      email: this.state.email,
      password: this.state.password
    }
  }
  axios.post('https://vinyl-backend-api.herokuapp.com/sign-in/', data)
  .then(function (response) {
    console.log(response);
    // add token to local storage for authenicated requests
    console.log(response.data.user.token)
    console.log(response.data.user.id)
    self.props.data(response.data.user.token, response.data.user.id )
    // this.props.data.
  })
  // .then(history.push('/dashboard'))
  .catch(function (error) {
    console.log(error);
  })

console.log(this)
}

  render() {
    return (
  <div className='login-form'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>

    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >

      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/logo.png' />
          {' '}Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stac ked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              name='email'
              placeholder='E-mail address'
              onChange={e => this.onChange(e)}
              value={this.state.email}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              name="password"
              placeholder='Password'
              type='password'
              value={this.state.password}
              onChange={e => this.onChange(e)}
            />

          <Button color='teal' fluid size='large' onClick={() => this.onSubmit()}>Login</Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='/'>Sign Up</a>
        </Message>
        <Link to="/dashboard">Continue</Link>
      </Grid.Column>
    </Grid>
  </div>
)
}
}
export default SignInForm
