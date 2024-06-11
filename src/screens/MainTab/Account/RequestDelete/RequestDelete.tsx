import React, {Fragment} from 'react';
import {Buttons, LinearGradientCus, TextCus, WrapperLayout} from 'components';
import {StyleSheet, View} from 'react-native';
import {dimensions} from 'utils';
import {Colors} from 'theme';
import FastImage from 'react-native-fast-image';
import {Images} from 'assets';
import {NavigationService} from 'navigation';
import {useAccount} from 'hooks';

const {width} = dimensions;
const linear = {
  start: {x: 0.8, y: 0.1},
  end: {x: 0.7, y: 2},
  locations: [0, 1],
  colors: ['#515159', '#252528'],
};
const RequestDelete: React.FC = () => {
  const {onHandleRequestDeleteAccount, loading} = useAccount();
  return (
    <WrapperLayout
      header={{
        title: 'account.request_delete',
      }}>
      <Fragment>
        <View style={styles.wrapper}>
          <FastImage
            source={Images.account_delete_warning}
            resizeMode="contain"
            style={styles.warningImage}
          />
          <TextCus mt-32 heading3 bold orange>
            Lưu ý khi xóa tài khoản
          </TextCus>
          <View style={styles.warningContent}>
            <View style={styles.itemWarning}>
              <FastImage
                // source={ic_warning_pink}
                resizeMode="contain"
                style={styles.warningIcon}
              />
              <TextCus style={styles.textContent}>
                Mọi thông tin cá nhân và thông tin lịch sử của bạn sẽ bị xóa
              </TextCus>
            </View>
            <View style={styles.divider} />
            <View style={styles.itemWarning}>
              <FastImage
                // source={ic_warning_pink}
                resizeMode="contain"
                style={styles.warningIcon}
              />
              <TextCus style={styles.textContent}>
                Khi đã Xóa tài khoản đồng nghĩa với việc bạn sẽ không thể thực
                hiện khôi phục lại tài khoản
              </TextCus>
            </View>
          </View>
        </View>
        <LinearGradientCus linear={linear} styleLinear={[styles.btnArea]}>
          <Buttons
            onPress={() => NavigationService.goBack()}
            style={styles.btnAction}>
            <TextCus heading6 bold textAlign="center">
              Trở về
            </TextCus>
          </Buttons>
          <Buttons
            onPress={() =>
              onHandleRequestDeleteAccount({
                type: 'remove_account',
                description: '',
              })
            }
            style={[
              styles.btnAction,
              {
                backgroundColor: Colors.success,
              },
            ]}
            loading={loading}
            disabled={loading}>
            <TextCus heading6 bold textAlign="center">
              Xóa tài khoản
            </TextCus>
          </Buttons>
        </LinearGradientCus>
      </Fragment>
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  warningImage: {
    width: width - 112,
    aspectRatio: 1,
    marginTop: 56,
  },
  warningContent: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.bg_grey,
    borderRadius: 8,
  },
  warningIcon: {
    width: 16,
    height: 16,
  },
  itemWarning: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  divider: {
    width: width - 64,
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 8,
  },
  textContent: {
    marginLeft: 12,
    width: width - 92,
  },
  btnArea: {
    position: 'absolute',
    bottom: 0,
    width: width,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 30,
    paddingTop: 10,
  },
  btnContainer: {
    height: 48,
    borderRadius: 12,
    width: (width - 32) / 2 - 8,
  },
  btnAction: {
    paddingVertical: 10,
    backgroundColor: Colors.main,
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 4,
  },
});
export default RequestDelete;
