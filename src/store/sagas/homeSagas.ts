import {all, put, takeEvery} from 'redux-saga/effects';
import {HomeTypes} from 'store/home';
import {IResponse} from 'types';
import axiosClient from 'utils/axios';
import {GETWAY} from 'utils/constants';

function* onLoadSlider(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    if (rs.result.success) {
      yield put({
        type: HomeTypes.SLIDER_SUCCESS,
        payload: rs.result.data,
      });
    }
    // action.callback?.(rs.result);
  } catch (error) {
    // console.log('Home List Eror', error);
    // action.callback?.(error.response ?? error.message);
  }
}

function* watchLoadSlider() {
  yield takeEvery(HomeTypes.SLIDER_REQUEST, onLoadSlider);
}

function* newsRequest(action) {
  try {
    console.log('action.newsRequest', action.params);

    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.newsRequest', rs);

    if (rs.result.success) {
      yield put({
        type: HomeTypes.NEWS_SUCCESS,
        payload: rs.result.data,
      });
    }
  } catch (error) {
    // console.log('Home List Eror', error);
    // action.callback?.(error.response ?? error.message);
  }
}

function* watchLoadNews() {
  yield takeEvery(HomeTypes.NEWS_REQUEST, newsRequest);
}

/********************************* */
function* onProcessRequest(action) {
  try {
    console.log('action.contact', action.params);

    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.contact', rs);
    if (rs.result.success) {
      yield put({
        type: HomeTypes.CONTACT_US_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: HomeTypes.CONTACT_US_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: HomeTypes.CONTACT_US_FAILURE,
      error,
    });
  }
}

function* watchProcess() {
  yield takeEvery(HomeTypes.CONTACT_US_REQUEST, onProcessRequest);
}

/********************************* */
function* onProcessPCTRequest(action) {
  try {
    console.log('action.contactPCT', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.contactPCT', rs);
    if (rs.result.success) {
      yield put({
        type: HomeTypes.CONTACT_PCT_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: HomeTypes.CONTACT_PCT_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: HomeTypes.CONTACT_PCT_FAILURE,
      error,
    });
  }
}

function* watchProcessPCT() {
  yield takeEvery(HomeTypes.CONTACT_PCT_REQUEST, onProcessPCTRequest);
}

/********************************* */
function* onGetProjectRequest(action) {
  try {
    console.log('action.onGetProjectRequest.params', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.onGetProjectRequest.dât', rs.result);
    if (rs.result.success) {
      yield put({
        type: HomeTypes.GET_PROJECT_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: HomeTypes.GET_PROJECT_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    console.log('err.project', JSON.stringify(error));
    yield put({
      type: HomeTypes.GET_PROJECT_FAILURE,
      error,
    });
  }
}

function* watchGetProject() {
  yield takeEvery(HomeTypes.GET_PROJECT_REQUEST, onGetProjectRequest);
}

export default function* homeSagas() {
  yield all([
    watchLoadSlider(),
    watchLoadNews(),
    watchProcess(),
    watchProcessPCT(),
    watchGetProject(),
  ]);
}
