import _ from 'lodash'

import {
  SELECT_GOAL,
  REMOVE_SELECTED_GOAL,
  CLEAR_SELECTED_GOALS
} from '../../actions/types'

export default ( state = {}, action ) => {
  switch(action.type) {
    case SELECT_GOAL:
      return {...state, [action.payload.id]: action.payload }
    case REMOVE_SELECTED_GOAL:
      return _.omit(state, action.payload)
    case CLEAR_SELECTED_GOALS:
      return state = {}
    default:
      return state
  }
}