import {TextCus, WrapperLayout} from 'components';
import React, {useCallback} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ListItem} from '../component';
import {NavigationService, Routes} from 'navigation';
import {Colors} from 'theme';
import Icon from 'assets/svg/Icon';
import {useAddress, useAuth} from 'hooks';
import {convertAddress} from 'utils';
import {useRoute, RouteProp, useFocusEffect} from '@react-navigation/native';
import {RootStackParamList} from 'types';
import {useTranslation} from 'react-i18next';

const BookAddress: React.FC = () => {
  const {t} = useTranslation();
  const route = useRoute<RouteProp<RootStackParamList, 'BookAddress'>>();
  const {userInfo} = useAuth();
  const {getListAddress, addresses} = useAddress();
  useFocusEffect(
    useCallback(() => {
      getListAddress();
    }, [getListAddress]),
  );
  return (
    <WrapperLayout
      header={{
        title: 'account.address_book',
      }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TextCus useI18n heading5 p-16>
          save_address
        </TextCus>
        {addresses?.map((item, index) => {
          return (
            <ListItem
              key={index}
              location={item?.address_name}
              address={convertAddress(item)}
              info={`${item.user_name} - ${item.user_phone}`}
              note={item?.note ?? ''}
              isDefault={item.is_default}
              isViewTouch
              onPress={() => {
                route.params?.callback(item);
                if (route.params?.isOrder) {
                  return;
                }
                NavigationService.navigate(Routes.KYC);
              }}
              onEditAddress={() =>
                NavigationService.navigate(Routes.DetailAddress, {
                  address: item,
                })
              }
            />
          );
        })}
        <ListItem
          icon={<Icon.Add />}
          location={t('account.add_address_new') as string}
          edit={false}
          isViewTouch
          onPress={() =>
            NavigationService.navigate(Routes.DetailAddress, {
              address: {
                user_name: userInfo?.name,
                user_phone: userInfo?.phone_number,
              },
            })
          }
        />
      </ScrollView>
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.bg_main,
  },
});
export default BookAddress;
