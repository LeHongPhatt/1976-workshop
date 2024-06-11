import {IParamsRequest} from 'types';
// import {BaseSetting} from 'utils/constants';

export const GET_SLIDER: IParamsRequest = {
  action: 'V1Project',
  method: 'getSlide',
  data: [
    {
      start: 0,
      limit: 25,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_SLIDER_TC: IParamsRequest = {
  action: 'FrmFdDocument',
  method: 'get',
  data: [
    {
      fixedFilters: [
        {
          field: 'applyto',
          op: 'eq',
          value: 'CC',
        },
      ],
      filters: [
        {
          field: 'doctype',
          op: 'like',
          value: 'TC',
          type: 'string',
        },
      ],
    },
  ],
  type: 'rpc',
  tid: 170,
};

export const CONTACT_US = {
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

export const CONTACT_PCT = {
  action: 'V1Contact',
  method: 'getPCT',
  data: [
    {
      start: 0,
      limit: 25,
      customer: '', // user?.prospect
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_PROJECT = {
  action: 'V1Project',
  method: 'get',
  data: [
    {
      start: 0,
      limit: 25,
      appcode: 'CC',
    },
  ],
  type: 'rpc',
  tid: 1,
};
