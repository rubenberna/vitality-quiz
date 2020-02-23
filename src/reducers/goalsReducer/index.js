import _ from 'lodash'

import {
  FETCH_ALL_GOALS,
} from '../../actions/types'

export default ( state = {}, action ) => {
  switch(action.type) {
    case FETCH_ALL_GOALS:
      return { ...state, ..._.mapKeys(action.payload, 'id')}
    default:
      return state
  }
}