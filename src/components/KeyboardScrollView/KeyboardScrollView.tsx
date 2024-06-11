import {ButtonBottom, LinearGradientCus} from 'components';
import React from 'react';
import {View} from 'react-native';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {BaseStyle, Colors} from 'theme';

interface Props {
  children: React.ReactNode;
  onPress?: () => void;
  loading?: boolean;
  textBtn?: string;
  btnBottomCus?: React.ReactNode;
  disabled?: boolean;
  styleContent?: StyleProp<ViewStyle>;
  isShowIcon?: boolean;
}
const linear = {
  start: {x: 0.6, y: -1},
  end: {x: 0.5, y: 1.5},
  locations: [0, 1],
  colors: ['#515159', '#252528'],
};
const behavior = Platform.OS === 'ios' ? 'padding' : undefined;
const KeyboardScrollView: React.FC<Props> = ({
  children,
  onPress,
  loading,
  textBtn,
  btnBottomCus,
  disabled,
  styleContent,
  isShowIcon,
}) => {
  return (
    <KeyboardAvoidingView behavior={behavior} enabled style={styles.flex1}>
      <ScrollView
        style={[styles.content, styleContent]}
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
      {btnBottomCus ? (
        <LinearGradientCus linear={linear} styleLinear={[styles.actionBottom]}>
          <View style={[BaseStyle.flexSpacingBetween]}>{btnBottomCus}</View>
        </LinearGradientCus>
      ) : (
        <ButtonBottom
          onPress={onPress}
          loading={loading}
          disabled={disabled}
          textBtn={textBtn}
          isShowIcon={isShowIcon}
        />
      )}
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.bg_main,
  },
  flex1: {
    flex: 1,
  },
  actionBottom: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 30,
  },
});
export default KeyboardScrollView;
