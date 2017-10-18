import React from 'react'
import { Table, Icon, Popconfirm, message } from 'antd';


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
        <Popconfirm title="Are you sure delete this event?" onConfirm={eventConfirm} onCancel={eventCancel} okText="Yes" cancelText="No">
        <a href="">Delete</a>
        </Popconfirm>
        <span className="ant-divider" />
        <a href="#">
          Edit
        </a>
      </span>
    )}];

    function eventConfirm(e) {
      console.log(e);
      message.success('Artist Deleted');
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
