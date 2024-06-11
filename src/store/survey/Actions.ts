import {createTypes} from 'reduxsauce';
import {IParamsRequest} from 'types';

export const SurveyTypes = createTypes(`
  GET_SURVEY_LIST_REQUEST
  GET_SURVEY_LIST_SUCCESS
  GET_SURVEY_LIST_FAILURE

  GET_SURVEY_QUESTION_REQUEST
  GET_SURVEY_QUESTION_SUCCESS
  GET_SURVEY_QUESTION_FAILURE

  GET_SURVEY_ANSWER_REQUEST
  GET_SURVEY_ANSWER_SUCCESS
  GET_SURVEY_ANSWER_FAILURE

  DEL_ANSWER_REQUEST
  DEL_ANSWER_SUCCESS
  DEL_ANSWER_FAILURE

  ADD_ANSWER_REQUEST
  ADD_ANSWER_SUCCESS
  ADD_ANSWER_FAILURE
`);

export const listSurveyRequest = (
  params: IParamsRequest,
  callback: () => {},
) => ({
  type: SurveyTypes.GET_SURVEY_LIST_REQUEST,
  params,
  callback,
});

export const questionSurveyRequest = (
  params: IParamsRequest,
  callback: () => {},
) => ({
  type: SurveyTypes.GET_SURVEY_QUESTION_REQUEST,
  params,
  callback,
});

export const answerSurveyRequest = (
  params: IParamsRequest,
  callback: () => {},
) => ({
  type: SurveyTypes.GET_SURVEY_ANSWER_REQUEST,
  params,
  callback,
});

export const delAnswerSurveyRequest = (
  params: IParamsRequest,
  callback: () => {},
) => ({
  type: SurveyTypes.DEL_ANSWER_REQUEST,
  params,
  callback,
});

export const submitAnswerSurveyRequest = (
  params: IParamsRequest,
  callback: () => {},
) => ({
  type: SurveyTypes.ADD_ANSWER_REQUEST,
  params,
  callback,
});
