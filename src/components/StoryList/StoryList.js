import React from 'react'
import styled from 'styled-components'
import StoryCard from '../StoryCard/StoryCard'
import Loader from '../Loader'

const ListWrapper = styled.div`
  height: auto;
  max-height: 80vh;
  overflow: scroll;
`

const StoryList = (props) => {

  const {stories} = props.firebase.data;

  if (stories) {
  return (
    <ListWrapper>
      {Object.keys(stories).map((story => (
        <StoryCard
          story={stories[story]}
          key={story}
          id={story}
          showStory={props.showStory}/>
      )))}
    </ListWrapper>
  )
} else {
  return (
    <Loader />
  )
}
}


export default StoryList;
