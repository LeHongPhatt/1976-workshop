import {
  KeyboardScrollView,
  TextCus,
  TextInputs,
  WrapperLayout,
} from 'components';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {FontWeight} from 'theme';
import {styleSpacing} from 'utils';

type IFormOrderPart = {
  type_vehicles: string;
};
const OrderPart: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<IFormOrderPart>({
    mode: 'onSubmit',
    defaultValues: {
      type_vehicles: '',
    },
  });
  return (
    <WrapperLayout
      header={{
        title: 'account.order_part',
      }}>
      <KeyboardScrollView
        styleContent={styles.wrapperScollview}
        textBtn="cart.order"
        isShowIcon>
        <Controller
          name="type_vehicles"
          control={control}
          render={({field: {onChange, value, onBlur}}) => (
            <TextInputs
              styleLabel={[styles.label]}
              styleContent={styles.contentInput}
              label="order_part.type_vehicles"
              placeholder="order_part.choose_type_vehicles"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              isViewTouch
              type="none"
            />
          )}
        />
        <Controller
          name="type_vehicles"
          control={control}
          render={({field: {onChange, value, onBlur}}) => (
            <TextInputs
              styleLabel={[styles.label]}
              styleContent={styles.contentInput}
              label="order_part.year_of_manufacture"
              placeholder="order_part.choose_year_of_manufacture"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              isViewTouch
              type="none"
            />
          )}
        />
        <Controller
          name="type_vehicles"
          control={control}
          render={({field: {onChange, value, onBlur}}) => (
            <TextInputs
              styleLabel={[styles.label]}
              styleContent={styles.contentInput}
              label="order_part.type_part"
              placeholder="order_part.choose_type_part"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              isViewTouch
              type="none"
            />
          )}
        />
        <Controller
          name="type_vehicles"
          control={control}
          render={({field: {onChange, value, onBlur}}) => (
            <TextInputs
              styleLabel={[styles.label]}
              styleContent={styles.contentInput}
              label="order_part.type_color"
              placeholder="order_part.choose_type_color"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              isViewTouch
              type="none"
            />
          )}
        />
        <Controller
          name="type_vehicles"
          control={control}
          render={({field: {onChange, value, onBlur}}) => (
            <TextInputs
              styleLabel={[styles.label]}
              styleContent={styles.contentInput}
              label="order_part.type_price"
              placeholder="order_part.choose_service"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              isViewTouch
            />
          )}
        />
        <Controller
          name="type_vehicles"
          control={control}
          render={({field: {onChange, value, onBlur}}) => (
            <TextInputs
              styleLabel={[styles.label]}
              styleContent={styles.contentInput}
              label="order_part.guarantee"
              placeholder="order_part.choose_guarantee"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              isViewTouch
            />
          )}
        />
      </KeyboardScrollView>
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  wrapperScollview: {
    ...styleSpacing('pt-16'),
    ...styleSpacing('px-16'),
  },
  contentInput: {
    ...styleSpacing('mb-10'),
  },
  label: {
    fontWeight: FontWeight.bold,
  },
});
export default OrderPart;
