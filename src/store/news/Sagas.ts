/** @format */

import {axiosClient} from 'utils';
import {takeLatest, put, all} from 'redux-saga/effects';
import {IHomeActionPayload, INofifyState} from 'types';
import {NewsActions} from './Actions';
import {actionRequest, getDataSuccess} from './Reducer';
import {error} from 'store/notify';

function* onGetBaseActionsRequest(action: IHomeActionPayload) {
  try {
    yield put(actionRequest());
    const rs = yield axiosClient.get(`${action.payload.endPoint}`);
    console.log('onGetBaseActionsRequest - NEWS', rs);
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
    NewsActions.GET_BASE_ACTIONS as any,
    onGetBaseActionsRequest,
  );
}
export default function* newsSagas() {
  yield all([watchGetBaseActions()]);
}
