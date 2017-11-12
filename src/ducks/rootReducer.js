import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'react-redux-firebase'
import login from './login'
import modal from './modal'
import story from './story'

const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  login,
  modal,
  story,
})

export default rootReducer;
