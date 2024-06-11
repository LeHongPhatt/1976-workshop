import {createReducer} from 'reduxsauce';
import {ICompanyState} from 'types';
import {CompanyTypes} from './Actions';

const INITIAL_STATE: ICompanyState = {
  loading: false,
  error: null,
  company: {},
  tutorials: [],
  contact: {},
};

const getCompanyRequest = (state: ICompanyState) => ({
  ...state,
  error: null,
  loading: true,
});

const getCompanySuccess = (state: ICompanyState, {payload}: any) => ({
  ...state,
  error: null,
  loading: false,
  company: payload[0],
});

const getCompanyFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
  loading: false,
});

const getQNARequest = (state: ICompanyState) => ({
  ...state,
  error: null,
  loading: true,
});

const getQNASuccess = (state: ICompanyState, {payload}: any) => ({
  ...state,
  error: null,
  loading: false,
  tutorials: payload,
});

const getQNAFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
  loading: false,
});

const getContactRequest = (state: ICompanyState) => ({
  ...state,
  error: null,
  loading: true,
});

const getContactSuccess = (state: ICompanyState, {payload}: any) => ({
  ...state,
  error: null,
  loading: false,
  contact: payload,
});

const getContactFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
  loading: false,
});

const HANDLERS = {
  [CompanyTypes.GET_COMPANY_REQUEST]: getCompanyRequest,
  [CompanyTypes.GET_COMPANY_SUCCESS]: getCompanySuccess,
  [CompanyTypes.GET_COMPANY_FAILURE]: getCompanyFailure,
  [CompanyTypes.GET_QNA_REQUEST]: getQNARequest,
  [CompanyTypes.GET_QNA_SUCCESS]: getQNASuccess,
  [CompanyTypes.GET_QNA_FAILURE]: getQNAFailure,
  [CompanyTypes.GET_CONTACT_REQUEST]: getContactRequest,
  [CompanyTypes.GET_CONTACT_SUCCESS]: getContactSuccess,
  [CompanyTypes.GET_CONTACT_FAILURE]: getContactFailure,
};

export const company = createReducer(INITIAL_STATE, HANDLERS);
