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
`

const WordsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Word = styled.p`
  color: black;
`

const WordInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 100px;
  margin-top: 50px;
  border: 1px solid ${props => props.bg}
`

const WordInput = styled.input`
  margin: 20px 0;
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

const FadeAnim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: ${props => props.bg};
  animation: ${FadeAnim} 1.5s ease;
  z-index: -100;
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
  .then((data) => console.log(data))
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
    this.setState({text})
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
          <Background bg={backgroundColor}/>
          <Link to='/stories/explore' onClick={() => closeStory()}>
            <ScreenTitle title="Back to the list" icon="chevron-left" />
          </Link>
        <StoryWrapper>
          <WordsWrapper>
            {Object.keys(words).map((wordId) => {
              return(
                  <Word key={wordId}>{words[wordId].word}&nbsp;</Word>
              )
            })}
          </WordsWrapper>
          <WordInputWrapper bg={backgroundColor}>
            <WordInput
              type='text'
              placeholder="Write the next word..."
              onChange={evt => this.updateText(evt.target.value)}
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
        <h1>{"Sorry, you can't access a story from a link yet !"}</h1>
      )
    }
  }
}

export default CurrentStory
