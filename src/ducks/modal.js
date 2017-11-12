// Actions
const SHOW_MODAL = 'stories/modal/SHOW_MODAL';
const HIDE_MODAL = 'stories/modal/HIDE_MODAL';

const initialState = {show: false}

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
          ...state,
          show: true,
          }

    case HIDE_MODAL:
      return {
        ...state,
        show: false,
      }
    default:
      return state;
  }
}

// Action Creators

export const showModal = () => {
  return { type: SHOW_MODAL };
}

export const hideModal = () => {
  return { type: HIDE_MODAL };
}

export default reducer;
