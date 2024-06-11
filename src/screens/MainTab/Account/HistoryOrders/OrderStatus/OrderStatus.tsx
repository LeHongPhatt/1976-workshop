import Icon from 'assets/svg/Icon';
import {TextCus} from 'components';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from 'theme';

export interface IOrderStatus {
  status?: 'cancel' | 'received' | 'delivery' | 'success' | undefined;
}
export default function OrderStatus(props: IOrderStatus) {
  const {status} = props;
  const statusObj = {
    cancel: {
      background: styles.bgCancel,
      icon: <Icon.Cancel />,
      label: 'Đã hủy',
    },
    received: {
      background: styles.bgMain,
      icon: <Icon.Pending />,
      label: 'Đã Tiếp nhận',
    },
    delivery: {
      background: styles.bgMain,
      icon: <Icon.Delivery />,
      label: 'Đang giao hàng',
    },
    success: {
      background: styles.bgSuccess,
      icon: <Icon.Success />,
      label: 'Thành công',
    },
  };

  return (
    <View style={[styles.flexRow, styles.alignCenter]}>
      <View
        style={[statusObj[status].background, styles.spacing4, styles.circle]}>
        {statusObj[status].icon}
      </View>
      <TextCus
        success={status === 'success'}
        orange={status === 'delivery'}
        subtitle
        bold
        ml-8
        useI18n>
        {statusObj[status].label}
      </TextCus>
    </View>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  circle: {
    borderRadius: 40,
  },
  spacing4: {
    padding: 4,
  },
  bgMain: {
    backgroundColor: Colors.main,
  },
  bgSuccess: {
    backgroundColor: Colors.success,
  },
  bgCancel: {
    backgroundColor: Colors.disabled,
  },
});
