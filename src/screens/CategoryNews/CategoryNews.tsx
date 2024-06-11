import {RouteProp, useIsFocused, useRoute} from '@react-navigation/native';
import {Flatlist, NewsItem, WrapperLayout} from 'components';
import {useNews} from 'hooks';
import {NavigationService, Routes} from 'navigation';
import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {RootStackParamList} from 'types';

const CategoryNews: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'CategoryNews'>>();
  const {getListCategoryNews, loading, listCategoryNews} = useNews();
  const isFocused = useIsFocused();
  const [query, setQuery] = useState({
    page: 1,
    limit: 10,
  });
  useEffect(() => {
    if (isFocused && route.params.newsId) {
      getListCategoryNews({...query, category_id: +route.params.newsId});
    }
  }, [getListCategoryNews, isFocused, query, route.params.newsId]);
  const renderItem = useCallback(({item}, idx) => {
    return (
      <NewsItem
        key={idx}
        {...item}
        onPress={() =>
          NavigationService.navigate(Routes.DetailNews, {
            newsId: item.id,
          })
        }
      />
    );
  }, []);
  return (
    <WrapperLayout
      header={{
        showCenter: true,
        title: route?.params?.title,
      }}>
      <View style={{padding: 16, flex: 1}}>
        <Flatlist data={listCategoryNews} renderItem={renderItem} />
      </View>
    </WrapperLayout>
  );
};
export default CategoryNews;
