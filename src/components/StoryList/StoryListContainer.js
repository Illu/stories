import { connect } from 'react-redux'
import StoryList from './StoryList'
import {showStory} from '../../ducks/story'

const mapStateToProps = (state) => {
  return {
    firebase: state.firebase,
    story: state.story,
  }
}

const mapDispatchToProps = (dispatch) => ({
  showStory: (id) => {
      dispatch(showStory(id))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(StoryList)
