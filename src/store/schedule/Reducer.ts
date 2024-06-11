import {createReducer} from 'reduxsauce';
import {IScheduleState} from 'types';
import {ScheduleTypes} from './Actions';

const INITIAL_STATE: IScheduleState = {
  loading: false,
  error: null,
  listSchedule: [],
  oneSchedule: null,
  typeCalendar: [],
  bookingTimeList: [],
};

const appRequest = (state: IScheduleState) => ({
  ...state,
  error: null,
  loading: true,
});

const appFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
  loading: false,
});

const getScheduleSuccess = (state: IScheduleState, {payload}: any) => ({
  ...state,
  error: null,
  loading: false,
  listSchedule: payload,
});

const getTypeCalendarSuccess = (state: IScheduleState, {payload}: any) => ({
  ...state,
  error: null,
  loading: false,
  typeCalendar: payload,
});

const addScheduleSuccess = (state: IScheduleState, {payload}: any) => {
  const listSchedule = state.listSchedule.unshift(payload);
  return {
    ...state,
    error: null,
    loading: false,
    listSchedule,
  };
};

const getOneScheduleSuccess = (state: IScheduleState, {payload}: any) => ({
  ...state,
  error: null,
  loading: false,
  oneSchedule: payload,
});

const getBookingTimeSuccess = (state: IScheduleState, {payload}: any) => ({
  ...state,
  error: null,
  loading: false,
  bookingTimeList: payload,
});

const HANDLERS = {
  [ScheduleTypes.GET_SCHEDULE_FAILURE]: appFailure,
  [ScheduleTypes.GET_SCHEDULE_REQUEST]: appRequest,
  [ScheduleTypes.GET_SCHEDULE_SUCCESS]: getScheduleSuccess,
  [ScheduleTypes.GET_TYPE_CALENDAR_SUCCESS]: getTypeCalendarSuccess,
  [ScheduleTypes.ADD_SCHEDULE_FAILURE]: appFailure,
  [ScheduleTypes.ADD_SCHEDULE_SUCCESS]: addScheduleSuccess,
  [ScheduleTypes.GET_DETAIL_SCHEDULE_REQUEST]: appRequest,
  [ScheduleTypes.GET_DETAIL_SCHEDULE_FAILURE]: appFailure,
  [ScheduleTypes.GET_DETAIL_SCHEDULE_SUCCESS]: getOneScheduleSuccess,
  [ScheduleTypes.GET_BOOKING_TIME_REQUEST]: appRequest,
  [ScheduleTypes.GET_BOOKING_TIME_FAILURE]: appFailure,
  [ScheduleTypes.GET_BOOKING_TIME_SUCCESS]: getBookingTimeSuccess,
};

export const schedule = createReducer(INITIAL_STATE, HANDLERS);
