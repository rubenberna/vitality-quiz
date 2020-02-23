import React from 'react'
import styled from 'styled-components'

import { EarthRectangle } from '../../../../assets/img/veggies/VeggiesImages'

const EarthLine = styled(EarthRectangle)`
  width: 500px;
  position: absolute;
  z-index: -999;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  left: ${props => props.left};
`

const EarthGround = ({coordinates}) => {

  const renderEarth = () => {
    return coordinates.map((line, i) => {
      return <EarthLine
      key={i}
      top={line.top}
      right={line.right}
      left={line.left}
      bottom={line.bottom}
      />
    })
  }

  return (
    <>
      { renderEarth() }
    </>
  )
}

export default EarthGround
