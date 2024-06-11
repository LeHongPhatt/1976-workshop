import {Images} from 'assets';
import Icon from 'assets/svg/Icon';
import {
  Buttons,
  ImageCus,
  KeyboardScrollView,
  TextCus,
  WrapperLayout,
} from 'components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  callNumber,
  dimensions,
  openLink,
  openLinks,
  openMapByLatLng,
} from 'utils';

const {width} = dimensions;
const Support = () => {
  return (
    <WrapperLayout
      header={{
        title: 'support.title',
      }}>
      <KeyboardScrollView
        styleContent={styles.wrapperContent}
        btnBottomCus={
          <>
            <Buttons
              success
              onPress={() => openLinks('https://zalo.me/0939319839', true)}
              style={[styles.btnAction]}>
              <TextCus bold useI18n>
                support.chat
              </TextCus>
            </Buttons>
            <Buttons
              onPress={() => callNumber('0939319839')}
              style={styles.btnAction}>
              <TextCus bold useI18n>
                support.call
              </TextCus>
            </Buttons>
          </>
        }>
        <ImageCus
          source={Images.support}
          style={styles.imageSupport}
          resizeMode="contain"
        />
        <TextCus bold>Bạn đang cần hỗ trợ kỹ thuật?</TextCus>
        <TextCus>
          Bộ phận chăm sóc khách hàng sẵn sàng hỗ trợ bạn. Bạn chỉ cần
          <TextCus success bold>
            {' '}
            trò chuyện qua Zalo ngay{' '}
          </TextCus>
          hoặc
          <TextCus orange bold>
            {' '}
            gọi ngay{' '}
          </TextCus>
          để được hỗ trợ.
        </TextCus>
        <TextCus mb-10>Hoặc bạn cũng có thể liên hệ:</TextCus>
        <View style={styles.contactItem}>
          <Icon.SupportPhone />
          <TextCus ml-8 onPress={() => callNumber('0939319839')}>
            0939.319.839
          </TextCus>
        </View>
        <View style={styles.contactItem}>
          <Icon.SupportAddress />
          <TextCus
            ml-8
            onPress={() =>
              openMapByLatLng(
                '10.7999828',
                '106.7406107',
                '23 đường số 17, khu B, P. An Phú, (Q.2 cũ) TP, Thủ Đức, HCM',
              )
            }>
            23 đường số 17, khu B, P. An Phú, (Q.2 cũ) TP, Thủ Đức, HCM
          </TextCus>
        </View>
        <View style={styles.contactItem}>
          <Icon.SupportEmail />
          <TextCus
            ml-8
            onPress={() => openLink('email', '1976workshop@gmail.com')}>
            1976workshop@gmail.com
          </TextCus>
        </View>
      </KeyboardScrollView>
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  imageSupport: {
    width: width,
    height: 300,
    alignSelf: 'center',
    marginBottom: 14,
  },
  wrapperContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
  },
  btnAction: {
    flex: 1,
    marginHorizontal: 5,
  },
  contactItem: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Support;
