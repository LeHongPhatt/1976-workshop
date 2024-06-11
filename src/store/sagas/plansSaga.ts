import {all, put, takeEvery} from 'redux-saga/effects';
import {PlansTypes} from 'store/plans';
import {IResponse} from 'types';
import axiosClient from 'utils/axios';
import {GETWAY} from 'utils/constants';

function* getPlanDetailRequest(action) {
  try {
    // console.log('action.getPlanDetailRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.getPlanDetailRequest', rs);

    if (rs.result.success) {
      yield put({
        type: PlansTypes.GET_PLAN_DETAIL_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: PlansTypes.GET_PLAN_DETAIL_FAILURE,
        error: rs.result,
      });
    }
    action?.callback(rs.result);
  } catch (error) {
    yield put({
      type: PlansTypes.GET_PLAN_DETAIL_FAILURE,
      error,
    });
  }
}

function* watchPlanDetail() {
  yield takeEvery(PlansTypes.GET_PLAN_DETAIL_REQUEST, getPlanDetailRequest);
}
/***************************************************** */

function* getImageListRequest(action) {
  try {
    // console.log('action.getImageListRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.getImageListRequest', rs);

    if (rs.result.success) {
      yield put({
        type: PlansTypes.GET_IMAGES_DETAIL_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: PlansTypes.GET_IMAGES_DETAIL_FAILURE,
        error: rs.result,
      });
    }
    action?.callback(rs.result);
  } catch (error) {
    yield put({
      type: PlansTypes.GET_IMAGES_DETAIL_FAILURE,
      error,
    });
  }
}

function* watchGetImageList() {
  yield takeEvery(PlansTypes.GET_IMAGES_DETAIL_REQUEST, getImageListRequest);
}
/***************************************************** */

function* getListProjectRequest(action) {
  try {
    // console.log('action.getListProjectRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.getListProjectRequest', rs);

    if (rs.result.success) {
      yield put({
        type: PlansTypes.GET_LIST_PROJECT_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: PlansTypes.GET_LIST_PROJECT_FAILURE,
        error: rs.result,
      });
    }
    action?.callback(rs.result);
  } catch (error) {
    yield put({
      type: PlansTypes.GET_LIST_PROJECT_FAILURE,
      error,
    });
  }
}

function* watchGetListProject() {
  yield takeEvery(PlansTypes.GET_LIST_PROJECT_REQUEST, getListProjectRequest);
}
/***************************************************** */

function* getListBlockRequest(action) {
  try {
    // console.log('action.getListBlockRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.getListBlockRequest', rs);

    if (rs.result.success) {
      yield put({
        type: PlansTypes.GET_LIST_BLOCK_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: PlansTypes.GET_LIST_BLOCK_FAILURE,
        error: rs.result,
      });
    }
    action?.callback(rs.result);
  } catch (error) {
    yield put({
      type: PlansTypes.GET_LIST_BLOCK_FAILURE,
      error,
    });
  }
}

function* watchGetListBlock() {
  yield takeEvery(PlansTypes.GET_LIST_BLOCK_REQUEST, getListBlockRequest);
}
/***************************************************** */

function* getListWingRequest(action) {
  try {
    // console.log('action.getListWingRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.getListWingRequest', rs);

    if (rs.result.success) {
      yield put({
        type: PlansTypes.GET_LIST_WING_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: PlansTypes.GET_LIST_WING_FAILURE,
        error: rs.result,
      });
    }
    action?.callback(rs.result);
  } catch (error) {
    yield put({
      type: PlansTypes.GET_LIST_WING_FAILURE,
      error,
    });
  }
}

function* watchGetListWing() {
  yield takeEvery(PlansTypes.GET_LIST_WING_REQUEST, getListWingRequest);
}
/***************************************************** */

function* getListFloorRequest(action) {
  try {
    // console.log('action.getListFloorRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.getListFloorRequest', rs);

    if (rs.result.success) {
      yield put({
        type: PlansTypes.GET_LIST_FLOOR_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: PlansTypes.GET_LIST_FLOOR_FAILURE,
        error: rs.result,
      });
    }
    action?.callback(rs.result);
  } catch (error) {
    yield put({
      type: PlansTypes.GET_LIST_FLOOR_FAILURE,
      error,
    });
  }
}

function* watchGetListFloor() {
  yield takeEvery(PlansTypes.GET_LIST_FLOOR_REQUEST, getListFloorRequest);
}
/***************************************************** */

function* getColorDataRequest(action) {
  try {
    // console.log('action.getColorDataRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.getColorDataRequest', rs);

    if (rs.result.success) {
      yield put({
        type: PlansTypes.GET_COLOR_DATA_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: PlansTypes.GET_COLOR_DATA_FAILURE,
        error: rs.result,
      });
    }
    action?.callback(rs.result);
  } catch (error) {
    yield put({
      type: PlansTypes.GET_COLOR_DATA_FAILURE,
      error,
    });
  }
}

function* watchColorData() {
  yield takeEvery(PlansTypes.GET_COLOR_DATA_REQUEST, getColorDataRequest);
}
/***************************************************** */

function* getStackingDataRequest(action) {
  try {
    // console.log('action.getStackingDataRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.getStackingDataRequest', rs);

    if (rs.result.success) {
      yield put({
        type: PlansTypes.GET_DATA_STACKING_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: PlansTypes.GET_DATA_STACKING_FAILURE,
        error: rs.result,
      });
    }
    action?.callback(rs.result);
  } catch (error) {
    yield put({
      type: PlansTypes.GET_DATA_STACKING_FAILURE,
      error,
    });
  }
}

function* watchStackingData() {
  yield takeEvery(PlansTypes.GET_DATA_STACKING_REQUEST, getStackingDataRequest);
}
/***************************************************** */

export default function* plansSaga() {
  yield all([
    watchPlanDetail(),
    watchGetImageList(),
    watchGetListProject(),
    watchGetListBlock(),
    watchGetListWing(),
    watchGetListFloor(),
    watchColorData(),
    watchStackingData(),
  ]);
}
