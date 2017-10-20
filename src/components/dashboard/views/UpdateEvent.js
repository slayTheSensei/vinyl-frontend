import React, { Component } from 'react'
import { Form, Header, Segment, Button, Image} from 'semantic-ui-react'
import { message } from 'antd'
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom'


class UpdateEvent extends Component {
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
      axios.patch('https://vinyl-backend-api.herokuapp.com/events/', data)
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
      .then(message.success('Event Created'))
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
          <Button color='blue' fluid size='large' style={{ margin: '15px 0' }} onClick={() => this.onSubmit()}>Update</Button>
          <Link to='/dashboard'>Cancel</Link>
        </Form>
      </div>
    )
  }
}

export default withRouter(UpdateEvent)
