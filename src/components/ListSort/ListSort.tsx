import React, {useCallback, useEffect, useState} from 'react';
import {IconCus, TextCus, TouchCus} from 'components';
import {FlatList} from 'react-native';
import {Detail} from 'types';
import {StyleSheet} from 'react-native';
import {Colors} from 'theme';
import {IconNames} from 'assets';

interface IProps {
  data: Detail[];
  onPress: (
    value: Detail & {
      id: number;
      asc?: boolean;
    },
  ) => void;
}
const ListSort: React.FC<IProps> = ({onPress, data}) => {
  const [selected, setSelected] = useState<
    | (Detail & {
        id: number;
        asc?: boolean;
      })
    | null
  >(null);
  useEffect(() => {
    onPress(selected as any);
  }, [selected]);
  const onHandleActionSort = useCallback(
    (item: Detail) => {
      if (selected?.id !== item.id) {
        setSelected({
          ...item,
          asc: true,
          [item.key]: typeof item.type === 'string' ? 'ASC' : true,
        });
      } else if (selected?.asc) {
        setSelected({
          ...item,
          asc: false,
          [item.key]: typeof item.type === 'string' ? 'DESC' : false,
        });
      } else if (!selected?.asc) {
        setSelected(null);
      }
    },
    [selected?.asc, selected?.id],
  );
  const renderItem = useCallback(
    (item: Detail, index) => {
      const isActive = selected?.id === item?.id;
      const isAsc = selected?.asc === true;
      return (
        <TouchCus
          style={[styles.container, isActive && {borderColor: Colors.main}]}
          key={index}
          onPress={() => onHandleActionSort(item)}
          activeOpacity={0.8}>
          <TextCus style={[isActive && {color: Colors.main}]}>
            {item.name}
          </TextCus>
          {isActive ? (
            <IconCus
              name={IconNames.CHERVON_LEFT}
              size={14}
              color={Colors.main}
              style={{
                transform: [{rotate: isAsc ? '-90deg' : '90deg'}],
                marginLeft: 10,
              }}
            />
          ) : null}
        </TouchCus>
      );
    },
    [onHandleActionSort, selected?.asc, selected?.id],
  );
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => renderItem(item, index)}
      keyExtractor={keyExtractor}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginLeft: 12,
  },
});
export default React.memo(ListSort);
