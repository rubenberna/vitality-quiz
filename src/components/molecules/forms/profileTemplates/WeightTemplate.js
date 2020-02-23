import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { setUserWeight } from '../../../../actions/user'
import { ButtonDefault } from '../../../atoms/buttons/ButtonDefault'
import NamedIcon from '../../../atoms/icons/NamedIcon'
import { Header, Paragraph } from '../../../atoms/typography/index'
import { Weight } from '../../../../assets/img/profile/ProfileImages'
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
`

const Intro = styled.div`
  text-align: center;
`

const Frame = styled.div`
  display: flex;
  height: 60%;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`

const WeightInput = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 125px;
`

const Input = styled.input`
  width: 45px !important;
  text-align: center !important;
`

const WeightImage = styled(Weight)`
  width: 350px;
  position: absolute;
  z-index: -1;
`

const WeightDisplay = styled.div`
  position: absolute;
  top: 130px;
  font-family: 'Odibee Sans', cursive;
  font-size: 30px;
`

const ErrorMsg = styled.span`
  color: #b71c1c;
  font-weight: 600;
`

const Navigation = styled.div`
  margin-top: 40px;
  width: 650px;
  display: flex;
  justify-content: space-between;
`

const WeightTemplate = ({active, setActiveTemplate, setUserWeight}) => {
  const [weight, setWeight] = useState('')
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

  const validate = () => {;
    if (weight === '' || weight === undefined) setErrorMsg('ERROR')
    else {
      setUserWeight(weight)
      setActiveTemplate('birthday')
    }
  }

  const renderWeightDisplay = () => {
    if (errorMsg) return <ErrorMsg>{errorMsg}</ErrorMsg>
    if (weight) return <span>{weight}</span>
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
        <Header>Wat is jouw gewicht?</Header>
        <Paragraph>we weten het, het is een onbeleefde vraag!</Paragraph>
      </Intro>
        <Frame>
          <WeightInput>
            <Input type='number' onChange={e => setWeight(e.target.value)} value={weight} onFocus={clearError}/>
            <Paragraph>kg</Paragraph>
          </WeightInput>
        </Frame>
        { renderNavigation() }
        { renderRectangles() }
      </Container>
    )
  }

  return (
    <>
      { active === 'weight' && renderTemplate() }
    </>
  )
}

export default connect(null, {setUserWeight})(WeightTemplate)
