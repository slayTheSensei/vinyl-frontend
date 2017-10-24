import React from 'react'
import {
  Layout,
  Icon,
  Button,
  Table,
  Row,
  Col,
  Avatar
} from 'antd';

import { Menu } from 'semantic-ui-react'
import axios from 'axios'

import {Route, Link, BrowserRouter} from 'react-router-dom'

// importing components
import ArtistList from './views/ArtistList.js'
import EventsList from './views/EventsList.js'
import Events from './views/Events.js'
import Sidebar_nav from './Sidebar_nav.js'
import MyEventsList from './views/MyEventsList.js'
import LandingDash from './views/LandingDash.js'
import CreateEvent from './views/CreateEvent.js'

const {Header, Content, Footer, Sider} = Layout;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      events: [],
      user_events: [],
      roster: [],
      user_roster: [],
      artist_roster: [],
      visible: true
    };

    // this.userToken = props.data.token
    // this.user =  props.data.user_id
    // this.auth = {
    //   headers: {
    //       "Authorization" : 'Token ' + this.userToken
    //     }
    //   }

    this.getUserEvents = this.getUserEvents.bind(this)
  }

  // getUserEvents() {
  //   axios.get('https://vinyl-backend-api.herokuapp.com/users/' + this.user, this.auth)
  //     .then(response => {
  //     this.setState({
  //       user_events: response.data.user.events
  //     })
  //     console.log(response.data.user.user_events)
  //
  //   })
  //   .catch(error => {
  //     console.log('Error fetching and parsing data', error)
  //   })
  // }

  // API calls are done in componentDidMount
  getUserEvents() {
    let self = this
    let userToken = this.props.data.token
    let auth = {
      headers: {
        "Authorization": 'Token ' + userToken
      }
    }
    let user = self.props.data.user_id

    // GET Artists
    axios.get('https://vinyl-backend-api.herokuapp.com/artists').then(response => {
      this.setState({artists: response.data.artists})
    }).catch(error => {
      console.log('Error fetching and parsing data', error)
    })

    // GET Artist Roster
    axios.get('https://vinyl-backend-api.herokuapp.com/users/' + user, auth).then(response => {
      this.setState({roster: response.data.user.artists})
      this.setState({user_roster: response.data.user.rosters[0]})
      console.log(response.data.user.artists)

    }).catch(error => {
      console.log('Error fetching and parsing data', error)
    })

    // GET Events
    axios.get('https://vinyl-backend-api.herokuapp.com/events').then(response => {
      this.setState({events: response.data.events})
      console.log(response.data.events)
    }).catch(error => {
      console.log('Error fetching and parsing data', error)
    })

    // GET User Events
    axios.get('https://vinyl-backend-api.herokuapp.com/users/' + user, auth).then(response => {
      this.setState({user_events: response.data.user.events})
      console.log(response.data.user.user_events)

    }).catch(error => {
      console.log('Error fetching and parsing data', error)
    })

    // GET Roster Artists
    axios.get('https://vinyl-backend-api.herokuapp.com/artist_rosters/').then(response => {
      this.setState({artist_roster: response.data.artist_rosters})
      console.log(response.data.artist_rosters)

    }).catch(error => {
      console.log('Error fetching and parsing data', error)
    })
  }

  componentDidMount() {
    this.getUserEvents()
  }

  // Sign Out
  signOut = () => {
    let self = this

    let userToken = this.props.data.token

    let user = this.props.data.user_id
    console.log(user)

    let auth = {
      headers: {
        "Authorization": 'Token ' + userToken
      }
    }

    axios.delete('https://vinyl-backend-api.herokuapp.com/sign-out/' + user, auth).then(response => {
      console.log(response)
    }).catch(error => {
      console.log('Error fetching and parsing data', error)
    })
  }

  toggleVisibility = () => this.setState({
    visible: !this.state.visible
  })

  render() {

    return (
      <Layout style={{
        height: '100vh'
      }}>
        <Sider style={{
          background: '#272F42',
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0
        }} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Sidebar_nav/>
        </Sider>
        <Layout style={{
          marginLeft: 200
        }}>
          <Header style={{
            background: '#fff',
            padding: 0
          }}>
            <Row>
              <Col span={20}></Col>
              <Col>
                    <Button inverted>Log in</Button>
                    <Button inverted style={{ marginLeft: '0.5em' }}>Sign Out</Button>
              </Col>
            </Row>
          </Header>
          <Content style={{
            margin: '0 16px'
          }}>
            <Route path="/dashboard/events" render={() => <EventsList getUserEvents={this.getUserEvents} data={this.state.events} user={this.props.data.user_id} artists={this.state.artists}/>}/>
            <Route path="/dashboard/myevents" render={({history}) => <MyEventsList getUserEvents={this.getUserEvents} data={this.state.user_events} user={this.props.data.user_id} artists={this.state.artists}/>}/>
            <Route path="/dashboard/artists" render={() => <ArtistList getUserEvents={this.getUserEvents} data={this.state.artists}/>}/>
            <Route path='/dashboard' render={() => <LandingDash getUserEvents={this.getUserEvents} data={this.state.user_events} user={this.props.data.user_id} artists={this.state.artists} roster={this.state.roster} userRoster={this.state.user_roster} artistRoster={this.state.artist_roster}/> }/>

          </Content>
          <Footer style={{
            textAlign: 'center'
          }}>
            Vinyl Made in PVD with love.
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Dashboard
