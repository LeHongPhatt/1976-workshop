import React, {ReactNode} from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {Colors} from 'theme';
// import {Texts} from 'components';
import styles from './styles';

const Buttons = (props: IButtons) => {
  const {
    style,
    icon,
    outline,
    full,
    round,
    loading,
    shadow,
    children,
    disabled,
    success,
    ...rest
  } = props;

  return (
    <TouchableOpacity
      {...rest}
      style={[
        [styles.default, {backgroundColor: Colors.main}],
        outline && [
          styles.outline,
          // {backgroundColor: Colors.card, borderColor: Colors.main},
        ],
        shadow && styles.shadow,
        full && styles.full,
        round && styles.round,
        style,
        disabled && {backgroundColor: Colors.disabled},
        success && {backgroundColor: Colors.success},
      ]}
      activeOpacity={0.9}
      disabled={disabled}>
      {icon ? icon : null}
      {loading ? (
        <ActivityIndicator
          size="small"
          color={outline ? Colors.main : Colors.white}
          style={styles.padLeft5}
        />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
export default Buttons;
export interface IButtons {
  style?: any;
  shadow?: boolean;
  children?: ReactNode;
  icon?: ReactNode;
  outline?: boolean;
  full?: boolean;
  round?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  success?: boolean;
}
