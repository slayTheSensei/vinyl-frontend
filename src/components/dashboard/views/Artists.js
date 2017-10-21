import React, { Component } from 'react'
import { Image, Button } from 'semantic-ui-react'
import { Card, Icon, message, Popconfirm, Tooltip } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

class Artist extends Component {

  componentDidMount() {

    console.log(this.props.roster)
    console.log(this.props.artistId)
  }


  render(props) {
    const findArtist = (artist) => {
      return artist.id === this.props.artistId
    }

    let owned = this.props.roster.find(findArtist)
    let button = null

    // conditional rendering for artist_roster
    if (owned) {
      button =
      <Popconfirm title="Are you sure add this dj to Roster?" onConfirm={artistConfirm} onCancel={artistCancel} okText="Yes" cancelText="No" roster={this.props.userRoster.id} ownedRoster={this.props.roster} artist={this.props.artistId} render={this.props.render} find={this.props.findArtist} >
        <Tooltip title="Add artist to roster">
          <Icon style={{ fontSize: 25, color: 'red' }} type="minus-circle"/>
        </Tooltip>
      </Popconfirm>
    } else {
      button =
      <Popconfirm title="Are you sure add this dj to Roster?" onConfirm={artistConfirm} onCancel={artistCancel} okText="Yes" cancelText="No" roster={this.props.userRoster.id} artist={this.props.artistId} render={this.props.render} >
        <Tooltip title="Add artist to roster">
          <Icon style={{ fontSize: 25 }} type="plus-circle"/>
        </Tooltip>
      </Popconfirm>
    }

    function artistConfirm(e) {
      let self = this

      const findArtist = (artist) => {
        return artist.id === this.props.artist
      }

      console.log(this.props.ownedRoster.find(findArtist).id)
      console.log(this)

    // let data = {
    //   artist_roster: {
    //     roster_id: this.props.roster,
    //     artist_id: this.props.artist
    //     }
    //   }
    // axios.post('https://vinyl-backend-api.herokuapp.com/artist_rosters/', data)
    // .then(function (response) {
    //   console.log(response)
    // })
    // .then(this.props.render)
    // .catch(function (error) {
    // console.log(error);
    // })
  }

  function artistCancel(e) {
  console.log(this.props);
  }

  return(
    <Card style={{ margin: '15px', width: 240 }} bodyStyle={{ padding: 0 }}>
      <div className="custom-image dim">
        <img alt="example" width="100%" src={this.props.image} />
        <div class="overlay"></div>
        <Icon style={{ fontSize: 30 }} type="plus" className='text'/>
      </div>
      <div className="custom-card">
        <h3>{this.props.name}</h3>
          {button}
      </div>
    </Card>
    )
  }
}

export default withRouter(Artist)
