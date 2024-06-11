import {all, takeEvery} from 'redux-saga/effects';
import * as actionTypestvc from 'store/actions/actionTypes';
import * as apitvc from 'api';
import {
  ProjectGroupModel,
  ImagesProjectModel,
  ProjectModel,
  SelectFilterModel,
  BlockModel,
  WingModel,
  FloorFilterModel,
} from 'store/models';

function* onLoadGroupProject(action) {
  try {
    const response = yield apitvc.fetchGroupProject(
      JSON.stringify(action.params),
    );
    if (response.success === true) {
      const listPrGroupProject = response.data.map?.(item => {
        return new ProjectGroupModel(item);
      });
      action.callback?.(listPrGroupProject);
    }
  } catch (error) {
    action.callback?.(error.response ?? error.message);
  }
}

function* watchGroupProjectLoad() {
  yield takeEvery(actionTypestvc.LOAD_GROUP_PROJECT, onLoadGroupProject);
}

function* onLoadGroupProjectDetail(action) {
  try {
    const response = yield apitvc.fetchProjectDetail(
      JSON.stringify(action.params),
    );
    action.callback?.(response);
  } catch (error) {
    action.callback?.(error.response ?? error.message);
  }
}

function* watchoadGroupProjectDetail() {
  yield takeEvery(actionTypestvc.LOAD_DETAIL_PROJECT, onLoadGroupProjectDetail);
}

function* onLoadImagesProject(action) {
  try {
    const response = yield apitvc.fetchImagesProject(
      JSON.stringify(action.params),
    );
    console.log(`Vào load list images project: ${JSON.stringify(response)}`);
    if (response.success === true) {
      const listImages = response.data.map?.(item => {
        return new ImagesProjectModel(item);
      });
      // yield put({
      //   type: actionTypestvc.SAVE_IMAGE_PROJECT,
      //   listImages,
      // });
      action.callback?.(listImages);
    }
  } catch (error) {
    console.log('LoadProjectList', error);
    action.callback?.(error.response ?? error.message);
  }
}

function* watchLoadImagesProject() {
  yield takeEvery(actionTypestvc.GET_IMAGE_PROJECT, onLoadImagesProject);
}

function* onLoadProject(action) {
  try {
    const response = yield apitvc.fetchProject(JSON.stringify(action.params));
    console.log(`Vào load list group project: ${JSON.stringify(response)}`);
    if (response.success === true) {
      const listProject = response.data.map?.(item => {
        console.log(`Vào load item: ${JSON.stringify(item)}`);
        return new SelectFilterModel(item);
      });
      action.callback?.(listProject);
    }
  } catch (error) {
    console.log('LoadProjectList', error);
    action.callback?.(error.response ?? error.message);
  }
}

function* watchProjectLoad() {
  yield takeEvery(actionTypestvc.LOAD_PROJECT, onLoadProject);
}

function* onLoadFilterProject(action) {
  try {
    const response = yield apitvc.fetchProject(JSON.stringify(action.params));
    console.log(`Vào load list group project: ${JSON.stringify(response)}`);
    if (response.success === true) {
      const listProject = response.data.map?.(item => {
        console.log(`Vào load item: ${JSON.stringify(item)}`);
        return new SelectFilterModel(item);
      });
      action.callback?.(listProject);
    }
  } catch (error) {
    console.log('LoadProjectList', error);
    action.callback?.(error.response ?? error.message);
  }
}

function* watchFilterProjectLoad() {
  yield takeEvery(actionTypestvc.LOAD_FILTER_PROJECT, onLoadFilterProject);
}

function* onLoadBlockProject(action) {
  try {
    const response = yield apitvc.fetchBlockProject(
      JSON.stringify(action.params),
    );
    console.log(`Vào load list group project: ${JSON.stringify(response)}`);
    if (response.success === true) {
      const listProject = response.data.map?.(item => {
        console.log(`Vào load item: ${JSON.stringify(item)}`);
        return new BlockModel(item);
      });
      action.callback?.(listProject);
    }
  } catch (error) {
    console.log('LoadProjectList', error);
    action.callback?.(error.response ?? error.message);
  }
}

function* watchBlockProjectLoad() {
  yield takeEvery(actionTypestvc.LOAD_LIST_BLOCK_PROJECT, onLoadBlockProject);
}

