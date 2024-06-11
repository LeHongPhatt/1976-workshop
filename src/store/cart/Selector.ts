/**
 * @format
 * @description get data from redux store when perform the user authentication
 */

import {createSelector} from 'reselect';
import {ICartState} from 'types';

const selector = (state: {cart: ICartState}) => state.cart;

export const getError = createSelector(
  selector,
  ({error}: ICartState) => error,
);

export const getLoading = createSelector(
  selector,
  ({loading}: ICartState) => loading,
);

// export const getAuthUser = createSelector(selector, app => app?.user);

export const getAttrByKey = (k: keyof ICartState) =>
  createSelector(selector, app => app[k]);
