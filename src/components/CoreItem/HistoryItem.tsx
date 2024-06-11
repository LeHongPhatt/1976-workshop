import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {ImageCus, TextCus, TouchCus} from 'components';
import {EXCHANGE_STATUS, IHistoryOrder} from 'types';
import {BaseStyle, Colors} from 'theme';
import {Images} from 'assets';
import {formartDateTime, styleSpacing} from 'utils';
interface IProps extends IHistoryOrder {
  onPress: () => void;
  code: string;
  status: string;
  item: any;
  iconTop: string;
  iconBottom: string;
  titleTop: string;
  titleBottom: string;
  content: string;
  styleBottom: any;
  bottomRight: any;
  statusPayment: any;
  colorStatusPayment: any;
  icStatusPayment: any;
}

const HistoryItem: React.FC<IProps> = ({
  onPress,
  code,
  status,
  iconTop,
  iconBottom,
  titleTop,
  titleBottom,
  content,
  styleBottom,
  bottomRight,
  statusPayment,
  colorStatusPayment,
  icStatusPayment,
  created_at,
}) => {
  const statusActivity = useMemo(() => {
    const res = {
      [EXCHANGE_STATUS.CANCEL]: {
        icon: Images.ic_shippingCancel,
        title: 'Đã huỷ',
        color: styles.colorCancel,
      },
      [EXCHANGE_STATUS.RECEIVED]: {
        icon: Images.ic_shippingReceived,
        title: 'Đã tiếp nhận',
        color: styles.colorReceived,
      },
      [EXCHANGE_STATUS.PROCESSING]: {
        icon: Images.ic_shippingReceived,
        title: 'Đã tiếp nhận',
      },
      [EXCHANGE_STATUS.PENDING]: {
        icon: Images.ic_shippingReceived,
        title: 'Đang xử lý',
        color: styles.colorShipping,
      },
      [EXCHANGE_STATUS.DELIVERING]: {
        icon: Images.ic_shippingReceived,
        title: 'Đang vận chuyển',
        color: styles.colorShipping,
      },
      [EXCHANGE_STATUS.SUCCESS]: {
        icon: Images.ic_shippingSuccess,
        title: 'Hoàn tất',
        color: styles.colorSuccess,
      },
    };
    return res[status];
  }, [status]);
  return (
    <TouchCus
      style={styles.itemContainer}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={styles.itemRow}>
        <View style={styles.itemLeftContentUpperProgressBar}>
          <View
            style={[
              styles.bgWithColorTitleOrder,
              {
                backgroundColor: Colors.color_f9,
              },
            ]}>
            <TextCus caption orange>
              {code}
            </TextCus>
          </View>

          <View style={{flex: 1, justifyContent: 'center'}}>
            <TextCus numberOfLines={2}>{content}</TextCus>
          </View>
        </View>
        <View style={styles.itemRightContentUpperProgressBar}>
          <View style={[BaseStyle.flexSpacingBetween]}>
            <View
              style={[
                styles.bgWithColorTitleOrder,
                {backgroundColor: Colors.bg_orange},
              ]}>
              <TextCus caption>{'Thời gian đặt'}</TextCus>
            </View>
            <TextCus caption>{formartDateTime(created_at)}</TextCus>
          </View>

          <View style={[styles.itemRow, {...styleSpacing('my-8')}]}>
            <ImageCus
              source={iconTop}
              style={styles.iconAmount}
              resizeMode={'contain'}
            />
            <TextCus ml-8>{titleTop}</TextCus>
          </View>

          <View style={[styles.itemRow]}>
            <ImageCus
              source={iconBottom}
              style={styles.iconAmount}
              resizeMode={'contain'}
            />
            <TextCus ml-8 style={[styleBottom]}>
              {titleBottom}
            </TextCus>
          </View>
        </View>
      </View>

      <View style={{...styleSpacing('my-8')}}>
        {/* <ProgressBar shippingStatus={status} /> */}
      </View>

      <View style={[BaseStyle.flexSpacingBetween]}>
        <View style={[styles.itemRow]}>
          <ImageCus
            source={statusActivity?.icon}
            style={styles.iconAmount}
            resizeMode={'contain'}
          />
          <TextCus subtitle bold ml-8>
            {statusActivity?.title}
          </TextCus>
        </View>
        {bottomRight ? (
          <View style={[styles.itemRow]}>
            <TextCus subtitle bold mr-8 color={colorStatusPayment}>
              {statusPayment}
            </TextCus>
            <ImageCus
              source={icStatusPayment}
              style={styles.iconAmount}
              resizeMode={'contain'}
            />
          </View>
        ) : null}
      </View>
    </TouchCus>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: Colors.bg_grey,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    elevation: 4,
    padding: 10,
    margin: 4,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemLeftContentUpperProgressBar: {
    flex: 0.45,
  },
  itemRightContentUpperProgressBar: {
    flex: 0.55,
    marginLeft: 12,
    borderLeftWidth: 1,
    borderLeftColor: Colors.gallery,
    paddingLeft: 8,
  },
  bgWithColorTitleOrder: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'baseline',
    borderRadius: 99,
  },
  iconAmount: {
    width: 24,
    height: 24,
  },
  shippingStatus: {
    color: Colors.color_84,
    fontSize: 12,
    lineHeight: 20,
    marginLeft: 8,
  },
  colorCancel: {
    color: Colors.color_84,
  },
  colorReceived: {
    color: Colors.color_3a,
  },
  colorShipping: {
    color: Colors.bg_orange,
  },
  colorSuccess: {
    color: Colors.success,
  },
});
export default HistoryItem;
