import {Flatlist} from 'components';
import {useAddress} from 'hooks';
import {NavigationService} from 'navigation';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {InteractionManager, View, StyleSheet} from 'react-native';
import {BaseStyle} from 'theme/typography';
import {IAddressResult, IPickAddress} from 'types';
import AddressItem from './AddressItem';
import InputSearch from './InputSearch';

const PickWard: React.FC<IPickAddress> = ({setPicking, picking}) => {
  const {getListWard, wards, loading} = useAddress();
  useEffect(() => {
    if (!picking?.district?.Id) return;
    getListWard({district_id: picking?.district?.Id});
  }, [picking?.district?.Id, getListWard]);
  const tempData = useRef<IAddressResult[]>([]);
  const [data, setData] = useState<IAddressResult[]>([]);
  useEffect(() => {
    if (wards?.length === 0) return;
    setData(wards);
    tempData.current = wards;
  }, [getListWard, wards]);
  const renderItem = useCallback(
    ({item, index}) => (
      <AddressItem
        {...item}
        key={index}
        selected={picking?.ward?.Name}
        onPress={() => {
          setPicking(prev => ({
            ...prev,
            ward: {
              ...item,
            },
          }));
          InteractionManager.runAfterInteractions(() => {
            NavigationService.goBack();
          });
        }}
      />
    ),
    [picking?.ward?.Name, setPicking],
  );
  return (
    <>
      <View style={styles.spacing}>
        <InputSearch
          tempData={tempData.current}
          onSavedData={value => setData(value)}
        />
      </View>
      <View style={BaseStyle.flex1}>
        <Flatlist
          data={data}
          renderItem={renderItem}
          getItemType={item => {
            return item.name;
          }}
          loading={loading}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  spacing: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});
export default PickWard;
