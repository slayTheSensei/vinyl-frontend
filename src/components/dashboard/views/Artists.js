import React, { Component } from 'react'
import { Image, Button } from 'semantic-ui-react'
import { Card, Icon, message, Popconfirm } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

class Artist extends Component {

  // toProfile = () => {
  //   this.props.history.push(`/`)
  // }

  render() {
    <Popconfirm title="Are you sure delete this artist?" onConfirm={artistConfirm} onCancel={artistCancel} okText="Yes" cancelText="No">
    </Popconfirm>
    function artistConfirm(e) {
    console.log(this);
    message.success('DJ Added');
    }

    function artistCancel(e) {
    console.log(e);
    }
    return(
      <Card style={{ margin: '15px', width: 240 }} bodyStyle={{ padding: 0 }}>
        <div className="custom-image dim">
          <img alt="example" width="100%" src={this.props.image} />
          <div class="overlay"></div>
            <Popconfirm title="Are you sure delete this artist?" onConfirm={artistConfirm} onCancel={artistCancel} okText="Yes" cancelText="No">
              <Icon style={{ fontSize: 60 }} type="plus-circle" className='text'/>
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
