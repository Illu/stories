import { connect } from 'react-redux'
import CurrentStory from './CurrentStory'

const mapStateToProps = (state) => {
  return {
    firebase: state.firebase,
    story: state.story,
  }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentStory)
