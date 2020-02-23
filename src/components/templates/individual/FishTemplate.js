import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import CoralReefBkg from '../../../assets/img/fish/coralreef.svg'
import { Header } from '../../atoms/typography'
import { Fish0, Fish1, Fish2, Fish3, Fish4 } from '../../../assets/img/fish/FishImage'
import composedTemplateWrapper from '../../../hocs/TemplateWrapper'

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-225deg, rgba(35, 112, 145, 0.5) 0%, rgba(238, 249, 253, 0.5) 50%), url(${CoralReefBkg});
  z-index: -999;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Frame = styled.div`
  width: 685px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  padding: 30px;
  background: white;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Actions = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
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

const Counter = styled.h1`
  font-size: 82px;
`
const fishSize = {
  width: '400px'
}

const Fish = ({data, currIndex, updateQuestionScore}) => {
  const [state, setState] = useState({counter: 0})
  // with useEffect, we are only updating the question score when the state or other dependencies change
  useEffect( () => {
    updateQuestionScore(state.counter, data)
  }, [state, updateQuestionScore, data])

  const increaseCount = () => {
    if (state.counter < 4 ) setState({ counter: state.counter + 1 })
  }

  const decreaseCount = () => {
    if (state.counter > 0 ) setState({ counter: state.counter - 1 })
  }

  const renderFish = () => {
    const { counter } = state
    switch (counter) {
      case 0:
        return <Fish0 style={fishSize}/>
      case 1:
        return <Fish1 style={fishSize}/>
      case 2:
        return <Fish2 style={fishSize}/>
      case 3:
        return <Fish3 style={fishSize}/>
      case 4:
        return <Fish4 style={fishSize}/>
      default:
        return <Fish0 style={fishSize}/>
    }
  }

  const renderTemplate = () => {
    return (
      <Container>
        <Frame>
          { renderFish() }
          <Text>
            <Header size='medium'>{data.text}</Header>
            <Actions>
              <Btn onClick={decreaseCount}>-</Btn>
              <Counter>{state.counter}</Counter>
              <Btn onClick={increaseCount}>+</Btn>
            </Actions>
          </Text>
        </Frame>
      </Container>
    )
  }

  return (
    <>
      { currIndex === data.index && renderTemplate() }
    </>
  )
}

export default composedTemplateWrapper(Fish);
