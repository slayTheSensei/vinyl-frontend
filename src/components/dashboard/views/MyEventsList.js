import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Item, Header, Button, Icon } from 'semantic-ui-react'
import axios from 'axios'
import MyEvents from './MyEvents.js'

const MyEventsList = props => {

const results = props.data;

 // ////////////////////////
// Create Event & User Event
// /////////////////////////
const onCreateEvent = () => {

  let self = this
  let data = {
      'event': {
      'name': 'After Dark',
      'venue': 'Room 112'
    }
  }

  axios.post('http://localhost:4741/events/', data)
  .then(function (response) {
    console.log(response);
      let eventData = {
        'user_event': {
        'user_id': props.user,
        'event_id': response.data.event.id
        }
      }
    axios.post('http://localhost:4741/user_events/', eventData)
    .then(function (response) {
      console.log(response)
    })
  })
  .catch(function (error) {
    console.log(error);
    })
  }

  const toCreateEvent = () => {
    console.log(this)
  }

  // ///////////////////////////////
 // Maps every instance of my events
 // ///////////////////////////////
let myEvents = results.map(event =>
  <MyEvents name={event.name} id={event.id} venue={event.venue} user={props.user} artists={props.artists} />
)

  return(
    <div>
      <Header as='h2'>My Events</Header>
      <div>
        <Link to='/dashboard/createevent'>Create Event</Link>
      </div>
      <Item.Group divided>
        {myEvents}
      </Item.Group>
    </div>
  )
}

export default MyEventsList
