import _ from 'lodash'
import React, { Component } from 'react'
import { Label, Item, Button, Icon, Modal, Header, Image} from 'semantic-ui-react'
import axios from 'axios'
import ArtistModal from './ArtistModal.js'

class Events extends Component {

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

  // <Button primary size="mini" onClick={() => this.onCreateEvent()}>
  //   Create Event
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
          <Label>{this.props.artists}</Label>
          <Label content='Live Music' />
        </Item.Extra>
        <Button primary size="mini" onClick={() => this.deleteEvents()}>
          Delete Event
          <Icon name='right chevron' />
        </Button>

        <Modal trigger={<Button positive size="mini">Create Event</Button>}>
    <Modal.Header>Select an Artist</Modal.Header>
    <Modal.Content image scrolling>
      <Image
        size='medium'
        src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png'
        wrapped
      />
      <Modal.Description>
        <Header>DJ Slick Vick</Header>
        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

        {_.times(8, i => (
          <Image
            key={i}
            src='/assets/images/wireframe/paragraph.png'
            style={{ paddingBottom: 5 }}
          />
        ))}
        <Button positive size="mini">Add</Button>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>

      </Item.Content>
    </Item>
    )
  }
}

export default Events
