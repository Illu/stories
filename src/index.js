import './style.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import rootReducer from './ducks/rootReducer'
import App from './components/App'
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'
import firebase from 'firebase';

const fbConfig = {
    apiKey: "AIzaSyAH3qTRd9y1oFFMm0L67sAs9ktl6q-fSxI",
    authDomain: "stories-bfc08.firebaseapp.com",
    databaseURL: "https://stories-bfc08.firebaseio.com",
    projectId: "stories-bfc08",
    storageBucket: "stories-bfc08.appspot.com",
    messagingSenderId: "267362456666"
  };


const rrfConfig = {
  userProfile: 'users',
}

firebase.initializeApp(fbConfig)

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  reactReduxFirebase(firebase, rrfConfig)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
