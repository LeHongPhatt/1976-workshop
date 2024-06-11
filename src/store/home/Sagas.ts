/** @format */

import {axiosClient} from 'utils';
import {takeLatest, put, all} from 'redux-saga/effects';
import {IHomeActionPayload, INofifyState} from 'types';
import {HomeActions} from './Actions';
import {actionRequest, getDataSuccess} from './Reducer';
import {error} from 'store/notify';

function* onGetBaseActionsRequest(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    const rs = yield axiosClient.get(`${action.payload.endPoint}`, {
      params: action.payload.formData,
    });
    console.log('onGetBaseActionsRequest - Home', rs);
    const dataKey = action?.payload?.dataKey;
    const payload = dataKey ? {[`${dataKey}`]: rs?.data} : {};
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

function* watchGetBaseActions() {
  yield takeLatest(
    HomeActions.GET_BASE_ACTIONS as any,
    onGetBaseActionsRequest,
  );
  yield takeLatest(
    HomeActions.GET_LIST_BANNER_ACTIONS as any,
    onGetBaseActionsRequest,
  );
}

export default function* homeSagas() {
  yield all([watchGetBaseActions()]);
}
