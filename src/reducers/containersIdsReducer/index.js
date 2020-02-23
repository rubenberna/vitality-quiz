import {
  SET_CONTAINERS_IDS,
  REMOVE_CONTAINER_ID
} from '../../actions/types'

export default ( state = [], action ) => {
  switch (action.type) {
    case SET_CONTAINERS_IDS:
      return [...state, ...action.payload ]
    case REMOVE_CONTAINER_ID:
      return [ ...action.payload ]
    default:
      return state
  }
}
