import {LinearGradientCus, TextCus, TouchCus} from 'components';
import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {BaseStyle, Colors} from 'theme';
import {IProductItem} from 'types';
import {formatCurrency} from 'utils';
interface IProps {
  onPress: () => void;
  item: IProductItem;
  key: number;
}
const linear = {
  start: {x: 1, y: 0.5},
  end: {x: 0.8, y: 1},
  locations: [0, 1],
  colors: ['#515159', '#252528'],
};
const ProductItem: React.FC<IProps> = ({item, onPress}) => {
  const promotion = useMemo(() => {
    return item?.gifts?.map(gift => gift.name).join(',') ?? '';
  }, [item?.gifts]);
  return (
    <TouchCus onPress={onPress} style={styles.container}>
      <LinearGradientCus linear={linear} styleLinear={[styles.linear]}>
        <View style={styles.imageWrapper}>
          <FastImage
            source={{uri: item?.images?.[0]?.url}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.productInfo}>
          <View style={styles.priceRow}>
            <TextCus orange error subtitle bold numberOfLines={1}>
              {formatCurrency(item?.price_after_discount)}đ
            </TextCus>
            {item.discount > 0 ? (
              <TextCus caption style={[BaseStyle.lineThrought]}>
                {formatCurrency(item?.price)}đ
              </TextCus>
            ) : null}
          </View>
          <TextCus orange bold numberOfLines={2} mt-4 mb-4>
            {item?.brand_name}
          </TextCus>
          <TextCus subtitle bold numberOfLines={2} mt-4 mb-4>
            {item?.name}
          </TextCus>

          {promotion ? (
            <View style={styles.giftContainer}>
              <TextCus numberOfLines={1} caption>
                {promotion}
              </TextCus>
            </View>
          ) : null}
        </View>
      </LinearGradientCus>
    </TouchCus>
  );
};
const styles = StyleSheet.create({
  container: {
    ...BaseStyle.boxShadow,
    backgroundColor: Colors.black,
    marginHorizontal: 6,
    flex: 1,
  },
  linear: {
    ...BaseStyle.boxShadow,
    borderRadius: 8,
    shadowColor: Colors.white,
  },
  imageWrapper: {
    aspectRatio: 1,
    height: 165,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  giftContainer: {
    marginVertical: 4,
    padding: 4,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.main,
    borderStyle: 'dashed',
  },
  productInfo: {
    padding: 8,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default ProductItem;
