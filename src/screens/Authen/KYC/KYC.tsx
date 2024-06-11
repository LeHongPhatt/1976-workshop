import {RouteProp, useRoute} from '@react-navigation/native';
import {
  DatePickerForm,
  KeyboardScrollView,
  MainLayout,
  OptionPickerForm,
  TextInputs,
} from 'components';
import React, {useCallback, useMemo, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View} from 'react-native';
import {
  convertAddress,
  convertStringToAddress,
  formatDMY,
  formatGender,
  formatValueGender,
  styleSpacing,
  yupSchemaInfoUser,
} from 'utils';
import moment from 'moment';
import {
  IAddresses,
  IFormInfoUser,
  IFormRegisterUser,
  RootStackParamList,
  TGenderValue,
  TPicking,
} from 'types';
import {yupResolver} from '@hookform/resolvers/yup';
import {NavigationService, Routes} from 'navigation';
import {ImageCropPicker} from './component';
import {useAuth} from 'hooks';

export default function KYC() {
  const route = useRoute<RouteProp<RootStackParamList, 'KYC'>>();
  const [tempAddress, setTempAddress] = useState<
    TPicking & {
      address: string;
    }
  >();
  const {userInfo, onRegisterUser, onUpdateInfoUser, loading} = useAuth();
  const [addressId, setAddressId] = useState();
  const defaultAddress = useMemo(() => {
    if (!userInfo?.addresses) {
      return {};
    }
    const [address] = userInfo?.addresses?.filter(
      (item: IAddresses) => item.is_default,
    );
    return {
      name: convertAddress(address),
      picking: {
        address: address?.address,
        city: address?.city,
        district: address?.district,
        ward: address?.ward,
      },
    };
  }, [userInfo?.addresses]);
  const {
    control,
    formState: {errors},
    handleSubmit,
    setValue,
  } = useForm<IFormInfoUser>({
    mode: 'onSubmit',
    resolver: yupResolver(yupSchemaInfoUser),
    defaultValues: {
      image: userInfo?.image ?? '',
      name: userInfo?.name ?? '',
      gender: formatValueGender(userInfo?.gender) ?? 'Nữ',
      birthday: formatDMY(userInfo?.birthday) ?? '',
      address: defaultAddress?.name ?? '',
      phone_number: userInfo?.phone_number ?? route.params?.phone_number,
    },
  });
  const onHandleRegisterInfo = useCallback(
    (value: IFormInfoUser) => {
      const form = {
        ...value,
        gender: formatGender(value.gender),
        birthday: moment(value.birthday, 'DD-MM-YYYY HH:mm').toISOString(),
        ...convertStringToAddress(value?.address as string),
        ...route.params,
      };
      onRegisterUser(form as IFormRegisterUser);
    },
    [route.params, onRegisterUser],
  );
  const onHandleUpdateInfo = useCallback(
    (value: IFormInfoUser) => {
      onUpdateInfoUser({
        ...value,
        gender: formatGender(value.gender),
        birthday: moment(value.birthday, 'DD-MM-YYYY HH:mm').toISOString(),
        ...(addressId ? {default_address_id: addressId} : {}),
      });
    },
    [addressId, onUpdateInfoUser],
  );
  return (
    <>
      <MainLayout showAuthHeader titleAuthHeader={'Thông tin tài khoản'}>
        <KeyboardScrollView
          onPress={handleSubmit(
            userInfo?.id ? onHandleUpdateInfo : onHandleRegisterInfo,
          )}
          textBtn="Cập nhật thông tin"
          disabled={loading}
          loading={loading}>
          <ImageCropPicker
            onChangePicture={image => setValue('image', image)}
            control={control}
          />
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputs
                  styleContent={[styleSpacing('mb-10')]}
                  label="kyc.username"
                  isRequire
                  placeholder={'kyc.placeUsername'}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.name?.message as string}
                />
              )}
              name="name"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputs
                  styleContent={[styleSpacing('mb-10')]}
                  label="kyc.phoneNumber"
                  isRequire
                  placeholder={'phone_number'}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.phone_number?.message as string}
                  isDisabled={true}
                  editable={false}
                />
              )}
              name="phone_number"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <DatePickerForm
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  maxDate={moment().format('DD/MM/YYYY')}
                  onConfirmDate={date => {
                    setValue('birthday', moment(date).format('DD/MM/YYYY'), {
                      shouldValidate: true,
                      shouldTouch: true,
                    });
                  }}
                  error={errors.birthday?.message}
                />
              )}
              name="birthday"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <OptionPickerForm
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  dataOptions={['Nam', 'Nữ', 'Khác']}
                  title="Giới tính"
                  onConfirmOption={(gender: TGenderValue) => {
                    setValue('gender', gender);
                  }}
                  error={errors.gender?.message}
                />
              )}
              name="gender"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputs
                  styleContent={[styleSpacing('mb-10')]}
                  label="kyc.address"
                  isRequire
                  placeholder={'kyc.create_address'}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.address?.message as string}
                  type="none"
                  isViewTouch
                  onPress={() =>
                    userInfo?.id
                      ? NavigationService.navigate(Routes.BookAddress, {
                          callback: address => {
                            setAddressId(address.id);
                            setValue('address', convertAddress(address));
                          },
                        })
                      : NavigationService.navigate(Routes.Address, {
                          callback: address => {
                            setValue('address', convertAddress(address));
                            setTempAddress(address);
                          },
                          pickAddress: tempAddress ?? defaultAddress.picking,
                        })
                  }
                  selection={{start: 0}}
                />
              )}
              name="address"
            />
          </View>
        </KeyboardScrollView>
      </MainLayout>
    </>
  );
}
