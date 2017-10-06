import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, Card } from 'semantic-ui-react'
import axios from 'axios'


const Artist = props => (
  <Card small>
    <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>
        {props.name}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          {props.genre}
        </span>
      </Card.Meta>
      <Card.Description>
        {props.name} is a DJ living in Providence.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

export default Artist
