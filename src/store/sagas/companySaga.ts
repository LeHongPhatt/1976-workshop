import {all, put, takeLatest} from 'redux-saga/effects';
import {CompanyTypes} from 'store/company';
import {IResponse} from 'types';
import axiosClient from 'utils/axios';
import {GETWAY} from 'utils/constants';

function* getCurrentCompany(action: any) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.formData),
    );
    if (rs.result.success) {
      yield put({
        type: CompanyTypes.GET_COMPANY_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({type: CompanyTypes.GET_COMPANY_FAILURE, error: rs.result});
    }
  } catch (error) {
    yield put({type: CompanyTypes.GET_COMPANY_FAILURE, error});
  }
}
function* watchCurrentCompany() {
  yield takeLatest(CompanyTypes.GET_COMPANY_REQUEST, getCurrentCompany);
}

function* getQNACompany(action: any) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.formData),
    );
    if (rs.result.success) {
      yield put({
        type: CompanyTypes.GET_QNA_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({type: CompanyTypes.GET_QNA_FAILURE, error: rs.result});
    }
  } catch (error) {
    yield put({type: CompanyTypes.GET_QNA_FAILURE, error});
  }
}
function* watchGetQNACompany() {
  yield takeLatest(CompanyTypes.GET_QNA_REQUEST, getQNACompany);
}

function* getContactGeneral(action: any) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.formData),
    );
    if (rs.result.success) {
      yield put({
        type: CompanyTypes.GET_CONTACT_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({type: CompanyTypes.GET_CONTACT_FAILURE, error: rs.result});
    }
  } catch (error) {
    yield put({type: CompanyTypes.GET_CONTACT_FAILURE, error});
  }
}
function* watchGetContactGeneral() {
  yield takeLatest(CompanyTypes.GET_CONTACT_REQUEST, getContactGeneral);
}

export default function* companySagas() {
  yield all([
    watchCurrentCompany(),
    watchGetQNACompany(),
    watchGetContactGeneral(),
  ]);
}
