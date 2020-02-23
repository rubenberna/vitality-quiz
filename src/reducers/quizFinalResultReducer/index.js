import { SSUP_ADVICE } from '../../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case SSUP_ADVICE:
      return { ...state, ...action.payload};
    default:
      return state
  }
}
