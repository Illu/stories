import { connect } from 'react-redux'
import { login, logout } from '../../ducks/login'
import LoginScreen from './LoginScreen'

const mapStateToProps = (state) => {
  return {
    loged: state.login.loged,
    firebase: state.firebase,
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: () => {
      dispatch(login())
    },
  logout: () => {
      dispatch(logout())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
