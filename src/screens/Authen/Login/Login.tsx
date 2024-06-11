import React, {useCallback, useEffect, useRef} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {TextInput, View} from 'react-native';

import {yupResolver} from '@hookform/resolvers/yup';
import {Images} from 'assets';
import {
  ImageCus,
  KeyboardScrollView,
  TextCus,
  TextInputs,
  TouchCus,
  WrapperLayout,
} from 'components';
import {useAuth} from 'hooks';
import {NavigationService, Routes} from 'navigation';
import {BaseStyle, FontWeight} from 'theme/typography';
import {styleSpacing, yupSchemaCheckPhone} from 'utils';
import styles from './styles';

type IFormNumberPhone = {
  phone_number: string;
};
export default function Login() {
  const refInput = useRef<TextInput>(null);
  const {onRequestCheckPhone, loading} = useAuth();
  useEffect(() => {
    refInput.current?.focus();
  }, []);
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<IFormNumberPhone>({
    mode: 'onSubmit',
    resolver: yupResolver(yupSchemaCheckPhone),
    defaultValues: {
      phone_number: '',
    },
  });
  const onCheckNumberPhone = useCallback(
    (data: IFormNumberPhone) => {
      const {phone_number} = data;
      onRequestCheckPhone(phone_number);
    },
    [onRequestCheckPhone],
  );
  return (
    <WrapperLayout isBgStatusBar noHeader isForForm>
      <KeyboardScrollView
        isShowIcon
        onPress={handleSubmit(onCheckNumberPhone)}
        loading={loading}
        disabled={loading}
        styleContent={[BaseStyle.resetPading]}>
        <View style={{...styleSpacing('px-24')}}>
          <View style={styles.wrapLogo}>
            <ImageCus
              source={Images.loginBackground}
              style={styles.boxLogo}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.cenItem}>
            <TextCus useI18n mb-10 pv-10 heading1>
              auth.login_title
            </TextCus>
            <TextCus useI18n subtitle mb-30>
              auth.login_subtitle
            </TextCus>
          </View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputs
                styleInput={{...styleSpacing('px-5')}}
                ref={refInput}
                placeholder={'phone_number'}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="phone-pad"
                error={errors.phone_number?.message as string}
                leftIcon={
                  <TextCus orange style={[{fontWeight: FontWeight.bold}]}>
                    +84
                  </TextCus>
                }
              />
            )}
            name="phone_number"
          />
          <TouchCus
            onPress={() => {
              NavigationService.navigate(Routes.HomeTabs);
            }}>
            <TextCus success heading6 useI18n mt-10 textAlign="right">
              skip
            </TextCus>
          </TouchCus>
          <View
            style={[
              styles.rowItem,
              styles.cenItemvh,
              styles.flexWrap,
              styleSpacing('mt-15'),
            ]}>
            <TextCus textAlign={'center'} mr-2>
              Bằng cách bấm tiếp tục, tôi đồng ý
            </TextCus>
            <TouchCus onPress={() => NavigationService.navigate(Routes.Term)}>
              <TextCus orange style={[BaseStyle.lineUnderline]}>
                những điều khoản và điều kiện
              </TextCus>
            </TouchCus>
            <TextCus mr-2> của ứng dụng</TextCus>
          </View>
        </View>
      </KeyboardScrollView>
    </WrapperLayout>
  );
}
