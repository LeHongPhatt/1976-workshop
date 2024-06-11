import {IconNames} from 'assets';
import {IconApp, TextCus, TouchCus} from 'components';
import {NavigationService} from 'navigation';
import React, {ReactNode, useEffect} from 'react';
import {StatusBar, StyleProp, View, ViewStyle} from 'react-native';
import {Subheading} from 'react-native-paper';
import {Colors} from 'theme';
import styles from './styles';

export function Header(props: IHeader) {
  const {
    style,
    styleLeft,
    styleCenter,
    styleRight,
    title,
    subTitle,
    onPressLeft,
    renderLeft,
    renderCenter,
    renderRight,
    notGoBack = false,
    showCenter = true,
    showRight = true,
    defaultGoBack = true,
  } = props;

  useEffect(() => {
    const option = 'light-content';
    StatusBar.setBarStyle(option, true);
  });

  const renderGoback = () => (
    <IconApp name={IconNames.CHERVON_LEFT} color={Colors.white} size={16} />
  );
  return (
    <View style={[styles.contain, styles.row, style]}>
      <View style={styles.contentLeft}>
        {!notGoBack ? (
          <TouchCus
            style={styleLeft}
            onPress={() => {
              if (notGoBack) {
                return null;
              }
              onPressLeft && onPressLeft();
              defaultGoBack && NavigationService.goBack();
            }}>
            {renderGoback()}
          </TouchCus>
        ) : null}
        {renderLeft ? renderLeft() : null}
      </View>
      {showCenter && (
        <View style={[styles.centVHItem, styleCenter]}>
          {renderCenter && renderCenter()}
          {!renderCenter && (
            <TextCus useI18n heading5>
              {title}
            </TextCus>
          )}
          {subTitle && !renderCenter && <Subheading>{subTitle}</Subheading>}
        </View>
      )}
      {showRight ? (
        <View style={[styles.right, styleRight]}>
          {renderRight && renderRight()}
        </View>
      ) : null}
    </View>
  );
}

export interface IHeader {
  style?: StyleProp<ViewStyle>;
  styleLeft?: StyleProp<ViewStyle>;
  styleCenter?: StyleProp<ViewStyle>;
  styleRight?: StyleProp<ViewStyle>;
  styleRightSecond?: StyleProp<ViewStyle>;
  renderCenter?: () => ReactNode;
  renderLeft?: () => ReactNode;
  renderRight?: () => ReactNode;
  renderRightSecond?: () => ReactNode;
  onPressRightSecond?: () => void;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  title?: string;
  subTitle?: string;
  barStyle?: string;
  notGoBack?: boolean;
  defaultGoBack?: boolean;
  showCenter?: boolean;
  showRight?: boolean;
}
