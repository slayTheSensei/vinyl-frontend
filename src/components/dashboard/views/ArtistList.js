import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, Card } from 'semantic-ui-react'
import axios from 'axios'
import Artists from './Artists.js'

const ArtistList = props => {

const results = props.data;
let artists = results.map(artist =>
  <Artists name={artist.name} />
);

  return(
    <div>
      {artists}
    </div>
  );
}

export default ArtistList
