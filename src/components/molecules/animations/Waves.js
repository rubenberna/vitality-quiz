import React from 'react'

import { Water0, Water1, Water2, Water3 } from '../../../assets/img/water/Water'

const Waves = ({counter}) => {
  const renderWaves = () => {
    if(counter < 2) return <Water0 />
    if(counter >= 2 && counter < 4) return <Water1 />
    if(counter >= 4 && counter < 6) return <Water2 />
    if(counter >= 6) return <Water3 />
  }

  return (
    <>
      { renderWaves() }
    </>
  )
}

export default Waves
