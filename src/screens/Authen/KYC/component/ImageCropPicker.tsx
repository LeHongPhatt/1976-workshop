import React, {useCallback, useRef, useState} from 'react';
import {
  BottomSheetModals,
  IconCus,
  ImageCus,
  LinearGradientCus,
  TextCus,
  TouchCus,
} from 'components';
import {InteractionManager, Platform, StyleSheet, View} from 'react-native';
import ImagePicker, {Options, Image} from 'react-native-image-crop-picker';
import BottomSheet from '@gorhom/bottom-sheet';
import {Colors} from 'theme';
import {dimensions} from 'utils';
import {useUpload} from 'hooks';
import {Control, useWatch} from 'react-hook-form';
import {IFormInfoUser} from "types";
const {width} = dimensions;
const UploadImageConfig: Options = {
  width: width,
  height: width,
  cropping: false,
  includeBase64: false,
  multiple: false,
};
interface IProps {
  onChangePicture: (image: string) => void;
  control: Control<IFormInfoUser>;
}
const ImageCropPicker: React.FC<IProps> = ({control, onChangePicture}) => {
  const {onUploadimage} = useUpload();
  const imageUser = useWatch({
    control,
    name: 'image',
  });
  const [picture, setPicture] = useState<Image>({} as Image);
  const refModal = useRef<BottomSheet>(null);

  const uploadImage = ({mime, filename, path}: Image) => {
    if (filename) {
      filename = `${new Date().getTime()}_${filename}`;
    }
    return {
      filename,
      fileType: mime,
      uri: Platform.OS === 'android' ? path : path.replace('file://', ''),
    };
  };

  const onOpenCamera = useCallback(() => {
    refModal.current?.close();
    InteractionManager.runAfterInteractions(() => {
      ImagePicker.openCamera({
        ...UploadImageConfig,
        mediaType: 'photo',
      }).then(image => {
        const infoImage = uploadImage(image as Image);
        setPicture(image as Image);
        onUploadimage(infoImage, res => {
          onChangePicture(res);
        });
      });
    });
  }, [onChangePicture, onUploadimage]);
  const onOpenLibary = useCallback(() => {
    refModal.current?.close();
    InteractionManager.runAfterInteractions(() => {
      ImagePicker.openPicker(UploadImageConfig).then(image => {
        const infoImage = uploadImage(image as Image);
        setPicture(image as Image);
        onUploadimage(infoImage, res => {
          onChangePicture(res);
        });
      });
    });
  }, [onChangePicture, onUploadimage]);
  return (
    <>
      <View style={styles.wrapLogo}>
        <TouchCus
          onPress={() => refModal.current?.snapToIndex(0)}
          style={[styles.wrapTitle]}>
          {imageUser || picture?.path ? (
            <ImageCus
              source={{uri: imageUser ?? picture?.path}}
              style={[styles.wrapTitle]}
            />
          ) : (
            <IconCus name={'camera'} size={18} color={Colors.white} />
          )}

          <View style={[styles.posBtnTitle, styles.cenItemvh]}>
            <IconCus name={'camera'} size={8} color={Colors.white} />
          </View>
        </TouchCus>
      </View>
      <BottomSheetModals
        ref={refModal}
        pressBehavior="close"
        snapPoint={['25%']}>
        <LinearGradientCus styleLinear={[styles.contaner]}>
          <TextCus textAlign="center" heading4 my-10>
            Chọn loại upload hình ảnh
          </TextCus>
          <View style={styles.content}>
            <TouchCus
              style={styles.btnImagePicker}
              onPress={onOpenCamera}
              activeOpacity={0.8}>
              <TextCus bold>Chụp ảnh</TextCus>
            </TouchCus>
            <TouchCus
              style={styles.btnImagePicker}
              onPress={onOpenLibary}
              activeOpacity={0.8}>
              <TextCus bold>Thư viện</TextCus>
            </TouchCus>
          </View>
        </LinearGradientCus>
      </BottomSheetModals>
    </>
  );
};
const styles = StyleSheet.create({
  wrapTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.border,
  },
  cenItemvh: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapLogo: {
    alignItems: 'center',
    marginTop: 20,
  },
  posBtnTitle: {
    bottom: 5,
    right: 5,
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.main,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  contaner: {
    flex: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    paddingHorizontal: 16,
  },
  btnImagePicker: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
    marginBottom: 10,
  },
});
export default ImageCropPicker;
