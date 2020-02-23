import {
  SET_QUIZ_TEMPLATES,
  CLEAR_QUIZ_TEMPLATES
} from '../../actions/types'

export default ( state = [], action ) => {
  switch(action.type) {
    case SET_QUIZ_TEMPLATES:
      return action.payload
    case CLEAR_QUIZ_TEMPLATES:
      return state = []
    default:
      return state
  }
}
