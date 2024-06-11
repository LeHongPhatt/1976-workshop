import {createReducer} from 'reduxsauce';
import {ITicketState} from 'types';
import {TicketTypes} from './Actions';

const INITIAL_STATE: ITicketState = {
  loading: false,
  error: null,
  dataType: [],
  dataGroup: [],
  dataCat: [],
  dataCom: [],
  dataSupport: [],
  selectedTicket: {},
  isOpen: false,
  loadingComment: false,
  attachFile: [],
  histories: [],
};

const listDataTypeRequest = (state: ITicketState) => ({
  ...state,
  error: null,
});

const listDataTypeSuccess = (state: ITicketState, {payload}: any) => ({
  ...state,
  error: null,
  dataType: payload,
});

const listDataTypeFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const listDataGroupRequest = (state: ITicketState) => ({
  ...state,
  error: null,
});

const listDataGroupSuccess = (state: ITicketState, {payload}: any) => ({
  ...state,
  error: null,
  dataGroup: payload,
});

const listDataGroupFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const listCatDetailRequest = (state: ITicketState) => ({
  ...state,
  error: null,
});

const listCatDetailSuccess = (state: ITicketState, {payload}: any) => ({
  ...state,
  error: null,
  dataCat: payload,
});

const listCatDetailFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const listDataComRequest = (state: ITicketState) => ({
  ...state,
  error: null,
});

const listDataComSuccess = (state: ITicketState, {payload}: any) => ({
  ...state,
  error: null,
  dataCom: payload,
});

const listDataComFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const createSPTicketRequest = (state: ITicketState) => ({
  ...state,
  error: null,
  loading: true,
});

const createSPTicketSuccess = (state: ITicketState) => ({
  ...state,
  error: null,
  loading: false,
});

const createSPTicketFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
  loading: false,
});

const attachFileRequest = (state: ITicketState) => ({
  ...state,
  error: null,
});

const attachFileSuccess = (state: ITicketState, {}: any) => ({
  ...state,
  error: null,
});

const attachFileFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const listSupportTicketRequest = (state: ITicketState) => ({
  ...state,
  error: null,
  loading: true,
});

const listSupportTicketSuccess = (state: ITicketState, {payload}: any) => ({
  ...state,
  error: null,
  loading: false,
  dataSupport: payload,
});

const listSupportTicketFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
  loading: false,
});

const closeSupportTicketRequest = (state: ITicketState) => ({
  ...state,
  error: null,
  loading: true,
});

const closeSupportTicketSuccess = (state: ITicketState, {payload}: any) => {
  let oldList = [...state.dataSupport];
  let newList = oldList.map((item: any) => {
    if (item?.ticketid === payload.ticketid) {
      return {
        ...item,
        status: 'D',
      };
    } else {
      return item;
    }
  });
  return {
    ...state,
    error: null,
    loading: false,
    dataSupport: newList,
  };
};

const closeSupportTicketFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
  loading: false,
});

const cancelSupportTicketRequest = (state: ITicketState) => ({
  ...state,
  error: null,
  loading: true,
});

const cancelSupportTicketSuccess = (state: ITicketState, {payload}: any) => {
  let oldList = [...state.dataSupport];
  let newList = oldList.filter(
    (item: any) => item.ticketid !== payload.ticketid,
  );
  return {
    ...state,
    error: null,
    loading: false,
    dataSupport: newList,
  };
};

const cancelSupportTicketFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
  loading: false,
});

const selectedTicket = (state = INITIAL_STATE, {payload}: any) => {
  return {
    ...state,
    selectedTicket: payload,
  };
};

const toggleModalComment = (state = INITIAL_STATE, {payload}: any) => {
  return {
    ...state,
    isOpen: payload,
  };
};

const addCommentRequest = (state: ITicketState) => ({
  ...state,
  error: null,
  loadingComment: true,
});

const addCommentSuccess = (state: ITicketState, {payload}: any) => {
  let oldList = [...state.dataSupport];
  let newList = oldList.map((item: any) => {
    if (item?.ticketid === payload.ticketid) {
      return {
        ...item,
        lastcomment: payload.contents,
      };
    } else {
      return item;
    }
  });
  return {
    ...state,
    error: null,
    loadingComment: false,
    dataSupport: newList,
  };
};

const addCommentFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
  loadingComment: false,
});

const getAttachFileRequest = (state: ITicketState) => ({
  ...state,
  error: null,
});

const getAttachFileSuccess = (state: ITicketState, {payload}: any) => ({
  ...state,
  error: null,
  attachFile: payload,
});

const getAttachFileFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const deleteFileRequest = (state: ITicketState) => ({
  ...state,
  error: null,
});

const deleteFileSuccess = (state: ITicketState, {payload}: any) => {
  const oldList = [...state.attachFile];
  const newList = oldList.filter(item => item.autonum !== payload.autonum);
  return {
    ...state,
    error: null,
    attachFile: newList,
  };
};

const deleteFileFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const getHistoriesTicketRequest = (state: ITicketState) => ({
  ...state,
  error: null,
});

const getHistoriesTicketSuccess = (state: ITicketState, {payload}: any) => ({
  ...state,
  error: null,
  histories: payload,
});

const getHistoriesTicketFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const deleteCommentRequest = (state: ITicketState) => ({
  ...state,
  error: null,
});

const deleteCommentSuccess = (state: ITicketState, {payload}: any) => {
  const oldHis = [...state.histories];
  const newHis = oldHis.filter(item => item.logid !== payload.logid);
  return {
    ...state,
    error: null,
    histories: newHis,
  };
};

const deleteCommentFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const HANDLERS = {
  [TicketTypes.GET_DATA_TYPE_LIST_REQUEST]: listDataTypeRequest,
  [TicketTypes.GET_DATA_TYPE_LIST_SUCCESS]: listDataTypeSuccess,
  [TicketTypes.GET_DATA_TYPE_LIST_FAILURE]: listDataTypeFailure,
  [TicketTypes.GET_DATA_GROUP_LIST_REQUEST]: listDataGroupRequest,
  [TicketTypes.GET_DATA_GROUP_LIST_SUCCESS]: listDataGroupSuccess,
  [TicketTypes.GET_DATA_GROUP_LIST_FAILURE]: listDataGroupFailure,
  [TicketTypes.GET_CAT_DETAIL_LIST_REQUEST]: listCatDetailRequest,
  [TicketTypes.GET_CAT_DETAIL_LIST_SUCCESS]: listCatDetailSuccess,
  [TicketTypes.GET_CAT_DETAIL_LIST_FAILURE]: listCatDetailFailure,
  [TicketTypes.GET_DATA_COMBO_LIST_REQUEST]: listDataComRequest,
  [TicketTypes.GET_DATA_COMBO_LIST_SUCCESS]: listDataComSuccess,
  [TicketTypes.GET_DATA_COMBO_LIST_FAILURE]: listDataComFailure,
  [TicketTypes.CREATE_SUPPORT_TICKET_REQUEST]: createSPTicketRequest,
  [TicketTypes.CREATE_SUPPORT_TICKET_SUCCESS]: createSPTicketSuccess,
  [TicketTypes.CREATE_SUPPORT_TICKET_FAILURE]: createSPTicketFailure,
  [TicketTypes.UPLOAD_FILE_REQUEST]: attachFileRequest,
  [TicketTypes.UPLOAD_FILE_SUCCESS]: attachFileSuccess,
  [TicketTypes.UPLOAD_FILE_FAILURE]: attachFileFailure,
  [TicketTypes.GET_SUPPORT_TICKET_LIST_REQUEST]: listSupportTicketRequest,
  [TicketTypes.GET_SUPPORT_TICKET_LIST_SUCCESS]: listSupportTicketSuccess,
  [TicketTypes.GET_SUPPORT_TICKET_LIST_FAILURE]: listSupportTicketFailure,
  [TicketTypes.CLOSE_SUPPORT_TICKET_REQUEST]: closeSupportTicketRequest,
  [TicketTypes.CLOSE_SUPPORT_TICKET_SUCCESS]: closeSupportTicketSuccess,
  [TicketTypes.CLOSE_SUPPORT_TICKET_FAILURE]: closeSupportTicketFailure,
  [TicketTypes.CANCEL_SUPPORT_TICKET_REQUEST]: cancelSupportTicketRequest,
  [TicketTypes.CANCEL_SUPPORT_TICKET_SUCCESS]: cancelSupportTicketSuccess,
  [TicketTypes.CANCEL_SUPPORT_TICKET_FAILURE]: cancelSupportTicketFailure,
  [TicketTypes.ADD_COMMENT_REQUEST]: addCommentRequest,
  [TicketTypes.ADD_COMMENT_SUCCESS]: addCommentSuccess,
  [TicketTypes.ADD_COMMENT_FAILURE]: addCommentFailure,
  [TicketTypes.SELECTED_SUPPORT_TICKET]: selectedTicket,
  [TicketTypes.TOGGLE_MODAL_COMMENT]: toggleModalComment,
  [TicketTypes.GET_ATTACH_FILE_REQUEST]: getAttachFileRequest,
  [TicketTypes.GET_ATTACH_FILE_SUCCESS]: getAttachFileSuccess,
  [TicketTypes.GET_ATTACH_FILE_FAILURE]: getAttachFileFailure,
  [TicketTypes.DELETE_ATTACH_FILE_REQUEST]: deleteFileRequest,
  [TicketTypes.DELETE_ATTACH_FILE_SUCCESS]: deleteFileSuccess,
  [TicketTypes.DELETE_ATTACH_FILE_FAILURE]: deleteFileFailure,
  [TicketTypes.GET_HISTORY_TICKET_REQUEST]: getHistoriesTicketRequest,
  [TicketTypes.GET_HISTORY_TICKET_SUCCESS]: getHistoriesTicketSuccess,
  [TicketTypes.GET_HISTORY_TICKET_FAILURE]: getHistoriesTicketFailure,
  [TicketTypes.DEL_COMMENT_REQUEST]: deleteCommentRequest,
  [TicketTypes.DEL_COMMENT_SUCCESS]: deleteCommentSuccess,
  [TicketTypes.DEL_COMMENT_FAILURE]: deleteCommentFailure,
};

export const ticket = createReducer(INITIAL_STATE, HANDLERS);
