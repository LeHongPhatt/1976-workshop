/** @format */

import {IHomeActionPayload} from 'types';
// import {ROUTES} from 'utils';

export const CartActions = {
  GET_BASE_ACTIONS: 'GET_BASE_CART_ACTIONS',
  POST_BASE_ACTIONS: 'POST_BASE_CART_ACTIONS',
  PATCH_BASE_ACTIONS: 'PATCH_BASE_ACTIONS',
  DELETE_BASE_ACTIONS: 'DELETE_BASE_ACTIONS',
  POST_ORDER_ACTIONS: 'POST_ORDER_ACTIONS',
};

export const getBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: CartActions.GET_BASE_ACTIONS,
  callback,
});

export const postBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: CartActions.POST_BASE_ACTIONS,
  callback,
});

export const patchBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: CartActions.PATCH_BASE_ACTIONS,
  callback,
});

export const deleteBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: CartActions.DELETE_BASE_ACTIONS,
  callback,
});
