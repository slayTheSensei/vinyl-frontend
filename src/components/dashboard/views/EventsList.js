import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, Card, Item } from 'semantic-ui-react'
import axios from 'axios'
import Events from './Events.js'

const EventsList = props => {

const results = props.data;
let events = results.map(event =>
  <Events name={event.name} />
)

  return(
    <div>
      <Header as='h2'>Events</Header>
      <Item.Group>
        {events}
      </Item.Group>
    </div>
  )
}

export default EventsList
