import Icon from 'assets/svg/Icon';
import {TextCus, TouchCus} from 'components';
import React, {ComponentType} from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {Colors} from 'theme';
import {getComponent} from 'utils';
interface IProps {
  icon?: React.ReactNode;
  location?: string;
  address?: string;
  isDefault?: boolean;
  info?: string;
  note?: string;
  edit?: boolean;
  isViewTouch?: boolean;
  styleContent?: StyleProp<ViewStyle>;
  styleContainer?: StyleProp<ViewStyle>;
  onPress?: () => void;
  noBorder?: boolean;
  title?: string;
  onEditAddress?: () => void;
  styleRight?: StyleProp<ViewStyle>;
}

const ListItem: React.FC<IProps> = ({
  icon,
  location,
  address,
  isDefault,
  info,
  note,
  edit = true,
  isViewTouch,
  styleContent,
  styleContainer,
  onPress,
  noBorder,
  title,
  onEditAddress,
  styleRight,
}) => {
  const ViewTouch = getComponent(isViewTouch) as ComponentType<
    ViewProps | TouchableOpacityProps
  >;
  return (
    <View
      style={[
        styles.container,
        noBorder && styles.clearBorder,
        styles.pH16,
        styleContainer,
      ]}>
      <ViewTouch style={[styles.content, styleContent]} onPress={onPress}>
        <View style={[styles.flexRow, styles.alignCenter]}>
          {icon || <Icon.Address />}
          <View style={[styles.flx, styles.ml12, styleRight]}>
            {location && (
              <TextCus bold>
                {location}{' '}
                {isDefault && (
                  <TextCus bold orange>
                    (Mặc định)
                  </TextCus>
                )}
              </TextCus>
            )}
            {address && (
              <TextCus useI18n subtitle numberOfLines={1}>
                {address}
              </TextCus>
            )}
            {title && (
              <TextCus useI18n bold>
                {title}
              </TextCus>
            )}
            {info && <TextCus subtitle>{info}</TextCus>}
            {note && <TextCus subtitle>Ghi chú: {note}</TextCus>}
          </View>
        </View>
      </ViewTouch>
      {edit && (
        <TouchCus onPress={onEditAddress}>
          <Icon.Edit />
        </TouchCus>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  clearBorder: {
    borderBottomWidth: 0,
  },
  content: {
    flex: 1,
  },
  flx: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  ml12: {
    marginLeft: 12,
  },
  pH16: {
    paddingHorizontal: 16,
  },
});
export default ListItem;
