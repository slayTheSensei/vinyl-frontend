import React, { Component } from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
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

      <Button positive attached='bottom'>Add to Event</Button>

  </Card>
);

export default Artist
