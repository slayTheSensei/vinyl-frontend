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
        <div style={{ padding: 24, background: '#fff', minHeight: 400, margin: '12px' }}>
          <Header as='h2' style={{ textAlign: 'left' }}>Events</Header>
          <Item.Group divided>
            {this.events}
          </Item.Group>
        </div>
      </div>
    )
  }
}

export default EventsList
