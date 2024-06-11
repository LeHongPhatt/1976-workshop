import {RouteProp, useRoute} from '@react-navigation/native';
import {Flatlist, WrapperLayout} from 'components';
import {useCartOrder} from 'hooks';
import React, {useCallback, useEffect, useState} from 'react';
import {RootStackParamList} from 'types';
import {BranchItem} from '../component';

const Branch = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Branch'>>();
  const [query, setQuery] = useState({
    page: 1,
    limit: 10,
  });
  const {getListBranch, branchs} = useCartOrder();
  useEffect(() => {
    getListBranch({...query, ...route.params});
  }, [getListBranch, query, route.params]);
  const renderItem = useCallback(
    ({item}) => {
      return (
        <BranchItem {...item} onPress={() => route.params?.callback(item)} />
      );
    },
    [route.params],
  );

  const onPullDown = useCallback(() => {
    setQuery(prev => ({...prev, page: 1}));
  }, []);

  return (
    <WrapperLayout
      header={{
        title: 'info_branch',
      }}>
      <Flatlist
        data={branchs}
        renderItem={renderItem}
        onPullDown={onPullDown}
      />
    </WrapperLayout>
  );
};
export default Branch;
