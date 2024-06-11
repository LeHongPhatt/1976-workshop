import {createReducer} from 'reduxsauce';
import {IPlanState} from 'types';
import {PlansTypes} from './Actions';

const INITIAL_STATE: IPlanState = {
  loading: false,
  error: null,
  planDetail: [],
  imageList: [],
  listProject: [],
  listBlock: [],
  listWing: [],
  listFloor: [],
  colorData: [],
  stackingPlan: [],
};

const getPlanDetailRequest = (state: IPlanState) => ({
  ...state,
  error: null,
  loading: true,
});

const getPlanDetailSuccess = (state: IPlanState, {payload}: any) => ({
  ...state,
  error: null,
  planDetail: payload,
  loading: false,
});

const getPlanDetailFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
  loading: false,
});

const getImageListRequest = (state: IPlanState) => ({
  ...state,
  error: null,
});

const getImageListSuccess = (state: IPlanState, {payload}: any) => ({
  ...state,
  error: null,
  imageList: payload,
});

const getImageListFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const getListProjectRequest = (state: IPlanState) => ({
  ...state,
  error: null,
});

const getListProjectSuccess = (state: IPlanState, {payload}: any) => ({
  ...state,
  error: null,
  listProject: payload,
});

const getListProjectFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const getListBlockRequest = (state: IPlanState) => ({
  ...state,
  error: null,
});

const getListBlockSuccess = (state: IPlanState, {payload}: any) => ({
  ...state,
  error: null,
  listBlock: payload,
});

const getListBlockFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const getListWingRequest = (state: IPlanState) => ({
  ...state,
  error: null,
});

const getListWingSuccess = (state: IPlanState, {payload}: any) => ({
  ...state,
  error: null,
  listWing: payload,
});

const getListWingFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const getListFloorRequest = (state: IPlanState) => ({
  ...state,
  error: null,
});

const getListFloorSuccess = (state: IPlanState, {payload}: any) => ({
  ...state,
  error: null,
  listFloor: payload,
});

const getListFloorFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const getColorDataRequest = (state: IPlanState) => ({
  ...state,
  error: null,
});

const getColorDataSuccess = (state: IPlanState, {payload}: any) => ({
  ...state,
  error: null,
  colorData: payload,
});

const getColorDataFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const getDataStackingRequest = (state: IPlanState) => ({
  ...state,
  error: null,
});

const getDataStackingSuccess = (state: IPlanState, {payload}: any) => ({
  ...state,
  error: null,
  stackingPlan: payload,
});

const getDataStackingFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const HANDLERS = {
  [PlansTypes.GET_PLAN_DETAIL_REQUEST]: getPlanDetailRequest,
  [PlansTypes.GET_PLAN_DETAIL_SUCCESS]: getPlanDetailSuccess,
  [PlansTypes.GET_PLAN_DETAIL_FAILURE]: getPlanDetailFailure,
  [PlansTypes.GET_IMAGES_DETAIL_REQUEST]: getImageListRequest,
  [PlansTypes.GET_IMAGES_DETAIL_SUCCESS]: getImageListSuccess,
  [PlansTypes.GET_IMAGES_DETAIL_FAILURE]: getImageListFailure,
  [PlansTypes.GET_LIST_PROJECT_REQUEST]: getListProjectRequest,
  [PlansTypes.GET_LIST_PROJECT_SUCCESS]: getListProjectSuccess,
  [PlansTypes.GET_LIST_PROJECT_FAILURE]: getListProjectFailure,
  [PlansTypes.GET_LIST_BLOCK_REQUEST]: getListBlockRequest,
  [PlansTypes.GET_LIST_BLOCK_SUCCESS]: getListBlockSuccess,
  [PlansTypes.GET_LIST_BLOCK_FAILURE]: getListBlockFailure,
  [PlansTypes.GET_LIST_WING_REQUEST]: getListWingRequest,
  [PlansTypes.GET_LIST_WING_SUCCESS]: getListWingSuccess,
  [PlansTypes.GET_LIST_WING_FAILURE]: getListWingFailure,
  [PlansTypes.GET_LIST_FLOOR_REQUEST]: getListFloorRequest,
  [PlansTypes.GET_LIST_FLOOR_SUCCESS]: getListFloorSuccess,
  [PlansTypes.GET_LIST_FLOOR_FAILURE]: getListFloorFailure,
  [PlansTypes.GET_COLOR_DATA_REQUEST]: getColorDataRequest,
  [PlansTypes.GET_COLOR_DATA_SUCCESS]: getColorDataSuccess,
  [PlansTypes.GET_COLOR_DATA_FAILURE]: getColorDataFailure,
  [PlansTypes.GET_DATA_STACKING_REQUEST]: getDataStackingRequest,
  [PlansTypes.GET_DATA_STACKING_SUCCESS]: getDataStackingSuccess,
  [PlansTypes.GET_DATA_STACKING_FAILURE]: getDataStackingFailure,
};

export const plans = createReducer(INITIAL_STATE, HANDLERS);
