import React, { Component } from 'react'
import styled from 'styled-components'
import { Range } from 'react-materialize'

import composedTemplateWrapper from '../../../hocs/TemplateWrapper'
import { Rectangle } from '../../atoms/shapes'

const colors = ['aliceblue', '#fde0dc']

const giveColor = () => {
  return colors[Math.round(Math.random())]
}

const rectangleCoordinates = [
  { top: '-40vh', left: '-10vw', rotation: '230deg', bottom: '', right: '', color: giveColor() },
  { top: '', left: '-33vw', rotation: '140deg', bottom: '26vh', right: '', color: giveColor() },
  { top: '', left: '', rotation: '35deg', bottom: '25vh', right: '-34vw', color: giveColor() },
]

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Frame = styled.div`
  width: 670px;
  height: 260px;
  display: flex;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  margin-top: 60px;
  border-radius: 9px;
  padding: 39px;
  flex-direction: column;
`

class TemplateQuantity extends Component {

  renderQuestions = () => {
    const { questions } = this.props.data
    if (questions) {
      console.log('rendering quantity');
       return questions.map( (question, i) =>
        <div key={question.id} className='form-quiz-question'>
          { question.moreisbetter === 1 ? '*MB ': ''}
          {question.text}
          <Range min="0" max="4" value={this.props.state[`value${i}`]} onChange={ e => this.props.handleRangeChange(e, question, i) }/>
        </div>
      )
    }
  }

  renderRectangles = () => {
    return rectangleCoordinates.map((rectangle, i) => {
      return <Rectangle
        key={i}
        degree={rectangle.rotation}
        top={rectangle.top}
        bottom={rectangle.bottom}
        right={rectangle.right}
        left={rectangle.left}
        color={rectangle.color}
      />
    })
  }

  renderTemplate = () => {
    return (
      <Container>
        <Frame>
          { this.renderQuestions() }
        </Frame>
        { this.renderRectangles() }
      </Container>
    )
  }

  render() {
    const { currIndex, data } = this.props
    return(
      <div className='form-quiz-center'>
        { currIndex === data.index && this.renderTemplate() }
      </div>
    )
  }
}

export default composedTemplateWrapper(TemplateQuantity);
