import {Images} from 'assets';
import {ImageCus, LinearGradientCus, TextCus} from 'components';
import React from 'react';
import {View} from 'react-native';
import styles from 'screens/Accessories/styles';
import {formatCurrency, getHeight} from 'utils';

export interface IProductItem {
  image?: string;
  promoPrice?: string;
  price?: string;
  name?: string;
  content?: string;
  subContent?: string;
}

export default function ProductItem(props: IProductItem) {
  const {
    image = Images.cover,
    promoPrice = formatCurrency({value: 4561234}),
    price = formatCurrency({value: 98765465}),
    name = 'Harley Davidson',
    content = 'Vehicle Parts & Accessories Motorcycle Parts Kuryakyn Harley Davidson',
    subContent = '1 kg Cà Phê Rang Mộc Chuyên Biệt Cho Pha Máy',
  } = props;
  return (
    <LinearGradientCus styleLinear={styles.card}>
      <View style={styles.imgCard}>
        <ImageCus source={image} style={styles.img} />
      </View>
      <View style={styles.contentCard}>
        <View style={styles.price}>
          <TextCus subtitle orange bold>
            {promoPrice}
          </TextCus>
          <TextCus caption bold>
            {price}
          </TextCus>
        </View>
        <View style={getHeight(8)} />
        <TextCus heading6 orange bold>
          {name}
        </TextCus>
        <View style={getHeight(8)} />
        <TextCus subtitle numberOfLines={2}>
          {content}
        </TextCus>
        <View style={getHeight(8)} />
        <View style={styles.subContent}>
          <TextCus caption numberOfLines={1}>
            {subContent}
          </TextCus>
        </View>
      </View>
    </LinearGradientCus>
  );
}
