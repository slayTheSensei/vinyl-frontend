import React, { Component } from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import axios from 'axios'


const Artist = props => (
  <Card style={{ margin: '35px', width: '175px' }}>
    <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' size='medium' shape='circular' />
    <Card.Content>
      <Card.Header>
        {props.name}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          {props.genre}
        </span>
      </Card.Meta>
    </Card.Content>
  </Card>
);

export default Artist
