/** @format */

import {IHomeActionPayload} from 'types';
// import {ROUTES} from 'utils';

export const SearchActions = {
  GET_BASE_ACTIONS: 'GET_BASE_SEARCH_ACTIONS',
  POST_BASE_ACTIONS: 'POST_BASE_SEARCH_ACTIONS',
  GET_TAG_ACTION: 'GET_TAG_ACTION',
  GET_SUGGEST_ACTION: 'GET_SUGGEST_ACTION',
};

export const getBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: payload?.type ?? SearchActions.GET_BASE_ACTIONS,
  callback,
});
