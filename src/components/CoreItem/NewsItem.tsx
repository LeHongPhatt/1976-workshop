import {LinearGradientCus, TextCus, TouchCus} from 'components';
import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {BaseStyle, Colors} from 'theme';
interface IProps {
  id: string;
  thumbnail: string;
  title: string;
  onPress: () => void;
}
const NewsSkeletonItem: React.FC<IProps> = ({
  id,
  thumbnail,
  title,
  onPress,
}) => {
  return (
    <TouchCus
      key={id}
      onPress={onPress}
      style={styles.boxShadow}
      activeOpacity={0.8}>
      <LinearGradientCus styleLinear={[styles.newContainer]}>
        <FastImage style={styles.itemImage} source={{uri: thumbnail}} />
        <TextCus style={styles.itemTitle} numberOfLines={2}>
          {title}
        </TextCus>
      </LinearGradientCus>
    </TouchCus>
  );
};
const styles = StyleSheet.create({
  boxShadow: {
    ...BaseStyle.boxShadow,
    backgroundColor: Colors.black,
    borderRadius: 16,
    marginBottom: 10,
  },
  newContainer: {
    ...BaseStyle.boxShadow,
    borderRadius: 16,
    shadowColor: Colors.white,
  },
  itemImage: {
    height: 165,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    lineHeight: 24,
  },
});
export default NewsSkeletonItem;
