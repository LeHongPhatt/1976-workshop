import {createReducer} from 'reduxsauce';
import {IAppState} from 'types';
import {AppTypes} from './Actions';

/**
 * @description define initial state data of reducer
 */
const INITIAL_STATE: IAppState = {
  loading: false,
  error: null,
  language: 'vi',
  captcha: '',
  token: '',
  isAuth: false,
  visible: false,
  visibleFile: false,
  visiblePreview: false,
};

// const languageRequest = (
//   state: IAppState,
//   {query: language}: {query: string},
// ) => ({
//   ...state,
//   language,
// });

/**
 * @description handle update data store when login request
 * @param {IAppState} state - current state data of app reducer
 * @returns {IAppState}
 */
const loginRequest = (state: IAppState) => ({
  ...state,
  user: null,
  error: null,
  loading: true,
});

/**
 * @description handle update data store when refresh token success
 * @param {IAppState} state - current state data of app reducer
 * @param {string} payload - new access token
 * @returns {IAppState}
 */
// const refreshSuccess = (
//   state = INITIAL_STATE,
//   {payload}: {payload: string},
// ) => {
//   AsyncStorage.setItem('access_token', payload);

//   return {
//     ...state,
//     token: payload,
//   };
// };

/**
 * @description handle update data store when login success
 * @param {IAppState} state - current state data of app reducer
 * @param {any} payload - user data
 * @returns {IAppState}
 */
const loginSuccess = (state = INITIAL_STATE, {payload}: any) => {
  return {
    ...state,
    error: null,
    user: payload,
    token: payload.token,
    isAuth: true,
    loading: false,
  };
};

/**
 * @description handle update data store when login failed
 * @param {IAppState} state - current state data of app reducer
 * @param {any} action - action data payload
 * @returns {IAppState}
 */
const loginFailure = (state = INITIAL_STATE, action: any) => ({
  ...state,
  loading: false,
  error: action.error,
});

// /**
//  * @description handle update data store when register user request
//  * @param {IAppState} state - current state data of app reducer
//  * @returns {IAppState}
//  */
const registerRequest = (state: IAppState) => ({
  ...state,
  loading: true,
});

const handleImageRequest = (state: IAppState) => ({
  ...state,
  loading: true,
});

const registerSuccess = (state = INITIAL_STATE, {payload}: any) => {
  return {
    ...state,
    error: null,
    user: payload,
    isAuth: true,
    loading: false,
  };
};

const registerFailure = (state: IAppState, action: any) => ({
  ...state,
  loading: false,
  error: action.error,
});

const logout = (state = INITIAL_STATE) => {
  return {
    ...state,
    error: null,
    user: null,
    token: '',
    isAuth: false,
    loading: false,
  };
};

const forgotRequest = (state: IAppState) => ({
  ...state,
  error: null,
  loading: true,
});

const forgotSuccess = (state = INITIAL_STATE, {payload}: any) => {
  return {
    ...state,
    user: payload,
    token: payload.token,
    error: null,
    loading: false,
  };
};

const forgotFailure = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
  error: null,
});

const onCaptcha = (state = INITIAL_STATE, action: any) => ({
  ...state,
  captcha: action.captcha,
});

const showCaptcha = (state = INITIAL_STATE, action: any) => ({
  ...state,
  showCaptcha: action.isShow,
});

const refreshToken = (state: IAppState, {formData}: any) => {
  return {
    ...state,
    token: formData.token,
  };
};

const appRequest = (state: IAppState) => ({
  ...state,
  loading: true,
});

const appSuccess = (state = INITIAL_STATE) => {
  return {
    ...state,
    error: null,
    loading: false,
  };
};

const appFailure = (state: IAppState, action: any) => ({
  ...state,
  loading: false,
  error: action.error,
});

const updateProfileRequest = (state: IAppState) => ({
  ...state,
  loading: true,
});

const updateProfileSuccess = (state: IAppState, {payload}: any) => {
  return {
    ...state,
    user: payload.data[0],
    error: null,
    loading: false,
  };
};

const appupdateProfileFailure = (state: IAppState, action: any) => ({
  ...state,
  loading: false,
  error: action.error,
});

const appToggleModalImageViewer = (state: IAppState, {payload}: any) => ({
  ...state,
  visible: payload,
});

const appToggleModalFile = (state: IAppState, {payload}: any) => ({
  ...state,
  visibleFile: payload,
});

const appToggleModalPreview = (state: IAppState, {payload}: any) => ({
  ...state,
  visiblePreview: payload,
});

// define handlers of the reducer
const HANDLERS = {
  [AppTypes.LOGIN_SUCCESS]: loginSuccess,
  [AppTypes.LOGIN_FAILURE]: loginFailure,
  [AppTypes.LOGIN_REQUEST]: loginRequest,
  [AppTypes.LOGOUT_REQUEST]: logout,
  [AppTypes.LOGOUT_SUCCESS]: logout,
  [AppTypes.FORGOT_PWD_REQUEST]: forgotRequest,
  [AppTypes.FORGOT_PWD_SUCCESS]: forgotSuccess,
  [AppTypes.FORGOT_PWD_FAILURE]: forgotFailure,
  [AppTypes.UPDATE_CAPTCHA]: onCaptcha,
  [AppTypes.SHOW_CAPTCHA]: showCaptcha,
  [AppTypes.REFRESH_TOKEN_SUCCESS]: refreshToken,
  [AppTypes.REGISTER_REQUEST]: registerRequest,
  [AppTypes.REGISTER_SUCCESS]: registerSuccess,
  [AppTypes.REGISTER_FAILURE]: registerFailure,
  [AppTypes.UPDATE_PROFILE_REQUEST]: updateProfileRequest,
  [AppTypes.UPDATE_PROFILE_SUCCESS]: updateProfileSuccess,
  [AppTypes.UPDATE_PROFILE_FAILURE]: appupdateProfileFailure,
  [AppTypes.RESET_PWD_REQUEST]: appRequest,
  [AppTypes.RESET_PWD_SUCCESS]: appSuccess,
  [AppTypes.RESET_PWD_FAILURE]: appFailure,
  [AppTypes.HANDLE_IMAGE_REQUEST]: handleImageRequest,
  [AppTypes.HANDLE_IMAGE_SUCCESS]: appSuccess,
  [AppTypes.HANDLE_IMAGE_FAILURE]: appFailure,

  [AppTypes.TOGGLE_MODAL_IMAGE_VIEWER]: appToggleModalImageViewer,
  [AppTypes.TOGGLE_MODAL_FILE]: appToggleModalFile,
  [AppTypes.TOGGLE_MODAL_PREVIEW]: appToggleModalPreview,
};

export const app = createReducer(INITIAL_STATE, HANDLERS);
