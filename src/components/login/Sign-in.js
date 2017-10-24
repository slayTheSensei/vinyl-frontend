import React, { Component } from 'react';
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { message } from 'antd'
import { Button, Form, Grid, Header, Image, Loader, Message, Segment } from 'semantic-ui-react'
class SignInForm extends Component {
  constructor(props) {
  super(props)
    this.state = {
      email: '',
      password: '',
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
    self.props.data(response.data.user.token, response.data.user.id, self.props )
    console.log('het')
  })
  .catch(function (error) {
    message.error('Invaild Email or Password')
    console.log(error);
  })


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
          <Loader inverted content='Loading' />
          </Segment>
        </Form>
        <Message>
          New to us? <Link to='/sign-up'>login here</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)
}
}
export default withRouter(SignInForm)
