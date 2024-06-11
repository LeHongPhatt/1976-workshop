import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import {View} from 'react-native';
import styles from './styless';
import Icon from 'assets/svg/Icon';
import {TextCus} from 'components';

export interface ILocationInfo {
  title?: string;
  subTitle?: any;
  action?: React.ReactNode;
  iconInfo?: boolean;
  type: 'branch' | 'location';
}

export default function LocationInfo(props: ILocationInfo) {
  const {title, subTitle, action, iconInfo = false, type} = props;
  const text = {
    location: {
      title: 'địa điểm',
      subTitle: 'Chọn địa chỉ giao hàng',
    },
    branch: {
      title: 'chi nhánh',
      subTitle: 'Chọn chi nhánh giao hàng',
    },
  };
  const typeLocation = text?.[type];

  return (
    <>
      <View
        style={[
          styles.flexRow,
          styles.alignCenter,
          styles.justBetween,
          styles.mb4,
        ]}>
        <Icon.Location />
        <TextCus orange={!title} bold style={[styles.flx, styles.ml8]}>
          {title || `Chọn ${typeLocation.title} giao hàng`}
        </TextCus>
        {action}
      </View>
      <View style={[styles.flexRow, styles.alignCenter, styles.justBetween]}>
        <TextCus subtitle>
          {!_isEmpty(subTitle) ? subTitle : typeLocation.subTitle}
        </TextCus>
        {iconInfo && <Icon.Info />}
      </View>
    </>
  );
}
