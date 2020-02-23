import React, { Component } from 'react';
import { connect } from 'react-redux'

import './quizSelection.scss'
import QuizSelectionForm from '../../molecules/forms/FormQuizSelection'
import Loader from '../../atoms/loader/Loader'

class QuizSelectionSingle extends Component {

  renderIfGoals = () => {
    const { goals } = this.props
    if (goals) return (<QuizSelectionForm goals={ goals }/>)
    else return <Loader/>
  }


  render() {
    return (
      <div className='quiz-selection-single-goals'>
        { this.renderIfGoals() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goals: Object.values(state.goals),
    selectedGoals: Object.values(state.selectedGoals)
  }
}

export default connect(mapStateToProps, null)(QuizSelectionSingle)
