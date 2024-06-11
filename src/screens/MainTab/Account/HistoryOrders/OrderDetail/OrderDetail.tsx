import {Images} from 'assets';
import {ImageCus, KeyboardScrollView, TextCus, WrapperLayout} from 'components';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from 'theme';
import {styleSpacing} from 'utils';

export default function OrderDetail() {
  return (
    <WrapperLayout
      header={{
        title: 'Chi tiết đơn hàng',
      }}>
      <KeyboardScrollView
        styleContent={{...styleSpacing('px-0')}}
        btnBottomCus={<View />}>
        <View>
          <View style={[{...styleSpacing('p-16')}, styles.flexRow]}>
            <View
              style={[
                styles.rounded,
                {...styleSpacing('p-16')},
                {backgroundColor: Colors.white},
              ]}>
              <View style={{height: 88, width: 88}} />
            </View>
            <View style={[styles.flex1, {...styleSpacing('pt-32')}]}>
              <TextCus subtitle textAlign="right" useI18n>
                17h21 20/09/2022
              </TextCus>
              <TextCus textAlign="right" useI18n>
                5 sản phẩm
              </TextCus>
              <TextCus heading5 bold orange textAlign="right" useI18n>
                80.000.000đ
              </TextCus>
              <TextCus heading5 bold orange textAlign="right" useI18n>
                Chưa thanh toán
              </TextCus>
            </View>
          </View>
          <View style={[{...styleSpacing('p-8')}]} />
          <View
            style={[styles.bgGrey, styles.rounded, {...styleSpacing('p-12')}]}>
            <View style={[styles.flexRow]}>
              <View style={styles.col6}>
                <TextCus subtitle useI18n>
                  Trạng thái
                </TextCus>
                <TextCus bold useI18n>
                  Đã tiếp nhận
                </TextCus>
              </View>
              <View style={[{...styleSpacing('px-8')}, styles.divider]} />
              <View style={styles.col6}>
                <TextCus subtitle useI18n>
                  Tình trạng giao hàng
                </TextCus>
                <TextCus bold useI18n>
                  Từ 1 đến 2 ngày nội thành
                </TextCus>
              </View>
            </View>
            <View style={[styles.dividerDashed, {...styleSpacing('my-16')}]} />
            <>
              <TextCus subtitle useI18n>
                Giao đến
              </TextCus>
              <TextCus numberOfLines={1} useI18n>
                123 Pasteur, Phường Bến Nghé, Quận 1, TP. Hồ CHí M...
              </TextCus>
              <TextCus useI18n>Trần Thanh Thúy - 0909822604</TextCus>
            </>
            <View style={[styles.dividerDashed, {...styleSpacing('my-16')}]} />
            <>
              <TextCus subtitle useI18n>
                Chi nhánh giao hàng
              </TextCus>
              <TextCus useI18n>1976 The Coffee & Harley Davidson</TextCus>
              <TextCus useI18n>
                23 đường số 17, khu B, P. An Phú, TP, Thủ Đức, HCM
              </TextCus>
            </>
            <View style={[styles.dividerDashed, {...styleSpacing('my-16')}]} />
            <TextCus bold mb-12 useI18n>
              Số lượng: 6 sản phẩm
            </TextCus>
            {[...Array(4)].map((_, idx) => (
              <View
                key={idx}
                style={[styles.borderTop, {...styleSpacing('py-8')}]}>
                <View style={[styles.flexRow]}>
                  <ImageCus source={Images.motocycle} style={styles.image} />
                  <View style={[{...styleSpacing('ml-8')}, styles.flex1]}>
                    <TextCus bold subtitle>
                      1x 2022 HARLEY-DAVIDSON® STREET GLIDE® SPECIAL GUNSHIP
                      GRAY
                    </TextCus>
                    <TextCus>Gray</TextCus>
                    <TextCus bold>800.000.000đ</TextCus>
                  </View>
                </View>
                <View>
                  <TextCus bold mb-8>
                    Quà tặng
                  </TextCus>
                  <TextCus subtitle bold>
                    Cà Phê Rang Mộc Chuyên Biệt Cho Pha Máy
                  </TextCus>
                  <TextCus>Trị giá: 130.000₫</TextCus>
                </View>
              </View>
            ))}
            <View style={[styles.dividerDashed, {...styleSpacing('my-16')}]} />
            <>
              <TextCus subtitle useI18n>
                Ghi chú
              </TextCus>
              <TextCus useI18n>Gọi cho tôi trước khi giao hàng</TextCus>
            </>
            <View style={[styles.dividerDashed, {...styleSpacing('my-16')}]} />
            <View style={[styles.flexRow, styles.justBetween]}>
              <TextCus bold subtitle useI18n>
                Ước tính
              </TextCus>
              <TextCus bold subtitle>
                800.000.000đ
              </TextCus>
            </View>
            <View style={[styles.dividerDashed, {...styleSpacing('my-16')}]} />
            <View style={[styles.flexRow, styles.justBetween]}>
              <TextCus bold subtitle useI18n>
                Phí vận chuyển
              </TextCus>
              <TextCus bold subtitle>
                1.200.000đ
              </TextCus>
            </View>
            <View style={[styles.dividerDashed, {...styleSpacing('my-16')}]} />
            <View style={[styles.flexRow, styles.justBetween]}>
              <TextCus bold subtitle useI18n>
                Giảm giá{' '}
                <TextCus bold orange>
                  KM50
                </TextCus>
              </TextCus>
              <TextCus bold subtitle>
                -5.000.000đ
              </TextCus>
            </View>
            <View style={[styles.dividerDashed, {...styleSpacing('my-16')}]} />
            <View style={[styles.flexRow, styles.justBetween]}>
              <TextCus bold subtitle useI18n>
                Tổng tiền thanh toán
              </TextCus>
              <TextCus bold subtitle orange>
                795.800.000đ
              </TextCus>
            </View>
          </View>
        </View>
      </KeyboardScrollView>
    </WrapperLayout>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  justBetween: {
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
  rounded: {
    borderRadius: 16,
  },
  bgGrey: {
    backgroundColor: Colors.bg_grey,
  },
  col6: {
    width: '50%',
    flex: 1,
  },
  divider: {
    borderLeftColor: Colors.white,
    borderLeftWidth: 1,
  },
  dividerDashed: {
    borderBottomColor: Colors.white,
    borderBottomWidth: 0.5,
  },
  borderTop: {
    borderTopColor: Colors.white,
    borderTopWidth: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
});
