import React from 'react';
import {View} from 'react-native';
import {Divider} from 'react-native-paper';
import styles from './styles';
import {ImageCus, TextCus} from 'components';
import {formatCurrency} from 'utils';
import {ICartDetails} from 'types';
import {useTranslation} from 'react-i18next';

export interface IProps extends ICartDetails {}
export default function OrderItem(props: IProps) {
  const {t} = useTranslation();
  const {quantity, product, product_attribute_name, gift} = props;
  return (
    <View style={styles.mb12}>
      <Divider style={styles.mb12} />
      <View style={[styles.flexRow, styles.mb10]}>
        <View style={styles.wrpImage}>
          <ImageCus
            resizeMode="contain"
            source={{uri: product?.images?.[0]?.url}}
            style={styles.image}
          />
        </View>
        <View style={[styles.flx, styles.ml8]}>
          <TextCus subtitle bold style={styles.mb12}>
            {quantity}x{product?.name}
          </TextCus>
          {product_attribute_name && (
            <TextCus subtitle>{product_attribute_name}</TextCus>
          )}
          <TextCus bold>
            {formatCurrency(product.price_after_discount)}đ
          </TextCus>
        </View>
      </View>
      {gift?.id ? (
        <>
          <TextCus bold style={styles.mb8}>
            Quà tặng
          </TextCus>
          <TextCus subtitle bold>
            {gift?.name}
          </TextCus>
          <TextCus subtitle>
            {t('value', {price: gift?.price_after_discount})}
          </TextCus>
        </>
      ) : null}
    </View>
  );
}
