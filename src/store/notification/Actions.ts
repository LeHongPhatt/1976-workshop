/** @format */

import {IHomeActionPayload} from 'types';
// import {ROUTES} from 'utils';

export const NotificationActions = {
  GET_BASE_ACTIONS: 'GET_BASE_NOTIFICATION_ACTIONS',
  PUT_BASE_ACTIONS: 'POST_BASE_NOTIFICATION_ACTIONS',
  PATCH_BASE_ACTIONS: 'PATH_BASE_NOTIFICATION_ACTIONS',
  DELETE_BASE_ACTIONS: 'DELETE_BASE_NOTIFICATION_ACTIONS',
};

export const getBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: NotificationActions.GET_BASE_ACTIONS,
  callback,
});

export const putBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: payload?.type || NotificationActions.PUT_BASE_ACTIONS,
  callback,
});

export const patchBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: NotificationActions.PATCH_BASE_ACTIONS,
  callback,
});

export const deleteBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: NotificationActions.DELETE_BASE_ACTIONS,
  callback,
});
