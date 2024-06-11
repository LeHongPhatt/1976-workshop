import {yupResolver} from '@hookform/resolvers/yup';
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  IconCus,
  KeyboardScrollView,
  TextCus,
  TextInputs,
  WrapperLayout,
} from 'components';
import {useAuth} from 'hooks';
import React, {useCallback, useEffect, useRef} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {TextInput, View} from 'react-native';
import {Colors} from 'theme';
import {RootStackParamList} from 'types';
import {styleSpacing, yupSchemaLoginPassword} from 'utils';
import styles from './styles';
type IFormPassword = {
  password: string;
};
export default function InputPassword() {
  const refInput = useRef<TextInput>(null);
  const router = useRoute<RouteProp<RootStackParamList, 'InputPassword'>>();
  useEffect(() => {
    refInput.current?.focus();
  }, []);
  const {
    control,
    handleSubmit,
    formState: {errors},
    setError,
  } = useForm<IFormPassword>({
    mode: 'onSubmit',
    resolver: yupResolver(yupSchemaLoginPassword),
    defaultValues: {
      password: '',
    },
  });
  const {onLogin, loading} = useAuth();
  const onHandleLogin = useCallback(
    (value: IFormPassword) => {
      onLogin(
        {
          ...value,
          phone_number: router?.params?.phone_number,
        },
        res => setError('password', {message: res}),
      );
    },
    [onLogin, router?.params?.phone_number, setError],
  );
  return (
    <WrapperLayout
      isForForm
      isBgStatusBar
      header={{
        title: '',
        style: {
          backgroundColor: Colors.bg_main,
        },
      }}>
      <KeyboardScrollView
        onPress={handleSubmit(onHandleLogin)}
        loading={loading}
        disabled={loading}>
        <View style={[styleSpacing('mt-40')]}>
          <View style={styles.cenItem}>
            <TextCus useI18n heading1 mb-10>
              auth.login
            </TextCus>
            <TextCus useI18n subtitle mb-30>
              auth.enter_password
            </TextCus>
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
                  ref={refInput}
                  autoCapitalize="none"
                  placeholder={'auth.resetpwd_title'}
                  onChangeText={onChange}
                  value={value}
                  onBlur={onBlur}
                  secureTextEntry
                  isPassword
                  leftIcon={
                    <View style={styles.pr5}>
                      <IconCus
                        style={styles.ml8}
                        name={'lock'}
                        size={18}
                        color={Colors.white}
                      />
                    </View>
                  }
                  error={errors.password?.message as string}
                />
              </>
            )}
          />
        </View>
      </KeyboardScrollView>
    </WrapperLayout>
  );
}
