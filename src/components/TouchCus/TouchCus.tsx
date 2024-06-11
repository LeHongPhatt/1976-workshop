import React, {ReactNode} from 'react';
import {TouchableOpacity, TouchableWithoutFeedbackProps} from 'react-native';

export function TouchCus(props: ITextInputs) {
  const {onPress, style, ...rest} = props;
  return (
    <TouchableOpacity onPress={onPress} style={style} {...rest}>
      {props.children}
    </TouchableOpacity>
  );
}

export interface ITextInputs extends TouchableWithoutFeedbackProps {
  style?: any;
  children: ReactNode;
  onPress: () => void;
  activeOpacity?: number;
  hitSlop?: any;
}
