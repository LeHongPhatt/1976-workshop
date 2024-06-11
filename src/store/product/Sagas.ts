/** @format */

import {axiosClient} from 'utils';
import {put, all, takeLatest} from 'redux-saga/effects';
import {IHomeActionPayload, INofifyState} from 'types';
import {ProductActions} from './Actions';
import {actionRequest, getDataSuccess} from './Reducer';
import {error} from 'store/notify';

function* onGetBaseActionsRequest(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    console.log('onGetBaseActionsRequest --PRODUCT', action);
    const rs = yield axiosClient.get(`${action.payload.endPoint}`, {
      params: action.payload.formData,
    });
    console.log('onGetBaseActionsRequest --PRODUCT', rs);
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
    ProductActions.GET_BASE_ACTIONS as any,
    onGetBaseActionsRequest,
  );
  yield takeLatest(
    ProductActions.GET_LIST_CATEGORY as any,
    onGetBaseActionsRequest,
  );
  yield takeLatest(
    ProductActions.GET_PRODUCT_BY_CATEGORY as any,
    onGetBaseActionsRequest,
  );
  yield takeLatest(
    ProductActions.GET_PRODUCT_DETAIL as any,
    onGetBaseActionsRequest,
  );
  yield takeLatest(
    ProductActions.GET_VARIANT_PRODUCT_DETAIL as any,
    onGetBaseActionsRequest,
  );
}
export default function* productSagas() {
  yield all([watchGetBaseActions()]);
}
