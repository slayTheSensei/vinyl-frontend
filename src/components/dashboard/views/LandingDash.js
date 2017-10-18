import React from 'react'
import { Row, Col, Table, Icon, Button, Popconfirm, message  } from 'antd'
import EventDash from './EventDash.js'
import { Card } from 'semantic-ui-react'
import { Route, BrowserRouter, withRouter } from 'react-router-dom'


import Artists from './Artists.js'
import CreateEvent from './CreateEvent.js'

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
          <Popconfirm title="Are you sure delete this artist?" onConfirm={artistConfirm} onCancel={artistCancel} okText="Yes" cancelText="No">
          <a href="">Delete</a>
          </Popconfirm>
          <span className="ant-divider" />
          <a href="#">
            Edit
          </a>
        </span>
      ),
    }];

    const results = this.props.artists;
    let artists = results.map(artist =>
      <Artists name={artist.name} />
    );

    function artistConfirm(e) {
      console.log(e);
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
                <Button type="" size="medium" shape="circle" icon="plus" onClick={() => this.toCreate()} />
              </Col>
              <Col span={5}>
              </Col>
              <Col span={12}>
                <h1 style={{ margin: '8px' }}>Your Events</h1>
              </Col>
            </Row>
            <div>
              <Route exact path="/dashboard" render={ () => <EventDash data={this.props.data} />} />
              <Route exact path='/dashboard/createevent' render={ ()=> <CreateEvent getUserEvents={this.props.getUserEvents} user={this.props.user} />} />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div style={{ padding: 24, background: '#fff', height: 400, margin: '12px 6px' }}>
            <h1>Favorite Arists</h1>
            <Table columns={artistColumns} dataSource={this.props.artists} pagination={{ pageSize: 3 }} />
          </div>
        </Col>
      </Row>
      <div style={{ padding: 24, background: '#fff', minHeight: 400, margin: '6px' }}>
        <h1>Available Aritists</h1>
        <Card.Group itemsPerRow={3}>
        {artists}
      </Card.Group>
      </div>
    </div>
    );
  }
}

export default withRouter(LandingDash)
