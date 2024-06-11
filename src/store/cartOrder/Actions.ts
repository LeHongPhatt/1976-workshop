/** @format */

import {IHomeActionPayload} from 'types';
// import {ROUTES} from 'utils';

export const CartOrderActions = {
  GET_BASE_ACTIONS: 'GET_BASE_CART_ORDER_ACTIONS',
  POST_BASE_ACTIONS: 'POST_BASE_CART_ORDER_ACTIONS',
};

export const getBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: CartOrderActions.GET_BASE_ACTIONS,
  callback,
});

export const postBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: payload?.type || CartOrderActions.POST_BASE_ACTIONS,
  callback,
});
