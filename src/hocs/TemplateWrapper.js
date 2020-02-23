import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { updateQuestionScore } from '../actions/quiz'
import { updateLifestyleQuestion } from '../actions/lifestyle'

const TemplateWrapper = (WrappedComponent) => {
  return class extends Component {
    state = {
      value0: 0,
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0
    }

    handleBooleanChange = async (e, question) => {
      let input = this.state[question.question_nr] === undefined ? 0 : parseInt(this.state[question.question_nr], 10)
      await this.setState({ [`${question.question_nr}`]: input + 1 })
      let points = this.state[question.question_nr] % 2 === 0 ? 0 : 4
      this.updateQuestionScore(points, question)
    }

    handleRangeChange = (e, question, i) => {
      const inputValue = e.target.value
      this.setState({ [`value${i}`]: inputValue })
      this.updateQuestionScore(inputValue, question)
    }

    updateQuestionScore = (points, question) => {
      let change = {}
      let score
      if (question.moreisbetter === 1) score = 4 - points
      else score = points
      change[question.question_nr] = score
      this.props.updateQuestionScore(change)
      if(question.lifestyle === 1) this.props.updateLifestyleQuestion(change)
    }

    render() {
      return <WrappedComponent
        {...this.props}
        handleBooleanChange={this.handleBooleanChange}
        handleRangeChange={this.handleRangeChange}
        updateQuestionScore={this.updateQuestionScore}
        state={this.state}
        />
    }
  }
}

const composedTemplateWrapper = compose(
  connect(null, {updateQuestionScore, updateLifestyleQuestion}),
  TemplateWrapper
)
export default composedTemplateWrapper
