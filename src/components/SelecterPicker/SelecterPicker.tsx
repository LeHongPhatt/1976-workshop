import {
  DatePicker,
  LinearGradientCus,
  OptionPicker,
  TextCus,
  TimePicker,
} from 'components';
import moment from 'moment';
import React, {useCallback, useState} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Colors} from 'theme';
import {
  ISelectOption,
  ISelectTime,
  SELECT_OPTION,
  TArrayGender,
  dataDates,
  dataTimes,
} from 'types';
import {Action} from './Action';
import {SectionTitle} from './SectionTitle';
import {dimensions} from 'utils';
const {width} = dimensions;
interface IProps {
  selectType: string;
  onConfirmSelect: (value: any) => void;
  minDate?: string | undefined;
  maxDate?: string;
  selectedGenderOption?: ISelectOption;
  addedMinutes?: string;
  onCancelSelect: () => void;
  selectOptionTitle?: string;
  customHeaderStyle?: ViewStyle;
  dataOptions?: TArrayGender;
  selectedPickerTime?: ISelectTime;
  selectedPickerDate?: string;
}
const linear = {
  start: {x: 1, y: 0.5},
  end: {x: 0.8, y: 1},
  locations: [0, 1],
  colors: ['#515159', '#252528'],
};
const SelecterPicker: React.FC<IProps> = ({
  selectType,
  onConfirmSelect,
  minDate,
  maxDate,
  selectedGenderOption,
  addedMinutes,
  onCancelSelect,
  selectOptionTitle,
  customHeaderStyle,
  dataOptions,
  selectedPickerTime,
  selectedPickerDate,
}) => {
  const [selectedDate, setSelectedDate] = useState({});
  const [selectedTime, setSelectedTime] = useState({});
  const [selectedOption, setSelectedOption] = useState({});
  const renderSelectOption = useCallback(() => {
    switch (selectType) {
      case SELECT_OPTION.DATE_PICKER:
        return (
          <DatePicker
            minDate={minDate!}
            maxDate={maxDate!}
            selectedDate={
              selectedPickerDate
                ? selectedPickerDate
                : moment().format('DD/MM/YYYY')
            }
            onChange={setSelectedDate}
          />
        );
      case SELECT_OPTION.OPTION_PICKER:
        return (
          <OptionPicker
            dataOptions={dataOptions!}
            selectedOption={
              selectedGenderOption
                ? selectedGenderOption
                : {index: 1, data: 'Nữ'}
            }
            setSelectedOption={value => setSelectedOption(value)}
          />
        );
      case SELECT_OPTION.TIME_PICKER:
        return (
          <TimePicker
            addedMinutes={addedMinutes!}
            selectedTime={selectedPickerTime!}
            setSelectedInformation={setSelectedTime}
          />
        );
    }
  }, [
    selectType,
    minDate,
    maxDate,
    dataOptions,
    addedMinutes,
    selectedGenderOption,
    selectedPickerDate,
    selectedPickerTime,
  ]);
  const onChooseSelect = useCallback(() => {
    switch (selectType) {
      case SELECT_OPTION.DATE_PICKER: {
        return onConfirmSelect(selectedDate);
      }
      case SELECT_OPTION.OPTION_PICKER: {
        return onConfirmSelect(selectedOption);
      }
      case SELECT_OPTION.TIME_PICKER: {
        return onConfirmSelect(selectedTime);
      }
    }
  }, [selectedOption, selectType, selectedTime, selectedDate, onConfirmSelect]);
  const getSectionTitle = useCallback(() => {
    switch (selectType) {
      case SELECT_OPTION.DATE_PICKER: {
        return dataDates;
      }
      case SELECT_OPTION.TIME_PICKER: {
        return dataTimes;
      }
      default:
        return [];
    }
  }, [selectType]);

  return (
    <LinearGradientCus linear={linear} styleLinear={[styles.fullWidth]}>
      <View style={styles.content}>
        <View style={[styles.header, customHeaderStyle]}>
          <TextCus heading5 style={[styles.letterspacing]} bold>
            {selectOptionTitle}
          </TextCus>
        </View>
      </View>
      {getSectionTitle().length > 0 ? (
        <View style={styles.contentTitle}>
          <View style={styles.contentSection}>
            {getSectionTitle()?.map(section => {
              return (
                <SectionTitle
                  key={section.sectionTitle}
                  title={section.sectionTitle}
                />
              );
            })}
          </View>
        </View>
      ) : null}
      {renderSelectOption()}
      <Action onCancelSelect={onCancelSelect} onChooseSelect={onChooseSelect} />
    </LinearGradientCus>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 20,
  },
  content: {
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderBottomColor: Colors.gallery,
    borderBottomWidth: 1,
  },
  letterspacing: {
    letterSpacing: 0.4,
  },
  contentTitle: {
    flexDirection: 'column',
    backgroundColor: Colors.transparent,
  },
  contentSection: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 13,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gallery,
  },
  fullWidth: {
    width: width,
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
export default SelecterPicker;
