import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'


export default class Landing extends Component {
  render() {

    return (
      <div>
          <Segment
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em', backgroundImage: "url('https://i.imgur.com/38l2ifp.png')" }}
            vertical
            className="bg-img"
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item as='a' position='left'>
                  <Image
                    size='small'
                    src='https://i.imgur.com/RgbXSsg.png'
                    alt='Logo'
                    style={{ marginRight: '1.5em' }}
                  />
                </Menu.Item>
                <Menu.Item as='a'></Menu.Item>
                <Menu.Item as='a'></Menu.Item>
                <Menu.Item as='a'></Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' href='/sign-in' inverted>Log in</Button>
                  <Button as='a' href='/sign-up' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
              </Menu>
            </Container>

            <Container>
              <Header
                as='h1'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                inverted
                content='Experience your cities nightlife in the palm of your hands.'

                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />

              <Image
                size='small'
                src='https://i.imgur.com/q5Ex1lv.png'
                alt='Logo'
                style={{ margin: '0 auto' }}
              />
            </Container>
          </Segment>
      </div>
    )
  }
}
