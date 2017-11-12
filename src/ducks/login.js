// Actions
const LOGIN = 'stories/auth/LOGIN';
const LOGOUT = 'stories/auth/LOGOUT';
const LOGIN_ERROR = 'stories/auth/LOGIN_ERROR';
const LOGIN_SUCCESS = 'stories/auth/LOGIN_SUCCESS';

const initialState = {loged: false}

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
          ...state,
          loged: true,
          }

    case LOGOUT:
      return {
        ...state,
        loged: false,
      }
    default:
      return state;
  }
}

// Action Creators

export const login = () => {
  return { type: LOGIN, payload: true};
}

export const logout = () => {
  return { type: LOGOUT, payload: false};
}


// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }

export default reducer;
