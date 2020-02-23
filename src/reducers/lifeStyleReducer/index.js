import {
  SET_LIFESTYLE_QUESTIONS
} from '../../actions/types'

export default ( state = {}, action) => {
  switch (action.type) {
    case SET_LIFESTYLE_QUESTIONS:
      return {...state, ...action.payload }
    default:
      return state
  }
}
