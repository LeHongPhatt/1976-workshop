import Icon from 'assets/svg/Icon';
import {TextCus} from 'components';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {styleSpacing} from 'utils';
import {OrderStatus} from '../OrderStatus';
import {PaymentStatus} from '../PaymentStatus';
import {Colors} from 'theme';
import {TouchableWithoutFeedback} from 'react-native';

export interface IOrderItem {
  time: string;
  quantity: string;
  orderStatus: string;
  paymentStatus: string;
  price: string;
  progress: string;
  onPress: () => void;
}
export default function OrderItem(props: IOrderItem) {
  const {
    time = '17h21 20/09/2022',
    quantity = 6,
    price = '3.100.000₫',
    orderStatus,
    paymentStatus,
    progress = '20%',
    onPress,
  } = props;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.spacing8,
          styles.bgCard,
          styles.rounded,
          {...styleSpacing('mb-12')},
        ]}>
        <View style={[styles.flexRow]}>
          <View style={styles.col6}>
            <View
              style={[
                styles.alignSeftStart,
                styles.bgLightOrange,
                styles.rounded,
                {...styleSpacing('px-10')},
              ]}>
              <TextCus caption orange useI18n>
                Đơn hàng
              </TextCus>
            </View>
            <TextCus bold mt-28>
              #421094
            </TextCus>
          </View>
          <View style={[{...styleSpacing('px-8')}, styles.divider]} />
          <View style={styles.col6}>
            <View style={[styles.flexRow, styles.justBetween]}>
              <View
                style={[
                  {...styleSpacing('px-10')},
                  styles.rounded,
                  styles.bgMain,
                ]}>
                <TextCus caption useI18n>
                  Thời gian đặt
                </TextCus>
              </View>
              <TextCus caption useI18n>
                {time}
              </TextCus>
            </View>
            <View style={[{...styleSpacing('mb-12')}]} />
            <View style={[styles.flexRow, styles.alignCenter]}>
              <View style={[styles.spacing4, styles.bgMain, styles.circle]}>
                <Icon.Product />
              </View>
              <TextCus subtitle ml-8 useI18n>
                {quantity} sản phẩm
              </TextCus>
            </View>
            <View style={[{...styleSpacing('mb-12')}]} />
            <View style={[styles.flexRow, styles.alignCenter]}>
              <View style={[styles.spacing4, styles.bgMain, styles.circle]}>
                <Icon.Dolar />
              </View>
              <TextCus bold orange subtitle ml-8 useI18n>
                {price}
              </TextCus>
            </View>
          </View>
        </View>
        <View style={[{...styleSpacing('mt-12')}]} />
        <View
          style={[
            styles.rounded,
            {backgroundColor: Colors.white},
            styles.h1,
            styles.poRela,
          ]}>
          <View
            style={[
              styles.rounded,
              styles.bgMain,
              styles.h1,
              styles.poAbso,
              {width: progress},
            ]}
          />
          <View
            style={[
              styles.rounded,
              styles.bgMain,
              styles.circleSlider,
              styles.poAbso,
              {left: progress},
            ]}
          />
        </View>
        <View style={[{...styleSpacing('mb-12')}]} />
        <View style={[styles.flexRow, styles.justBetween]}>
          <OrderStatus status={orderStatus} />
          <PaymentStatus status={paymentStatus} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  justBetween: {
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignSeftStart: {
    alignSelf: 'flex-start',
  },
  spacing4: {
    padding: 4,
  },
  spacing8: {
    padding: 8,
  },
  bgLightOrange: {
    backgroundColor: Colors.color_f9,
  },
  bgMain: {
    backgroundColor: Colors.main,
  },
  rounded: {
    borderRadius: 8,
  },
  circle: {
    borderRadius: 40,
  },
  col6: {
    width: '50%',
    flex: 1,
  },
  divider: {
    borderLeftColor: Colors.white,
    borderLeftWidth: 1,
  },
  bgCard: {
    backgroundColor: Colors.bg_grey,
  },
  h1: {
    height: 1,
  },
  circleSlider: {
    height: 8,
    width: 8,
    top: -3.25,
  },
  poRela: {
    position: 'relative',
  },
  poAbso: {
    position: 'absolute',
  },
});
