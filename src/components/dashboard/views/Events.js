import React, { Component } from 'react'
import { Image, Header, Label, Item, Button, Icon} from 'semantic-ui-react'
import axios from 'axios'
import Artists from './Artists.js'

class Events extends Component {

  deleteEvents = () => {
    let self = this
    console.log(self.props.id)
    let data = {
        id: self.props.id
    }
    // pust json data into data variable
    axios.delete('http://localhost:4741/events/' + self.props.id, data)
    .then(function (response) {
      console.log(response);
      console.log(response.data.user.token)
      console.log(self.props.id)
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
          <span className='cinema'>Zeke Speakeasy</span>
        </Item.Meta>
        <Item.Description>Warehouse party at an undisclosed location</Item.Description>
        <Item.Extra>
          <Label>{}</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
        <Button primary size="mini" onClick={() => this.deleteEvents()}>
          Complete Event
          <Icon name='right chevron' />
        </Button>
      </Item.Content>
    </Item>
  )
}
}

export default Events
