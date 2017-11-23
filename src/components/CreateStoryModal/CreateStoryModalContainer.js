import { connect } from 'react-redux'
import CreateStoryModal from './CreateStoryModal'
import { hideModal } from '../../ducks/modal'

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  }
}

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
      dispatch(hideModal())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateStoryModal)
