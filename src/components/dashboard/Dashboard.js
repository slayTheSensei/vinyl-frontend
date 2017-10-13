import React from 'react'
import { Sidebar, Segment, Menu, Item, Header } from 'semantic-ui-react'
import axios from 'axios'

import {
  Route
} from 'react-router-dom'

// importing components
import ArtistList from './views/ArtistList.js'
import EventsList from './views/EventsList.js'
import Events from './views/Events.js'
import Sidebar_nav from './Sidebar_nav.js'
import MyEventsList from './views/MyEventsList.js'
import LandingDash from './views/LandingDash.js'
import CreateEvent from './views/CreateEvent.js'

class Dashboard extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    artists: [],
    events: [],
    user_events: [],
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
//   axios.get('http://localhost:4741/users/' + this.user, this.auth)
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
        "Authorization" : 'Token ' + userToken
      }
    }
  let user = self.props.data.user_id

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
    console.log(response.data.events)
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error)
  })

// GET User Events
  axios.get('http://localhost:4741/users/' + user, auth)
    .then(response => {
    this.setState({
      user_events: response.data.user.events
    })
    console.log(response.data.user.user_events)

  })
  .catch(error => {
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
        "Authorization" : 'Token ' + userToken
      }
    }

axios.delete('http://localhost:4741/sign-out/' + user, auth)
  .then(response => {
  console.log(response)
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error)
  })
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })


  render() {
    const { visible } = this.state

    const results = this.state.user_events;
    // console.log(results)

    let events = results.map(event =>
      <Events name={event.name} id={event.id} venue={event.venue} />
    )

    return (
      <div className="app side">
        <div>
        <Sidebar.Pushable as={Segment} >
          <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Sidebar_nav />
          </Sidebar>
          <Sidebar.Pusher className="side">
            <Segment basic>

                <Route path="/dashboard/events" render={ () => <EventsList getUserEvents={this.getUserEvents} data={this.state.events} user={this.props.data.user_id} artists={this.state.artists} />} />
                <Route path="/dashboard/myevents" render={ ({history}) => <MyEventsList getUserEvents={this.getUserEvents} data={this.state.user_events} user={this.props.data.user_id} artists={this.state.artists} />} />
                <Route path="/dashboard/artists" render={ () => <ArtistList getUserEvents={this.getUserEvents} data={this.state.artists} />} />
                <Route exact path='/dashboard' render={ ()=> <LandingDash />} />
                <Route path='/dashboard/createevent' render={ ()=> <CreateEvent getUserEvents={this.getUserEvents} user={this.props.data.user_id} />} />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </div>
    )
  }
}

export default Dashboard
