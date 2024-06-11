import {IParamsRequest} from 'types';

export const GET_SURVEY_LIST: IParamsRequest = {
  action: 'V1Survey',
  method: 'get',
  data: [
    {
      start: 0,
      limit: 25,
      customer: '', // user?.prospect,
      phone: '', // user?.phonenumber,
      email: '', // user?.email,
      searchString: '', // item,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_SURVEY_QUESTION: IParamsRequest = {
  action: 'V1Survey',
  method: 'getQ',
  data: [
    {
      start: 0,
      limit: 25,
      surveyid: '', // id
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const GET_SURVEY_ANSWER: IParamsRequest = {
  action: 'V1Survey',
  method: 'getRes',
  data: [
    {
      limit: 25,
      customer: '', //user?.prospect,
      phone: '',
      email: '',
      surveyid: '', // id,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const DEL_ANSWER: IParamsRequest = {
  action: 'FrmCrSurvey',
  method: 'delCustAws',
  data: [
    {
      custid: '', // user?.prospect,
      surveyid: '', // id,
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const ADD_ANSWER: IParamsRequest = {
  action: 'FrmCrSurvey',
  method: 'addCustAws',
  data: [], // ISurveyItem
  type: 'rpc',
  tid: 1,
};

// export const UPDATE_ANSWER: IParamsRequest = {
//   action: 'FrmCrSurvey',
//   method: 'updCustAws',
//   data: [], // ISurveyItem
//   type: 'rpc',
//   tid: 1,
// };
