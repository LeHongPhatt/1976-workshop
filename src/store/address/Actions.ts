/** @format */

import {IHomeActionPayload} from 'types';
// import {ROUTES} from 'utils';

export const AddressActions = {
  GET_BASE_ACTIONS: 'GET_BASE_ADDRESS_ACTIONS',
  POST_BASE_ACTIONS: 'POST_BASE_ADDRESS_ACTIONS',
  PATCH_BASE_ACTIONS: 'PATCH_BASE_ADDRESS_ACTIONS',
  DELETE_BASE_ACTIONS: 'DELETE_BASE_ADDRESS_ACTIONS',
};

export const getBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: AddressActions.GET_BASE_ACTIONS,
  callback,
});

export const postBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: payload?.type || AddressActions.POST_BASE_ACTIONS,
  callback,
});

export const patchBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: payload?.type || AddressActions.PATCH_BASE_ACTIONS,
  callback,
});

export const deleteBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: payload?.type || AddressActions.DELETE_BASE_ACTIONS,
  callback,
});
