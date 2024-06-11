import {createTypes} from 'reduxsauce';
import {IParamsRequest} from 'types';

/**
 * @description define types of contract's actions
 */
export const PlansTypes = createTypes(`
  GET_PLAN_DETAIL_REQUEST
  GET_PLAN_DETAIL_SUCCESS
  GET_PLAN_DETAIL_FAILURE
 
  GET_IMAGES_DETAIL_REQUEST
  GET_IMAGES_DETAIL_SUCCESS
  GET_IMAGES_DETAIL_FAILURE
 
  GET_LIST_PROJECT_REQUEST
  GET_LIST_PROJECT_SUCCESS
  GET_LIST_PROJECT_FAILURE
 
  GET_LIST_BLOCK_REQUEST
  GET_LIST_BLOCK_SUCCESS
  GET_LIST_BLOCK_FAILURE
 
  GET_LIST_WING_REQUEST
  GET_LIST_WING_SUCCESS
  GET_LIST_WING_FAILURE
 
  GET_LIST_FLOOR_REQUEST
  GET_LIST_FLOOR_SUCCESS
  GET_LIST_FLOOR_FAILURE
 
  GET_COLOR_DATA_REQUEST
  GET_COLOR_DATA_SUCCESS
  GET_COLOR_DATA_FAILURE
 
  GET_DATA_STACKING_REQUEST
  GET_DATA_STACKING_SUCCESS
  GET_DATA_STACKING_FAILURE
`);

export const getPlanDetailRequest = (
  params: IParamsRequest,
  callback?: void,
) => ({
  params,
  type: PlansTypes.GET_PLAN_DETAIL_REQUEST,
  callback,
});

export const getImagesDetailRequest = (params: IParamsRequest) => ({
  params,
  type: PlansTypes.GET_IMAGES_DETAIL_REQUEST,
});

export const getListProjectRequest = (
  params: IParamsRequest,
  callback?: void,
) => ({
  params,
  type: PlansTypes.GET_LIST_PROJECT_REQUEST,
  callback,
});

export const getListBlockRequest = (
  params: IParamsRequest,
  callback?: void,
) => ({
  params,
  type: PlansTypes.GET_LIST_BLOCK_REQUEST,
  callback,
});

export const getListWingRequest = (
  params: IParamsRequest,
  callback?: void,
) => ({
  params,
  type: PlansTypes.GET_LIST_WING_REQUEST,
  callback,
});

export const getListFloorRequest = (
  params: IParamsRequest,
  callback?: void,
) => ({
  params,
  type: PlansTypes.GET_LIST_FLOOR_REQUEST,
  callback,
});

export const getColorDataRequest = (
  params: IParamsRequest,
  callback?: void,
) => ({
  params,
  type: PlansTypes.GET_COLOR_DATA_REQUEST,
  callback,
});

export const getDataStackingRequest = (
  params: IParamsRequest,
  callback?: void,
) => ({
  params,
  type: PlansTypes.GET_DATA_STACKING_REQUEST,
  callback,
});
