import React from 'react'
import styled from 'styled-components'

import {
  Couch,
  WalkDog,
  Situps,
  Pushups,
  Treadmill,
  Weights,
  Squatting,
  Boxing
} from '../../../assets/img/workout/WorkoutImages'

const Scene = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const svgSize = {
  width: '500px',
  height: '350px'
}

const Workout = ({counter}) => {

  const renderWorkout = () => {
    switch (counter) {
      case 0:
        return <Couch style={svgSize}/>
      case 1:
        return <WalkDog style={svgSize}/>
      case 2:
        return <Situps style={svgSize}/>
      case 3:
        return (
          <Scene>
            <Pushups style={svgSize}/>
            <Treadmill style={svgSize}/>
          </Scene>
        )
      case 4:
        return (
          <Scene>
            <Boxing style={svgSize}/>
            <Weights style={svgSize}/>
            <Squatting style={svgSize}/>
          </Scene>
        )
      default:
        return <Boxing style={svgSize}/>
    }
  }

  return (
    <>
      { renderWorkout() }
    </>
  )
}

export default Workout
