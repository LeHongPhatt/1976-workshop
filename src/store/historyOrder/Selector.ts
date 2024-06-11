/**
 * @format
 * @description get data from redux store when perform the user authentication
 */

import {createSelector} from 'reselect';
import {IHistoryOrderState} from 'types';

const selector = (state: {home: IHistoryOrderState}) => state.home;

export const getError = createSelector(
  selector,
  ({error}: IHistoryOrderState) => error,
);

export const getLoading = createSelector(
  selector,
  ({loading}: IHistoryOrderState) => loading,
);

// export const getAuthUser = createSelector(selector, app => app?.user);

export const getAttrByKey = (k: keyof IHistoryOrderState) =>
  createSelector(selector, app => app[k]);
