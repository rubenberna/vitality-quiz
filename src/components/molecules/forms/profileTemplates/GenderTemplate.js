import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { setUserGender } from '../../../../actions/user'
import { updateCondition } from '../../../../actions/quiz'
import { ButtonDefault } from '../../../atoms/buttons/ButtonDefault'
import NamedIcon from '../../../atoms/icons/NamedIcon'
import { Header } from '../../../atoms/typography/index'
import { FemaleIcon, MaleIcon } from '../../../../assets/img/profile/ProfileImages'
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
  justify-content: space-evenly;
  flex-direction: column;
  oveflow: hidden;
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

const Tile = styled.div`
  width: 179px;
  height: 179px;
  padding: 30px;
  cursor: pointer;
  background: ${props => props.selected ? '#f5f5f5' : '#FFFFFF'}
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

const GenderTemplate = ({active, setActiveTemplate, setUserGender, updateCondition}) => {
  const [gender, setGender] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect( () => {
    setUserGender(gender)
  }, [gender, setUserGender])

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
    if (gender === '' || gender === undefined) setErrorMsg('Hey! Choose your gender')
    else {
      updateCondition(gender)
      setActiveTemplate('bmi')
    }
  }

  const renderNavigation = () => {
    return (
      <Navigation>
        <ButtonDefault
          inverted='true'
          handleClick={ e => setActiveTemplate('nameEmail') }>
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
        <Frame>
          <Tile onClick={ e => setGender('woman') } selected={gender === 'woman' ? true : false}><FemaleIcon/></Tile>
          <Tile onClick={ e => setGender('man') } selected={gender === 'man' ? true : false}><MaleIcon/></Tile>
          <ErrorMsg>{!gender && errorMsg}</ErrorMsg>
        </Frame>
        { renderNavigation() }
        { renderRectangles() }
      </Container>
    )
  }

  return (
    <>
      { active === 'gender' && renderTemplate() }
    </>
  )
}

export default connect(null, {setUserGender, updateCondition})(GenderTemplate)
