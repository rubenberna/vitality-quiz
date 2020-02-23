import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import QuizSelectionIcon from '../../atoms/icons/QuizSelectionIcon'

class FormQuizSelection extends Component {
  
  renderGoals = () => {
    const { goals } = this.props
    return (
      goals.map(goal => (
        <Grid.Column key={goal.id}>
          <QuizSelectionIcon
            goal={ goal } />
        </Grid.Column>
      ))
    )
  }

  render() {
    return (
      <div className='ui container grid'>
        <Grid columns={ 4 }>
          <Grid.Row>
            { this.renderGoals() }
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default FormQuizSelection
