import {useAuth} from 'hooks';
import {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {
  GET_MY_TRANSACTION_NOTI,
  GET_NOTIFICATION,
  MARK_READ,
  UPDATE_READ_NOTI,
} from 'services/actionsNotification';
import {
  ACTION_CHANGE_LANGUAGE,
  ACTION_REQUEST_ACCOUNT,
  COUNT_BADGET,
} from 'services/actionsUserParam';
import * as UserActions from 'store/user';
import {UserSelectors} from 'store/user';
import {ILanguageParams, INotiParams, IRequestAccountParams} from 'types';
import {EnumYesNo} from 'utils/enum';
import {useNotify} from './useNotify';

export const useUser = () => {
  const {user} = useAuth();
  const {danger, success} = useNotify();
  const {t} = useTranslation();

  const dispatch = useDispatch();
  const loading = useSelector(UserSelectors.getAttrByKey('loading'));
  const listNoti = useSelector(UserSelectors.getAttrByKey('listNoti'));
  const notiTransactions = useSelector(
    UserSelectors.getAttrByKey('notiTransactions'),
  );
  const countBadget = useSelector(UserSelectors.getAttrByKey('countBadget'));

  const onMarkNoti = useCallback(
    (callback?: () => void) => {
      MARK_READ.data[0].operatorid = user?.operatorid ?? '';
      return dispatch(
        UserActions.markNotificationRequest(MARK_READ, () => callback?.()),
      );
    },
    [dispatch],
  );

  const updateNotiList = useCallback(
    (params: INotiParams, callback?: () => void) => {
      UPDATE_READ_NOTI.data[0].operatorid = user?.operatorid ?? '';
      UPDATE_READ_NOTI.data[0].isread = EnumYesNo.Y;
      UPDATE_READ_NOTI.data[0].recordid = params?.recordid || '';
      return dispatch(
        UserActions.updateNotificationRequest(UPDATE_READ_NOTI, () =>
          callback?.(),
        ),
      );
    },
    [dispatch],
  );

  const onGetNoti = useCallback(() => {
    return dispatch(UserActions.getNotificationRequest(GET_NOTIFICATION));
  }, [dispatch]);

  const onGetNotiMyTranstions = useCallback(() => {
    return dispatch(UserActions.getMyTransactionNoti(GET_MY_TRANSACTION_NOTI));
  }, [dispatch]);

  const onRequestAccount = useCallback(
    async (formData: IRequestAccountParams) => {
      const params = {
        ...ACTION_REQUEST_ACCOUNT,
        data: [Object.assign(ACTION_REQUEST_ACCOUNT.data[0], formData)],
      };
      try {
        dispatch(
          UserActions.accountInformationRequest(params, res => {
            if (res.success) {
              success(t('label.notify'), res?.message);
            } else {
              danger(t('error'), res?.message);
            }
          }),
        );
      } catch (error) {
        danger(t('error'), error.message);
      }
    },
    [danger, dispatch, t],
  );

  const onChangeLanguage = useCallback(
    async (formData: ILanguageParams, callback?: (rs) => void) => {
      const params = {
        ...ACTION_CHANGE_LANGUAGE,
        data: [Object.assign(ACTION_CHANGE_LANGUAGE.data[0], formData)],
      };
      try {
        dispatch(
          UserActions.changeLanguageRequest(params, rs => callback?.(rs)),
        );
      } catch (error) {
        danger(t('error'), error.message);
      }
    },
    [danger, dispatch, t],
  );

  const onGetBadget = useCallback(() => {
    return dispatch(UserActions.onGetBadgetRequest(COUNT_BADGET));
  }, [dispatch]);

  return {
    loading,
    listNoti,
    countBadget,
    onMarkNoti,
    onGetNoti,
    onGetBadget,
    onRequestAccount,
    onChangeLanguage,
    updateNotiList,
    onGetNotiMyTranstions,
    notiTransactions,
  };
};
