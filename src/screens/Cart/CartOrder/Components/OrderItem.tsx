import React from 'react';
import {View} from 'react-native';
import {Divider} from 'react-native-paper';
import styles from './styless';
import {ImageCus, TextCus} from 'components';
import {formatCurrency} from 'utils';

export interface IOrderItem {
  image?: any;
  quantity?: number;
  attributes: string;
  name: string;
  price: number;
  giftName?: string;
  giftValue?: string;
}
export default function OrderItem(props: IOrderItem) {
  const {image, quantity, attributes, name, price, giftName, giftValue} = props;
  return (
    <View style={styles.mb12}>
      <Divider style={styles.mb12} />
      <>
        <View style={[styles.flexRow, styles.mb10]}>
          <View style={styles.wrpImage}>
            <ImageCus
              resizeMode="contain"
              source={image}
              style={styles.image}
            />
          </View>
          <View style={[styles.flx, styles.ml8]}>
            <TextCus subtitle bold style={styles.mb12}>
              {quantity} x {name}
            </TextCus>
            {attributes && <TextCus subtitle>{attributes}</TextCus>}
            <TextCus bold>{formatCurrency(price)}</TextCus>
          </View>
        </View>
        <TextCus bold style={styles.mb8}>
          Quà tặng
        </TextCus>
        <TextCus subtitle bold>
          {giftName}
        </TextCus>
        <TextCus subtitle>Trị giá: {giftValue}</TextCus>
      </>
    </View>
  );
}
