/**
 * @description get data from redux store when perform the member actions
 */
import {createSelector} from 'reselect';
import {IScheduleState} from 'types';

const selector = (state: {schedule: IScheduleState}) => state.schedule;

export const getError = createSelector(
  selector,
  ({error}: IScheduleState) => error,
);

export const getLoading = createSelector(
  selector,
  ({loading}: IScheduleState) => loading,
);

export const getListSchedule = createSelector(
  selector,
  ({listSchedule}: IScheduleState) => listSchedule || [],
);

export const getOneSchedule = createSelector(
  selector,
  ({oneSchedule}: IScheduleState) => oneSchedule || [],
);

export const getListTypeCalendar = createSelector(
  selector,
  ({typeCalendar}: IScheduleState) => typeCalendar || [],
);

export const getBookingTimeList = createSelector(
  selector,
  ({bookingTimeList}: IScheduleState) => bookingTimeList || [],
);
