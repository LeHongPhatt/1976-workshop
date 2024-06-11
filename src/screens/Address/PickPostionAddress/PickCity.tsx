import {Flatlist} from 'components';
import {useAddress} from 'hooks';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {BaseStyle} from 'theme/typography';
import {EAddress, IAddressResult, IPickAddress} from 'types';
import AddressItem from './AddressItem';
import InputSearch from './InputSearch';
const PickCity: React.FC<IPickAddress> = ({jumpTo, setPicking, picking}) => {
  const {getListCity, cities, loading} = useAddress();
  const tempData = useRef<IAddressResult[]>([]);
  const [data, setData] = useState<IAddressResult[]>([]);
  useEffect(() => {
    getListCity();
  }, [getListCity]);
  useEffect(() => {
    setData(cities);
    tempData.current = cities;
  }, [cities]);
  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <AddressItem
          {...item}
          key={index}
          selected={picking?.city?.Name}
          onPress={() => {
            setPicking(prev => ({
              ...prev,
              city: {
                ...item,
              },
            }));
            jumpTo(EAddress.DISTRICT);
          }}
        />
      );
    },
    [jumpTo, picking?.city?.Name, setPicking],
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
export default PickCity;
