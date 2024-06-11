import {TouchCus} from 'components';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Image, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors} from 'theme';
import {dimensions} from 'utils';
const {width} = dimensions;
interface IProps {
  renderHeader: React.ReactNode;
  renderContent: React.ReactNode;
  renderSubtitle: React.ReactNode;
  onPress: () => void;
  image: any;
  isChecked: Boolean;
}
const VariantProduct: React.FC<IProps> = ({
  renderHeader,
  renderContent,
  renderSubtitle,
  onPress,
  image,
  isChecked,
}) => {
  if (isChecked) {
    return null;
  }
  return (
    <View style={styles.container}>
      {renderHeader}
      <TouchCus style={styles.productChoose} onPress={onPress}>
        {image ? (
          <FastImage
            source={{uri: image}}
            style={styles.propertyImage}
            resizeMode="contain"
          />
        ) : null}
        <View style={styles.propertyInfo}>
          {renderContent}
          {renderSubtitle}
        </View>
        {/* <Image
          source={ic_back}
          style={[
            styles.icon,
            {transform: [{rotateZ: '180deg'}], tintColor: Colors.white},
          ]}
        /> */}
      </TouchCus>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  productChoose: {
    backgroundColor: Colors.bg_grey,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  propertyImage: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  propertyInfo: {
    marginLeft: 8,
    width: width - 124,
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: Colors.color_3a,
  },
});
export default VariantProduct;
