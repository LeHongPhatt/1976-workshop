import React from 'react';
import {TextCus, TouchCus} from 'components';
import {StyleSheet, View} from 'react-native';
import {Colors, FontWeight} from 'theme';
interface IProps {
  Id: string;
  Name: string;
  Level: number;
  onPress: () => void;
  selected: string;
}
const AddressItem: React.FC<IProps> = ({Id, Name, onPress, selected}) => {
  return (
    <TouchCus onPress={onPress} key={Id}>
      <View style={[styles.container, selected === Name && styles.active]}>
        <TextCus
          heading6
          style={[selected === Name ? {fontWeight: FontWeight.bold} : {}]}>
          {Name}
        </TextCus>
      </View>
    </TouchCus>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    padding: 10,
  },
  active: {
    backgroundColor: Colors.bg_grey,
  },
});
export default AddressItem;
