import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { Paragraph } from '../../atoms/typography'
import logo from '../../../assets/img/logo/logoFinal.svg'

const StyledNavbarContainer = styled.div`
  height: 90px;
  width: 100%;
  padding: 20px 33px;
  display: flex;
  justify-content: flex-between;
  flex-direction: row;
  top: 0;
`

const StyledList = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  cursor: pointer;
`

const StyledLogo = styled.img`
  cursor: pointer;
  margin-left: -50px;
`

const Navbar = ({user, history, origin}) => {
  const [state] = useState({active: history.location.pathname})

  const StyledLink = styled(Link)`
    margin: 0 9px;
    color: ${props => props.active === props.to ? '#04a1e3' : (props.origin === 'home' ? 'white' : '#616161')};
    font-weight: 600;
    border-bottom: ${props => props.active === props.to ? '2px solid' : ''};
    height: 24px;
  `

  const renderUserName = () => {
    if (user.name) return <Paragraph size={'tiny'}>Hi, {user.name}!</Paragraph>
  }

  return(
    <StyledNavbarContainer>
      <StyledLogo alt={ 'logo' } src={logo}  onClick={ e => history.push('/')} sty/>
      <StyledList>
        { renderUserName() }
        <StyledLink
          to='/'
          active={state.active}
          origin={origin}
          >
          Home
        </StyledLink>
        <StyledLink
          to='/select_quiz'
          active={state.active}
          origin={origin}
          >
          Start!
        </StyledLink>
        <StyledLink
          to='/blogs'
          active={state.active}
          origin={origin}
          >
          Investigation
        </StyledLink>
      </StyledList>
    </StyledNavbarContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userProfile
  }
}

const NavbarComponent = connect(mapStateToProps, null)(Navbar)

export default withRouter(NavbarComponent)
