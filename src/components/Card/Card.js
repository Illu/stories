import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  background: #fff;
  width: 25%;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px #eee;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  align-items: center;
`

const Circle = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 5px;
  border: 3px solid rgb(224, 226, 229);
  margin-right: 10px;
`

const Title = styled.h3`
  color: #000;
  font-size: 15px;
`

const Card = ({title, children}) => (
  <CardWrapper>
    <TitleWrapper>
      <Circle/>
      <Title>{title}</Title>
    </TitleWrapper>
    {children}
  </CardWrapper>
)

export default Card;
