import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { setUserHeight } from '../../../../actions/user'
import { ButtonDefault } from '../../../atoms/buttons/ButtonDefault'
import NamedIcon from '../../../atoms/icons/NamedIcon'
import { Header, Paragraph } from '../../../atoms/typography/index'
import { Height } from '../../../../assets/img/profile/ProfileImages'
import { Rectangle } from '../../../atoms/shapes'

const rectangleCoordinates = [
  { top: '-40vh', left: '-10vw', rotation: '230deg', bottom: '', right: '' },
  { top: '', left: '-33vw', rotation: '140deg', bottom: '26vh', right: '' },
  { top: '', left: '', rotation: '35deg', bottom: '25vh', right: '-34vw' },
]

const Container = styled.div`
  height: 100vh;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  oveflow: hidden;
`

const Intro = styled.div`
  text-align: center;
`

const Frame = styled.div`
  display: flex;
  width: 10%;
  height: 40%;
  align-items: center;
  justify-content: space-around;
  position: relative;
  margin-bottom: 90px;
`
const HeightInput = styled.div`
  display: flex;
  align-items: center;
  width: 125px;
`
const VerticalLine = styled.div`
  border-left: 6px solid #5c6bc0;
  height: ${ props => props.height}px;
`

const Input = styled.input`
  width: 48px !important;
  font-size: 25px !important;
`

const HeightImage = styled(Height)`
  width: 185px;
`

const ErrorMsg = styled.span`
  color: #b71c1c;
  position: absolute;
  bottom: 20px;
`

const Navigation = styled.div`
  margin-top: 40px;
  width: 650px;
  display: flex;
  justify-content: space-between;
`

const HeightTemplate = ({active, setActiveTemplate, setUserHeight}) => {
  const [height, setHeight] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

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

  const validate = () => {
    if (height === '' || height === undefined) setErrorMsg('Hey! Choose your height')
    else if (height > 230) setErrorMsg('No one is that tall...')
    else if (height < 100) setErrorMsg('No one is that small...')
    else {
      setUserHeight(height)
      setActiveTemplate('weight')
    }
  }

  const clearError = () => {
    setErrorMsg('')
  }

  const renderNavigation = () => {
    return (
      <Navigation>
        <ButtonDefault
          inverted='true'
          handleClick={ e => setActiveTemplate('gender') }>
          <NamedIcon
            name={'angle left'}
            className={'btn-arrow'}
            size={'small'}/>
            Terug
        </ButtonDefault>
        <ButtonDefault
          inverted='true'
          handleClick={ validate }>
          Verder
          <NamedIcon
            name={'angle right'}
            className={'btn-arrow'}
            size={'small'}/>
        </ButtonDefault>
      </Navigation>
    )
  }

  const renderTemplate = () => {
    return (
      <Container>
      <Intro>
        <Header>Wat is jouw lengte?</Header>
        <Paragraph>Gelieve dit in te vullen in centimers</Paragraph>
      </Intro>
        <Frame>
        <ErrorMsg>{errorMsg}</ErrorMsg>
          <HeightInput>
            <Input type='number' onChange={e => setHeight(e.target.value)} value={height} onFocus={clearError}/>
            <Paragraph>cm</Paragraph>
          </HeightInput>
          <VerticalLine height={height}/>
        </Frame>
        { renderNavigation() }
        { renderRectangles() }
      </Container>
    )
  }

  return (
    <>
      { active === 'height' && renderTemplate() }
    </>
  )
}

export default connect(null, {setUserHeight})(HeightTemplate)
