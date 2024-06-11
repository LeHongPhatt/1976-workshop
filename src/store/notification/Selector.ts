/**
 * @format
 * @description get data from redux store when perform the user authentication
 */

import {createSelector} from 'reselect';
import {INotificationState} from 'types';

const selector = (state: {notification: INotificationState}) =>
  state.notification;

export const getError = createSelector(
  selector,
  ({error}: INotificationState) => error,
);

export const getLoading = createSelector(
  selector,
  ({loading}: INotificationState) => loading,
);

// export const getAuthUser = createSelector(selector, app => app?.user);

export const getAttrByKey = (k: keyof INotificationState) =>
  createSelector(selector, app => app[k]);
