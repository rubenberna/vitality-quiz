import laravelDB from '../../apis/laravelDB'

import {
  FETCH_MEDICATION,
  ADD_MED,
  REMOVE_MED,
  CLEAR_MEDS,
  SET_MEDS
} from '../types'

export const fetchMedication = () => async dispatch => {
  const response = await laravelDB.get('/medication')
  dispatch({ type: FETCH_MEDICATION, payload: response.data })
}

export const addMed = id => {
  return {
    type: ADD_MED,
    payload: id
  }
}

export const removeMed = id => {
  return {
    type: REMOVE_MED,
    payload: id
  }
}

export const clearMeds = () => {
  return {
    type: CLEAR_MEDS,
  }
}

export const setMeds = list => {
  return {
    type: SET_MEDS,
    payload: list
  }
}
