import {all, put, takeEvery} from 'redux-saga/effects';
import {DocumentsTypes} from 'store/document';
import {IResponse} from 'types';
import axiosClient from 'utils/axios';
import {GETWAY} from 'utils/constants';

function* getDocumentRequest(action) {
  try {
    // console.log('action.getDocumentRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.getDocumentRequest', rs);

    if (rs.result.success) {
      yield put({
        type: DocumentsTypes.GET_DOCUMENT_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: DocumentsTypes.GET_DOCUMENT_FAILURE,
        error: rs.result,
      });
    }
    action?.callback(rs.result);
  } catch (error) {
    yield put({
      type: DocumentsTypes.GET_DOCUMENT_FAILURE,
      error,
    });
  }
}

function* watchDocuments() {
  yield takeEvery(DocumentsTypes.GET_DOCUMENT_REQUEST, getDocumentRequest);
}
/***************************************************** */

function* getImageListRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    if (rs.result.success) {
      yield put({
        type: DocumentsTypes.GET_IMAGE_LIST_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: DocumentsTypes.GET_IMAGE_LIST_FAILURE,
        error: rs.result,
      });
    }
    action?.callback(rs.result);
  } catch (error) {
    yield put({
      type: DocumentsTypes.GET_IMAGE_LIST_FAILURE,
      error,
    });
  }
}

function* watchImageList() {
  yield takeEvery(DocumentsTypes.GET_IMAGE_LIST_REQUEST, getImageListRequest);
}
/***************************************************** */

function* getDataIntroRequest(action) {
  try {
    console.log('action.getDataIntroRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );

    if (rs.result.success) {
      yield put({
        type: DocumentsTypes.GET_DATA_INTRO_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: DocumentsTypes.GET_DATA_INTRO_FAILURE,
        error: rs.result,
      });
    }
    action?.callback(rs.result);
  } catch (error) {
    yield put({
      type: DocumentsTypes.GET_DATA_INTRO_FAILURE,
      error,
    });
  }
}

function* watchDataIntro() {
  yield takeEvery(DocumentsTypes.GET_DATA_INTRO_REQUEST, getDataIntroRequest);
}
/***************************************************** */

function* getPubDocFile(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );

    if (rs.result.success) {
      yield put({
        type: DocumentsTypes.PUBDOC_PREVIEW_FILE_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: DocumentsTypes.PUBDOC_PREVIEW_FILE_FAILURE,
        error: rs.result,
      });
    }
    action?.callback(rs.result);
  } catch (error) {
    yield put({
      type: DocumentsTypes.PUBDOC_PREVIEW_FILE_FAILURE,
      error,
    });
  }
}

function* watchGetPubDocFile() {
  yield takeEvery(DocumentsTypes.PUBDOC_PREVIEW_FILE_REQUEST, getPubDocFile);
}
/***************************************************** */

export default function* documentSaga() {
  yield all([
    watchDocuments(),
    watchImageList(),
    watchDataIntro(),
    watchGetPubDocFile(),
  ]);
}
