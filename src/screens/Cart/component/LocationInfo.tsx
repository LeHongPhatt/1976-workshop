import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import {View} from 'react-native';
import styles from './styles';
import Icon from 'assets/svg/Icon';
import {TextCus} from 'components';
import {useTranslation} from 'react-i18next';

export interface ILocationInfo {
  title?: string;
  subTitle?: any;
  action?: React.ReactNode;
  iconInfo?: boolean;
  type: 'branch' | 'location';
}

export default function LocationInfo(props: ILocationInfo) {
  const {title, subTitle, action, iconInfo = false, type} = props;
  const {t} = useTranslation();
  const text = {
    location: {
      title: t('location.current'),
      subTitle: t('location.address'),
    },
    branch: {
      title: t('location.branch'),
      subTitle: t('location.delivery'),
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
          {title || t('location.choose', {location: typeLocation.title})}
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
