import React, {Fragment} from 'react';
import {View} from 'react-native';
import {QrCode, TextCus, TouchCus, ImageCus} from 'components';
import {
  dimensions,
  formartDateTime,
  formatCurrency,
  statusDelivery,
  statusPayment,
  styleSpacing,
} from 'utils';
import {BaseStyle, Colors} from 'theme';
import {StyleSheet} from 'react-native';
import {IHistoryOrder} from 'types';
const {width} = dimensions;
interface IProps {
  detail: IHistoryOrder;
}
const OrderContent: React.FC<IProps> = ({detail}) => {
  return (
    <Fragment>
      <View style={styles.topArea}>
        <QrCode value={detail?.order_code} size={85} />
        <View style={styles.orderSummaryWrapper}>
          <TouchCus
            style={styles.orderIdWrapper}
            onPress={() => console.log('abbaba')}>
            <TextCus subtitle color={Colors.main}>
              {`#${detail?.order_code}`}
            </TextCus>
          </TouchCus>
          <TextCus textAlign="right" subtitle mt-4>
            {formartDateTime(detail?.created_at)}
          </TextCus>
          <TextCus textAlign="right" mt-5>
            {`${detail?.details?.length || 0} sản phẩm`}
          </TextCus>
          <TextCus mt-5 textAlign="right" heading5 bold color={Colors.main}>
            {formatCurrency(detail?.total_price) + 'đ'}
          </TextCus>
          <TextCus
            textAlign="right"
            heading5
            bold
            mt-5
            color={statusPayment(detail?.payment_status)?.color}>
            {statusPayment(detail?.payment_status)?.title}
          </TextCus>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.statusArea}>
          <View style={[styles.statusItem, styles.borderRight]}>
            <TextCus subtitle>{'Trạng thái'}</TextCus>
            <TextCus
              mt-6
              bold
              color={statusDelivery(detail?.order_status).color}>
              {statusDelivery(detail?.order_status).title}
            </TextCus>
          </View>
          <View style={styles.statusItem}>
            <TextCus subtitle>{'Tình trạng giao hàng'}</TextCus>
            <TextCus mt-6 bold style={{flex: 1}} numberOfLines={1}>
              {'Từ 1 đến 2 ngày nội thành'}
            </TextCus>
          </View>
        </View>
        <View style={styles.dashSeparator} />
        <View style={styles.addressArea}>
          <TextCus subtitle>{'Giao đến'}</TextCus>
          <TextCus
            mt-6>{`${detail?.user_address?.address}, ${detail?.user_address?.ward}, ${detail?.user_address?.district}, ${detail?.user_address?.city}`}</TextCus>
          <TextCus
            mt-6>{`${detail?.user?.name} - ${detail?.user?.phone_number}`}</TextCus>
        </View>
        <View style={styles.dashSeparator} />
        <View style={styles.addressArea}>
          <TextCus subtitle>{'Chi nhánh giao hàng'}</TextCus>
          <TextCus mt-6 bold>
            {detail?.branch_address?.name}
          </TextCus>
          <TextCus mt-6>
            {`${detail?.branch_address?.address}, ${detail?.branch_address?.ward}, ${detail?.branch_address?.district}, ${detail?.branch_address?.city}`}
          </TextCus>
        </View>
        <View style={styles.dashSeparator} />
        <View style={styles.productListArea}>
          {detail?.details?.map((item, indexService) => {
            return (
              <View key={indexService}>
                <View style={[BaseStyle.flexRow]}>
                  <ImageCus
                    source={{uri: item?.product?.images[0]?.url}}
                    style={styles.image}
                  />
                  <View style={[BaseStyle.flex1, {...styleSpacing('ml-12')}]}>
                    <TextCus subtitle bold mb-6>
                      {item?.product?.name}
                    </TextCus>
                    <View>
                      <TextCus subtitle>{item?.product_attribute_name}</TextCus>
                      <TextCus heading6 bold>
                        {formatCurrency(item?.product?.price_after_discount)}
                      </TextCus>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
        {detail?.description ? (
          <View style={styles.noteArea}>
            <TextCus bold mb-8>
              {'Ghi chú đơn hàng'}
            </TextCus>
            <TextCus>{detail?.description}</TextCus>
          </View>
        ) : null}
        <View style={styles.dashSeparator} />
        <View style={styles.bottomArea}>
          <View style={styles.bottomItem}>
            <TextCus subtitle bold>
              {'Ước tính'}
            </TextCus>
            <TextCus subtitle bold>
              {`${formatCurrency(detail?.total_product_price)}đ`}
            </TextCus>
          </View>
          <View style={styles.lineSeparator} />
          {/* <View style={styles.bottomItem}>
            <TextCus subtitle bold>
              {'Phí vận chuyển '}
              <TextCus color={Colors.main} subtitle>
                {`${detail?.distance}km`}
              </TextCus>
            </TextCus>
            <TextCus subtitle bold>
              {`${formatCurrency(detail?.delivery_fee)}đ`}
            </TextCus>
          </View> */}
          {/* <View style={styles.lineSeparator} /> */}
          {detail?.discount?.code ? (
            <View style={styles.bottomItem}>
              <TextCus subtitle bold>
                {'Giảm giá '}
                <TextCus color={Colors.main} subtitle bold>
                  {detail?.discount?.code}
                </TextCus>
              </TextCus>
              <TextCus subtitle bold>
                {`-${formatCurrency(
                  detail?.discount?.is_percent
                    ? (detail?.total_product_price * detail?.discount?.value) /
                        100
                    : detail?.discount?.value,
                )}đ`}
              </TextCus>
            </View>
          ) : null}
          <View style={styles.lineSeparator} />
          <View style={styles.bottomItem}>
            <TextCus subtitle bold>
              {'Tổng cộng'}
            </TextCus>
            <TextCus color={Colors.main} bold>
              {formatCurrency(detail?.total_price) + 'đ'}
            </TextCus>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  lineSeparator: {
    borderBottomColor: Colors.disabled,
    borderBottomWidth: 1,
  },
  bottomItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 14,
  },
  noteArea: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  topArea: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  dashSeparator: {
    borderColor: Colors.white,
    borderWidth: 1,
    borderStyle: 'dashed',
    width: width - 32,
    alignSelf: 'center',
    marginVertical: 16,
  },
  bottomArea: {
    paddingHorizontal: 16,
  },
  productListArea: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  statusItem: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 16,
  },
  statusArea: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderSummaryWrapper: {
    width: width - 168,
    alignContent: 'stretch',
    height: 120,
  },
  orderIdWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#FDF8ED',
    borderRadius: 99,
    alignSelf: 'flex-start',
  },
  body: {
    backgroundColor: Colors.bg_grey,
    marginTop: 8,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 16,
    flex: 1,
  },
  addressArea: {
    paddingHorizontal: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 2,
  },
  borderRight: {
    borderRightColor: Colors.color_e5,
    borderRightWidth: 1,
  },
});
export default OrderContent;
