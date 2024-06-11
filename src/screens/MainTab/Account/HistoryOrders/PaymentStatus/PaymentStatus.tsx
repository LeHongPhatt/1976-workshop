import Icon from 'assets/svg/Icon';
import {TextCus} from 'components';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from 'theme';

export interface IPaymentStatus {
  status: 'paid' | 'unpaid';
}
export default function PaymentStatus(props: IPaymentStatus) {
  const {status} = props;
  const statusObj = {
    unpaid: {
      label: 'Chưa thanh toán',
    },
    paid: {
      label: 'Đã thanh toán',
    },
  };

  return (
    <View style={[styles.flexRow, styles.alignCenter]}>
      <TextCus
        success={status === 'paid'}
        orange={status === 'unpaid'}
        subtitle
        bold
        mr-8
        useI18n>
        {statusObj[status].label}
      </TextCus>
      <View style={[styles.bgSuccess, styles.spacing4, styles.circle]}>
        <Icon.Dolar />
      </View>
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
  bgSuccess: {
    backgroundColor: Colors.success,
  },
});
