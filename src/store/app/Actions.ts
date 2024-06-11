import {createTypes} from 'reduxsauce';
import {IParamsRequest, IRefreshParams, IUser} from 'types';

/**
 * @description define types of authentication actions
 */
export const AppTypes = createTypes(`
  LOGIN_REQUEST
  LOGIN_SUCCESS
  LOGIN_FAILURE

  LOGOUT_REQUEST
  LOGOUT_SUCCESS

  HANDLE_IMAGE_REQUEST
  HANDLE_IMAGE_SUCCESS
  HANDLE_IMAGE_FAILURE
  
  UPDATE_PROFILE_REQUEST
  UPDATE_PROFILE_SUCCESS
  UPDATE_PROFILE_FAILURE

  UPDATE_CAPTCHA
  SHOW_CAPTCHA

  REGISTER_REQUEST
  REGISTER_SUCCESS
  REGISTER_FAILURE

  FORGOT_PWD_REQUEST
  FORGOT_PWD_SUCCESS
  FORGOT_PWD_FAILURE

  CONFIRM_OTP_REQUEST

  RESET_PWD_REQUEST
  RESET_PWD_SUCCESS
  RESET_PWD_FAILURE

  REFRESH_TOKEN_SUCCESS
  REFRESH_TOKEN_REQUEST

  TOGGLE_MODAL_IMAGE_VIEWER
  TOGGLE_MODAL_FILE
  TOGGLE_MODAL_PREVIEW
`);

export const refreshToken = (
  params: IParamsRequest,
  callback?: (t: any) => Promise<void>,
) => ({
  type: AppTypes.REFRESH_TOKEN_REQUEST,
  params,
  callback,
});

export const updateRefreshToken = (formData: IRefreshParams) => ({
  type: AppTypes.REFRESH_TOKEN_SUCCESS,
  formData,
});

/**
 * @description the action request logout user
 * @returns {any}
 */
export const logoutRequest = (
  formData: IParamsRequest,
  callback?: () => {},
) => ({
  type: AppTypes.LOGOUT_REQUEST,
  formData,
  callback,
});

export const logoutSuccess = () => ({
  type: AppTypes.LOGOUT_SUCCESS,
});

/**
 * @description the action login user successfully
 * @param {{ user: IUser; token: string }} payload - user data and user access token of current user
 * @returns {any}
 */
export const loginSuccess = (payload: {user: IUser}) => ({
  payload,
  type: AppTypes.LOGIN_SUCCESS,
});

/**
 * @description the action login user failed
 * @param {string} error - error message
 * @returns {any}
 */
export const loginFailure = (error: string) => ({
  error,
  type: AppTypes.LOGIN_FAILURE,
});

/**
 * @description the action request login user
 * @param {IFormDataLogin} formData - request body
 * @returns {any}
 */
export const loginRequest = (formData: IParamsRequest, callback: () => {}) => ({
  type: AppTypes.LOGIN_REQUEST,
  formData,
  callback,
});

/**
 * @description the action register user successfully
 * @param {IUser} payload - user data of registered user
 * @returns {any}
 */
export const registerSuccess = (payload: string) => ({
  payload,
  type: AppTypes.REGISTER_SUCCESS,
});

export const registerFailure = (error: string) => ({
  error,
  type: AppTypes.REGISTER_FAILURE,
});

export const registerRequest = (
  formData: IParamsRequest,
  callback?: () => {},
) => ({
  type: AppTypes.REGISTER_REQUEST,
  formData,
  callback,
});

export const handleImageRequest = (
  formData: IParamsRequest,
  callback?: () => {},
) => ({
  type: AppTypes.HANDLE_IMAGE_REQUEST,
  formData,
  callback,
});

export const confirmOTPRequest = (
  formData: IParamsRequest,
  callback?: () => {},
) => ({
  type: AppTypes.CONFIRM_OTP_REQUEST,
  formData,
  callback,
});
/**
 * @description the action refresh token successfully
 * @param {string} payload - new access token
 * @returns {any}
 */

export const forgotRequest = (
  formData: IParamsRequest,
  callback: () => {},
) => ({
  type: AppTypes.FORGOT_PWD_REQUEST,
  formData,
  callback,
});

export const forgotSuccess = (payload: string) => ({
  payload,
  type: AppTypes.FORGOT_PWD_SUCCESS,
});

export const forgotFailure = (error: string) => ({
  error,
  type: AppTypes.FORGOT_PWD_FAILURE,
});

export const resetRequest = (formData: IParamsRequest, callback: () => {}) => ({
  type: AppTypes.RESET_PWD_REQUEST,
  formData,
  callback,
});

export const resetSuccess = (payload: string) => ({
  payload,
  type: AppTypes.RESET_PWD_SUCCESS,
});

export const resetFailure = (error: string) => ({
  error,
  type: AppTypes.RESET_PWD_FAILURE,
});

export const onCaptcha = (captcha: string) => ({
  type: AppTypes.UPDATE_CAPTCHA,
  captcha,
});

//showCaptcha
export const showCaptcha = (isShow: boolean) => ({
  type: AppTypes.SHOW_CAPTCHA,
  isShow,
});

export const updateProfileRequest = (
  formData: IParamsRequest,
  callback?: () => {},
) => ({
  type: AppTypes.UPDATE_PROFILE_REQUEST,
  formData,
  callback,
});

export const toggleModalImageViewer = (
  payload: boolean,
  callback?: () => {},
) => {
  return {
    type: AppTypes.TOGGLE_MODAL_IMAGE_VIEWER,
    payload,
    callback,
  };
};

export const toggleModalPdf = (payload: boolean, callback?: () => {}) => {
  return {
    type: AppTypes.TOGGLE_MODAL_FILE,
    payload,
    callback,
  };
};

export const toggleModalPreview = (payload: boolean, callback?: () => {}) => {
  return {
    type: AppTypes.TOGGLE_MODAL_PREVIEW,
    payload,
    callback,
  };
};
