import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import { Menu, Icon, Layout} from 'antd';

const { Header } = Layout;

const Sidebar_nav = props => {

  return(
    <div>
      <Header style={{ background: '#1A1F24', padding: 0, color: 'white', textAlign: "center" }}>
        <img src={ require('./../../images/vinyl-logo.png') } />
        </Header>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{ background: '#272F42'}}>
          <div style={{ height: '40px' }}>
          </div>
        <Menu.Item key="1"><Link to={'/dashboard'}>
          <Icon type="pie-chart" />
          <span>Dashboard</span>
        </Link></Menu.Item>
        <Menu.Item key="2"><Link to={'/dashboard/'}>
          <Icon type="environment-o" />
          <span>Map</span>
        </Link></Menu.Item>
        </Menu>
      </div>
  );
}

export default Sidebar_nav
