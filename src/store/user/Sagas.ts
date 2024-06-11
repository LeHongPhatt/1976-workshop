import {NavigationService, Routes} from 'navigation';
/** @format */

import {API_ENDPOINT, axiosClient} from 'utils';
import {takeLatest, put, all} from 'redux-saga/effects';
import {IHomeActionPayload, INofifyState} from 'types';
import {UserActions} from './Actions';
import {actionRequest, getDataSuccess, reset} from './Reducer';
import {error, success} from 'store/notify';

function* onGetBaseActionsRequest(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    console.log('GET User-action', JSON.stringify(action));
    const rs = yield axiosClient.get(`${action.payload.endPoint}`);
    console.log('GET User-rs', rs);

    if (rs.code === 200) {
      const dataKey = action?.payload?.dataKey;
      const payload = dataKey ? {[`${dataKey}`]: rs?.data} : {};
      yield put(getDataSuccess(payload));
      action?.callback?.(rs);
    }
  } catch (e: any) {
    yield put(
      error({
        message: 'some_thing_wrong',
        options: {useI18n: true},
      } as INofifyState),
    );
    yield put(getDataSuccess({}));
    return action?.callback?.({...e});
  }
}

function* watchGetBaseActions() {
  yield takeLatest(
    UserActions.GET_BASE_ACTIONS as any,
    onGetBaseActionsRequest,
  );
}

function* onPostBaseAction(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    console.log('POST USER-action', action);
    const rs = yield axiosClient.post(
      `${action.payload.endPoint}`,
      action?.payload?.formData,
      action.payload.headers,
    );
    console.log('POST USER-action', rs);
    const dataKey = action?.payload?.dataKey;
    const payload = dataKey && rs?.data ? {[`${dataKey}`]: rs?.data} : {};
    yield put(getDataSuccess(payload));
    if (action?.callback) {
      action?.callback?.(rs);
    }
  } catch (e: any) {
    yield put(
      error({
        message: 'some_thing_wrong',
        options: {useI18n: true},
      } as INofifyState),
    );
    yield put(getDataSuccess({}));
    if (action?.callback) {
      action?.callback?.({success: false, ...e});
    }
  }
}

function* watchPostBaseActions() {
  yield takeLatest(UserActions.POST_BASE_ACTIONS as any, onPostBaseAction);
}

function* onLogoutAction(action: IHomeActionPayload) {
  try {
    yield put(reset());
    yield axiosClient.post(`${API_ENDPOINT.AUTH.LOGOUT}`);
    action?.payload?.redirect && NavigationService.reset(Routes.Login);
    action?.callback?.();
  } catch (e: any) {
    action?.callback?.();
  }
}

function* watchLogout() {
  yield takeLatest(UserActions.LOGOUT as any, onLogoutAction);
}

function* onPatchBaseAction(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    console.log('PATCH USER-action', action);
    const rs = yield axiosClient.patch(
      `${action.payload.endPoint}`,
      action?.payload?.formData,
      action.payload.headers,
    );

    const dataKey = action?.payload?.dataKey;
    const payload = dataKey && rs?.data ? {[`${dataKey}`]: rs?.data} : {};
    yield put(getDataSuccess(payload));
    if (action?.callback) {
      action?.callback?.(rs);
    }
  } catch (e: any) {
    yield put(
      error({
        message: 'some_thing_wrong',
        options: {useI18n: true},
      } as INofifyState),
    );
    yield put(getDataSuccess({}));
    if (action?.callback) {
      action?.callback?.({success: false, ...e});
    }
  }
}

function* watchPatchBaseActions() {
  yield takeLatest(UserActions.PATCH_BASE_ACTIONS as any, onPatchBaseAction);
}
export default function* userSagas() {
  yield all([
    watchGetBaseActions(),
    watchPostBaseActions(),
    watchLogout(),
    watchPatchBaseActions(),
  ]);
}
