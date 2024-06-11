import {IAddresses, IFormInfoUser, IFormRegisterUser, IUser} from 'types';
/**
 * @description the hook to handle all authentication's action
 */
import {useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as UserActions from 'store/user';
import {UserSelectors} from 'store/user';
import {IFormVerifyOTP} from 'types';
import {useKey} from './useKey';
import {API_ENDPOINT, KEY_CONTEXT, convertAddress} from 'utils';
import {NavigationService, Routes} from 'navigation';
import {BottomSheetController} from 'components/BottomSheet/BottomSheet';
import {InteractionManager} from 'react-native';
import {useNotify} from 'hooks';
import {useTranslation} from 'react-i18next';

export const useAuth = () => {
  const dispatch = useDispatch();
  const {danger, success} = useNotify();
  const {t} = useTranslation();
  const {saveKeyStore, resetKeyStore} = useKey();
  const loading = useSelector(UserSelectors.getLoading);
  const userInfo = useSelector(
    UserSelectors.getAttrByKey('inforUser'),
  ) as IUser;
  const token = useSelector(UserSelectors.getAttrByKey('accessToken'));
  const isShowIntro = useSelector(UserSelectors.getAttrByKey('isShowIntro'));
  const onRequestOTP = useCallback(
    async formData => {
      dispatch(
        UserActions.postBaseActionsRequest({
          formData,
          endPoint: API_ENDPOINT.OTP.SENT_OTP,
        }),
      );
    },
    [dispatch],
  );

  const defaultAddress = useMemo(() => {
    if (!userInfo?.addresses) {
      return {};
    }
    const [address] = userInfo?.addresses?.filter(
      (item: IAddresses) => item.is_default,
    );
    return {
      name: convertAddress(address),
      picking: {
        address: address?.address,
        city: address?.city,
        district: address?.district,
        ward: address?.ward,
      },
      latitude: address?.latitude,
      longitude: address?.longitude,
      id: address?.id,
    };
  }, [userInfo?.addresses]);

  const onVerifyOTP = useCallback(
    async (formData: IFormVerifyOTP, callback?: (a: any) => void) => {
      dispatch(
        UserActions.postBaseActionsRequest(
          {
            formData,
            endPoint: API_ENDPOINT.OTP.VERIFY_OTP,
          },
          async res => {
            if (res?.code === 200 && res.data?.isVerify) {
              NavigationService.navigate(Routes.ResetPassword, {
                phone_number: formData.phone_number,
                otp_code: formData.otp_code,
              });
            } else {
              callback?.(res.errors[0]?.message);
            }
          },
        ),
      );
    },
    [dispatch],
  );
  const getInfoUser = useCallback(
    (callback?: () => void) => {
      dispatch(
        UserActions.getBaseActionsRequest(
          {
            dataKey: 'inforUser',
            endPoint: API_ENDPOINT.USER.INFO,
          },
          res => {
            if (res?.code === 200) {
              saveKeyStore(KEY_CONTEXT.USER, JSON.stringify(res.data));
              callback?.();
            }
          },
        ),
      );
    },
    [dispatch, saveKeyStore],
  );
  const onLogin = useCallback(
    async ({phone_number, password}, callback?: (a: any) => void) => {
      dispatch(
        UserActions.postBaseActionsRequest(
          {
            formData: {phone_number, password},
            dataKey: 'accessToken',
            endPoint: API_ENDPOINT.AUTH.LOGIN,
          },
          async res => {
            if (res?.code === 200) {
              const result = res.data || {};
              saveKeyStore(KEY_CONTEXT.ACCESS_TOKEN, result.accessToken);
              getInfoUser(() => {
                NavigationService.replace(Routes.HomeTabs);
              });
            } else {
              callback?.(res.errors[0].message);
            }
          },
        ),
      );
    },
    [dispatch, getInfoUser, saveKeyStore],
  );

  const onLogout = useCallback(async () => {
    dispatch(UserActions.logoutRequest());
    await resetKeyStore();
    NavigationService.reset(Routes.Login);
  }, [dispatch, resetKeyStore]);

  const onRequestCheckPhone = useCallback(
    async (phone_number: string) => {
      dispatch(
        UserActions.postBaseActionsRequest(
          {
            formData: {phone_number},
            endPoint: API_ENDPOINT.AUTH.CHECK_PHONE_NUMER,
          },
          async res => {
            if (res.code === 200 && res?.data?.isExist) {
              NavigationService.navigate(Routes.InputPassword, {
                phone_number,
              });
            } else if (res.code === 200 && !res?.data?.isExist) {
              NavigationService.navigate(Routes.OTP, {
                phone_number,
                otp_type: 'sign_up',
              });
            } else {
              BottomSheetController.showModal({
                type: 'errors',
                title: t('alert.system'),
                subtitle: t('alert.try_again') as string,
                onCancel: () => BottomSheetController.hideModal(),
                textCancel: t('alert.again') as string,
              });
            }
          },
        ),
      );
    },
    [dispatch, t],
  );
  const onGoToLogin = useCallback(() => {
    NavigationService.reset(Routes.Login);
  }, []);

  const onRegisterUser = useCallback(
    (formData: IFormRegisterUser) => {
      dispatch(
        UserActions.postBaseActionsRequest(
          {
            formData,
            endPoint: API_ENDPOINT.AUTH.REGISTER,
          },
          res => {
            console.log('reakskdkaskdksakd', res);
            if (res.code === 201) {
              BottomSheetController.showModal({
                type: 'success',
                title: t('alert.register_success'),
                subtitle: t('alert.register_welcome') as string,
                onOk: () => {
                  onLogin({
                    password: formData.password,
                    phone_number: formData.phone_number,
                  });
                  InteractionManager.runAfterInteractions(() => {
                    BottomSheetController.hideModal();
                    NavigationService.replace(Routes.HomeTabs);
                  });
                },
                textOk: 'Trang chủ',
              });
            } else {
              BottomSheetController.showModal({
                type: 'errors',
                title: t('alert.register_fail'),
                subtitle: t('alert.try_again') as string,
                onCancel: () => BottomSheetController.hideModal(),
                textCancel: t('alert.again') as string,
              });
            }
          },
        ),
      );
    },
    [dispatch, onLogin, t],
  );
  const onUpdateInfoUser = useCallback(
    (formData: IFormInfoUser) => {
      dispatch(
        UserActions.patchBaseActionsRequest(
          {
            formData,
            endPoint: API_ENDPOINT.USER.INFO,
          },
          res => {
            if (res.code === 200) {
              success('Thành công', t('alert.update_profile_success'));
            } else {
              danger('Thất bại', t('alert.update_profile_fail'));
            }
          },
        ),
      );
    },
    [dispatch, success, danger, t],
  );
  const onShowIntroApp = useCallback(() => {
    dispatch(UserActions.saveIsShowIntro());
  }, [dispatch]);
  return {
    onRequestOTP,
    onVerifyOTP,
    userInfo,
    loading,
    onLogin,
    onLogout,
    onRequestCheckPhone,
    getInfoUser,
    token,
    onGoToLogin,
    onRegisterUser,
    onUpdateInfoUser,
    onShowIntroApp,
    isShowIntro,
    defaultAddress,
  };
};
