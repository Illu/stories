import React from 'react';
import styled from 'styled-components';
import { NAVBAR_HEIGHT } from '../constants'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px calc(5% + 5px);
  align-items: center;
  margin-top: calc(${NAVBAR_HEIGHT}px + 30px);
`

const TitleText = styled.h3`
  color: #000;
  font-size: 15px;
  margin-left: 15px;
`

const IconWrapper = styled.div`
  height: 40px;
  width: 40px;
  background: rgb(71, 134, 255);
  border-radius: 8px;
  box-shadow: 0px 0px 20px 0px rgba(71, 134, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Icon = styled.i`
  color: #fff;
`

const ScreenTitle = ({title, icon}) => (
  <Wrapper>
      <IconWrapper>
        <Icon className={`fa fa-${icon}`}/>
      </IconWrapper>
      <TitleText>{title}</TitleText>
  </Wrapper>
)

export default ScreenTitle
