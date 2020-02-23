import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import composedTemplateWrapper from '../../../hocs/TemplateWrapper'
import { Header } from '../../atoms/typography'
import { Smoke } from '../../../assets/img/smoking/Smoking'
import { ReactComponent as NotSmoke } from '../../../assets/img/smoking/sigaretselectnosmoke.svg'
import { Rectangle } from '../../atoms/shapes'
import { SwitchToggle } from '../../atoms/switch/Switch'

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
`

const Frame = styled.div`
  width: 650px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  padding: 30px;
`

const Actions = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-between;
  align-items: center;
  height: 205px;
  align-self: flex-end;
  flex-direction: column;
  font-size: 37px !important;
`

const Image = styled.div`
  width: 300px
`

const SmokeIcon = styled(Smoke)`
  width: 272px;
  height: 300px;
`

const SmokeTemplate = ({data, currIndex, updateQuestionScore}) => {
  const [smoker, setSmoker] = useState(false)

  useEffect( () => {
    let points = smoker ? 4 : 0
    updateQuestionScore(points, data)
  }, [data, updateQuestionScore, smoker])

  const changeState = boolean => {
    setSmoker(boolean)
  }

  const renderImage = () => {
    return (
      <Image>
        {smoker ? <SmokeIcon/> : <NotSmoke/>}
      </Image>
    )
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
          { renderImage() }
          <Actions>
            <Header givenClass='smoker-header'>Ben je een roker?</Header>
            <SwitchToggle changeChecked={changeState} />
          </Actions>
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

export default composedTemplateWrapper(SmokeTemplate);
