import {IParamsRequest} from 'types';

export const GET_DOCUMENT_REQUEST: IParamsRequest = {
  action: 'V1Project',
  method: 'getAtt',
  data: [
    {
      start: 0,
      limit: 25,
      project: '', //id,
      docgroup: 'P',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_IMAGE_LIST_REQUEST: IParamsRequest = {
  action: 'V1Property',
  method: 'getAtt',
  type: 'rpc',
  tid: 0,
  data: [
    {
      project: 'ATC',
      pptgroup: '2PN',
    },
  ],
};

export const GET_DATA_INTRO: IParamsRequest = {
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
          value: 'GT',
          type: 'string',
        },
      ],
    },
  ],
  type: 'rpc',
  tid: 170,
};

export const PUBDOC_PREVIEW_FILE_ATTACH: IParamsRequest = {
  action: 'FrmFdFolder',
  method: 'pubDoc',
  data: [
    {
      id: '221018-1346041034391-2BD0',
    },
  ],
  type: 'rpc',
  tid: 1587180329,
};
