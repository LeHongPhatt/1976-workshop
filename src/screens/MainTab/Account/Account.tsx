import {WrapperLayout} from 'components';
import React, {useMemo} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Colors} from 'theme';
import {dataAccounts} from 'types';
import {CreditCard, ListItem} from './component';
import {useAuth} from 'hooks';
import Icon from 'assets/svg/Icon';

const Account: React.FC = () => {
  const {onLogout, onGoToLogin} = useAuth();
  const {userInfo} = useAuth();
  const {dataListAccounts} = useMemo(() => {
    return {
      dataListAccounts: userInfo?.id
        ? dataAccounts
        : dataAccounts.filter(item => !item.requireLogin),
    };
  }, [userInfo]);
  return (
    <WrapperLayout
      header={{
        notGoBack: true,
        showCenter: true,
        title: 'account.main',
      }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
          <CreditCard userInfo={userInfo} isLoggedIn={Boolean(userInfo?.id)} />
          {dataListAccounts?.map(({title, onPress, icon}, index) => {
            const IconSvg = Icon?.[icon];
            return (
              <ListItem
                title={title}
                key={index}
                isViewTouch
                onPress={() => onPress()}
                edit={false}
                styleContainer={{
                  borderBottomColor: Colors.disabled,
                }}
                icon={<IconSvg width={26} height={26} />}
              />
            );
          })}
          <ListItem
            title={userInfo?.id ? 'logout' : 'auth.login'}
            isViewTouch
            onPress={() => (userInfo?.id ? onLogout() : onGoToLogin())}
            noBorder
            edit={false}
            icon={<Icon.Logout width={26} height={26} />}
          />
          <View style={{height: 20}} />
        </ScrollView>
      </View>
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_main,
  },
  wrapper: {
    // padding: 16,
  },
});
export default Account;
