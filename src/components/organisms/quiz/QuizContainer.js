import React, { Component } from 'react';
import { connect } from 'react-redux'

import FormQuizContainer from './formContainers/FormQuizContainer'
import FormUserProfile from '../profileForm/FormUserProfile'

class QuizContainer extends Component {

  renderContainers = () => {
    if(!this.props.userProfile.birthday) return <FormUserProfile/>
    else return <FormQuizContainer />
  }

  render() {
    return (
      <>
        { this.renderContainers() }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.userProfile
  }
}

export default connect(mapStateToProps, null)(QuizContainer)
