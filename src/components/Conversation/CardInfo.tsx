import {TextCus} from 'components/TextCus';
import React, {ReactNode} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Divider} from 'react-native-paper';
export function CardInfo(props: ICardInfo) {
  const {title, subtitle, children, style} = props;
  return (
    <View
      style={[styles.wrapCardInfo, styles.wrapShadow, styles.radius8, style]}>
      {(title || subtitle) && (
        <View style={[styles.padTitle, styles.cenItemvh]}>
          {title && (
            <TextCus mainLightColor body2 medium>
              {title}
            </TextCus>
          )}
          {subtitle && <TextCus>{subtitle}</TextCus>}
        </View>
      )}
      <Divider />
      <View style={styles.padContent}>{children}</View>
    </View>
  );
}

export interface ICardInfo {
  style?: any;
  title?: any;
  subtitle?: any;
  children: ReactNode;
}
