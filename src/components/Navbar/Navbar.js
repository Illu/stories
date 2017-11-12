import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import firebase from 'firebase'

const NAVBAR_HEIGHT = 60;

const Wrapper = styled.div`
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  box-shadow: 1px 1px 10px 0px #ddd;
  position: relative;
`

const AppTitle = styled.h1`
  font-family: 'Damion', cursive;
  color: rgb(71, 134, 255);
  font-size: 30px;
`

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
`

const UserGreetings = styled.h2`
  color: rgb(154, 162, 167);
  font-size: 12px;
  letter-spacing: 0.5px;
  margin: 0 15px;
`

const Menu = styled.div`
  width: 100px;
  background: red;
  position: absolute;
  top: ${NAVBAR_HEIGHT}px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
`

const MenuButton = styled.button`
  background: rgb(254, 223, 229);
  border: none;
  color: rgb(249, 94, 125);
  cursor: pointer;
  text-align: center
  outline: none;
  width: 100%;
  padding: 10px;
  font-weight: bold;
`

class Navbar extends Component {

  state = {
    menuOpen: false,
  }

  updateMenuState() {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
    const { profileData } = this.props;
    const { menuOpen } = this.state;

    return (
      <Wrapper>
        <div />
        <AppTitle>Stories</AppTitle>
        <UserWrapper onClick={() => this.updateMenuState()}>
          <Avatar alt='Your avatar' src={profileData.photoURL}/>
          <UserGreetings>Hello, {profileData.displayName.split(' ')[0]}!</UserGreetings>
          {menuOpen && (
            <Menu>
              <MenuButton onClick={() => firebase.logout()}>Log out</MenuButton>
            </Menu>
          )}
        </UserWrapper>
      </Wrapper>
    )
  }
}

Navbar.PropTypes = {
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
}

Navbar.defaultProps = {
  username: 'Unknown',
}

export default Navbar;
