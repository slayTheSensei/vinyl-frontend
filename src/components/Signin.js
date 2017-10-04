import React, { Component } from 'react';
import axios from 'axios'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends Component {
  constructor(props) {
  super(props)
    this.state = {
      email: '',
      password:'',
      password_digest: '',
  }
  this.onChange = this.onChange.bind(this)
  this.onSubmit = this.onSubmit.bind(this)
}

onChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  })
}

onSubmit = () => {
  console.log("submited")
  let data = {
    credentials: {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_digest
    }
  }
  console.log(data)
  axios.post('http://localhost:4741/sign-up/', data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

  render() {
    return (
  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
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
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              name="password_digest"
              placeholder='Confirm Password'
              type='password'
              value={this.state.password_digest}
              onChange={e => this.onChange(e)}
            />

          <Button color='teal' fluid size='large' onClick={() => this.onSubmit()}>Login</Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)
}
}
export default LoginForm
