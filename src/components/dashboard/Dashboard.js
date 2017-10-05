import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, Card } from 'semantic-ui-react'
import axios from 'axios'
import ArtistList from './views/ArtistList.js'

class Dashboard extends Component {
  constructor() {
  super();
  this.state = {
    artists: [],
    visible: true
  };
}

componentDidMount() {
  axios.get('http://localhost:4741/artists')
.then(response => {
  this.setState({
    artists: response.data.artists
  })
})
.catch(error => {
  console.log('Error fetching and parsing data', error);
});
}

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    console.log(this.state.artists)
    const { visible } = this.state
    return (
      <div className="app">
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment} >
          <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='ticket'>
              <Icon name='ticket' />
              Events
            </Menu.Item>
            <Menu.Item name='options'>
              <Icon name='options' />
              Artists
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher className="side">
            <Segment basic>
              <Header as='h2'>All Available Artists</Header>

            <ArtistList data={this.state.artists}/>

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Dashboard
