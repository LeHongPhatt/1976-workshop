import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
  const [isShowKeyboard, setIsShowKeyboard] = useState<boolean>(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      e => {
        setKeyboardHeight(e.endCoordinates.height);
        setIsShowKeyboard(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
        setIsShowKeyboard(false);
      },
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return {
    keyboardHeight,
    isShowKeyboard,
  };
};
