import {all, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {AppTypes} from 'store/app';
import {UserTypes} from 'store/user';
import {IResponse, IUser} from 'types';
import axiosClient from 'utils/axios';
import {GETWAY} from 'utils/constants';

/*============================================*/
function* logoutRequest(action) {
  const rs: IResponse = yield axiosClient.post(
    GETWAY,
    JSON.stringify(action.formData),
  );
  yield put({type: AppTypes.LOGOUT_SUCCESS});
  action.callback?.(rs.result);
}

function* watchLogout() {
  yield takeLatest(AppTypes.LOGOUT_REQUEST, logoutRequest);
}
/*============================================*/
function* loginRequest(action) {
  console.log('action.loginRequest', action.formData);
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.formData),
    );
    console.log('rs.result.data.loginRequest', rs.result.data);
    if (rs.result.success) {
      const user: IUser = rs.result.data;
      yield put({type: AppTypes.LOGIN_SUCCESS, payload: user});
    } else {
      yield put({type: AppTypes.LOGIN_FAILURE, error: rs.result});
    }
    action.callback?.(rs.result);
  } catch (error) {
    console.log('action.loginRequest.error', error);
    yield put({type: AppTypes.LOGIN_FAILURE, error});
  }
}
function* watchLogin() {
  yield takeLatest(AppTypes.LOGIN_REQUEST, loginRequest);
}
/*============================================*/
function* forgotRequest(action) {
  try {
    console.log('action.formData', action.formData);

    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.formData),
    );
    console.log('forgotRequest====================================');
    console.log(rs);
    console.log('====================================');
    if (rs.result.success) {
      const user: IUser = rs.result.data;
      yield put({type: AppTypes.FORGOT_PWD_SUCCESS, payload: user});
    } else {
      yield put({type: AppTypes.FORGOT_PWD_FAILURE});
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({type: AppTypes.FORGOT_PWD_FAILURE, error});
  }
}
function* watchForgotPassword() {
  yield takeLatest(AppTypes.FORGOT_PWD_REQUEST, forgotRequest);
}
/*============================================*/
function* registerRequest(action) {
  try {
    console.log('action.registerRequest', action.formData);

    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.formData),
    );
    console.log('rs.registerRequest', rs);
    if (rs.result.success) {
      const user: IUser = rs.result.data;
      yield put({type: AppTypes.REGISTER_SUCCESS, payload: user});
    } else {
      yield put({type: AppTypes.REGISTER_FAILURE, error: rs.result});
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({type: AppTypes.REGISTER_FAILURE, error});
  }
}
function* watchRegister() {
  yield takeLatest(AppTypes.REGISTER_REQUEST, registerRequest);
}
/*============================================*/
function* confirmOTPRequest(action) {
  try {
    console.log('action.otp', action.formData);

    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.formData),
    );
    console.log('rs.otp', rs);
    if (rs.result.success) {
      const user: IUser = rs.result.data;
      yield put({type: AppTypes.REGISTER_SUCCESS, payload: user});
    } else {
      yield put({type: AppTypes.REGISTER_FAILURE, error: rs.result});
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({type: AppTypes.REGISTER_FAILURE, error});
  }
}
function* watchConfirmOTP() {
  yield takeLatest(AppTypes.CONFIRM_OTP_REQUEST, confirmOTPRequest);
}

/*============================================*/
function* resetRequest(action) {
  try {
    console.log('action.resetpwd', action.formData);

    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.formData),
    );
    console.log('rs.resetpwd', rs);
    if (rs.result.success) {
      // const user: IUser = rs.result.data;
      yield put({type: AppTypes.RESET_PWD_SUCCESS});
    } else {
      yield put({type: AppTypes.RESET_PWD_FAILURE, error: rs.result});
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({type: AppTypes.RESET_PWD_FAILURE, error});
  }
}
function* watchResetPWD() {
  yield takeLatest(AppTypes.RESET_PWD_REQUEST, resetRequest);
}

/*============================================*/
function* updateProfileRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.formData),
    );
    if (rs.result.success) {
      yield put({
        type: AppTypes.UPDATE_PROFILE_SUCCESS,
        payload: action.formData,
      });
    } else {
      yield put({type: AppTypes.UPDATE_PROFILE_FAILURE, error: rs.result});
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({type: AppTypes.UPDATE_PROFILE_FAILURE, error});
  }
}
function* watchUpdateProfile() {
  yield takeLatest(AppTypes.UPDATE_PROFILE_REQUEST, updateProfileRequest);
}

/*============================================*/
function* handleImageRequest(action) {
  try {
    console.log('action.imageReq', action.formData);

    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.formData),
    );
    console.log('rs.imageReq', rs);
    if (rs.result.success) {
      yield put({type: AppTypes.HANDLE_IMAGE_SUCCESS});
    } else {
      yield put({type: AppTypes.HANDLE_IMAGE_FAILURE, error: rs.result});
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({type: AppTypes.HANDLE_IMAGE_FAILURE, error});
  }
}

function* watchHandleImage() {
  yield takeLatest(AppTypes.HANDLE_IMAGE_REQUEST, handleImageRequest);
}

