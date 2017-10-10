import React, { Component } from 'react'
import { Item, Header } from 'semantic-ui-react'
import axios from 'axios'
import MyEvents from './MyEvents.js'

const MyEventsList = props => {

const results = props.data;

let myEvents = results.map(event =>
  <MyEvents name={event.name} id={event.id} venue={event.venue} user={props.user} artists={props.artists} />
)

  return(
    <div>
      <Header as='h2'>My Events</Header>
      <Item.Group divided>
        {myEvents}
      </Item.Group>
    </div>
  )
}

export default MyEventsList
