import {Header, SafeAreaStatusBar, SafeAreaViewCus} from 'components';
import {IHeader} from 'components/Header';
import React, {useMemo} from 'react';
import {StatusBarStyle, StyleSheet, View} from 'react-native';
import {Colors} from 'theme';

interface IProps {
  statusBarMode?: StatusBarStyle;
  children: React.ReactElement;
  header?: IHeader;
  isBgStatusBar?: boolean;
  isForForm?: boolean; // Push Keyboard When focus TextInput isForFrom: true
  noHeader?: boolean;
}
const WrapperLayout: React.FC<IProps> = ({
  statusBarMode,
  children,
  header,
  isBgStatusBar,
  isForForm,
  noHeader,
}) => {
  const renderHeader = useMemo(() => {
    if (noHeader) {
      return null;
    }
    return <Header {...header} />;
  }, [header, noHeader]);
  return (
    <SafeAreaViewCus isBgStatusBar={isBgStatusBar}>
      <SafeAreaStatusBar modeContent={statusBarMode} />
      {renderHeader}
      {isForForm ? children : <View style={styles.container}>{children}</View>}
    </SafeAreaViewCus>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg_main,
  },
});
export default WrapperLayout;
