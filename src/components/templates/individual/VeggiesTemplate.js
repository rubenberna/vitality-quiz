import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import composedTemplateWrapper from '../../../hocs/TemplateWrapper'
import { Header } from '../../atoms/typography'
import EarthGround from '../../molecules/animations/veggies/EarthGround'
import Vegetables from '../../molecules/animations/veggies/Vegetables'
import { Rectangle } from '../../atoms/shapes'

const earthCoordinates = [
    { top: '', left: '',  bottom: '150px', right: '' },
    { top: '', left: '98px',  bottom: '105px', right: '' },
    { top: '', left: '154px',  bottom: '50px', right: '' },
]

const veggiesCoordinates = [
  { top: '', left: '',  bottom: '182px', right: '',  rotation: '-10', type: 'turnip' },
  { top: '', left: '',  bottom: '190px', right: '162px',  rotation: '-10', type: 'parsnip' },
  { top: '', left: '',  bottom: '230px', right: '271px',  rotation: '-10', type: 'turnip' },
  { top: '', left: '',  bottom: '142px', right: '5vw',  rotation: '-10', type: 'carrot' },
  { top: '', left: '247px',  bottom: '99px', right: '',  rotation: '-10', type: 'carrot' },
]

const rectangleCoordinates = [
  { top: '-40vh', left: '-10vw', rotation: '230deg', bottom: '', right: '' },
  { top: '', left: '-33vw', rotation: '140deg', bottom: '26vh', right: '' },
  { top: '', left: '', rotation: '35deg', bottom: '25vh', right: '-34vw' },
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
  height: 570px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  margin-top: 3px;
  background: #FFFFFF;
  opacity: 0.9;
  text-align: center;
  position: relative;
`

const Text = styled.div`
  height: 300px;
  justify-content: center;
`

const Actions = styled.div`
  display: flex;
  justify-content: center;
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
  margin: 0 15px 0 15px;
`

const Counter = styled.h4`
  font-size: 24px;
  color: #757575;
  margin: 0;
  padding: 20px 0;
`

const VeggiesTemplate = ({data, currIndex, updateQuestionScore}) => {
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


  const renderText = () => {
    switch (counter) {
      case 0:
        return "I hate vegetables"
      case 1:
        return "when there's nothing else"
      case 2:
        return "on a regular basis"
      case 3:
        return "almost in every meal"
      case 4:
        return "they call me Mr. Rabbit"
      default:
        return "I hate vegetables"
    }
  }

  const renderTemplate = () => {
    return(
      <Container>
        <Frame>
          <Text>
            <Header size='medium' align='center'>{data.text}</Header>
            <Counter>{renderText()}</Counter>
            <Actions>
              <Btn onClick={decreaseCount}>-</Btn>
              <Btn onClick={increaseCount}>+</Btn>
            </Actions>
          </Text>
          <EarthGround coordinates={earthCoordinates}/>
          <Vegetables coordinates={veggiesCoordinates} counter={counter}/>
        </Frame>
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

export default composedTemplateWrapper(VeggiesTemplate);
