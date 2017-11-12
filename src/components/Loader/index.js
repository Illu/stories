import React from 'react'
import styled, {keyframes} from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg)
  }
  80% {
    transform: rotate(360deg)
  }
  100%{
    transform: rotate(360deg)
  }
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Animated = styled.div`
  width: 30px;
  height: 30px;
  animation: ${spin} 1s ease infinite;
  border-radius: 30px;
  border: 3px solid rgb(71, 134, 255);
  border-top-color: transparent;
  border-bottom-color: transparent;
`

const Loader = () => (
  <Wrapper>
    <Animated />
  </Wrapper>
)

export default Loader;
