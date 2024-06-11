import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {TextCus} from 'components';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Colors} from 'theme';
import {styleSpacing} from 'utils';
type IProps = BottomTabBarButtonProps & {
  IconName: any;
  size?: number;
  route: string;
  color?: string;
  focused?: boolean;
  id?: number;
  isCenter?: boolean;
};
const TabBarCus: React.FC<IProps> = (props: IProps) => {
  const {IconName, route, onPress, accessibilityState, isCenter = true} = props;
  const focused = Boolean(accessibilityState?.selected);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.wrapper}>
      <View style={[styles.btnWrap]}>
        {IconName}
        <TextCus
          subtitle
          bold
          textAlign="center"
          style={[
            styles.text,
            focused && styles.textActive,
            isCenter && {...styleSpacing('mt-5')},
          ]}>
          {route}
        </TextCus>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 10,
  },
  btnWrap: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  text: {
    lineHeight: 16,
  },
  textActive: {
    color: Colors.main,
  },
  icon: {
    color: Colors.white,
  },
});
export default TabBarCus;
