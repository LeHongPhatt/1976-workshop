import {createTypes} from 'reduxsauce';
import {IParamsRequest} from 'types';

/**
 * @description define types of user's actions
 */
export const ScheduleTypes = createTypes(`
  GET_SCHEDULE_REQUEST
  GET_SCHEDULE_SUCCESS
  GET_SCHEDULE_FAILURE

  GET_DETAIL_SCHEDULE_REQUEST
  GET_DETAIL_SCHEDULE_SUCCESS
  GET_DETAIL_SCHEDULE_FAILURE

  UPDATE_STATE_SCHEDULE_REQUEST

  DELETE_SCHEDULE_REQUEST

  GET_TYPE_CALENDAR_REQUEST
  GET_TYPE_CALENDAR_SUCCESS

  ADD_SCHEDULE_REQUEST
  ADD_SCHEDULE_SUCCESS
  ADD_SCHEDULE_FAILURE

  UPDATE_SCHEDULE_REQUEST
  UPDATE_SCHEDULE_SUCCESS
  UPDATE_SCHEDULE_FAILURE

  GET_BOOKING_TIME_REQUEST
  GET_BOOKING_TIME_SUCCESS
  GET_BOOKING_TIME_FAILURE
`);

export const getScheduleRequest = (params: IParamsRequest) => ({
  params,
  type: ScheduleTypes.GET_SCHEDULE_REQUEST,
});

export const getOneScheduleRequest = (params: IParamsRequest) => ({
  params,
  type: ScheduleTypes.GET_DETAIL_SCHEDULE_REQUEST,
});

export const updateStateScheduleRequest = (
  params: IParamsRequest,
  callback: (res: any) => void,
) => ({
  params,
  callback,
  type: ScheduleTypes.UPDATE_STATE_SCHEDULE_REQUEST,
});

export const delScheduleRequest = (
  params: IParamsRequest,
  callback: (res: any) => void,
) => ({
  params,
  callback,
  type: ScheduleTypes.DELETE_SCHEDULE_REQUEST,
});

export const getTypeCalendarRequest = (params: IParamsRequest) => ({
  params,
  type: ScheduleTypes.GET_TYPE_CALENDAR_REQUEST,
});

export const addScheduleRequest = (
  params: IParamsRequest,
  callback?: (res: any) => void,
) => ({
  params,
  callback,
  type: ScheduleTypes.ADD_SCHEDULE_REQUEST,
});

export const updateScheduleRequest = (
  params: IParamsRequest,
  callback?: (res: any) => void,
) => ({
  params,
  callback,
  type: ScheduleTypes.UPDATE_SCHEDULE_REQUEST,
});

export const getBookingTimeRequest = (params: IParamsRequest) => ({
  params,
  type: ScheduleTypes.GET_BOOKING_TIME_REQUEST,
});
