import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { setUserName, setUserEmail } from '../../../../actions/user'
import { Header, Paragraph } from '../../../atoms/typography/index'
import { Rectangle } from '../../../atoms/shapes'
import { ButtonDefault } from '../../../atoms/buttons/ButtonDefault'
import NamedIcon from '../../../atoms/icons/NamedIcon'
import { Robot } from '../../../../assets/img/profile/ProfileImages'

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
`

const HelloImage = styled(Robot)`
  width: 153px;
  position: absolute;
  top: -178px;
  left: 1px;
  fill: #424242;
`

const Frame = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  padding: 30px;
  margin-top: 50px;
  position: relative;
`

const Input = styled.input`
  border-radius: 9px !important;
  height: 35px !important;
  color: #757575 !important;
`

const Navigation = styled.div`
  margin-top: 40px;
  width: 650px;
  display: flex;
  justify-content: flex-end;
`

const ErrorMsg = styled.span`
  color: #b71c1c;
  position: absolute;
  top: 20px;
`

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

const NameEmailTemplate = ({active, setActiveTemplate, setUserName, setUserEmail}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const validate = async () => {
    if (!name) {
      setError(true)
      setErrorMsg('You forgot to enter your name ;)')
    }
    else if(email) {
      const emailCheck = await regexEmail()
      if (emailCheck === false) {
        setError(true)
        setErrorMsg("That email doesn't seem right...")
      }
      else proceed()
    }
    else if (name && !error) proceed()
  }

  const proceed = () => {
    setActiveTemplate('gender')
    setUserName(name)
    setUserEmail(email)
  }

  const regexEmail = () => {
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (email.match(mailformat)) return true;
    else return false;
  }

  const clearError = () => {
    setError(false)
    setErrorMsg('')
  }

  const renderNavigation = () => {
    return (
      <Navigation>
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
    return(
      <Container>
        <Intro>
          <Header>Hoi, welkom!</Header>
          <Paragraph>Eerst even elkaar leren kennen!</Paragraph>
        </Intro>
        <Frame>
          <ErrorMsg>{errorMsg}</ErrorMsg>
          <Header size='small'>Wat is jouw naam?</Header>
          <Input
            type='text'
            onChange={ e=> setName(e.target.value) }
            value={name}
            onFocus={clearError}/>
          <Header size='small'>Email</Header>
          <Input
            type='email'
            onChange={ e=> setEmail(e.target.value) }
            value={email}
            onFocus={clearError}
            />
          <Paragraph>
            Geen zorgen, we sturen geen spam. We sturen enkel op het einde jouw resultaten door.
          </Paragraph>
        </Frame>
        { renderRectangles() }
        { renderNavigation() }
      </Container>
    )
  }

  return(
    <>
      { active === 'nameEmail' && renderTemplate() }
    </>
  )
}

export default connect(null, {setUserName, setUserEmail})(NameEmailTemplate)
