import Icon from 'assets/svg/Icon';
import {TextInputs} from 'components';
import React, {useDeferredValue, useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'theme';
import {IAddressResult} from 'types';
import {normalizeAccent, styleSpacing} from 'utils';

interface IFormSearch {
  searchText: string;
}
interface IProps {
  tempData: IAddressResult[];
  onSavedData: (value: IAddressResult[]) => void;
}
const InputSearch: React.FC<IProps> = ({tempData, onSavedData}) => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const {
    control,
    formState: {},
  } = useForm<IFormSearch>({
    mode: 'onChange',
    defaultValues: {
      searchText: '',
    },
  });
  useEffect(() => {
    if (deferredQuery.length > 0) {
      const result = tempData?.filter(i =>
        normalizeAccent(i?.Name?.toLowerCase()).includes(
          normalizeAccent(deferredQuery?.toLowerCase()),
        ),
      );
      onSavedData?.(result);
    } else {
      onSavedData?.(tempData);
    }
  }, [deferredQuery]);
  return (
    <View style={styleSpacing('mb-40')}>
      <Controller
        control={control}
        name="searchText"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInputs
            styleInputContent={[styles.content]}
            styleInput={[styles.input]}
            placeholder="search"
            onChangeText={text => {
              onChange(text);
              setQuery(text);
            }}
            value={value}
            onBlur={onBlur}
            leftIcon={
              <Icon.CupertinoSearch
                height={24}
                width={24}
                color={Colors.disabled}
              />
            }
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    backgroundColor: Colors.bg_grey,
    borderWidth: 0,
    paddingVertical: 20,
  },
  input: {
    height: 40,
  },
});
export default InputSearch;
