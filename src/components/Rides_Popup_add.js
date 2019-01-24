import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import RidesFormAdd from './Rides_form_add';

class ModalExampleCloseConfig extends Component {
  state = { open: false }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state

    return (
      <div>
        <Button color="yellow" onClick={this.closeConfigShow(true, false)}>Dodaj Przejazd</Button>

        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Dodaj Przejazd</Modal.Header>
          <Modal.Content>
            <RidesFormAdd/>
          </Modal.Content>
          <Modal.Actions>
            <Button
              onClick={this.close}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Zamknij formularz'
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalExampleCloseConfig