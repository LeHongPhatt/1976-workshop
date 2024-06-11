import {IParamsRequest} from 'types';

export const GET_NEWS: IParamsRequest = {
  action: 'V1News',
  method: 'getGrp',
  data: [
    {
      start: 0,
      limit: 25,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_NEWS_LIST: IParamsRequest = {
  action: 'V1News',
  method: 'get',
  data: [
    {
      start: 0,
      limit: 25,
      appcode: 'CC',
      searchString: '', // item
      newstype: '', // code
      sort: '', // DESC, ASC
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_EVENT_LIST = {
  action: 'V1Event',
  method: 'get',
  data: [
    {
      start: 0,
      limit: 1000,
      appcode: 'CC',
      customer: '', // user?.prospect
      searchString: '', // item
      eventstype: '', // code
      sort: '', // DESC, ASC
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_IMG_EVENT_DETAIL = {
  action: 'V1Event',
  method: 'getAtt',
  data: [
    {
      start: 0,
      limit: 25,
      eventscode: '', // id
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_IMG_POM_DETAIL = {
  action: 'V1Promo',
  method: 'getAtt',
  data: [
    {
      start: 0,
      limit: 25,
      promotioncode: '', // id
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_IMG_NEWS_DETAIL = {
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

export const UPDATE_POM_JOIN = {
  action: 'V1Promo',
  method: 'upd',
  data: [
    {
      promotioncode: '', // id,
      customer: '', // user?.prospect,
      cusname: '', // user?.name,
      attend: '', // value,
    },
  ],
  type: 'rpc',
  tid: 1587180329,
};

export const UPDATE_EVENT_JOIN = {
  action: 'V1Event',
  method: 'upd',
  data: [
    {
      eventscode: '', // id,
      customer: '', // user?.prospect,
      cusname: '', // user?.name,
      attend: '', // value,
    },
  ],
  type: 'rpc',
  tid: 1587180329,
};

export const GET_POM_LIST_RELATED = {
  action: 'V1Promo',
  method: 'get',
  data: [
    {
      start: 0,
      limit: 1000,
      appcode: 'CC',
      searchString: '',
      sort: 'DESC',
      customer: '', // user?.prospect
      promotiontype: '',
      project: '',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_EVENT_LIST_RELATED = {
  action: 'V1Event',
  method: 'get',
  data: [
    {
      start: 0,
      limit: 1000,
      appcode: 'CC',
      sort: 'DESC',
      searchString: '',
      customer: '', // user?.prospect
      eventstype: '', // eventstype
      project: '', // project
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_NEWS_LIST_RELATED = {
  action: 'V1News',
  method: 'get',
  data: [
    {
      start: 0,
      limit: 25,
      appcode: 'CC',
      searchString: '',
      newstype: '', // codenew
      project: '', // project
      sort: 'DESC',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_POM_LIST = {
  action: 'V1Promo',
  method: 'get',
  data: [
    {
      start: 0,
      limit: 1000,
      appcode: 'CC',
      customer: '', // user?.prospect
      searchString: '', // item
      promotiontype: '', // code
      sort: '', // DESC, ASC
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const NEWS_PIN_ACTION = {
  action: 'V1News',
  method: 'pinNew',
  data: [
    {
      newsid: '230214-1014244405744-86B9',
      ispin: 'Y',
    },
  ],
  type: 'rpc',
  tid: 12,
};
