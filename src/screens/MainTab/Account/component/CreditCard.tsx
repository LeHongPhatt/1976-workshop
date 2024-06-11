import React from 'react';
import {QrCode, TextCus} from 'components';
import {View, StyleSheet} from 'react-native';
import convertToCreditCard from 'utils/convertToCreditCard';
import {BaseStyle, Colors} from 'theme';
import ProgressRank from './ProgressRank';
import {IUser} from 'types';
import {formatCurrency} from 'utils';
interface IProps {
  userInfo?: IUser;
  isLoggedIn: boolean;
}
const CreditCard: React.FC<IProps> = ({userInfo, isLoggedIn}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <View style={styles.cardCustomerText}>
          <TextCus heading4 useI18n>
            {isLoggedIn ? userInfo?.name : 'new_member'}
          </TextCus>
          <TextCus subtitle mb-8>
            {formatCurrency(userInfo?.current_point as number)} điểm
          </TextCus>
        </View>
        <View style={styles.qrCodeImg}>
          <QrCode
            value={userInfo?.wallet_address ?? '000000'}
            size={70}
            styleQrcode={styles.qrCode}
          />
        </View>
      </View>
      <View style={[styles.common]}>
        {convertToCreditCard(userInfo?.wallet_address, isLoggedIn).map(
          (item, index) => {
            return (
              <TextCus heading4 textAlign="center" mt-30 mb-12 key={index}>
                {item}
              </TextCus>
            );
          },
        )}
      </View>
      {userInfo?.total_point ? <ProgressRank {...userInfo} /> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    ...BaseStyle.boxShadow,
    backgroundColor: Colors.main,
    marginBottom: 10,
    marginHorizontal: 16,
    marginTop: 16,
  },
  common: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardCustomerText: {},
  qrCodeImg: {},
  qrCode: {
    padding: 10,
  },
});
export default CreditCard;
