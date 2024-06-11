import {all, put, takeEvery} from 'redux-saga/effects';
import {NewsTypes} from 'store/news';
import {IResponse} from 'types';
import axiosClient from 'utils/axios';
import {GETWAY} from 'utils/constants';

function* newsListRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    if (rs.result.success) {
      yield put({
        type: NewsTypes.NEWS_LIST_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: NewsTypes.NEWS_LIST_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: NewsTypes.NEWS_LIST_FAILURE,
      error,
    });
  }
}

function* watchNewsList() {
  yield takeEvery(NewsTypes.NEWS_LIST_REQUEST, newsListRequest);
}
/***************************************************** */

function* newsImgListRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    if (rs.result.success) {
      yield put({
        type: NewsTypes.NEWS_DETAIL_IMG_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: NewsTypes.NEWS_DETAIL_IMG_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: NewsTypes.NEWS_DETAIL_IMG_FAILURE,
      error,
    });
  }
}

function* watchNewsImgList() {
  yield takeEvery(NewsTypes.NEWS_DETAIL_IMG_REQUEST, newsImgListRequest);
}
/***************************************************** */
function* newsListRelatedRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    if (rs.result.success) {
      yield put({
        type: NewsTypes.NEWS_LIST_RELATED_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: NewsTypes.NEWS_LIST_RELATED_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: NewsTypes.NEWS_LIST_RELATED_FAILURE,
      error,
    });
  }
}

function* watchNewsRelatedList() {
  yield takeEvery(NewsTypes.NEWS_LIST_RELATED_REQUEST, newsListRelatedRequest);
}

/****************************************** */
function* eventListRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    if (rs.result.success) {
      yield put({
        type: NewsTypes.EVENT_LIST_SUCCESS,
        payload: rs.result.data,
      });
    }
    yield put({
      type: NewsTypes.EVENT_LIST_FAILURE,
      error: rs.result,
    });
  } catch (error) {
    yield put({
      type: NewsTypes.EVENT_LIST_FAILURE,
      error,
    });
  }
}

function* watchEventList() {
  yield takeEvery(NewsTypes.EVENT_LIST_REQUEST, eventListRequest);
}

/****************************************** */
function* pomListRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    if (rs.result.success) {
      yield put({
        type: NewsTypes.POM_LIST_SUCCESS,
        payload: rs.result.data,
      });
    }
    yield put({
      type: NewsTypes.POM_LIST_FAILURE,
      error: rs.result,
    });
  } catch (error) {
    yield put({
      type: NewsTypes.POM_LIST_FAILURE,
      error,
    });
  }
}

function* watchPOMList() {
  yield takeEvery(NewsTypes.POM_LIST_REQUEST, pomListRequest);
}

/****************************************** */
function* eventPomCheckRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );

    if (rs.result.success) {
      yield put({
        type: NewsTypes.EVENT_POM_CHECK_SUCCESS,
        payload: rs.result.data,
      });
    }
    yield put({
      type: NewsTypes.EVENT_POM_CHECK_FAILURE,
      error: rs.result,
    });

    action?.callback(rs.result);
  } catch (error) {
    yield put({
      type: NewsTypes.EVENT_POM_CHECK_FAILURE,
      error,
    });
    action?.callback(error);
  }
}

function* watchEventPOMCheck() {
  yield takeEvery(NewsTypes.EVENT_POM_CHECK_REQUEST, eventPomCheckRequest);
}

/****************************************** */
function* newsPinActionRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.payload),
    );

    action?.callback(rs.result);
  } catch (error) {
    yield put({
      type: NewsTypes.PIN_LIST_FAILURE,
      error,
    });
  }
}

function* watchNewsPinActionRequest() {
  yield takeEvery(NewsTypes.PIN_LIST_REQUEST, newsPinActionRequest);
}

export default function* contractSagas() {
  yield all([
    watchNewsList(),
    watchEventList(),
    watchPOMList(),
    watchNewsRelatedList(),
    watchNewsImgList(),
    watchEventPOMCheck(),
    watchNewsPinActionRequest(),
  ]);
}
