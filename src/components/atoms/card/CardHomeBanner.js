import React from 'react'
import styled from 'styled-components'

import { Header, Paragraph } from '../../atoms/typography/index'

const CardHomeBanner = ({title, text, inverted}) => {

  const StyledCard = styled.div`
    width: 275px;
    -webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
    -moz-box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
    box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
    padding: 25px;
    cursor: default;
    height: 295px;
    background-image: ${props => props.inverted ? invertedTheme.bgc : 'none'};
    color: ${props => props.inverted ? invertedTheme.fc : 'none'};
    position: relative;
    border-radius: 9px;
  `;

  const invertedTheme = {
    bgc: 'linear-gradient(to bottom right, #a2e1fc, #04a1e3)',
    fc: '#FFFFFF'
  }


  return(
    <StyledCard inverted={inverted}>
      <Header>{title}</Header>
      <Paragraph>{text}</Paragraph>
    </StyledCard>
  )
}

export default CardHomeBanner;
