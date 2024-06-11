import {yupResolver} from '@hookform/resolvers/yup';
import {RouteProp, useIsFocused, useRoute} from '@react-navigation/native';
import {KeyboardScrollView, MainLayout, TextInputs} from 'components';
import {NavigationService, Routes} from 'navigation';
import React, {useCallback, useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {BaseStyle} from 'theme';
import {EAddress, IAddressResult, RootStackParamList, TPicking} from 'types';
import {styleSpacing, yupSchemaAddress} from 'utils';

interface IFormAddress {
  address: string;
  city: IAddressResult;
  district: IAddressResult;
  ward: IAddressResult;
}
const Address: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Address'>>();
  const isFocused = useIsFocused();
  const [pickAddress, setPickAddress] = useState<TPicking | null>(
    route.params.pickAddress ?? null,
  );
  const {
    control,
    formState: {errors},
    handleSubmit,
    setValue,
  } = useForm<IFormAddress>({
    mode: 'onSubmit',
    resolver: yupResolver(yupSchemaAddress),
    defaultValues: {
      address: route.params?.pickAddress?.address ?? '',
      city: route.params?.pickAddress?.city ?? {Name: '', Id: ''},
      district: route.params?.pickAddress?.district ?? {Name: '', Id: ''},
      ward: route.params?.pickAddress?.ward ?? {Name: '', Id: ''},
    },
  });
  useEffect(() => {
    if (isFocused && pickAddress) {
      pickAddress?.city?.Name &&
        setValue(
          'city',
          {
            Name: pickAddress?.city?.Name,
            Id: pickAddress?.city?.Id,
          },
          {
            shouldValidate: true,
          },
        );
      pickAddress?.district?.Name &&
        setValue(
          'district',
          {
            Name: pickAddress?.district?.Name,
            Id: pickAddress.district.Id,
          },
          {
            shouldValidate: true,
          },
        );
      pickAddress?.ward?.Name &&
        setValue(
          'ward',
          {
            Name: pickAddress?.ward?.Name,
            Id: pickAddress?.ward?.Id,
          },
          {
            shouldValidate: true,
          },
        );
    }
  }, [isFocused, pickAddress, setValue]);
  const onHandleAddress = useCallback(
    (value: IFormAddress) => {
      route.params?.callback(value);
      NavigationService.goBack();
    },
    [route.params],
  );
  return (
    <MainLayout showAuthHeader titleAuthHeader="Địa chỉ">
      <KeyboardScrollView
        onPress={handleSubmit(onHandleAddress)}
        disabled={false}
        loading={false}
        textBtn="Cập nhật địa chỉ">
        <View style={styleSpacing('pt-14')}>
          <Controller
            control={control}
            name="address"
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputs
                styleInputContent={[BaseStyle.inputBorderBottom]}
                styleLabel={[styles.label]}
                styleContent={[styles.content]}
                label="kyc.address"
                placeholder="address.place"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.address?.message}
                isRequire
              />
            )}
          />
          <Controller
            control={control}
            name="city"
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputs
                styleContent={[styles.content]}
                styleLabel={[styles.label]}
                styleInputContent={[BaseStyle.inputBorderBottom]}
                label="address.city"
                placeholder="pleaseChoose"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value.Name}
                isViewTouch
                type="none"
                error={errors.city?.Name?.message}
                onPress={() => {
                  NavigationService.navigate(Routes.PickAddress, {
                    tabScreen: EAddress.CITY,
                    setPickAddress,
                    pickAddress,
                  });
                }}
                isRequire
              />
            )}
          />
          <Controller
            control={control}
            name="district"
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputs
                styleContent={[styles.content]}
                styleLabel={[styles.label]}
                styleInputContent={[BaseStyle.inputBorderBottom]}
                label="address.district"
                placeholder="pleaseChoose"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value.Name}
                isViewTouch
                type="none"
                error={errors.district?.Name?.message}
                onPress={() => {
                  NavigationService.navigate(Routes.PickAddress, {
                    tabScreen: EAddress.DISTRICT,
                    setPickAddress,
                    pickAddress,
                  });
                }}
                isRequire
              />
            )}
          />
          <Controller
            control={control}
            name="ward"
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputs
                styleContent={[styles.content]}
                styleLabel={[styles.label]}
                styleInputContent={[BaseStyle.inputBorderBottom]}
                label="address.ward"
                placeholder="pleaseChoose"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value.Name}
                isViewTouch
                type="none"
                error={errors.ward?.Name?.message}
                onPress={() => {
                  NavigationService.navigate(Routes.PickAddress, {
                    tabScreen: EAddress.WARD,
                    setPickAddress,
                    pickAddress,
                  });
                }}
                isRequire
              />
            )}
          />
        </View>
      </KeyboardScrollView>
    </MainLayout>
  );
};
const styles = StyleSheet.create({
  label: {
    ...styleSpacing('mb-0'),
  },
  content: {
    ...styleSpacing('mb-10'),
  },
});
export default Address;
