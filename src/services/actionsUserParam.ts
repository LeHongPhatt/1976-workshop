import {IParamsRequest} from 'types';
import {BaseSetting} from 'utils/constants';

// export const CHECK_LOGIN_ACT = {
//   action: 'ConnectDB',
//   method: 'checkSession',
//   data: [{}],
//   type: 'rpc',
//   tid: 39,
// };

export const LOGOUT_ACT = {
  action: 'ConnectDB',
  method: 'getConfig',
  data: [
    {
      id: '2',
      refreshToken: '',
    },
  ],
  type: 'rpc',
  tid: 1587180329,
};

export const LOGIN_ACT: IParamsRequest = {
  action: 'ConnectDB',
  method: 'appPhoneLogin',
  data: [
    {
      phonenumber: '',
      password: '',
      appId: 'CRM-KIT',
      captcha: '',
      token: BaseSetting.TOKEN,
    },
  ],
  type: 'rpc',
  tid: 999999,
};

export const LOGIN_WITH_SECKEY = {
  action: 'ConnectDB',
  method: 'appPhoneLogin',
  data: [
    {
      phonenumber: '',
      password: '',
      secKey: '',
      appLog: 'Y',
      captcha: '',
      token: BaseSetting.TOKEN,
    },
  ],
  type: 'rpc',
  tid: 1587180329,
};

export const LOGIN_WITH_GUEST = {
  action: 'ConnectDB',
  method: 'appPhoneLogin',
  data: [
    {
      phonenumber: '',
      password: '',
      secKey: BaseSetting.SECKEY_GUEST,
      mail: BaseSetting.EMAIL_GUEST,
      captcha: '',
      token: BaseSetting.TOKEN,
      refreshToken: '',
    },
  ],
  type: 'rpc',
  tid: 1587180329,
};

export const REGISTER_ACT: IParamsRequest = {
  action: 'ConnectDB',
  method: 'register',
  data: [
    {
      mail: '',
      phonenumber: '',
      name: '',
      confirmKey: '',
      token: BaseSetting.TOKEN,
    },
  ],
  type: 'rpc',
  tid: 1587180329,
};

export const COMFIRM_OTP_ACT: IParamsRequest = {
  action: 'ConnectDB',
  method: 'confirmRegv2',
  data: [
    {
      verifyCode: '',
      confirmCode: '',
    },
  ],
  type: 'rpc',
  tid: 1587180329,
};

export const UPDATE_PWD = {
  action: 'FrmCsOperator',
  method: 'updPwd',
  data: [
    {
      NEW_PASS: '',
      OLD_PASS: '',
    },
  ],
  type: 'rpc',
  tid: 61,
};

export const UPDATE_PROFILE = {
  action: 'FrmCsOperator',
  method: 'upd',
  data: [
    {
      operatorid: '',
      name: '',
      email: '',
      phonenumber: '',
      reference1: '',
      reference2: '',
    },
  ],
  type: 'rpc',
  tid: 61,
};

export const UPDATE_AVATAR = {
  action: 'FrmFdDocument',
  method: 'addLink',
  data: [
    {
      documentcode: '', // documentcode
      autonum: '', //autonum
      filename: '', // name
      subject: '', // subject
      category: '', // category
      data: '', // data
      linkto: 'PRS',
      referencekey1: '', // user.prospect
      referencekey2: '',
      comments: 'AVATAR',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const DEL_AVATAR = {
  action: 'FrmFdDocument',
  method: 'delLinkByRefs',
  data: [
    {
      linkto: 'PRS',
      referencekey1: '',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const CONFIRM_FORGOT_PWD_ACT = {
  action: 'ConnectDB',
  method: 'confirmVerifyCodeNoLogin',
  data: [
    {
      verifyCode: '',
      confirmCode: '',
    },
  ],
  type: 'rpc',
  tid: 1587180329,
};

export const REFRESH_TOKEN_ACT: IParamsRequest = {
  action: 'ConnectDB',
  method: 'refreshToken',
  data: [
    {
      appId: 'CRM-KIT',
      refreshToken: '',
      salt: '',
    },
  ],
  type: 'rpc',
  tid: 999999,
};

export const FORGOT_PASSWORD_ACT = {
  action: 'ConnectDB',
  method: 'sendVerifyCodeNoLogin',
  data: [
    {
      mail: '',
      // phonenumber: '',
      captcha: '',
      token: BaseSetting.TOKEN,
    },
  ],
  type: 'rpc',
  tid: 61,
};

export const RESET_PASSWORD = {
  action: 'ConnectDB',
  method: 'regPwd',
  data: [
    {
      secKey: '',
      password: '',
      confirmCode: '',
      token: BaseSetting.TOKEN,
    },
  ],
  type: 'rpc',
  tid: 1587180329,
};

export const ACTION_REQUEST_ACCOUNT = {
  action: 'V1Ticket',
  method: 'add',
  data: [
    {
      // status: 'W',
      title: 'Yêu cầu đóng tài khoản',
      tic: '',
      ticketclass: '02',
      ticketchannel: '06',
      requestdate: '2021-09-27 17:22:25',
    },
  ],
  type: 'rpc',
  tid: 1,
};

export const ACTION_CHANGE_LANGUAGE = {
  action: 'ConnectDB',
  data: [{language: 'VN'}],
  method: 'changeLanguage',
  tid: 3,
  type: 'rpc',
};

export const COUNT_BADGET = {
  action: 'FrmCrNoti',
  method: 'getCountBadget',
  data: [
    {
      start: 0,
      limit: 25,
    },
  ],
  type: 'rpc',
  tid: 1,
};
