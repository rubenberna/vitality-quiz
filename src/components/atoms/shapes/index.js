import React from 'react'
import styled from 'styled-components'

export const Rectangle = ({ degree, top, bottom, right, left, color }) => {

  const StyledRectangle = styled.div`
    height: 360px;
    width: 700px;
    background: ${props => props.color ? props.color : 'aliceblue'};
    opacity: 0.7;
    transform: ${props => `rotate(${props.degree})`};
    border-radius: 63px;
    position: absolute;
    z-index: -1;
    top: ${props => props.top ? props.top : ''};
    bottom: ${props => props.bottom ? props.bottom : ''};
    right: ${props => props.right ? props.right : ''};
    left: ${props => props.left ? props.left : ''};
    overflow: hidden;
  `

  return <StyledRectangle
          degree={degree}
          top={top}
          bottom={bottom}
          right={right}
          left={left}
          color={color}/>
}
