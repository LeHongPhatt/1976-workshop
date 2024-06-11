import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CartOrderSelectors} from 'store/cartOrder';
import {IBranch, IOrderCartParams, IPage} from 'types';
import * as CartOrderActions from 'store/cartOrder';
import {API_ENDPOINT} from 'utils';
import {BottomSheetController} from 'components/BottomSheet/BottomSheet';
import {t} from 'i18next';
import {NavigationService, Routes} from 'navigation';
import {InteractionManager} from 'react-native';
import {useCart} from './useCart';
export const useCartOrder = () => {
  const dispatch = useDispatch();
  const [directRouter, setDirectRouter] = useState(false);
  const loading = useSelector(CartOrderSelectors.getLoading);
  const branchs = useSelector(
    CartOrderSelectors.getAttrByKey('branchs'),
  ) as IBranch[];
  useEffect(() => {
    if (!directRouter) return;
    const timer = setTimeout(() => {
      BottomSheetController.hideModal();
      InteractionManager.runAfterInteractions(() => {
        setDirectRouter(false);
        NavigationService.reset(Routes.HomeTabs);
      });
    }, 5000);
    return () => clearTimeout(timer);
  }, [directRouter]);
  const {resetCartStore} = useCart();

  const getPromotion = useCallback(
    (discountCode: string, callback: (res: any) => void) => {
      dispatch(
        CartOrderActions.getBaseActionsRequest(
          {
            endPoint: `${API_ENDPOINT.DISCOUNT.MAIN}/${discountCode}`,
          },
          res => {
            if (res.code === 200) {
              callback?.(res.data);
            } else {
              callback?.(res.errors?.[0]?.message);
            }
          },
        ),
      );
    },
    [dispatch],
  );
  const getListBranch = useCallback(
    ({
      ...rest
    }: IPage & {
      user_longitude?: number;
      user_latitude?: number;
    }) => {
      dispatch(
        CartOrderActions.getBaseActionsRequest(
          {
            dataKey: 'branchs',
            formData: {...rest},
            endPoint: API_ENDPOINT.BRANCH.MAIN,
          },
          res => {
            console.log('getListBranch', res);
          },
        ),
      );
    },
    [dispatch],
  );

  const postOrderCart = useCallback(
    ({...rest}: IOrderCartParams) => {
      dispatch(
        CartOrderActions.postBaseActionsRequest(
          {
            formData: {...rest},
            endPoint: API_ENDPOINT.ORDER.MAIN,
          },
          res => {
            if (res.code === 201) {
              setDirectRouter(true);
              BottomSheetController.showModal({
                type: 'success',
                title: t('alert.order_success'),
                subtitle: t('alert.order_subtitel_success') as string,
                onOk: () => {
                  InteractionManager.runAfterInteractions(() => {
                    BottomSheetController.hideModal();
                    resetCartStore();
                    NavigationService.replace(Routes.HomeTabs);
                  });
                },
                textOk: t('homepage') as string,
              });
            } else {
              BottomSheetController.showModal({
                type: 'errors',
                title: t('alert.order_fail'),
                subtitle: t('alert.try_again') as string,
                onOk: () => {
                  InteractionManager.runAfterInteractions(() => {
                    BottomSheetController.hideModal();
                  });
                },
                textOk: t('alert.again') as string,
              });
            }
          },
        ),
      );
    },
    [dispatch, resetCartStore],
  );

  return {
    loading,
    branchs,
    getPromotion,
    getListBranch,
    postOrderCart,
  };
};
