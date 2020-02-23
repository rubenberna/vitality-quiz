import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import shortid from 'shortid'
import { BounceLoader } from 'react-spinners';

import '../quiz.scss'
import { Form } from 'semantic-ui-react'
import { calculateFinalScore } from '../../../../actions/quiz'
import { setQuizTemplates } from '../../../../actions/quizTemplates'
import TemplateBoolean from '../../../templates/groups/TemplateBoolean'
import TemplateFrequency from '../../../templates/groups/TemplateFrequency'
import TemplateQuantity from '../../../templates/groups/TemplateQuantity'
import LifeStyleTemplate from '../../../templates/groups/LifestyleTemplate' // NEW
import { ProgressCircle } from '../../../atoms/progressBar/CircularProgress'
import QuizNavigation from '../../../molecules/quizNavigation/Navigation'
import Medicines from '../../medicines/Medicines'
import FishTemplate from '../../../templates/individual/FishTemplate'
import MeatTemplate from '../../../templates/individual/MeatTemplate'
import SmokeTemplate from '../../../templates/individual/SmokeTemplate'
import VeggiesTemplate from '../../../templates/individual/VeggiesTemplate'
import WaterTemplate from '../../../templates/individual/WaterTemplate'
import AlcoholTemplate from '../../../templates/individual/AlcoholTemplate'
import WorkoutTemplate from '../../../templates/individual/WorkoutTemplate'

class FormQuizContainer extends Component {
  state = {
    lastIndex: 0,
    currIndex: 0,
    quizForms: [],
    showMedication: false
  }

  componentDidMount() {
    if (!this.props.quizTemplates.length) this.filterQuizPerQuestionType()
  }

  // 1. Identify question type
  filterQuizPerQuestionType = async () => {
    const { finalQuestionsList } = this.props
    const booleanQuestions = finalQuestionsList.filter( question => question.questiontypes_name === 'boolean' && question.specific_template === 0)
    const quantityQuestions = finalQuestionsList.filter( question => question.questiontypes_name === 'quantity' && question.specific_template === 0)
    const frequencyQuestions = finalQuestionsList.filter( question => question.questiontypes_name === 'frequency' && question.specific_template === 0)
    const specificTemplates = finalQuestionsList.filter( question => question.specific_template === 1)

    await this.divideIntoBatches(booleanQuestions, 'booleanQuestions')
    await this.divideIntoBatches(quantityQuestions, 'quantityQuestions')
    await this.divideIntoBatches(frequencyQuestions, 'frequencyQuestions')
    this.setState({ specificTemplates: specificTemplates })
    this.pushBatchesInArray()
  }

  // 2. Sort them into batches 5 questions
  divideIntoBatches = (array, name) => {
    const size = 5
    let index = 0
    let batchedArray = []
    while (index < array.length) {
      batchedArray.push({questions: array.slice(index, size + index), key: shortid.generate(), template: name })
      index += size
    }
    this.setState({ [`${name}`]: batchedArray })
  }

  // 3. Join all batches in one array
  pushBatchesInArray = () => {
    const { booleanQuestions, quantityQuestions, frequencyQuestions, specificTemplates } = this.state
    let templatesCollection = []
    booleanQuestions.forEach( batch => templatesCollection.push(batch))
    quantityQuestions.forEach( batch => templatesCollection.push(batch))
    frequencyQuestions.forEach( batch => templatesCollection.push(batch))
    specificTemplates.template = 'lifeStyleQuestions'
    templatesCollection.push(specificTemplates) //NEW
    // specificTemplates.forEach( question => templatesCollection.push(question))
    this.shuffleArray(templatesCollection)
  }

  // 4. Shuffle order of questions
  shuffleArray = (array) => {
    array.sort(() => Math.random() - 0.5)
    this.setIndexPerBatchAndSetTemplatesCollection(array)
  }

  // 5. Add an index per batch
  setIndexPerBatchAndSetTemplatesCollection = async (array) => {
    let index = 0
    array.forEach(batch => {
      batch.index = index
      index ++
    })
    await this.props.setQuizTemplates(array)
  }

  // 6. Render templates
  renderTemplates = () => {
    const { currIndex } = this.state
    const { quizTemplates } = this.props
    if (quizTemplates) {
      return quizTemplates.map( (batch, i) => {
        if (batch.template === 'booleanQuestions') return <TemplateBoolean key={i} data={batch} currIndex={currIndex} />
        if (batch.template === 'quantityQuestions') return <TemplateQuantity key={i} data={batch} currIndex={currIndex} />
        if (batch.template === 'frequencyQuestions') return <TemplateFrequency key={i} data={batch} currIndex={currIndex} />
        if (batch.template === 'lifeStyleQuestions') return <LifeStyleTemplate key={i} data={batch} currIndex={currIndex} />
        // if (batch.id === 382) return <FishTemplate key={i} data={batch} currIndex={ currIndex } />
        // if (batch.id === 383) return <MeatTemplate key={i} data={batch} currIndex={ currIndex } />
        // if (batch.id === 712) return <SmokeTemplate key={i} data={batch} currIndex={ currIndex } />
        // if (batch.id === 384) return <VeggiesTemplate key={i} data={batch} currIndex={ currIndex } />
        // if (batch.id === 790) return <WaterTemplate key={i} data={batch} currIndex={ currIndex } />
        // if (batch.id === 381) return <AlcoholTemplate key={i} data={batch} currIndex={ currIndex } />
        // if (batch.id === 786) return <WorkoutTemplate key={i} data={batch} currIndex={ currIndex } />
      })
    }
  }

  changePage = (page) => {
    this.setState({ currIndex: this.state.currIndex + page })
  }

  showMedication = () => {
    this.setState({ showMedication: !this.state.showMedication })
  }

  finishQuiz = () => {
    this.props.calculateFinalScore()
    this.props.history.push('/result')
  }

  renderPharmacy = () => {
    if (this.state.showMedication) {
      return (
        <Medicines
        finishQuiz={ this.finishQuiz }
        showMedication={ this.showMedication }/>
      )
    }
  }

  renderQuiz = () => {
    const { currIndex, showMedication } = this.state
    const { quizTemplates } = this.props
    if (this.props.loading) return <BounceLoader sizeUnit={'px'} size={150} color={'#fde0dc'} />
    if (!this.props.loading && !showMedication) return (
      <div className='quiz-container'>
        <ProgressCircle currIndex={currIndex} lastIndex={quizTemplates.length - 1}/>
          <Form className="form-quiz">
            { this.renderTemplates() }
          </Form>
        <QuizNavigation
          currIndex={ currIndex }
          lastIndex={ quizTemplates.length - 1 }
          changePage={ this.changePage }
          showMedication={ this.showMedication }
        />
      </div>
    )
  }

  render() {
    return (
      <>
        { this.renderQuiz() }
        { this.renderPharmacy() }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    finalQuestionsList: state.finalQuestionsList,
    selectedQuiz: state.selectedQuiz,
    loading: state.loading,
    quizTemplates: state.quizTemplates
  }
}

const containerLogic = connect(mapStateToProps, { calculateFinalScore, setQuizTemplates }) (FormQuizContainer)

export default withRouter(containerLogic)
