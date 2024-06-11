import React from 'react';
import {TextCus, WrapperLayout} from 'components';
import {ScrollView, StyleSheet, View} from 'react-native';

const Term: React.FC = () => {
  return (
    <WrapperLayout
      header={{
        title: 'account.term',
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.wrapper}>
        <View style={styles.flexContent}>
          <TextCus style={styles.content}>1. </TextCus>
          <TextCus style={styles.content}>
            Đối với các dịch vụ về chuyến bay, khách sạn, bảo hiểm, xe lửa và
            thuê xe được cung cấp trên Cổng Thông Tin (gọi chung là "Dịch Vụ Du
            Lịch"), Chúng Tôi chỉ hành động trong phạm vi chức năng của mình với
            tư cách là bên trung gian. Để đạt được mục đích đó, vai trò và nghĩa
            vụ của chúng tôi chỉ giới hạn ở hoạt động dàn xếp Dịch Vụ Du Lịch do
            các bên thứ ba cung cấp, chẳng hạn như hãng hàng không, công ty điều
            hành du lịch, khách sạn, công ty bảo hiểm, công ty cho thuê xe hoặc
            các nhà cung cấp dịch vụ khác (sau đây gọi riêng là "Nhà Cung Cấp
            Dịch Vụ").
          </TextCus>
        </View>
        <View style={styles.flexContent}>
          <TextCus style={styles.content}>2. </TextCus>
          <TextCus style={styles.content}>
            Do đó, thỏa thuận cung cấp thực tế Dịch Vụ Du Lịch (ví dụ: hợp đồng
            chuyên chở, hợp đồng bảo hiểm, hợp đồng cho thuê) có hiệu lực trực
            tiếp giữa Quý Vị và Nhà Cung Cấp Dịch Vụ liên quan. Chúng Tôi không
            phải là bên đồng cung cấp Dịch Vụ Du Lịch và Chúng Tôi không phải là
            một bên trong mối quan hệ hợp đồng giữa Quý Vị và Nhà Cung Cấp Dịch
            Vụ.
          </TextCus>
        </View>
        <View style={styles.flexContent}>
          <TextCus style={styles.content}>3.</TextCus>
          <TextCus style={styles.content}>
            Bằng cách sử dụng Cổng Thông Tin để mua Dịch Vụ Du Lịch, nghĩa là
            Quý Vị ủy quyền cho Chúng Tôi dàn xếp với (các) Nhà Cung Cấp Dịch Vụ
            tương ứng thay mặt cho Quý Vị, bao gồm cả dàn xếp việc thanh toán
            Dịch Vụ Du Lịch này, để đảm bảo giao dịch giữa Quý Vị và (các) Nhà
            Cung Cấp Dịch Vụ được thực hiện. Giá dành cho Dịch Vụ Du Lịch thực
            tế có thể bao gồm tiền hoa hồng cho các dịch vụ mà chúng tôi trả cho
            việc dàn xếp thỏa thuận giữa quý vị và Nhà Cung Cấp Dịch Vụ liên
            quan.
          </TextCus>
        </View>
        <View style={styles.flexContent}>
          <TextCus style={styles.content}>4.</TextCus>
          <TextCus style={styles.content}>
            Trách nhiệm thực hiện thực tế Dịch Vụ Du Lịch được dàn xếp thông qua
            Cổng Thông Tin chỉ thuộc về Nhà Cung Cấp Dịch Vụ liên quan. Trong
            vai trò là bên trung gian, Chúng Tôi không chịu bất kỳ trách nhiệm
            nào đối với Dịch Vụ Du Lịch do Nhà Cung Cấp Dịch Vụ cung cấp và
            Chúng Tôi không cam đoan hay đảm bảo (rõ ràng hay ngụ ý) về tính phù
            hợp hoặc chất lượng của Dịch Vụ Du Lịch được dàn xếp trên Cổng Thông
            Tin. Khi Quý Vị có bất kỳ khiếu nại nào liên quan đến việc thực hiện
            hay không thực hiện Dịch Vụ Du Lịch, Nhà Cung Cấp Dịch Vụ là người
            nhận chịu trách nhiệm.
          </TextCus>
        </View>
        <View style={styles.flexContent}>
          <TextCus style={styles.content}>5.</TextCus>
          <TextCus style={styles.content}>
            Nếu Quý Vị có cơ hội yêu cầu mong muốn đặc biệt (chẳng hạn như các
            bữa ăn đặc biệt, trang thiết bị cho người khuyết tật hoặc ghế trẻ
            em) khi đặt vé Dịch Vụ Du Lịch, Chúng Tôi sẽ chuyển yêu cầu của quý
            vị tới Nhà Cung Cấp Dịch Vụ liên quan. Tuy nhiên, Chúng Tôi không
            chịu trách nhiệm về việc Nhà Cung Cấp Dịch Vụ có thể thực sự thực
            hiện những mong muốn đó hay không.
          </TextCus>
        </View>
      </ScrollView>
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  flexContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    fontSize: 14,
    lineHeight: 24,
  },
});
export default Term;
