import React, { Component } from 'react'
import styled from 'styled-components'
import firebase from 'firebase'

const Wrapper = styled.div`
  background: rgb(71, 134, 255);
  box-shadow: 0px 5px 20px 0px rgba(71, 134, 255, 0.5);
  border-radius: 8px 25px 25px 8px;
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 90px;
  right: 30px;
`

const TextInput = styled.input`
  margin: 0 20px;
  outline: none;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #bbb;
  color: #fff;
  transition: .3s;

  &::placeholder{
    color: #bbb;
  }

  &:focus{
    border-bottom: 1px solid #fff;
  }
`

const ValidateButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background: rgb(33, 206, 153);
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  cursor: pointer;
`

const Icon = styled.i`
  color: #fff;
  width: 50px;
`

const sendCreation = (word) => {

  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {

  const myHeaders = {
    'authorization': 'Bearer ' + idToken,
  }

  const myBody = JSON.stringify({
    word,
  })

  fetch("https://us-central1-stories-bfc08.cloudfunctions.net/app/startstory", {method: 'POST', headers: myHeaders, body: myBody})
  .then((res) => res.text())
  .then((data) => console.log(data))
  .catch((err) => {
    console.log("error", err)
  })

}).catch(function(error) {
  console.error("Could not retrieve user token")
});
}

class CreateStoryModal extends Component {

  state = {
    text: '',
  }

  updateText(text){
    text = text.replace(/\s/g, "");
    this.setState({text})
  }

  render() {

    const {text} = this.state;

    return (
    <Wrapper>
      <TextInput
        type='text'
        placeholder="Enter the first word..."
        onChange={evt => this.updateText(evt.target.value)}
        value={text}
      />
      <ValidateButton onClick={() => {text !== '' && sendCreation(text)}}>
        <Icon className="fa fa-check" />
      </ValidateButton>
    </Wrapper>
    )
  }
}

export default CreateStoryModal
