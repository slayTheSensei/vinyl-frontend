import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, Card } from 'semantic-ui-react'
import axios from 'axios'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'


const Sidebar_nav = props => {

  return(
    <div>
    <Menu.Item name='home'><Link to="/dashboard">
      <Icon name='home' />
      Home
    </Link></Menu.Item>
    <Menu.Item name='ticket'><Link to="/dashboard/events">
      <Icon name='ticket' />
      Events
    </Link></Menu.Item>
    <Menu.Item name='options'><Link to="/dashboard/artists">
      <Icon name='options' />
      Artists
    </Link></Menu.Item>
    </div>
  );
}

export default Sidebar_nav
