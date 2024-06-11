import React from 'react';
import {TextCus, TouchCus} from 'components';
import {StyleSheet} from 'react-native';
import {ITagItem} from 'types';
import {Colors} from 'theme';
import {NavigationService, Routes} from 'navigation';

interface IProps extends ITagItem {}

const TagItem: React.FC<IProps> = ({id, keyword}) => {
  return (
    <TouchCus
      onPress={() =>
        NavigationService.navigate(Routes.SearchResult, {
          keyword,
        })
      }
      style={styles.container}
      key={id}>
      <TextCus subtitle style={{color: Colors.color_84}}>
        {keyword}
      </TextCus>
    </TouchCus>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.color_84,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 4,
    marginBottom: 8,
  },
});
export default TagItem;
