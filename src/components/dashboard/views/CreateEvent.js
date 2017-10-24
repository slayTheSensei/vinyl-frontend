import React, { Component } from 'react'
import { Form, Header, Segment, Button, Image} from 'semantic-ui-react'
import { message } from 'antd'
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';


class CreateEvent extends Component {
  constructor(props) {
    super(props)
      this.state = {
        name: '',
        venue: '',
        Startdate: moment()
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.pickDate = this.pickDate.bind(this)
    }

    // listens for changes and field and changes state
    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

    pickDate = (date) => {
      this.setState({
        startDate: date
      })
      console.log(this.state)
    }

    onSubmit = () => {
      let self = this
      let data = {
        event: {
          name: this.state.name,
          venue: this.state.venue,
          date: this.state.startDate
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
            <DatePicker
              name='date'
              dateFormat="MM/DD/YY"
              placeholder='Date'
              onChange={this.pickDate}
              selected={this.state.startDate}
              value={this.state.startDate}
              width={16} />
          </Form.Group>
          <Button color='blue' fluid size='large' style={{ margin: '15px 0' }} onClick={() => this.onSubmit()}>Create</Button>
          <Link to='/dashboard'>Cancel</Link>
        </Form>
      </div>
    )
  }
}

export default withRouter(CreateEvent)
