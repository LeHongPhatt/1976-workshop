import React, {forwardRef, ComponentType, Fragment} from 'react';
import {useTranslation} from 'react-i18next';
import {TextCus} from 'components/TextCus';

import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
  ViewProps,
  TouchableOpacityProps,
  TextInputProps,
  TextStyle,
} from 'react-native';
import {Colors} from 'theme';
import Icon from 'assets/svg/Icon';
import {IconCus} from 'components';
import {getComponent} from 'utils';
import {StyleProp} from 'react-native';
import {Platform} from 'react-native';

export const TextInputs = forwardRef<TextInput, ITextInputs>((props, ref) => {
  const {t} = useTranslation();

  const {
    onPress,
    label,
    type,
    error,
    isRequire,
    placeholder,
    styleInput,
    onChangeText,
    onBlur,
    value,
    rightIcon,
    leftIcon,
    isPassword,
    onRightIconPress,
    keyboardType,
    isViewTouch,
    styleContent,
    styleInputContent,
    styleLabel,
    isDisabled,
    editable,
    ...rest
  } = props;

  const [showPass, setShowpass] = React.useState(isPassword);

  const renderRightIcon = () => {
    if (isPassword) {
      if (showPass) {
        return 'eye-slash';
      }
      return 'eye';
    } else {
      return rightIcon;
    }
  };

  const keyboard = () => {
    if (keyboardType) {
      return keyboardType;
    }
    return 'default';
  };
  const onPressTooglePass = () => {
    if (!isPassword) {
      if (onRightIconPress) {
        onRightIconPress();
      }
    } else {
      setShowpass(!showPass);
    }
  };
  const ViewTouch = getComponent(isViewTouch) as ComponentType<
    ViewProps | TouchableOpacityProps
  >;
  return (
    <Fragment>
      {label ? (
        <View style={styles.flexRow}>
          <TextCus heading6 mb-8 style={styleLabel}>
            {t(label)}
          </TextCus>
          {isRequire && (
            <TextCus
              ml-4
              style={[
                {
                  color: Colors.main,
                },
              ]}>
              *
            </TextCus>
          )}
        </View>
      ) : null}
      <ViewTouch onPress={onPress}>
        <View style={[styles.inputBase, styleContent]} pointerEvents={type}>
          <View
            style={[
              styles.inputStyle,
              isDisabled && {backgroundColor: Colors.bg_grey},
              {
                borderColor: error ? Colors.main : Colors.white,
              },
              styleInputContent,
            ]}>
            {leftIcon}
            <TextInput
              {...rest}
              ref={ref}
              style={[styles.textLabel, styles.input, styleInput]}
              placeholder={t(placeholder) as string}
              onChangeText={onChangeText}
              onBlur={onBlur}
              value={value}
              placeholderTextColor={Colors.white}
              keyboardType={keyboard()}
              secureTextEntry={showPass}
              editable={editable}
            />
            {isPassword ? (
              <TouchableOpacity onPress={onPressTooglePass}>
                <IconCus
                  name={renderRightIcon()}
                  color={Colors.white}
                  size={18}
                />
              </TouchableOpacity>
            ) : null}
            {type === 'none' ? (
              <Icon.ChevronRight
                width={24}
                height={24}
                color={Colors.disabled}
              />
            ) : null}
          </View>
          {error ? (
            <TextCus subtitle orange mt-4>
              {error}
            </TextCus>
          ) : null}
        </View>
      </ViewTouch>
    </Fragment>
  );
});

const styles = StyleSheet.create({
  inputBase: {
    flex: 1,
  },
  textLabel: {
    fontSize: 14,
    color: Colors.white,
  },
  input: {
    flex: 1,
    color: Colors.white,
    ...Platform.select({
      android: {
        paddingVertical: 4,
      },
      ios: {
        paddingVertical: 8,
      },
    }),
  },
  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: Colors.white,
  },
  containerFocused: {
    backgroundColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
  iconLeft: {
    width: 30,
    height: 30,
  },
  flexRow: {
    flexDirection: 'row',
  },
});
interface ITextInputs extends TextInputProps {
  label?: string;
  placeholder: string;
  onChangeText: (value: string) => void;
  onBlur?: () => void;
  value: string;
  onPress?: () => void;
  type?: 'box-none' | 'none' | 'box-only' | 'auto' | undefined;
  styleInput?: StyleProp<TextStyle>;
  styleContent?: StyleProp<ViewStyle>;
  error?: string;
  touched?: boolean;
  isRequire?: boolean;
  isFocus?: boolean;
  disabled?: boolean;
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
  isPassword?: boolean;
  onRightIconPress?: () => void;
  keyboardType?: 'default' | 'phone-pad';
  isViewTouch?: boolean;
  styleInputContent?: StyleProp<ViewStyle>;
  styleLabel?: StyleProp<TextStyle>;
  isDisabled?: boolean;
}
