import {IconNames} from 'assets';
import {IconApp, TextCus, TouchCus} from 'components';
import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'theme';

interface IProps {
  title?: React.ReactNode;
  onChange: (selected: boolean) => void;
  value?: boolean;
}
const Checkbox: React.FC<IProps> = ({title, onChange, value}) => {
  const [selected, setSelected] = useState<boolean>(value ?? false);
  const onChecked = useCallback(() => {
    setSelected(!selected);
    onChange(!selected);
  }, [onChange, selected]);
  return (
    <View style={styles.container}>
      <TouchCus onPress={onChecked} activeOpacity={0.8}>
        <View style={styles.boxCheck} />
        {selected ? (
          <IconApp
            name={IconNames.CHECK}
            size={20}
            color={Colors.main}
            style={styles.selected}
          />
        ) : null}
      </TouchCus>
      {title && <TextCus useI18n>{title}</TextCus>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  boxCheck: {
    width: 24,
    height: 24,
    backgroundColor: Colors.transparent,
    borderRadius: 4,
    marginRight: 10,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  selected: {
    position: 'absolute',
    left: 0,
    top: 2,
    paddingHorizontal: 2,
  },
});
export default Checkbox;
