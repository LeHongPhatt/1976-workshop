import {IconNames} from 'assets';
import {IconApp} from 'components/IconApp';
import {TextCus} from 'components/TextCus';
import {TouchCus} from 'components/TouchCus';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from 'theme';
interface IProps {
  title?: string;
  onChange: (selected?: boolean) => void;
  value?: boolean;
  noBackground?: boolean;
}
const Checkbox: React.FC<IProps> = ({title, onChange, value, noBackground}) => {
  return (
    <View style={styles.container}>
      <TouchCus onPress={onChange} activeOpacity={0.8}>
        <View
          style={[styles.boxCheck, noBackground && styles.boxCheckNoBackground]}
        />
        {value ? (
          <IconApp
            name={IconNames.CHECK}
            size={16}
            color={Colors.success}
            style={styles.selected}
          />
        ) : null}
      </TouchCus>
      <TextCus useI18n>{title ?? 'address.default_address'}</TextCus>
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
    backgroundColor: Colors.white,
    borderRadius: 4,
    marginRight: 10,
  },
  selected: {
    position: 'absolute',
    left: 2,
    top: 4,
    paddingHorizontal: 2,
  },
  boxCheckNoBackground: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.white,
  },
});
export default React.memo(Checkbox);
