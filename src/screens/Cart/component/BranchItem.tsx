import {ImageCus, TextCus, TouchCus} from 'components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'theme';
import {IBranch} from 'types';
interface IProps extends IBranch {
  onPress: () => void;
}

const BranchItem: React.FC<IProps> = ({
  image,
  name,
  address,
  district,
  city,
  distance,
  ward,
  onPress,
}) => {
  return (
    <TouchCus style={styles.itemContainer} onPress={onPress}>
      <ImageCus source={{uri: image}} style={styles.itemImage} />
      <View style={styles.infoWrapper}>
        <TextCus bold>{name}</TextCus>
        <TextCus
          subtitle>{`${address}, ${ward}, ${district}, ${city}`}</TextCus>
        <TextCus subtitle orange>
          {distance} km
        </TextCus>
      </View>
    </TouchCus>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gallery,
  },
  itemImage: {
    width: 42,
    height: 42,
    marginRight: 12,
    alignSelf: 'flex-start',
  },
  infoWrapper: {
    flex: 1,
  },

  itemDistance: {
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 2,
  },
});
export default BranchItem;
