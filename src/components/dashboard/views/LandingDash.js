import React from 'react'
import { Row, Col, Table, Icon, Button, Popconfirm, message, Tooltip  } from 'antd'
import EventDash from './EventDash.js'
import { Card } from 'semantic-ui-react'
import { Route, BrowserRouter, withRouter } from 'react-router-dom'


import Artists from './Artists.js'
import CreateEvent from './CreateEvent.js'
import AvailableDj from './AvailableDj.js'
import DjProfile from './DjProfile.js'


class LandingDash extends React.Component {



toCreate = () => {
  this.props.history.push(`/dashboard/createevent`)
}

  render() {
    const artistColumns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
    }, {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Popconfirm title="Are you sure delete this artist?" onConfirm={artistConfirm} onCancel={artistCancel} okText="Yes" cancelText="No" artist={text} art={record} render={this.props.getUserEvents}>
          <a href="">Remove</a>
          </Popconfirm>

        </span>
      ),
    }];

    const results = this.props.artists;
    let artists = results.map((artist, index) =>
      <Artists name={artist.name} genre={artist.genre} bio={artist.bio} image={artist.image} render={this.props.getUserEvents} roster={this.props.roster} userRoster={this.props.userRoster} artistId={artist.id} artistRoster={this.props.artistRoster} key={index} />
    );

    function artistConfirm(e) {
      console.log(this);
      message.success('Event Deleted');
    }

    function artistCancel(e) {
      console.log(e);
      message.error('Canceled');
    }

  return(
    <div>
      <Row>
        <Col span={12}>
          <div style={{ padding: 24, background: '#fff', height: 400, margin: '12px 6px' }}>
            <Row>
              <Col span={1}>
                <Tooltip title="Create a new event">
                  <Button type="" size="medium" shape="circle" icon="plus" onClick={() => this.toCreate()} />
                </Tooltip>
              </Col>
              <Col span={5}>
              </Col>
              <Col span={12}>
                <h1 style={{ margin: '8px' }}>Your Events</h1>
              </Col>
            </Row>
            <div>
              <Route exact path="/dashboard" render={ () => <EventDash data={this.props.data} render={this.props.getUserEvents} />} />
              <Route exact path="/dashboard/profile/:id" render={ () => <EventDash data={this.props.data} render={this.props.getUserEvents} />} />
              <Route exact path='/dashboard/createevent' render={ ()=> <CreateEvent getUserEvents={this.props.getUserEvents} user={this.props.user} />} />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div style={{ padding: 24, background: '#fff', height: 400, margin: '12px 6px' }}>
            <h1>Artist Roster</h1>
            <Table columns={artistColumns} dataSource={this.props.roster} pagination={{ pageSize: 4 }} />
          </div>
        </Col>
      </Row>
      <div style={{ padding: 24, background: '#fff', minHeight: 400, margin: '6px' }}>
        <Route exact path='/dashboard/profile/:id' component={DjProfile}></Route>
        <Route exact path="/dashboard/" render={ ()=> <AvailableDj getUserEvents={this.props.getUserEvents} data={this.props.data} user={this.props.user} artists={this.props.artists} roster={this.props.roster} userRoster={this.props.userRoster} artistRoster={this.props.artistRoster} />}/>
        <Route exact path="/dashboard/createevent" render={ ()=> <AvailableDj getUserEvents={this.props.getUserEvents} data={this.props.data} user={this.props.user} artists={this.props.artists} roster={this.props.roster} userRoster={this.props.userRoster} artistRoster={this.props.artistRoster} />}/>
      </div>

    </div>
    );
  }
}

export default withRouter(LandingDash)
