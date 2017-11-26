import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'
import firebase from 'firebase'
import ScreenTitle from '../ScreenTitle/ScreenTitle'
import { Link } from 'react-router-dom'
import { colors } from '../constants'

const StoryWrapper = styled.div`
  padding: 20px 20px;
  border-radius: 8px;
  background: #fff;
  margin: 10px 5%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 0px #eee;
  max-width: 500px;
`

const WordsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Word = styled.p`
  color: black;
  margin: 3px 2px;
`

const WordInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 100px;
  margin: 0 auto;
  margin-top: 50px;
  border: 1px solid ${props => props.bg};
  max-width: 300px;
`

const WordInput = styled.input`
  margin: 10px;
  outline: none;
  background-color: transparent;
  border: none;
  color: ${props => props.color};
  font-size: 17px;
  &::placeholder{
    color: #ddd;
  }
`

const SubmitButton = styled.button`
  color: ${props => props.color};
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const StoryTitle = styled.h1`
  color: ${props => props.color};
  font-size: 40px;
  text-align: center;
  margin: 20px;
`


const addWord = (storyId, word) => {

  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {

  const myHeaders = {
    'authorization': 'Bearer ' + idToken,
  }

  const myBody = JSON.stringify({
    storyId,
    word,
  })

  fetch("https://us-central1-stories-bfc08.cloudfunctions.net/app/addword",
    {method: 'POST',
     headers: myHeaders,
      body: myBody
    }
  )
  .then((res) => res.text())
  .then((data) => console.log("Hooray! you wrote a word!", data))
  .catch((err) => {
    console.log("error", err)
  })

}).catch(function(error) {
  console.error("Could not retrieve user token")
});
}

class CurrentStory extends Component {

  state = {
    text: '',
  }

  updateText(text){
    text = text.replace(/\s/g, "");
    this.setState({text});
  }

  checkEnterKey(e, text, storyId) {
    if (e.key === 'Enter') {
      text !== '' && addWord(storyId, text);
      this.updateText('');
    }
  }

  render(){

    const {showStory, storyId} = this.props.story;

    if (showStory){

      const {stories} = this.props.firebase.data;
      const words = stories[storyId].words;
      const {text} = this.state;

      const backgroundColor = colors[stories[storyId].color]

      const {closeStory} = this.props;
      return (
        <MainWrapper >
          <Link to='/stories/explore' onClick={() => closeStory()}>
            <ScreenTitle title="Back to the list" icon="chevron-left" />
          </Link>
        <StoryWrapper>
          <StoryTitle color={backgroundColor}>Story Title</StoryTitle>
          <WordsWrapper>
            {Object.keys(words).map((wordId) => {
              return(
                  <Word key={wordId}>{words[wordId].word}</Word>
              )
            })}
          </WordsWrapper>
          <WordInputWrapper bg={backgroundColor}>
            <WordInput
              type='text'
              placeholder="Write the next word..."
              onChange={evt => this.updateText(evt.target.value)}
              onKeyPress={e => this.checkEnterKey(e, text, storyId)}
              value={text}
              color={backgroundColor}
            />
            <SubmitButton
              color={backgroundColor}
              onClick={() => {
                  this.updateText('')
                  text !== '' && addWord(storyId, text)
                }
              }
              >
                <i className='fa fa-pencil fa-2x'/>
            </SubmitButton>
          </WordInputWrapper>
        </StoryWrapper>
      </MainWrapper>
      )
    } else {
      return (
        <MainWrapper>
          <Link to='/stories/explore'>
            <ScreenTitle title="Back to the list" icon="chevron-left" />
          </Link>
          <StoryWrapper>
            <h1>{"Sorry, you can't access a story from a link yet !"}</h1>
          </StoryWrapper>
        </MainWrapper>
      )
    }
  }
}

export default CurrentStory
