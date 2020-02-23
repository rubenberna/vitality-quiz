import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import composedTemplateWrapper from '../../../hocs/TemplateWrapper'
import { Header } from '../../atoms/typography'
import Piggies from '../../molecules/animations/Piggies'

const coordinates = [
    { top: -22, left: -10, size: 616, rotation: 189, bottom: '', right: '' },
    { top: -55, left: '', size: 924, rotation: 230, bottom: '', right: -15 },
    { top: 1, left: '', size: 200, rotation: 185, bottom: '', right: '' },
    { top: '', left: '', size: 640, rotation: '', bottom: -22, right: -10 },
    { top: '', left: -7, size: 400, rotation: '', bottom: -14, right: '' },
    { top: '', left: '', size: 709, rotation: 10, bottom: -34, right: '' },
    { top: '', left: 4, size: 200, rotation: 10, bottom: 30, right: '' },
    { top: '', left: '', size: 500, rotation: 10, bottom: 25, right: '' },
]

const Container = styled.div`
  height: 100vh;
  z-index: -999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  oveflow: hidden;
`

const Frame = styled.div`
  width: 650px;
  height: 300px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  margin-top: 3px;
  background: #FFFFFF;
  opacity: 0.9;
  text-align: center;
`

const Actions = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  align-items: center;
  height: 250px;
`

const Btn = styled.button`
  background-image: linear-gradient(to bottom right, #a2e1fc, #04a1e3);
  height: 80px;
  width: 80px;
  color: #FFFFFF;
  font-size: 50px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

const Counter = styled.h4`
  font-size: 24px;
  color: #757575;
  margin: 0;
  padding: 20px 0;
`

const Pork = ({data, currIndex, updateQuestionScore}) => {
  const [counter, setCounter] = useState(0)

  useEffect( () => {
    updateQuestionScore(counter, data)
  }, [data, updateQuestionScore, counter])


  const increaseCount = () => {
    if (counter < 4 ) setCounter(counter + 1 )
  }

  const decreaseCount = () => {
    if (counter > 0 ) setCounter(counter - 1 )
  }

  const renderText = () => {
    switch (counter) {
      case 0:
        return "I don't eat meat"
      case 1:
        return "Once a week"
      case 2:
        return "Like a sensible person"
      case 3:
        return "I can't get enough"
      case 4:
        return "Give it to me raw!"
      default:
        return "I don't eat meat"
    }
  }

  const renderTemplate = () => {
    return(
      <Container>
        <Frame>
          <Header size='medium' align='center'>{data.text}</Header>
          <Counter>{renderText()}</Counter>
          <Actions>
            <Btn onClick={decreaseCount}>-</Btn>
            <Btn onClick={increaseCount}>+</Btn>
          </Actions>
        </Frame>
        <Piggies coordinates={coordinates} counter={counter}/>
      </Container>
    )
  }

  return (
    <>
      { currIndex === data.index && renderTemplate() }
    </>
  )
}

export default composedTemplateWrapper(Pork);
