import React, { Component } from 'react'
import { Item, Header, Button, Icon } from 'semantic-ui-react'
import axios from 'axios'
import Events from './Events.js'

class EventsList extends Component {

results = this.props.data;

 events = this.results.map(event =>
  <Events name={event.name} id={event.id} venue={event.venue} user={this.props.user} artists={this.props.artists}  getUserEvents={this.props.getUserEvents} />
)

render() {

  return(
    <div>
      <Header as='h2'>Events</Header>

      <Item.Group divided>
        {this.events}
      </Item.Group>
    </div>
    )
  }
}

export default EventsList
