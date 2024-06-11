import React, {useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {Checkbox, IconApp, ImageCus, TextCus, TouchCus} from 'components';
import {IconNames} from 'assets';
import {BaseStyle, Colors} from 'theme';
import {Divider} from 'react-native-paper';
import {ICartDetails} from 'types';
import {formatCurrency} from 'utils';
import {useTranslation} from 'react-i18next';
import {useCart} from 'hooks';

export interface IProps extends ICartDetails {
  selected: number[];
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
  setData: React.Dispatch<React.SetStateAction<ICartDetails[]>>;
  data: ICartDetails[];
}
const debounce = (func, wait = 200) => {
  let timeout; // for the setTimeout function and so it can be cleared
  function executedFunction(...args) {
    // the function returned from debounce
    const later = () => {
      // this is the delayed function
      clearTimeout(timeout); // clears the timeout when the function is called
      func(...args); // calls the function
    };
    clearTimeout(timeout); // this clears the timeout each time the function is run again preventing later from running until we stop calling the function
    timeout = setTimeout(later, wait); // this sets the time out to run after the wait period
  }
  executedFunction.cancel = function () {
    // so can be cancelled
    clearTimeout(timeout); // clears the timeout
  };
  return executedFunction;
};
const CartItem: React.FC<IProps> = ({
  product,
  product_attribute_name,
  gift,
  selected,
  setSelected,
  id,
  quantity,
  setData,
  data,
}) => {
  const {t} = useTranslation();
  const {updateQuantityCart} = useCart();
  const decreaseCountValue = useCallback(
    (productId: number) => {
      setData(p =>
        p.map(i => (i.id === productId ? {...i, quantity: i.quantity - 1} : i)),
      );
      const countValue = data?.find(p => p.id === productId)?.quantity - 1;
      updateQuantityCart({
        cart_detail_id: productId,
        quantity: countValue,
      });
    },
    [data, setData, updateQuantityCart],
  );
  const increaseCountValue = useCallback(
    (productId: number) => {
      setData(p =>
        p.map(i => (i.id === productId ? {...i, quantity: i.quantity + 1} : i)),
      );
      const countValue = data?.find(p => p.id === productId)?.quantity + 1;
      updateQuantityCart({
        cart_detail_id: productId,
        quantity: countValue,
      });
    },
    [data, setData, updateQuantityCart],
  );

  return (
    <>
      <View style={styles.spacingVertical12}>
        <View style={[styles.flexRow, styles.alignCenter]}>
          <Checkbox
            title=""
            onChange={() => {
              if (!selected.includes(id)) {
                setSelected(p => p.concat(id));
              } else {
                setSelected(p => p.filter(i => i !== id));
              }
            }}
            value={selected?.includes(id)}
            noBackground
          />
          <View style={styles.mH12}>
            <ImageCus
              source={{uri: product?.images?.[0].url}}
              style={styles.image}
            />
          </View>
          <View style={styles.flx1}>
            <TextCus bold numberOfLines={1}>
              {product?.name}
            </TextCus>
            <TextCus subtitle>{product_attribute_name}</TextCus>
            <View
              style={[
                styles.flexRow,
                styles.justBetween,
                styles.spacingVertical12,
              ]}>
              <View>
                <TextCus
                  subtitle
                  textAlign="right"
                  style={[BaseStyle.lineThrought]}>
                  {formatCurrency(product?.price)}đ
                </TextCus>
                <TextCus bold textAlign="right">
                  {formatCurrency(product?.price_after_discount)}đ
                </TextCus>
              </View>
              <View style={styles.actionPrice}>
                <TouchCus
                  onPress={() => decreaseCountValue(id)}
                  activeOpacity={0.8}>
                  <IconApp
                    name={IconNames.MINUS}
                    style={[
                      {
                        color: quantity > 1 ? Colors.main : Colors.disabled,
                      },
                    ]}
                    size={24}
                  />
                </TouchCus>
                <TextCus mx-12 bold style={styles.countValue}>
                  {quantity}
                </TextCus>
                <TouchCus
                  onPress={() => increaseCountValue(id)}
                  activeOpacity={0.8}>
                  <IconApp
                    name={IconNames.PLUS}
                    style={[
                      {
                        color: Colors.main,
                      },
                    ]}
                    size={24}
                  />
                </TouchCus>
              </View>
            </View>
          </View>
        </View>
        {gift?.id ? (
          <>
            <TextCus bold style={styles.mb4} useI18n>
              gift
            </TextCus>
            <TextCus bold subtitle>
              {gift?.name}
            </TextCus>
            <TextCus subtitle>
              {t('value', {price: formatCurrency(gift.price_after_discount)})}
            </TextCus>
          </>
        ) : null}
      </View>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  countValue: {
    width: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  actionPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mb4: {
    marginBottom: 4,
  },
  mb16: {
    marginBottom: 16,
  },
  mH12: {
    marginHorizontal: 12,
  },
  spacingVertical12: {
    paddingVertical: 12,
  },
  spacingVertical16: {
    paddingVertical: 16,
  },
  flx1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  justBetween: {
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
});
export default CartItem;
