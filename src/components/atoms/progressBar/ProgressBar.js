import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react'

export default class ProgressBar extends Component {

    percentage = () => {
      return Math.floor((this.props.currIndex / this.props.lastIndex) * 100)
    }

  render() {
    return (
      <div className='progress-bar'>
        <Progress percent={this.percentage()} indicating/>
      </div>
    )
  }
}
