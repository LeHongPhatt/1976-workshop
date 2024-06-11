import React from 'react';
import {IconApp, TextCus, TouchCus} from 'components';
import {StyleProp, ViewStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import {Colors} from 'theme';
interface IProps {
  number?: number | undefined;
  icon?: string;
  size?: number;
  styleBagde?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
const Badge: React.FC<IProps> = ({
  styleBagde,
  number,
  icon,
  size = 30,
  onPress,
}) => {
  return (
    <TouchCus
      style={[styles.container, styleBagde]}
      onPress={onPress ? () => onPress() : () => {}}>
      <IconApp name={icon as string} size={size} color={Colors.white} />
      {number > 0 ? (
        <TextCus numberOfLines={1} style={[styles.badge]} bold>
          {number}
        </TextCus>
      ) : null}
    </TouchCus>
  );
};
const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    backgroundColor: Colors.color_52,
    fontSize: 10,
    color: Colors.white,
    borderRadius: 8,
    overflow: 'hidden',
    textAlign: 'center',
    right: -6,
    lineHeight: 0,
    paddingVertical: 2,
    paddingHorizontal: 5,
    top: -4,
  },
  container: {
    marginLeft: 4,
    position: 'relative',
  },
});
export default Badge;
