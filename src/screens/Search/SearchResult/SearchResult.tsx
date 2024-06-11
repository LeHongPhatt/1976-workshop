import React, {useCallback, useEffect, useState} from 'react';
import {
  Badge,
  Flatlist,
  TextCus,
  WrapperLayout,
  ListSort,
  ProductItem,
  TouchCus,
} from 'components';
import {TextInput, View, StyleSheet} from 'react-native';
import {IconNames} from 'assets';
import {NavigationService, Routes} from 'navigation';
import {IProductItem, RootStackParamList, listSorts} from 'types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useSearch} from 'hooks';
import {styleSpacing, dimensions} from 'utils';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'assets/svg/Icon';
const {width} = dimensions;
const SearchResult: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'SearchResult'>>();
  const [query, setQuery] = useState({
    page: 1,
    limit: 10,
  });
  const [sort, setSort] = useState<any>({});
  const {getListProducts, loading, products} = useSearch();
  useEffect(() => {
    getListProducts({...query, ...route?.params, ...sort});
  }, [getListProducts, query, route?.params, sort]);
  const onGoToProductDetail = useCallback((item: IProductItem) => {
    NavigationService.navigate(Routes.Product, {
      productId: item.id,
      attributeName: item?.product_price?.[0]?.attribute_name,
    });
  }, []);
  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <ProductItem
          item={item}
          key={index}
          onPress={() => onGoToProductDetail(item)}
        />
      );
    },
    [onGoToProductDetail],
  );
  const renderHeader = useCallback(() => {
    return (
      <View style={[{marginVertical: 16}]}>
        <ListSort
          data={listSorts}
          onPress={item => {
            if (!item) {
              setSort({});
              return;
            }
            const value = {
              [item?.key]: item?.[item?.key ?? ''],
            };
            setSort(value);
          }}
        />
      </View>
    );
  }, []);
  return (
    <WrapperLayout
      header={{
        renderCenter: () => (
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              placeholder="Tìm kiếm"
              placeholderTextColor={Colors.white}
              value={route.params?.keyword}
              editable={false}
            />
            <TouchCus
              onPress={() => NavigationService.goBack()}
              style={styles.clearText}>
              <Icon.Close color={Colors.white} />
            </TouchCus>
          </View>
        ),
        renderRight: () => (
          <Badge
            number={10}
            icon={IconNames.CART}
            onPress={() => NavigationService.navigate(Routes.Cart)}
            size={24}
          />
        ),
      }}>
      <Flatlist
        data={products}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        numColumns={2}
        horizontal={false}
        stickyHeaderIndices={[0]}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        getItemType={item => {
          return item?.id;
        }}
        contentContainerStyle={{...styleSpacing('px-10')}}
      />
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: width / 1.3,
    borderRadius: 4,
    borderColor: Colors.white,
    paddingVertical: 5,
    paddingHorizontal: 16,
    color: Colors.white,
  },
  wrapperInput: {
    position: 'relative',
  },
  clearText: {
    position: 'absolute',
    right: 7,
    top: 3,
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: 99,
    padding: 5,
  },
});
export default SearchResult;
