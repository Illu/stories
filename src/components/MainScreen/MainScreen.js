import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import ScreenTitle from '../ScreenTitle/ScreenTitle'
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

const ContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`
const CardWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
`

const MainScreen = ({showModal, hideModal, modal, firebase}) => (
    <div>
      <Navbar profileData={firebase.auth}/>
      <ContentWrapper>
        <ScreenTitle title="Your dashboard"/>
        <CardWrapper>
          <Card title="Explore Stories">
            <StoryList />
          </Card>
          <Card title="Your Stories">
            <h1>Comming soon!</h1>
          </Card>
          <Card title="Current Story">
            <CurrentStory />
          </Card>
      </CardWrapper>
      </ContentWrapper>
      <CreateStoryButton
        showModal={showModal}
        hideModal={hideModal}
        modalState={modal.show}
      />
      {modal.show && <CreateStoryModal />}
    </div>
)

export default MainScreen
