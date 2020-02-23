import _ from 'lodash'

import {
  SELECT_QUIZ,
  CLEAR_SELECTED_QUIZ,
  UPDATE_QUESTION_SCORE,
  UPDATE_CONTAINER_SCORE
} from '../../actions/types'

export default ( state = [], action ) => {
  switch(action.type) {
    case SELECT_QUIZ:
      return { ...state, ..._.mapKeys(action.payload, 'id')}
    case CLEAR_SELECTED_QUIZ:
      return state = {}
    case UPDATE_QUESTION_SCORE:
      return action.payload
    case UPDATE_CONTAINER_SCORE:
      return action.payload
    default:
      return state
  }
}
