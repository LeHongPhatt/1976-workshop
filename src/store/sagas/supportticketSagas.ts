import {all, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {TicketTypes} from 'store/ticket';
import {IResponse} from 'types';
import axiosClient from 'utils/axios';
import {GETWAY} from 'utils/constants';

function* listDataTypeRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );

    if (rs.result.success) {
      yield put({
        type: TicketTypes.GET_DATA_TYPE_LIST_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: TicketTypes.GET_DATA_TYPE_LIST_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: TicketTypes.GET_DATA_TYPE_LIST_FAILURE,
      error,
    });
  }
}

function* watchDataTypeList() {
  yield takeEvery(TicketTypes.GET_DATA_TYPE_LIST_REQUEST, listDataTypeRequest);
}
/***************************************************** */

function* listDataGroupRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );

    if (rs.result.success) {
      yield put({
        type: TicketTypes.GET_DATA_GROUP_LIST_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: TicketTypes.GET_DATA_GROUP_LIST_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: TicketTypes.GET_DATA_GROUP_LIST_FAILURE,
      error,
    });
  }
}

function* watchDataGroupList() {
  yield takeEvery(
    TicketTypes.GET_DATA_GROUP_LIST_REQUEST,
    listDataGroupRequest,
  );
}
/***************************************************** */

function* listCatDetailRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );

    if (rs.result.success) {
      yield put({
        type: TicketTypes.GET_CAT_DETAIL_LIST_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: TicketTypes.GET_CAT_DETAIL_LIST_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: TicketTypes.GET_CAT_DETAIL_LIST_FAILURE,
      error,
    });
  }
}

function* watchCatDetailList() {
  yield takeEvery(
    TicketTypes.GET_CAT_DETAIL_LIST_REQUEST,
    listCatDetailRequest,
  );
}
/***************************************************** */

function* listDataComlRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );

    if (rs.result.success) {
      yield put({
        type: TicketTypes.GET_DATA_COMBO_LIST_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: TicketTypes.GET_DATA_COMBO_LIST_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: TicketTypes.GET_DATA_COMBO_LIST_FAILURE,
      error,
    });
  }
}

function* watchDataComList() {
  yield takeEvery(TicketTypes.GET_DATA_COMBO_LIST_REQUEST, listDataComlRequest);
}
/***************************************************** */

