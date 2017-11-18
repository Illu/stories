// Actions
const SHOW_STORY = 'stories/story/SHOW_STORY';
const CLOSE_STORY = 'stories/story/CLOSE_STORY'

const initialState = {showStory: false, storyId: ''}

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_STORY:
      return {
          ...state,
          showStory: true,
          storyId: action.payload,
        }
    case CLOSE_STORY:
      return {
          ...state,
          showStory: false,
          storyId: '',
        }
    default:
      return state;
  }
}

// Action Creators
export const showStory = (id) => {
  return { type: SHOW_STORY, payload: id };
}
export const closeStory = () => {
  return { type: CLOSE_STORY };
}

export default reducer;
