import React, { Component } from 'react'
import { Image, Button } from 'semantic-ui-react'
import { Card, Icon, message, Popconfirm, Tooltip } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

class Artist extends Component {

  // toProfile = () => {
  //   this.props.history.push(`/`)
  // }

  render() {
    function artistConfirm(e) {
    console.log(this.props);
    let self = this
    let data = {
      artist_roster: {
        roster_id: this.props.roster,
        artist_id: this.props.artist
        }
      }
      axios.post('https://vinyl-backend-api.herokuapp.com/artist_rosters/', data)
      .then(function (response) {
        console.log(response)
      })
      .then(this.props.render)
    .catch(function (error) {
      console.log(error);
      })
    }

    function artistCancel(e) {
    console.log(e);
    }

    return(
      <Card style={{ margin: '15px', width: 240 }} bodyStyle={{ padding: 0 }}>
        <div className="custom-image dim">
          <img alt="example" width="100%" src={this.props.image} />
          <div class="overlay"></div>
            <Popconfirm title="Are you sure add this dj to Roster?" onConfirm={artistConfirm} onCancel={artistCancel} okText="Yes" cancelText="No" roster={this.props.userRoster.id} artist={this.props.artistId} render={this.props.render} >
              <Tooltip title="Add DJ to roster">
              <Icon style={{ fontSize: 60 }} type="plus-circle" className='text'/>
              </Tooltip>
            </Popconfirm>
        </div>
        <div className="custom-card">
          <h3>{this.props.name}</h3>
          <p>{this.props.genre}</p>
        </div>
      </Card>
    )
  }
}

export default withRouter(Artist)
