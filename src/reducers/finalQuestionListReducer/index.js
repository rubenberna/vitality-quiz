import {
  SET_TEKORTEN_QUESTION_LIST,
  CLEAR_FINAL_QUESTIONS_LIST,
  UPDATE_CONDITION,
  ADD_LIFESTYLE_QUESTIONS
} from '../../actions/types'

export default ( state = [], action ) => {
  switch(action.type) {
    case SET_TEKORTEN_QUESTION_LIST:
      return action.payload
    case UPDATE_CONDITION:
      return action.payload
    case CLEAR_FINAL_QUESTIONS_LIST:
      return state = []
    case ADD_LIFESTYLE_QUESTIONS:
      return action.payload
    default:
      return state
  }
}
