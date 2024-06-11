import {all, put, takeEvery} from 'redux-saga/effects';
import {ProjectDetailTypes} from 'store/projectdetail';
import {IResponse} from 'types';
import axiosClient from 'utils/axios';
import {GETWAY} from 'utils/constants';

function* getImageListRequest(action) {
  try {
    // console.log('action.getImageListRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.getImageListRequest', rs.result.data);

    if (rs.result.success) {
      yield put({
        type: ProjectDetailTypes.GET_IMAGE_LIST_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ProjectDetailTypes.GET_IMAGE_LIST_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: ProjectDetailTypes.GET_IMAGE_LIST_FAILURE,
      error,
    });
  }
}

function* watchGetImageList() {
  yield takeEvery(
    ProjectDetailTypes.GET_IMAGE_LIST_REQUEST,
    getImageListRequest,
  );
}
/***************************************************** */

function* getDesProjectRequest(action) {
  try {
    // console.log('action.getDesProjectRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.getDesProjectRequest', rs);

    if (rs.result.success) {
      yield put({
        type: ProjectDetailTypes.GET_DESCRIPTION_PROJECT_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ProjectDetailTypes.GET_DESCRIPTION_PROJECT_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: ProjectDetailTypes.GET_DESCRIPTION_PROJECT_FAILURE,
      error,
    });
  }
}

function* watchDesProject() {
  yield takeEvery(
    ProjectDetailTypes.GET_DESCRIPTION_PROJECT_REQUEST,
    getDesProjectRequest,
  );
}
/***************************************************** */

function* getGroupProjectRequest(action) {
  try {
    console.log('action.getGroupProjectRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.getGroupProjectRequest', rs.result.data);

    if (rs.result.success) {
      yield put({
        type: ProjectDetailTypes.GET_GROUP_PROJECT_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ProjectDetailTypes.GET_GROUP_PROJECT_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: ProjectDetailTypes.GET_GROUP_PROJECT_FAILURE,
      error,
    });
  }
}

function* watchGroupProject() {
  yield takeEvery(
    ProjectDetailTypes.GET_GROUP_PROJECT_REQUEST,
    getGroupProjectRequest,
  );
}
/***************************************************** */

function* getGroupBDSRequest(action) {
  try {
    console.log('action.getGroupBDSRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.getGroupBDSRequest.rs.result.data', rs.result.data);

    if (rs.result.success) {
      yield put({
        type: ProjectDetailTypes.GET_GROUP_BDS_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ProjectDetailTypes.GET_GROUP_BDS_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: ProjectDetailTypes.GET_GROUP_BDS_FAILURE,
      error,
    });
  }
}

function* watchGroupBDS() {
  yield takeEvery(ProjectDetailTypes.GET_GROUP_BDS_REQUEST, getGroupBDSRequest);
}
/***************************************************** */

function* getStackingPlanRequest(action) {
  try {
    // console.log('action.getStackingPlanRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.getStackingPlanRequest', rs);

    if (rs.result.success) {
      yield put({
        type: ProjectDetailTypes.GET_STACKING_PLAN_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ProjectDetailTypes.GET_STACKING_PLAN_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: ProjectDetailTypes.GET_STACKING_PLAN_FAILURE,
      error,
    });
  }
}

function* watchStackingPlan() {
  yield takeEvery(
    ProjectDetailTypes.GET_STACKING_PLAN_REQUEST,
    getStackingPlanRequest,
  );
}
/***************************************************** */

function* getTimeLineRequest(action) {
  try {
    // console.log('action.getTimeLineRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.getTimeLineRequest', rs.result);

    if (rs.result.success) {
      yield put({
        type: ProjectDetailTypes.GET_TIMELINE_PROJECT_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ProjectDetailTypes.GET_TIMELINE_PROJECT_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: ProjectDetailTypes.GET_TIMELINE_PROJECT_FAILURE,
      error,
    });
  }
}

function* watchTimeLine() {
  yield takeEvery(
    ProjectDetailTypes.GET_TIMELINE_PROJECT_REQUEST,
    getTimeLineRequest,
  );
}
/***************************************************** */

function* getTimeLineImageRequest(action) {
  try {
    console.log('action.getTimeLineImageRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.getTimeLineImageRequest', rs.result.data);

    if (rs.result.success) {
      yield put({
        type: ProjectDetailTypes.GET_IMAGE_TIMELINE_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ProjectDetailTypes.GET_IMAGE_TIMELINE_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: ProjectDetailTypes.GET_IMAGE_TIMELINE_FAILURE,
      error,
    });
  }
}

function* watchGetTimeLineImage() {
  yield takeEvery(
    ProjectDetailTypes.GET_IMAGE_TIMELINE_REQUEST,
    getTimeLineImageRequest,
  );
}
/***************************************************** */

export default function* projectdetailSagas() {
  yield all([
    watchGetImageList(),
    watchDesProject(),
    watchGroupProject(),
    watchGroupBDS(),
    watchStackingPlan(),
    watchTimeLine(),
    watchGetTimeLineImage(),
  ]);
}
