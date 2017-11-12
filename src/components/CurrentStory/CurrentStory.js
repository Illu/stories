import React, {Component} from 'react'
import styled from 'styled-components'
import firebase from 'firebase'

const colors = {
  red: 'rgb(249, 116, 119)',
  blue: 'rgb(125, 143, 255)',
  yellow: 'rgb(247, 182, 19)',
}

const Wrapper = styled.div`
  padding: 20px 20px;
  border-radius: 4px;
  background: ${props => props.bg};
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`

const WordsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Word = styled.p`
  color: #fff;
`

const WordInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: rgb(33, 206, 153);
  border-radius: 4px;
  margin-top: 50px;
`

const WordInput = styled.input`
  margin: 20px 0;
  outline: none;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #fff;
  transition: .3s;
  font-size: 17px;

  &::placeholder{
    color: #ddd;
  }

  &:focus{
    border-bottom: 1px solid #fff;
  }
`

const SubmitButton = styled.button`
  color: #fff;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
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

  fetch("https://us-central1-stories-bfc08.cloudfunctions.net/app/addword", {method: 'POST', headers: myHeaders, body: myBody})
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


      return (
        <Wrapper bg={colors[stories[storyId].color]}>
          <WordsWrapper>
            {Object.keys(words).map((wordId) => {
              return(
                  <Word key={wordId}>{words[wordId].word}&nbsp;</Word>
              )
            })}
          </WordsWrapper>
          <WordInputWrapper>
            <WordInput
              type='text'
              placeholder="Write the next word..."
              onChange={evt => this.updateText(evt.target.value)}
              value={text}/>
            <SubmitButton
              onClick={() => {
                  this.updateText('')
                  text !== '' && addWord(storyId, text)
                }
              }
              >
                <i className='fa fa-pencil fa-2x'/>
            </SubmitButton>
          </WordInputWrapper>
        </Wrapper>
      )
    } else {
      return (
        <h1>{'<-- Select a story from the list'}</h1>
      )
    }
  }
}

export default CurrentStory
