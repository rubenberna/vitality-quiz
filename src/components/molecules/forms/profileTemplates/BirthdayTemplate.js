import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { DatePicker } from 'react-materialize'

import { setUserDOB, setUserKey } from '../../../../actions/user'
import { setDemographics } from '../../../../actions/demographics'
import { ButtonDefault } from '../../../atoms/buttons/ButtonDefault'
import NamedIcon from '../../../atoms/icons/NamedIcon'
import { Header } from '../../../atoms/typography/index'
import { Rectangle } from '../../../atoms/shapes'
import { Cake } from '../../../../assets/img/profile/ProfileImages'


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
  justify-content: space-evenly;
  flex-direction: column;
`

const Frame = styled.div`
  width: 500px;
  height: 208px;
  display: flex;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  margin-top: 60px;
`

const CakeImage = styled(Cake)`
  width: 153px;
  position: absolute;
  top: -140px;
  right: 1px;
`

const ErrorMsg = styled.span`
  color: #b71c1c;
  position: absolute;
`

const Navigation = styled.div`
  margin-top: 40px;
  width: 650px;
  display: flex;
  justify-content: space-between;
`

const BirthdayTemplate = ({active, setActiveTemplate, setUserDOB, setDemographics, setUserKey}) => {
  const [birthday, setBirthday] = useState('')
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
    if (birthday === '' || birthday === undefined) setErrorMsg('Do you want to call your mom?')
    else {
      setUserDOB(birthday)
      setUserKey('')
      setDemographics()
    }
  }

  const clearError = () => {
    setErrorMsg('')
  }

  const options = {
    yearRange: 90,
    minDate: new Date('12.02.1930'),
    defaultDate: new Date('12.02.1983'),
    maxDate: new Date('01.01.2007'),
  }

  const renderNavigation = () => {
    return (
      <Navigation>
        <ButtonDefault
          inverted='true'
          handleClick={ e => setActiveTemplate('bmi') }>
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
        <Header>Wanner ben je geboren?</Header>
        <Frame>
          <CakeImage />
          <DatePicker
            options={options}
            onFocus={clearError}
            onChange={ e => setBirthday(e)}>
            Pick a date
          </DatePicker>
          <ErrorMsg>{errorMsg}</ErrorMsg>
        </Frame>
        { renderNavigation() }
        { renderRectangles() }
      </Container>
    )
  }

  return (
    <>
      { active === 'birthday' && renderTemplate() }
    </>
  )
}

export default connect(null, {setUserDOB, setDemographics, setUserKey})(BirthdayTemplate)
