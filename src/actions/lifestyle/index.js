import laravelDB from '../../apis/laravelDB';

import { SET_LIFESTYLE_QUESTIONS } from '../types';

export const fetchLifestyleQuestions = () => async dispatch => {
  const response = await laravelDB.get('/lifestyle_questions');
  dispatch({
    type: SET_LIFESTYLE_QUESTIONS,
    payload: response.data
  });
};

export const updateLifestyleQuestion = answer => async (dispatch, getState) => {
  const state = getState();
  const { lifestyleQuestions } = state;
  const [id] = Object.keys(answer);
  const [points] = Object.values(answer);
  Object.values(lifestyleQuestions).map(item => {
    if (item.question.question_nr === Number(id)) {
      item.points = Number(points);
    }
  });

  dispatch({
    type: SET_LIFESTYLE_QUESTIONS,
    payload: lifestyleQuestions
  });
};

export const calculateLifestyleQuestions = () => (dispatch, getState) => {
  console.log('calculate lifestyle questions');
  const state = getState();
  const { lifestyleQuestions } = state;
  Object.values(lifestyleQuestions).map(item => {
    item.score = parseFloat((item.points / 4) * 100).toFixed(2);
    console.log('lifestyle item score: ', item.score);
    item.result =
      item.score >= 60
        ? item.supplement
        : item.score < 30
        ? 'none'
        : item.lifestyle_advice;
  });

  dispatch({
    type: SET_LIFESTYLE_QUESTIONS,
    payload: lifestyleQuestions
  });
};
