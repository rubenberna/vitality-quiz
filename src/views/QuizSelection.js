import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'

import { fetchAllGoals, clearSelectedGoals } from '../actions/goals'
import {
  selectQuiz,
  clearSelectedQuiz,
  clearFinalQuestionsList,
  updateCondition
} from '../actions/quiz'
import { clearQuizTemplates } from '../actions/quizTemplates'
import { startLoading, stopLoading } from '../actions/loading'
import { fetchLifestyleQuestions } from '../actions/lifestyle'

import QuizSelectionSingle from '../components/organisms/quizSelection/QuizSelectionSingle'
import QuizSelectionGroups from '../components/organisms/quizSelection/QuizSelectionGroups'
import Navbar from '../components/molecules/navbars/Navbar'
import LoginQuizContainer from '../components/organisms/login/LoginQuizContainer'
import QuizSelectionBoard from '../components/organisms/quizSelection/quizSelectionBoard/QuizSelectionBoard'

class QuizSelection extends Component {

  state = {
    showGroups: true
  }

  componentDidMount() {
    this.props.clearSelectedGoals()
    this.props.clearSelectedQuiz()
    this.props.clearFinalQuestionsList()
    this.props.clearQuizTemplates()
    if (_.isEmpty(this.props.goals)) {
      this.props.fetchAllGoals()
    }
    if (_.isEmpty(this.props.lifestyleQuestions)) {
      this.props.fetchLifestyleQuestions()
    }
  }

  toggleView = (boolean) => {
    this.setState({ showGroups: boolean })
  }

  selectQuiz = async () => {
    let ids = []
    await this.props.selectedGoals.forEach(goal => ids = [...ids, goal.id]);
    this.runQuiz(ids)
  }

  runQuiz = async (ids) => {
    this.props.startLoading()
    const { user } = this.props
    await this.props.selectQuiz(ids)
    if (user.gender)  {
      await this.props.updateCondition(user.gender)
    }
    this.props.history.push('/quiz')
    this.props.stopLoading()
  }

  renderOptions = () => {
    if (this.props.loading) return <BounceLoader sizeUnit={"px"} size={150} color={'#fde0dc'} />
    if (!this.state.showGroups) return (
      <QuizSelectionSingle
        showGroups={this.toggleView}
      />)
    else return (
      <QuizSelectionGroups
        showGroups={this.toggleView}
      />)
  }

  render() {
    return (
      <div className='quiz-selection'>
        <Navbar/>
        <div className='quiz-selection-container'>
          <div className='quiz-selection-container-board'>
            <div>
              <QuizSelectionBoard selectQuiz={this.selectQuiz} toggleView={this.toggleView} showGroups={this.state.showGroups}/>
            </div>
          </div>
          { this.renderOptions() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedGoals: Object.values(state.selectedGoals),
    user: state.userProfile,
    loading: state.loading,
    goals: state.goals,
    lifestyleQuestions: state.lifestyleQuestions
  }
}

const quizSelectionView = connect(mapStateToProps, {
  fetchAllGoals,
  selectQuiz,
  clearSelectedGoals,
  clearSelectedQuiz,
  clearFinalQuestionsList,
  updateCondition,
  startLoading,
  stopLoading,
  fetchLifestyleQuestions,
  clearQuizTemplates
 })(QuizSelection);

export default withRouter(quizSelectionView)

//  { _.isEmpty(this.props.user) && <LoginQuizContainer/> }
