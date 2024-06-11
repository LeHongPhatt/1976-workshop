import {IHomeActionPayload} from 'types';

export const HomeActions = {
  GET_BASE_ACTIONS: 'GET_BASE_HOME_ACTIONS',
  GET_LIST_BANNER_ACTIONS: 'GET_LIST_BANNER_ACTIONS',
};

export const getBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: payload.type ?? HomeActions.GET_BASE_ACTIONS,
  callback,
});
