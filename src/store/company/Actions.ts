import {createTypes} from 'reduxsauce';
import {IParamsRequest} from 'types';

/**
 * @description define types of company's actions
 */
export const CompanyTypes = createTypes(`
  GET_COMPANY_REQUEST
  GET_COMPANY_SUCCESS
  GET_COMPANY_FAILURE
  
  GET_QNA_REQUEST
  GET_QNA_SUCCESS
  GET_QNA_FAILURE
  
  GET_CONTACT_REQUEST
  GET_CONTACT_SUCCESS
  GET_CONTACT_FAILURE
`);

export const getCompanyRequest = (formData: IParamsRequest) => ({
  formData,
  type: CompanyTypes.GET_COMPANY_REQUEST,
});

export const getContactRequest = (formData: IParamsRequest) => ({
  formData,
  type: CompanyTypes.GET_CONTACT_REQUEST,
});

export const getQANRequest = (formData: IParamsRequest) => ({
  formData,
  type: CompanyTypes.GET_QNA_REQUEST,
});

export const getCompanySuccess = (payload: any) => ({
  payload,
  type: CompanyTypes.GET_COMPANY_SUCCESS,
});

export const getCompanyFailure = (error: string) => ({
  error,
  type: CompanyTypes.GET_COMPANY_FAILURE,
});
