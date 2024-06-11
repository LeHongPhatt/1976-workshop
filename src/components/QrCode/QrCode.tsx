import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {View, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Colors} from 'theme';
interface IProps {
  value: string;
  size: number;
  styleQrcode?: StyleProp<ViewStyle>;
}
const QrCode: React.FC<IProps> = ({value, size = 85, styleQrcode}) => {
  return (
    <View style={[styles.container, styleQrcode]}>
      <QRCode value={value} size={size} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: Colors.white,
    borderRadius: 12,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
export default QrCode;
