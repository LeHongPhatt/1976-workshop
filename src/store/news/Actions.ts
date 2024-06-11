/** @format */

import {IHomeActionPayload} from 'types';
// import {ROUTES} from 'utils';

export const NewsActions = {
  GET_BASE_ACTIONS: 'GET_BASE_NEWS_ACTIONS',
};

export const getBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: NewsActions.GET_BASE_ACTIONS,
  callback,
});
