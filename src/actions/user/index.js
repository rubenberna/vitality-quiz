import {
  SAVE_USER,
  SET_USER_NAME,
  SET_USER_EMAIL,
  SET_USER_GENDER,
  SET_USER_HEIGHT,
  SET_USER_WEIGHT,
  SET_USER_DOB,
  SET_USER_KEY
} from '../types'

export const setUserKey = (data) => {
  return {
    type: SET_USER_KEY,
    payload: data
  }
}

export const saveUser = (user) => {
  return {
    type: SAVE_USER,
    payload: user
  }
}

export const setUserName = (data) => {
  let finalName = [];
  const separateNames = data.split(' ');
  for (let element of separateNames) {
    element = element.charAt(0).toUpperCase() + element.slice(1);
    finalName.push(element);
  }

  return {
    type: SET_USER_NAME,
    payload: finalName.join(' ')
  }
}

export const setUserEmail = (data) => {
  return {
    type: SET_USER_EMAIL,
    payload: data
  }
}

export const setUserGender = (data) => {
  return {
    type: SET_USER_GENDER,
    payload: data
  }
}

export const setUserHeight = (data) => {
  return {
    type: SET_USER_HEIGHT,
    payload: data
  }
}

export const setUserWeight = (data) => {
  return {
    type: SET_USER_WEIGHT,
    payload: data
  }
}

export const setUserDOB = (data) => {
  return {
    type: SET_USER_DOB,
    payload: data
  }
}
