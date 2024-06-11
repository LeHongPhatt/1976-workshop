import {createReducer} from 'reduxsauce';
import {IProjectDetailState} from 'types';
import {ProjectDetailTypes} from './Actions';

const INITIAL_STATE: IProjectDetailState = {
  loading: false,
  error: null,
  imagesList: [],
  detail: {},
  group: [],
  groupBDS: [],
  stackingPlan: [],
  timeLine: [],
  timeLineImage: [],
};

const getAppRequest = (state: IProjectDetailState) => ({
  ...state,
  error: null,
});

const getImageListSuccess = (state: IProjectDetailState, {payload}: any) => ({
  ...state,
  error: null,
  imagesList: payload,
});

const getAppFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const getDesProjectSuccess = (state: IProjectDetailState, {payload}: any) => ({
  ...state,
  error: null,
  detail: payload,
});

const getGroupProjectSuccess = (
  state: IProjectDetailState,
  {payload}: any,
) => ({
  ...state,
  error: null,
  group: payload,
});

const getGroupBDSSuccess = (state: IProjectDetailState, {payload}: any) => ({
  ...state,
  error: null,
  groupBDS: payload,
});

const getStackingPlanSuccess = (
  state: IProjectDetailState,
  {payload}: any,
) => ({
  ...state,
  error: null,
  stackingPlan: payload,
});

const getTimeLineSuccess = (state: IProjectDetailState, {payload}: any) => ({
  ...state,
  error: null,
  timeLine: payload,
});

const getImageTimeLineSuccess = (
  state: IProjectDetailState,
  {payload}: any,
) => ({
  ...state,
  error: null,
  timeLineImage: payload,
});

const HANDLERS = {
  [ProjectDetailTypes.GET_IMAGE_LIST_REQUEST]: getAppRequest,
  [ProjectDetailTypes.GET_IMAGE_LIST_SUCCESS]: getImageListSuccess,
  [ProjectDetailTypes.GET_IMAGE_LIST_FAILURE]: getAppFailure,
  [ProjectDetailTypes.GET_DESCRIPTION_PROJECT_REQUEST]: getAppRequest,
  [ProjectDetailTypes.GET_DESCRIPTION_PROJECT_SUCCESS]: getDesProjectSuccess,
  [ProjectDetailTypes.GET_DESCRIPTION_PROJECT_FAILURE]: getAppFailure,
  [ProjectDetailTypes.GET_GROUP_PROJECT_REQUEST]: getAppRequest,
  [ProjectDetailTypes.GET_GROUP_PROJECT_SUCCESS]: getGroupProjectSuccess,
  [ProjectDetailTypes.GET_GROUP_PROJECT_FAILURE]: getAppFailure,
  [ProjectDetailTypes.GET_GROUP_BDS_REQUEST]: getAppRequest,
  [ProjectDetailTypes.GET_GROUP_BDS_SUCCESS]: getGroupBDSSuccess,
  [ProjectDetailTypes.GET_GROUP_BDS_FAILURE]: getAppFailure,
  [ProjectDetailTypes.GET_STACKING_PLAN_REQUEST]: getAppRequest,
  [ProjectDetailTypes.GET_STACKING_PLAN_SUCCESS]: getStackingPlanSuccess,
  [ProjectDetailTypes.GET_STACKING_PLAN_FAILURE]: getAppFailure,
  [ProjectDetailTypes.GET_TIMELINE_PROJECT_REQUEST]: getAppRequest,
  [ProjectDetailTypes.GET_TIMELINE_PROJECT_SUCCESS]: getTimeLineSuccess,
  [ProjectDetailTypes.GET_TIMELINE_PROJECT_FAILURE]: getAppFailure,
  [ProjectDetailTypes.GET_IMAGE_TIMELINE_REQUEST]: getAppRequest,
  [ProjectDetailTypes.GET_IMAGE_TIMELINE_SUCCESS]: getImageTimeLineSuccess,
  [ProjectDetailTypes.GET_IMAGE_TIMELINE_FAILURE]: getAppFailure,
};

export const project = createReducer(INITIAL_STATE, HANDLERS);
