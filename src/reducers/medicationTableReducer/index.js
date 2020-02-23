import _ from 'lodash'

import {
  FETCH_MEDICATION,
} from '../../actions/types'

export default ( state = {}, action ) => {
  switch (action.type) {
    case FETCH_MEDICATION:
      return { ...state, ..._.mapKeys(action.payload, 'id')}
    default:
      return state
  }
}
