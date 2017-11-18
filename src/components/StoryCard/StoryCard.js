import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const colors = {
  red: 'rgb(249, 116, 119)',
  blue: 'rgb(125, 143, 255)',
  yellow: 'rgb(247, 182, 19)',
}

const Wrapper = styled.div`
  padding: 20px 10px;
  border-radius: 4px;
  background: ${props => props.bg};
  cursor: pointer;
  margin: 5px;
  flex: 1;
  min-width: 200px;
`

const Title = styled.h1`
  color: #fff;
  padding: 5px 0;
`

const WordCount = styled.h3`
  color: #ccc;
  font-size: 12px;
`

const StoryCard = (props) => {

  const {story, showStory, id, history} = props;

  const words = story.words;

  return (
      <Wrapper bg={colors[story.color]} onClick={() => {
          history.push('/stories/edit');
          showStory(id);
        }}>
        <Title>
          {words && words[Object.keys(words)[0]].word}
          ...
        </Title>
        <WordCount>{story.wordCount} word{story.wordCount > 1 && 's'}</WordCount>
      </Wrapper>
  )
}

export default StoryCard;
