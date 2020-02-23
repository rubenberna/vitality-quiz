import React from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import { Paragraph } from '../typography'

const Timer = (props) => {

  const calculateTime = () => {
    let durations = []
    if ( props.selectedGoals.length > 0) {
      props.selectedGoals.forEach(goal => {
        durations.push(goal.duration)
      });
    }
    const estimatedTime = durations.slice(1)
      .reduce((prev, cur) => moment.duration(cur).add(prev),
      moment.duration(durations[0]))
    return moment.utc(estimatedTime.asMilliseconds()).format("mm:ss")
  }

  const renderIfSelected = () => {
    if (props.selectedGoals.length > 0) return(
      <div className="timer">
        <Paragraph> Geschatte tijd: <span className='time'>{calculateTime()} min</span></Paragraph>
      </div>
    )
  }
  return(
    <div className='timer-container'>
      {renderIfSelected()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectedGoals: Object.values(state.selectedGoals)
  }
}
export default connect(mapStateToProps)(Timer)
