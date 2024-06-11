import {RouteProp, useRoute} from '@react-navigation/native';
import {IconNames, Images} from 'assets';
import {
  Badge,
  Buttons,
  Carousel,
  ImageCus,
  KeyboardScrollView,
  LinearGradientCus,
  RenderHtml,
  TextCus,
  TouchCus,
  WrapperLayout,
} from 'components';
import {BottomSheetController} from 'components/BottomSheet/BottomSheet';
import {useAuth, useCart, useProduct} from 'hooks';
import {NavigationService, Routes} from 'navigation';
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {InteractionManager, StyleSheet, View} from 'react-native';
import {Colors, FontWeight} from 'theme';
import {IGift, IProductPrice, RootStackParamList} from 'types';
import {formatCurrency, styleSpacing, dimensions} from 'utils';
import {BottomSheetProduct, Collapse, Stars, VariantProduct} from './component';
import {IProductRef} from './component/BottomSheetProduct';

const linear = {
  start: {x: 0.6, y: -0.5},
  end: {x: 0.5, y: 1.5},
  locations: [0, 1],
  colors: ['#515159', '#252528'],
};
const {width} = dimensions;

const Product: React.FC = () => {
  const refModal = useRef<IProductRef>(null);
  const route = useRoute<RouteProp<RootStackParamList, 'Product'>>();
  const {getDetailProduct, loading, product, getVariantProduct} = useProduct();
  const {loading: loadingAddCart, getListCarts, addToCart, cart} = useCart();
  const [attributes, setAttributes] = useState<any>([]);
  const [selectingGift, setSelectingGift] = useState<IGift>({} as IGift);
  const [variantDefault, setVariantDefault] = useState<any>({});
  const [isFlag, setIsFlag] = useState(false);
  const {userInfo} = useAuth();
  useEffect(() => {
    setSelectingGift(product?.gifts?.[0]);
  }, [product?.gifts]);

  useEffect(() => {
    getDetailProduct(+route.params.productId);
  }, [getDetailProduct, route.params.productId]);

  useEffect(() => {
    let selectedDefault = {};
    product?.attributes?.forEach(item => {
      const firstItem = item.values.filter(value => value.active)?.[0];
      selectedDefault = {
        ...selectedDefault,
        [item.name]: {
          name: firstItem?.name,
          image: firstItem?.image,
        },
      };
    });
    setVariantDefault(selectedDefault);
    setAttributes(product?.attributes);
  }, [product]);
  const {
    valueVariant,
    imageVariant,
    nameVariant,
    keyVariants,
    valueVariants,
    productPrice,
  } = useMemo(() => {
    const keyVariants = Object.keys(variantDefault) ?? [];
    const valueVariants = Object.values(variantDefault) ?? [];
    const attrName = Object.values(variantDefault)
      .map(item => item.name)
      .join(' / ')
      .trim();
    if (product?.attributes?.length === 0) {
      const {price, price_after_discount, discount, quantity} = product ?? {};
      return {
        productPrice: {
          price,
          price_after_discount,
          discount,
          quantity,
        } as IProductPrice,
      };
    }
    return {
      valueVariant: keyVariants.map(item => item).join(' / '),
      imageVariant: valueVariants.filter(item => item.image)?.[0],
      nameVariant: valueVariants.map(item => item.name).join(' / '),
      keyVariants,
      valueVariants,
      productPrice: product?.product_price?.find(
        item => item.attribute_name === attrName,
      ),
    };
  }, [variantDefault, product]);
  const getVaraintAttributes = useCallback(
    productAttribute => {
      getVariantProduct(
        {
          productId: product?.id,
          productAttribute,
        },
        res => {
          setIsFlag(true);
          setAttributes(res?.attributes);
        },
      );
    },
    [getVariantProduct, product?.id],
  );
  useEffect(() => {
    if (!isFlag) {
      return;
    }
    const attrName = Object.values(variantDefault)
      .map(item => item.name)
      .join(' / ')
      .trim();
    getVaraintAttributes(attrName);
  }, [getVaraintAttributes, isFlag, valueVariants, variantDefault]);
  const onBuyProduct = useCallback(() => {
    if (!userInfo?.id) {
      BottomSheetController.showModal({
        type: 'errors',
        title: 'Bạn chưa đăng nhập',
        subtitle: 'Bạn vui lòng đăng nhập để tiếp tục',
        onOk: () => NavigationService.reset(Routes.Login),
        textOk: 'Đăng nhập',
      });

      return;
    }
    refModal.current?.onCloseModal();
    InteractionManager.runAfterInteractions(() => {
      NavigationService.navigate(Routes.CartOrder, {
        details: [
          {
            id: product?.id,
            product,
            product_attribute_name: productPrice?.attribute_name,
            quantity: refModal.current?.countValue,
            gift: selectingGift,
          },
        ],
        totalPrice:
          productPrice?.price_after_discount * refModal.current?.countValue,
      });
    });
  }, [
    product,
    productPrice?.attribute_name,
    productPrice?.price_after_discount,
    userInfo?.id,
    selectingGift,
  ]);
  const onAddToCart = useCallback(
    (productName: string, giftId: number) => {
      if (!userInfo?.id) {
        BottomSheetController.showModal({
          type: 'errors',
          title: 'Bạn chưa đăng nhập',
          subtitle: 'Bạn vui lòng đăng nhập để tiếp tục',
          onOk: () => NavigationService.reset(Routes.Login),
          textOk: 'Đăng nhập',
        });
        return;
      }
      refModal.current?.onCloseModal();
      addToCart({
        product_id: product?.id,
        quantity: refModal.current?.countValue,
        product_attribute_name: productName,
        ...(giftId ? {gift_id: giftId} : {}),
      });
    },
    [addToCart, product?.id, userInfo?.id],
  );
  return (
    <WrapperLayout
      header={{
        title: 'detail',
        renderRight: () => (
          <Badge
            number={cart?.details?.length}
            icon={IconNames.CART}
            size={24}
            onPress={() => NavigationService.navigate(Routes.Cart)}
          />
        ),
      }}>
      <KeyboardScrollView
        onPress={() => {}}
        styleContent={styles.resetPadding}
        btnBottomCus={
          <>
            <Buttons style={[styles.btn]} onPress={onBuyProduct}>
              <TextCus heading6 bold>
                Mua ngay
              </TextCus>
            </Buttons>
            <Buttons
              style={[styles.btn, {backgroundColor: Colors.disabled}]}
              onPress={() =>
                onAddToCart(productPrice?.attribute_name, selectingGift?.id)
              }>
              <TextCus heading6 bold>
                Thêm vào giỏ hàng
              </TextCus>
            </Buttons>
          </>
        }>
        {product?.images?.length > 0 ? (
          <Carousel>
            {product?.images?.map((item, idx) => (
              <View key={idx}>
                <ImageCus source={{uri: item.url}} style={styles.image} />
              </View>
            ))}
          </Carousel>
        ) : null}
        <View style={styles.contentHeader}>
          <TextCus mt-16 bold heading1>
            {product?.name}
          </TextCus>
          <TextCus my-8 heading6 bold orange>
            {product?.brand_name}
          </TextCus>
          <View style={[styles.flexRow]}>
            <Stars point={product?.rating_point} />
            <TextCus ml-4 mr-8>
              {'|'}
            </TextCus>
            <TextCus>{`Đã bán ${product?.quantity_sold ?? 0}`}</TextCus>
          </View>
          <View
            style={[
              styles.flexRow,
              {
                ...styleSpacing('mt-10'),
              },
            ]}>
            <TextCus heading1 orange>
              {formatCurrency(product?.price_after_discount)}đ
            </TextCus>
            {product?.discount > 0 ? (
              <TextCus subtitle mx-10>
                {formatCurrency(product?.price) + 'đ'}
              </TextCus>
            ) : null}
            {product?.discount > 0 ? (
              <View style={styles.salePercent}>
                <TextCus subtitle orange bold>
                  {product?.discount + '%'}
                </TextCus>
              </View>
            ) : null}
          </View>
          <VariantProduct
            isChecked={product?.attributes?.length === 0}
            image={imageVariant?.image}
            onPress={() => refModal?.current?.onShowModal()}
            renderHeader={
              <TextCus mb-12 heading5>
                {'Thuộc tính sản phẩm'}
              </TextCus>
            }
            renderContent={<TextCus>{valueVariant}</TextCus>}
            renderSubtitle={<TextCus bold>{nameVariant}</TextCus>}
          />
          <VariantProduct
            isChecked={product?.gifts?.length === 0}
            image={selectingGift?.images?.[0].url}
            onPress={() => refModal?.current?.onShowModal()}
            renderHeader={
              <View style={styles.giftTitleRow}>
                <ImageCus
                  source={Images.ic_giftDetail}
                  style={styles.iconGift}
                  resizeMode="contain"
                />
                <TextCus style={styles.giftTitle} heading5>
                  {'Quà tặng'}
                </TextCus>
              </View>
            }
            renderContent={
              <TextCus bold numberOfLines={1}>
                {selectingGift?.name ?? ''}
              </TextCus>
            }
            renderSubtitle={
              <TextCus>
                {'Trị giá: '}
                <TextCus>
                  {formatCurrency(selectingGift?.price_after_discount)}đ
                </TextCus>
              </TextCus>
            }
          />
        </View>
        <Collapse title={'Mô Tả'} content={product?.description} />

        <View style={styles.lineSepator} />
        {/* <Collapse title={'Thông số kỹ thuật'}>
          {product?.specifications?.map((item, index) => {
            return (
              <Fragment key={index}>
                <View style={styles.billLineContainer}>
                  <TextCus style={styles.titleLineBill}>{item?.name}</TextCus>
                  <TextCus style={styles.moneyLineBill}>{item?.value}</TextCus>
                </View>
                <View style={styles.lineSeparator} />
              </Fragment>
            );
          })}
        </Collapse>
        <View style={styles.lineSepator} /> */}
        <Collapse
          title={'Hướng dẫn sử dụng'}
          content={product?.user_manual ?? ''}
        />

        <BottomSheetProduct
          ref={refModal}
          product={product}
          setVariantDefault={setVariantDefault}
          getVaraintAttributes={getVaraintAttributes}
          setSelectingGift={setSelectingGift}
          selectingGift={selectingGift}
          valueVariants={valueVariants}
          attributes={attributes}
          productPrice={productPrice}
          valueVariant={valueVariant}
          nameVariant={nameVariant}
          onAddToCart={onAddToCart}
          onBuyProduct={onBuyProduct}
        />
      </KeyboardScrollView>
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  resetPadding: {
    paddingHorizontal: 0,
  },
  contentAction: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  btn: {
    flex: 1,
    marginHorizontal: 5,
  },
  linear: {
    paddingBottom: 30,
    paddingTop: 10,
  },
  contentHeader: {
    paddingHorizontal: 16,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  salePercent: {
    backgroundColor: 'rgba(237, 27, 36, 0.2)',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  giftTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconGift: {
    width: 24,
    height: 24,
  },
  giftTitle: {
    fontWeight: FontWeight.bold,
    fontSize: 18,
    lineHeight: 24,
    marginLeft: 10,
  },
  billLineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  titleLineBill: {
    color: Colors.white,
    fontSize: 14,
    lineHeight: 20,
  },
  moneyLineBill: {
    color: Colors.white,
    fontSize: 12,
    lineHeight: 20,
  },
  lineSeparator: {
    borderBottomColor: Colors.gallery,
    borderBottomWidth: 2,
  },
  lineSepator: {
    height: 8,
    backgroundColor: Colors.bg_grey,
  },
  image: {
    width: width,
    height: 375,
  },
});
export default Product;
