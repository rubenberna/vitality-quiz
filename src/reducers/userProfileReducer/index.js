import {
  SAVE_USER,
  SET_USER_NAME,
  SET_USER_EMAIL,
  SET_USER_GENDER,
  SET_USER_HEIGHT,
  SET_USER_WEIGHT,
  SET_USER_DOB,
  SET_USER_KEY
} from '../../actions/types'

export default ( state = {}, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {...state, ...action.payload }
    case SET_USER_NAME:
      return {...state, name: action.payload }
    case SET_USER_EMAIL:
      return {...state, email: action.payload }
    case SET_USER_GENDER:
      return {...state, gender: action.payload }
    case SET_USER_HEIGHT:
      return {...state, height: action.payload }
    case SET_USER_WEIGHT:
      return {...state, weight: action.payload }
    case SET_USER_DOB:
      return {...state, birthday: action.payload }
    case SET_USER_KEY:
      return {...state, key: action.payload }
    default:
      return state
  }
}
