import {Flatlist} from 'components';
import {useAddress} from 'hooks';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseStyle} from 'theme';
import {EAddress, IAddressResult, IPickAddress} from 'types';
import AddressItem from './AddressItem';
import InputSearch from './InputSearch';

const PickDistrict: React.FC<IPickAddress> = ({
  jumpTo,
  setPicking,
  picking,
}) => {
  const {getListDistrict, districts, loading} = useAddress();
  useEffect(() => {
    if (!picking?.city?.Id) {
      return;
    }
    getListDistrict({city_id: picking?.city?.Id});
  }, [picking?.city?.Id, getListDistrict]);
  const tempData = useRef<IAddressResult[]>([]);
  const [data, setData] = useState<IAddressResult[]>([]);
  useEffect(() => {
    if (districts?.length === 0) {
      return;
    }
    setData(districts);
    tempData.current = districts;
  }, [districts]);
  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <AddressItem
          {...item}
          key={index}
          selected={picking?.district?.Name}
          onPress={() => {
            setPicking(prev => ({
              ...prev,
              district: {
                ...item,
              },
            }));
            jumpTo(EAddress.WARD);
          }}
        />
      );
    },
    [jumpTo, picking?.district?.Name, setPicking],
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
export default PickDistrict;
