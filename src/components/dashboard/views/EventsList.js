import React, { Component } from 'react'
import { Item, Header } from 'semantic-ui-react'
import axios from 'axios'
import Events from './Events.js'

const EventsList = props => {

const results = props.data;
// const artistsResults = props.artists

let events = results.map(event =>
  <Events name={event.name} id={event.id} venue={event.venue} user={props.user} artists={props.artists} />
)

// let artists = artistsResults.map(artist =>
//   <Events name={artist.name} id={artist.id} bio={artist.bio} />
// )

  return(
    <div>
      <Header as='h2'>Events</Header>
      <Item.Group divided>
        {events}
      </Item.Group>
    </div>
  )
}

export default EventsList
