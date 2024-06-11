import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Platform,
  I18nManager,
  EmitterSubscription,
  Keyboard,
  StyleSheet,
} from 'react-native';
import {Colors} from 'theme';
import Clipboard from '@react-native-clipboard/clipboard';
import {FontWeight} from 'theme/typography';
const majorVersionIOS = parseInt(String(Platform.Version), 10);
export const isAutoFillSupported =
  Platform.OS === 'ios' && majorVersionIOS >= 12;

export const codeToArray = (code?: string): string[] => code?.split('') ?? [];

type OTPInputProps = {
  pinCount: number;
  onCodeFilled?: (code: string) => void;
  autoFocusOnLoad?: boolean;
  code?: string;
  error?: string | undefined;
  onChange: (code: string) => void;
};

const OTPInput: FC<OTPInputProps> = ({
  code = undefined,
  autoFocusOnLoad = true,
  pinCount = 6,
  onCodeFilled = undefined,
  error,
  onChange,
}) => {
  const fields = useRef<TextInput[] | null[]>([]);
  const keyboardDidHideListener = useRef<null | EmitterSubscription>(null);
  const timer = useRef<null | ReturnType<typeof setTimeout>>(null);
  const hasCheckedClipBoard = useRef(false);
  const clipBoardCode = useRef('');
  const [digits, setDigits] = useState(codeToArray(code));
  const [selectedIndex, setSelectedIndex] = useState(autoFocusOnLoad ? 0 : -1);
  console.log(error);
  useEffect(() => {
    copyCodeFromClipBoardOnAndroid();
    bringUpKeyBoardIfNeeded();
    fields.current?.[0]?.focus();
    keyboardDidHideListener.current = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardDidHide,
    );
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
      keyboardDidHideListener.current?.remove();
    };
  }, []);

  const getDigits = useCallback(
    () => (code === undefined ? digits : code.split('')),
    [code, digits],
  );

  const focusField = useCallback((index: number) => {
    if (
      fields.current !== null &&
      fields.current[index] !== null &&
      fields.current[index] !== undefined &&
      index < fields.current.length
    ) {
      fields.current?.[index]?.focus();
      setSelectedIndex(index);
    }
  }, []);

  const blurAllFields = useCallback(() => {
    if (fields.current !== null) {
      fields.current.forEach(field => {
        if (field !== null) {
          field?.blur();
        }
      });
      setSelectedIndex(-1);
    }
  }, []);

  const checkPinCodeFromClipBoard = useCallback(() => {
    const regexp = new RegExp(`^\\d{${pinCount}}$`);
    Clipboard.getString()
      .then(codeFromClipboard => {
        if (
          hasCheckedClipBoard.current &&
          regexp.test(codeFromClipboard) &&
          clipBoardCode.current !== codeFromClipboard
        ) {
          setDigits(codeToArray(codeFromClipboard));
          blurAllFields();
          onCodeFilled && onCodeFilled(codeFromClipboard);
        }
        clipBoardCode.current = codeFromClipboard;
        hasCheckedClipBoard.current = true;
      })
      .catch(() => {});
  }, [blurAllFields, onCodeFilled, pinCount]);

  const copyCodeFromClipBoardOnAndroid = useCallback(() => {
    if (Platform.OS === 'android') {
      checkPinCodeFromClipBoard();
      timer.current = setInterval(checkPinCodeFromClipBoard, 400);
    }
  }, [checkPinCodeFromClipBoard]);

  const bringUpKeyBoardIfNeeded = useCallback(() => {
    const currentDigits = getDigits();
    const focusIndex = currentDigits.length ? currentDigits.length - 1 : 0;
    if (focusIndex < pinCount && autoFocusOnLoad) {
      focusField(focusIndex);
    }
  }, [autoFocusOnLoad, focusField, getDigits, pinCount]);

  const handleKeyboardDidHide = useCallback(() => {
    blurAllFields();
  }, [blurAllFields]);

  const onChangeText = useCallback(
    (currentIndex: number, text: string) => {
      let index = currentIndex;
      const currentDigits = getDigits();

      let newDigits = currentDigits.slice();
      const oldTextLength =
        newDigits?.[index] !== undefined ? newDigits?.[index]?.length ?? 0 : 0;
      const newTextLength = text.length;
      if (newTextLength - oldTextLength === pinCount) {
        // user pasted text in.
        newDigits = text.split('').slice(oldTextLength, newTextLength);
        setDigits(newDigits);
      } else {
        if (text.length === 0) {
          if (newDigits.length > 0) {
            newDigits = newDigits.slice(0, newDigits.length - 1);
          }
        } else {
          text.split('').forEach(value => {
            if (index < pinCount) {
              newDigits[index] = value;
              index += 1;
            }
          });
          index -= 1;
        }

        setDigits(newDigits);
      }

      const result = newDigits.join('');
      onChange(result);
      if (result.length >= pinCount) {
        onCodeFilled && onCodeFilled(result);
        focusField(pinCount - 1);
        blurAllFields();
      } else if (text.length > 0 && index < pinCount - 1) {
        focusField(index + 1);
      }
    },
    [getDigits, pinCount, onCodeFilled, focusField, blurAllFields, onChange],
  );

  const onKeyPress = useCallback(
    (index: number, key: string) => {
      const currentDigits = getDigits();

      if (key === 'Backspace') {
        if (currentDigits[index] !== undefined && index >= 0) {
          onChangeText(index - 1, '');
          if (index > 0) {
            focusField(index - 1);
          }
          return;
        }
        if (currentDigits[index] === undefined && index >= 0) {
          focusField(index - 1);
        }
      }
    },
    [getDigits, focusField, onChangeText],
  );

  return (
    <View testID="OTPInput">
      <TouchableWithoutFeedback
        onPress={() => {
          const filledPinCount = digits.filter(
            digit => digit !== null && digit !== undefined,
          ).length;
          focusField(Math.min(filledPinCount, pinCount - 1));
        }}>
        <View style={styles.wrapperRenderTextFields}>
          {Array(pinCount)
            .fill(null)
            .map((_, index) => (
              <View
                pointerEvents="none"
                key={`${index}view`}
                testID="inputSlotView">
                <TextInput
                  testID="textInput"
                  underlineColorAndroid="rgba(0,0,0,0)"
                  style={[
                    styles.textInputStyle,
                    {
                      borderColor: error ? Colors.main : Colors.white,
                      color: error ? Colors.main : Colors.white,
                    },
                  ]}
                  ref={ref => {
                    fields.current[index] = ref;
                  }}
                  onChangeText={text => {
                    if (text) {
                      onChangeText(index, text);
                    }
                  }}
                  onKeyPress={({nativeEvent: {key}}) => {
                    onKeyPress(index, key);
                  }}
                  value={digits[index]}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  selectionColor={Colors.white}
                  secureTextEntry={false}
                  numberOfLines={1}
                />
              </View>
            ))}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperRenderTextFields: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
  },
  textInputStyle: {
    fontSize: 30,
    fontWeight: FontWeight.bold,
    textAlign: 'center',
    color: Colors.white,
    borderBottomWidth: 2,
    width: 40,
    maxWidth: 40,
    overflow: 'hidden',
    height: 52,
    borderColor: Colors.white,
  },
});

export default OTPInput;
