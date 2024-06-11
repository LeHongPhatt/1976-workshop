import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CartSelectors} from 'store/cart';
import {
  IDeleteCartParams,
  IAddToCartParams,
  ICartOrderParams,
  IUpdateCartParams,
  ICartParams,
  ICart,
} from 'types';
import * as CartAction from 'store/cart';
import {API_ENDPOINT} from 'utils';
import {BottomSheetController} from 'components/BottomSheet/BottomSheet';
import {t} from 'i18next';
export const useCart = () => {
  const dispatch = useDispatch();

  const loading = useSelector(CartSelectors.getLoading);
  const cart = useSelector(CartSelectors.getAttrByKey('cart')) as ICart;

  const getListCarts = useCallback(
    ({...rest}: ICartParams) => {
      dispatch(
        CartAction.getBaseActionsRequest({
          dataKey: 'cart',
          formData: {...rest},
          endPoint: API_ENDPOINT.CART.MAIN,
        }),
      );
    },
    [dispatch],
  );

  const updateQuantityCart = useCallback(
    ({...rest}: IUpdateCartParams) => {
      dispatch(
        CartAction.patchBaseActionsRequest(
          {
            dataKey: 'cart',
            formData: {...rest},
            endPoint: API_ENDPOINT.CART.MAIN,
          },
          res => {
            console.log('res', res);
          },
        ),
      );
    },
    [dispatch],
  );

  const deleteCart = useCallback(
    (cartId: any, callback: () => void) => {
      dispatch(
        CartAction.deleteBaseActionsRequest(
          {
            dataKey: 'cart',
            formData: cartId,
            endPoint: API_ENDPOINT.CART.MAIN,
          },
          res => {
            console.log('res', res);
            if (res.code === 200) {
              callback?.();
            }
          },
        ),
      );
    },
    [dispatch],
  );

  const addToCart = useCallback(
    ({...rest}: IAddToCartParams) => {
      dispatch(
        CartAction.postBaseActionsRequest(
          {
            formData: {...rest},
            endPoint: API_ENDPOINT.CART.MAIN,
          },
          res => {
            if (res.code === 201) {
              getListCarts({});
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
    [dispatch, getListCarts],
  );
  const resetCartStore = useCallback(() => {
    dispatch(CartAction.resetCart());
  }, [dispatch]);
  return {
    loading,
    cart,
    getListCarts,
    updateQuantityCart,
    deleteCart,
    addToCart,
    resetCartStore,
  };
};
