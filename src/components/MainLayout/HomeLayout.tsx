import Icon from 'assets/svg/Icon';
import {
  SafeAreaStatusBar,
  SafeAreaViewCus,
  Header,
  IconCus,
  TextInputs,
  TouchCus,
} from 'components';
import React, {useCallback} from 'react';
import {Colors} from 'theme';
import {EAction, TmodeContent} from 'types';
import styles from './styles';

const HomeLayout = (props: IMainLayoutProps) => {
  const {children, bgColor, statusBarMode, header, setAction, action} = props;
  const headerCustom = useCallback(() => {
    switch (action) {
      case EAction.SEARCH:
        return (
          <Header
            onPressLeft={() => setAction?.(null)}
            showCenter={false}
            renderLeft={() => (
              <IconCus name={'chevron-left'} size={18} color={Colors.white} />
            )}
            renderRight={() => (
              <TextInputs
                style={styles.inputSearch}
                placeholder={'Tìm kiếm'}
                rightIcon={
                  <TouchCus onPress={() => {}}>
                    {Icon.Search({color: Colors.white})}
                  </TouchCus>
                }
                onChangeText={function (value: string): void {
                  throw new Error('Function not implemented.');
                }}
                onBlur={function (): void {
                  throw new Error('Function not implemented.');
                }}
                value={''}
              />
            )}
          />
        );

      default:
        return <Header {...header} />;
    }
  }, [action, header, setAction]);

  return (
    <>
      <SafeAreaViewCus bgColor={bgColor ?? Colors.main}>
        <>
          <SafeAreaStatusBar modeContent={statusBarMode} />
          {headerCustom()}
          {children}
        </>
      </SafeAreaViewCus>
    </>
  );
};

export default HomeLayout;

export interface IMainLayoutProps {
  children?: React.ReactNode;
  bgColor?: string;
  statusBarMode?: TmodeContent;
  header?: any;
  setAction?: any;
  action?: string;
}
