import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'
import CreateStoryButton from '../CreateStoryButton/CreateStoryButton'
import CreateStoryModal from '../CreateStoryModal'
import CurrentStory from '../CurrentStory'
import StoryList from '../StoryList/'
import {connect} from 'react-redux'
import { compose } from 'redux'
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  dataToJS
} from 'react-redux-firebase'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import {NAVBAR_HEIGHT} from '../constants'

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ContentWrapper = styled.div`

  flex: 1;
`

const CustomFlexCard = styled(Card)`
  flex: ${props => props.flex};
`

const AppRedirection = () => (
  <Redirect to={{
    pathname: '/stories/explore',
  }}/>
)

const MainScreen = ({showModal, hideModal, modal, firebase}) => (
    <MainWrapper>
      <Navbar profileData={firebase.auth}/>
      <ContentWrapper>
        <Route exact path="/" component={AppRedirection}/>
        <Route path="/stories/explore" component={StoryList}/>
        <Route path="/stories/edit" component={CurrentStory}/>
       </ContentWrapper>
      <CreateStoryButton
        showModal={showModal}
        hideModal={hideModal}
        modalState={modal.show}
      />
      {modal.show && <CreateStoryModal />}
    </MainWrapper>
)

export default MainScreen
