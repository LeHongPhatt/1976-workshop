import React, {useState, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import Checkbox from '../CartOrder/Components/Checkbox';
import {IconApp, ImageCus, TextCus, TouchCus} from 'components';
import {IconNames, Images} from 'assets';
import {Colors} from 'theme';
import {Divider} from 'react-native-paper';

export interface ICartItem {
  onPress?: () => void;
  image?: string;
  name?: string;
  attributes: string;
  price?: number;
  priceDiscount?: number;
  gift?: object;
}

export default function CartItem() {
  const [countValue, setCountValue] = useState<number>(1);
  const decreaseCountValue = useCallback(() => {
    if (countValue > 1) {
      setCountValue(countValue - 1);
    }
  }, [countValue]);
  const increaseCountValue = useCallback(() => {
    setCountValue(countValue + 1);
  }, [countValue]);
  return (
    <>
      <View style={styles.spacingVertical12}>
        <View style={[styles.flexRow, styles.alignCenter]}>
          <Checkbox onChange={() => {}} />
          <View style={styles.mH12}>
            <ImageCus source={Images.motocycle} style={styles.image} />
          </View>
          <View style={styles.flx1}>
            <TextCus bold numberOfLines={1}>
              Sinh tố Kiwi Berrino
            </TextCus>
            <TextCus subtitle>Cam / 150ml</TextCus>
            <View
              style={[
                styles.flexRow,
                styles.justBetween,
                styles.spacingVertical12,
              ]}>
              <View>
                <TextCus subtitle textAlign="right">
                  3.900.000đ
                </TextCus>
                <TextCus bold textAlign="right">
                  2.000.000đ
                </TextCus>
              </View>
              <View style={styles.actionPrice}>
                <TouchCus onPress={decreaseCountValue} activeOpacity={0.8}>
                  <IconApp
                    name={IconNames.MINUS}
                    style={[
                      {
                        color: countValue > 1 ? Colors.main : Colors.disabled,
                      },
                    ]}
                    size={24}
                  />
                </TouchCus>
                <TextCus mx-12 bold style={styles.countValue}>
                  {countValue}
                </TextCus>
                <TouchCus onPress={increaseCountValue} activeOpacity={0.8}>
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
        <>
          <TextCus bold style={styles.mb4}>
            Quà tặng
          </TextCus>
          <TextCus bold subtitle>
            Cà Phê Rang Mộc Chuyên Biệt Cho Pha Máy
          </TextCus>
          <TextCus subtitle>Trị giá: 130.000₫</TextCus>
        </>
      </View>
      <Divider />
    </>
  );
}

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
