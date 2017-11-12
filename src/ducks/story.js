// Actions
const SHOW_STORY = 'stories/story/SHOW_STORY';

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
    default:
      return state;
  }
}

// Action Creators
export const showStory = (id) => {
  return { type: SHOW_STORY, payload: id };
}

export default reducer;
