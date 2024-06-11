import {LinearGradientCus, TouchCus} from 'components';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Colors} from 'theme';
interface IProps {
  id: number;
  thumbnail: string;
  title: string;
}
const NewsSkeletonItem: React.FC<IProps> = ({id, thumbnail, title}) => {
  return (
    <SkeletonPlaceholder borderRadius={4} enabled={false} speed={1000}>
      <TouchCus key={id} onPress={() => {}} style={styles.boxShadow}>
        <LinearGradientCus styleLinear={[styles.newContainer]}>
          <FastImage style={styles.itemImage} source={{uri: thumbnail}} />
          <Text style={styles.itemTitle} numberOfLines={2}>
            {title}
          </Text>
        </LinearGradientCus>
      </TouchCus>
    </SkeletonPlaceholder>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  boxShadow: {
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  newContainer: {
    borderRadius: 16,
    marginBottom: 10,
    marginTop: 1,
    marginLeft: 1,
    paddingBottom: 8,
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
    fontSize: 14,
    color: Colors.white,
    paddingHorizontal: 16,
    paddingTop: 16,
    lineHeight: 24,
  },
});
export default NewsSkeletonItem;
