import React from 'react'
import { Row, Col, Table, Icon, Button, Popconfirm, message, Tooltip  } from 'antd'
import EventDash from './EventDash.js'
import { Card } from 'semantic-ui-react'
import { Route, BrowserRouter, withRouter } from 'react-router-dom'


import Artists from './Artists.js'
import CreateEvent from './CreateEvent.js'

class AvailableDj extends React.Component {

  render() {

    const results = this.props.artists;
    let artists = results.map((artist, index) =>
      <Artists name={artist.name} genre={artist.genre} bio={artist.bio} image={artist.image} render={this.props.getUserEvents} roster={this.props.roster} userRoster={this.props.userRoster} artistId={artist.id} artistRoster={this.props.artistRoster} key={index} />
    );

  return(
    <div style={{ padding: 24, background: '#fff', minHeight: 400, margin: '6px' }}>
      <h1>Available Aritists</h1>
      <Card.Group itemsPerRow={3}>
        {artists}
      </Card.Group>
    </div>
    );
  }
}

export default withRouter(AvailableDj)
