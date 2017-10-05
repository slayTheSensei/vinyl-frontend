import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, Card } from 'semantic-ui-react'
import axios from 'axios'


const Sidebar_nav = props => {

  return(
    <div>
    <Menu.Item name='home'>
      <Icon name='home' />
      Home
    </Menu.Item>
    <Menu.Item name='ticket'>
      <Icon name='ticket' />
      Events
    </Menu.Item>
    <Menu.Item name='options'>
      <Icon name='options' />
      Artists
    </Menu.Item>
    </div>
  );
}

export default Sidebar_nav
