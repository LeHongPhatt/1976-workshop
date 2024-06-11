import React, {Fragment, useRef} from 'react';
import {TextInputs} from 'components/TextInputs';
import {styleSpacing} from 'utils';
import {SelecterPicker} from 'components/SelecterPicker';
import {InteractionManager} from 'react-native';
import {ISelectTime, SELECT_OPTION} from 'types';
import BottomSheet from '@gorhom/bottom-sheet';
interface IProps {
  onBlur: () => void;
  onChange: () => void;
  value: ISelectTime;
  error: string;
  minDate?: string;
  maxDate?: string;
  onConfirmTime: (time: string) => void;
}
const TimePickerForm: React.FC<IProps> = ({
  onBlur,
  onChange,
  value,
  error,
  onConfirmTime,
}) => {
  const refModal = useRef<BottomSheet>(null);
  return (
    <Fragment>
      <TextInputs
        styleContent={[styleSpacing('mb-10')]}
        label="kyc.birthday"
        isRequire
        placeholder={'kyc.choose_birthday'}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        error={error}
        type="none"
        onPress={() => refModal.current?.snapToIndex(1)}
        isViewTouch
      />
      <SelecterPicker
        selectOptionTitle={'Chọn giờ'}
        selectType={SELECT_OPTION.TIME_PICKER}
        addedMinutes={'0'}
        onConfirmSelect={time => {
          onConfirmTime(time);
          InteractionManager.runAfterInteractions(() => {
            refModal.current?.close();
          });
        }}
        selectedPickerTime={value}
        onCancelSelect={() => refModal.current?.close()}
      />
    </Fragment>
  );
};
export default TimePickerForm;
