import React, {Fragment, useRef} from 'react';
import {formatGender, styleSpacing} from 'utils';
import {SelecterPicker} from 'components/SelecterPicker';
import {SELECT_OPTION, TGender, TGenderValue, TArrayGender} from 'types';
import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetModals, TextInputs} from 'components';
interface IProps {
  onBlur: () => void;
  onChange: () => void;
  value: TGenderValue;
  error: string | undefined;
  onConfirmOption: (date: TGenderValue) => void;
  title: string;
  dataOptions: TArrayGender;
}
const OptionPickerForm: React.FC<IProps> = ({
  onBlur,
  onChange,
  value,
  error,
  onConfirmOption,
  title,
  dataOptions,
}) => {
  const refModal = useRef<BottomSheet>(null);
  return (
    <Fragment>
      <TextInputs
        styleContent={[styleSpacing('mb-10')]}
        label="kyc.gender"
        isRequire
        placeholder={'kyc.choose_gender'}
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
          selectOptionTitle={title}
          selectType={SELECT_OPTION.OPTION_PICKER}
          dataOptions={dataOptions}
          onCancelSelect={() => refModal.current?.close()}
          onConfirmSelect={option => {
            onConfirmOption(option.data);
            refModal.current?.close();
          }}
          selectedGenderOption={{
            index: formatGender(value) as TGender,
            data: value,
          }}
        />
      </BottomSheetModals>
    </Fragment>
  );
};
export default OptionPickerForm;
