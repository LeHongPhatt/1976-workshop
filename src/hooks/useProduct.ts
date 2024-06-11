import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as ProductAction from 'store/product';
import {
  EProductKey,
  ICategory,
  IProductParams,
  IProductItem,
  IVariantProduct,
} from 'types';
import {API_ENDPOINT} from 'utils';
export const useProduct = () => {
  const dispatch = useDispatch();
  const loading = useSelector(ProductAction.ProductSelectors.getLoading);
  const products = useSelector(
    ProductAction.ProductSelectors.getAttrByKey(EProductKey.PRODUCTS),
  );
  const category = useSelector(
    ProductAction.ProductSelectors.getAttrByKey(EProductKey.CATEGORY),
  ) as ICategory;
  const product = useSelector(
    ProductAction.ProductSelectors.getAttrByKey(EProductKey.PRODUCT),
  ) as IProductItem;
  const getListCategories = useCallback(
    categoryId => {
      dispatch(
        ProductAction.getBaseActionsRequest({
          dataKey: EProductKey.CATEGORY,
          endPoint: `${API_ENDPOINT.CATEGORY.MAIN}/${categoryId}`,
          type: ProductAction.ProductActions.GET_LIST_CATEGORY,
        }),
      );
    },
    [dispatch],
  );
  const getListCategoryProducts = useCallback(
    ({categoryId, ...rest}: IProductParams) => {
      dispatch(
        ProductAction.getBaseActionsRequest({
          dataKey: EProductKey.PRODUCTS,
          formData: {...rest},
          endPoint: `${API_ENDPOINT.PRODUCT.PRODUCT_CATEGORY_ALL}/${categoryId}`,
          type: ProductAction.ProductActions.GET_PRODUCT_BY_CATEGORY,
        }),
      );
    },
    [dispatch],
  );
  const getListAllProducts = useCallback(
    ({categoryId, ...rest}: IProductParams) => {
      dispatch(
        ProductAction.getBaseActionsRequest({
          dataKey: EProductKey.PRODUCTS,
          formData: {...rest},
          endPoint: `${API_ENDPOINT.PRODUCT.PRODUCT_CATEGORY_ID}/${categoryId}`,
        }),
      );
    },
    [dispatch],
  );
  const getDetailProduct = useCallback(
    (productId: number) => {
      dispatch(
        ProductAction.getBaseActionsRequest({
          dataKey: EProductKey.PRODUCT,
          endPoint: `${API_ENDPOINT.PRODUCT.DETAIL}/${productId}`,
          type: ProductAction.ProductActions.GET_PRODUCT_DETAIL,
        }),
      );
    },
    [dispatch],
  );
  const getVariantProduct = useCallback(
    (
      {productId, productAttribute}: IVariantProduct,
      callback?: (a: any) => void,
    ) => {
      dispatch(
        ProductAction.getBaseActionsRequest(
          {
            endPoint: `${API_ENDPOINT.PRODUCT.DETAIL}/${productId}`,
            formData: {product_attribute_name: productAttribute},
            type: ProductAction.ProductActions.GET_VARIANT_PRODUCT_DETAIL,
          },
          res => {
            console.log('asjdjasjdjasdjasd', res);
            if (res.code === 200) {
              callback?.(res?.data);
            }
          },
        ),
      );
    },
    [dispatch],
  );
  return {
    loading,
    getListCategories,
    getListAllProducts,
    getListCategoryProducts,
    products,
    category,
    getDetailProduct,
    product,
    getVariantProduct,
  };
};
