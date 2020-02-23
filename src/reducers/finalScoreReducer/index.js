import {
  CALCULATE_FINAL_SCORE
} from '../../actions/types'

export default ( state = {}, action) => {
  switch(action.type) {
    case CALCULATE_FINAL_SCORE:
      return {...state, ...action.payload }
    default:
      return state
  }
}