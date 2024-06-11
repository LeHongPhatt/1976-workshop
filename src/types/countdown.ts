import {TextStyle} from 'react-native';

export interface CountDownProps {
  initialSeconds: number;
  onTimeup: () => void;
  styleTextTime?: TextStyle;
  visible?: boolean;
  type?: 'DEFAULT' | 'TIMEOUT';
  reset?: boolean;
}
export interface CountDownRef {
  setPause: () => void;
  setStart: () => void;
}
