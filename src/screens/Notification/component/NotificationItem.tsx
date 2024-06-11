import Icon from 'assets/svg/Icon';
import {RenderHtml, TextCus, TouchCus} from 'components';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'theme';
import {INotificationItem, NOTIFICATION_TYPE} from 'types';
import {formatCurrency, formatFromNow} from 'utils';
interface IProps extends INotificationItem {}
const NotificationItem: React.FC<IProps> = ({
  type,
  title,
  data,
  created_at,
  is_read,
}) => {
  const renderContent = useCallback(
    item => {
      switch (type) {
        case NOTIFICATION_TYPE.update_point:
          return (
            <>
              <TextCus numberOfLines={2}>Phát sinh: {item?.point}</TextCus>
              <TextCus numberOfLines={2}>Nội dung: {item?.content}</TextCus>
            </>
          );
        case NOTIFICATION_TYPE.update_order_status:
          return (
            <>
              <TextCus numberOfLines={2}>Đơn hàng: {`#${item?.code}`}</TextCus>
              <TextCus numberOfLines={2}>
                Giá trị: {`${formatCurrency(item?.total_price)}đ`}
              </TextCus>
            </>
          );
        case NOTIFICATION_TYPE.update_guarantee_status:
          return (
            <>
              <TextCus numberOfLines={2}>Bảo hành: {`#${item?.code}`}</TextCus>
              <TextCus numberOfLines={2}>
                Sản phẩm: {item?.product_name}
              </TextCus>
            </>
          );
        case NOTIFICATION_TYPE.update_repair_status:
          return (
            <>
              <TextCus numberOfLines={2}>Sửa chữa: {`#${item?.code}`}</TextCus>
              <TextCus numberOfLines={2}>
                Sản phẩm: {item?.product_name}
              </TextCus>
            </>
          );
        case NOTIFICATION_TYPE.notification_detail:
          return (
            <RenderHtml
              content={item?.content.slice(0, 100)}
              style={{
                strong: {
                  fontSize: 12,
                  lineHeight: 22,
                },
                h2: {
                  fontSize: 12,
                  lineHeight: 22,
                  color: Colors.white,
                },
              }}
            />
          );
      }
    },
    [type],
  );
  return (
    <TouchCus style={styles.itemContainer} onPress={() => console.log('abba')}>
      <TextCus numberOfLines={1} heading5>
        {title}
      </TextCus>
      {renderContent(data)}
      <View style={styles.seenContainer}>
        <View
          style={[
            styles.cirlceBell,
            is_read && {backgroundColor: Colors.disabled},
          ]}>
          <Icon.SolidBell />
        </View>
        <TextCus numberOfLines={1} style={styles.itemDate}>
          {formatFromNow(created_at?.toString() as string)}
        </TextCus>
      </View>
    </TouchCus>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gallery,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  seenContainer: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
  },
  itemDate: {
    fontSize: 12,
    marginLeft: 8,
  },
  cirlceBell: {
    backgroundColor: Colors.main,
    borderRadius: 99,
    padding: 2,
  },
});
export default NotificationItem;
