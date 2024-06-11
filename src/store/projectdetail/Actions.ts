import {createTypes} from 'reduxsauce';
import {IParamsRequest} from 'types';

/**
 * @description define types of contract's actions
 */
export const ProjectDetailTypes = createTypes(`
  GET_IMAGE_LIST_REQUEST
  GET_IMAGE_LIST_SUCCESS
  GET_IMAGE_LIST_FAILURE

  GET_DESCRIPTION_PROJECT_REQUEST
  GET_DESCRIPTION_PROJECT_SUCCESS
  GET_DESCRIPTION_PROJECT_FAILURE

  GET_GROUP_PROJECT_REQUEST
  GET_GROUP_PROJECT_SUCCESS
  GET_GROUP_PROJECT_FAILURE

  GET_GROUP_BDS_REQUEST
  GET_GROUP_BDS_SUCCESS
  GET_GROUP_BDS_FAILURE

  GET_STACKING_PLAN_REQUEST
  GET_STACKING_PLAN_SUCCESS
  GET_STACKING_PLAN_FAILURE

  GET_TIMELINE_PROJECT_REQUEST
  GET_TIMELINE_PROJECT_SUCCESS
  GET_TIMELINE_PROJECT_FAILURE

  GET_IMAGE_TIMELINE_REQUEST
  GET_IMAGE_TIMELINE_SUCCESS
  GET_IMAGE_TIMELINE_FAILURE
`);

export const getImageListRequest = (params: IParamsRequest) => ({
  params,
  type: ProjectDetailTypes.GET_IMAGE_LIST_REQUEST,
});

export const getDesProjectRequest = (params: IParamsRequest) => ({
  params,
  type: ProjectDetailTypes.GET_DESCRIPTION_PROJECT_REQUEST,
});

export const getGroupProjectRequest = (params: IParamsRequest) => ({
  params,
  type: ProjectDetailTypes.GET_GROUP_PROJECT_REQUEST,
});

export const getGroupBDSRequest = (params: IParamsRequest) => ({
  params,
  type: ProjectDetailTypes.GET_GROUP_BDS_REQUEST,
});

export const getStackingPlanRequest = (params: IParamsRequest) => ({
  params,
  type: ProjectDetailTypes.GET_STACKING_PLAN_REQUEST,
});

export const getTimelineProjectRequest = (params: IParamsRequest) => ({
  params,
  type: ProjectDetailTypes.GET_TIMELINE_PROJECT_REQUEST,
});

export const getImageTimeLineRequest = (params: IParamsRequest) => ({
  params,
  type: ProjectDetailTypes.GET_IMAGE_TIMELINE_REQUEST,
});
