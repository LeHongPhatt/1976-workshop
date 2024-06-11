import {all, put, takeEvery} from 'redux-saga/effects';
import {ContractTypes} from 'store/contract';
import {IResponse} from 'types';
import axiosClient from 'utils/axios';
import {GETWAY} from 'utils/constants';

function* listContractRequest(action) {
  try {
    console.log('action.listContractRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.listContractRequest', rs.result.data);

    if (rs.result.success) {
      yield put({
        type: ContractTypes.GET_CONTRACT_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ContractTypes.GET_CONTRACT_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: ContractTypes.GET_CONTRACT_FAILURE,
      error,
    });
  }
}

function* watchContractList() {
  yield takeEvery(ContractTypes.GET_CONTRACT_REQUEST, listContractRequest);
}
/***************************************************** */

function* listReservationRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );

    if (rs.result.success) {
      yield put({
        type: ContractTypes.GET_RESERVATION_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ContractTypes.GET_RESERVATION_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: ContractTypes.GET_RESERVATION_FAILURE,
      error,
    });
  }
}

function* watchReservationList() {
  yield takeEvery(
    ContractTypes.GET_RESERVATION_REQUEST,
    listReservationRequest,
  );
}
/***************************************************** */

function* listPaymentRequest(action) {
  try {
    console.log('action.listPaymentRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.listPaymentRequest', rs);

    if (rs.result.success) {
      yield put({
        type: ContractTypes.GET_PAYMENT_CONTRACT_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ContractTypes.GET_PAYMENT_CONTRACT_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: ContractTypes.GET_PAYMENT_CONTRACT_FAILURE,
      error,
    });
  }
}

function* watchPaymentContract() {
  yield takeEvery(
    ContractTypes.GET_PAYMENT_CONTRACT_REQUEST,
    listPaymentRequest,
  );
}
/***************************************************** */

function* listPaymentHistoriesRequest(action) {
  try {
    console.log('action.listPaymentHistoriesRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.listPaymentHistoriesRequest', rs);

    if (rs.result.success) {
      yield put({
        type: ContractTypes.GET_PAYMENT_HISTORIES_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ContractTypes.GET_PAYMENT_HISTORIES_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: ContractTypes.GET_PAYMENT_HISTORIES_FAILURE,
      error,
    });
  }
}

function* watchPaymentHistories() {
  yield takeEvery(
    ContractTypes.GET_PAYMENT_HISTORIES_REQUEST,
    listPaymentHistoriesRequest,
  );
}
/***************************************************** */

function* getGiftDiscountRequest(action) {
  try {
    console.log('action.getGiftDiscountRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.getGiftDiscountRequest', rs.result);

    if (rs.result.success) {
      yield put({
        type: ContractTypes.GET_GIFT_DISCOUNT_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ContractTypes.GET_GIFT_DISCOUNT_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: ContractTypes.GET_GIFT_DISCOUNT_FAILURE,
      error,
    });
  }
}

function* watchGetGiftDiscount() {
  yield takeEvery(
    ContractTypes.GET_GIFT_DISCOUNT_REQUEST,
    getGiftDiscountRequest,
  );
}
/***************************************************** */

function* getAttachedFileRequest(action) {
  try {
    // console.log('action.getAttachedFileRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.getAttachedFileRequest', rs);

    if (rs.result.success) {
      yield put({
        type: ContractTypes.GET_ATTACH_FILE_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ContractTypes.GET_ATTACH_FILE_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: ContractTypes.GET_ATTACH_FILE_FAILURE,
      error,
    });
  }
}

function* watchAttachedFile() {
  yield takeEvery(
    ContractTypes.GET_ATTACH_FILE_REQUEST,
    getAttachedFileRequest,
  );
}
/***************************************************** */

function* getAllMemberRequest(action) {
  try {
    // console.log('action.getAllMemberRequest', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    // console.log('rs.getAllMemberRequest', rs);

    if (rs.result.success) {
      yield put({
        type: ContractTypes.GET_ALL_MEMBER_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: ContractTypes.GET_ALL_MEMBER_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    // console.log('error.getAllMemberRequest', error);
    yield put({
      type: ContractTypes.GET_ALL_MEMBER_FAILURE,
      error,
    });
  }
}

function* watchAllMemberRequest() {
  yield takeEvery(ContractTypes.GET_ALL_MEMBER_REQUEST, getAllMemberRequest);
}
/***************************************************** */

export default function* contractSagas() {
  yield all([
    watchContractList(),
    watchReservationList(),
    watchPaymentContract(),
    watchPaymentHistories(),
    watchGetGiftDiscount(),
    watchAttachedFile(),
    watchAllMemberRequest(),
  ]);
}
