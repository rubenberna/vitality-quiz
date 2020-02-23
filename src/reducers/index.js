import { combineReducers } from 'redux'

import goalsReducer from './goalsReducer'
import selectedGoalsReducer from './selectedGoalsReducer'
import selectedQuizReducer from './selectedQuizReducer'
import finalQuestionsList from './finalQuestionListReducer'
import finalScoreReducer from './finalScoreReducer'
import quizFinalResultReducer from './quizFinalResultReducer'
import userProfileReducer from './userProfileReducer'
import medicationTableReducer from './medicationTableReducer'
import medicationTakenReducer from './medicationTakenReducer'
import demographicsReducer from './demographicsReducer'
import loadingReducer from './loadingReducer'
import containersIdsReducer from './containersIdsReducer'
import lifeStyleReducer from './lifeStyleReducer'
import quizTemplatesReducer from './quizTemplatesReducer'
import debugStateReducer from './debugStateReducer'
import { dashboardNavigateReducer } from './dashboardNavigateReducer'

export default combineReducers({
  goals: goalsReducer,
  selectedGoals: selectedGoalsReducer,
  selectedQuiz: selectedQuizReducer,
  finalQuestionsList: finalQuestionsList,
  finalScore: finalScoreReducer,
  quizFinalResult: quizFinalResultReducer,
  userProfile: userProfileReducer,
  medicationTable: medicationTableReducer,
  medicationTaken: medicationTakenReducer,
  demographics: demographicsReducer,
  loading: loadingReducer,
  containersToCalculate: containersIdsReducer,
  lifestyleQuestions: lifeStyleReducer,
  quizTemplates: quizTemplatesReducer,
  debugState: debugStateReducer,
  dashboardNavigate : dashboardNavigateReducer
})
