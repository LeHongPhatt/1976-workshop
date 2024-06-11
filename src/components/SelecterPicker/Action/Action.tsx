import {TextCus, TouchCus} from 'components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'theme';

interface Props {
  onCancelSelect: () => void;
  onChooseSelect: () => void;
}
const Action: React.FC<Props> = ({onCancelSelect, onChooseSelect}) => {
  return (
    <View style={styles.container}>
      <TouchCus onPress={onCancelSelect} style={styles.btn}>
        <TextCus useI18n bold heading6>
          action.cancel
        </TextCus>
      </TouchCus>
      <TouchCus
        onPress={onChooseSelect}
        style={[styles.btn, {backgroundColor: Colors.main}]}>
        <TextCus useI18n bold heading6>
          action.choose
        </TextCus>
      </TouchCus>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 13,
    paddingHorizontal: 14,
    // paddingBottom: 20,
  },
  btn: {
    width: '45%',
    justifyContent: 'center',
    backgroundColor: Colors.disabled,
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 10,
    display: 'flex',
  },
});
export default Action;
