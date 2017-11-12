import React from 'react'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import firebase from 'firebase'

const LoginScreen = (props) => {

  console.log(props)

  const {loged} = props

  return (
    <div>
      <button onClick={() => firebase.login({ provider: 'google', type: 'popup' })}>Log in using Google</button>
    </div>
  )
}

export default LoginScreen;
