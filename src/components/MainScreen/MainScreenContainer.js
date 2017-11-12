import { connect } from 'react-redux'
import MainScreen from './MainScreen'
import {showModal, hideModal} from '../../ducks/modal'
import {  firebaseConnect} from 'react-redux-firebase'
import { compose } from 'redux'


const mapStateToProps = (state) => {
  return {
    firebase: state.firebase,
    modal: state.modal,
  }
}

const mapDispatchToProps = (dispatch) => ({
  showModal: () => {
      dispatch(showModal())
    },
  hideModal: () => {
      dispatch(hideModal())
    }

})

// export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
export default compose(
  firebaseConnect([
    '/stories'
    // { type: 'once', path: '/todos' } // for loading once instead of binding
    // '/todos#populate=owner:displayNames' // for populating owner parameter from id into string loaded from /displayNames root
    // '/todos#populate=collaborators:users' // for populating owner parameter from id to user object loaded from /users root
    // { path: 'todos', populates: [{ child: 'collaborators', root: 'users' }] } // object notation of population
    // '/todos#populate=owner:users:displayName' // for populating owner parameter from id within to displayName string from user object within users root
  ]),
  connect(mapStateToProps, mapDispatchToProps),
)(MainScreen)
