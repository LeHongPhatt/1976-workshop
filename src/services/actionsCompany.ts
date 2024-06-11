import {IParamsRequest} from 'types';

export const GET_CURRENT_COMPANY: IParamsRequest = {
  action: 'V1Contact',
  method: 'getInf',
  data: [{}],
  type: 'rpc',
  tid: 186,
};

export const GET_TOTURIALS: IParamsRequest = {
  action: 'V1News',
  method: 'getQA',
  data: [{}],
  type: 'rpc',
  tid: 12,
};

export const CONTACT_PARAMS: IParamsRequest = {
  action: 'V1Contact',
  method: 'get',
  data: [
    {
      start: 0,
      limit: 25,
    },
  ],
  type: 'rpc',
  tid: 1,
};