function* createSPTicketRequest(action) {
  try {
    // console.log('action.createSPTicketRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    let {ticketid} = rs?.result.data[0];
    if (rs.result.success) {
      yield put({
        type: TicketTypes.CREATE_SUPPORT_TICKET_SUCCESS,
        payload: {...action.params.data[0], ticketid},
      });
    } else {
      yield put({
        type: TicketTypes.CREATE_SUPPORT_TICKET_FAILURE,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({
      type: TicketTypes.CREATE_SUPPORT_TICKET_FAILURE,
      error,
    });
  }
}

function* watchCreateSPTicket() {
  yield takeEvery(
    TicketTypes.CREATE_SUPPORT_TICKET_REQUEST,
    createSPTicketRequest,
  );
}
/***************************************************** */

function* attachFileRequest(action) {
  try {
    console.log('action.attachFileRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.attachFileRequest', rs);

    if (rs.result.success) {
      yield put({
        type: TicketTypes.UPLOAD_FILE_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: TicketTypes.UPLOAD_FILE_FAILURE,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({
      type: TicketTypes.UPLOAD_FILE_FAILURE,
      error,
    });
  }
}

function* watchAttachFile() {
  yield takeEvery(TicketTypes.UPLOAD_FILE_REQUEST, attachFileRequest);
}
/***************************************************** */

function* listSupportTicketRequest(action) {
  try {
    console.log(
      'listSupportTicketRequest.action?.params',
      action?.params?.data,
    );
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );

    console.log('listSupportTicketRequest.rs', rs?.result?.data);

    if (rs.result.success) {
      yield put({
        type: TicketTypes.GET_SUPPORT_TICKET_LIST_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: TicketTypes.GET_SUPPORT_TICKET_LIST_FAILURE,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({
      type: TicketTypes.GET_SUPPORT_TICKET_LIST_FAILURE,
      error,
    });
  }
}

function* watchListSupportTicket() {
  yield takeEvery(
    TicketTypes.GET_SUPPORT_TICKET_LIST_REQUEST,
    listSupportTicketRequest,
  );
}
/***************************************************** */

function* closeSupportTicketRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );

    if (rs.result.success) {
      yield put({
        type: TicketTypes.CLOSE_SUPPORT_TICKET_SUCCESS,
        payload: action.params.data[0],
      });
    } else {
      yield put({
        type: TicketTypes.CLOSE_SUPPORT_TICKET_FAILURE,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({
      type: TicketTypes.CLOSE_SUPPORT_TICKET_FAILURE,
      error,
    });
  }
}

function* watchCloseSupportTicket() {
  yield takeEvery(
    TicketTypes.CLOSE_SUPPORT_TICKET_REQUEST,
    closeSupportTicketRequest,
  );
}
/***************************************************** */

function* cancelSupportTicketRequest(action) {
  try {
    // console.log('action.cancelSupportTicketRequest', action.params);

    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.cancelSupportTicketRequest', rs);

    if (rs.result.success) {
      yield put({
        type: TicketTypes.CANCEL_SUPPORT_TICKET_SUCCESS,
        payload: action.params.data[0],
      });
    } else {
      yield put({
        type: TicketTypes.CANCEL_SUPPORT_TICKET_FAILURE,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({
      type: TicketTypes.CANCEL_SUPPORT_TICKET_FAILURE,
      error,
    });
  }
}

function* watchCancelSupportTicket() {
  yield takeEvery(
    TicketTypes.CANCEL_SUPPORT_TICKET_REQUEST,
    cancelSupportTicketRequest,
  );
}
/***************************************************** */

function* addCommentRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );

    if (rs.result.success) {
      yield put({
        type: TicketTypes.ADD_COMMENT_SUCCESS,
        payload: action.params.data[0],
      });
    } else {
      yield put({
        type: TicketTypes.ADD_COMMENT_FAILURE,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({
      type: TicketTypes.ADD_COMMENT_FAILURE,
      error,
    });
  }
}

function* watchAddComment() {
  yield takeEvery(TicketTypes.ADD_COMMENT_REQUEST, addCommentRequest);
}
/***************************************************** */

function* getAttachFileRequest(action) {
  try {
    // console.log('action.getAttachFileRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.getAttachFileRequest', rs?.result);
    if (rs.result.success) {
      yield put({
        type: TicketTypes.GET_ATTACH_FILE_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: TicketTypes.GET_ATTACH_FILE_FAILURE,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({
      type: TicketTypes.GET_ATTACH_FILE_FAILURE,
      error,
    });
  }
}

function* watchGetFileAttach() {
  yield takeEvery(TicketTypes.GET_ATTACH_FILE_REQUEST, getAttachFileRequest);
}
/***************************************************** */

function* deleteAttachFileRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );

    if (rs.result.success) {
      yield put({
        type: TicketTypes.DELETE_ATTACH_FILE_SUCCESS,
        payload: action.params.data[0],
      });
    } else {
      yield put({
        type: TicketTypes.DELETE_ATTACH_FILE_FAILURE,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({
      type: TicketTypes.DELETE_ATTACH_FILE_FAILURE,
      error,
    });
  }
}

function* watchDeleteFileAttach() {
  yield takeEvery(
    TicketTypes.DELETE_ATTACH_FILE_REQUEST,
    deleteAttachFileRequest,
  );
}
/***************************************************** */

function* historiesTicketRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );

    if (rs.result.success) {
      yield put({
        type: TicketTypes.GET_HISTORY_TICKET_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: TicketTypes.GET_HISTORY_TICKET_FAILURE,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({
      type: TicketTypes.GET_HISTORY_TICKET_FAILURE,
      error,
    });
  }
}

function* watchHistoriesTicket() {
  yield takeEvery(
    TicketTypes.GET_HISTORY_TICKET_REQUEST,
    historiesTicketRequest,
  );
}

function* deleteCommentRequest(action) {
  try {
    // console.log('action.deleteCommentRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.deleteCommentRequest', rs);

    if (rs.result.success) {
      yield put({
        type: TicketTypes.DEL_COMMENT_SUCCESS,
        payload: action.params.data[0],
      });
    } else {
      yield put({
        type: TicketTypes.DEL_COMMENT_FAILURE,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({
      type: TicketTypes.DEL_COMMENT_FAILURE,
      error,
    });
  }
}

function* watchDeleteComment() {
  yield takeEvery(TicketTypes.DEL_COMMENT_REQUEST, deleteCommentRequest);
}
/***************************************************** */

function* attachFileAttach(action: any) {
  try {
    console.log('action.attachFileAttach', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );

    if (rs.result.success) {
      yield put({
        type: TicketTypes.ATTACH_FILE_SUCCESS,
        payload: action.params.data[0],
      });
    } else {
      yield put({
        type: TicketTypes.ATTACH_FILE_FAILED,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({type: TicketTypes.ATTACH_FILE_FAILED, error});
  }
}
function* watchAttachFileAttach() {
  yield takeLatest(TicketTypes.ATTACH_FILE_REQUEST, attachFileAttach);
}

/*============================================*/
function* addLinkFile(action: any) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.payload),
    );
    if (rs.result.success) {
      yield put({
        type: TicketTypes.ADD_LINK_SUCCESS,
        payload: action.payload.data[0],
      });
    } else {
      yield put({
        type: TicketTypes.ADD_LINK_FAILED,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({type: TicketTypes.ADD_LINK_FAILED, error});
  }
}
function* watchAddLinkFile() {
  yield takeLatest(TicketTypes.ADD_LINK_REQUEST, addLinkFile);
}

export default function* supportTicketSagas() {
  yield all([
    watchDataTypeList(),
    watchDataGroupList(),
    watchCatDetailList(),
    watchDataComList(),
    watchCreateSPTicket(),
    watchAttachFile(),
    watchListSupportTicket(),
    watchCloseSupportTicket(),
    watchCancelSupportTicket(),
    watchAddComment(),
    watchGetFileAttach(),
    watchDeleteFileAttach(),
    watchHistoriesTicket(),
    watchDeleteComment(),
    watchAttachFileAttach(),
    watchAddLinkFile(),
  ]);
}
