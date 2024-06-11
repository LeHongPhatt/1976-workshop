import {IParamsRequest} from 'types';

export const GET_IMAGE_PROJECT: IParamsRequest = {
  action: 'V1Project',
  method: 'getAtt',
  data: [
    {
      start: 0,
      limit: 25,
      project: '', //id,
      docgroup: 'GALLERY',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_DES_PROJECT: IParamsRequest = {
  action: 'V1Project',
  method: 'getDet',
  data: [
    {
      project: '', // id,
      appcode: 'CC',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_GROUP_PROJECT: IParamsRequest = {
  action: 'V1Property',
  method: 'getPPG',
  type: 'rpc',
  tid: 0,
  data: [
    {
      project: 'ATC',
    },
  ],
};

export const GET_GROUP_BDS: IParamsRequest = {
  action: 'V1Property',
  method: 'getGrp',
  data: [
    {
      start: 0,
      limit: 25,
      project: '', // id,
      level0: '', //item,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_STACKING_PLAN: IParamsRequest = {
  action: 'V1Property',
  method: 'getO',
  data: [
    {
      start: 0, // skip,
      limit: 25, // limit,
      project: '', // project,
      block: '',
      wing: '',
      floor: '',
      propertynum: '',
      level0: '', // level0,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_TIMELINE_PROJECT: IParamsRequest = {
  action: 'V1Project',
  method: 'getProgress',
  data: [
    {
      start: 0,
      limit: 25,
      project: '', // 'mã dự án',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_IMG_LIST = {
  action: 'V1News',
  method: 'getAtt',
  data: [
    {
      start: 0,
      limit: 25,
      newsid: '', // id
    },
  ],
  type: 'rpc',
  tid: 1,
};
