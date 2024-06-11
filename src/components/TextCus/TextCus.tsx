import React, {memo, ReactNode} from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {useTranslation} from 'react-i18next';
import {DefaultFont, FontWeight, Typography} from 'theme/typography';
import {Colors} from 'theme';
import {withStyle} from 'HOC';
import {StyleProp} from 'react-native';
export interface TextCusProps extends TextProps {
  useI18n?: boolean;
  children: ReactNode;
  heading1?: boolean;
  heading2?: boolean;
  heading3?: boolean;
  heading4?: boolean;
  heading5?: boolean;
  heading6?: boolean;
  subtitle?: boolean;
  caption?: boolean;
  error?: boolean;
  success?: boolean;
  warning?: boolean;
  orange?: boolean;
  bold?: boolean;
  style?: StyleProp<TextStyle>;
  textAlign?: 'center' | 'right' | 'left';
  color?: string;
  regular?: boolean;
}
const TextCus: React.FC<TextCusProps> = ({
  useI18n = false,
  children,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
  subtitle,
  caption,
  error,
  success,
  warning,
  orange,
  style,
  textAlign,
  bold,
  color,
  regular,
  ...rest
}) => {
  const {t} = useTranslation();
  const textStyle = StyleSheet.flatten([
    {
      fontFamily: DefaultFont,
      color: Colors.white,
      ...Typography.heading6,
    },
    {color: color ?? Colors.white},
    heading1 && Typography.heading1,
    heading2 && Typography.heading2,
    heading3 && Typography.heading3,
    heading4 && Typography.heading4,
    heading5 && Typography.heading5,
    heading6 && Typography.heading6,
    subtitle && Typography.subtitle,
    caption && Typography.caption,
    error && {color: Colors.error},
    success && {color: Colors.success},
    warning && {color: Colors.warning},
    orange && {color: Colors.main},
    textAlign && {textAlign: textAlign},
    bold && {fontWeight: FontWeight.bold},
    regular && {fontWeight: FontWeight.regular},
    style,
  ]);
  return (
    <Text {...rest} style={textStyle}>
      {useI18n ? t(`${children}`) : children ?? ''}
    </Text>
  );
};
export default memo(withStyle(TextCus));
