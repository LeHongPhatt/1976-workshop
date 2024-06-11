import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import {
  BottomSheetModals,
  LinearGradientCus,
  TextCus,
  TouchCus,
} from 'components';
import {View, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {useNotification} from 'hooks';
interface IProps {}
export interface IRefBottomNoti {
  onCloseModal: () => void;
  onShowModal: () => void;
}
const BottomSheetNoti = forwardRef<IRefBottomNoti, IProps>((props, ref) => {
  const refModal = useRef<BottomSheet>(null);
  useImperativeHandle(ref, () => {
    return {
      onCloseModal,
      onShowModal,
    };
  });
  const onCloseModal = () => refModal.current?.close();
  const onShowModal = () => refModal.current?.snapToIndex(0);
  const {onSeenAllNotification, deleteAllNotification} = useNotification();
  const onSeenAllNoti = useCallback(() => {
    onSeenAllNotification(undefined, () => {
      onCloseModal();
    });
  }, [onSeenAllNotification]);
  const deleteAllNoti = useCallback(() => {
    deleteAllNotification(undefined, () => {
      onCloseModal();
    });
  }, [deleteAllNotification]);

  return (
    <BottomSheetModals
      ref={refModal}
      pressBehavior={'close'}
      snapPoint={[200, 500]}>
      <LinearGradientCus styleLinear={[styles.contaner]}>
        <View style={styles.content}>
          <TouchCus
            onPress={onSeenAllNoti}
            style={styles.btnImagePicker}
            activeOpacity={0.8}>
            <TextCus bold textAlign="center">
              Xem tất cả
            </TextCus>
          </TouchCus>
          <TouchCus
            onPress={deleteAllNoti}
            style={styles.btnImagePicker}
            activeOpacity={0.8}>
            <TextCus bold textAlign="center">
              Xóa tất cả
            </TextCus>
          </TouchCus>
          <TouchCus
            style={[
              styles.btnImagePicker,
              {
                borderBottomWidth: 0,
              },
            ]}
            onPress={onCloseModal}
            activeOpacity={0.8}>
            <TextCus bold textAlign="center">
              Hủy
            </TextCus>
          </TouchCus>
        </View>
      </LinearGradientCus>
    </BottomSheetModals>
  );
});
const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  btnImagePicker: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 10,
  },
});
export default BottomSheetNoti;
