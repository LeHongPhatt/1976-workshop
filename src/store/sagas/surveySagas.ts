import {all, put, takeEvery} from 'redux-saga/effects';
import {SurveyTypes} from 'store/survey';
import {IResponse} from 'types';
import axiosClient from 'utils/axios';
import {GETWAY} from 'utils/constants';

function* listSurveyRequest(action) {
  try {
    console.log('action.listSurveyRequest', action.params);

    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.listSurveyRequest', rs);

    if (rs.result.success) {
      yield put({
        type: SurveyTypes.GET_SURVEY_LIST_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: SurveyTypes.GET_SURVEY_LIST_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: SurveyTypes.GET_SURVEY_LIST_FAILURE,
      error,
    });
  }
}

function* watchSurveyList() {
  yield takeEvery(SurveyTypes.GET_SURVEY_LIST_REQUEST, listSurveyRequest);
}
/***************************************************** */

function* questionSurveyRequest(action) {
  try {
    console.log('action.questionSurveyRequest', action.params);

    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.questionSurveyRequest', rs);

    if (rs.result.success) {
      yield put({
        type: SurveyTypes.GET_SURVEY_QUESTION_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: SurveyTypes.GET_SURVEY_QUESTION_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: SurveyTypes.GET_SURVEY_QUESTION_FAILURE,
      error,
    });
  }
}

function* watchQuestionSurvey() {
  yield takeEvery(
    SurveyTypes.GET_SURVEY_QUESTION_REQUEST,
    questionSurveyRequest,
  );
}
/***************************************************** */

function* answerSurveyRequest(action) {
  try {
    console.log('action.answerSurveyRequest', action.params);

    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.answerSurveyRequest', rs);

    if (rs.result.success) {
      yield put({
        type: SurveyTypes.GET_SURVEY_ANSWER_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: SurveyTypes.GET_SURVEY_ANSWER_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: SurveyTypes.GET_SURVEY_ANSWER_FAILURE,
      error,
    });
  }
}

function* watchAnswerSurvey() {
  yield takeEvery(SurveyTypes.GET_SURVEY_ANSWER_REQUEST, answerSurveyRequest);
}
/***************************************************** */

function* delAnswerSurveyRequest(action) {
  try {
    console.log('action.delAnswerSurveyRequest', action.params);

    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.delAnswerSurveyRequest', rs);
    action.callback?.(rs.result);
  } catch (error) {
    action.callback?.(error);
  }
}

function* watchDelAnswerSurvey() {
  yield takeEvery(SurveyTypes.DEL_ANSWER_REQUEST, delAnswerSurveyRequest);
}
/***************************************************** */

function* submitAnswerSurveyRequest(action) {
  try {
    console.log('action.submitAnswerSurveyRequest', action.params);

    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.submitAnswerSurveyRequest', rs);
    action.callback?.(rs.result);
  } catch (error) {
    action.callback?.(error);
  }
}

function* watchSubmitAnswerSurvey() {
  yield takeEvery(SurveyTypes.ADD_ANSWER_REQUEST, submitAnswerSurveyRequest);
}
/***************************************************** */

export default function* surveySagas() {
  yield all([
    watchSurveyList(),
    watchQuestionSurvey(),
    watchAnswerSurvey(),
    watchDelAnswerSurvey(),
    watchSubmitAnswerSurvey(),
  ]);
}
