import {useDispatch, useSelector} from 'react-redux';
import {SearchSelectors} from 'store/search';
import {IProductItem, ISearchParams, ISuggestItem, ITagItem} from 'types';
import {useCallback} from 'react';
import * as SearchActions from 'store/search';
import {API_ENDPOINT} from 'utils';

export const useSearch = () => {
  const dispatch = useDispatch();
  const loading = useSelector(SearchSelectors.getLoading);
  const tags = useSelector(SearchSelectors.getAttrByKey('tags')) as ITagItem[];
  const suggests =
    (useSelector(SearchSelectors.getAttrByKey('suggests')) as ISuggestItem[]) ??
    [];
  const products = useSelector(
    SearchSelectors.getAttrByKey('products'),
  ) as IProductItem[];
  const getListTags = useCallback(() => {
    dispatch(
      SearchActions.getBaseActionsRequest({
        dataKey: 'tags',
        endPoint: API_ENDPOINT.KEYWORD.MAIN,
        type: SearchActions.SearchActions.GET_TAG_ACTION,
      }),
    );
  }, [dispatch]);

  const getListSuggests = useCallback(
    (
      {keyword, ...rest}: ISearchParams,
      callback: (res: ISuggestItem[]) => void,
    ) => {
      dispatch(
        SearchActions.getBaseActionsRequest(
          {
            formData: {...rest},
            endPoint: `${API_ENDPOINT.PRODUCT.SEARCH}/${keyword}`,
            type: SearchActions.SearchActions.GET_SUGGEST_ACTION,
          },
          res => {
            if (res.code === 200) {
              callback?.(res.data);
            }
          },
        ),
      );
    },
    [dispatch],
  );
  const getListProducts = useCallback(
    ({keyword, ...rest}: ISearchParams) => {
      dispatch(
        SearchActions.getBaseActionsRequest({
          dataKey: 'products',
          formData: {...rest},
          endPoint: `${API_ENDPOINT.PRODUCT.SEARCH}/${keyword}`,
          type: SearchActions.SearchActions.GET_SUGGEST_ACTION,
        }),
      );
    },
    [dispatch],
  );
  return {
    tags,
    suggests,
    loading,
    products,
    getListTags,
    getListSuggests,
    getListProducts,
  };
};
