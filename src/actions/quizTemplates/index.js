import {
  SET_QUIZ_TEMPLATES,
  CLEAR_QUIZ_TEMPLATES
} from '../types'

export const setQuizTemplates = array => {
  return {
    type: SET_QUIZ_TEMPLATES,
    payload: array
  }
}

export const clearQuizTemplates = () => {
  return {
    type: CLEAR_QUIZ_TEMPLATES
  }
}
