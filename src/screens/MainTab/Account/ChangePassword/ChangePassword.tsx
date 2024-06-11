import {yupResolver} from '@hookform/resolvers/yup';
import {ButtonBottom, TextInputs, WrapperLayout} from 'components';
import {useAccount} from 'hooks';
import React, {Fragment, useCallback} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, StyleSheet} from 'react-native';
import {styleSpacing, yupChangePasswordSchema} from 'utils';
interface IFormChangePaswword {
  old_password: string;
  new_password: string;
  confirm_password: string;
}
const ChangePassword: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormChangePaswword>({
    mode: 'onSubmit',
    resolver: yupResolver(yupChangePasswordSchema),
    defaultValues: {
      old_password: '',
      new_password: '',
      confirm_password: '',
    },
  });
  const {onHanldeChangePassword, loading} = useAccount();
  const onChangePassword = useCallback(
    (value: IFormChangePaswword) => {
      const {old_password, new_password} = value;
      onHanldeChangePassword({
        old_password,
        new_password,
      });
    },
    [onHanldeChangePassword],
  );
  return (
    <WrapperLayout
      header={{
        title: 'account.change_password',
      }}>
      <Fragment>
        <ScrollView style={styles.container}>
          <Controller
            control={control}
            name="old_password"
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputs
                styleContent={[styles.content]}
                styleLabel={[styles.label]}
                label="account.current_password"
                placeholder="account.place_current_password"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.old_password?.message}
                isPassword
              />
            )}
          />
          <Controller
            control={control}
            name="new_password"
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputs
                styleContent={[styles.content]}
                styleLabel={[styles.label]}
                label="account.new_password"
                placeholder="account.place_new_password"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.new_password?.message}
                isPassword
              />
            )}
          />
          <Controller
            control={control}
            name="confirm_password"
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputs
                styleContent={[styles.content]}
                styleLabel={[styles.label]}
                placeholder="account.place_confirm_password"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.confirm_password?.message}
                label="account.new_password"
                isPassword
              />
            )}
          />
        </ScrollView>
        <ButtonBottom
          onPress={handleSubmit(onChangePassword)}
          textBtn="account.change_password"
          loading={loading}
          disabled={loading}
        />
      </Fragment>
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...styleSpacing('px-16'),
    ...styleSpacing('pt-16'),
  },
  label: {
    ...styleSpacing('mb-10'),
  },
  content: {
    ...styleSpacing('mb-10'),
  },
});
export default ChangePassword;
