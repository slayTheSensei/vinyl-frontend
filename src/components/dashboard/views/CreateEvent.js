import React, { Component } from 'react'
import { Form, Header, Segment, Button, Image } from 'semantic-ui-react'
import axios from 'axios'

class CreateEvent extends Component {
  constructor(props) {
    super(props)
      this.state = {
        name: '',
        venue: ''
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

    onSubmit = () => {
      let self = this
      let data = {
        event: {
          name: this.state.name,
          venue: this.state.venue
        }
      }
      axios.post('https://vinyl-backend-api.herokuapp.com/events/', data)
      .then(function (response) {
        console.log(response);
          let eventData = {
            'user_event': {
            'user_id': self.props.user,
            'event_id': response.data.event.id
            }
          }
        axios.post('https://vinyl-backend-api.herokuapp.com/user_events/', eventData)
        .then(function (response) {
          console.log(response)
        })
      })
      .then(self.props.getUserEvents)
      .catch(function (error) {
        console.log(error);
        })
      }

    toUserEvents = () => {
      this.props.history.push('/sign-in')
    }

  render() {
    return(
      <div>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/logo.png' />
          {' '}Create a new event
        </Header>
        <Form size='large'>
          <Segment stac ked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              name='name'
              placeholder='Event Name'
              onChange={e => this.onChange(e)}
              value={this.state.name}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              name="venue"
              placeholder='Venue'
              value={this.state.venue}
              onChange={e => this.onChange(e)}
            />
          <Button color='teal' fluid size='large' onClick={() => this.onSubmit()}>Login</Button>
          </Segment>
        </Form>
      </div>
    )
  }
}

export default CreateEvent
