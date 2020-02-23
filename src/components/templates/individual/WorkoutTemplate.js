import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import composedTemplateWrapper from '../../../hocs/TemplateWrapper'
import { Header, Paragraph } from '../../atoms/typography/index'
import { Rectangle } from '../../atoms/shapes'
import Workout from '../../molecules/animations/Workout'

const rectangleCoordinates = [
  { top: '-40vh', left: '-10vw', rotation: '230deg', bottom: '', right: '' },
  { top: '', left: '-33vw', rotation: '140deg', bottom: '26vh', right: '' },
  { top: '', left: '', rotation: '35deg', bottom: '25vh', right: '-34vw' },
]

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  oveflow: hidden;
  position: relative;
`

const Text = styled.div`
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Question = styled.div`
  text-align: center;
  margin-top: 40px;
`

const Actions = styled.div`
  display: flex;
  width: 260px;
  align-items: center;
  justify-content: space-between;
`

const Input = styled.input`
  width: 90px !important;
  height: 90px !important;
  padding: 25px;
  font-size: 70px !important;
  text-align: center;
  border-radius: 9px !important;
  padding: 0 !important;
  font-family: 'Quicksand', sans-serif !important;
  background: #FFFFFF;
  box-shadow: 0 0 10px rgba(0,0,0,0.5) !important;
  -webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.5) !important;
  -moz-box-shadow:0 0 10px rgba(0, 0, 0, 0.5) !important;
`

const Scene = styled.div`
  text-align: center;
  margin-bottom: 70px;
`

const WorkoutTemplate = ({data, currIndex, updateQuestionScore}) => {
  const [counter, setCounter] = useState(0)

  useEffect( () => {
    updateQuestionScore(counter, data)
  }, [data, updateQuestionScore, counter])

  const changeScene = (e) => {
    const input = e.target.value
    if(input >= 0 && input <= 4) setCounter(Number(e.target.value))
  }

  const renderRectangles = () => {
    return rectangleCoordinates.map((rectangle, i) => {
      return <Rectangle
        key={i}
        degree={rectangle.rotation}
        top={rectangle.top}
        bottom={rectangle.bottom}
        right={rectangle.right}
        left={rectangle.left}
      />
    })
  }

  const renderTemplate = () => {
    return(
      <Container>
        <Text>
          <Question>
            <Header>{data.text}</Header>
            <Paragraph>Deksport telt niet!</Paragraph>
          </Question>
          <Actions>
            <Input type='number' value={counter} onChange={ e => changeScene(e) }/>
            <Header size='small' margin='0'>keer per week</Header>
          </Actions>
        </Text>
        <Scene>
          <Workout counter={counter}/>
        </Scene>
        { renderRectangles() }
      </Container>
    )
  }

  return (
    <>
      { currIndex === data.index && renderTemplate() }
    </>
  )
}

export default composedTemplateWrapper(WorkoutTemplate);
