import {IHomeActionPayload} from 'types';

export const HistoryOrderActions = {
  GET_BASE_ACTIONS: 'GET_BASE_HOME_ACTIONS',
  GET_DETAIL_BASE_ACTIONS: 'GET_DETAIL_BASE_ACTIONS',
};

export const getBaseActionsRequest = (
  payload: IHomeActionPayload['payload'],
  callback?: IHomeActionPayload['callback'],
) => ({
  payload,
  type: payload.type ?? HistoryOrderActions.GET_BASE_ACTIONS,
  callback,
});
