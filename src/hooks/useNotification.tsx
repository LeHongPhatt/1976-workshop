import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NotificaitonSelectors} from 'store/notification';
import * as Notifications from 'store/notification';
import {INotificationItem, IPage} from 'types';
import {API_ENDPOINT} from 'utils';
export const useNotification = () => {
  const dispatch = useDispatch();
  const loading = useSelector(NotificaitonSelectors.getLoading);
  const noties =
    (useSelector(
      NotificaitonSelectors.getAttrByKey('noties'),
    ) as INotificationItem[]) ?? [];

  const getListNotification = useCallback(
    ({...rest}: IPage) => {
      dispatch(
        Notifications.getBaseActionsRequest({
          dataKey: 'noties',
          formData: {...rest},
          endPoint: API_ENDPOINT.NOTI.MAIN,
        }),
      );
    },
    [dispatch],
  );

  const deleteAllNotification = useCallback(
    (_, callback: () => void) => {
      dispatch(
        Notifications.deleteBaseActionsRequest(
          {
            dataKey: 'noties',
            endPoint: API_ENDPOINT.NOTI.DELETE_ALL,
          },
          res => {
            if (res.status === 200) {
              callback?.();
            }
          },
        ),
      );
    },
    [dispatch],
  );

  const onSeenNotification = useCallback(
    (notificationId: string, callback: (res: INotificationItem) => void) => {
      dispatch(
        Notifications.patchBaseActionsRequest(
          {
            endPoint: `${API_ENDPOINT.NOTI.MAIN}/${notificationId}`,
          },
          res => {
            if (res.code === 200) {
              callback?.(res.data);
            }
          },
        ),
      );
    },
    [dispatch],
  );

  const onSeenAllNotification = useCallback(
    (_, callback: () => void) => {
      dispatch(
        Notifications.putBaseActionsRequest(
          {
            dataKey: 'noties',
            endPoint: API_ENDPOINT.NOTI.SEEN_ALL,
          },
          res => {
            if (res.code === 200) {
              callback?.();
            }
          },
        ),
      );
    },
    [dispatch],
  );

  return {
    noties,
    loading,
    getListNotification,
    deleteAllNotification,
    onSeenNotification,
    onSeenAllNotification,
  };
};
