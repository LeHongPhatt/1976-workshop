import {createReducer} from 'reduxsauce';
import {ISurveyState} from 'types';
import {SurveyTypes} from './Actions';

const INITIAL_STATE: ISurveyState = {
  loading: false,
  error: null,
  listSurvey: [],
  questionSurvey: [],
  answerSurvey: [],
};

const appRequest = (state: ISurveyState) => ({
  ...state,
  error: null,
  loading: true,
});

const appFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
  loading: false,
});

const listSurveySuccess = (state: ISurveyState, {payload}: any) => ({
  ...state,
  error: null,
  loading: false,
  listSurvey: payload,
});

const questionSurveySuccess = (state: ISurveyState, {payload}: any) => ({
  ...state,
  error: null,
  loading: false,
  questionSurvey: payload,
});

const anwserSurveySuccess = (state: ISurveyState, {payload}: any) => ({
  ...state,
  error: null,
  loading: false,
  answerSurvey: payload,
});

const HANDLERS = {
  [SurveyTypes.GET_SURVEY_LIST_FAILURE]: appFailure,
  [SurveyTypes.GET_SURVEY_LIST_REQUEST]: appRequest,
  [SurveyTypes.GET_SURVEY_LIST_SUCCESS]: listSurveySuccess,
  [SurveyTypes.GET_SURVEY_QUESTION_FAILURE]: appFailure,
  [SurveyTypes.GET_SURVEY_QUESTION_REQUEST]: appRequest,
  [SurveyTypes.GET_SURVEY_QUESTION_SUCCESS]: questionSurveySuccess,
  [SurveyTypes.GET_SURVEY_ANSWER_FAILURE]: appFailure,
  [SurveyTypes.GET_SURVEY_ANSWER_REQUEST]: appRequest,
  [SurveyTypes.GET_SURVEY_ANSWER_SUCCESS]: anwserSurveySuccess,
};

export const survey = createReducer(INITIAL_STATE, HANDLERS);
