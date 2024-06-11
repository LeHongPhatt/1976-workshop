import {useIsFocused} from '@react-navigation/native';
import {Flatlist, NewsItem, WrapperLayout} from 'components';
import {useNews} from 'hooks';
import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';

const News: React.FC = () => {
  const {getListAllNews, listAllNews} = useNews();
  const isFocused = useIsFocused();
  const [query, setQuery] = useState({
    page: 1,
    limit: 10,
  });
  useEffect(() => {
    isFocused && getListAllNews({...query});
  }, [getListAllNews, isFocused, query]);
  const renderItem = useCallback(({item, idx}) => {
    return <NewsItem key={idx} {...item} />;
  }, []);
  return (
    <WrapperLayout
      header={{
        notGoBack: true,
        showCenter: true,
        title: 'account.main',
      }}>
      <View style={{padding: 16, flex: 1}}>
        <Flatlist data={listAllNews} renderItem={renderItem} />
      </View>
    </WrapperLayout>
  );
};
export default News;
