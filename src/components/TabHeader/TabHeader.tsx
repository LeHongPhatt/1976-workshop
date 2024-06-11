import React, {useCallback} from 'react';
import {TextCus, TouchCus} from 'components';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native';
import {Colors, FontWeight} from 'theme';
import {Detail} from 'types';
interface IProps {
  onPress: (item) => void;
  data: Detail[];
  chooseCategory: number;
}
const TabHeader: React.FC<IProps> = ({data, onPress, chooseCategory}) => {
  const _renderItem = useCallback(
    (item: Detail, index: number) => {
      const isActive = chooseCategory === item?.id;
      return (
        <TouchCus
          key={index}
          onPress={() => onPress(item)}
          style={[
            styles.container,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              borderBottomColor: isActive ? Colors.main : 'transparent',
            },
          ]}>
          <TextCus
            subtitle
            style={[
              {
                fontWeight: isActive ? FontWeight.bold : FontWeight.regular,
                color: isActive ? Colors.main : Colors.color_84,
              },
            ]}>
            {item?.name}
          </TextCus>
        </TouchCus>
      );
    },
    [chooseCategory, onPress],
  );
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => _renderItem(item, index)}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={keyExtractor}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    marginHorizontal: 12,
    borderBottomWidth: 2,
  },
});
export default TabHeader;
