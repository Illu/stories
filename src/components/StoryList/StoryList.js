import React from 'react'
import styled from 'styled-components'
import StoryCard from '../StoryCard/StoryCard'
import Loader from '../Loader'
import ScreenTitle from '../ScreenTitle/ScreenTitle'
import {NAVBAR_HEIGHT} from '../constants'

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-grow: 1;
  margin: 0 calc(5% - 5px);
`

const StoryList = (props) => {

  const {stories} = props.firebase.data;
  const {history} = props;

  if (stories) {
  return (
    <div>
      <ScreenTitle title="Explore stories" icon="bookmark"/>
      <ListWrapper>
        {Object.keys(stories).map((story => (
          <StoryCard
            story={stories[story]}
            key={story}
            id={story}
            showStory={props.showStory}
            history={history}
          />
        )))}
      </ListWrapper>
    </div>
  )
} else {
  return (
    <Loader />
  )
}
}


export default StoryList;
