import _ from 'lodash'
import React, { Component } from 'react'
import { Label, Item, Button, Icon, Modal, Header, Image} from 'semantic-ui-react'
import axios from 'axios'

class Events extends Component {

  componentDidMount() {
    console.log('User = ' + this.props.user)
  }

  deleteEvents = () => {
    let self = this
    let data = {
        id: self.props.id
    }
    // Delete Event
    axios.delete('http://localhost:4741/events/' + self.props.id, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error)
    })
  }

    // Create Event
    onCreateEvent = () => {
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
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  // Create Button

  // Create Event
  // <Button primary size="mini" onClick={() => this.onCreateEvent()}>
  //   Create Event
  //   <Icon name='right chevron' />
  // </Button>

  // Delete Button

  // Delete Event
  // <Button negative size="mini" onClick={() => this.deleteEvents()}>
  //   <Icon name='right chevron' />
  // </Button>


render() {
  return(
    <Item>
      <Item.Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
      <Item.Content>
        <Item.Header as='a'>{this.props.name}</Item.Header>
        <Item.Meta>
          <span className='cinema'>{this.props.venue}</span>
        </Item.Meta>
        <Item.Description>Warehouse party at an undisclosed location</Item.Description>
        <Item.Extra>
          <Label></Label>
          <Label content='Live Music' />
        </Item.Extra>

      </Item.Content>
    </Item>
    )
  }
}

export default Events
