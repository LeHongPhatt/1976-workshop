import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ImageCus, TextCus, TouchCus} from 'components';
import {Colors} from 'theme';
import {dimensions, formatCurrency} from 'utils';
import {Images} from 'assets';
const {width} = dimensions;
interface IProps {
  variant: any;
  isChoose: boolean;
  onPress: () => void;
}
const VariantItem: React.FC<IProps> = ({variant, isChoose, onPress}) => {
  console.log('variant', variant);
  return (
    <TouchCus
      onPress={onPress}
      style={styles.container(variant?.images || variant.image, isChoose)}>
      {variant?.images || variant.image ? (
        <ImageCus
          style={styles.propertyImg}
          source={{uri: variant?.images?.[0]?.url || variant.image}}
          resizeMode="cover"
        />
      ) : null}
      {isChoose ? (
        <ImageCus
          style={styles.icVariantCheck}
          source={Images.icVariantCheck}
          resizeMode="cover"
        />
      ) : null}
      <View style={styles.contentGift}>
        <TextCus style={styles.itemGiftTitle} numberOfLines={1}>
          {variant?.name}
        </TextCus>
        {variant?.price ? (
          <TextCus style={styles.itemGiftTitle} numberOfLines={1}>
            Trị giá: {formatCurrency(variant?.price)}đ
          </TextCus>
        ) : null}
      </View>
    </TouchCus>
  );
};
const styles = StyleSheet.create({
  container: (image, isChoose) => ({
    backgroundColor: isChoose ? '#F9C9AC' : '#515159',
    borderWidth: 1,
    borderColor: isChoose ? '#F47121' : Colors.white,
    borderRadius: 4,
    position: 'relative',
    marginHorizontal: 6,
    width: width / 2 - 19,
    flexDirection: 'row',
    ...(image ? {} : {paddingHorizontal: 8}),
  }),
  icVariantCheck: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  propertyImg: {
    width: 48,
    height: 48,
  },
  contentGift: {
    flex: 1,
    padding: 4,
    justifyContent: 'center',
  },
  itemGiftTitle: {
    lineHeight: 20,
    fontSize: 12,
  },
});
export default VariantItem;