function* onLoadCanhProject(action) {
  try {
    const response = yield apitvc.fetchCanhProject(
      JSON.stringify(action.params),
    );
    if (response.success === true) {
      const listProject = response.data.map?.(item => {
        console.log(`Vào load item: ${JSON.stringify(item)}`);
        return new WingModel(item);
      });
      action.callback?.(listProject);
    }
  } catch (error) {
    console.log('LoadProjectList', error);
    action.callback?.(error.response ?? error.message);
  }
}

function* watchCanhProjectLoad() {
  yield takeEvery(actionTypestvc.LOAD_LIST_CANH_PROJECT, onLoadCanhProject);
}

function* onLoadTangProject(action) {
  try {
    const response = yield apitvc.fetchTangProject(
      JSON.stringify(action.params),
    );
    if (response.success === true) {
      const listProject = response.data.map?.(item => {
        console.log(`Vào load item: ${JSON.stringify(item)}`);
        return new FloorFilterModel(item);
      });
      action.callback?.(listProject);
    }
  } catch (error) {
    console.log('LoadProjectList', error);
    action.callback?.(error.response ?? error.message);
  }
}

function* watchTangProjectLoad() {
  yield takeEvery(actionTypestvc.LOAD_LIST_TANG_PROJECT, onLoadTangProject);
}

function* onLoadStackingPlanProject(action) {
  try {
    const response = yield apitvc.fetchStackingPlanProject(
      JSON.stringify(action.params),
    );
    if (response.success === true) {
      // const listProject = response.data.map?.(item => {
      //   return new StackingPlanModel(item);
      // });
      action.callback?.(response);
    }
  } catch (error) {
    console.log('LoadProjectList', error);
    action.callback?.(error.response ?? error.message);
  }
}

function* watchStackingPlanProjectLoad() {
  yield takeEvery(
    actionTypestvc.LOAD_LIST_STACKING_PLAN,
    onLoadStackingPlanProject,
  );
}

function* onLoadGroupBDSProject(action) {
  try {
    const response = yield apitvc.fetchGroupProject(
      JSON.stringify(action.params),
    );
    if (response.success === true) {
      // const listPrGroupProject = response.data.map?.(item => {
      //   return new GroupBdsModel(item);
      // });
      // yield put({
      //   type: actionTypestvc.SAVE_GROUP_PROJECT,
      //   listPrGroupProject,
      // });
      action.callback?.(response);
    }
  } catch (error) {
    action.callback?.(error.response ?? error.message);
  }
}

function* watchLoadGroupBDSProject() {
  yield takeEvery(actionTypestvc.LOAD_GROUP_BDS_PROJECT, onLoadGroupBDSProject);
}

function* onLoadListSearchProject(action) {
  try {
    const response = yield apitvc.fetchLoadListSearchProject(
      JSON.stringify(action.params),
    );
    if (response.success === true) {
      const listProject = response.data.map?.(item => {
        return new ProjectModel(item);
      });
      action.callback?.(listProject);
    }
  } catch (error) {
    console.log('LoadProjectList', error);
    action.callback?.(error.response ?? error.message);
  }
}

function* watchLoadListSearchProject() {
  yield takeEvery(
    actionTypestvc.LOAD_LIST_PROJECT_SEARCH,
    onLoadListSearchProject,
  );
}

function* onLoadColorTypeProject(action) {
  try {
    const response = yield apitvc.fetchColorType(JSON.stringify(action.params));
    if (response.success === true) {
      action.callback?.(response);
    }
  } catch (error) {
    action.callback?.(error.response ?? error.message);
  }
}

function* watchonLoadColorTypeProject() {
  yield takeEvery(actionTypestvc.GET_COLOR_TYPE, onLoadColorTypeProject);
}

export default function* projectSagas() {
  yield all([
    watchGroupProjectLoad(),
    watchLoadImagesProject(),
    watchProjectLoad(),
    watchFilterProjectLoad(),
    watchBlockProjectLoad(),
    watchCanhProjectLoad(),
    watchTangProjectLoad(),
    watchStackingPlanProjectLoad(),
    watchLoadGroupBDSProject(),
    watchoadGroupProjectDetail(),
    watchLoadListSearchProject(),
    watchonLoadColorTypeProject(),
  ]);
}
