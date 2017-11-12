import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = (state) => {
  return {
    firebase: state.firebase,
  }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
