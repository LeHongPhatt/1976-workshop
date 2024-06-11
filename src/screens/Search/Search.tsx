import {IconNames} from 'assets';
import {Badge, Flatlist, TextCus, WrapperLayout} from 'components';
import {useCart, useDebounce, useSearch} from 'hooks';
import {NavigationService, Routes} from 'navigation';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {Colors} from 'theme';
import {ISuggestItem} from 'types';
import {dimensions, styleSpacing} from 'utils';
import {SuggestItem, TagItem} from './component';
import {useNavigation} from '@react-navigation/native';
const {width} = dimensions;
const Search: React.FC = () => {
  const navigation = useNavigation();
  const {getListTags, tags, getListSuggests} = useSearch();
  const [searchValue, setSearchValue] = useState('');
  const {debouncedValue} = useDebounce(searchValue);
  const [focusSearch, setFocusSearch] = useState(false);
  const {cart} = useCart();
  const [query, setQuery] = useState({
    limit: 10,
    page: 1,
  });
  const [data, setData] = useState<ISuggestItem[]>([]);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setSearchValue('');
    });

    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    getListTags();
  }, [getListTags]);

  useEffect(() => {
    if (!searchValue) {
      return setData([]);
    }
    getListSuggests(
      {...query, keyword: debouncedValue},
      (res: ISuggestItem[]) => {
        setData(res);
      },
    );
  }, [searchValue, debouncedValue, getListSuggests, query]);
  return (
    <WrapperLayout
      header={{
        style: {
          alignItems: 'center',
        },
        renderCenter: () => (
          <TextInput
            style={styles.input}
            placeholder="Tìm kiếm"
            placeholderTextColor={Colors.white}
            onChangeText={setSearchValue}
            onSubmitEditing={e => {
              NavigationService.navigate(Routes.SearchResult, {
                keyword: e.nativeEvent.text,
              });
            }}
            value={searchValue}
            onFocus={() => setFocusSearch(true)}
            onBlur={() => setFocusSearch(false)}
          />
        ),
        renderRight: () => (
          <Badge
            number={cart?.details?.length}
            icon={IconNames.CART}
            onPress={() => NavigationService.navigate(Routes.Cart)}
            size={24}
          />
        ),
      }}>
      <ScrollView style={styles.container}>
        {!focusSearch ? (
          <>
            <TextCus ml-4 mb-8 useI18n>
              hot_search
            </TextCus>
            <View style={styles.wrapperContent}>
              {tags.map((item, index) => (
                <TagItem {...item} key={index} />
              ))}
            </View>
          </>
        ) : (
          <Flatlist
            data={data}
            renderItem={({item, index}) => (
              <SuggestItem {...item} key={index} />
            )}
          />
        )}
      </ScrollView>
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginHorizontal: 8,
    marginVertical: 16,
  },
  wrapperContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  input: {
    borderWidth: 1,
    width: width / 1.3,
    borderRadius: 4,
    borderColor: Colors.white,
    paddingVertical: 5,
    paddingHorizontal: 16,
    color: Colors.white,
  },
  content: {
    ...styleSpacing('mb-10'),
    padding: 0,
  },
});
export default Search;
