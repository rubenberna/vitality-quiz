import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'

import QuizContainer from '../components/organisms/quiz/QuizContainer'

class Quiz extends Component {

  renderForm = () => {
    if (isEmpty(this.props.selectedQuiz)) this.props.history.push('/select_quiz')
    else return (<QuizContainer />)
  }


  render() {
    return (
      <div className="quiz">
       { this.renderForm() }
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    selectedQuiz: Object.values(state.selectedQuiz),
  }
}

const quizView = connect(mapStateToProps)(Quiz);
export default withRouter(quizView)
