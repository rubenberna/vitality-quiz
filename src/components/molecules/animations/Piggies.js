import React, { memo } from 'react'
import styled from 'styled-components'

import { PorkImage } from '../../../assets/img/pork/PorkImage'

const Pig = styled(PorkImage)`
  width: ${props => props.size}px;
  opacity: ${props => props.active === 'true' ? 0.7 : 0.2};
  position: absolute;
  z-index: -999;
  top: ${props => props.top}vh;
  bottom: ${props => props.bottom}vh;
  right: ${props => props.right}vw;
  left: ${props => props.left}vw;
  transform: ${props => `rotate(${props.rotation}deg)`};
`

const Piggies = memo(function({counter, coordinates}) {

  const renderPiggies = () => {
    let glowingPiggies = counter
    return coordinates.map((pig, i) => {
      glowingPiggies -= 1
      return <Pig
      key={i}
      top={pig.top}
      right={pig.right}
      left={pig.left}
      bottom={pig.bottom}
      size={pig.size}
      rotation={pig.rotation}
      active={ counter === 4 ? 'true' : (glowingPiggies > -1 ? 'true' : 'false') }
      />
    })
  }

  return (
    <>
      { renderPiggies() }
    </>
  )
})

export default Piggies
