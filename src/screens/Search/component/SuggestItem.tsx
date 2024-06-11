import {IconNames} from 'assets';
import {IconCus, TextCus, TouchCus} from 'components';
import {NavigationService, Routes} from 'navigation';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'theme';
import {ISuggestItem} from 'types';
interface IProps extends ISuggestItem {}
const SuggestItem: React.FC<IProps> = ({id, name}) => {
  return (
    <TouchCus
      key={`index_${id}`}
      onPress={() => {
        NavigationService.navigate(Routes.SearchResult, {keyword: name});
      }}
      style={styles.container}>
      <IconCus name={IconNames.SEARCH} size={16} color={Colors.white} />
      <TextCus ml-10 subtitle numberOfLines={1} ellipsizeMode="tail">
        {name}
      </TextCus>
    </TouchCus>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 4,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
  },
});
export default SuggestItem;
