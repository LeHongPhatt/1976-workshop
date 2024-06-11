import {yupResolver} from '@hookform/resolvers/yup';
import {
  IconCus,
  KeyboardScrollView,
  MainLayout,
  TextCus,
  TextInputs,
  WrapperLayout,
} from 'components';
import React, {useCallback} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {RouteProp, useRoute} from '@react-navigation/native';
import {View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styleSpacing, yupSchemaRegister} from 'utils';
import styles from './styles';
import {RootStackParamList} from 'types';
import {NavigationService, Routes} from 'navigation';

type IFormRegister = {
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const route = useRoute<RouteProp<RootStackParamList, 'Register'>>();
  const {
    control,
    handleSubmit,
    formState: {errors, isDirty, isValid},
  } = useForm<IFormRegister>({
    mode: 'onSubmit',
    resolver: yupResolver(yupSchemaRegister),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  const onHandleRegister = useCallback(
    (value: IFormRegister) => {
      const {password} = value;
      NavigationService.navigate(Routes.KYC, {
        password,
        ...route.params,
      });
    },
    [route.params],
  );
  return (
    <WrapperLayout
      isBgStatusBar
      header={{
        style: {
          backgroundColor: Colors.bg_main,
        },
      }}>
      <KeyboardScrollView
        onPress={handleSubmit(onHandleRegister)}
        loading={false}
        disabled={!isDirty && !isValid}>
        <View style={[styleSpacing('m-24')]}>
          <View style={styles.cenItem}>
            <TextCus useI18n mb-10 heading1>
              auth.resetpwd_title
            </TextCus>
            <TextCus useI18n subtitle mb-30>
              auth.resetpwd_subtitle
            </TextCus>
          </View>
          <Controller
            control={control}
            name="password"
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputs
                styleInput={{...styleSpacing('px-10')}}
                styleContent={[styleSpacing('mb-20')]}
                placeholder="auth.resetpwd_title"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isPassword
                leftIcon={
                  <View style={styleSpacing('pr-5')}>
                    <IconCus
                      style={styles.ml8}
                      name={'lock'}
                      size={18}
                      color={Colors.white}
                    />
                  </View>
                }
                error={errors.password?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputs
                styleInput={{...styleSpacing('px-10')}}
                styleContent={[styleSpacing('mb-20')]}
                placeholder="auth.resetpwd_confirm_title"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isPassword
                leftIcon={
                  <View style={styleSpacing('pr-5')}>
                    <IconCus
                      style={styles.ml8}
                      name={'lock'}
                      size={18}
                      color={Colors.white}
                    />
                  </View>
                }
                error={errors.confirmPassword?.message}
              />
            )}
          />
        </View>
      </KeyboardScrollView>
    </WrapperLayout>
  );
}
