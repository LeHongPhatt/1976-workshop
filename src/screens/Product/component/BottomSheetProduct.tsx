import {View, StyleSheet, ScrollView} from 'react-native';
import {
  BottomSheetModals,
  IconApp,
  ImageCus,
  LinearGradientCus,
  TextCus,
  TouchCus,
} from 'components';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {BaseStyle, Colors} from 'theme';
import {IconNames} from 'assets';
import {formatCurrency} from 'utils';
import {IGift, IProductItem} from 'types';
import VariantList from './VariantList';

export interface IProductRef {
  onShowModal: () => void;
  onCloseModal: () => void;
  resetCount: () => void;
  countValue: number;
}
interface IProps {
  product: IProductItem;
  setVariantDefault: any;
  getVaraintAttributes: (value: string) => void;
  setSelectingGift: any;
  selectingGift: IGift;
  valueVariants: any;
  attributes: any;
  productPrice: any;
  valueVariant: any;
  nameVariant: string;
  onAddToCart: (productName: string, giftId: number) => void;
  onBuyProduct: () => void;
}
const linear = {
  start: {x: 0.55, y: -1},
  end: {x: 0.5, y: 0.8},
  locations: [0, 1],
  colors: ['#515159', '#252528'],
};
const BottomSheetProduct = forwardRef<IProductRef, IProps>(
  (
    {
      product,
      setVariantDefault,
      getVaraintAttributes,
      setSelectingGift,
      selectingGift,
      valueVariants,
      attributes,
      productPrice,
      valueVariant,
      nameVariant,
      onAddToCart,
      onBuyProduct,
    },
    ref,
  ) => {
    const refModal = useRef<BottomSheet>(null);
    const [countValue, setCountValue] = useState<number>(1);
    useImperativeHandle(ref, () => {
      return {
        onShowModal,
        onCloseModal,
        resetCount,
        countValue,
      };
    });

    const onCloseModal = () => {
      refModal.current?.close();
      resetCount();
    };
    const onShowModal = () => refModal.current?.snapToIndex(0);
    const decreaseCountValue = useCallback(() => {
      if (countValue > 1) {
        setCountValue(countValue - 1);
      }
    }, [countValue]);
    const increaseCountValue = useCallback(() => {
      setCountValue(countValue + 1);
    }, [countValue]);
    const resetCount = useCallback(() => {
      setCountValue(1);
    }, []);
    return (
      <BottomSheetModals
        ref={refModal}
        pressBehavior={'close'}
        snapPoint={['85%']}>
        <View style={styles.btsHeader}>
          <View style={styles.header}>
            <View />
            <TextCus bold heading5 textAlign="center">
              {'Lựa Chọn Phiên Bản'}
            </TextCus>
            <TouchCus onPress={onCloseModal}>
              <IconApp name={IconNames.REMOVE} size={24} color={Colors.white} />
            </TouchCus>
          </View>
          <ScrollView style={{flexGrow: 1}}>
            <View style={styles.propertyGeneral}>
              <ImageCus
                source={{uri: product?.images?.[0].url}}
                resizeMode="contain"
                style={styles.mainImage}
              />
              <View style={{marginLeft: 8, flex: 1}}>
                <TextCus bold>{product?.name}</TextCus>
                <TextCus mt-8 style={{color: Colors.color_84}}>
                  {valueVariant}
                  <TextCus>: {nameVariant}</TextCus>
                </TextCus>
                <View style={styles.bottomProductPriceArea}>
                  <TextCus mr-8 bold>
                    {formatCurrency(productPrice?.price_after_discount) + 'đ'}
                  </TextCus>
                  {productPrice?.discount > 0 ? (
                    <TextCus
                      mr-8
                      style={[
                        {color: Colors.color_84},
                        BaseStyle.lineThrought,
                      ]}>
                      {formatCurrency(productPrice?.price) + 'đ'}
                    </TextCus>
                  ) : null}
                  {productPrice?.discount > 0 ? (
                    <View style={styles.salePercent}>
                      <TextCus bold>{productPrice?.discount + '%'}</TextCus>
                    </View>
                  ) : null}
                </View>
              </View>
            </View>
            {attributes?.length > 0
              ? attributes.map((attribute, index) => {
                  return (
                    <VariantList
                      key={index}
                      variants={attribute.values}
                      title={attribute.name}
                      name={valueVariants?.[index]?.name}
                      onChooseVariant={variant => {
                        const firstAttribute = attributes?.[0]?.values;
                        if (
                          firstAttribute?.some(
                            attr => attr.name === variant.name,
                          )
                        ) {
                          getVaraintAttributes(variant.name);
                          setVariantDefault({
                            [attribute.name]: {
                              name: variant.name,
                              image: variant.image,
                            },
                          });
                        }
                        setVariantDefault(prev => ({
                          ...prev,
                          [attribute.name]: {
                            name: variant?.name,
                            image: variant?.image,
                          },
                        }));
                      }}
                      selected={valueVariants?.[index]?.name}
                    />
                  );
                })
              : null}
            {product?.gifts?.length > 0 ? (
              <VariantList
                variants={product?.gifts.map(item => ({...item, active: true}))}
                title={'Quà tặng'}
                name={selectingGift?.name}
                onChooseVariant={variant => {
                  setSelectingGift(variant);
                }}
                selected={selectingGift?.name}
              />
            ) : null}
          </ScrollView>

          <LinearGradientCus
            linear={linear}
            styleLinear={[styles.spacing16, styles.flexPrice]}>
            <View style={styles.amountArea}>
              <View style={styles.amountLeft}>
                <TextCus mr-12 bold>
                  {'Số lượng'}
                </TextCus>
              </View>
              <View style={styles.actionPrice}>
                <TouchCus
                  style={styles.adjustBtn}
                  onPress={decreaseCountValue}
                  activeOpacity={0.8}>
                  <IconApp
                    name={IconNames.MINUS}
                    style={[
                      {
                        color: countValue > 1 ? Colors.main : Colors.disabled,
                      },
                    ]}
                    size={24}
                  />
                </TouchCus>
                <TextCus mx-12 bold style={styles.countValue}>
                  {countValue}
                </TextCus>
                <TouchCus
                  style={styles.adjustBtn}
                  onPress={increaseCountValue}
                  activeOpacity={0.8}>
                  <IconApp
                    name={IconNames.PLUS}
                    style={[
                      {
                        color: Colors.main,
                      },
                    ]}
                    size={24}
                  />
                </TouchCus>
              </View>
            </View>
            <View style={styles.actionBtn}>
              <TouchCus
                style={[
                  styles.actionBtnBuy,
                  {
                    backgroundColor: Colors.main,
                  },
                ]}
                onPress={onBuyProduct}>
                <TextCus heading6 bold textAlign="center">
                  {'Mua ngay'}
                </TextCus>
              </TouchCus>
              <TouchCus
                style={[
                  styles.actionBtnBuy,
                  {
                    backgroundColor: Colors.disabled,
                  },
                ]}
                onPress={() =>
                  onAddToCart(productPrice?.attribute_name, selectingGift?.id)
                }>
                <TextCus heading6 bold textAlign="center">
                  {'Thêm giỏ hàng'}
                </TextCus>
              </TouchCus>
            </View>
          </LinearGradientCus>
        </View>
      </BottomSheetModals>
    );
  },
);
const styles = StyleSheet.create({
  btsHeader: {
    flex: 1,
    backgroundColor: Colors.bg_main,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: Colors.color_33,
  },
  adjustBtn: {},
  amountArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  amountLeft: {},
  countValue: {
    width: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  actionPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spacing16: {
    paddingHorizontal: 16,
  },
  flexPrice: {
    paddingBottom: 30,
    paddingTop: 10,
  },
  actionBtn: {
    flexDirection: 'row',
  },
  actionBtnBuy: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 10,
  },
  iconCount: {
    width: 24,
    height: 24,
  },
  salePercent: {
    backgroundColor: 'rgba(237, 27, 36, 0.1)',
    borderRadius: 2,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  mainImage: {
    width: 92,
    height: 92,
    aspectRatio: 1,
  },
  propertyGeneral: {
    padding: 16,
    flexDirection: 'row',
    borderBottomColor: Colors.gallery,
    borderBottomWidth: 1,
  },
  bottomProductPriceArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});
export default BottomSheetProduct;
