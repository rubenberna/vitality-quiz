import _ from 'lodash'

import laravelDB from '../../apis/laravelDB'
import { startLoading, stopLoading } from '../loading'
import { calculateLifestyleQuestions } from '../lifestyle'

import {
  SELECT_QUIZ,
  CLEAR_SELECTED_QUIZ,
  SET_TEKORTEN_QUESTION_LIST,
  CLEAR_FINAL_QUESTIONS_LIST,
  UPDATE_QUESTION_SCORE,
  UPDATE_CONTAINER_SCORE,
  CALCULATE_FINAL_SCORE,
  SSUP_ADVICE,
  UPDATE_CONDITION,
  SET_CONTAINERS_IDS,
  REMOVE_CONTAINER_ID,
  ADD_LIFESTYLE_QUESTIONS
} from '../types'

export const selectQuiz = (ids) => async dispatch => {
  const string = ids.join('/')
  const response = await laravelDB.get(`/goal/${string}`)
  await dispatch({ type: SELECT_QUIZ, payload: response.data })
  await dispatch(setFinalQuestionList(response.data))
  dispatch(setContainerIds())
  dispatch(addLifestyleQuestions())
}

export const setFinalQuestionList = (selectedQuiz) => async (dispatch) => {
  let questionsList = []
  console.log('setting tekorten list');
  Object.values(selectedQuiz).forEach(goal => {
    for (let container of goal.containers) {
      questionsList = [...questionsList, ...container.questions]
    }
  });

  dispatch( {
    type: SET_TEKORTEN_QUESTION_LIST,
    payload: questionsList
  })
}

export const setContainerIds = () => (dispatch, getState) => {
  console.log('container ids');
  const state = getState()
  const { selectedQuiz } = state
  let goalIds = []

  Object.values(selectedQuiz).forEach(goal => {
    for (let container of goal.containers) {
      goalIds = [...goalIds, container.id]
    }
  })
  dispatch({
    type: SET_CONTAINERS_IDS,
    payload: goalIds.sort()
  })
}

export const addLifestyleQuestions = () => async (dispatch, getState) => {
  console.log('add lifestyle questions');
  const state = getState()
  let { lifestyleQuestions, finalQuestionsList } = state
  await Object.values(lifestyleQuestions).forEach(item => {
    finalQuestionsList = [...finalQuestionsList, item.question]
  })
  let uniqQuestions = await _.uniqBy(finalQuestionsList, 'question_nr')

  dispatch({
    type: ADD_LIFESTYLE_QUESTIONS,
    payload: uniqQuestions
  })
}

export const clearSelectedQuiz = () => {
  return {
    type: CLEAR_SELECTED_QUIZ
  }
}

export const updateCondition = (rightGender) => async (dispatch, getState) => {
  const state = getState()
  const { finalQuestionsList } = state
  let filteredQuestions = Object.values(finalQuestionsList).filter( question => question.condition_sex === 'none' || question.condition_sex === rightGender)

  dispatch({
    type: UPDATE_CONDITION,
    payload: filteredQuestions
  })
}

export const clearFinalQuestionsList = () => {
  return {
    type: CLEAR_FINAL_QUESTIONS_LIST
  }
}

export const updateQuestionScore = (answer) => async (dispatch, getState) => {
  const state = getState()
  const { selectedQuiz } = state
  const [ questionNr ] = Object.keys(answer)
  const [ points ] = Object.values(answer)

  await Object.values(selectedQuiz).map((goal) => {
    for (let container of goal.containers) {
      for (let question of container.questions) {
        if (question.question_nr === Number(questionNr)) {
          question.points = Number(points)
          dispatch(updateContainerScore(container.id))
        }
      }
    }
  })

  dispatch({
    type: UPDATE_QUESTION_SCORE,
    payload: selectedQuiz
  })
}

export const updateContainerScore = id => (dispatch, getState) => {
  const state = getState()
  const { selectedQuiz } = state
  console.log('update container score');

  Object.values(selectedQuiz).map(goal => {
    for (let container of goal.containers) {
      if( container.id === id) {
        let total = Object.values(container.questions).reduce((acc, question) => {
          return acc + question.points
        }, 0)
        container.final_score = total
        dispatch(removeContainerId(container.id))
      }
    }
  })

  dispatch({
    type: UPDATE_CONTAINER_SCORE,
    payload: selectedQuiz
  })
}

export const removeContainerId = id => (dispatch, getState) => {
  const state = getState()
  const { containersToCalculate } = state
  const filtered = containersToCalculate.filter((c) => c !== id)
  dispatch ({
    type: REMOVE_CONTAINER_ID,
    payload: filtered
  })
}

export const calculateLeftContainers = id => (dispatch, getState) => {
  console.log('calculate left containers');
  const state = getState()
  const { containersToCalculate } = state
  containersToCalculate.forEach(id => dispatch(updateContainerScore(id)))
}

export const calculateFinalScore = () => async (dispatch, getState) => {
  const state = getState()
  const { selectedQuiz } = state
  const finalResult = {}
  dispatch(startLoading())
  dispatch(calculateLifestyleQuestions())
  await dispatch(calculateLeftContainers())

  await Object.values(selectedQuiz).map((goal) => {
    for (let container of goal.containers) {
      const result = parseFloat((container.final_score / (container.questions.length * 4)) * 100).toFixed(2)
      const color =  result >= 60 ? "red" : (result < 30 ? "green" : "orange");
      finalResult[container.name] = {
        color,
        result,
        advice: {
          type: '',
          content: ''
        }
      }
    }
  })
  console.log('action final result');
  await dispatch({
    type: CALCULATE_FINAL_SCORE,
    payload: finalResult
  })
  dispatch(sendFinalScore())
}

export const sendFinalScore = () => async (dispatch, getState) => {
  const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'
  const state = getState()
  const { userProfile, finalScore, medicationTaken, demographics, lifestyleQuestions } = state

  const quiz = {
    userProfile,
    finalScore,
    medicationTaken,
    demographics,
    lifestyleQuestions
  }

  console.log('sending result: ', quiz);
  const response = await laravelDB.post('/result', {
    ...quiz,
    env
  })

  dispatch({
    type: SSUP_ADVICE,
    payload: response.data,
  })
  dispatch(stopLoading())
}

export const savequizFinalResult = (data) => {

  return {
    type: SSUP_ADVICE,
    payload: data,
  }
}
