/**
 * @format
 * @description get data from redux store when perform the user authentication
 */

import {createSelector} from 'reselect';
import {IProductState} from 'types';

const selector = (state: {product: IProductState}) => state.product;

export const getError = createSelector(
  selector,
  ({error}: IProductState) => error,
);

export const getLoading = createSelector(
  selector,
  ({loading}: IProductState) => loading,
);

// export const getAuthUser = createSelector(selector, app => app?.user);

export const getAttrByKey = (k: keyof IProductState) =>
  createSelector(selector, app => app[k]);
