import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { savequizFinalResult } from '../actions/quiz'
import laravelDB from '../apis/laravelDB'

class Verify extends Component {

  findKey = async () => {
    const url = this.props.history.location.search
    const key = url.split('=')[1]
    if(key) {
      const response = await laravelDB.post('/verify', { key })
      this.props.savequizFinalResult(response.data)
    }
    this.redirectToResultsPage()
  }

  redirectToResultsPage = () => {
    return setTimeout(() => this.props.history.push('/result'), 1000)
  }

  componentDidMount() {
    this.findKey()
  }

  render() {
    return (
      <div>
        Thanks! We'll take you to your results!
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quizFinalResult: state.quizFinalResult,
  }
}

const verifyStep = connect(mapStateToProps, {savequizFinalResult})(Verify);
export default withRouter(verifyStep)
