import React, { Component } from 'react'
import { Header, Card } from 'semantic-ui-react'
import axios from 'axios'
import Artists from './Artists.js'

const ArtistList = props => {

const results = props.data;
let artists = results.map(artist =>
  <Artists name={artist.name} />
);

  return(
    <div>
      <Header as='h2'>Artists</Header>
      <Card.Group>
        {artists}
      </Card.Group>
    </div>
  );
}

export default ArtistList
