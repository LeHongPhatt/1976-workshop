import {IFormGetScheduleParams, IParamsRequest} from 'types';
import {formatDBYMDHMS} from 'utils/libs';

export const GET_SCHEDULE: IParamsRequest = {
  action: 'V1Calendar',
  method: 'get',
  data: [
    {
      start: '', // skip,
      limit: '', // limit,
      customer: '', // user?.prospect,
      searchString: '', // '',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const UPDATE_STATE_SCHEDULE: IParamsRequest = {
  action: 'FrmCrActivity',
  method: 'upd',
  data: [
    {
      activityid: '', // item,
      cusconfirm: '', // statusup,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const DEL_SCHEDULE: IParamsRequest = {
  action: 'FrmCrActivity',
  method: 'del',
  data: [
    {
      activityid: '', // item,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_TYPE_CALENDAR: IParamsRequest = {
  action: 'V1Calendar',
  method: 'getCallType',
  data: [
    {
      start: 0,
      limit: 25,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const ADD_SCHEDULE: IParamsRequest = {
  action: 'FrmCrActivity',
  method: 'add',
  data: [
    {
      activityid: '',
      cusconfirm: 'C',
      actual: 'N',
      activitytype: '', // selectedItemDocType,
      description: '', // noidungtext,
      startdate: '', // ngaytext + ' ' + giobdtext,
      enddate: '', // ngaykt,
      place: '', // diatiemtext,
      outcome: '', // ghichutexttext,
      prospect: '', // user?.prospect,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const UPDATE_SCHEDULE: IParamsRequest = {
  action: 'FrmCrActivity',
  method: 'upd',
  data: [
    {
      activityid: '', // id,
      activitytype: '', // selectedItemDocType,
      description: '', // noidungtext,
      startdate: '', // ngaytext + ' ' + giobdtext,
      enddate: '', // ngaykt,
      place: '', // diatiemtext,
      outcome: '', // ghichutexttext,
      prospect: '', // user?.prospect,
      employee: '', // selectedItemstaff,
      cusconfirm: '', // cusconfirm,
      empconfirm: '', // empconfirm,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_DETAIL: IParamsRequest = {
  action: 'V1Calendar',
  method: 'getDet',
  data: [
    {
      activityid: '', // id
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_BOOK_TIME: IParamsRequest = {
  action: 'V1Calendar',
  method: 'getBookTime',
  data: [
    {
      bookdate: 'yyyy-MM-dd HH:mm',
      activitytype: 'ZZZ',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const FORM_SCHEDULE: IFormGetScheduleParams = {
  start: 0, // skip,
  limit: 25, // limit,
  customer: '',
  searchString: '',
  fromdate: formatDBYMDHMS(new Date()),
};
