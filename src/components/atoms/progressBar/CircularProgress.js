import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

export const ProgressCircle = ({currIndex, lastIndex}) => {

  const percentage = () => {
    return Math.floor((currIndex / lastIndex) * 100)
  }

  return(
    <div className='progress-bar'>
      <CircularProgressbar value={percentage()} text={`${percentage()}%`}/>
    </div>
  )
}
