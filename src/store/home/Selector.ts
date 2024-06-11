/**
 * @format
 * @description get data from redux store when perform the user authentication
 */

import {createSelector} from 'reselect';
import {IHomeState} from 'types';

const selector = (state: {home: IHomeState}) => state.home;

export const getError = createSelector(
  selector,
  ({error}: IHomeState) => error,
);

export const getLoading = createSelector(
  selector,
  ({loading}: IHomeState) => loading,
);

// export const getAuthUser = createSelector(selector, app => app?.user);

export const getAttrByKey = (k: keyof IHomeState) =>
  createSelector(selector, app => app[k]);
