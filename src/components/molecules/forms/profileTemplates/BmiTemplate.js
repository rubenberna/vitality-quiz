import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Icon, TextInput } from "react-materialize";

import { setUserWeight } from '../../../../actions/user'
import { setUserHeight } from '../../../../actions/user'
import { ButtonDefault } from '../../../atoms/buttons/ButtonDefault'
import NamedIcon from '../../../atoms/icons/NamedIcon'
import { WeightIcon } from '../../../../assets/img/profile/ProfileImages'
import { Header, Paragraph } from '../../../atoms/typography/index'
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

const HeightIcon = styled(Icon)`
  transform: rotate(90deg);
`

const WeightImg = styled(WeightIcon)`
  width: 25px;
`

const Input = styled(TextInput)`
  width: 90px !important;
`

const Frame = styled.div`
  display: flex;
  width: 605px;
  height: 300px;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  padding: 30px;
  border-radius: 10px;
  margin-top: 155px;
`

const Navigation = styled.div`
  margin-top: 40px;
  width: 650px;
  display: flex;
  justify-content: space-between;
`
const ErrorMsg = styled.span`
  color: #F44336;
`

const BmiTemplate = ({ setUserHeight, setUserWeight, setActiveTemplate, active }) => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [errorMsgWeight, setErrorMsgWeight] = useState('')
  const [errorMsgHeight, setErrorMsgHeight] = useState('')

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

  const validate = () => {
    if (height === '' || height === undefined) setErrorMsgHeight('Please fill in this info')
    else if (weight === '' || weight === undefined) setErrorMsgWeight('Please fill in this info')
    else if (height > 230) setErrorMsgHeight('No one is that tall...')
    else if (height < 100) setErrorMsgHeight('No one is that small...')
    else if (weight < 20) setErrorMsgWeight('No one is that light...')
    else if (weight > 350) setErrorMsgWeight('No one is that big...')
    else {
      setUserHeight(height)
      setUserWeight(weight)
      setActiveTemplate('birthday')
    }
  }

  const clearError = (name) => {
    if (name === 'height') setErrorMsgHeight('')
    else setErrorMsgWeight('')
  }

  const renderTemplate = () => {
    return (
      <Container>
        <Intro>
          <Header>How are you shaped?</Header>
          <Paragraph>we weten het, het is een onbeleefde vraag!</Paragraph>
        </Intro>
        <Frame>
          <div className="input-field col s6" style={{ width: '200px' }}>
            <i className="material-icons prefix" style={{ transform:  'rotate(90deg)'}}>straighten</i>
            <input className="icon_prefix" type="number" className='validate' onChange={e => setHeight(e.target.value)} value={height} onFocus={e => clearError('height')}/>
            <label>Lengte in cm</label>
            <ErrorMsg>{errorMsgHeight}</ErrorMsg>
          </div>
          <div className="input-field col s6" style={{ width: '200px' }}>
            <i className="material-icons prefix">local_pizza</i>
            <input className="icon_prefix" className='validate' type="number" onChange={e => setWeight(e.target.value)} value={weight} onFocus={e => clearError('weight')}/>
            <label>Gewicht in kg</label>
            <ErrorMsg>{errorMsgWeight}</ErrorMsg>
          </div>
        </Frame>
        { renderNavigation() }
        { renderRectangles() }
      </Container>
    )
  }

  return (
    <>
      { active === 'bmi' && renderTemplate() }
    </>
  )
}

export default connect(null, {setUserHeight, setUserWeight})(BmiTemplate)
