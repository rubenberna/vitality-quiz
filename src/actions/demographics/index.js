import {
  SET_DEMOGRAPHICS
} from '../types'

const calculateAge = (dob) => {
  const ageDifMs = Date.now() - new Date(dob).getTime()
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

const calculateBMI = (height, weight) => {
  let cm = parseInt(height)
  let kg = parseFloat(weight)

  let newCm = parseFloat(cm/100)
  let bmi = kg / (newCm * newCm )
  bmi = bmi.toFixed(1)
  return parseFloat(bmi)
}

export const setDemographics = () => (dispatch, getState) => {
  const state = getState()
  const { userProfile } = state

  const person = {
    age: { years: calculateAge(userProfile.birthday), 'advice': ''},
    bmi: { index: calculateBMI(userProfile.height, userProfile.weight), 'advice': ''}
  }
  dispatch ({
     type: SET_DEMOGRAPHICS,
     payload: person
   })
}
