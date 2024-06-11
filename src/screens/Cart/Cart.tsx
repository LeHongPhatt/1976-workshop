import {
  Buttons,
  Checkbox,
  Flatlist,
  KeyboardScrollView,
  LinearGradientCus,
  TextCus,
  TouchCus,
  WrapperLayout,
} from 'components';
import {useCart} from 'hooks';
import {NavigationService, Routes} from 'navigation';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseStyle, Colors} from 'theme';
import {CartItem} from './component';
import {Divider} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {
  closeAlerConfirm,
  showAlertConfirm,
} from 'components/ModalConfirm/ModalConfirm';
import {ICartDetails} from 'types';
import {formatCurrency} from 'utils';

const linear = {
  start: {x: 0.6, y: 0.1},
  end: {x: 0.5, y: 1.5},
  locations: [0, 1],
  colors: [Colors.bg_grey, Colors.bg_main],
};
const Cart: React.FC = () => {
  const {cart, getListCarts, deleteCart} = useCart();
  const [selected, setSelected] = useState<number[]>([]);
  const [data, setData] = useState<ICartDetails[]>([]);
  const {t} = useTranslation();
  useEffect(() => {
    setData(cart?.details);
  }, [cart?.details]);
  useEffect(() => {
    getListCarts({});
  }, [getListCarts]);

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <CartItem
          key={index}
          {...item}
          selected={selected}
          setSelected={setSelected}
          setData={setData}
          data={data}
        />
      );
    },
    [selected, data],
  );

  const renderHeader = useCallback(() => {
    if (data?.length === 0) {
      return <View />;
    }
    return (
      <View style={styles.spacingVertical16}>
        <View style={[BaseStyle.flexSpacingBetween, styles.mb16]}>
          <Checkbox
            title={t('total_product', {product: selected?.length}) as string}
            onChange={() => {
              if (selected.length === data?.length) {
                setSelected([]);
              } else {
                let numSelected: number[] = [];
                data.forEach((product: ICartDetails) =>
                  numSelected.push(product.id),
                );
                setSelected(numSelected);
              }
            }}
            value={selected.length === data?.length}
            noBackground
          />
          <TouchCus
            onPress={() =>
              showAlertConfirm({
                title: 'action.delete_cart',
                onOk: () =>
                  deleteCart({cart_detail_ids: selected}, () => {
                    closeAlerConfirm();
                  }),
              })
            }
            disabled={Boolean(selected.length === 0)}>
            <TextCus
              subtitle
              useI18n
              bold
              color={selected.length > 0 ? Colors.main : Colors.disabled}>
              cart.delete
            </TextCus>
          </TouchCus>
        </View>
        <Divider />
      </View>
    );
  }, [data, deleteCart, selected, t]);
  const calTotalCart = useMemo(() => {
    const itemSelected = selected?.length === data?.length;
    if (itemSelected) {
      return data?.reduce((prev, curr) => {
        return prev + curr?.product?.price_after_discount * curr.quantity;
      }, 0);
    } else {
      return data
        ?.filter(p => selected?.includes(p.id))
        ?.reduce((prev, curr) => {
          return prev + curr?.product?.price_after_discount * curr.quantity;
        }, 0);
    }
  }, [data, selected]);
  return (
    <WrapperLayout
      header={{
        title: 'cart.title',
      }}>
      <KeyboardScrollView
        btnBottomCus={
          <>
            <View>
              <TextCus subtitle useI18n>
                cart.total
              </TextCus>
              {data?.length === 0 || selected.length === 0 ? (
                <TextCus bold orange useI18n>
                  cart.chooseProductTxt
                </TextCus>
              ) : (
                <TextCus bold orange>
                  {formatCurrency(calTotalCart)} đ
                </TextCus>
              )}
            </View>
            <Buttons
              style={styles.paymentBtn}
              disabled={Boolean(selected.length === 0)}
              onPress={() =>
                NavigationService.navigate(Routes.CartOrder, {
                  details: data?.filter(item => selected?.includes(item?.id)),
                  totalPrice: calTotalCart,
                })
              }>
              <TextCus bold useI18n>
                cart.payment
              </TextCus>
            </Buttons>
          </>
        }>
        <Flatlist
          data={data}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
          getItemType={(item: ICartDetails) => {
            return item.id;
          }}
        />
      </KeyboardScrollView>
    </WrapperLayout>
  );
};

const styles = StyleSheet.create({
  mb16: {
    marginBottom: 16,
  },
  spacingVertical16: {
    paddingVertical: 16,
  },
  paymentBtn: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});
export default Cart;
