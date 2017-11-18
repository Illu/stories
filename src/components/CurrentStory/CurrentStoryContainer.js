import { connect } from 'react-redux'
import CurrentStory from './CurrentStory'
import {closeStory} from '../../ducks/story'
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    firebase: state.firebase,
    story: state.story,
  }
}

const mapDispatchToProps = (dispatch) => ({
  closeStory: () => {
      dispatch(closeStory())
    },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrentStory))
