/** @format */

import {axiosClient} from 'utils';
import {takeLatest, put, all} from 'redux-saga/effects';
import {IHomeActionPayload, INofifyState} from 'types';
import {CartOrderActions} from './Actions';
import {actionRequest, getDataSuccess} from './Reducer';
import {error} from 'store/notify';

function* onGetBaseActionsRequest(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    console.log('onGetBaseActionsRequest-action', action);

    const rs = yield axiosClient.get(`${action.payload.endPoint}`, {
      params: action.payload.formData,
    });
    console.log('onGetBaseActionsRequest-res', rs);
    const dataKey = action?.payload?.dataKey;
    const payload = dataKey && rs?.data ? {[`${dataKey}`]: rs?.data} : {};
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
    CartOrderActions.GET_BASE_ACTIONS as any,
    onGetBaseActionsRequest,
  );
}

function* onPostBaseAction(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    console.log('POST CartOrder-action', JSON.stringify(action));
    const rs = yield axiosClient.post(
      `${action.payload.endPoint}`,
      JSON.stringify(action?.payload?.formData),
    );
    console.log('POST CartOrder-rs', rs);

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
  yield takeLatest(CartOrderActions.POST_BASE_ACTIONS as any, onPostBaseAction);
}
export default function* cartOrderSagas() {
  yield all([watchGetBaseActions(), watchPostBaseActions()]);
}
