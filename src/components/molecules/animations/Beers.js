import React from 'react'
import styled from 'styled-components'

import { BeerGlass } from '../../../assets/img/alcohol/Alcohol'

const Beer = styled(BeerGlass)`
  width: 100px;
  opacity: ${props => props.active === 'true' ? 1 : 0};
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  left: ${props => props.left};
`

const Beers = ({counter, coordinates}) => {

  const renderBeers = () => {
    let visibleBeers = counter
    return coordinates.map((coord, i) => {
      visibleBeers -= 1
      return <Beer
        key={i}
        top={coord.top}
        right={coord.right}
        left={coord.left}
        bottom={coord.bottom}
        size={coord.size}
        active={ counter === 4 ? 'true' : (visibleBeers > -1 ? 'true' : 'false') }
      />
    })
  }

  return (
    <>
      { renderBeers() }
    </>
  )
}

export default Beers
