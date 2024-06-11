import {WrapperLayout} from 'components';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native';
import {useHistoryOrder} from 'hooks';
import {IHistoryOrder, RootStackParamList} from 'types';
import {RouteProp, useRoute} from '@react-navigation/native';
import OrderContent from './OrderContent';
interface IProps {}
const HistoryOrderDetail: React.FC<IProps> = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'HistoryOrderDetail'>>();
  const {getDetailHistoryOrder} = useHistoryOrder();
  const [detail, setDetail] = useState<IHistoryOrder>({} as IHistoryOrder);
  useEffect(() => {
    getDetailHistoryOrder(route.params?.id, res => {
      setDetail(res);
    });
  }, [getDetailHistoryOrder, route.params?.id]);
  return (
    <WrapperLayout
      header={{
        title: 'detail_order',
      }}>
      <ScrollView
        contentContainerStyle={styles.contentStyle}
        showsVerticalScrollIndicator={false}>
        {detail.id ? <OrderContent detail={detail} /> : null}
      </ScrollView>
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  contentStyle: {
    paddingTop: 16,
    flexGrow: 1,
  },
});
export default HistoryOrderDetail;
