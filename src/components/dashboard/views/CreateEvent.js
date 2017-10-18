import React, { Component } from 'react'
import { Form, Header, Segment, Button, Image } from 'semantic-ui-react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'


class CreateEvent extends Component {
  constructor(props) {
    super(props)
      this.state = {
        name: '',
        venue: '',
        date: ''
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
        console.log(self.props.user)
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
      .then(this.props.history.push(`/dashboard`))
      .catch(function (error) {
        console.log(error);
        })
      }

  render() {
    return(
      <div>
        <Form size={'small'}>
          <Form.Group>
            <Form.Input
              name='name'
              placeholder='Name'
              onChange={e => this.onChange(e)}
              value={this.state.name}
              width={16} />
          </Form.Group>
          <Form.Group>
            <Form.Input
              name='venue'
              placeholder='Venue'
              onChange={e => this.onChange(e)}
              value={this.state.venue}
              width={16} />
          </Form.Group>
          <Form.Group>
            <Form.Input
              name='date'
              placeholder='Date'
              onChange={e => this.onChange(e)}
              value={this.state.date}
              width={16} />
          </Form.Group>
          <Button color='blue' fluid size='large' onClick={() => this.onSubmit()}>Create</Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(CreateEvent)
