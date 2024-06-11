import {IParamsRequest} from 'types';

export const GET_STACKING_DETAIL: IParamsRequest = {
  action: 'V1Property',
  method: 'getByEmp',
  data: [
    {
      start: 0,
      limit: 25,
      project: '', //  projectma,
      block: '', //block,
      wing: '', //wing,
      floor: '', //pptfloor,
      propertynum: '', //id,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_IMAGES_STACKING_DETAIL: IParamsRequest = {
  action: 'V1Property',
  method: 'getAtt',
  data: [
    {
      start: 0,
      limit: 25,
      project: '', // projectma,
      pptgroup: '', // pptgroupite,
      property: '', // propertyitem,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_LIST_PROJECT: IParamsRequest = {
  action: 'V1Project',
  method: 'get',
  data: [
    {
      start: 0,
      limit: 250,
      appcode: 'CC',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_LIST_BLOCK: IParamsRequest = {
  action: 'V1Block',
  method: 'get',
  data: [
    {
      start: 0,
      limit: 25,
      project: '', // project,
      appcode: 'CC',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_LIST_WING: IParamsRequest = {
  action: 'V1Property',
  method: 'getWing',
  data: [
    {
      start: 0,
      limit: 25,
      project: '', // project == '' ? selectedItemProject : project,
      block: '', // block,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_LIST_FLOOR: IParamsRequest = {
  action: 'V1Property',
  method: 'getFloor',
  data: [
    {
      start: 0,
      limit: 25,
      project: '', // project
      block: '', // block
      wing: '', // wing
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_COLOR_DATA: IParamsRequest = {
  action: 'FrmPmProperty',
  method: 'getTotalStatus',
  data: [
    {
      project: '', //project,
      block: '', // block,
      wing: '', // wing,
      floor: '', // item,
      psd0: 'N',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_DATA_STACKING_PLAN: IParamsRequest = {
  action: 'V1Property',
  method: 'getByEmp',
  data: [
    {
      start: 0,
      limit: 250,
      project: '', // project == '' ? selectedItemProject : project,
      block: '', // block == '' ? selectedItemBlockProject : block,
      wing: '', // wing == '' ? selectedItemCanhProject : '', // wing,
      floor: '', // item,
    },
  ],
  type: 'rpc',
  tid: 1,
};
