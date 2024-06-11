/** @format */

import {axiosClient} from 'utils';
import {takeLatest, put, all, delay} from 'redux-saga/effects';
import {IHomeActionPayload, INofifyState} from 'types';
import {CartActions} from './Actions';
import {actionRequest, getDataSuccess} from './Reducer';
import {error} from 'store/notify';

function* onGetBaseActionsRequest(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    const rs = yield axiosClient.get(`${action.payload.endPoint}`);
    console.log('onGetBaseActionsRequest-ACCOUNT', rs);
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
    CartActions.GET_BASE_ACTIONS as any,
    onGetBaseActionsRequest,
  );
}

function* onPostBaseAction(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    yield delay(450);
    console.log('POST ACCOUNT-action', JSON.stringify(action));
    const rs = yield axiosClient.post(
      `${action.payload.endPoint}`,
      JSON.stringify(action?.payload?.formData),
    );
    console.log('POST ACCOUNT-rs', rs);

    const dataKey = action?.payload?.dataKey;
    const payload =
      dataKey && rs?.data?.result ? {[`${dataKey}`]: rs?.data?.result} : {};
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
  yield takeLatest(CartActions.POST_BASE_ACTIONS as any, onPostBaseAction);
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
  yield takeLatest(CartActions.PATCH_BASE_ACTIONS as any, onPatchBaseAction);
}

function* onDeleteBaseAction(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    console.log('onDeleteBaseAction-action', action);
    const rs = yield axiosClient.delete(`${action.payload.endPoint}`, {
      data: action.payload.formData,
    });
    console.log('onDeleteBaseAction-rs', rs.status);

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
  yield takeLatest(CartActions.DELETE_BASE_ACTIONS as any, onDeleteBaseAction);
}

export default function* cartSagas() {
  yield all([
    watchGetBaseActions(),
    watchPostBaseActions(),
    watchPatchBaseActions(),
    watchDeleteBaseActions(),
  ]);
}
