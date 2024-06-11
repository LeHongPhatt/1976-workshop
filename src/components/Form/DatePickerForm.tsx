import React, {Fragment, useRef} from 'react';
import {TextInputs} from 'components/TextInputs';
import {styleSpacing} from 'utils';
import {SelecterPicker} from 'components/SelecterPicker';
import {InteractionManager} from 'react-native';
import {SELECT_OPTION} from 'types';
import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetModals} from 'components';
interface IProps {
  onBlur: () => void;
  onChange: () => void;
  value: string;
  error: string | undefined;
  minDate?: string;
  maxDate?: string;
  onConfirmDate: (date: string) => void;
}
const DatePickerForm: React.FC<IProps> = ({
  onBlur,
  onChange,
  value,
  error,
  maxDate,
  minDate,
  onConfirmDate,
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
        onPress={() => refModal.current?.snapToIndex(0)}
        isViewTouch
      />
      <BottomSheetModals ref={refModal}>
        <SelecterPicker
          selectOptionTitle={'Chọn ngày'}
          selectType={SELECT_OPTION.DATE_PICKER}
          minDate={minDate}
          maxDate={maxDate}
          onCancelSelect={() => refModal.current?.close()}
          onConfirmSelect={date => {
            onConfirmDate(date);
            InteractionManager.runAfterInteractions(() => {
              refModal.current?.close();
            });
          }}
          selectedPickerDate={value}
        />
      </BottomSheetModals>
    </Fragment>
  );
};
export default DatePickerForm;
