import React, {Component} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 50px;
  background: ${props => props.modalState ? 'rgb(249, 94, 125)' : 'rgb(71, 134, 255)'};
  box-shadow: 0px 5px 20px 0px rgba(71, 134, 255, 0.5);
  border-radius: 25px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transform: rotate(${props => props.modalState ? 45 : 0}deg);
  transition: .2s ease;
`

const Icon = styled.i`
  color: #fff;
  width: 50px;
  text-align: center
`

class CreateStoryButton extends Component {

  state = {
    open: false,
  }

  toggleOpen() {
    this.setState({open: !this.state.open})
  }

  render() {

    const {showModal, hideModal, modalState} = this.props
    const {open} = this.state;

    return (
      <Wrapper onClick={() => {modalState ? hideModal() : showModal()}} modalState={modalState}>
        <Icon className="fa fa-plus"/>
      </Wrapper>
    )
  }
}

export default CreateStoryButton;
