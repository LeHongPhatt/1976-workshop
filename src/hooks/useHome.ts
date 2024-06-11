import {IBanner} from './../types/home';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {HomeSelectors} from 'store/home';
import * as HomeActions from 'store/home';
import {API_ENDPOINT} from 'utils';
export const useHome = () => {
  const dispatch = useDispatch();
  const loading = useSelector(HomeSelectors.getLoading);
  const categories =
    useSelector(HomeSelectors.getAttrByKey('categories')) || [];
  const banners = useSelector(
    HomeSelectors.getAttrByKey('banners'),
  ) as IBanner[];
  const getListCategoryHome = useCallback(() => {
    dispatch(
      HomeActions.getBaseActionsRequest({
        dataKey: 'categories',
        formData: undefined,
        endPoint: API_ENDPOINT.CATEGORY.MAIN,
      }),
    );
  }, [dispatch]);
  const getListBannerHome = useCallback(() => {
    dispatch(
      HomeActions.getBaseActionsRequest({
        dataKey: 'banners',
        formData: {page: 1, limit: 10},
        endPoint: API_ENDPOINT.BANNER.MAIN,
        type: HomeActions.HomeActions.GET_LIST_BANNER_ACTIONS,
      }),
    );
  }, [dispatch]);
  return {
    loading,
    getListCategoryHome,
    categories,
    getListBannerHome,
    banners,
  };
};
