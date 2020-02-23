import {
  ADD_MED,
  REMOVE_MED,
  CLEAR_MEDS,
  SET_MEDS
} from '../../actions/types'

export default ( state = [], action ) => {
  switch (action.type) {
    case ADD_MED:
      return [ ...state, action.payload]
    case REMOVE_MED:
      const newMedsList = state.filter(item => item !== action.payload)
      return [ ...newMedsList ]
    case CLEAR_MEDS:
      return state = {}
    case SET_MEDS:
      return [...action.payload]
    default:
      return state
  }
}
