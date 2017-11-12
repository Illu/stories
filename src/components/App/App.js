import React from 'react';
import LoginScreen from '../LoginScreen'
import MainScreen from '../MainScreen'
import styled from 'styled-components'
import Loader from '../Loader'

const AppWrapper = styled.div`
    background: rgb(245, 247, 250);
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
`

const App = ({firebase}) => (
  <AppWrapper>
    {firebase.auth.isLoaded ? (
    firebase.auth.uid ? (
      <MainScreen />
    ) : (
      <LoginScreen />
    )) : (
      <Loader />
    )}
  </AppWrapper>
);

export default App;
