import {createTypes} from 'reduxsauce';
import {IDataSuportItem, IParamsRequest} from 'types';

export const TicketTypes = createTypes(`
  GET_DATA_TYPE_LIST_REQUEST
  GET_DATA_TYPE_LIST_SUCCESS
  GET_DATA_TYPE_LIST_FAILURE

  GET_DATA_GROUP_LIST_REQUEST
  GET_DATA_GROUP_LIST_SUCCESS
  GET_DATA_GROUP_LIST_FAILURE

  GET_CAT_DETAIL_LIST_REQUEST
  GET_CAT_DETAIL_LIST_SUCCESS
  GET_CAT_DETAIL_LIST_FAILURE

  GET_DATA_COMBO_LIST_REQUEST
  GET_DATA_COMBO_LIST_SUCCESS
  GET_DATA_COMBO_LIST_FAILURE

  CREATE_SUPPORT_TICKET_REQUEST
  CREATE_SUPPORT_TICKET_SUCCESS
  CREATE_SUPPORT_TICKET_FAILURE

  UPLOAD_FILE_REQUEST
  UPLOAD_FILE_SUCCESS
  UPLOAD_FILE_FAILURE

  GET_SUPPORT_TICKET_LIST_REQUEST
  GET_SUPPORT_TICKET_LIST_SUCCESS
  GET_SUPPORT_TICKET_LIST_FAILURE

  CLOSE_SUPPORT_TICKET_REQUEST
  CLOSE_SUPPORT_TICKET_SUCCESS
  CLOSE_SUPPORT_TICKET_FAILURE

  CANCEL_SUPPORT_TICKET_REQUEST
  CANCEL_SUPPORT_TICKET_SUCCESS
  CANCEL_SUPPORT_TICKET_FAILURE

  SELECTED_SUPPORT_TICKET
  TOGGLE_MODAL_COMMENT

  ADD_COMMENT_REQUEST
  ADD_COMMENT_SUCCESS
  ADD_COMMENT_FAILURE

  GET_ATTACH_FILE_REQUEST
  GET_ATTACH_FILE_SUCCESS
  GET_ATTACH_FILE_FAILURE

  DELETE_ATTACH_FILE_REQUEST
  DELETE_ATTACH_FILE_SUCCESS
  DELETE_ATTACH_FILE_FAILURE

  GET_HISTORY_TICKET_REQUEST
  GET_HISTORY_TICKET_SUCCESS
  GET_HISTORY_TICKET_FAILURE

  DEL_COMMENT_REQUEST
  DEL_COMMENT_SUCCESS
  DEL_COMMENT_FAILURE
  
  ATTACH_FILE_REQUEST
  ATTACH_FILE_SUCCESS
  ATTACH_FILE_FAILURE
  
  ADD_LINK_REQUEST
  ADD_LINK_SUCCESS
  ADD_LINK_FAILURE


`);

export const listDataType = (params: IParamsRequest, callback: () => {}) => ({
  type: TicketTypes.GET_DATA_TYPE_LIST_REQUEST,
  params,
  callback,
});

export const listDataGroup = (params: IParamsRequest, callback: () => {}) => ({
  type: TicketTypes.GET_DATA_GROUP_LIST_REQUEST,
  params,
  callback,
});

export const listCatDetail = (params: IParamsRequest, callback: () => {}) => ({
  type: TicketTypes.GET_CAT_DETAIL_LIST_REQUEST,
  params,
  callback,
});

export const listDataCombo = (params: IParamsRequest, callback: () => {}) => ({
  type: TicketTypes.GET_DATA_COMBO_LIST_REQUEST,
  params,
  callback,
});

export const createSupportTicket = (
  params: IParamsRequest,
  callback: () => {},
) => {
  return {
    type: TicketTypes.CREATE_SUPPORT_TICKET_REQUEST,
    params,
    callback,
  };
};

export const uploadFile = (params: IParamsRequest, callback: () => {}) => {
  return {
    type: TicketTypes.UPLOAD_FILE_REQUEST,
    params,
    callback,
  };
};

export const getSupportTicketList = (
  params: IParamsRequest,
  callback?: () => {},
) => {
  return {
    type: TicketTypes.GET_SUPPORT_TICKET_LIST_REQUEST,
    params,
    callback,
  };
};

export const closeSupportTicket = (
  params: IParamsRequest,
  callback?: () => {},
) => {
  return {
    type: TicketTypes.CLOSE_SUPPORT_TICKET_REQUEST,
    params,
    callback,
  };
};

export const cancelSupportTicket = (
  params: IParamsRequest,
  callback?: () => {},
) => {
  return {
    type: TicketTypes.CANCEL_SUPPORT_TICKET_REQUEST,
    params,
    callback,
  };
};

export const selectedSupportTicket = (
  payload: IDataSuportItem,
  callback?: () => {},
) => {
  return {
    type: TicketTypes.SELECTED_SUPPORT_TICKET,
    payload,
    callback,
  };
};

export const toggleModalComment = (payload: boolean, callback?: () => {}) => {
  return {
    type: TicketTypes.TOGGLE_MODAL_COMMENT,
    payload,
    callback,
  };
};

export const addCommentRequest = (
  params: IParamsRequest,
  callback: () => {},
) => {
  return {
    type: TicketTypes.ADD_COMMENT_REQUEST,
    params,
    callback,
  };
};

export const getAttachFileRequest = (params: IParamsRequest) => {
  return {
    type: TicketTypes.GET_ATTACH_FILE_REQUEST,
    params,
  };
};

export const deleteFileRequest = (
  params: IParamsRequest,
  callback: () => {},
) => {
  return {
    type: TicketTypes.DELETE_ATTACH_FILE_REQUEST,
    params,
    callback,
  };
};

export const historyTicketRequest = (
  params: IParamsRequest,
  callback?: () => {},
) => {
  return {
    type: TicketTypes.GET_HISTORY_TICKET_REQUEST,
    params,
    callback,
  };
};

export const delCommentRequest = (
  params: IParamsRequest,
  callback: () => {},
) => {
  return {
    type: TicketTypes.DEL_COMMENT_REQUEST,
    params,
    callback,
  };
};

export const attachFile = (params: IParamsRequest, callback: () => {}) => {
  return {
    type: TicketTypes.ATTACH_FILE_REQUEST,
    params,
    callback,
  };
};

export const addLinkFile = (
  payload: any,
  callback?: (t: any) => Promise<void>,
) => ({
  payload,
  type: TicketTypes.ADD_LINK_REQUEST,
  callback,
});
