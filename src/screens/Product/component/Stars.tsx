import {Images} from 'assets';
import {ImageCus} from 'components';
import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Colors} from 'theme';

interface IProps {
  count?: number;
  point: number;
}
const Stars: React.FC<IProps> = ({count = 5, point = 0}) => {
  return (
    <View style={styles.rating}>
      {Array(point)
        .fill(0)
        .map((_, i) => (
          <ImageCus
            key={i}
            style={styles.icStar}
            source={Images.star}
            resizeMode="contain"
          />
        ))}
      {Array(count - Number(point))
        .fill(0)
        .map((_, i) => (
          <ImageCus
            key={i}
            style={[styles.icStar]}
            source={Images.star}
            resizeMode="contain"
            tintColor={Colors.disabled}
          />
        ))}
    </View>
  );
};
const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
  },
  icStar: {
    width: 12,
    height: 12,
    marginRight: 3,
  },
});
export default Stars;
