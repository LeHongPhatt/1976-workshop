/** @format */

import {IHomeActionPayload} from 'types';
// import {ROUTES} from 'utils';

export const UserActions = {
  GET_BASE_ACTIONS: 'GET_BASE_ACTIONS',
  POST_BASE_ACTIONS: 'POST_BASE_ACTIONS',
  LOGOUT: 'LOGOUT',
  PATCH_BASE_ACTIONS: 'PATCH_BASE_ACTIONS',
};

export const getBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: UserActions.GET_BASE_ACTIONS,
  callback,
});

export const postBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: payload?.type || UserActions.POST_BASE_ACTIONS,
  callback,
});
export const patchBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: payload?.type || UserActions.PATCH_BASE_ACTIONS,
  callback,
});

export const logoutRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: UserActions.LOGOUT,
  callback,
});
