/**
 * @format
 * @description get data from redux store when perform the user authentication
 */

import {createSelector} from 'reselect';
import {ISearchState} from 'types';

const selector = (state: {search: ISearchState}) => state.search;

export const getError = createSelector(
  selector,
  ({error}: ISearchState) => error,
);

export const getLoading = createSelector(
  selector,
  ({loading}: ISearchState) => loading,
);

// export const getAuthUser = createSelector(selector, app => app?.user);

export const getAttrByKey = (k: keyof ISearchState) =>
  createSelector(selector, app => app[k]);
