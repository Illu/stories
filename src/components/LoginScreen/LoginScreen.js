import React from 'react'
import styled from 'styled-components'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import firebase from 'firebase'
import {book} from './book.png'

const LoginButton = styled.button`
  padding: 15px 40px;
  background: rgb(43, 78, 162);
  color: white;
  font-weight: bold;
  border: none;
  text-transform: uppercase;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
`

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`

const LoginContainer = styled.div`
  background: white;
  box-shadow: 0px 0px 10px 0px #eee;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px;
`

const Description = styled.p`
  color: #333;
  margin-bottom: 20px;
`

const Section = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 200px;
  padding: 30px;
  justify-content: center;
`

const BookImg = styled.img`
  flex: 1;
  max-width: 100px;
  margin: 20px;
`

const AppTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  width: 100%;
  margin: 50px 0 0 0;
  font-family: 'Damion', cursive;
  color: rgb(43, 78, 162);
`

const LoginScreen = (props) => {

  const {loged} = props

  return (
    <MainWrapper>
      <LoginContainer>
        <AppTitle>Stories</AppTitle>
        <Section>
          <BookImg src={require('./book.png')} alt='book'/>
        </Section>
        <Section>
          <Description>Write stories, together</Description>
          <LoginButton onClick={() => firebase.login({ provider: 'google', type: 'popup' })}>Log in using Google</LoginButton>
        </Section>
      </LoginContainer>
    </MainWrapper>
  )
}

export default LoginScreen;
