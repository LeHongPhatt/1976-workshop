/** @format */

import {axiosClient} from 'utils';
import {takeLatest, put, all} from 'redux-saga/effects';
import {IHomeActionPayload, INofifyState} from 'types';
import {NotificationActions} from './Actions';
import {actionRequest, getDataSuccess} from './Reducer';
import {error} from 'store/notify';

function* onGetBaseActionsRequest(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    const rs = yield axiosClient.get(`${action.payload.endPoint}`);
    console.log('onGetBaseActionsRequest-NOTIFICATION', rs);
    const dataKey = action?.payload?.dataKey;
    const payload = dataKey ? {[`${dataKey}`]: rs?.data} : {};
    yield put(getDataSuccess(payload));
    if (action.callback) {
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
    NotificationActions.GET_BASE_ACTIONS as any,
    onGetBaseActionsRequest,
  );
}

function* onPutBaseAction(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    console.log('POST NOTIFICATION-action', JSON.stringify(action));
    const rs = yield axiosClient.put(
      `${action.payload.endPoint}`,
      JSON.stringify(action?.payload?.formData),
    );
    console.log('POST NOTIFICATION-rs', rs);

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

function* watchPutBaseActions() {
  yield takeLatest(
    NotificationActions.PUT_BASE_ACTIONS as any,
    onPutBaseAction,
  );
}

function* onPatchBaseAction(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    console.log('onPatchBaseAction-action', JSON.stringify(action));
    const rs = yield axiosClient.patch(
      `${action.payload.endPoint}`,
      JSON.stringify(action?.payload?.formData),
    );
    console.log('onPatchBaseAction-rs', JSON.stringify(rs.status));

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
  yield takeLatest(
    NotificationActions.PATCH_BASE_ACTIONS as any,
    onPatchBaseAction,
  );
}

function* onDeleteBaseAction(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    const rs = yield axiosClient.delete(`${action.payload.endPoint}`);
    console.log('res', rs);
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

function* watchDeleteBaseActions() {
  yield takeLatest(
    NotificationActions.DELETE_BASE_ACTIONS as any,
    onDeleteBaseAction,
  );
}
export default function* notificationSagas() {
  yield all([
    watchGetBaseActions(),
    watchPutBaseActions(),
    watchPatchBaseActions(),
    watchDeleteBaseActions(),
  ]);
}
