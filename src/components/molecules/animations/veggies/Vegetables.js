import React from 'react'
import styled from 'styled-components'

import { Veggie1, Veggie2, Veggie3 } from '../../../../assets/img/veggies/VeggiesImages'

const Turnip = styled(Veggie1)`
  width: 83px;
  opacity: ${props => props.active === 'true' ? 1 : 0};
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  left: ${props => props.left};
  transform: ${props => `rotate(${props.rotation}deg)`};
`

const Carrot = styled(Veggie2)`
  width: 76px;
  opacity: ${props => props.active === 'true' ? 1 : 0};
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  left: ${props => props.left};
  transform: ${props => `rotate(${props.rotation}deg)`};
`
const Parsnip = styled(Veggie3)`
  width: 118px;
  opacity: ${props => props.active === 'true' ? 1 : 0};
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  left: ${props => props.left};
  transform: ${props => `rotate(${props.rotation}deg)`};
`

const Vegetables = ({counter, coordinates}) => {

  const renderVegetables = () => {
    let visibleVegetables = counter
    return coordinates.map((coord, i) => {
      visibleVegetables -= 1
      if (coord.type === 'turnip') {
        return <Turnip
          key={i}
          top={coord.top}
          right={coord.right}
          left={coord.left}
          bottom={coord.bottom}
          rotation={coord.rotation}
          active={ counter === 4 ? 'true' : (visibleVegetables > -2 ? 'true' : 'false') }
        />
      }
      if (coord.type === 'parsnip') {
        return <Parsnip
          key={i}
          top={coord.top}
          right={coord.right}
          left={coord.left}
          bottom={coord.bottom}
          rotation={coord.rotation}
          active={ counter === 4 ? 'true' : (visibleVegetables > -2 ? 'true' : 'false') }
        />
      }
      if (coord.type === 'carrot') {
        return <Carrot
          key={i}
          top={coord.top}
          right={coord.right}
          left={coord.left}
          bottom={coord.bottom}
          rotation={coord.rotation}
          active={ counter === 4 ? 'true' : (visibleVegetables > -2 ? 'true' : 'false') }
        />
      }
    })
  }

  return (
    <>
      { renderVegetables() }
    </>
  )
}

export default Vegetables

// const renderVegetables = () => {
//   let visibleVegetables = counter
//   return coordinates.map((coord, i) => {
//     visibleVegetables -= 1
//     return <Veg1
//     key={i}
//     top={coord.top}
//     right={coord.right}
//     left={coord.left}
//     bottom={coord.bottom}
//     rotation={coord.rotation}
//     active={ counter === 4 ? 'true' : (visibleVegetables > -1 ? 'true' : 'false') }
//     />
//   })
// }
