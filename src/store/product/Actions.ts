/** @format */

import {IHomeActionPayload} from 'types';
// import {ROUTES} from 'utils';

export const ProductActions = {
  GET_BASE_ACTIONS: 'GET_BASE_PRODUCT_ACTIONS',
  GET_LIST_CATEGORY: 'GET_LIST_CATEGORY',
  GET_PRODUCT_BY_CATEGORY: 'GET_PRODUCT_BY_CATEGORY',
  GET_PRODUCT_DETAIL: 'GET_PRODUCT_DETAIL',
  GET_VARIANT_PRODUCT_DETAIL: 'GET_VARIANT_PRODUCT_DETAIL',
};

export const getBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: payload?.type ?? ProductActions.GET_BASE_ACTIONS,
  callback,
});
