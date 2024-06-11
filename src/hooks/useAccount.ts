import {NavigationService, Routes} from 'navigation';
import {BottomSheetController} from './../components/BottomSheet/BottomSheet';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as AccountActions from 'store/account';
import {API_ENDPOINT} from 'utils';
import {InteractionManager} from 'react-native';
import {IChangePasswordParams, ISendRequest} from 'types';
import {logoutRequest} from 'store/user';

export const useAccount = () => {
  const dispatch = useDispatch();
  const loading = useSelector(AccountActions.AccountSelectors.getLoading);
  const onHandleRequestDeleteAccount = useCallback(
    ({type, description}: ISendRequest) => {
      dispatch(
        AccountActions.postBaseActionsRequest(
          {
            formData: {type, description},
            endPoint: API_ENDPOINT.USER.REQUEST,
          },
          res => {
            if (res.code === 201) {
              BottomSheetController.showModal({
                type: 'success',
                title: 'Gửi yêu cầu thành công',
                subtitle:
                  'Chúng tôi sẽ xử lý trong vòng 3 ngày làm việc kể từ khi nhận được yêu cầu xóa tài khoản ',
                onOk: () => {
                  BottomSheetController.hideModal();
                  InteractionManager.runAfterInteractions(() => {
                    NavigationService.replace(Routes.HomeTabs);
                  });
                },
                textOk: 'Trang chủ',
              });
            } else {
              BottomSheetController.showModal({
                type: 'errors',
                title: 'Gửi yêu cầu thất bại',
                subtitle: 'Vui lòng thử lại lần nữa',
                onCancel: () => BottomSheetController.hideModal(),
                textCancel: 'Thử lại',
              });
            }
          },
        ),
      );
    },
    [dispatch],
  );
  const onHanldeChangePassword = useCallback(
    ({new_password, old_password}: IChangePasswordParams) => {
      dispatch(
        AccountActions.pathBaseActionsRequest(
          {
            formData: {
              new_password,
              old_password,
            },
            endPoint: API_ENDPOINT.USER.CHANGE_PASSWORD,
          },
          res => {
            if (res.code === 200) {
              BottomSheetController.showModal({
                type: 'success',
                title: 'Đổi mật khẩu thành công',
                onOk: () => {
                  dispatch(logoutRequest({redirect: true}));
                  InteractionManager.runAfterInteractions(() => {
                    BottomSheetController.hideModal();
                  });
                },
                textOk: 'Đăng nhập',
              });
            } else {
              BottomSheetController.showModal({
                type: 'errors',
                title: 'Đổi mật khẩu thất bại',
                subtitle: 'Vui lòng thử lại lần nữa',
                onCancel: () => BottomSheetController.hideModal(),
                textCancel: 'Thử lại',
              });
            }
          },
        ),
      );
    },
    [dispatch],
  );
  return {
    onHandleRequestDeleteAccount,
    loading,
    onHanldeChangePassword,
  };
};
