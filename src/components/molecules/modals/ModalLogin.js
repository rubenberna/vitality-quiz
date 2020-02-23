import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Input } from 'semantic-ui-react'
import styled from 'styled-components'

const OpenBtn = styled(Button)`
  background: #e0e0e0 !important;
  color: #FFFFFF !important;
  width: 180px;
  &:hover {
    background: #bdbdbd !important;
  }
`
export default class ModalLogin extends Component {
  state = {
    modalOpen: false,
    email: '',
    loading: false
   }


  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  renderMsg = () => {
    const { msg } = this.props
    if (msg) {
      return <p>{ msg }</p>
    }
  }

  submitEmail = async () => {
    this.setState({ loading: true })
    await this.props.validate(this.state.email)
    setTimeout(() => this.setState({ loading: false }), 500)
  }

  renderModal = () => {
    return (
      <Modal
        trigger={<OpenBtn onClick={this.handleOpen}>Jullie hebben mijn email al!</OpenBtn>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header content='x' className='modal-close' onClick={this.handleClose}/>
        <Header icon='browser' content='Hé jij weer!' />
        <Modal.Content>
          <div className='text'>
            <p>Wil je graag andere tekorten testen? Of onze test nog eens opnieuw doen? Gelieve dan uw email adres in te vullen zodat we de kennismaking kunnen overslagen.</p>
            { this.renderMsg() }
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Input
            placeholder='Enter your email...'
            type='email'
            onChange={ e => this.setState({ email: e.target.value }) }
            onFocus={ e => this.props.clearError() }
          />
          <Button color='green' loading={this.state.loading} onClick={e => this.submitEmail() } inverted>
            <Icon name='checkmark' /> Verder
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

  render() {
    return this.renderModal()
  }
}
