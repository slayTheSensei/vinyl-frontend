import React, { Component } from 'react'
import { Image, Header, Label, Item, Button, Icon} from 'semantic-ui-react'
import axios from 'axios'
import Artists from './Artists.js'

class Events extends Component {

  deleteEvents = () => {
    let self = this
    let data = {
        id: self.props.id
    }
    // pust json data into data variable
    axios.delete('http://localhost:4741/events/' + self.props.id, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error)
    })

  // console.log(this.props.id)
  }
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
      </Item.Content>
    </Item>
  )
}
}

export default Events
