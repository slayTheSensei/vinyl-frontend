import React from 'react'
import { Table, Icon, Popconfirm, message } from 'antd';
import axios from 'axios'

class EventDash extends React.Component {

  render() {

    // Event Columns
    const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    }, {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    }, {
    title: 'Venue',
    dataIndex: 'venue',
    key: 'venue',
    }, {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <Popconfirm title="Are you sure delete this event?" onConfirm={eventConfirm} onCancel={eventCancel} okText="Yes" cancelText="No" event={record.id} render={this.props.render} >
        <a href="">Delete</a>
        </Popconfirm>
        <span className="ant-divider" />
        <a href="#">
          Edit
        </a>
      </span>
    )}];

    function eventConfirm(e) {
      console.log(this.props.event)
      console.log(this.props.render)

      let self = this
      let data = {
          id: self.props.event
      }

      // Delete Event
      axios.delete('https://vinyl-backend-api.herokuapp.com/events/' + self.props.event, data)
      .then(function (response) {
        console.log(response);
      })
      .then(self.props.render)
      .catch(function (error) {
        console.log(error)
      })
      message.success('Event Deleted');
    }

    function eventCancel(e) {
      console.log(e);
      message.error('Canceled');
    }

    return(
      <Table dataSource={this.props.data} pagination={{ pageSize: 4 }} columns={columns} />
    )
  }
}

export default EventDash
