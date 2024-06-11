/** @format */

import {axiosClient} from 'utils';
import {takeLatest, put, all} from 'redux-saga/effects';
import {IHomeActionPayload, INofifyState} from 'types';
import {HistoryOrderActions} from './Actions';
import {actionRequest, getDataSuccess} from './Reducer';
import {error} from 'store/notify';

function* onGetBaseActionsRequest(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    console.log('onGetBaseActionsRequest - History Order', action);
    const rs = yield axiosClient.get(`${action.payload.endPoint}`);
    console.log('onGetBaseActionsRequest - History Order', rs);
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

function* watchGetBaseActions() {
  yield takeLatest(
    HistoryOrderActions.GET_BASE_ACTIONS as any,
    onGetBaseActionsRequest,
  );
  yield takeLatest(
    HistoryOrderActions.GET_DETAIL_BASE_ACTIONS as any,
    onGetBaseActionsRequest,
  );
}

export default function* historyOrderSagas() {
  yield all([watchGetBaseActions()]);
}
