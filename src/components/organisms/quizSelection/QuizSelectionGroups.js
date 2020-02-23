import React, { Component } from "react"
import { connect } from 'react-redux'
import { selectGoal, removeSelectedGoal } from '../../../actions/goals'

import { Header } from '../../atoms/typography'
import { MindsetIcon, LifeIcon, StomachIcon } from '../../atoms/icons/GroupIcons'

class QuizSelectionGroups extends Component {

  state = {
    selected: null
  }

  onSelect = (goals) => {
    const { selectGoal, removeSelectedGoal, selectedGoals } = this.props
    this.setState({ selected: 'first' })
    goals.forEach(goal => {
      if (selectedGoals.hasOwnProperty(goal.id)) removeSelectedGoal(goal)
      else selectGoal(goal)
    })
  }

  setActive = (name) => {
    const { selected } = this.state
    if (selected === name) this.setState({ selected: null })
    else this.setState({ selected: name })
  }

  render() {
    const { goals } = this.props
    const { selected } = this.state
    return (
      <div className='quiz-selection-groups-container'>
        <div className="quiz-selection-groups">
            <div className={`quiz-selection-groups-icon ${selected === 'first' ? 'icon-selected' : 'icon-unselected'}`}
              onClick={ e => { this.onSelect([goals[0], goals[5], goals[7]]) ; this.setActive('first') }}>
              <MindsetIcon />
              <Header size='small'>Mindset</Header>
            </div>
            <div className={`quiz-selection-groups-icon ${selected === 'second' ? 'icon-selected' : 'icon-unselected'}`}
              onClick={ e => { this.onSelect([goals[11], goals[12], goals[2]]); this.setActive('second')}}>
              <LifeIcon />
              <Header size='small'>Levenstijl</Header>
            </div>
            <div className={`quiz-selection-groups-icon ${selected === 'third' ? 'icon-selected' : 'icon-unselected'}`}
              onClick={ e => { this.onSelect([goals[2], goals[1], goals[4]]); this.setActive('third') }}>
              <StomachIcon />
              <Header size='small'>Eetgewoontjes</Header>
            </div>
        </div>
          <div className='quiz-selection-groups-switch' onClick={e => this.props.showGroups(false)}>
            <button className="waves-effect waves-light btn">De test personaliseren</button>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goals: Object.values(state.goals),
    selectedGoals: state.selectedGoals
  }
}

export default connect(mapStateToProps, { selectGoal, removeSelectedGoal })(QuizSelectionGroups);
