import {
  SET_DEMOGRAPHICS
} from '../../actions/types'

export default ( state = {}, action ) => {
  switch (action.type) {
    case SET_DEMOGRAPHICS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
