import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {HistoryOrderSelectors} from 'store/historyOrder';
import {IHistoryOrder, IHistoryOrderParasm} from 'types';
import * as HistoryOrderActions from 'store/historyOrder';
import {API_ENDPOINT} from 'utils';
export const useHistoryOrder = () => {
  const dispatch = useDispatch();
  const loading = useSelector(HistoryOrderSelectors.getLoading);
  const orders = useSelector(
    HistoryOrderSelectors.getAttrByKey('orders'),
  ) as IHistoryOrder[];
  const order = useSelector(
    HistoryOrderSelectors.getAttrByKey('order'),
  ) as IHistoryOrder;
  const getListHistoryOrder = useCallback(
    ({...rest}: IHistoryOrderParasm) => {
      dispatch(
        HistoryOrderActions.getBaseActionsRequest({
          dataKey: 'orders',
          formData: {...rest},
          endPoint: API_ENDPOINT.ORDER.MAIN,
        }),
      );
    },
    [dispatch],
  );
  const getDetailHistoryOrder = useCallback(
    (historyOrderId: number, callback: (res: IHistoryOrder) => void) => {
      console.log('historyOrderId', historyOrderId);
      dispatch(
        HistoryOrderActions.getBaseActionsRequest(
          {
            formData: undefined,
            type: HistoryOrderActions.HistoryOrderActions
              .GET_DETAIL_BASE_ACTIONS,
            endPoint: `${API_ENDPOINT.ORDER.MAIN}/${historyOrderId}`,
          },
          res => {
            console.log(res);
            if (res.code === 200) {
              callback?.(res.data);
            }
          },
        ),
      );
    },
    [dispatch],
  );
  return {
    loading,
    orders,
    order,
    getListHistoryOrder,
    getDetailHistoryOrder,
  };
};
