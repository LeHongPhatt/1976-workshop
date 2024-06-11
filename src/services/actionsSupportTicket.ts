import {IFileUpload, IParamsRequest} from 'types';
import {genCodeByStr} from 'utils/libs';
// import {BaseSetting} from 'utils/constants';

export const GET_DATA_TYPE: IParamsRequest = {
  action: 'V1Ticket',
  method: 'getCls',
  data: [
    {
      start: 0,
      limit: 25,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_DATA_GROUP: IParamsRequest = {
  action: 'V1Ticket',
  method: 'getCat',
  data: [
    {
      start: 0,
      limit: 25,
      ref0: '', // code
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_CAT_DETAIL: IParamsRequest = {
  action: 'V1Ticket',
  method: 'getCatDet',
  data: [
    {
      start: 0,
      limit: 25,
      ref0: '', // code
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_DATA_COMBO: IParamsRequest = {
  action: 'FrmFdWorkLocation',
  method: 'getCombo',
  data: [
    {
      status: 'W',
      formid: 'TCK',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const CREATE_SUPPORT_TICKET: IParamsRequest = {
  action: 'V1Ticket',
  method: 'add',
  data: [
    {
      status: 'W',
      title: '', // titleticket,
      ticketclass: '', //selecttypesupport,
      ticketcategory: '', //selectgroupsupport,
      ticketdetail: '', //selectdetailsupport,
      ticketdesc: '', //contentticket,
      requestdate:
        new Date().getFullYear().toString() +
        '-' +
        (new Date().getMonth() + 1).toString() +
        '-' +
        new Date().getDate().toString(),
      customer: '', // user?.prospect,
      tic: '',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const UPLOAD_FILE: IParamsRequest = {
  action: 'FrmFdDocument',
  method: 'addLink',
  data: [
    {
      linkto: 'TCK',
      referencekey1: 68, // '[ticketid]',
      referencekey2: '',
      documentcode: '', //'YYYYMMDD-HHmmssdoc....',
      autonum: '', // 'YYYYMMDD-HHmmsslin....',
      filename: '',
      subject: '',
      category: '', // '.pdf',
      data: '', // 'XXXXXXXXXXXXX',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_LIST_SUPPORT_TICKET: IParamsRequest = {
  action: 'V1Ticket',
  method: 'get',
  data: [
    {
      start: 0,
      limit: 25,
      customer: '', // user?.prospect,
      searchString: '', //item,
      dateFrom: null, //dateFrom,
      dateTo: null, //dateTo,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const CLOSE_SUPPORT_TICKET: IParamsRequest = {
  action: 'V1Ticket',
  method: 'close',
  data: [
    {
      ticketid: '', // item,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const CANCEL_SUPPORT_TICKET: IParamsRequest = {
  action: 'V1Ticket',
  method: 'cancel',
  data: [
    {
      ticketid: '', // 2200201
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const ADD_COMMENT: IParamsRequest = {
  action: 'V1Ticket',
  method: 'addCmt',
  data: [
    {
      ticketid: '', // idticket,
      contents: '', // contentadd,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_ATTACH_FILE: IParamsRequest = {
  action: 'FrmFdDocument',
  method: 'getLink',
  data: [
    {
      start: 0,
      limit: 25,
      linkto: 'TCK',
      referencekey1: '', //id,
      referencekey2: '',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const DEL_ATTACH_FILE: IParamsRequest = {
  action: 'FrmFdDocument',
  method: 'delLink',
  data: [
    {
      autonum: '', // autonum
      linkto: 'TCK',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_HISTORY_TICKET: IParamsRequest = {
  action: 'V1Ticket',
  method: 'getHis',
  data: [
    {
      start: 0, //,
      limit: 25, //
      ticketid: '', //  '2100487',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const DEL_COMMENT: IParamsRequest = {
  action: 'FrmCsLog',
  method: 'del',
  data: [
    {
      logid: '', // item,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const FILE_UPLOAD: IFileUpload = {
  documentcode: genCodeByStr('doc'), //genCodeByStr('doc'),
  autonum: genCodeByStr('lin'), //genCodeByStr('lin'),
  filename: '', //item?.name,
  subject: '', //item?.name,
  category: '', //getFileExtension(item?.name),
  data: '', //ImagesBase,
  linkto: 'TCK', //'TCK',
  referencekey1: '', //ticketId,
  referencekey2: '', //'',
};

export const ATTACH_FILE: IParamsRequest = {
  action: 'FrmFdDocument',
  method: 'attach',
  data: [
    {
      file: {
        filename: 'LIB.xlsx',
        filetype: '.xlsx',
        data: '',
      },
      linkto: 'EMP',
      referencekey1: 'VTH',
      referencekey2: '',
      referencekey3: '',
      referencekey4: '',
      referencekey5: '',
    },
  ],
  type: 'rpc',
  tid: 76,
};

export const ADD_LINK_ATTACHMENT: IParamsRequest = {
  action: 'FrmFdDocument',
  method: 'addLink',
  data: [
    {
      autonum: '', // '221117-0956597287365-08D2',
      documentcode: '', // '221117-0956597070878-E16D',
      filename: '', // 'LIB.xlsx',
      subject: '', // 'LIB.xlsx',
      category: '', // '.xlsx',
      referencekey1: '', // 'VTH',
      linkto: 'TCK',
      referencekey2: '',
      referencekey3: '',
      referencekey4: '',
      referencekey5: '',
      createddate: null,
      id: '',
    },
  ],
  type: 'rpc',
  tid: 77,
};

export const ADD_LINK_BY_URL: IParamsRequest = {
  action: 'FrmFdDocument',
  method: 'addLink',
  data: [
    {
      autonum: '', //  '',
      documentcode: '', //  '',
      subject: '', //  'test link2',
      filename: '', //  'test link2',
      linkto: '', //  'EMP',
      referencekey1: '', //  '110000000034',
      url: '', //  'https://vnexpress.net/the-thao/world-cup-2022/binh-luan',
    },
  ],
  type: 'rpc',
  tid: 5,
};
