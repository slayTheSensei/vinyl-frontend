import _ from 'lodash'
import React from 'react'
import { Label, Item, Modal, Header, Image, Button, Icon} from 'semantic-ui-react'
import axios from 'axios'

class Events extends React.Component {

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
    .then(self.props.getUserEvents)
    .catch(function (error) {
      console.log(error)
    })
  }

  // Create Event
  //   onCreateEvent = () => {
  //     let self = this
  //     let data = {
  //         'event': {
  //         'name': 'After Dark',
  //         'venue': 'Room 112'
  //       }
  //     }
  //     axios.post('http://localhost:4741/events/', data)
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }

  // Create Button
  // Create Event
  // <Button primary size="mini" onClick={() => this.toCreateEvent()}>
  //   Create Event
  //   <Icon name='right chevron' />
  // </Button>


  // Delete Button



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
        <Button negative size="mini" onClick={() => this.deleteEvents()}>
          Delete Event
          <Icon name='right chevron' />
        </Button>
      </Item.Content>
    </Item>
    )
  }
}

export default Events
