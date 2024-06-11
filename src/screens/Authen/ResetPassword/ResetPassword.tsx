import {yupResolver} from '@hookform/resolvers/yup';
import {
  IconCus,
  KeyboardScrollView,
  TextCus,
  TextInputs,
  WrapperLayout,
} from 'components';
import React, {useCallback} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View} from 'react-native';
import {Colors} from 'theme';
import {styleSpacing, yupSchemaRegister} from 'utils';
import styles from './styles';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from 'types';
import {NavigationService, Routes} from 'navigation';

interface IFormPassword {
  password: string;
  confirmPassword: string;
}
export default function ResetPassword() {
  const route = useRoute<RouteProp<RootStackParamList, 'InputPassword'>>();
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<IFormPassword>({
    mode: 'onSubmit',
    resolver: yupResolver(yupSchemaRegister),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onHandlePassword = useCallback(
    (value: IFormPassword) => {
      NavigationService.navigate(Routes.KYC, {
        ...route.params,
        password: value.password,
      });
    },
    [route.params],
  );
  return (
    <WrapperLayout
      isBgStatusBar
      header={{
        title: '',
        style: {
          backgroundColor: Colors.bg_main,
        },
      }}>
      <KeyboardScrollView
        onPress={handleSubmit(onHandlePassword)}
        disabled={false}
        loading={false}>
        <View style={styles.wrapLogo}>
          <View style={[styles.wrapTitle, styles.cenItemvh]}>
            <IconCus name={'lock'} size={18} color={Colors.white} />
          </View>
          <View style={[styles.cenItem, styleSpacing('my-16')]}>
            <TextCus heading1 useI18n>
              auth.resetpwd_title
            </TextCus>
            <TextCus useI18n mt-20>
              auth.resetpwd_subtitle
            </TextCus>
          </View>
        </View>
        <Controller
          control={control}
          name="password"
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <>
              <TextInputs
                styleInput={{...styleSpacing('px-10')}}
                styleContent={[styleSpacing('mb-10')]}
                autoCapitalize="none"
                placeholder={'auth.resetpwd_title'}
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                secureTextEntry
                isPassword
                leftIcon={
                  <IconCus name={'lock'} size={18} color={Colors.white} />
                }
                error={errors.password?.message as string}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <>
              <TextInputs
                styleInput={{...styleSpacing('px-10')}}
                styleContent={[styleSpacing('mb-10')]}
                autoCapitalize="none"
                placeholder={'auth.resetpwd_confirm_title'}
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                secureTextEntry
                isPassword
                leftIcon={
                  <IconCus name={'lock'} size={18} color={Colors.white} />
                }
                error={errors.confirmPassword?.message as string}
              />
            </>
          )}
        />
      </KeyboardScrollView>
    </WrapperLayout>
  );
}