/*============================================*/
function* markNotificationRequest(action) {
  try {
    console.log('action.notification', action.formData);

    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.formData),
    );
    console.log('rs.notification', rs);
    if (rs.result.success) {
      yield put({type: UserTypes.MARK_NOTIFICATION_SUCCESS});
    } else {
      yield put({type: UserTypes.MARK_NOTIFICATION_FAILURE, error: rs.result});
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({type: UserTypes.MARK_NOTIFICATION_FAILURE, error});
  }
}

function* watchMarkNotification() {
  yield takeLatest(
    UserTypes.MARK_NOTIFICATION_REQUEST,
    markNotificationRequest,
  );
}

/*============================================*/
function* updateNotificationRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.formData),
    );
    if (rs.result.success) {
      yield put({type: UserTypes.UPDATE_NOTIFICATION_SUCCESS});
    } else {
      yield put({
        type: UserTypes.UPDATE_NOTIFICATION_FAILURE,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({type: UserTypes.UPDATE_NOTIFICATION_FAILURE, error});
  }
}

function* watchUpdateNotification() {
  yield takeLatest(
    UserTypes.UPDATE_NOTIFICATION_REQUEST,
    updateNotificationRequest,
  );
}

/*============================================*/
function* getNotificationRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.formData),
    );
    if (rs.result.success) {
      yield put({
        type: UserTypes.GET_NOTIFICATION_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({type: UserTypes.GET_NOTIFICATION_FAILURE, error: rs.result});
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({type: UserTypes.GET_NOTIFICATION_FAILURE, error});
  }
}

function* watchGetNotification() {
  yield takeLatest(UserTypes.GET_NOTIFICATION_REQUEST, getNotificationRequest);
}

/*============================================*/
function* accountInformationRequest(action) {
  try {
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.formData),
    );
    if (rs.result.success) {
      yield put({
        type: UserTypes.ACCOUNT_INFORMATION_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: UserTypes.ACCOUNT_INFORMATION_FAILURE,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({type: UserTypes.ACCOUNT_INFORMATION_FAILURE, error});
  }
}

function* watchAccountInformation() {
  yield takeLatest(
    UserTypes.ACCOUNT_INFORMATION_REQUEST,
    accountInformationRequest,
  );
}

/*============================================*/
function* changeLanguage(action) {
  try {
    console.log('action.changeLanguage', action.formData);

    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.formData),
    );
    console.log('rs.changeLanguage', rs.result);
    if (rs.result.success) {
      yield put({
        type: UserTypes.ACTION_CHANGE_LANGUAGE_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: UserTypes.ACTION_CHANGE_LANGUAGE_FAILURE,
        error: rs.result,
      });
    }
    action.callback?.(rs.result);
  } catch (error) {
    yield put({type: UserTypes.ACTION_CHANGE_LANGUAGE_FAILURE, error});
  }
}

function* watchChangeLanguage() {
  yield takeLatest(UserTypes.ACTION_CHANGE_LANGUAGE_REQUEST, changeLanguage);
}

/********************************* */
function* refreshTokenRequest(action) {
  try {
    console.log('action.rfTK', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params).replace(/\\n/g, ''),
    );
    console.log('rs.rfTK', rs);
    if (rs.result.success) {
      yield put({
        type: AppTypes.REFRESH_TOKEN_SUCCESS,
        formData: rs.result.data,
      });
    }
  } catch (error) {
    //
  }
}

function* watchrefreshToken() {
  yield takeEvery(AppTypes.REFRESH_TOKEN_REQUEST, refreshTokenRequest);
}

/********************************* */
function* onGetBadgetRequest(action) {
  try {
    console.log('action.badget', action.params);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.params),
    );
    console.log('rs.badget', rs.result);
    if (rs.result.success) {
      yield put({
        type: UserTypes.GET_BADGET_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: UserTypes.GET_BADGET_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: UserTypes.GET_BADGET_FAILURE,
      error,
    });
  }
}

function* watchGetBadget() {
  yield takeEvery(UserTypes.GET_BADGET_REQUEST, onGetBadgetRequest);
}

/********************************* */
function* onGetNotiTransaction(action) {
  try {
    console.log('action.onGetNotiTransaction', action.formData);
    const rs: IResponse = yield axiosClient.post(
      GETWAY,
      JSON.stringify(action.formData),
    );
    console.log('rs.onGetNotiTransaction', rs.result);
    if (rs.result.success) {
      yield put({
        type: UserTypes.GET_MY_TRANSACTION_NOTI_SUCCESS,
        payload: rs.result.data,
      });
    } else {
      yield put({
        type: UserTypes.GET_MY_TRANSACTION_NOTI_FAILURE,
        error: rs.result,
      });
    }
  } catch (error) {
    yield put({
      type: UserTypes.GET_MY_TRANSACTION_NOTI_FAILURE,
      error,
    });
  }
}

function* watchGetNotiTransaction() {
  yield takeEvery(
    UserTypes.GET_MY_TRANSACTION_NOTI_REQUEST,
    onGetNotiTransaction,
  );
}

export default function* userSagas() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchForgotPassword(),
    watchRegister(),
    watchConfirmOTP(),
    watchResetPWD(),
    watchUpdateProfile(),
    watchHandleImage(),
    watchMarkNotification(),
    watchGetNotification(),
    watchrefreshToken(),
    watchAccountInformation(),
    watchChangeLanguage(),
    watchGetBadget(),
    watchUpdateNotification(),
    watchGetNotiTransaction(),
  ]);
}
