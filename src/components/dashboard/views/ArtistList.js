import React, { Component } from 'react'
import { Header, Card } from 'semantic-ui-react'
import axios from 'axios'
import Artists from './Artists.js'

const ArtistList = props => {

const results = props.data;
let artists = results.map((artist, index) =>
  <Artists name={artist.name} key={index} />
);

  return(
    <div>
        <div style={{ padding: 24, background: '#fff', minHeight: 400, margin: '12px' }}>
          <Header as='h2' style={{ textAlign: 'left' }}>Artists</Header>

          <Card.Group>
          {artists}
          </Card.Group>
        </div>
    </div>
  );
}

export default ArtistList
