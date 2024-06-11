/**
 * @format
 * @description get data from redux store when perform the user authentication
 */

import {createSelector} from 'reselect';
import {IAddressState} from 'types';

const selector = (state: {address: IAddressState}) => state.address;

export const getError = createSelector(
  selector,
  ({error}: IAddressState) => error,
);

export const getLoading = createSelector(
  selector,
  ({loading}: IAddressState) => loading,
);

// export const getAuthUser = createSelector(selector, app => app?.user);

export const getAttrByKey = (k: keyof IAddressState) =>
  createSelector(selector, app => app[k]);
