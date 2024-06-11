import {
  CountDown,
  InputOtp,
  KeyboardScrollView,
  TextCus,
  TouchCus,
  WrapperLayout,
} from 'components';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View} from 'react-native';
import {CountDownRef, RootStackParamList} from 'types';
import styles from './styles';
import {styleSpacing, yupSchemaOtp} from 'utils';
import {useAuth} from 'hooks';
import {RouteProp, useRoute} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';
import {Colors} from 'theme';

type IFormOTP = {
  optInput: string;
};
export default function OTP() {
  const route = useRoute<RouteProp<RootStackParamList, 'OTP'>>();
  const [timeUp, setTimeUp] = useState(false);
  const [reset, setReset] = useState(false);
  const refCountdown = useRef<CountDownRef>(null);
  const {
    control,
    formState: {errors},
    handleSubmit,
    setValue,
    setError,
  } = useForm<IFormOTP>({
    resolver: yupResolver(yupSchemaOtp),
    mode: 'onSubmit',
    resolver: yupResolver(yupSchemaOtp),
    defaultValues: {
      optInput: '',
    },
  });
  const {onRequestOTP, onVerifyOTP, loading} = useAuth();
  useEffect(() => {
    onRequestOTP({
      phone_number: route.params?.phone_number,
      otp_type: 'sign_up',
    });
    refCountdown.current?.setStart();
  }, [onRequestOTP]);

  const onHanleCheckOtp = useCallback(
    (value: IFormOTP) => {
      onVerifyOTP(
        {
          ...route.params,
          otp_type: 'sign_up',
          otp_code: value.optInput,
        },
        res => setError('optInput', {message: res}),
      );
    },
    [onVerifyOTP, route.params, setError],
  );
  const onTimeup = () => {
    setTimeUp(!timeUp);
  };
  const onPressResend = () => {
    setTimeUp(!timeUp);
    setReset(!reset);
    refCountdown.current?.setStart();
  };
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
        onPress={handleSubmit(onHanleCheckOtp)}
        loading={loading}
        textBtn="Xác thực số điện thoại">
        <View style={[styleSpacing('mt-30')]}>
          <View style={styles.wrapLogo}>
            <TextCus heading1 useI18n mb-10>
              auth.otp_title
            </TextCus>
            <TextCus useI18n subtitle>
              auth.otp_subtitle
            </TextCus>
            {route.params?.phone_number ? (
              <TextCus bold>{route.params?.phone_number}</TextCus>
            ) : null}
          </View>
          {errors.optInput?.message ? (
            <TextCus textAlign="center" bold subtitle orange mb-20>
              {errors.optInput?.message}
            </TextCus>
          ) : null}
          <Controller
            control={control}
            name="optInput"
            rules={{
              required: true,
            }}
            render={({field: {onChange}}) => (
              <InputOtp
                onChange={onChange}
                pinCount={6}
                onCodeFilled={code =>
                  setValue('optInput', code, {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
                error={errors.optInput?.message}
              />
            )}
          />
          <View style={[styles.timeOtp, styleSpacing('pt-20')]}>
            <TextCus mr-5 bold>
              Hiệu lực
            </TextCus>
            {timeUp ? (
              <TouchCus onPress={() => onPressResend()}>
                <TextCus orange bold>
                  Gửi lại
                </TextCus>
              </TouchCus>
            ) : (
              <CountDown
                initialSeconds={120}
                onTimeup={onTimeup}
                ref={refCountdown}
                reset={reset}
              />
            )}
          </View>
        </View>
      </KeyboardScrollView>
    </WrapperLayout>
  );
}
