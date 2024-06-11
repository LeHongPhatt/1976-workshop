import {createTypes} from 'reduxsauce';
import {IParamsRequest} from 'types';

/**
 * @description define types of contract's actions
 */
export const ContractTypes = createTypes(`
  GET_CONTRACT_REQUEST
  GET_CONTRACT_SUCCESS
  GET_CONTRACT_FAILURE
  
  GET_RESERVATION_REQUEST
  GET_RESERVATION_SUCCESS
  GET_RESERVATION_FAILURE
  
  GET_PAYMENT_CONTRACT_REQUEST
  GET_PAYMENT_CONTRACT_SUCCESS
  GET_PAYMENT_CONTRACT_FAILURE
  
  GET_PAYMENT_HISTORIES_REQUEST
  GET_PAYMENT_HISTORIES_SUCCESS
  GET_PAYMENT_HISTORIES_FAILURE
  
  GET_GIFT_DISCOUNT_REQUEST
  GET_GIFT_DISCOUNT_SUCCESS
  GET_GIFT_DISCOUNT_FAILURE
  
  GET_ATTACH_FILE_REQUEST
  GET_ATTACH_FILE_SUCCESS
  GET_ATTACH_FILE_FAILURE
  
  GET_ALL_MEMBER_REQUEST
  GET_ALL_MEMBER_SUCCESS
  GET_ALL_MEMBER_FAILURE
`);

export const getContractRequest = (params: IParamsRequest) => ({
  params,
  type: ContractTypes.GET_CONTRACT_REQUEST,
});

export const getReservationRequest = (params: IParamsRequest) => ({
  params,
  type: ContractTypes.GET_RESERVATION_REQUEST,
});

export const getPaymentContractRequest = (params: IParamsRequest) => ({
  params,
  type: ContractTypes.GET_PAYMENT_CONTRACT_REQUEST,
});

export const getPaymentHistoryRequest = (params: IParamsRequest) => ({
  params,
  type: ContractTypes.GET_PAYMENT_HISTORIES_REQUEST,
});

export const getGiftDiscountRequest = (params: IParamsRequest) => ({
  params,
  type: ContractTypes.GET_GIFT_DISCOUNT_REQUEST,
});

export const getAttachFileRequest = (params: IParamsRequest) => ({
  params,
  type: ContractTypes.GET_ATTACH_FILE_REQUEST,
});

export const getAllMemberRequest = (params: IParamsRequest) => ({
  params,
  type: ContractTypes.GET_ALL_MEMBER_REQUEST,
});
