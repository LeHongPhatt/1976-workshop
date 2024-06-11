/**
 * @format
 * @description get data from redux store when perform the user authentication
 */

import {createSelector} from 'reselect';
import {IAccountState} from 'types';

const selector = (state: {account: IAccountState}) => state.account;

export const getError = createSelector(
  selector,
  ({error}: IAccountState) => error,
);

export const getLoading = createSelector(
  selector,
  ({loading}: IAccountState) => loading,
);

// export const getAuthUser = createSelector(selector, app => app?.user);

export const getAttrByKey = (k: keyof IAccountState) =>
  createSelector(selector, app => app[k]);
