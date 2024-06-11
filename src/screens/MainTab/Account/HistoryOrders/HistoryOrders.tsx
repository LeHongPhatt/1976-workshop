import {Images} from 'assets';
import {Flatlist, HistoryItem, TextCus, WrapperLayout} from 'components';
import {useHistoryOrder} from 'hooks';
import {NavigationService, Routes} from 'navigation';
import React, {useCallback, useEffect, useState} from 'react';
import {Colors} from 'theme';
import {formatCurrency, styleSpacing} from 'utils';
import {StyleSheet} from 'react-native';
const HistoryOrders: React.FC = () => {
  const [query, setQuery] = useState({
    page: 1,
    limit: 10,
  });
  const {getListHistoryOrder, orders, loading} = useHistoryOrder();
  useEffect(() => {
    getListHistoryOrder({...query});
  }, [getListHistoryOrder, query]);
  console.log('orders', orders);
  const onPullDown = useCallback(() => {
    setQuery(prev => ({...prev, page: 1}));
  }, []);
  const renderItem = useCallback(({item}) => {
    return (
      <HistoryItem
        {...item}
        code={'Đơn hàng'}
        item={item}
        content={`#${item?.order_code}`}
        iconTop={Images.icShop}
        iconBottom={Images.ic_currencyRed}
        titleTop={`${item?.details.length} sản phẩm`}
        titleBottom={formatCurrency(item?.total_price) + 'đ'}
        status={item?.order_status}
        styleBottom={styles.bottom}
        bottomRight={true}
        statusPayment={
          item?.payment_status ? 'Đã thanh toán' : 'Chưa thanh toán'
        }
        colorStatusPayment={item?.payment_status ? Colors.success : Colors.main}
        icStatusPayment={Images.ic_currencyGreen}
        onPress={() =>
          NavigationService.navigate(Routes.HistoryOrderDetail, {
            id: item.id,
          })
        }
      />
    );
  }, []);
  return (
    <WrapperLayout
      header={{
        title: 'account.order',
      }}>
      <Flatlist
        data={orders}
        renderItem={renderItem}
        contentContainerStyle={{
          ...styleSpacing('p-14'),
        }}
        onPullDown={onPullDown}
      />
    </WrapperLayout>
  );
};

const styles = StyleSheet.create({
  spacing12: {
    padding: 12,
  },
  bottom: {
    color: Colors.bg_orange,
    fontSize: 14,
  },
});

export default HistoryOrders;
