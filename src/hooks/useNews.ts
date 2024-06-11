import {API_ENDPOINT} from 'utils';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NewsSelectors} from 'store/news';
import * as NewsActions from 'store/news';
import {INewsParams, IDetailNewsParams} from 'types';

export const useNews = () => {
  const dispatch = useDispatch();
  const loading = useSelector(NewsSelectors.getLoading);

  const listAllNews =
    useSelector(NewsSelectors.getAttrByKey('listAllNews')) || [];
  const listCategoryNews =
    useSelector(NewsSelectors.getAttrByKey('listCategoryNews')) || [];

  const detailNews =
    useSelector(NewsSelectors.getAttrByKey('detailNews')) || {};

  const getListCategoryNews = useCallback(
    ({category_id, page, limit}: INewsParams) => {
      try {
        dispatch(
          NewsActions.getBaseActionsRequest({
            dataKey: 'listCategoryNews',
            formData: undefined,
            endPoint: `${API_ENDPOINT.NEWS.CATEGORY}/${category_id}?page=${page}&limit=${limit}`,
          }),
        );
      } catch (error) {}
    },
    [dispatch],
  );

  const getDetailNews = useCallback(
    ({news_id}: IDetailNewsParams) => {
      try {
        dispatch(
          NewsActions.getBaseActionsRequest({
            dataKey: 'detailNews',
            formData: undefined,
            endPoint: `${API_ENDPOINT.NEWS.MAIN}/${news_id}`,
          }),
        );
      } catch (error) {}
    },
    [dispatch],
  );

  const getListAllNews = useCallback(
    ({page, limit}: Omit<INewsParams, 'category_id'>) => {
      try {
        dispatch(
          NewsActions.getBaseActionsRequest({
            dataKey: 'listAllNews',
            formData: undefined,
            endPoint: `${API_ENDPOINT.NEWS.MAIN}?page=${page}&limit=${limit}`,
          }),
        );
      } catch (error) {}
    },
    [dispatch],
  );

  return {
    getListCategoryNews,
    getDetailNews,
    getListAllNews,
    listAllNews,
    detailNews,
    listCategoryNews,
    loading,
  };
};
