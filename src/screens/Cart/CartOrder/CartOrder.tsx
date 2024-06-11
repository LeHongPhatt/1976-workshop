import {
  Buttons,
  Flatlist,
  KeyboardScrollView,
  TextCus,
  TextInputs,
  WrapperLayout,
} from 'components';
import React, {useCallback, useMemo, useState} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Divider} from 'react-native-paper';
import Icon from 'assets/svg/Icon';
import {convertAddress, formatCurrency, getHeight, styleSpacing} from 'utils';
import {NavigationService, Routes} from 'navigation';
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  IAddresses,
  IBranch,
  IOrderCartParams,
  IPromotion,
  RootStackParamList,
} from 'types';
import {useTranslation} from 'react-i18next';
import {LocationInfo, OrderItem, styles} from '../component';
import {useAuth, useCartOrder} from 'hooks';

const CartOrder: React.FC = () => {
  const router = useRoute<RouteProp<RootStackParamList, 'CartOrder'>>();
  const {t} = useTranslation();
  const {defaultAddress, userInfo} = useAuth();
  const {getPromotion, loading, postOrderCart} = useCartOrder();
  const [branch, setBranch] = useState<IBranch>({} as IBranch);
  const [address, setAddress] = useState<IAddresses>({} as IAddresses);
  const [valuePromotion, setValuePromotion] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string>('');
  const [promotion, setPromotion] = useState<IPromotion>({} as IPromotion);
  const onChooseAddress = useCallback(() => {
    NavigationService.navigate(Routes.BookAddress, {
      callback: item => {
        setAddress(item);
        NavigationService.goBack();
      },
      isOrder: true,
    });
  }, []);
  const discountPrice = useMemo(() => {
    if (!promotion?.value) {
      return 0;
    }
    return promotion?.is_percent
      ? (router?.params?.totalPrice * promotion?.value) / 100
      : promotion.value;
  }, [promotion.value, promotion?.is_percent, router?.params?.totalPrice]);

  const totalPrice = useMemo(() => {
    const total = router.params.totalPrice - discountPrice;
    return total > 0 ? total : 0;
  }, [discountPrice, router.params.totalPrice]);

  const onHandleOrderCart = useCallback(() => {
    const form = {
      user_address_id: address?.id ?? defaultAddress?.id,
      branch_address_id: branch?.id,
      description,
      totalPrice,
      details: [...router?.params?.details].map(item => ({
        product_attribute_name: item?.product_attribute_name,
        product_id: item?.product?.id,
        quantity: item?.quantity,
        ...(item?.gift ? {gift_id: item?.gift?.id} : {}),
      })),
      ...(promotion?.code && {discount_code: promotion.code}),
    };
    postOrderCart(form as IOrderCartParams);
  }, [
    address?.id,
    branch?.id,
    defaultAddress?.id,
    description,
    promotion,
    router?.params?.details,
    totalPrice,
    postOrderCart,
  ]);

  const onCheckPromotion = useCallback(
    discount => {
      if (!discount) {
        setError(t('validate_promotion') as string);
        return;
      }
      setError('');
      getPromotion(discount, res => {
        if (res?.id) {
          setPromotion(res);
          return;
        }
        setError(res);
      });
    },
    [getPromotion, t],
  );

  const ListHeaderComponent = useCallback(() => {
    return (
      <>
        <View style={styles.p16}>
          <TouchableWithoutFeedback onPress={onChooseAddress}>
            <View>
              <LocationInfo
                type="location"
                action={
                  <Buttons
                    style={styles.changeLocationBtn}
                    onPress={onChooseAddress}>
                    <TextCus orange caption>
                      Thay đổi
                    </TextCus>
                  </Buttons>
                }
                title={
                  address?.id
                    ? `${address?.user_name} - ${address?.user_phone}`
                    : `${userInfo?.name} - ${userInfo.phone_number}`
                }
                subTitle={
                  address?.id ? convertAddress(address) : defaultAddress?.name
                }
              />
            </View>
          </TouchableWithoutFeedback>
          <Divider style={styles.mV12} />
          <TouchableWithoutFeedback
            onPress={() =>
              NavigationService.navigate(Routes.Branch, {
                user_latitude: defaultAddress?.latitude,
                user_longitude: defaultAddress?.longitude,
                callback: item => {
                  setBranch(item);
                  NavigationService.goBack();
                },
              })
            }>
            <View>
              <LocationInfo
                type="branch"
                action={<Icon.ChevronRight />}
                iconInfo
                title={branch.name}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={[getHeight(8), styles.bgGrey]} />
        <View style={[styles.p16, styles.pb8]}>
          <TextCus bold>
            {t('choose_product', {product: router.params?.details?.length})}
          </TextCus>
        </View>
      </>
    );
  }, [
    address,
    branch.name,
    defaultAddress,
    onChooseAddress,
    router.params.details,
    t,
    userInfo,
  ]);
  const ListFooterComponent = useCallback(
    ({discount, setDiscount, note, setNote, errorMessage}: any) => {
      return (
        <View>
          {/* Start Note */}
          <>
            <TextCus style={[styles.bgGrey, styles.pH16, styles.pV8]}>
              Ghi chú (không bắt buộc)
            </TextCus>
            <View style={[styles.p16]}>
              <TextInputs
                placeholder={t('enter_service')}
                onChangeText={setNote}
                value={note}
              />
            </View>
          </>
          {/* End Note */}
          <View style={[getHeight(8), styles.bgGrey]} />
          {/* Start Promotion */}
          <View style={styles.p16}>
            <TextCus bold useI18n>
              promotion
            </TextCus>
            <View style={[styles.pV8, styles.flexRow]}>
              <View style={styles.flx}>
                <TextInputs
                  styleInput={{...styleSpacing('px-10')}}
                  styleInputContent={styles.resetBorder}
                  leftIcon={<Icon.Voucher />}
                  placeholder={t('enter_promotion')}
                  onChangeText={setDiscount}
                  value={discount}
                  autoCapitalize={'characters'}
                />
              </View>
              <Buttons
                style={[
                  styles.pH24,
                  styles.pV12,
                  styles.brLeft,
                  styles.alignCenter,
                ]}
                onPress={() => onCheckPromotion(discount)}>
                <TextCus bold useI18n>
                  apply
                </TextCus>
              </Buttons>
            </View>
            {errorMessage && (
              <TextCus subtitle error>
                {errorMessage}
              </TextCus>
            )}
          </View>
          {/* End Promotion */}
          <View style={[getHeight(8), styles.bgGrey]} />
          {/* Start Payment */}
          <View style={styles.p16}>
            <TextCus bold style={styles.mb12} useI18n>
              bill
            </TextCus>
            <View style={[styles.flexRow, styles.justBetween]}>
              <TextCus subtitle bold useI18n>
                bill
              </TextCus>
              <TextCus subtitle bold>
                {formatCurrency(router.params.totalPrice)}đ
              </TextCus>
            </View>
            <Divider style={styles.mV12} />
            <View style={[styles.flexRow, styles.justBetween]}>
              <TextCus subtitle bold useI18n>
                discount_promotion
              </TextCus>
              <TextCus subtitle bold>
                {discountPrice === 0
                  ? '0'
                  : '-' + formatCurrency(discountPrice)}
                đ
              </TextCus>
            </View>
          </View>
        </View>
      );
    },
    [t, router.params.totalPrice, discountPrice, onCheckPromotion],
  );
  const renderItem = useCallback(item => {
    return (
      <View style={[styles.pH16]}>
        <OrderItem {...item} />
      </View>
    );
  }, []);
  return (
    <WrapperLayout
      header={{
        title: 'account.order',
      }}>
      <KeyboardScrollView
        onPress={() => {}}
        styleContent={styles.pH0}
        btnBottomCus={
          <>
            <View style={styles.flx}>
              <TextCus subtitle useI18n>
                cart.total
              </TextCus>
              <TextCus orange bold>
                {formatCurrency(totalPrice)}₫{' '}
                <TextCus>
                  {t('quantity_product', {
                    product: router.params?.details?.length,
                  })}
                </TextCus>
              </TextCus>
            </View>
            <Buttons
              style={[styles.pH24, styles.pV12]}
              disabled={!branch?.id}
              onPress={onHandleOrderCart}>
              <TextCus bold useI18n>
                cart.order
              </TextCus>
            </Buttons>
          </>
        }>
        <Flatlist
          data={router.params?.details}
          renderItem={({item}) => renderItem(item)}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={
            <ListFooterComponent
              discount={valuePromotion}
              setDiscount={setValuePromotion}
              note={description}
              setNote={setDescription}
              errorMessage={error}
            />
          }
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
        />
      </KeyboardScrollView>
    </WrapperLayout>
  );
};
export default CartOrder;
