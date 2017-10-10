import _ from 'lodash'
import React, { Component } from 'react'
import { Label, Item, Button, Icon, Modal, Header, Image} from 'semantic-ui-react'
import axios from 'axios'
import ArtistModal from './ArtistModal.js'

class MyEvents extends Component {

  componentDidMount() {
  }

    // Delete Event
  deleteEvents = () => {
    let self = this
    let data = {
        id: self.props.id
    }
    axios.delete('http://localhost:4741/events/' + self.props.id, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error)
    })
  }

    // Create Event
    // TODO need to add formfield for create events data
    onCreateEvent = () => {
      let self = this
      // puts json data into data variable
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
  const artistsResults = this.props.artists
  let artists = artistsResults.map(artist =>
    <ArtistModal name={artist.name} id={artist.id} bio={artist.bio} />
  )
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
        <Button primary size="mini" onClick={() => this.deleteEvents()}>
          Delete Event
          <Icon name='right chevron' />
        </Button>

        <Modal trigger={<Button positive size="mini">Add an Artist</Button>}>
          <Modal.Header>Select an Artist</Modal.Header>
            {artists}
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

export default MyEvents
