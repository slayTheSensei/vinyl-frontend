import _ from 'lodash'
import React from 'react'
import { Button, Header, Icon, Image, Modal, Item, Label } from 'semantic-ui-react'

const ArtistModal = () => (
    <Modal.Content image scrolling>
      <Image
        size='medium'
        src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png'
        wrapped
      />
      <Modal.Description>
        <Header>DJ Slick Vick</Header>
        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

        <Button positive size="mini">Add</Button>
      </Modal.Description>
    </Modal.Content>
)

export default ArtistModal
