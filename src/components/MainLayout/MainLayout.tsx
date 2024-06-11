import React from 'react';
import {Header, SafeAreaStatusBar, SafeAreaViewCus} from 'components';
import {Colors} from 'theme';
import {StyleSheet} from 'react-native';

const MainLayout = (props: IMainLayoutProps) => {
  const {children, showAuthHeader, titleAuthHeader, isHeader, isBgStatusBar} =
    props;

  return (
    <SafeAreaViewCus isBgStatusBar={isBgStatusBar}>
      <>
        <SafeAreaStatusBar modeContent={'light-content'} />
        {showAuthHeader && (
          <Header
            title={titleAuthHeader ?? ''}
            defaultGoBack
            {...props}
            style={[isHeader ? {} : styles.header, props.style]}
          />
        )}
        {children}
      </>
    </SafeAreaViewCus>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.main,
    paddingBottom: 10,
  },
});
export default MainLayout;

export interface IMainLayoutProps {
  children?: React.ReactNode;
  statusBar?: any;
  showAuthHeader?: boolean;
  titleAuthHeader?: string;
  style?: any;
  edges?: any;
  testID?: string;
  isHeader?: boolean;
  isBgStatusBar?: boolean;
}
