import React, { Component } from 'react';
import { connect } from 'react-redux'
import shortid from 'shortid'

import { selectGoal, removeSelectedGoal } from '../../../actions/goals'
import IconComponents from './IconsList'
import { Paragraph } from '../../atoms/typography'

class QuizSelectionIcon extends Component {

  onSelect = (pickedGoal) => {
    const { selectGoal, removeSelectedGoal, selectedGoals } = this.props
    // Remove goal onClick if it was already selected
    if (selectedGoals.hasOwnProperty(pickedGoal.id)) removeSelectedGoal(pickedGoal)
    else selectGoal(pickedGoal)
  }

  renderIcon = () => {
    const { goal } = this.props
    const GoalIcon = IconComponents[goal.name]
    return (
      <>
        <div className='quiz-selection-icon'>
          <GoalIcon key={shortid.generate()} />
          <Paragraph css='quiz-selection-icon-name'>{goal.name}</Paragraph>
        </div>
      </>
    )
  }

  render () {
    return (
      <div
        className={Object.keys(this.props.selectedGoals).includes(this.props.goal.id.toString()) ? 'icon-selected' : 'icon-unselected'}
        onClick={ e=> this.onSelect(this.props.goal) }>
        { this.renderIcon() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedGoals: state.selectedGoals
  }
}

export default connect(mapStateToProps, { selectGoal, removeSelectedGoal }) (QuizSelectionIcon)
