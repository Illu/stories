import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0;
  align-items: center;
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

const ScreenTitle = ({title}) => (
  <Wrapper>
      <IconWrapper>
        <Icon className="fa fa-bookmark"/>
      </IconWrapper>
      <TitleText>{title}</TitleText>
  </Wrapper>
)

export default ScreenTitle
