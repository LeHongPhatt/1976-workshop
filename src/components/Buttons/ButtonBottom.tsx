import React from 'react';
import {IconCus} from 'components/IconCus';
import {LinearGradientCus} from 'components/LinearGradientCus';
import {TextCus} from 'components/TextCus';
import {Colors} from 'theme';
import styles from './styles';
import Buttons from './Buttons';
import {ViewStyle} from 'react-native';
import {IconNames} from 'assets';

interface Props {
  onPress: () => void;
  loading?: boolean;
  textBtn?: string;
  disabled?: boolean;
  styleAction?: ViewStyle;
  isShowIcon?: boolean;
}
const linear = {
  start: {x: 0.6, y: -1},
  end: {x: 0.5, y: 1.5},
  locations: [0, 1],
  colors: ['#515159', '#252528'],
};
const ButtonBottom: React.FC<Props> = ({
  onPress,
  loading,
  disabled,
  textBtn,
  styleAction,
  isShowIcon,
}) => {
  return (
    <LinearGradientCus
      linear={linear}
      styleLinear={[styles.actionBottom, styleAction!]}>
      <Buttons
        style={[styles.flex1, styles.btlogi, styles.btnActive]}
        onPress={onPress}
        disabled={disabled}
        loading={loading}>
        <TextCus useI18n heading5>
          {textBtn ?? 'continue'}
        </TextCus>
        {isShowIcon && (
          <IconCus
            style={styles.ml8}
            name={IconNames.ARROW_RIGHT}
            size={16}
            color={Colors.white}
          />
        )}
      </Buttons>
    </LinearGradientCus>
  );
};
export default ButtonBottom;
