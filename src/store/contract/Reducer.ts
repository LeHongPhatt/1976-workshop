import {createReducer} from 'reduxsauce';
import {IContractState} from 'types';
import {ContractTypes} from './Actions';

const INITIAL_STATE: IContractState = {
  loading: false,
  error: null,
  listContract: [],
  listReservation: [],
  payments: [],
  paymentHistories: [],
  gifts: [],
  attachedFile: [],
  allMembers: {},
};

const appRequest = (state: IContractState) => ({
  ...state,
  error: null,
  loading: true,
});

const appFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
  loading: false,
});

const getContractSuccess = (state: IContractState, {payload}: any) => ({
  ...state,
  error: null,
  listContract: payload,
  loading: false,
});

const getReservationRequest = (state: IContractState) => ({
  ...state,
  error: null,
});

const getReservationSuccess = (state: IContractState, {payload}: any) => ({
  ...state,
  error: null,
  listReservation: payload,
});

const getReservationFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
});

const getPaymentContractSuccess = (state: IContractState, {payload}: any) => ({
  ...state,
  error: null,
  loading: false,
  payments: payload,
});

const getPaymentHistoriesSuccess = (state: IContractState, {payload}: any) => ({
  ...state,
  error: null,
  loading: false,
  paymentHistories: payload,
});

const getGiftDiscountSuccess = (state: IContractState, {payload}: any) => ({
  ...state,
  error: null,
  loading: false,
  gifts: payload,
});

const getAttachFileSuccess = (state: IContractState, {payload}: any) => ({
  ...state,
  error: null,
  loading: false,
  attachedFile: payload,
});

const getAllMemberSuccess = (state: IContractState, {payload}: any) => ({
  ...state,
  error: null,
  loading: false,
  allMembers: payload,
});

const HANDLERS = {
  [ContractTypes.GET_CONTRACT_REQUEST]: appRequest,
  [ContractTypes.GET_CONTRACT_SUCCESS]: getContractSuccess,
  [ContractTypes.GET_CONTRACT_FAILURE]: appFailure,
  [ContractTypes.GET_RESERVATION_REQUEST]: getReservationRequest,
  [ContractTypes.GET_RESERVATION_SUCCESS]: getReservationSuccess,
  [ContractTypes.GET_RESERVATION_FAILURE]: getReservationFailure,
  [ContractTypes.GET_PAYMENT_CONTRACT_REQUEST]: appRequest,
  [ContractTypes.GET_PAYMENT_CONTRACT_SUCCESS]: getPaymentContractSuccess,
  [ContractTypes.GET_PAYMENT_CONTRACT_FAILURE]: appFailure,
  [ContractTypes.GET_PAYMENT_HISTORIES_REQUEST]: appRequest,
  [ContractTypes.GET_PAYMENT_HISTORIES_SUCCESS]: getPaymentHistoriesSuccess,
  [ContractTypes.GET_PAYMENT_HISTORIES_FAILURE]: appFailure,
  [ContractTypes.GET_GIFT_DISCOUNT_REQUEST]: appRequest,
  [ContractTypes.GET_GIFT_DISCOUNT_SUCCESS]: getGiftDiscountSuccess,
  [ContractTypes.GET_GIFT_DISCOUNT_FAILURE]: appFailure,
  [ContractTypes.GET_ATTACH_FILE_REQUEST]: appRequest,
  [ContractTypes.GET_ATTACH_FILE_SUCCESS]: getAttachFileSuccess,
  [ContractTypes.GET_ATTACH_FILE_FAILURE]: appFailure,
  [ContractTypes.GET_ALL_MEMBER_REQUEST]: appRequest,
  [ContractTypes.GET_ALL_MEMBER_SUCCESS]: getAllMemberSuccess,
  [ContractTypes.GET_ALL_MEMBER_FAILURE]: appFailure,
};

export const contract = createReducer(INITIAL_STATE, HANDLERS);
