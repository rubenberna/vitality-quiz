import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'react-materialize'
import { Radio } from 'semantic-ui-react'

import { ButtonDefault } from '../../../atoms/buttons/ButtonDefault'
import IntroQuizSelection from '../../../molecules/intros/IntroQuizSelection'
import Timer from '../../../atoms/timer/Timer'
import { Rectangle } from '../../../atoms/shapes'
import { Paragraph } from '../../../atoms/typography/index'

class QuizSelectionBoard extends Component {

  renderButton = () => {
    const { selectedGoals } = this.props
    if (selectedGoals.length) {
      return <ButtonDefault
              inverted='true'
              handleClick={this.props.selectQuiz}
              >
                Ga verder
                <Icon>send</Icon>
              </ButtonDefault>
    }
  }

  renderSwitch = () => {
    const { showGroups } = this.props
    return (
      <>
        <Paragraph>Switch to {showGroups ? 'individual' : 'groups'}</Paragraph>
        <Radio toggle onChange={e => this.props.toggleView(!showGroups)}/>
      </>
    )
  }

  render() {
    return(
      <>
        <IntroQuizSelection/>
        {this.renderSwitch()}
        <Timer />
        { this.renderButton() }
        <Rectangle degree='-45deg' left='-200px' top='270px'/>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedGoals: Object.values(state.selectedGoals)
  }
}
export default connect(mapStateToProps, null)(QuizSelectionBoard);
