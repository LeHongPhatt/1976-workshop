import {
  Badge,
  Flatlist,
  ListSort,
  ProductItem,
  TabHeader,
  WrapperLayout,
} from 'components';
import {useCart, useProduct} from 'hooks';
import {NavigationService, Routes} from 'navigation';
import {IconNames} from 'assets';
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {StyleSheet, View} from 'react-native';
import {Detail, IProductItem, RootStackParamList, listSorts} from 'types';
import {styleSpacing} from 'utils';
import {useRoute, RouteProp} from '@react-navigation/native';

const Category: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Category'>>();
  const [sort, setSort] = useState({});
  const {
    loading,
    getListCategories,
    category,
    getListAllProducts,
    products,
    getListCategoryProducts,
  } = useProduct();
  const {cart} = useCart();
  const [chooseCategory, setChooseCategory] = useState<number>(0);
  const [query, setQuery] = useState({
    limit: 10,
    page: 1,
  });
  useEffect(() => {
    getListCategories(route.params.categoryId);
  }, [getListCategories, route.params.categoryId]);

  useEffect(() => {
    if (chooseCategory === 0) {
      return getListAllProducts({
        ...query,
        categoryId: +route.params.categoryId,
        ...sort,
      });
    }
    getListCategoryProducts({...query, categoryId: chooseCategory});
  }, [
    chooseCategory,
    getListAllProducts,
    getListCategoryProducts,
    query,
    route.params.categoryId,
    sort,
  ]);

  const categories = useMemo(() => {
    return [{id: 0, name: 'Tất cả'}, ...(category?.details ?? [])] as Detail[];
  }, [category?.details]);

  const onPullDown = useCallback(() => {
    setQuery(prev => ({...prev, page: 1}));
  }, []);
  const onGoToProductDetail = useCallback((item: IProductItem) => {
    NavigationService.navigate(Routes.Product, {
      productId: item.id,
      attributeName: item?.product_price?.[0]?.attribute_name,
    });
  }, []);
  return (
    <WrapperLayout
      header={{
        title: category?.name,
        renderRight: () => (
          <View style={styles.flexRow}>
            <Badge
              icon={IconNames.SEARCH}
              size={22}
              styleBagde={[{...styleSpacing('mr-10')}]}
              onPress={() => NavigationService.navigate(Routes.Search)}
            />
            <Badge
              number={cart?.details?.length}
              icon={IconNames.CART}
              size={24}
              onPress={() => NavigationService.navigate(Routes.Cart)}
            />
          </View>
        ),
      }}>
      <Fragment>
        <View style={styles.spacing10}>
          <TabHeader
            data={categories}
            onPress={item => setChooseCategory(item.id)}
            chooseCategory={chooseCategory}
          />
        </View>
        <View style={styles.spacing}>
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
        <Flatlist
          data={products as IProductItem[]}
          renderItem={({item, index}) => (
            <ProductItem
              item={item}
              key={index}
              onPress={() => onGoToProductDetail(item)}
            />
          )}
          numColumns={2}
          contentContainerStyle={styles.spacingH10}
          ItemSeparatorComponent={() => <View style={styles.h10} />}
          onPullDown={onPullDown}
        />
      </Fragment>
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  spacing10: {
    paddingVertical: 10,
  },
  spacing: {
    marginTop: 10,
    marginBottom: 15,
  },
  spacingH10: {
    ...styleSpacing('px-10'),
  },
  h10: {
    height: 10,
  },
  flexRow: {
    flexDirection: 'row',
  },
});
export default Category;
