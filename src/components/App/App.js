import React from 'react';
import LoginScreen from '../LoginScreen'
import MainScreen from '../MainScreen'
import styled from 'styled-components'
import Loader from '../Loader'
import Navbar from '../Navbar/Navbar'
import {NAVBAR_HEIGHT} from '../constants'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const AppWrapper = styled.div`
  padding: 0;
  margin: 0;
`

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${NAVBAR_HEIGHT}px;
`

const App = ({firebase}) => (
  <Router>
  <AppWrapper>
    {firebase.auth.isLoaded ? (
    firebase.auth.uid ? (
      <MainScreen />
    ) : (
      <LoginScreen />
    )) : (
      <LoaderWrapper>
        <Navbar />
        <Loader />
      </LoaderWrapper>
    )}
  </AppWrapper>
</Router>
);

export default App;
