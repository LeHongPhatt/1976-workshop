/**
 * @format
 * @description get data from redux store when perform the user authentication
 */

import {createSelector} from 'reselect';
import {ICartOrderState} from 'types';

const selector = (state: {cartOrder: ICartOrderState}) => state.cartOrder;

export const getError = createSelector(
  selector,
  ({error}: ICartOrderState) => error,
);

export const getLoading = createSelector(
  selector,
  ({loading}: ICartOrderState) => loading,
);

// export const getAuthUser = createSelector(selector, app => app?.user);

export const getAttrByKey = (k: keyof ICartOrderState) =>
  createSelector(selector, app => app[k]);
