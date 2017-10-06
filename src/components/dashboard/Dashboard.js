import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, Card, Item, Label, Container } from 'semantic-ui-react'
import axios from 'axios'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

// importing components
import ArtistList from './views/ArtistList.js'
import EventsList from './views/EventsList.js'
import Sidebar_nav from './Sidebar_nav.js'

class Dashboard extends Component {
  constructor() {
  super();
  this.state = {
    artists: [],
    events: [],
    visible: true
  };
}

// API calls are done in componentDidMount
componentDidMount() {
  // GET Artists
  axios.get('http://localhost:4741/artists')
    .then(response => {
    this.setState({
      artists: response.data.artists
    })
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error)
  })
// GET Events
  axios.get('http://localhost:4741/events')
    .then(response => {
    this.setState({
      events: response.data.events
    })
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error)
  })
  console.log(this.props)
}

  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  render() {
    console.log(this.state.artists)
    const { visible } = this.state
    return (
      <div className="app">

      <Menu attached='top'>
        <Container>
        </Container>
        <Menu.Item>
          <Button primary>Sign Out</Button>
        </Menu.Item>
      </Menu>

        <div>
        <Sidebar.Pushable as={Segment} >
          <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Sidebar_nav />
          </Sidebar>
          <Sidebar.Pusher className="side">
            <Segment basic>
                <Route path="/dashboard/events" render={ () => <EventsList data={this.state.events} />} />
                <Route path="/dashboard/artists" render={ () => <ArtistList data={this.state.artists} />} />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
      </div>
    )
  }
}

export default Dashboard
