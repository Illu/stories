import { connect } from 'react-redux'
import CreateStoryModal from './CreateStoryModal'

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateStoryModal)
