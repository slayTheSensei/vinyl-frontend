import React, { Component } from 'react'
import { Item, Header, Button, Icon } from 'semantic-ui-react'
import axios from 'axios'
import MyEvents from './MyEvents.js'

const MyEventsList = props => {

const results = props.data;

// Create Event
const onCreateEvent = () => {
  let self = this
  // pust json data into data variable
  let data = {
      'event': {
      'name': 'After Dark',
      'venue': 'Room 112'
    }
  }
  axios.post('http://localhost:4741/events/', data)
  .then(function (response) {
    console.log(response.data.event);
      let eventData = {
          'user_event': {
          'user_id': props.user,
          'event_id': response.data.event.id
        }
      }
      console.log(eventData)
    axios.post('http://localhost:4741/user_events/', eventData)
  })
  .catch(function (error) {
    console.log(error);
  })
  }


let myEvents = results.map(event =>
  <MyEvents name={event.name} id={event.id} venue={event.venue} user={props.user} artists={props.artists} />
)

  return(
    <div>
      <Header as='h2'>My Events</Header>
      <div>
        <Button primary size="mini" onClick={() => onCreateEvent()}>
          Create Event
          <Icon name='right chevron' />
        </Button>
      </div>
      <Item.Group divided>
        {myEvents}
      </Item.Group>
    </div>
  )
}

export default MyEventsList
