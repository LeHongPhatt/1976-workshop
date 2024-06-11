import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'theme';

const SafeAreaViewCus = memo((props: ISafeAreaViewProps) => {
  const {children, style, isBgStatusBar, ...rest} = props;
  return (
    <SafeAreaView
      style={[
        styles.container,
        isBgStatusBar && {
          backgroundColor: Colors.bg_main,
        },
        {...style},
      ]}
      edges={['left', 'right', 'top']}
      {...rest}>
      {children}
    </SafeAreaView>
  );
});
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.main,
    flex: 1,
    marginBottom: 0,
  },
});
export default SafeAreaViewCus;

export interface ISafeAreaViewProps {
  children?: React.ReactNode;
  style?: any;
  bgColor?: any;
  edges?: any;
  testID?: string;
  isBgStatusBar?: boolean;
}
