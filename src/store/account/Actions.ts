/** @format */

import {IHomeActionPayload} from 'types';
// import {ROUTES} from 'utils';

export const AccountActions = {
  GET_BASE_ACTIONS: 'GET_BASE_ACCOUNT_ACTIONS',
  POST_BASE_ACTIONS: 'POST_BASE_ACCOUNT_ACTIONS',
  PATH_BASE_ACTIONS: 'PATH_BASE_ACCOUNT_ACTIONS',
};

export const getBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: AccountActions.GET_BASE_ACTIONS,
  callback,
});

export const postBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: payload?.type || AccountActions.POST_BASE_ACTIONS,
  callback,
});

export const pathBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: AccountActions.PATH_BASE_ACTIONS,
  callback,
});
