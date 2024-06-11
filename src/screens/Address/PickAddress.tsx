import React, {useCallback, useEffect, useState} from 'react';
import {TabBar, TabView} from 'react-native-tab-view';
import {useRoute, RouteProp} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {MainLayout, TextCus} from 'components';
import {useAddress} from 'hooks';
import {Colors} from 'theme';
import {FontWeight} from 'theme/typography';
import {DataTabScreens, EAddress, RootStackParamList, TPicking} from 'types';
import {dimensions} from 'utils';
import {PickCity, PickDistrict, PickWard} from './PickPostionAddress';

const {width} = dimensions;
const PickAddress: React.FC = () => {
  const router = useRoute<RouteProp<RootStackParamList, 'PickAddress'>>();
  const {getListCity} = useAddress();
  useEffect(() => {
    getListCity();
  }, [getListCity]);
  const [index, setIndex] = React.useState<number>(0);
  const [routes] = React.useState(DataTabScreens);
  const [picking, setPicking] = useState<TPicking>(
    router?.params.pickAddress ?? {
      city: {Name: '', Id: ''},
      district: {Name: '', Id: ''},
      ward: {Name: '', Id: ''},
    },
  );
  const renderIndex = useCallback((value: string) => {
    switch (value) {
      case EAddress.CITY:
        return 0;
      case EAddress.DISTRICT:
        return 1;
      case EAddress.WARD:
        return 2;
      default:
        return 0;
    }
  }, []);
  useEffect(() => {
    setIndex(renderIndex(router.params.tabScreen));
  }, [renderIndex, router.params.tabScreen]);
  useEffect(() => {
    if (picking?.city?.Id && picking?.district?.Id && picking?.ward?.Id) {
      router.params?.setPickAddress(picking);
      // NavigationService.goBack();
    }
  }, [picking, router?.params]);

  const renderScene = useCallback(
    ({route, jumpTo}) => {
      switch (route.key) {
        case EAddress.CITY:
          return (
            <PickCity
              jumpTo={jumpTo}
              setPicking={setPicking}
              picking={picking}
            />
          );
        case EAddress.DISTRICT:
          return (
            <PickDistrict
              jumpTo={jumpTo}
              setPicking={setPicking}
              picking={picking}
            />
          );
        case EAddress.WARD:
          return (
            <PickWard
              jumpTo={jumpTo}
              setPicking={setPicking}
              picking={picking}
            />
          );
      }
    },
    [picking, setPicking],
  );
  return (
    <MainLayout showAuthHeader titleAuthHeader="Địa chỉ">
      <View style={[styles.container]}>
        <TabView
          lazy={true}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width}}
          renderTabBar={props => (
            <TabBar
              {...props}
              labelStyle={styles.label}
              style={styles.tabs}
              indicatorStyle={styles.indicator}
            />
          )}
          removeClippedSubviews={false}
        />
      </View>
    </MainLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_main,
  },
  label: {
    fontWeight: FontWeight.bold,
    fontSize: 10,
    color: Colors.white,
    textAlign: 'center',
  },
  tabs: {
    backgroundColor: Colors.bg_main,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
  indicator: {
    position: 'absolute',
    backgroundColor: Colors.main,
    height: 1,
    bottom: -1,
  },
});
export default PickAddress;
