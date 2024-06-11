import {
  Buttons,
  KeyboardScrollView,
  TextCus,
  TextInputs,
  WrapperLayout,
} from 'components';
import React, {useCallback, useMemo} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {IAddressParams, RootStackParamList} from 'types';
import {
  convertAddress,
  convertStringToAddress,
  styleSpacing,
  yupSchemaBokkAddress,
} from 'utils';
import {Checkbox} from '../component';
import {NavigationService, Routes} from 'navigation';
import {RouteProp, useRoute} from '@react-navigation/native';
import {BaseStyle, Colors, FontWeight} from 'theme';
import {useAddress} from 'hooks';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  closeAlerConfirm,
  showAlertConfirm,
} from 'components/ModalConfirm/ModalConfirm';
import {InteractionManager} from 'react-native';

const DetailAddress: React.FC = () => {
  const {params} = useRoute<RouteProp<RootStackParamList, 'DetailAddress'>>();
  const {onCreateAddress, loading, onUpdateAdress, onDeleteAddress} =
    useAddress();
  const address = useMemo(() => {
    return convertAddress(params?.address);
  }, [params?.address]);
  const isEdit = useMemo(
    () => Boolean(params?.address?.id),
    [params?.address?.id],
  );
  const {
    control,
    formState: {errors},
    handleSubmit,
    setValue,
  } = useForm<IAddressParams>({
    mode: 'onSubmit',
    resolver: yupResolver(yupSchemaBokkAddress),
    defaultValues: {
      address_name: params?.address?.address_name ?? '',
      is_default: params?.address?.is_default ?? false,
      note: params?.address?.note ?? '',
      address: isEdit ? address : '',
      user_name: params?.address?.user_name ?? '',
      user_phone: params?.address?.user_phone ?? '',
    },
  });

  const onHandleCreateAddress = useCallback(
    (value: IAddressParams) => {
      if (isEdit) {
        onUpdateAdress({
          ...value,
          ...convertStringToAddress(value.address),
          addressId: params?.address?.id,
        });
        return;
      }
      onCreateAddress({
        ...value,
        ...convertStringToAddress(value.address),
      });
    },
    [isEdit, onCreateAddress, onUpdateAdress, params?.address?.id],
  );
  return (
    <WrapperLayout
      isForForm={true}
      header={{
        title: isEdit ? 'account.update_address' : 'account.create_address',
      }}>
      <KeyboardScrollView
        onPress={handleSubmit(onHandleCreateAddress)}
        disabled={loading}
        loading={loading}
        textBtn={isEdit ? 'account.update_address' : 'account.create_address'}
        styleContent={styles.pH16}>
        <View style={styleSpacing('pt-14')}>
          <Controller
            control={control}
            name="address_name"
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputs
                styleInput={[styles.textInput]}
                styleInputContent={[BaseStyle.inputBorderBottom]}
                styleLabel={[styles.label]}
                styleContent={[styles.content]}
                label="address.name"
                placeholder="address.enter_address"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.address_name?.message}
                isRequire
              />
            )}
          />
          <Controller
            control={control}
            name="user_name"
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputs
                styleInput={[styles.textInput]}
                styleInputContent={[BaseStyle.inputBorderBottom]}
                styleLabel={[styles.label]}
                styleContent={[styles.content]}
                label="kyc.username"
                placeholder="kyc.placeUsername"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.user_name?.message}
                isRequire
              />
            )}
          />
          <Controller
            control={control}
            name="user_phone"
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputs
                styleInput={[styles.textInput]}
                styleInputContent={[BaseStyle.inputBorderBottom]}
                styleLabel={[styles.label]}
                styleContent={[styles.content]}
                label="kyc.phoneNumber"
                placeholder="kyc.enter_phone"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.user_phone?.message}
                keyboardType={'phone-pad'}
                isRequire
              />
            )}
          />
          <Controller
            control={control}
            name="address"
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputs
                styleInput={[styles.textInput]}
                styleInputContent={[BaseStyle.inputBorderBottom]}
                styleLabel={[styles.label]}
                styleContent={[styles.content]}
                label="kyc.address"
                placeholder="address.place"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.address?.message}
                isViewTouch
                type="none"
                onPress={() => {
                  const {address: add, city, district, ward} = params.address;
                  NavigationService.navigate(Routes.Address, {
                    callback: item => {
                      setValue('address', convertAddress(item));
                      setValue('city', item.city?.Name);
                      setValue('district', item.district?.Name);
                      setValue('ward', item.ward?.Name);
                    },
                    pickAddress: {
                      address: add,
                      city,
                      district,
                      ward,
                    },
                  });
                }}
                isRequire
                selection={{start: 0}}
              />
            )}
          />
          <Controller
            control={control}
            name="note"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputs
                styleInput={[styles.textInput]}
                styleInputContent={[BaseStyle.inputBorderBottom]}
                styleLabel={[styles.label]}
                styleContent={[styles.content]}
                label="note.delivery"
                placeholder="note.enter_delivery"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="is_default"
            render={({field: {value, onChange}}) => (
              <Checkbox onChange={onChange} value={value} />
            )}
          />
          {!params.address.is_default && isEdit ? (
            <Buttons
              style={styles.btnDelete}
              onPress={() =>
                showAlertConfirm({
                  title: 'address.warning_delete_address',
                  onOk: handleSubmit(() =>
                    onDeleteAddress({addressId: params.address.id}, () => {
                      closeAlerConfirm();
                      InteractionManager.runAfterInteractions(() => {
                        NavigationService.goBack();
                      });
                    }),
                  ),
                })
              }>
              <TextCus useI18n bold orange>
                account.delete_address
              </TextCus>
            </Buttons>
          ) : null}
        </View>
      </KeyboardScrollView>
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  label: {
    ...styleSpacing('mb-0'),
  },
  content: {
    ...styleSpacing('mb-10'),
  },
  pH16: {
    ...styleSpacing('px-16'),
  },
  textInput: {
    fontWeight: FontWeight.bold,
  },
  btnDelete: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.main,
    marginTop: 20,
  },
});
export default DetailAddress;
