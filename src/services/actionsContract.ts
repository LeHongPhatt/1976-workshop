import {IParamsRequest} from 'types';

export const GET_CONTRACT_LIST: IParamsRequest = {
  action: 'V1Contract',
  method: 'get',
  data: [
    {
      start: 0, //skip,
      limit: 25, //limit,
      customer: '', //user?.prospect,
      searchString: '', //item,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_RESERVATION: IParamsRequest = {
  action: 'V1Book',
  method: 'getCus',
  data: [
    {
      start: 0, //skip,
      limit: 25, //limit,
      customer: '', //user?.prospect,
      searchString: '', //item,
      status: ['VBTT', 'HDMB', 'DBG'],
      anal_csd0: 'W',
    },
  ],
  type: 'rpc', //"rpc",
  tid: 1, //"1",
};

export const GET_PAYMENT_CONTRACT: IParamsRequest = {
  action: 'V1Contract',
  method: 'getInst',
  data: [
    {
      start: 0,
      limit: 25,
      contractid: '', //contractid,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_PAYMENT_HISTORIES: IParamsRequest = {
  action: 'V1Contract',
  method: 'getPymt',
  data: [
    {
      start: 0,
      limit: 25,
      contractid: '', //contractid,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_GIFT_DISCOUNT: IParamsRequest = {
  action: 'V1Contract',
  method: 'getPromo',
  data: [
    {
      start: 0,
      limit: 25,
      contractid: 'X0000000',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_ATTACH_FILE: IParamsRequest = {
  action: 'V1Contract',
  method: 'getAppAtt',
  data: [
    {
      contractid: 'C0000033',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_ALL_MEMBER: IParamsRequest = {
  action: 'V1Contract',
  method: 'getAllMem',
  data: [
    {
      contractid: 'X0000000',
    },
  ],
  type: 'rpc',
  tid: 1,
};
