import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import composedTemplateWrapper from '../../../hocs/TemplateWrapper'
import { Header } from '../../atoms/typography'
import { Rectangle } from '../../atoms/shapes'
import Waves from '../../molecules/animations/Waves'

const Container = styled.div`
  height: 100vh;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  oveflow: hidden;
`

const Frame = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  padding: 30px;
  margin-top: 120px;
`

const Actions = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  font-size: 37px !important;
  margin: 0 auto;
  padding: 20px 0;
`

const Input = styled.input`
  width: 115px !important;
  height: 115px !important;
  background-image: linear-gradient(to bottom right, #FFFFFF, #04a1e3) !important;
  color: #FFFFFF !important;
  font-size: 70px !important;
  text-align: center;
  border-radius: 9px !important;
  filter: drop-shadow(2px 4px 6px black);
  padding: 0 !important;
  font-family: 'Quicksand', sans-serif !important;
`

const rectangleCoordinates = [
  { top: '-40vh', left: '-20vw', rotation: '230deg', bottom: '', right: '' },
  { top: '', left: '', rotation: '35deg', bottom: '30vh', right: '-27vw' },
]


const WaterTemplate = ({data, currIndex, updateQuestionScore}) => {
  const [counter, setCounter] = useState(2)

  useEffect( () => {
    let points = counter >= 8 ? 0 : 4
    updateQuestionScore(points, data)
  }, [data, updateQuestionScore, counter])

  const changeGlasses = (e) => {
    const input = e.target.value
    if(input >= 0 && input <= 14)setCounter(e.target.value)
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
        <Frame>
          <Header align='center'>Hoevel glazen water drink je per dag?</Header>
          <Actions>
            <Input type='number' value={counter} onChange={ e => changeGlasses(e) }/>
            <Header size='small' margin='0'>glazen per dag</Header>
          </Actions>
        </Frame>
        <Waves counter={counter}/>
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

export default composedTemplateWrapper(WaterTemplate);
