import laravelDB from '../../apis/laravelDB'
import { startLoading, stopLoading } from '../loading'

import {
  FETCH_ALL_GOALS,
  SELECT_GOAL,
  REMOVE_SELECTED_GOAL,
  CLEAR_SELECTED_GOALS
} from '../types'

export const fetchAllGoals = () => async dispatch => {
  dispatch(startLoading())
  const response = await laravelDB.get('/goals')
  dispatch({ type: FETCH_ALL_GOALS, payload: response.data })
  dispatch(stopLoading())
}

export const selectGoal = goal => {
  return {
    type: SELECT_GOAL,
    payload: goal
  }
}

export const removeSelectedGoal = goal => {
  return {
    type: REMOVE_SELECTED_GOAL,
    payload: goal.id
  }
}

export const clearSelectedGoals = () => {
  return {
    type: CLEAR_SELECTED_GOALS
  }
}
