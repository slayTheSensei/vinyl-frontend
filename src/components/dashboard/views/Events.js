import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, Card, Label, Item } from 'semantic-ui-react'
import axios from 'axios'
import Artists from './Artists.js'

const Events = props => {
  return(
    <Item>
      <Item.Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
      <Item.Content>
        <Item.Header as='a'>{props.name}</Item.Header>
        <Item.Meta>
          <span className='cinema'>Zeke's Speakeasy</span>
        </Item.Meta>
        <Item.Description>Warehouse party at an undisclosed location</Item.Description>
        <Item.Extra>
          <Label>{props.name}</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default Events
